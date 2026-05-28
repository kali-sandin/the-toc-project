# Errores, slips y recuperación — caos que no culpa al usuario

Esta nota amplía `task_022` con una frontera importante: una interfaz puede ser visualmente incómoda, pero no debería convertir la incomodidad en culpa, pérdida de contexto o callejón sin salida.

## Qué afirma

NNGroup distingue entre **slips** y **mistakes**. Los slips ocurren cuando la persona quería hacer una cosa y acaba ejecutando otra, muchas veces por distracción, automatismo o controles demasiado parecidos. La solución no es pedir “más cuidado”, sino diseñar sistemas menos propensos al error.

También recuerda que los mensajes de error deben ayudar a **reconocer, diagnosticar y recuperarse**: visibles, cerca del origen, constructivos y respetuosos con el esfuerzo del usuario.

## Cómo se invierte en The TOC Project

La web puede provocar tensión con controles y señales casi equivocadas, pero debe conservar una vía de recuperación clara:

> Haz que la interfaz parezca a punto de inducir un slip, pero deja siempre una etiqueta, ancla o explicación que permita corregir la interpretación.

Aplicaciones concretas:

- iconos o stickers que parecen confirmación, alerta o CTA, pero van acompañados de texto reparador;
- navegación con offsets incómodos, nunca con destinos ambiguos;
- bloques que parecen “error visual” pero explican qué perilla están subiendo;
- mensajes de seguridad que aparecen cerca del riesgo que explican, no escondidos al final.

## Límite de seguridad

No diseñar errores reales por estética.

- Un enlace no debe llevar a un destino distinto al que promete.
- Un botón no debe parecer desactivado si funciona, ni activo si no existe.
- El foco de teclado debe seguir un orden comprensible aunque el layout esté torcido.
- Las notas de recuperación deben estar cerca del punto de fricción.

## Patrón reutilizable: casi-slip + reparación inmediata

1. **Casi-slip:** una señal visual sugiere una acción o lectura equivocada.
2. **Freno semántico:** texto cercano corrige la interpretación antes de que sea daño real.
3. **Ruta de salida:** ancla, enlace o modo calma permite verificar sin castigo.
4. **Auditoría:** comprobar teclado, móvil y lector visual básico.

## Oportunidad de producto

Añadir una tarjeta visible en `#evidence` que explique por qué The TOC Project permite “casi errores” visuales, pero no errores funcionales. Esto puede convertirse después en una checklist para futuros cambios de navegación, iconos y botones falsos.

## Fuentes

- NNGroup — Preventing User Errors: Avoiding Unconscious Slips: https://www.nngroup.com/articles/slips/
- NNGroup — Error-Message Guidelines: https://www.nngroup.com/articles/error-message-guidelines/
- W3C/WCAG 2.2 — Focus Order: https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html
