# Atención selectiva y escaneo — fricción útil sin esconder cambios

Esta nota añade una capa a `task_022`: no todo el TOC visual sale de la desalineación. También aparece cuando la página fuerza al usuario a **reconfirmar dónde mirar** y qué ha cambiado.

## Qué afirma

La lectura web suele ser escaneada, no lineal. NNGroup describe el patrón en F como una concentración de fijaciones arriba y a la izquierda, pero advierte que no es el único patrón ni un objetivo deseable: aparece cuando el contenido no guía bien la mirada.

La misma familia de problemas explica la *change blindness*: cambios relevantes pueden pasar inadvertidos si ocurren lejos del foco de atención o sin una señal suficientemente fuerte.

## Cómo se invierte en The TOC Project

La web puede provocar picor visual sin bloquear contenido si usa esta regla:

> Mantén un carril de lectura reconocible, pero coloca microtraiciones justo fuera del carril para que el ojo tenga que volver a validar el bloque.

Aplicaciones concretas:

- titulares y números que parecen puntos de entrada, pero no siempre son la prioridad real;
- enlaces internos claros con offsets visuales ligeramente incómodos;
- notas laterales que parecen actualización urgente aunque solo explican una fuente;
- microcambios en badges, stickers o leyendas que obligan a comparar sin ocultar el texto principal.

## Límite de seguridad

No confundir fricción perceptiva con información escondida.

- Si algo cambia, debe tener texto o contexto visible.
- Si un enlace parece acción principal, su etiqueta debe decir a dónde lleva.
- Si se usa movimiento o retraso, debe respetar `prefers-reduced-motion`.
- Si la anomalía afecta a lectura, debe conservar contraste y orden DOM razonable.

## Patrón reutilizable: carril + traición lateral

1. **Carril:** título, subtítulo o ancla que permite entender el bloque en 2–4 segundos.
2. **Traición lateral:** elemento visual cerca del carril que casi compite con él.
3. **Reparación:** enlace, leyenda o microcopy que explica la rareza.
4. **Chequeo:** tabulación y móvil deben seguir el carril, no la traición.

## Oportunidad de producto

La siguiente mejora visible puede convertir esta nota en un mini-módulo dentro de `#evidence`: una tarjeta “Atención selectiva” que explique por qué algunos cambios no se ven aunque estén delante. Debe ser informativa, enlazable y visualmente mal aparcada, no una animación nueva gratuita.

## Fuentes

- NNGroup — F-Shaped Pattern of Reading on the Web: https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/
- NNGroup — Change Blindness in UX: https://www.nngroup.com/articles/change-blindness-definition/
- W3C/WCAG 2.2 — Animation from Interactions: https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html
