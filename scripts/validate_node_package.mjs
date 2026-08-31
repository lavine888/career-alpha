#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const errors = [];
const fail = (message) => errors.push(message);
const readJson = (relative) => {
  const file = path.join(root, relative);
  if (!fs.existsSync(file)) { fail(`missing ${relative}`); return null; }
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); }
  catch (error) { fail(`${relative}: invalid JSON: ${error.message}`); return null; }
};

const pkg = readJson('package.json');
if (pkg) {
  if (pkg.name !== 'career-alpha') fail('package.json: name must be career-alpha');
  if (pkg.version !== '0.2.0') fail('package.json: version must be 0.2.0');
  if (pkg.type !== 'module') fail('package.json: type must be module');

  for (const script of ['init','demo','snapshot','eval:handoff','eval:integrity','validate:skills','validate:package','validate:node','validate:docs','validate']) {
    if (!pkg.scripts?.[script]) fail(`package.json: missing scripts.${script}`);
  }
  for (const shipped of ['examples','.trae-plugin','ROADMAP.md','CHANGELOG.md']) {
    if (!pkg.files?.includes(shipped)) fail(`package.json: files must include ${shipped}`);
  }
  const main = pkg.main || './lib/index.js';
  if (!fs.existsSync(path.resolve(root, main))) fail(`package.json: main target does not exist: ${main}`);
}

for (const relative of [
  'lib/index.js','scripts/career-alpha.mjs','scripts/validate_docs.mjs','scripts/eval_handoffs.mjs','scripts/eval_integrity.mjs',
  'tests/handoff-contract-cases.json','tests/integrity-eval-cases.json',
  'assets/career-alpha-logo.svg','assets/career-alpha-logo-small.svg','assets/career-alpha-mascot.svg','assets/career-alpha-hero.svg','assets/workbench-preview.svg','assets/career-alpha-workbench.html',
  'docs/installation.md','docs/quickstart.md','docs/agent-engineer-end-to-end.md','docs/cases/README.md','docs/cases/ai-product-manager.md','docs/cases/quant-researcher.md','docs/cases/robotics-engineer.md',
  'docs/real-cases/README.md','docs/real-cases/template.md','assets/career-claim-ledger-template.json',
  '.claude-plugin/marketplace.json','.trae-plugin/plugin.json','ROADMAP.md','CHANGELOG.md'
]) {
  if (!fs.existsSync(path.join(root, relative))) fail(`missing ${relative}`);
}

const marketplace = readJson('.claude-plugin/marketplace.json');
if (marketplace) {
  if (marketplace.name !== 'career-alpha') fail('.claude-plugin/marketplace.json: name must be career-alpha');
  if (!Array.isArray(marketplace.plugins) || marketplace.plugins.length !== 1) fail('.claude-plugin/marketplace.json: plugins must contain exactly one Career Alpha plugin');
  else {
    const plugin = marketplace.plugins[0];
    if (plugin.name !== 'career-alpha') fail('.claude-plugin/marketplace.json: plugin name must be career-alpha');
    if (plugin.source !== './') fail('.claude-plugin/marketplace.json: plugin source must be ./');
    if (plugin.version !== '0.2.0') fail('.claude-plugin/marketplace.json: plugin version must be 0.2.0');
  }
}

const bundleFiles = ['examples/workbench/agent-engineer.json','examples/workbench/ai-product-manager.json','examples/workbench/quant-researcher.json','examples/workbench/robotics-engineer.json'];
const bundleKeys = ['profile','trends','wedge','proofs','claims','position','applications','interview'];
for (const relative of bundleFiles) {
  const data = readJson(relative); if (!data) continue;
  for (const key of bundleKeys) if (!(key in data)) fail(`${relative}: missing top-level key ${key}`);
  if (!Array.isArray(data.trends)) fail(`${relative}: trends must be an array`);
  if (!Array.isArray(data.proofs)) fail(`${relative}: proofs must be an array`);
  if (!Array.isArray(data.claims)) fail(`${relative}: claims must be an array`);
  if (!Array.isArray(data.applications)) fail(`${relative}: applications must be an array`);
  if (!data.wedge || typeof data.wedge !== 'object') fail(`${relative}: wedge must be an object`);
  for (const metric of ['demand','scarcity','proofability','timing']) {
    const value = data.wedge?.[metric];
    if (!Number.isFinite(value) || value < 0 || value > 10) fail(`${relative}: wedge.${metric} must be a number from 0 to 10`);
  }
  for (const claim of data.claims ?? []) {
    if (!['VERIFIED','SUPPORTED','SELF-REPORTED','PLANNED'].includes(claim.confidence)) fail(`${relative}: invalid claim confidence ${claim.confidence}`);
  }
}

const handoffCases = readJson('tests/handoff-contract-cases.json');
if (handoffCases) {
  if (handoffCases.schema_version !== '1.0') fail('tests/handoff-contract-cases.json: schema_version must be 1.0');
  if (!Array.isArray(handoffCases.cases) || handoffCases.cases.length < 6) fail('tests/handoff-contract-cases.json: expected at least six integrity transition cases');
}

const integrityCases = readJson('tests/integrity-eval-cases.json');
if (integrityCases) {
  if (integrityCases.schema_version !== '1.0') fail('tests/integrity-eval-cases.json: schema_version must be 1.0');
  if (!Array.isArray(integrityCases.cases) || integrityCases.cases.length < 8) fail('tests/integrity-eval-cases.json: expected at least eight benchmark cases');
}

const gitignore = path.join(root, '.gitignore');
if (!fs.existsSync(gitignore)) fail('missing .gitignore');
else if (!fs.readFileSync(gitignore, 'utf8').split(/\r?\n/).some((line) => line.trim() === '.career-alpha/')) fail('.gitignore must contain .career-alpha/ to protect local career data');

const workbench = path.join(root, 'assets', 'career-alpha-workbench.html');
if (fs.existsSync(workbench)) {
  const text = fs.readFileSync(workbench, 'utf8');
  for (const marker of ['localStorage','career-alpha-workbench-v1','VERIFIED','SUPPORTED','PLANNED','shareBtn','guideBtn','Career Health','No fake total score']) {
    if (!text.includes(marker)) fail(`Workbench missing required marker: ${marker}`);
  }
}

if (errors.length) {
  console.error('Career Alpha Node package validation failed:\n');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}
console.log('Career Alpha Node package validation passed: package, Workbench v4, onboarding, health, sharing, integrity eval assets, multi-client assets, example bundles, and privacy contract.');
