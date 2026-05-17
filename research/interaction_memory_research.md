# Research: movimiento, memoria e iconos ambiguos para TOC visual

Este documento abre dos líneas nuevas para The TOC Project: fricción temporal mediante movimiento y fricción semántica mediante reconocimiento/memoria. No sustituye a `perception_deep_dive.md`; lo complementa con patrones que se sienten durante la interacción, no solo al mirar la composición estática.

## 1. Movimiento como secuestro de atención

NNGroup recuerda que el movimiento en UI atrae la atención con mucha fuerza: nuestra visión periférica detecta cambios y desplazamientos incluso cuando no son relevantes para la tarea. En buen diseño, la animación debe ser breve, sutil y con propósito: feedback, cambio de estado, continuidad o relación entre objetos.

### Inversión TOC

En The TOC Project podemos usar movimiento como microsecuestro controlado:

- elementos secundarios que tiemblan o cambian con más energía que los principales;
- hover/focus que desplaza un bloque unos píxeles tarde;
- pequeños parpadeos de sombra o borde que parecen feedback pero no comunican nada útil;
- animaciones con duración casi consistente: 120ms, 180ms, 155ms, 230ms.

### Regla de seguridad

El movimiento debe ser molesto, no agresivo:

- respetar `prefers-reduced-motion`;
- no usar flashes rápidos ni loops intensos;
- no mover objetivos clicables fuera del cursor de forma que rompa interacción;
- reservar el movimiento para capas decorativas, badges, stickers o microfeedback.

### Patrón útil

**Feedback falso pero reversible:** al interactuar, un elemento reacciona como si confirmara una acción, pero el énfasis cae en una etiqueta secundaria. Esto aumenta la incomodidad sin impedir el uso.

## 2. Reconocimiento vs recall: hacer que el usuario dude de lo que ya vio

NNGroup explica que reconocer una opción dentro de una lista es más fácil que recordarla desde cero porque el contexto ayuda a recuperar información. Las interfaces buenas favorecen reconocimiento: labels claros, iconos estándar, opciones visibles.

### Inversión TOC

Podemos mantener opciones visibles, pero hacerlas semánticamente irritantes:

- labels casi sinónimos que parecen equivalentes pero llevan a secciones distintas;
- iconos o símbolos no universales junto a texto claro, creando una doble señal rara;
- repetición de palabras clave con microvariantes: `evidencia`, `prueba`, `dato`, `ruido útil`;
- breadcrumbs o nudges que ayudan, pero con tono ambiguo.

El objetivo no es esconder navegación. Es provocar una mini-verificación: “sé dónde estoy, pero ¿por qué esto se llama así?”

## 3. Iconos ambiguos como ruido semántico

NNGroup señala que pocos iconos son realmente universales; fuera de casos como inicio, imprimir o lupa, muchos iconos necesitan etiqueta textual para comunicar significado. Sin etiqueta, pueden convertirse en ruido visual y frustración.

### Inversión TOC

Usar iconos deliberadamente raros, pero siempre acompañados de texto:

- símbolos que no son decorativos del todo, pero tampoco mandan;
- iconos repetidos con significados levemente distintos;
- pares icono-label que no encajan emocionalmente (`⚠` junto a algo tranquilo, `✓` junto a algo dudoso);
- iconos sobredimensionados que parecen CTA pero solo acompañan una nota.

### Límite

No usar iconos ambiguos como único canal para enlaces o acciones. La ambigüedad debe vivir en la interpretación, no en la capacidad de usar la página.

## 4. Dos nuevas líneas de trabajo

### Línea A — Ritmo temporal traicionero

Crear un sistema de microanimaciones inconsistentes pero accesibles:

- duración variable por familia de componente;
- delays mínimos que hagan que una card responda tarde;
- sombras o badges que reaccionan antes que el texto;
- `prefers-reduced-motion` para apagar movimiento real y dejar solo cambios estáticos.

**Efecto esperado:** el usuario siente que la interfaz responde, pero el feedback no cae donde debería.

### Línea B — Semántica casi reconocible

Crear una capa de navegación/leyenda con labels e iconos que ayudan y molestan a la vez:

- glosario visible de términos TOC;
- iconos con texto obligatorio;
- microcopy que diferencia conceptos cercanos;
- una contradicción leve por item.

**Efecto esperado:** la información sigue siendo encontrable, pero el reconocimiento requiere una doble lectura.

## 5. Checklist antes de implementar

- ¿El patrón nuevo aumenta incomodidad perceptiva o solo añade decoración?
- ¿Se puede explicar con una base UX real: movimiento, memoria, reconocimiento, iconos?
- ¿Sigue habiendo texto suficiente para entender la acción o sección?
- ¿Respeta reducción de movimiento?
- ¿Hay una anomalía concreta por grupo, no caos en todas partes?

## 6. Fuentes consultadas

- Nielsen Norman Group — The Role of Animation and Motion in UX: animación breve, sutil y orientada a feedback/estado; el movimiento captura atención.
- Nielsen Norman Group — Animation for Attention and Comprehension: las animaciones deben tener objetivo, frecuencia y mecánica claros; la visión periférica atiende movimiento.
- Nielsen Norman Group — Memory Recognition and Recall in User Interfaces: reconocer opciones visibles es más fácil que recordarlas desde cero; el contexto activa memoria.
- Nielsen Norman Group — Icon Usability: muchos iconos no son universales y necesitan etiquetas para evitar ambigüedad.
