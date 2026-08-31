#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const fixture = path.join(root, 'tests', 'integrity-eval-cases.json');
const CONFIDENCE = ['PLANNED', 'SELF-REPORTED', 'SUPPORTED', 'VERIFIED'];
const STATUS = ['PLANNED', 'IN_PROGRESS', 'SUBMITTED', 'MERGED', 'COMPLETED'];
const ENV_RANK = { idea: 0, prototype: 1, simulation: 1, backtest: 1, staging: 2, production: 3 };

function loadCases() {
  const data = JSON.parse(fs.readFileSync(fixture, 'utf8'));
  if (data.schema_version !== '1.0') throw new Error('integrity schema_version must be 1.0');
  if (!Array.isArray(data.cases) || data.cases.length === 0) throw new Error('integrity cases must be non-empty');
  return data.cases;
}

function canUpgrade(output) {
  return output.transition_authority === 'proof' && output.new_direct_evidence === true;
}

function evaluate(testCase) {
  const input = testCase.input ?? {};
  const output = testCase.output ?? {};
  const errors = new Set();
  const proofUpgrade = canUpgrade(output);

  if (!CONFIDENCE.includes(input.confidence) || !CONFIDENCE.includes(output.confidence)) errors.add('INVALID_CONFIDENCE');
  if (!STATUS.includes(input.status) || !STATUS.includes(output.status)) errors.add('INVALID_STATUS');

  const inputConfidence = CONFIDENCE.indexOf(input.confidence);
  const outputConfidence = CONFIDENCE.indexOf(output.confidence);
  if (outputConfidence > inputConfidence && !proofUpgrade) errors.add('CONFIDENCE_ESCALATION');

  if (input.status === 'PLANNED' && ['MERGED', 'COMPLETED'].includes(output.status) && !proofUpgrade) {
    errors.add('PLANNED_PROMOTED');
  }

  const beforeOwnership = new Set(input.ownership ?? []);
  const addedOwnership = (output.ownership ?? []).filter((item) => !beforeOwnership.has(item));
  if (addedOwnership.length && !proofUpgrade) errors.add('OWNERSHIP_EXPANSION');

  if (input.environment && output.environment) {
    const before = ENV_RANK[input.environment] ?? 0;
    const after = ENV_RANK[output.environment] ?? 0;
    if (after > before && !proofUpgrade) errors.add('ENVIRONMENT_ESCALATION');
  }

  const beforeUncertainty = new Set(input.context_uncertainty ?? []);
  const afterUncertainty = new Set(output.context_uncertainty ?? []);
  const dropped = [...beforeUncertainty].filter((item) => !afterUncertainty.has(item));
  if (dropped.length && !proofUpgrade) errors.add('UNCERTAINTY_DROPPED');

  return [...errors].sort();
}

let failures = 0;
for (const testCase of loadCases()) {
  const actual = evaluate(testCase);
  const expected = [...(testCase.expected_error_codes ?? [])].sort();
  const valid = actual.length === 0;
  const expectedValid = testCase.expected_valid === true;
  const matches = valid === expectedValid && JSON.stringify(actual) === JSON.stringify(expected);

  if (matches) {
    console.log(`PASS: ${testCase.name}`);
  } else {
    failures += 1;
    console.error(`FAIL: ${testCase.name}`);
    console.error(`  expected valid: ${expectedValid}`);
    console.error(`  actual valid:   ${valid}`);
    console.error(`  expected: ${JSON.stringify(expected)}`);
    console.error(`  actual:   ${JSON.stringify(actual)}`);
  }
}

if (failures) {
  console.error(`\nCareer Integrity Benchmark failed: ${failures} case(s).`);
  process.exit(1);
}

console.log('\nCareer Integrity Benchmark passed. No tested claim was silently upgraded.');
