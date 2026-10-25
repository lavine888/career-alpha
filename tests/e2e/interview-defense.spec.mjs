// Offline Interview Defense Lab browser regression tests.
import { test, expect } from '@playwright/test';
import fs from 'node:fs/promises';

const STORAGE = 'career-alpha-interview-defense-v1';
const WORKBENCH = 'career-alpha-workbench-v2';

async function openWithClaims(page) {
  await page.addInitScript(({ sourceKey, drillKey }) => {
    if (localStorage.getItem(sourceKey)) return;
    localStorage.setItem(sourceKey, JSON.stringify({
      schema_version: '1.0',
      profile: { targetRole: 'AI Solution Consultant' },
      claims: [
        { claim: 'Built a small demo', confidence: 'SUPPORTED', evidence: 'Repo', ownership: 'Own design', risk: '' },
        { claim: 'Led production rollout and improved metric by 35%', confidence: 'PLANNED', evidence: '', ownership: '', risk: 'No deployment logs' }
      ]
    }));
  // Leave drill storage intact on page.reload() for persistence test.
  }, { sourceKey: WORKBENCH, drillKey: STORAGE });
  await page.goto('/interview-defense-lab.html');
}

test('Workbench claims flow into Lab with heuristic risk warning and directional follow-ups', async ({ page }) => {
  await openWithClaims(page);
  await expect(page.locator('#claimCount')).toHaveText('2');
  await expect(page.locator('#roleNote')).toContainText('AI Solution Consultant');
  await expect(page.locator('#selectedTitle')).toContainText('Led production rollout');
  await expect(page.locator('#riskReasons')).toContainText('PLANNED');
  await page.locator('#startBtn').click();
  await expect(page.locator('#question')).toContainText('真正解决了什么问题');
  await page.locator('#answer').fill('I defined the test protocol; the system was not deployed yet.');
  await page.locator('#weakness').selectOption('ownership');
  await page.locator('#nextBtn').click();
  await expect(page.locator('#question')).toContainText('哪些决策是你本人完成的');
  let state = await page.evaluate(key => JSON.parse(localStorage.getItem(key)), STORAGE);
  expect(state.steps).toHaveLength(1);
  expect(state.claim.confidence).toBe('PLANNED');
  await page.reload();
  await expect(page.locator('#roundLabel')).toHaveText('ROUND 02 / 05');
  await expect(page.locator('#historyCount')).toHaveText('1');
  await expect(page.locator('#question')).toContainText('哪些决策是你本人完成的');
  const download = page.waitForEvent('download');
  await page.locator('#exportBtn').click();
  const file = await download;
  const md = await fs.readFile(await file.path(), 'utf8');
  expect(file.suggestedFilename()).toBe('career-alpha-interview-review.md');
  expect(md).toContain('the system was not deployed yet');
  expect(md).toContain('PLANNED');
  expect(md).toContain('不代表答案真实');
  expect(md).not.toContain('AI 自动评分：优秀');
  const source = await page.evaluate(key => JSON.parse(localStorage.getItem(key)), WORKBENCH);
  expect(source.claims[1].confidence).toBe('PLANNED');
});

test('Manual claim can complete five rounds without Workbench data', async ({ page }) => {
  await page.addInitScript(() => localStorage.clear());
  await page.goto('/interview-defense-lab.html');
  await expect(page.locator('#claimCount')).toHaveText('0');
  await expect(page.locator('#startBtn')).toBeDisabled();
  await page.locator('#manualClaim').fill('I designed and verified a workflow in a local test.');
  await page.locator('#manualBtn').click();
  await expect(page.locator('#selectedTitle')).toHaveText('I designed and verified a workflow in a local test.');
  await page.locator('#startBtn').click();
  for (let i = 0; i < 5; i++) {
    await expect(page.locator('#roundLabel')).toHaveText('ROUND ' + String(i + 1).padStart(2, '0') + ' / 05');
    await page.locator('#answer').fill('Actual answer for round ' + (i + 1));
    await page.locator('#weakness').selectOption(i % 2 ? 'architecture' : 'tradeoff');
    await page.locator('#nextBtn').click();
  }
  await expect(page.locator('#final')).toBeVisible();
  await expect(page.locator('#focusItems')).toContainText('工程取舍与失败');
  const session = await page.evaluate(key => JSON.parse(localStorage.getItem(key)), STORAGE);
  expect(session.steps).toHaveLength(5);
  expect(session.finished).toBe(true);
  expect(await page.evaluate(key => localStorage.getItem(key), WORKBENCH)).toBeNull();
});

test('User-supplied claim displays as text, never active HTML', async ({ page }) => {
  await page.addInitScript(() => localStorage.clear());
  await page.goto('/interview-defense-lab.html');
  await page.locator('#manualClaim').fill('<img src=x onerror="window.__injected=true">');
  await page.locator('#manualBtn').click();
  await expect(page.locator('#selectedTitle')).toContainText('<img src=x');
  expect(await page.locator('#selectedTitle img').count()).toBe(0);
  expect(await page.evaluate(() => window.__injected ?? false)).toBe(false);
});