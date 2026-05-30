# Información con olor: foraging y señales de coste

## Qué afirma

La teoría de **information foraging** describe la navegación web como una búsqueda de valor: las personas estiman cuánta información útil obtendrán frente al coste de conseguirla. NNGroup lo resume como una relación práctica: valor esperado dividido por esfuerzo de extracción. Si el coste percibido sube demasiado, el usuario abandona, busca otra ruta o deja de confiar en el enlace.

Dentro de esa teoría, **information scent** es la promesa que emite un enlace, tarjeta o bloque antes de abrirlo. Sale de varias pistas: el texto del enlace, el contexto cercano, la ubicación, la marca/fuente y experiencias previas. Un rótulo claro aumenta el olor; una etiqueta vaga o demasiado decorativa lo rebaja aunque el contenido real sea bueno.

La **progressive disclosure** añade un segundo límite: no todo debe estar arriba. Mostrar primero lo esencial y revelar detalles bajo demanda reduce carga, errores y escaneo inútil, siempre que la división entre contenido primario y secundario sea honesta.

## Cómo se invierte en The TOC Project

La oportunidad TOC no es esconder información, sino crear **olor contradictorio controlado**:

- el enlace promete una fuente seria con las primeras palabras;
- el contenedor parece sospechoso, barato o fuera de lugar;
- el contexto alrededor deja claro qué se gana si se abre;
- la ruta a la explicación completa sigue cerca y estable.

Así la página provoca una mini-revalidación: “esto parece basura visual, pero huele a fuente útil”. Es más interesante que añadir ruido porque obliga a comparar valor y coste sin romper la decisión.

## Patrón reutilizable: señuelo honesto

1. **Etiqueta frontal clara**: las primeras 2–3 palabras dicen el destino real: “NNGroup — Information scent”, “WCAG — Focus order”.
2. **Coste visual incómodo**: borde, rotación, sticker o posición hacen que parezca una promoción dudosa.
3. **Promesa de valor inmediata**: una frase cercana explica qué aprende el usuario.
4. **Salida secundaria**: enlace interno al documento largo para quien quiera detalles.
5. **Modo calma sin disfraz**: en calma el señuelo se convierte en lista o tarjeta limpia.

## Límite de seguridad

- No usar textos de enlace tipo “clic aquí”, “más”, “ver esto” o chistes como única señal.
- No disfrazar enlaces externos como botones de sistema, alertas críticas o errores reales.
- No mover el objetivo clicable ni cambiar su destino en hover/focus.
- No ocultar la fuente principal detrás de una interacción obligatoria.
- En móvil, el olor debe sobrevivir al primer escaneo: título, fuente y beneficio visibles sin depender de layout ancho.

## Oportunidad de producto

Crear una tarjeta visible “11. Lo útil debe oler útil” dentro de `#evidence`, enlazada a este documento y a fuentes NNGroup. Después, auditar en móvil/calma si los enlaces nuevos mantienen etiqueta clara, destino predecible y beneficio visible pese al disfraz visual.

## Fuentes

- Nielsen Norman Group — Information Scent: How Users Decide Where to Go Next: https://www.nngroup.com/articles/information-scent/
- Nielsen Norman Group — Information Foraging: A Theory of How People Navigate on the Web: https://www.nngroup.com/articles/information-foraging/
- Nielsen Norman Group — Progressive Disclosure: https://www.nngroup.com/articles/progressive-disclosure/
