import { chromium } from 'playwright';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const url = pathToFileURL(path.join(root, 'index.html')).href;
const executablePath = process.env.CHROMIUM_PATH || '/usr/bin/chromium';
const viewports = [
  { name: 'mobile-toc', width: 390, height: 1200, calm: false },
  { name: 'mobile-calm', width: 390, height: 1200, calm: true },
  { name: 'tablet-toc', width: 768, height: 1100, calm: false },
  { name: 'desktop-toc', width: 1366, height: 1000, calm: false },
];

const browser = await chromium.launch({ executablePath, headless: true });
let failed = false;
for (const vp of viewports) {
  const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
  await page.goto(url);
  if (vp.calm) await page.evaluate(() => document.body.classList.add('mode-calm'));
  await page.locator('#evidence').scrollIntoViewIfNeeded();
  const result = await page.evaluate(() => {
    const vw = document.documentElement.clientWidth;
    const docOverflow = document.documentElement.scrollWidth - vw;
    const evidence = document.querySelector('#evidence');
    const evRect = evidence.getBoundingClientRect();
    const offenders = [...document.querySelectorAll('#evidence, #evidence *')]
      .map((el) => {
        const r = el.getBoundingClientRect();
        return { tag: el.tagName.toLowerCase(), cls: el.className || '', left: Math.floor(r.left), right: Math.ceil(r.right), width: Math.ceil(r.width) };
      })
      .filter((o) => o.left < -1 || o.right > vw + 1)
      .slice(0, 20);
    return { vw, scrollWidth: document.documentElement.scrollWidth, docOverflow, evidence: { left: Math.floor(evRect.left), right: Math.ceil(evRect.right), width: Math.ceil(evRect.width) }, offenders };
  });
  console.log(JSON.stringify({ viewport: vp.name, ...result }, null, 2));
  if (result.docOverflow > 1 || result.offenders.length) failed = true;
  await page.screenshot({ path: `audit-artifacts/task089-${vp.name}.png`, fullPage: true });
  await page.close();
}
await browser.close();
if (failed) process.exit(2);
