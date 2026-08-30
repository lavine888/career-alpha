#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const errors = [];

const markdownLink = /\[[^\]]*\]\(([^)\n]+)\)/g;
const htmlSrc = /<(?:img|a)\b[^>]*(?:src|href)=["']([^"']+)["'][^>]*>/gi;

const targets = [
  'README.md',
  'README_en.md',
  'ROADMAP.md',
  'CHANGELOG.md',
  'docs',
  'examples/workbench/README.md'
];

function collect(relative) {
  const absolute = path.join(root, relative);
  if (!fs.existsSync(absolute)) {
    errors.push(`missing documentation target: ${relative}`);
    return [];
  }
  const stat = fs.statSync(absolute);
  if (stat.isFile()) return [absolute];
  return fs.readdirSync(absolute, { withFileTypes: true }).flatMap((entry) => {
    const child = path.join(absolute, entry.name);
    if (entry.isDirectory()) return collect(path.relative(root, child));
    if (entry.isFile() && entry.name.endsWith('.md')) return [child];
    return [];
  });
}

function normalize(raw) {
  let target = raw.trim();
  if (target.startsWith('<') && target.endsWith('>')) target = target.slice(1, -1);
  target = target.split('#', 1)[0].split('?', 1)[0];
  try { target = decodeURIComponent(target); } catch {}
  return target;
}

function isExternal(target) {
  return !target || target.startsWith('#') || /^(?:https?:|mailto:|tel:|data:|javascript:|\/\/)/i.test(target);
}

const files = [...new Set(targets.flatMap(collect))];

for (const file of files) {
  const text = fs.readFileSync(file, 'utf8');
  const refs = [];
  for (const regex of [markdownLink, htmlSrc]) {
    regex.lastIndex = 0;
    let match;
    while ((match = regex.exec(text)) !== null) refs.push(match[1]);
  }

  for (const raw of refs) {
    const target = normalize(raw);
    if (isExternal(target)) continue;
    if (path.isAbsolute(target)) {
      errors.push(`${path.relative(root, file)}: absolute local link is not allowed: ${raw}`);
      continue;
    }
    const resolved = path.resolve(path.dirname(file), target);
    if (!resolved.startsWith(root + path.sep) && resolved !== root) {
      errors.push(`${path.relative(root, file)}: link escapes repository: ${raw}`);
      continue;
    }
    if (!fs.existsSync(resolved)) {
      errors.push(`${path.relative(root, file)}: missing link target: ${raw}`);
    }
  }
}

if (errors.length) {
  console.error('Career Alpha documentation validation failed:\n');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Career Alpha documentation validation passed: ${files.length} Markdown files checked.`);
