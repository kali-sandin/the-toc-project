import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';

const outDir = 'audit-artifacts/task091-structure';
mkdirSync(outDir, { recursive: true });
const cases = [
  { name: 'mobile-toc', width: 390, height: 1200, calm: false },
  { name: 'desktop-toc', width: 1366, height: 1000, calm: false },
  { name: 'mobile-calm', width: 390, height: 1200, calm: true },
];
const browser = await chromium.launch({ headless: true, executablePath: process.env.CHROMIUM_PATH || '/usr/bin/chromium' });
const results = [];
for (const c of cases) {
  const page = await browser.newPage({ viewport: { width: c.width, height: c.height } });
  await page.goto('file://' + process.cwd() + '/index.html');
  if (c.calm) await page.locator('.mode-switch-button').click();
  await page.locator('#reading-map').scrollIntoViewIfNeeded();
  await page.screenshot({ path: `${outDir}/${c.name}.png`, fullPage: true });
  const r = await page.evaluate(() => ({
    width: innerWidth,
    scrollWidth: document.documentElement.scrollWidth,
    hasReadingMap: !!document.querySelector('#reading-map'),
    navText: document.querySelector('a[href="#toc-dials"]')?.textContent?.trim(),
    dialsTitle: document.querySelector('#toc-dials-title')?.textContent?.trim(),
    readingIntro: document.querySelector('.reading-map-intro')?.textContent?.trim(),
    oldLabelCount: [...document.body.querySelectorAll('*')].filter(el => /Cuatro perillas|modelo de perillas/.test(el.textContent || '')).length,
  }));
  results.push({ case: c.name, ...r, overflow: r.scrollWidth - r.width });
  await page.close();
}
await browser.close();
console.log(JSON.stringify(results, null, 2));
if (results.some(r => !r.hasReadingMap || !/Diales de caos/.test(r.navText || '') || !/diales de caos/i.test(r.dialsTitle || '') || r.oldLabelCount > 0 || r.overflow > 2)) {
  process.exit(1);
}
