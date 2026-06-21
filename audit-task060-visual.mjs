import { chromium, firefox } from 'playwright';
import { mkdirSync, writeFileSync } from 'node:fs';

const outDir = 'audit-artifacts/task060-review';
mkdirSync(outDir, { recursive: true });

const browserMode = process.env.PLAYWRIGHT_BROWSER || 'auto';
const chromiumPath = process.env.CHROMIUM_PATH || '/usr/bin/chromium';
const browserAttempts = [];

const cases = [
  { name: 'desktop-calm', width: 1440, height: 1400 },
  { name: 'tablet-calm', width: 834, height: 1280 },
  { name: 'mobile-calm', width: 390, height: 1200 },
];

async function launchFirefox() {
  return firefox.launch({ headless: true });
}

async function launchChromium() {
  return chromium.launch({ headless: true, executablePath: chromiumPath });
}

async function resolveBrowser() {
  const tried = [];

  async function tryLaunch(name, launch) {
    try {
      const browser = await launch();
      return { name, browser };
    } catch (error) {
      const detail = {
        name,
        ok: false,
        message: error instanceof Error ? error.message : String(error),
      };
      tried.push(detail);
      browserAttempts.push(detail);
      return null;
    }
  }

  if (browserMode === 'firefox') {
    const firefoxResult = await tryLaunch('firefox', launchFirefox);
    if (firefoxResult) return firefoxResult;
    throw new Error('Firefox launch failed.\n' + JSON.stringify(tried, null, 2));
  }

  if (browserMode === 'chromium') {
    const chromiumResult = await tryLaunch('chromium', launchChromium);
    if (chromiumResult) return chromiumResult;
    throw new Error('Chromium launch failed.\n' + JSON.stringify(tried, null, 2));
  }

  const chromiumResult = await tryLaunch('chromium', launchChromium);
  if (chromiumResult) return chromiumResult;

  const firefoxResult = await tryLaunch('firefox', launchFirefox);
  if (firefoxResult) return firefoxResult;

  throw new Error('No Playwright browser could be launched.\n' + JSON.stringify(tried, null, 2));
}

const { name: browserName, browser } = await resolveBrowser();
const results = [];

for (const c of cases) {
  const page = await browser.newPage({ viewport: { width: c.width, height: c.height } });
  await page.goto('file://' + process.cwd() + '/index.html');
  await page.locator('.mode-switch-button').click();
  await page.locator('#hero').scrollIntoViewIfNeeded();
  await page.screenshot({ path: `${outDir}/${c.name}-${browserName}.png`, fullPage: true });
  const audit = await page.evaluate(() => ({
    bodyClass: document.body.className,
    rootClass: document.documentElement.className,
    hasCalmMode: document.body.classList.contains('mode-calm') && document.documentElement.classList.contains('mode-calm'),
    overflow: document.documentElement.scrollWidth - window.innerWidth,
    readingMapTransform: getComputedStyle(document.querySelector('.reading-map')).transform,
    firstLinkDecoration: getComputedStyle(document.querySelector('a')).textDecorationLine,
    firstLinkColor: getComputedStyle(document.querySelector('a')).color,
  }));
  results.push({ case: c.name, browser: browserName, ...audit });
  await page.close();
}

await browser.close();

const report = {
  browserMode,
  browserName,
  chromiumPath,
  browserAttempts,
  results,
};

writeFileSync(`${outDir}/visual-audit-${browserName}.json`, JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));

if (results.some((result) => !result.hasCalmMode || result.overflow > 2 || result.readingMapTransform !== 'none' || result.firstLinkDecoration !== 'none')) {
  process.exit(1);
}
