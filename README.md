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
- ritmo vertical contaminado entre secciones
- tipografía y kerning deliberadamente inconsistentes

## Estructura del repo

```text
.
├── index.html            # estructura principal de la landing
├── styles.css            # caos visual centralizado
├── README.md             # este documento, por fin útil
└── research/
    └── toc_patterns.md   # hallazgos, principios UX invertidos y oportunidades
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
- footer

### `styles.css`
Aquí vive la mayor parte del sabotaje:
- offsets
- rotaciones leves
- contraste agresivo
- jerarquías visuales inconsistentes
- microasimetrías
- stacking confuso

### `research/toc_patterns.md`
Documenta patrones útiles para empeorar la web sin destruirla:
- tipografía agresiva
- vibración cromática
- asimetría violenta
- hovers traicioneros
- efecto Von Restorff aplicado al mal
- criterio para futuras tasks

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

Basadas en `research/toc_patterns.md`:

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
