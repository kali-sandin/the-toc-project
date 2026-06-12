# Fricción memorable: carga cognitiva, picos y cierre


> **Rol en la biblioteca:** diseño de fricción memorable: carga cognitiva, falsos protagonistas, pico/cierre y orden de foco.
> **Úsalo para:** evidence, footer, bloque de pico TOC y futuras comparaciones normal/TOC.
> **Complementa con:** [`README.md`](README.md) para la ruta editorial y [`motion_safety_research.md`](motion_safety_research.md) si añades movimiento.

Este documento añade una línea de investigación para `task_022`: cómo una web incómoda puede dejar recuerdo sin convertirse en una trampa de usabilidad.

## 1. La carga cognitiva no es una licencia para saturar

Nielsen Norman Group define la carga cognitiva de una interfaz como los recursos mentales necesarios para operar el sistema. También distingue la carga útil del contenido de la carga extrínseca: ruido visual, florituras tipográficas o decisiones que no ayudan a entender.

**Lectura TOC:** podemos subir carga extrínseca de forma deliberada, pero debe seguir siendo diagnosticable. La página debe provocar revalidación visual —“¿esto pertenece aquí?”— sin impedir que el usuario encuentre la explicación.

### Patrón aplicable

- Mantener títulos y anchors claros.
- Meter una anomalía por chunk, no una tormenta completa.
- Usar microcopy que explique por qué molesta, aunque esté mal aparcado.
- Evitar que el coste mental recaiga sobre acciones críticas: enlaces, navegación y contraste deben seguir vivos.

## 2. El efecto Von Restorff: una anomalía recordable puede ser útil o ladrona

Laws of UX resume el efecto Von Restorff como la tendencia a recordar mejor el elemento que destaca dentro de un conjunto similar.

**Uso normal:** hacer visible una acción importante.

**Uso TOC:** crear falsos protagonistas que parezcan importantes, pero etiquetarlos lo suficiente para que el usuario pueda corregir la lectura. Si todos los elementos gritan, ninguno aísla nada.

### Patrón aplicable

- Un sello o número demasiado presente por sección.
- Una referencia bibliográfica más rara que las demás.
- Un icono ambiguo acompañado siempre de texto legible.

**Límite:** no usar solo color o movimiento para comunicar importancia; el texto debe sostener el significado.

## 3. Peak-end rule: el recuerdo de la incomodidad depende de un pico y un cierre

Laws of UX explica la peak-end rule: las personas juzgan una experiencia en gran parte por cómo se sintieron en su punto más intenso y al final, no por el promedio exacto de cada momento.

**Lectura TOC:** la web necesita un pico de incomodidad reconocible y un cierre que confirme el criterio. No basta con repartir caos uniforme: una página entera igual de rara se vuelve ruido.

### Patrón aplicable

- Definir un “pico TOC” visible antes o dentro de `#evidence`.
- Cerrar con una nota útil que resuma qué se ha aprendido, pero físicamente desalineada.
- Usar el footer como memoria final: breve, claro y un poco ofensivo para la simetría.

**Límite:** el pico no debe ser un flash, mareo, modal bloqueante ni desplazamiento que haga huir el objetivo clicable.

## 4. Focus order: el caos visual no debe cambiar el orden operativo

WCAG 2.2 `Focus Order` recuerda que, si una página se navega secuencialmente y el orden afecta al significado u operación, los componentes deben recibir foco en un orden que preserve significado y operabilidad.

**Lectura TOC:** podemos torcer el layout visual, pero el DOM y el foco deben conservar una narrativa razonable: menú, hero, mapa de lectura, cards, manifiesto, diales de caos, evidence y footer.

### Patrón aplicable

- Si una tarjeta se mueve visualmente, su posición DOM debe seguir siendo coherente.
- Los sellos decorativos deben ser `aria-hidden` cuando no aportan información.
- Los enlaces de bibliografía deben conservar texto descriptivo.

## 5. Matriz de decisión rápida

| Hallazgo | Inversión TOC | Riesgo | Barandilla |
| --- | --- | --- | --- |
| Carga cognitiva | pedir revalidaciones visuales extra | saturación | chunks breves y anchors claros |
| Von Restorff | falso protagonista memorable | robar lo importante | etiqueta textual y una anomalía por grupo |
| Peak-end rule | pico y cierre incómodos | convertir todo en ruido | un punto intenso + cierre explicativo |
| Focus order | layout torcido con DOM sensato | navegación rota | no alterar secuencia operativa |

## 6. Oportunidades de producto

1. **Pico TOC medido:** un bloque visible que declare “este es el punto más incómodo” y explique qué diales sube.
2. **Footer como cierre de memoria:** convertir el final en resumen real de aprendizaje con una desalineación final deliberada.
3. **Checklist de foco seguro:** revisar que enlaces/anclas sigan un orden lógico aunque la composición parezca sabotearlo.

## Fuentes consultadas

- Nielsen Norman Group — Minimize Cognitive Load to Maximize Usability: https://www.nngroup.com/articles/minimize-cognitive-load/
- Laws of UX — Von Restorff Effect: https://lawsofux.com/von-restorff-effect/
- Laws of UX — Peak-End Rule: https://lawsofux.com/peak-end-rule/
- W3C/WCAG 2.2 — Focus Order: https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html
