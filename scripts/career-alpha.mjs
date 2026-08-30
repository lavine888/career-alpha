#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');

const command = process.argv[2] || 'help';
const targetRoot = path.resolve(process.argv[3] || process.cwd());

const log = (message = '') => process.stdout.write(`${message}\n`);

function writeJson(file, data) {
  if (fs.existsSync(file)) {
    log(`skip  ${path.relative(process.cwd(), file)} (already exists)`);
    return;
  }
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, `${JSON.stringify(data, null, 2)}\n`, 'utf8');
  log(`create ${path.relative(process.cwd(), file)}`);
}

function initWorkspace() {
  const dir = path.join(targetRoot, '.career-alpha');
  fs.mkdirSync(dir, { recursive: true });

  writeJson(path.join(dir, 'profile.json'), {
    schema_version: '1.0',
    privacy: 'local-only',
    target_role: '',
    region: '',
    weekly_time: '',
    background: '',
    constraints: []
  });

  writeJson(path.join(dir, 'radar.json'), {
    schema_version: '1.0',
    privacy: 'local-only',
    observation_date: '',
    trends: []
  });

  writeJson(path.join(dir, 'wedges.json'), {
    schema_version: '1.0',
    privacy: 'local-only',
    selected_wedge: null,
    candidates: []
  });

  const ledgerSource = path.join(root, 'assets', 'career-claim-ledger-template.json');
  const ledgerTarget = path.join(dir, 'ledger.json');
  if (!fs.existsSync(ledgerTarget) && fs.existsSync(ledgerSource)) {
    fs.copyFileSync(ledgerSource, ledgerTarget);
    log(`create ${path.relative(process.cwd(), ledgerTarget)} (from ledger template)`);
  } else if (fs.existsSync(ledgerTarget)) {
    log(`skip  ${path.relative(process.cwd(), ledgerTarget)} (already exists)`);
  }

  writeJson(path.join(dir, 'proofs.json'), {
    schema_version: '1.0',
    privacy: 'local-only',
    proofs: []
  });

  writeJson(path.join(dir, 'applications.json'), {
    schema_version: '1.0',
    privacy: 'local-only',
    applications: []
  });

  log();
  log('Career Alpha local workspace initialized.');
  log('Keep .career-alpha/ private; it may contain job-search and personal evidence data.');
}

function showDemo() {
  log('Career Alpha demo assets:');
  log(`Workbench: ${path.join(root, 'assets', 'career-alpha-workbench.html')}`);
  log(`Case:      ${path.join(root, 'docs', 'agent-engineer-end-to-end.md')}`);
  log();
  log('Open the Workbench HTML in a browser and click “载入示例”.');
}

function help() {
  log('Career Alpha CLI');
  log();
  log('Usage:');
  log('  node scripts/career-alpha.mjs init [target-directory]');
  log('  node scripts/career-alpha.mjs demo');
  log();
  log('npm shortcuts:');
  log('  npm run init');
  log('  npm run demo');
  log('  npm run validate');
}

switch (command) {
  case 'init':
    initWorkspace();
    break;
  case 'demo':
    showDemo();
    break;
  case 'help':
  case '--help':
  case '-h':
    help();
    break;
  default:
    log(`Unknown command: ${command}`);
    help();
    process.exitCode = 1;
}
