# Sobrecarga de elección: demasiadas salidas también son fricción

## Hallazgo

La sobrecarga de elección aparece cuando una interfaz ofrece tantas opciones, o tan poco priorizadas, que el usuario dedica más esfuerzo a comparar que a avanzar. No es solo “muchos enlaces”: el problema crece cuando las opciones parecen equivalentes, compiten visualmente o no dejan claro cuál es la ruta recomendada.

En The TOC Project esta idea encaja muy bien: podemos aumentar el picor visual multiplicando rutas plausibles, pero la página debe seguir dando una salida honesta. El caos útil consiste en enseñar demasiadas puertas con una puerta principal todavía reconocible.

## Fuentes consultadas

- NNGroup, **Simplicity Wins over Abundance of Choice**: al aumentar las opciones sube el esfuerzo necesario para reunir información y decidir; demasiadas alternativas producen fatiga, insatisfacción o abandono.
- Laws of UX, **Hick’s Law**: el tiempo de decisión aumenta con el número y la complejidad de las opciones; recomienda minimizar opciones críticas, dividir tareas y destacar rutas recomendadas.
- Relación interna: `progressive_disclosure_research.md` ayuda a secuenciar complejidad; `information_scent_research.md` evita que las rutas parezcan trampas sin valor.

## Cómo empeorarlo con criterio

1. **Muchas rutas, una recomendada**: ofrecer varias salidas visuales, pero mantener una etiqueta principal inequívoca.
2. **Opciones casi equivalentes**: hacer que dos o tres chips parezcan competir por prioridad aunque una nota explique el criterio.
3. **Coste visible**: mostrar que elegir requiere comparar, no esconder el coste ni convertirlo en sorpresa.
4. **Calma jerarquizada**: en modo calma las opciones deben volverse lista lineal con recomendación explícita.
5. **Sin bloqueo real**: no añadir pasos intermedios ni enlaces falsos que impidan llegar a la documentación.

## Aplicación actual

Añadir una tarjeta visible “15. Elegir también cansa” dentro de `#evidence`, con una mini-lista de rutas competidoras. En TOC la lista se ve como tres puertas mal alineadas; en calma debe convertirse en una lista limpia con recomendación visible.

## Subtarea recomendada

Auditar en móvil/calma que la mini-lista no crea overflow, que la opción recomendada sigue visible, que las fuentes nuevas empiezan con palabras claras y que ningún enlace o chip parece una navegación falsa obligatoria.
