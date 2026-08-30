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

function readJson(file, fallback) {
  if (!fs.existsSync(file)) return fallback;
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (error) {
    throw new Error(`Invalid JSON in ${file}: ${error.message}`);
  }
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

function md(value = '') {
  return String(value ?? '').trim().replace(/\r?\n/g, ' ');
}

function table(rows) {
  if (!rows.length) return '_No data yet._\n';
  const headers = Object.keys(rows[0]);
  const head = `| ${headers.join(' | ')} |`;
  const sep = `| ${headers.map(() => '---').join(' | ')} |`;
  const body = rows.map((row) => `| ${headers.map((h) => md(row[h]).replace(/\|/g, '\\|')).join(' | ')} |`).join('\n');
  return `${head}\n${sep}\n${body}\n`;
}

function exportSnapshot() {
  const dir = path.join(targetRoot, '.career-alpha');
  if (!fs.existsSync(dir)) {
    throw new Error(`Missing ${dir}. Run \"npm run init\" first.`);
  }

  const profile = readJson(path.join(dir, 'profile.json'), {});
  const radar = readJson(path.join(dir, 'radar.json'), { trends: [] });
  const wedges = readJson(path.join(dir, 'wedges.json'), { selected_wedge: null, candidates: [] });
  const proofs = readJson(path.join(dir, 'proofs.json'), { proofs: [] });
  const ledger = readJson(path.join(dir, 'ledger.json'), { claims: [] });
  const applications = readJson(path.join(dir, 'applications.json'), { applications: [] });

  const trendRows = (radar.trends || []).map((item) => ({
    Direction: item.direction || item.name || '',
    Status: item.status || item.stage || '',
    Score: item.score ?? '',
    Evidence: item.evidence || item.note || ''
  }));

  const proofRows = (proofs.proofs || []).map((item) => ({
    Proof: item.name || item.title || '',
    Status: item.status || '',
    Evidence: item.evidence || item.url || ''
  }));

  const claimRows = (ledger.claims || []).map((item) => ({
    Claim: item.claim || item.text || '',
    Confidence: item.confidence || '',
    Result: item.result || '',
    Ownership: typeof item.ownership === 'string' ? item.ownership : JSON.stringify(item.ownership || '')
  }));

  const appRows = (applications.applications || []).map((item) => ({
    Company: item.company || '',
    Role: item.role || '',
    Stage: item.stage || item.status || '',
    Next: item.next_action || item.next || ''
  }));

  const selected = wedges.selected_wedge || {};
  const generated = new Date().toISOString();
  const snapshot = `# Career Alpha Snapshot\n\n> Generated locally by Career Alpha. Review before sharing; remove private links, contacts, compensation and unreleased information.\n\n## Target\n\n- **Role:** ${md(profile.target_role || profile.targetRole)}\n- **Region:** ${md(profile.region)}\n- **Weekly time:** ${md(profile.weekly_time || profile.weeklyTime)}\n- **Background:** ${md(profile.background)}\n\n## Current Wedge\n\n**${md(selected.name || selected.direction || 'Not selected')}**\n\n${md(selected.thesis || selected.why || '') || '_No wedge thesis yet._'}\n\n## Trend Radar\n\n${table(trendRows)}\n## Proof of Work\n\n${table(proofRows)}\n## Claim–Evidence Ledger\n\n${table(claimRows)}\n## Application Pipeline\n\n${table(appRows)}\n## Next Decision\n\n- Keep / refine / pivot: _fill after reviewing market feedback_\n- Highest-value missing evidence: _fill from /proof or /position_\n- Next skill: _/radar, /wedge, /build, /contributor, /proof, /position, /interview or /offer_\n\n---\nGenerated: ${generated}\n`;

  const output = path.join(dir, 'snapshot.md');
  fs.writeFileSync(output, snapshot, 'utf8');
  log(`create ${path.relative(process.cwd(), output)}`);
  log();
  log('Review snapshot.md before sharing. It is a convenience export, not an automatic privacy filter.');
}

function help() {
  log('Career Alpha CLI');
  log();
  log('Usage:');
  log('  node scripts/career-alpha.mjs init [target-directory]');
  log('  node scripts/career-alpha.mjs demo');
  log('  node scripts/career-alpha.mjs snapshot [target-directory]');
  log();
  log('npm shortcuts:');
  log('  npm run init');
  log('  npm run demo');
  log('  npm run snapshot');
  log('  npm run validate');
}

try {
  switch (command) {
    case 'init':
      initWorkspace();
      break;
    case 'demo':
      showDemo();
      break;
    case 'snapshot':
      exportSnapshot();
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
} catch (error) {
  process.stderr.write(`Career Alpha: ${error.message}\n`);
  process.exitCode = 1;
}
