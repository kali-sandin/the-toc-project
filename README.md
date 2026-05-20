# The TOC Project

Web estática deliberadamente incómoda y desalineada para provocar TOC visual sin cargarse del todo la usabilidad.

## Qué es esto

The TOC Project es el proyecto activo de TheOffice para construir una web que genere incomodidad visual calculada: márgenes irregulares, jerarquías torcidas, ritmos rotos, colores que discuten entre sí y pequeños sabotajes de layout que siguen siendo navegables.

La idea no es hacer una web rota sin más. La idea es mantener suficiente legibilidad para que el cerebro detecte que *casi* hay orden, pero nunca termine de encontrarlo.

## Objetivo

- provocar tensión visual inmediata
- seguir siendo legible y navegable a nivel básico
- empeorar la armonía visual iteración tras iteración con criterio, no con caos aleatorio
- incorporar también información útil y real sobre el fenómeno

## Estado actual

La página incluye varias líneas de sabotaje visual ya activas:

- menú con jerarquía desigual y labels descompensadas
- hero con capas, badges y marcas que roban foco
- cards con simetrías casi gemelas pero defectuosas
- manifiesto con listas torcidas y bullets desplazados
- sección `#evidence` con explicación real sobre percepción visual, memoria y contraste
- ritmo vertical contaminado entre secciones
- tipografía y kerning deliberadamente inconsistentes

## Estructura del repo

```text
.
├── index.html            # estructura principal de la landing
├── styles.css            # caos visual centralizado
├── README.md             # este documento, por fin útil
└── research/
    ├── README.md                       # guía de lectura, mapa por tema y criterio editorial
    ├── toc_patterns.md                 # hallazgos, principios UX invertidos y oportunidades
    ├── perception_deep_dive.md         # Gestalt, carga cognitiva, chunking y escaneo web aplicados al caos
    ├── interaction_memory_research.md  # movimiento, reconocimiento, memoria e iconos ambiguos
    └── motion_safety_research.md       # microanimación incómoda con guardarraíles WCAG
```

## Cómo verlo en local

Al ser una web estática, basta con servir el directorio con cualquier servidor simple. Por ejemplo:

```bash
python3 -m http.server 8000
```

Luego abre `http://localhost:8000`.

Si prefieres no improvisar como Dinesh, usa el flujo normal del proyecto o el servidor que ya tengas para estáticos.

## Ficheros clave

### `index.html`
Contiene la estructura semántica principal:
- menú de secciones
- hero
- tarjetas
- manifiesto
- bloque informativo de evidencias/referencias
- footer

### `styles.css`
Aquí vive la mayor parte del sabotaje:
- offsets
- rotaciones leves
- contraste agresivo
- jerarquías visuales inconsistentes
- microasimetrías
- stacking confuso

### `research/README.md`
Ordena la documentación enlazada:
- ruta de lectura recomendada
- mapa por tema y por documento
- criterio editorial para que cada hallazgo acabe en UI/tarea/decisión
- fuentes externas principales

### `research/toc_patterns.md`
Documenta patrones útiles para empeorar la web sin destruirla:
- tipografía agresiva
- vibración cromática
- asimetría violenta
- hovers traicioneros
- efecto Von Restorff aplicado al mal
- aesthetic-usability invertido
- contraste mínimo como frontera antes del ruido inútil
- criterio para futuras tasks

### `research/perception_deep_dive.md`
Profundiza en la base perceptiva del proyecto:
- Gestalt aplicada al mal: proximidad, similitud, continuidad, figura/fondo
- carga cognitiva extrínseca como fricción visual controlada
- chunking para mantener información útil aunque el layout moleste
- patrón F y escaneo web como material para sabotaje de recorrido
- modelo de cuatro perillas: agrupación, recorrido, jerarquía y carga

### `research/interaction_memory_research.md`
Abre dos líneas nuevas de evolución:
- movimiento como secuestro controlado de atención
- microfeedback falso pero reversible
- reconocimiento vs recuerdo aplicado a labels casi familiares
- iconos ambiguos siempre acompañados de texto para no romper uso

### `research/motion_safety_research.md`
Define cómo usar incomodidad temporal sin cruzar líneas de accesibilidad:
- movimiento breve, útil y molesto solo por timing
- guardarraíles WCAG para pausa, flashes y animación por interacción
- patrones de latencia falsa y anomalías locales
- checklist para que futuras microanimaciones respeten `prefers-reduced-motion`

## Criterio de diseño

Una intervención buena en este proyecto debería cumplir tres cosas:

1. se nota al instante
2. no rompe navegación ni lectura básica
3. ataca una dimensión concreta del orden visual: jerarquía, ritmo, simetría, contraste o memoria

Si solo lo haces feo, no sirve.

## Flujo de trabajo en TheOffice

Este repo se trabaja desde TheOffice por tareas. El flujo sano es:

1. revisar chat y kanban
2. escoger una tarea concreta
3. declarar intención
4. ejecutar cambios reales
5. verificar
6. reportar
7. si procede, desplegar con el flujo de oficina

No hay gloria en mover una tarjeta y desaparecer.

## Ideas de trabajo futuras

Basadas en `research/README.md` y `research/toc_patterns.md`:

- ampliar `#evidence` con una mini bibliografía visible y enlaces externos
- convertir el deep dive en una matriz visual dentro de la página
- crear microanimaciones accesibles y deliberadamente desacompasadas siguiendo `research/motion_safety_research.md`
- añadir iconos/labels ambiguos que obliguen a reconocer dos veces
- sabotear proximidad y agrupación sin romper clics
- falsos protagonistas visuales en zonas secundarias
- más información real sobre TOC visual, fatiga y percepción
- contrastes agresivos con legibilidad mínima preservada
- componentes repetidos con una sola diferencia molesta
- interferencias locales que no rompan interacción

## Publicación

URL pública actual:

<https://kali-sandin.github.io/the-toc-project/>

## Nota final

Este proyecto existe para demostrar que hay una diferencia entre desorden mediocre y maldad visual con método.
