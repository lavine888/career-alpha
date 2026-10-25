#!/usr/bin/env node
import { spawnSync } from 'node:child_process';

// Windows installs commonly provide python.exe rather than python3.exe.
const command = process.platform === 'win32' ? 'python' : 'python3';
const result = spawnSync(command, process.argv.slice(2), {
  stdio: 'inherit',
  env: { ...process.env, PYTHONUTF8: '1' }
});
if (result.error) console.error(`Unable to run ${command}: ${result.error.message}`);
process.exit(result.status ?? 1);
