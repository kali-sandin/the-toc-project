# Research: incomodidad temporal segura


> **Rol en la biblioteca:** barandillas para movimiento incómodo pero accesible.
> **Úsalo para:** delays, microanimaciones, estados hover/focus y pruebas de reducción de movimiento.
> **Complementa con:** [`interaction_memory_research.md`](interaction_memory_research.md) para intención semántica y [`friction_memory_research.md`](friction_memory_research.md) para no convertir el pico en mareo.

Este documento convierte la línea de microanimación de `interaction_memory_research.md` en reglas de producto. La pregunta no es "¿cómo hacemos que se mueva más?", sino "¿cómo usamos el tiempo para molestar sin cruzar la frontera de accesibilidad?".

## 1. Movimiento útil vs movimiento vampiro

NNGroup resume una regla importante: la animación de UI debe ser breve, sutil y tener propósito —feedback, cambio de estado, continuidad o refuerzo de un signifier—. También advierte que el movimiento captura atención con mucha fuerza porque la visión periférica detecta cambios incluso cuando no son relevantes para la tarea.

### Inversión TOC

En The TOC Project nos interesa explotar esa captura, pero con límites claros:

- el elemento secundario puede reaccionar antes que el elemento principal;
- una sombra puede llegar tarde, como si la interfaz dudara;
- badges y stickers pueden tener delays distintos dentro de una misma familia;
- el movimiento debe sentirse como "feedback ligeramente mal colocado", no como animación decorativa infinita.

**Regla Richard:** si la animación no comunica nada y además se repite sola, casi seguro es mala. Si comunica algo pero con ritmo incómodo, sirve.

## 2. Guardarraíles WCAG para no hacer daño

WCAG 2.2 aporta dos límites que conviene tratar como barandillas, no como decoración:

- **2.2.2 Pause, Stop, Hide:** contenido que se mueve, parpadea o actualiza automáticamente debe poder pausarse si dura más de cinco segundos y aparece junto a otro contenido.
- **2.3.1 Three Flashes or Below Threshold:** no provocar flashes rápidos por encima del umbral seguro.
- **2.3.3 Animation from Interactions:** el movimiento disparado por interacción debe poder desactivarse salvo que sea esencial para la funcionalidad o la información.

### Traducción al proyecto

- No loops intensos permanentes.
- No flashes ni alternancias de alto contraste a velocidad agresiva.
- Todo efecto de hover/focus debe tener versión estable dentro de `prefers-reduced-motion: reduce`.
- La incomodidad temporal puede quedar como cambio de color, borde o posición estática cuando el usuario pide reducción de movimiento.

## 3. Patrón: latencia falsa de baja intensidad

Una buena microinteracción TOC puede seguir este esquema:

1. El usuario hace hover o foco.
2. El borde reacciona rápido.
3. La sombra, el badge o el pseudo-elemento reacciona 80–160 ms tarde.
4. El texto importante no se mueve o se mueve menos que la decoración.

**Efecto:** la interfaz parece responder, pero el énfasis cae en una capa que no debería mandar.

**Límite:** nunca desplazar el objetivo clicable fuera del cursor; la molestia debe estar en la percepción, no en la puntería.

## 4. Patrón: ritmo familiar con una anomalía

Familias de componentes casi consistentes funcionan mejor que caos total:

| Familia | Duración base | Anomalía útil |
| --- | ---: | --- |
| Cards | 160 ms | una card tarda 230 ms |
| Stickers | 120 ms | uno responde antes que el hover del padre |
| Menú | 140 ms | un nudge se desplaza 2 px tarde |
| Evidence | 180 ms | un conector cambia opacidad antes que el título |

La anomalía debe ser local y detectable. Si todo tiene tiempos aleatorios, el usuario deja de percibir intención.

## 5. Matriz de decisión para futuras tareas

Antes de añadir movimiento, decidir:

- **Qué roba atención:** badge, sticker, sombra, conector, nudge.
- **Qué debe seguir estable:** enlace, texto principal, objetivo clicable.
- **Qué incomoda:** delay, duración, dirección, easing o énfasis desplazado.
- **Qué lo vuelve seguro:** `prefers-reduced-motion`, ausencia de flashes, sin loops largos, sin cambios de layout bruscos.

## 6. Oportunidades concretas

- Convertir los conectores de `#evidence` en señales con delay desigual, pero solo en hover/focus de la sección.
- Hacer que el menú tenga nudges que respondan tarde y etiquetas que mantengan claridad.
- Añadir una "prueba de movimiento reducido" visible: un pequeño texto que explique que el caos respeta `prefers-reduced-motion`.
- Revisar las microanimaciones de `task_029` para que no parezcan adorno suelto, sino un sistema temporal traicionero.

## 7. Referencias útiles

- NNGroup — The Role of Animation and Motion in UX: https://www.nngroup.com/articles/animation-purpose-ux/
- WCAG 2.2 — Pause, Stop, Hide: https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html
- WCAG 2.2 — Three Flashes or Below Threshold: https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html
- WCAG 2.2 — Animation from Interactions: https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html
