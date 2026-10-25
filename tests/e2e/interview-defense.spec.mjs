// Offline Interview Defense Lab browser regression tests.
import { test, expect } from '@playwright/test';
import fs from 'node:fs/promises';

const STORAGE = 'career-alpha-interview-defense-v1';
const WORKBENCH = 'career-alpha-workbench-v2';

async function openWithClaims(page) {
  await page.addInitScript(({ sourceKey }) => {
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
  }, { sourceKey: WORKBENCH });
  await page.goto('/interview-defense-lab.html');
}

test('Workbench claims flow into Lab with heuristic risk warning and directional follow-ups', async ({ page }) => {
  await openWithClaims(page);
  await expect(page.locator('#claimCount')).toHaveText('2');
  await expect(page.locator('#roleNote')).toContainText('AI Solution Consultant');
  await expect(page.locator('#selectedTitle')).toContainText('Led production rollout');
  await expect(page.locator('#riskReasons')).toContainText('PLANNED');
  await page.locator('#startBtn').click();
  await expect(page.locator('#startBtn')).toBeDisabled(); // In-progress session cannot be reset accidentally.
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
  await expect(page.locator('#startBtn')).toBeEnabled();
  await expect(page.locator('#startBtn')).toHaveText('重新开始五轮模拟面试');
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

test('refresh preserves the unsent answer, chosen weakness and original deadline', async ({ page }) => {
  await page.clock.install();
  await openWithClaims(page);
  await page.locator('#startBtn').click();
  await page.locator('#answer').fill('Unsent answer with a real ownership boundary.');
  await page.locator('#weakness').selectOption('ownership');
  await page.clock.runFor(12_000);
  await expect(page.locator('#timer')).toHaveText('01:18');
  await page.reload();
  await expect(page.locator('#answer')).toHaveValue('Unsent answer with a real ownership boundary.');
  await expect(page.locator('#weakness')).toHaveValue('ownership');
  await expect(page.locator('#timer')).toHaveText('01:18');
  await page.clock.runFor(79_000);
  await page.reload();
  await expect(page.locator('#timer')).toHaveText('00:00');
  await page.locator('#nextBtn').click();
  const session = await page.evaluate(key => JSON.parse(localStorage.getItem(key)), STORAGE);
  expect(session.steps[0].secondsUsed).toBe(90);
});

test('switching claims protects the first draft and clears it only after confirmation', async ({ page }) => {
  await openWithClaims(page);
  await page.locator('#startBtn').click();
  await page.locator('#answer').fill('First draft must not disappear.');
  page.once('dialog', dialog => dialog.dismiss());
  await page.locator('#claimList button').last().click();
  await expect(page.locator('#answer')).toHaveValue('First draft must not disappear.');
  await expect(page.locator('#selectedTitle')).toContainText('Led production rollout');
  page.once('dialog', dialog => dialog.accept());
  await page.locator('#claimList button').last().click();
  await page.locator('#startBtn').click();
  await expect(page.locator('#answer')).toHaveValue('');
  await page.locator('#nextBtn').click();
  await expect(page.locator('#roundLabel')).toHaveText('ROUND 01 / 05');
});

test('storage write failure remains visible while practice and export still work', async ({ page }) => {
  await openWithClaims(page);
  await page.evaluate(key => {
    const original = Storage.prototype.setItem;
    Storage.prototype.setItem = function(name, value) {
      if (name === key) throw new DOMException('Storage full', 'QuotaExceededError');
      return original.call(this, name, value);
    };
  }, STORAGE);
  await page.locator('#startBtn').click();
  await expect(page.locator('#storageStatus')).toBeVisible();
  await expect(page.locator('#storageStatus')).toContainText('刷新');
  await page.locator('#answer').fill('Can still practice without storage.');
  await page.locator('#nextBtn').click();
  await expect(page.locator('#storageStatus')).toBeVisible();
  await expect(page.locator('#exportBtn')).toBeEnabled();
  expect(await page.evaluate(key => localStorage.getItem(key), STORAGE)).toBeNull();
});

for (const viewport of [{width:1440,height:1000}, {width:390,height:844}, {width:320,height:740}]) {
  test(`complete local practice and literal Markdown export at ${viewport.width}px`, async ({ page }) => {
    await page.setViewportSize(viewport);
    const requests = [];
    const errors = [];
    page.on('request', request => requests.push({url:request.url(), method:request.method(), type:request.resourceType()}));
    page.on('pageerror', error => errors.push(error.message));
    await openWithClaims(page);
    const source = await page.evaluate(key => localStorage.getItem(key), WORKBENCH);
    const fits = async () => {
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      for (const id of ['startBtn', 'exportBtn', 'answer', 'weakness', 'nextBtn', 'finalExportBtn']) {
        const control = page.locator('#' + id);
        if (!await control.isVisible()) continue;
        const box = await control.boundingBox();
        expect(box.x).toBeGreaterThanOrEqual(0);
        expect(box.x + box.width).toBeLessThanOrEqual(viewport.width);
      }
    };
    await fits();
    await page.locator('#startBtn').click();
    const answers = [
      'I wrote the evaluation protocol; the team implemented it.',
      '<img src="https://example.invalid/private" onerror="alert(1)">',
      '```\n# Keep user Markdown literal\n```\n![private](https://example.invalid/image)',
      '本地验证，尚未部署。' + 'long_unbroken_evidence_'.repeat(25),
      'Still PLANNED; no production metric is verified.'
    ];
    const focuses = ['ownership','evidence','tradeoff','architecture','communication'];
    for (let i=0;i<5;i++) {
      await expect(page.locator('#roundLabel')).toHaveText(`ROUND 0${i+1} / 05`);
      await page.locator('#answer').fill(answers[i]);
      await page.locator('#weakness').selectOption(focuses[i]);
      await fits();
      await page.locator('#nextBtn').click();
      if (i===1) await page.reload();
    }
    await expect(page.locator('#finalHistory .history-item')).toHaveCount(5);
    await fits();
    await page.reload();
    await expect(page.locator('#final')).toBeVisible();
    const downloadPromise = page.waitForEvent('download');
    await page.locator('#finalExportBtn').click();
    const download = await downloadPromise;
    const markdown = await fs.readFile(await download.path(), 'utf8');
    for (const answer of answers) expect(markdown).toContain(answer);
    expect(markdown.match(/^## Question \d$/gm)).toHaveLength(5);
    expect(markdown).toContain('PLANNED');
    expect(markdown).toContain('No deployment logs');
    expect(markdown).toContain('不代表答案真实');
    // Untrusted content must remain inside a fence longer than its own backticks.
    expect(markdown).toContain('````text\n' + answers[2] + '\n````');
    expect(await page.locator('#finalHistory img').count()).toBe(0);
    expect(await page.evaluate(key => localStorage.getItem(key), WORKBENCH)).toBe(source);
    const storedKeys = await page.evaluate(() => Object.keys(localStorage).sort());
    expect(storedKeys).toEqual([STORAGE, WORKBENCH].sort());
    expect(requests.filter(r => r.type !== 'document')).toEqual([]);
    expect(requests.every(r => new URL(r.url).origin === 'http://127.0.0.1:4173' && r.method === 'GET')).toBe(true);
    expect(errors).toEqual([]);
    await page.locator('#restartBtn').click();
    await expect(page.locator('#answer')).toHaveValue('');
    await expect(page.locator('#roundLabel')).toHaveText('ROUND 01 / 05');
  });
}

for (const mode of ['malformed', 'unavailable']) {
  test(`${mode} local storage keeps manual practice available without changing source data`, async ({ page }) => {
    await page.addInitScript(({mode,sourceKey,drillKey}) => {
      if (mode === 'malformed') {
        localStorage.setItem(sourceKey, '{broken');
        localStorage.setItem(drillKey, '{broken');
      } else {
        Storage.prototype.getItem = function() { throw new DOMException('Blocked', 'SecurityError'); };
        Storage.prototype.setItem = function() { throw new DOMException('Blocked', 'SecurityError'); };
        Storage.prototype.removeItem = function() { throw new DOMException('Blocked', 'SecurityError'); };
      }
    }, {mode,sourceKey:WORKBENCH,drillKey:STORAGE});
    await page.goto('/interview-defense-lab.html');
    await expect(page.locator('#privacyNote')).toContainText('手动输入');
    await page.locator('#manualClaim').fill('Local-only manual practice.');
    await page.locator('#manualBtn').click();
    await page.locator('#startBtn').click();
    await page.locator('#answer').fill('A real answer even when saved state is unavailable.');
    await page.locator('#nextBtn').click();
    await expect(page.locator('#roundLabel')).toHaveText('ROUND 02 / 05');
    await expect(page.locator('#exportBtn')).toBeEnabled();
    if (mode === 'malformed') expect(await page.evaluate(key => localStorage.getItem(key), WORKBENCH)).toBe('{broken');
    else await expect(page.locator('#storageStatus')).toBeVisible();
  });
}
