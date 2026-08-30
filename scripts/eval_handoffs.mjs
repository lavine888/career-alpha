#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const fixture = path.join(root, 'tests', 'handoff-contract-cases.json');

const CONFIDENCE = ['PLANNED', 'SELF-REPORTED', 'SUPPORTED', 'VERIFIED'];
const STATUS = ['PLANNED', 'IN_PROGRESS', 'SUBMITTED', 'MERGED', 'COMPLETED'];

function loadCases() {
  if (!fs.existsSync(fixture)) throw new Error('missing tests/handoff-contract-cases.json');
  const data = JSON.parse(fs.readFileSync(fixture, 'utf8'));
  if (data.schema_version !== '1.0') throw new Error('handoff case schema_version must be 1.0');
  if (!Array.isArray(data.cases) || data.cases.length === 0) throw new Error('handoff cases must be a non-empty array');
  return data.cases;
}

function canProve(output) {
  return output.transition_authority === 'proof' && output.new_direct_evidence === true;
}

function evaluate(testCase) {
  const input = testCase.input ?? {};
  const output = testCase.output ?? {};
  const errors = [];

  if (!CONFIDENCE.includes(input.confidence)) errors.push(`invalid input confidence: ${input.confidence}`);
  if (!CONFIDENCE.includes(output.confidence)) errors.push(`invalid output confidence: ${output.confidence}`);
  if (!STATUS.includes(input.status)) errors.push(`invalid input status: ${input.status}`);
  if (!STATUS.includes(output.status)) errors.push(`invalid output status: ${output.status}`);
  if (!Array.isArray(input.ownership) || !Array.isArray(output.ownership)) {
    errors.push('ownership must be an array');
    return errors;
  }

  const proofTransition = canProve(output);
  const inputRank = CONFIDENCE.indexOf(input.confidence);
  const outputRank = CONFIDENCE.indexOf(output.confidence);

  if (input.confidence === 'PLANNED' && output.confidence !== 'PLANNED' && !proofTransition) {
    errors.push('planned confidence promoted without proof authority and direct evidence');
  } else if (input.confidence !== 'PLANNED' && outputRank > inputRank && !proofTransition) {
    errors.push('confidence escalation without proof authority and direct evidence');
  }

  if (input.status === 'PLANNED' && ['MERGED', 'COMPLETED'].includes(output.status) && !proofTransition) {
    errors.push('planned work promoted to completed without proof authority and direct evidence');
  }

  const originalOwnership = new Set(input.ownership);
  const addedOwnership = output.ownership.filter((item) => !originalOwnership.has(item));
  if (addedOwnership.length && !proofTransition) {
    errors.push('ownership expanded without proof authority and direct evidence');
  }

  if (input.privacy === 'local-only' && output.public_export === true) {
    errors.push('local-only evidence marked for public export');
  }

  return errors;
}

let failures = 0;
let cases;
try {
  cases = loadCases();
} catch (error) {
  console.error(`Career Alpha handoff eval failed to load: ${error.message}`);
  process.exit(1);
}

for (const testCase of cases) {
  const actualErrors = evaluate(testCase);
  const actualValid = actualErrors.length === 0;
  const expectedValid = testCase.expected_valid === true;
  const expectedErrors = [...(testCase.expected_errors ?? [])].sort();
  const sortedActual = [...actualErrors].sort();

  const validMatches = actualValid === expectedValid;
  const errorsMatch = JSON.stringify(sortedActual) === JSON.stringify(expectedErrors);

  if (!validMatches || !errorsMatch) {
    failures += 1;
    console.error(`FAIL: ${testCase.name}`);
    console.error(`  expected valid: ${expectedValid}`);
    console.error(`  actual valid:   ${actualValid}`);
    console.error(`  expected errors: ${JSON.stringify(expectedErrors)}`);
    console.error(`  actual errors:   ${JSON.stringify(sortedActual)}`);
  } else {
    console.log(`PASS: ${testCase.name}`);
  }
}

if (failures) {
  console.error(`\nCareer Alpha handoff eval failed: ${failures}/${cases.length} cases.`);
  process.exit(1);
}

console.log(`\nCareer Alpha handoff eval passed: ${cases.length}/${cases.length} integrity transitions.`);
