# Revelación progresiva y deuda visible

## Qué afirma

La revelación progresiva reduce carga cognitiva mostrando solo la información necesaria en cada momento y dejando detalles avanzados para cuando aportan valor. NNGroup la describe como una forma de gestionar complejidad: no se trata de esconder, sino de secuenciar.

En interfaces densas, enseñar todo a la vez obliga a comparar, filtrar y recordar demasiadas piezas. Enseñar demasiado poco crea sospecha: el usuario no sabe si falta algo, si debe abrir un panel o si está perdiendo contexto.

## Cómo se invierte en The TOC Project

El patrón útil para esta web es **detalle aplazado con deuda visible**:

- el contenido principal sigue legible sin desplegar nada;
- una pista lateral anuncia que hay más detalle, pero aparece levemente fuera de ritmo;
- el copy frontal explica el valor antes del coste;
- la rareza visual crea ganas de comprobar, no una puerta cerrada.

La incomodidad nace de una microdecisión: “¿me basta lo que veo o debería perseguir ese detalle?”. Eso encaja con el objetivo TOC perceptivo porque provoca revalidación sin romper navegación.

## Límite de seguridad

No usar este patrón para esconder información crítica, enlaces de salida, contraste legal o diagnóstico de errores. Tampoco debe depender de hover-only en móvil ni de acordeones que cambien altura de forma agresiva. Si hay interacción futura, debe tener estado visible, foco claro y copy que sobreviva en modo calma.

## Oportunidad de producto

Crear una tarjeta en `#evidence` que muestre un resumen útil y un microbloque de “detalle aplazado” siempre visible. La versión caótica puede desplazar ese detalle como si fuera un panel que llegó tarde; modo calma debe convertirlo en una nota lineal normal.

## Fuentes

- Nielsen Norman Group — Progressive Disclosure: https://www.nngroup.com/articles/progressive-disclosure/
- Nielsen Norman Group — Minimize Cognitive Load to Maximize Usability: https://www.nngroup.com/articles/minimize-cognitive-load/
- Nielsen Norman Group — Information Scent: https://www.nngroup.com/articles/information-scent/
