# Espera percibida: progreso, incertidumbre y tiempo que pica

## Qué afirma

La percepción del tiempo en una interfaz no depende solo de la velocidad real. NNGroup resume tres límites clásicos de respuesta: alrededor de **0,1 s** se siente instantáneo; cerca de **1 s** el flujo mental sigue casi intacto aunque se note la espera; hacia **10 s** la atención se rompe si no hay feedback útil. Cuando la duración es larga o variable, el usuario necesita saber que el sistema sigue vivo y, si se puede, cuánto falta.

Los indicadores de progreso reducen incertidumbre: confirman que la acción fue recibida, dan algo que mirar, ofrecen una razón para esperar y ayudan a estimar si merece la pena seguir. Laws of UX recoge el **Doherty Threshold**: la interacción se siente más fluida cuando sistema y persona responden en un ritmo cercano a 400 ms, y la percepción de rendimiento puede modularse con feedback visual.

La trampa: un indicador puede empeorar la experiencia si promete precisión falsa, parpadea demasiado, aparece para tareas demasiado cortas o roba más atención que el contenido.

## Cómo se invierte en The TOC Project

Esta web no necesita cargar lento. La capa útil es simular **incertidumbre temporal estática**:

- porcentajes que casi parecen progreso, pero no son controles reales;
- barras visualmente descompensadas que explican límites de tiempo humanos;
- etiquetas como “0,1s / 1s / 10s” desplazadas lo justo para molestar;
- microcopy que aclara que es una demostración, no un estado del sistema.

La incomodidad viene de ver una promesa de progreso que no termina de alinearse. El aprendizaje real queda intacto: feedback temprano reduce ansiedad, pero feedback ambiguo aumenta revalidación.

## Patrón reutilizable: progreso sospechoso

1. **Estado declarado**: decir qué representa la barra o cinta antes de mostrarla.
2. **Hitos reales**: usar 0,1 s, 1 s, 10 s o 400 ms como marcas con fuente clara.
3. **Desfase visual leve**: mover marcas o segmentos sin cambiar significado ni foco.
4. **No fingir interacción**: no usar botones deshabilitados falsos ni spinners que parezcan carga real.
5. **Modo calma lineal**: convertirlo en una lista o barra recta sin animación ni engaño visual.

## Límite de seguridad

- No bloquear navegación ni retrasar carga real para “hacer efecto”.
- No usar loaders infinitos, flashes o animaciones persistentes.
- No colocar indicadores cerca de acciones críticas como si fueran estado real del sitio.
- No mostrar porcentajes concretos si parecen medir una tarea actual.
- Si hay movimiento, debe respetar `prefers-reduced-motion` y ser local, breve y no esencial.

## Oportunidad de producto

Añadir una tarjeta “12. La espera también desordena” y una mini-cinta de progreso sospechoso en `#evidence`. La pieza debe enlazar a esta guía y a las fuentes externas, manteniendo la barra como explicación estática: molesta la percepción del tiempo, no el funcionamiento de la página.

## Fuentes

- Nielsen Norman Group — Response Times: The 3 Important Limits: https://www.nngroup.com/articles/response-times-3-important-limits/
- Nielsen Norman Group — Progress Indicators Make a Slow System Less Insufferable: https://www.nngroup.com/articles/progress-indicators/
- Laws of UX — Doherty Threshold: https://lawsofux.com/doherty-threshold/
