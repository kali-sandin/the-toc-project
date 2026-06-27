import { chromium, firefox } from 'playwright';
import { mkdirSync, writeFileSync } from 'node:fs';

const outDir = 'audit-artifacts/task101-crowding';
mkdirSync(outDir, { recursive: true });

const browserAttempts = [];

async function tryBrowser(name, launch) {
  try {
    const browser = await launch();
    return { name, browser };
  } catch (error) {
    browserAttempts.push({
      name,
      ok: false,
      message: error instanceof Error ? error.message : String(error),
    });
    return null;
  }
}

async function resolveBrowser() {
  const chromiumResult = await tryBrowser('chromium', () => chromium.launch({
    headless: true,
    executablePath: process.env.CHROMIUM_PATH || '/usr/bin/chromium',
  }));
  if (chromiumResult) return chromiumResult;

  const firefoxResult = await tryBrowser('firefox', () => firefox.launch({ headless: true }));
  if (firefoxResult) return firefoxResult;

  throw new Error('No Playwright browser could be launched.\n' + JSON.stringify(browserAttempts, null, 2));
}

const { name: browserName, browser } = await resolveBrowser();

const expected = [
  'NNGroup — First 2 words',
  'PMC — Visual Crowding',
  'PMC — Perceptual Load',
];

const cases = [
  { name: 'desktop-toc', width: 1366, height: 1300, calm: false },
  { name: 'mobile-toc', width: 390, height: 1300, calm: false },
  { name: 'desktop-calm', width: 1366, height: 1300, calm: true },
  { name: 'mobile-calm', width: 390, height: 1300, calm: true },
];

const results = [];

for (const c of cases) {
  const page = await browser.newPage({ viewport: { width: c.width, height: c.height } });
  await page.goto('file://' + process.cwd() + '/index.html');
  if (c.calm) await page.locator('.mode-switch-button').click();
  await page.locator('.evidence-biblio').scrollIntoViewIfNeeded();

  const audit = await page.evaluate((expectedLabels) => {
    const items = [...document.querySelectorAll('.source-crowd')];
    const links = items.map((item) => item.querySelector('a'));
    const labels = links.map((link) => link?.textContent?.trim());
    const firstWordsClear = labels.every((label) => /^(NNGroup|PMC) — /.test(label || ''));
    const pseudoContent = items.map((item) => ({
      before: getComputedStyle(item, '::before').content,
      after: getComputedStyle(item, '::after').content,
    }));
    const linkBoxes = links.map((link) => {
      const rect = link.getBoundingClientRect();
      return {
        width: rect.width,
        height: rect.height,
        left: rect.left,
        right: rect.right,
      };
    });

    links[0]?.focus();
    const focused = document.activeElement === links[0];
    const focusStyle = links[0] ? getComputedStyle(links[0]) : null;
    const overflow = document.documentElement.scrollWidth - window.innerWidth;

    return {
      itemCount: items.length,
      labels,
      expectedLabels,
      firstWordsClear,
      pseudoContent,
      linkBoxes,
      focused,
      focusOutline: focusStyle?.outlineStyle,
      focusOutlineWidth: focusStyle?.outlineWidth,
      focusBackground: focusStyle?.backgroundColor,
      focusBorderBottomColor: focusStyle?.borderBottomColor,
      overflow,
    };
  }, expected);

  await page.screenshot({ path: `${outDir}/${c.name}-${browserName}.png`, fullPage: true });
  results.push({ case: c.name, browser: browserName, ...audit });
  await page.close();
}

await browser.close();

const report = { browserName, browserAttempts, results };
writeFileSync(`${outDir}/audit-${browserName}.json`, JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));

const failed = results.some((result) => {
  const labelsOk = JSON.stringify(result.labels) === JSON.stringify(result.expectedLabels);
  const calm = result.case.includes('calm');
  const pseudoOk = calm
    ? result.pseudoContent.every((entry) => entry.before === 'none' && entry.after === 'none')
    : result.pseudoContent.every((entry) => entry.before !== 'none' && entry.after !== 'none');

  return result.itemCount !== 3
    || !labelsOk
    || !result.firstWordsClear
    || !result.focused
    || (result.focusOutline === 'none'
      && result.focusOutlineWidth === '0px'
      && result.focusBackground === 'rgba(0, 0, 0, 0)'
      && result.focusBorderBottomColor === 'rgba(0, 0, 0, 0)')
    || result.linkBoxes.some((box) => box.width < 80 || box.height < 12)
    || result.overflow > 2
    || !pseudoOk;
});

if (failed) {
  process.exit(1);
}
