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
  if (!fs.existsSync(file)) {
    fail(`missing ${relative}`);
    return null;
  }
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (error) {
    fail(`${relative}: invalid JSON: ${error.message}`);
    return null;
  }
};

const pkg = readJson('package.json');
if (pkg) {
  if (pkg.name !== 'career-alpha') fail('package.json: name must be career-alpha');
  if (pkg.version !== '0.2.0') fail('package.json: version must be 0.2.0');
  if (pkg.type !== 'module') fail('package.json: type must be module');

  for (const script of ['init', 'demo', 'validate:skills', 'validate:package', 'validate']) {
    if (!pkg.scripts?.[script]) fail(`package.json: missing scripts.${script}`);
  }

  const main = pkg.main || './lib/index.js';
  if (!fs.existsSync(path.resolve(root, main))) fail(`package.json: main target does not exist: ${main}`);
}

for (const relative of [
  'lib/index.js',
  'scripts/career-alpha.mjs',
  'assets/career-alpha-workbench.html',
  'docs/agent-engineer-end-to-end.md',
  'assets/career-claim-ledger-template.json'
]) {
  if (!fs.existsSync(path.join(root, relative))) fail(`missing ${relative}`);
}

const gitignore = path.join(root, '.gitignore');
if (!fs.existsSync(gitignore)) {
  fail('missing .gitignore');
} else {
  const text = fs.readFileSync(gitignore, 'utf8');
  if (!text.split(/\r?\n/).some((line) => line.trim() === '.career-alpha/')) {
    fail('.gitignore must contain .career-alpha/ to protect local career data');
  }
}

const workbench = path.join(root, 'assets', 'career-alpha-workbench.html');
if (fs.existsSync(workbench)) {
  const text = fs.readFileSync(workbench, 'utf8');
  for (const marker of ['localStorage', 'career-alpha-workbench-v1', 'VERIFIED', 'SUPPORTED', 'PLANNED']) {
    if (!text.includes(marker)) fail(`Workbench missing required marker: ${marker}`);
  }
}

if (errors.length) {
  console.error('Career Alpha Node package validation failed:\n');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log('Career Alpha Node package validation passed: package, CLI, Workbench, demo case, and privacy contract.');
