# Guía de investigación — The TOC Project

Esta carpeta es la biblioteca enlazable de la web. Su función no es acumular notas sueltas: debe explicar por qué la página molesta, qué límites no hay que cruzar y qué trabajo concreto puede salir de cada hallazgo.

## Índice de lectura recomendado

> Ruta corta para humanos: primero mapa, luego percepción, después interacción, seguridad y memoria. Si vas a tocar UI, lee también la fila temática que encaje con tu tarea.

1. [`toc_patterns.md`](toc_patterns.md) — mapa general de patrones visuales, criterios de calidad y fuentes base.
2. [`perception_deep_dive.md`](perception_deep_dive.md) — explicación de percepción visual: Gestalt, carga cognitiva, chunking y recorrido de lectura.
3. [`interaction_memory_research.md`](interaction_memory_research.md) — interacción, reconocimiento, memoria, iconos ambiguos y movimiento como captura de atención.
4. [`motion_safety_research.md`](motion_safety_research.md) — guardarraíles para microanimaciones incómodas sin romper accesibilidad.
5. [`friction_memory_research.md`](friction_memory_research.md) — carga cognitiva, pico/cierre memorable y orden de foco seguro.

## Mapa de decisiones por tipo de cambio

| Si vas a tocar… | Lee primero | No rompas |
| --- | --- | --- |
| Hero, cards, espaciado o composición | `toc_patterns.md` + `perception_deep_dive.md` | legibilidad mínima, foco visual local, navegación por anclas |
| Iconos, labels, menú o microcopy | `interaction_memory_research.md` | texto descriptivo; nunca icono como único significado |
| Hover, focus, delays, stickers animados | `motion_safety_research.md` | `prefers-reduced-motion`, ausencia de flashes y objetivos clicables estables |
| Evidence, bibliografía, pico TOC o footer | `friction_memory_research.md` | cierre explicativo, contraste y orden DOM/focus coherente |
| Switch normal/TOC o modo comparativo futuro | todos, empezando por esta guía | separar estilo de contenido; no duplicar research disperso |

## Mapa rápido por tema

| Tema | Documento principal | Para convertirlo en UI |
| --- | --- | --- |
| Patrones TOC generales | `toc_patterns.md` | anomalías de color, tipografía, padding, bordes, falsos protagonistas |
| Gestalt y agrupación | `perception_deep_dive.md` | falsas columnas, proximidad dudosa, continuidad rota, figura/fondo controlado |
| Carga cognitiva | `perception_deep_dive.md` | chunks útiles con offsets y jerarquía incómoda, no párrafos ilegibles |
| Memoria y reconocimiento | `interaction_memory_research.md` | labels casi familiares, iconos con texto dominante, navegación que obliga a verificar |
| Movimiento seguro | `motion_safety_research.md` | delays locales, hover/focus tardío, fallback `prefers-reduced-motion` |
| Fricción memorable | `friction_memory_research.md` | pico TOC, cierre útil, falsos protagonistas y orden de foco intacto |
| Bibliografía visible | `toc_patterns.md` + `motion_safety_research.md` + `friction_memory_research.md` | enlaces externos en `#evidence` con microcopy breve y layout torcido |

## Criterio editorial

Cada documento de research debería conservar este patrón:

- **qué afirma**: principio UX/perceptivo en lenguaje claro;
- **cómo se invierte**: aplicación TOC concreta;
- **límite de seguridad**: qué no debe romperse;
- **oportunidad de producto**: cómo convertirlo en tarea o componente visible.

Si un hallazgo no puede convertirse en UI, tarea o decisión de diseño, probablemente sobra o debe ir como nota secundaria.

## Fuentes externas principales

- Laws of UX — Von Restorff Effect: https://lawsofux.com/von-restorff-effect/
- Laws of UX — Aesthetic-Usability Effect: https://lawsofux.com/aesthetic-usability-effect/
- Nielsen Norman Group — The Aesthetic-Usability Effect: https://www.nngroup.com/articles/aesthetic-usability-effect/
- Nielsen Norman Group — The Role of Animation and Motion in UX: https://www.nngroup.com/articles/animation-purpose-ux/
- W3C/WCAG 2.2 — Contrast Minimum: https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html
- W3C/WCAG 2.2 — Animation from Interactions: https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html
- Nielsen Norman Group — Minimize Cognitive Load to Maximize Usability: https://www.nngroup.com/articles/minimize-cognitive-load/
- Laws of UX — Peak-End Rule: https://lawsofux.com/peak-end-rule/
- W3C/WCAG 2.2 — Focus Order: https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html

## Estado de implementación

- `#toc-dials` ya convierte las cuatro perillas TOC en una pieza visible y navegable, con anclas internas y enlaces al visor Markdown existente.
- `#evidence` ya muestra explicación real, bibliografía visible, leyenda de iconos ambiguos y nota de movimiento reducido.
- La web principal enlaza esta guía y cada documento temático desde el bloque `#evidence`.
- `friction_memory_research.md` deja preparada la siguiente capa: pico TOC, cierre memorable y checklist de foco seguro.
- Las microanimaciones deben seguir documentadas en `motion_safety_research.md` antes de ampliarse.
- Las próximas mejoras deberían priorizar claridad documental: menos ocurrencia suelta, más patrón reutilizable.

## Deuda editorial abierta

- `toc_patterns.md` todavía mezcla hallazgos iniciales con capas posteriores; conviene partirlo si crece mucho más.
- Cuando `task_041` añada visor Markdown, esta guía debe ser la portada del visor.
- `task_042` no debería arrancar hasta que el contenido pueda sobrevivir en modo normal y modo TOC sin duplicarse.
