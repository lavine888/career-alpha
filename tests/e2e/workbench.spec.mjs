import { test, expect } from '@playwright/test';
import fs from 'node:fs/promises';

test.beforeEach(async ({ page }) => {
  await page.goto('/career-alpha-workbench.html');
  await page.evaluate(() => localStorage.clear());
  await page.reload();
});

test('onboarding persists target and weekly time', async ({ page }) => {
  await expect(page.locator('#guideModal')).toBeVisible();
  await page.locator('#guideRole').fill('Agent Engineer');
  await page.locator('#guideNext').click();
  await page.locator('[data-e="projects"]').click();
  await page.locator('#guideNext').click();
  await page.locator('#guideTime').fill('8h / week');
  await page.locator('#guideNext').click();

  await expect(page.locator('[data-profile="targetRole"]')).toHaveValue('Agent Engineer');
  await expect(page.locator('[data-profile="weeklyTime"]')).toHaveValue('8h / week');
  await expect(page.locator('#guideModal')).toBeHidden();

  await page.reload();
  await expect(page.locator('[data-profile="targetRole"]')).toHaveValue('Agent Engineer');
  const stored = await page.evaluate(() => JSON.parse(localStorage.getItem('career-alpha-workbench-v2')));
  expect(stored.schema_version).toBe('1.0');
});

test('case data survives reload and share card renders', async ({ page }) => {
  await page.locator('#skipGuide').click();
  page.once('dialog', dialog => dialog.accept());
  await page.locator('#caseSelect').selectOption('agent');
  await page.locator('#loadCase').click();

  await expect(page.locator('[data-wedge="name"]')).toHaveValue('Agent Reliability / Evaluation');
  await expect(page.locator('#verifiedCount')).toHaveText('1');

  const proofStatus = page.locator('#proofList .proof select').first();
  await proofStatus.selectOption('DONE');
  await expect(page.locator('#summaryMove')).toHaveText('/position');

  await page.reload();
  await expect(page.locator('[data-wedge="name"]')).toHaveValue('Agent Reliability / Evaluation');
  await expect(page.locator('#summaryMove')).toHaveText('/position');

  await page.locator('#shareBtn').click();
  await expect(page.locator('#shareModal')).toBeVisible();
  await expect(page.locator('#shareCanvas')).toHaveAttribute('width', '1600');
  await expect(page.locator('#shareCanvas')).toHaveAttribute('height', '900');
});

test('legacy v1 local state migrates to schema v1.0', async ({ page }) => {
  await page.locator('#skipGuide').click();
  await page.evaluate(() => {
    localStorage.removeItem('career-alpha-workbench-v2');
    localStorage.setItem('career-alpha-workbench-v1', JSON.stringify({
      profile: { targetRole: 'Quant Researcher', region: 'HK', weeklyTime: '6h', background: 'legacy' },
      trends: [],
      wedge: { name: 'Robustness', thesis: '', demand: 8, scarcity: 7, proofability: 8, timing: 7, killCriteria: '', nextTest: '' },
      proofs: [], claims: [],
      position: { safe: '', stretch: '', gaps: '' },
      applications: [],
      interview: { risk: '', weakness: '', drill: '' }
    }));
  });
  await page.reload();
  await expect(page.locator('[data-profile="targetRole"]')).toHaveValue('Quant Researcher');
  const migrated = await page.evaluate(() => JSON.parse(localStorage.getItem('career-alpha-workbench-v2')));
  expect(migrated.schema_version).toBe('1.0');
  expect(migrated.wedge.name).toBe('Robustness');
});

test('exported JSON contains schema version', async ({ page }) => {
  await page.locator('#skipGuide').click();
  page.once('dialog', dialog => dialog.accept());
  await page.locator('#loadCase').click();

  const downloadPromise = page.waitForEvent('download');
  await page.locator('#exportBtn').click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe('career-alpha-workbench-v0.3.json');
  const filePath = await download.path();
  const exported = JSON.parse(await fs.readFile(filePath, 'utf8'));
  expect(exported.schema_version).toBe('1.0');
  expect(exported.profile.targetRole).toContain('Agent');
});
