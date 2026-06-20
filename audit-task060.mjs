import { readFileSync } from 'node:fs';

const html = readFileSync('index.html', 'utf8');
const css = readFileSync('styles.css', 'utf8');

const checks = [
  {
    name: 'calm-mode-toggle-is-wired',
    ok: /document\.documentElement\.classList\.toggle\('mode-calm', calm\)/.test(html)
      && /document\.body\.classList\.toggle\('mode-calm', calm\)/.test(html),
  },
  {
    name: 'all-core-sections-exist',
    ok: ['hero', 'reading-map', 'cards', 'manifesto', 'toc-dials', 'evidence', 'footer']
      .every((id) => html.includes(`id="${id}"`)),
  },
  {
    name: 'calm-mode-kills-motion',
    ok: /body\.mode-calm \*,\s*body\.mode-calm \*::before,\s*body\.mode-calm \*::after[\s\S]*animation: none !important;[\s\S]*transition: none !important;/.test(css)
      || /html\.mode-calm body \*,[\s\S]*animation: none !important;[\s\S]*transition: none !important;/.test(css),
  },
  {
    name: 'calm-links-avoid-default-blue-underline',
    ok: /body\.mode-calm a,\s*body\.mode-calm a:visited[\s\S]*color: #285f76 !important;[\s\S]*text-decoration: none !important;/.test(css)
      || /html\.mode-calm body a,[\s\S]*color: #285f76 !important;[\s\S]*text-decoration: none !important;/.test(css),
  },
  {
    name: 'calm-hover-does-not-transform',
    ok: /body\.mode-calm a:hover,[\s\S]*transform: none !important;/.test(css)
      && /body\.mode-calm \.hero :hover,[\s\S]*transform: none !important;/.test(css),
  },
  {
    name: 'calm-decorative-residue-hidden',
    ok: /body\.mode-calm \.hero-pair,[\s\S]*body\.mode-calm \.footer::after[\s\S]*display: none !important;/.test(css)
      && /body\.mode-calm::before,[\s\S]*body\.mode-calm::after[\s\S]*content: none !important;/.test(css),
  },
  {
    name: 'calm-mobile-containment-exists',
    ok: /@media \(max-width: 720px\)[\s\S]*body\.mode-calm \.cards[\s\S]*grid-template-columns: 1fr !important;/.test(css)
      && /width: min\(100% - 1\.25rem, 720px\) !important;/.test(css),
  },
  {
    name: 'calm-reading-map-is-stable',
    ok: /body\.mode-calm \.reading-map[\s\S]*transform: none !important;/.test(css)
      && /body\.mode-calm \.reading-map-steps li,[\s\S]*transform: none !important;/.test(css),
  },
];

const failed = checks.filter((check) => !check.ok);
console.log(JSON.stringify({ checks, failed: failed.map((check) => check.name) }, null, 2));

if (failed.length) {
  process.exit(1);
}
