const DOCS = {
  'README.md': {
    path: 'research/README.md',
    title: 'Guía de investigación',
    subtitle: 'Portada editorial y mapa de lectura del research.',
  },
  'toc_patterns.md': {
    path: 'research/toc_patterns.md',
    title: 'Patrones TOC',
    subtitle: 'Inventario de anomalías visuales y criterios de calidad.',
  },
  'perception_deep_dive.md': {
    path: 'research/perception_deep_dive.md',
    title: 'Percepción y orden visual',
    subtitle: 'Gestalt, carga y recorrido de lectura sin superstición.',
  },
  'interaction_memory_research.md': {
    path: 'research/interaction_memory_research.md',
    title: 'Interacción y memoria',
    subtitle: 'Labels, reconocimiento, iconos ambiguos y memoria.',
  },
  'motion_safety_research.md': {
    path: 'research/motion_safety_research.md',
    title: 'Movimiento seguro',
    subtitle: 'Delays molestos con barandillas reales.',
  },
  'friction_memory_research.md': {
    path: 'research/friction_memory_research.md',
    title: 'Fricción memorable',
    subtitle: 'Pico, cierre, carga y foco sin sabotaje operativo.',
  },
  'ocd_language_ethics.md': {
    path: 'research/ocd_language_ethics.md',
    title: 'Lenguaje responsable',
    subtitle: 'Separar incomodidad visual de TOC clínico sin aguar el experimento.',
  },
  'attention_scanning_research.md': {
    path: 'research/attention_scanning_research.md',
    title: 'Atención selectiva y escaneo',
    subtitle: 'Escaneo web, change blindness y carriles visuales que casi ayudan.',
  },
  'microcontent_blindness_research.md': {
    path: 'research/microcontent_blindness_research.md',
    title: 'Microcopy escaneable y ceguera a banners',
    subtitle: 'Primeras palabras útiles, fuentes disfrazadas de banner y señales esquivables.',
  },
  'error_recovery_research.md': {
    path: 'research/error_recovery_research.md',
    title: 'Errores, slips y recuperación',
    subtitle: 'Casi errores visuales con diagnóstico, contexto y salida útil.',
  },
  'information_scent_research.md': {
    path: 'research/information_scent_research.md',
    title: 'Information scent y foraging',
    subtitle: 'Olor informativo, coste percibido y señuelos honestos.',
  },
  'perceived_wait_research.md': {
    path: 'research/perceived_wait_research.md',
    title: 'Espera percibida y progreso',
    subtitle: 'Límites de respuesta, feedback y progreso sospechoso.',
  },
  'processing_fluency_research.md': {
    path: 'research/processing_fluency_research.md',
    title: 'Fluidez perceptiva',
    subtitle: 'Legibilidad, confianza y desfluidez localizada con contraste seguro.',
  },
  'progressive_disclosure_research.md': {
    path: 'research/progressive_disclosure_research.md',
    title: 'Revelación progresiva',
    subtitle: 'Detalle aplazado, carga cognitiva y deuda visible sin esconder lo crítico.',
  },
  'choice_overload_research.md': {
    path: 'research/choice_overload_research.md',
    title: 'Sobrecarga de elección',
    subtitle: 'Rutas competidoras con una recomendación honesta todavía visible.',
  },
  'visual_crowding_research.md': {
    path: 'research/visual_crowding_research.md',
    title: 'Crowding visual',
    subtitle: 'Clutter periférico, objetivos flanqueados y picor sin ocultar la fuente.',
  }
};

const params = new URLSearchParams(window.location.search);
const requested = params.get('doc') || 'README.md';
const currentDoc = DOCS[requested] ? requested : 'README.md';
const currentMeta = DOCS[currentDoc];

const titleEl = document.getElementById('viewer-title');
const subtitleEl = document.getElementById('viewer-subtitle');
const pathEl = document.getElementById('viewer-path');
const navEl = document.getElementById('viewer-doc-nav');
const contentEl = document.getElementById('viewer-content');

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function inlineMarkdown(text) {
  return text
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img alt="$1" src="$2">')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, label, href) => {
      const safeHref = href.endsWith('.md')
        ? `md-viewer.html?doc=${encodeURIComponent(href.split('/').pop())}`
        : href;
      const external = /^https?:/i.test(href);
      const attrs = external ? ' target="_blank" rel="noreferrer"' : '';
      return `<a href="${safeHref}"${attrs}>${label}</a>`;
    })
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>');
}

function parseTable(lines, startIndex) {
  const tableLines = [];
  let index = startIndex;
  while (index < lines.length && /^\|.*\|\s*$/.test(lines[index])) {
    tableLines.push(lines[index]);
    index += 1;
  }
  if (tableLines.length < 2 || !/^\|(?:\s*:?-+:?\s*\|)+\s*$/.test(tableLines[1])) {
    return null;
  }

  const splitRow = (line) => line.split('|').slice(1, -1).map((cell) => inlineMarkdown(cell.trim()));
  const headers = splitRow(tableLines[0]);
  const rows = tableLines.slice(2).map(splitRow);

  const html = [`<table><thead><tr>${headers.map((cell) => `<th>${cell}</th>`).join('')}</tr></thead><tbody>`];
  rows.forEach((row) => {
    html.push(`<tr>${row.map((cell) => `<td>${cell}</td>`).join('')}</tr>`);
  });
  html.push('</tbody></table>');
  return { html: html.join(''), nextIndex: index - 1 };
}

function renderMarkdown(raw) {
  const safe = escapeHtml(raw.replace(/\r\n?/g, '\n'));
  const lines = safe.split('\n');
  const html = [];
  let inList = false;
  let listTag = 'ul';
  let inBlockquote = false;
  let inCode = false;
  let codeLines = [];
  let paragraph = [];

  function flushParagraph() {
    if (!paragraph.length) return;
    html.push(`<p>${inlineMarkdown(paragraph.join(' '))}</p>`);
    paragraph = [];
  }

  function flushList() {
    if (!inList) return;
    html.push(`</${listTag}>`);
    inList = false;
  }

  function flushBlockquote() {
    if (!inBlockquote) return;
    html.push('</blockquote>');
    inBlockquote = false;
  }

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed.startsWith('```')) {
      flushParagraph();
      flushList();
      flushBlockquote();
      if (inCode) {
        html.push(`<pre><code>${codeLines.join('\n')}</code></pre>`);
        inCode = false;
        codeLines = [];
      } else {
        inCode = true;
      }
      continue;
    }

    if (inCode) {
      codeLines.push(line);
      continue;
    }

    const table = parseTable(lines, i);
    if (table) {
      flushParagraph();
      flushList();
      flushBlockquote();
      html.push(table.html);
      i = table.nextIndex;
      continue;
    }

    if (!trimmed) {
      flushParagraph();
      flushList();
      flushBlockquote();
      continue;
    }

    const heading = trimmed.match(/^(#{1,4})\s+(.*)$/);
    if (heading) {
      flushParagraph();
      flushList();
      flushBlockquote();
      const level = heading[1].length;
      html.push(`<h${level}>${inlineMarkdown(heading[2])}</h${level}>`);
      continue;
    }

    if (/^---+$/.test(trimmed) || /^\*\*\*+$/.test(trimmed)) {
      flushParagraph();
      flushList();
      flushBlockquote();
      html.push('<hr>');
      continue;
    }

    const listMatch = trimmed.match(/^([-*]|\d+\.)\s+(.*)$/);
    if (listMatch) {
      flushParagraph();
      flushBlockquote();
      const nextTag = /\d+\./.test(listMatch[1]) ? 'ol' : 'ul';
      if (!inList || listTag !== nextTag) {
        flushList();
        listTag = nextTag;
        html.push(`<${listTag}>`);
        inList = true;
      }
      html.push(`<li>${inlineMarkdown(listMatch[2])}</li>`);
      continue;
    }

    const quoteMatch = trimmed.match(/^>\s?(.*)$/);
    if (quoteMatch) {
      flushParagraph();
      flushList();
      if (!inBlockquote) {
        html.push('<blockquote>');
        inBlockquote = true;
      }
      html.push(`<p>${inlineMarkdown(quoteMatch[1])}</p>`);
      continue;
    }

    paragraph.push(trimmed);
  }

  flushParagraph();
  flushList();
  flushBlockquote();
  if (inCode) {
    html.push(`<pre><code>${codeLines.join('\n')}</code></pre>`);
  }
  return html.join('\n');
}

function buildNav() {
  navEl.innerHTML = Object.entries(DOCS).map(([key, meta]) => {
    const active = key === currentDoc ? ' is-active' : '';
    return `<a class="viewer-doc-link${active}" href="md-viewer.html?doc=${encodeURIComponent(key)}"><strong>${meta.title}</strong><span>${meta.subtitle}</span></a>`;
  }).join('');
}

async function loadDoc() {
  titleEl.textContent = currentMeta.title;
  subtitleEl.textContent = currentMeta.subtitle;
  pathEl.textContent = currentMeta.path;
  buildNav();

  try {
    const response = await fetch(currentMeta.path);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const text = await response.text();
    contentEl.innerHTML = renderMarkdown(text);
    document.title = `${currentMeta.title} — Visor Markdown`;
  } catch (error) {
    contentEl.innerHTML = `<div class="viewer-error"><strong>No se pudo cargar el documento.</strong><p>${escapeHtml(String(error.message || error))}</p></div>`;
  }
}

loadDoc();
