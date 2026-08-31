#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..'),errors=[];
const fail=m=>errors.push(m);const readJson=r=>{const f=path.join(root,r);if(!fs.existsSync(f)){fail(`missing ${r}`);return null}try{return JSON.parse(fs.readFileSync(f,'utf8'))}catch(e){fail(`${r}: invalid JSON: ${e.message}`);return null}};
const pkg=readJson('package.json');
if(pkg){if(pkg.name!=='career-alpha')fail('package.json: name must be career-alpha');if(pkg.version!=='0.3.0')fail('package.json: version must be 0.3.0');if(pkg.type!=='module')fail('package.json: type must be module');for(const s of ['init','demo','snapshot','eval:handoff','eval:integrity','validate:skills','validate:package','validate:node','validate:docs','validate','test:e2e','test'])if(!pkg.scripts?.[s])fail(`package.json: missing scripts.${s}`);if(!pkg.devDependencies?.['@playwright/test'])fail('package.json: missing @playwright/test devDependency')}
for(const r of ['assets/career-alpha-workbench.html','assets/workbench-state.schema.json','playwright.config.mjs','tests/e2e/workbench.spec.mjs','scripts/serve-workbench.mjs','.github/workflows/e2e.yml','.github/workflows/pages.yml'])if(!fs.existsSync(path.join(root,r)))fail(`missing ${r}`);
const market=readJson('.claude-plugin/marketplace.json');if(market?.plugins?.[0]?.version!=='0.3.0')fail('.claude-plugin/marketplace.json: plugin version must be 0.3.0');
const schema=readJson('assets/workbench-state.schema.json');if(schema?.properties?.schema_version?.const!=='1.0')fail('Workbench state schema must declare schema_version 1.0');
const wb=path.join(root,'assets/career-alpha-workbench.html');if(fs.existsSync(wb)){const t=fs.readFileSync(wb,'utf8');for(const m of ['career-alpha-workbench-v2','career-alpha-workbench-v1','schema_version','migrateState','normalizeState','STATE_SCHEMA','Share Card','Start Guide','Career Health','No fake total score','导入 JSON'])if(!t.includes(m))fail(`Workbench missing required marker: ${m}`)}
const e2e=path.join(root,'tests/e2e/workbench.spec.mjs');if(fs.existsSync(e2e)){const t=fs.readFileSync(e2e,'utf8');for(const m of ['legacy v1','share card','exported JSON','career-alpha-workbench-v2'])if(!t.toLowerCase().includes(m.toLowerCase()))fail(`E2E suite missing behavior: ${m}`)}
if(errors.length){console.error('Career Alpha Node package validation failed:\n');for(const e of errors)console.error(`- ${e}`);process.exit(1)}
console.log('Career Alpha Node package validation passed: v0.3 package, schema migration, live-demo workflow, Playwright assets, and Workbench integrity markers.');
