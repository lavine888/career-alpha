import { fileURLToPath } from 'node:url';
import path from 'node:path';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');

export const SKILLS = Object.freeze([
  'radar',
  'wedge',
  'contributor',
  'build',
  'proof',
  'position',
  'interview',
  'offer'
]);

export const paths = Object.freeze({
  root,
  workbench: path.join(root, 'assets', 'career-alpha-workbench.html'),
  endToEndCase: path.join(root, 'docs', 'agent-engineer-end-to-end.md'),
  ledgerTemplate: path.join(root, 'assets', 'career-claim-ledger-template.json'),
  skills: path.join(root, 'skills'),
  references: path.join(root, 'references')
});

export const careerAlpha = Object.freeze({
  name: 'Career Alpha',
  version: '0.2.0',
  slogan: 'Find your career alpha before it becomes consensus.',
  skills: SKILLS,
  paths
});

export default careerAlpha;
