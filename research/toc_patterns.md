# Hallazgos: Patrones de Diseño TOC Visual

## 1. Tipografía Agresiva
- **Kerning errático:** Letras demasiado juntas o separadas de forma impredecible.
- **Fuentes 'Uncanny':** Fuentes que parecen legibles pero tienen glifos ligeramente deformados.
- **Escalado inconsistente:** Mezclar tamaños de fuente sin jerarquía lógica.

## 2. Color y Contraste
- **Paletas 'Nauseabundas':** Combinaciones de colores con alta saturación y poco contraste de luminancia (ej. verde neón sobre azul eléctrico).
- **Vibración cromática:** Bordes de elementos que parecen 'vibrar' debido a la proximidad de colores complementarios saturados.

## 3. Layout y Espaciado
- **Asimetría Violenta:** Romper la rejilla (grid) de forma que el ojo no encuentre un punto de descanso.
- **Padding 'Traicionero':** Contenedores con paddings que cambian según el elemento, dificultando la creación de un patrón mental.
- **Elementos 'Flotantes':** Elementos que parecen estar fuera de su contenedor o mal alineados con el flujo natural.

## 4. Interacción
- **Hovers inesperados:** Efectos de hover que mueven el elemento de su posición original, obligando al usuario a reajustar la vista.

## 5. Nuevos Hallazgos: Fatiga Visual y Vibración Cromática (NIVEL AVANZADO)
- **Vibración Cromática (Chromostereopsis):** Uso de colores complementarios de alta saturación (ej. Rojo y Cian) que engañan al ojo creando una sensación de profundidad falsa y "vibración" en los bordes.
- **Fatiga por Contraste de Luminancia:** Alternar elementos con contrastes extremos (blanco puro vs negro puro) muy rápido en el scroll, agotando la capacidad de adaptación de la pupila.
- **Efecto de "Flicker" de Color:** Uso de gradientes que pasan de colores muy distintos en distancias muy cortas, creando un efecto de parpadeo visual.

## 6. Nuevos Patrones de Incomodidad (Nivel Pro)
- **Simetría 'Rota':** Uso de elementos que parecen ser pares pero tienen tamaños ligeramente distintos (ej. dos botones, uno de 40px y otro de 42px).
- **Bordes 'Masticados':** Uso de `border-radius` aleatorios en cada elemento de una lista, rompiendo la uniformidad.
- **Z-index Confuso:** Elementos que aparecen por debajo o por encima de otros de forma impredecible, rompiendo la jerarquía visual.
- **Tipografía 'Tremenda':** Uso de fuentes muy pesadas (Black/ExtraBold) mezcladas con fuentes muy ligeras sin transición.

## 7. Principios UX útiles para empeorar una web sin romperla del todo

### 7.1 Von Restorff Effect (aislamiento visual)
Cuando casi todos los elementos siguen una familia visual y uno rompe el patrón, ese elemento se recuerda más. En una web normal esto se usa para resaltar CTAs; en The TOC Project sirve para crear "falsos protagonistas" que roban atención aunque no deberían.

**Aplicación práctica al proyecto:**
- crear uno o dos elementos demasiado distintos dentro de grupos casi homogéneos
- usar color, peso tipográfico o espaciado como anomalía local
- evitar que todo compita a la vez: si todo grita, nada destaca

**Riesgo:** si se abusa, el caos deja de tener picos memorables y se vuelve una sopa uniforme.

### 7.2 Aesthetic-Usability Effect invertido
Los usuarios toleran pequeños problemas cuando algo "parece" agradable. En nuestro caso interesa hacer lo contrario: mantener suficiente claridad estructural para que siga usándose, pero introducir fricción visual suficiente para que el ojo sienta que algo va mal aunque la página funcione.

**Aplicación práctica al proyecto:**
- mantener navegación, scroll y lectura base intactos
- degradar confianza visual con inconsistencias finas en jerarquía, espaciado y ritmo
- esconder la incomodidad en detalles acumulativos, no solo en golpes grandes de color

**Riesgo:** si la legibilidad cae demasiado, deja de ser incomodidad interesante y pasa a ser simple rotura.

### 7.3 Contraste sobre fondos complejos
La investigación sobre texto sobre imágenes recuerda algo útil incluso para una web deliberadamente incómoda: el contraste insuficiente destruye lectura antes de generar tensión interesante. La incomodidad más efectiva aparece cuando el contenido todavía se puede procesar, pero cuesta más de lo normal.

**Aplicación práctica al proyecto:**
- combinar fondos agresivos con overlays o cajas que preserven lectura mínima
- usar microchoques de color y textura sin anular por completo el texto
- reservar los peores contrastes para detalles secundarios, no para todo el contenido clave

**Riesgo:** si todo el texto entra en zona de lectura dudosa, el usuario deja de experimentar TOC visual y simplemente abandona.

## 8. Oportunidades concretas detectadas en The TOC Project
- **Hero con protagonista falso:** introducir un sello, badge o etiqueta visualmente dominante que parezca más importante que el H1.
- **Ritmo vertical contaminado:** alternar separaciones que casi parecen sistemáticas pero fallan en cada sección.
- **Énfasis mal repartido:** destacar palabras irrelevantes dentro de frases importantes para sabotear la jerarquía semántica.
- **Casi-componentes:** repetir bloques parecidos con una sola diferencia molesta de ancho, altura o alineación.
- **Interferencia local:** meter pequeños adornos, tags o pseudo-elementos que parezcan accidentales pero no rompan interacción.

## 9. Criterio de calidad para próximas tasks
Una buena task TOC no debe limitarse a "hacerlo feo". Debe cumplir estas tres condiciones:
1. **Se nota al instante**: el ojo detecta tensión visual real.
2. **Sigue funcionando**: aún se puede navegar, leer y entender la intención.
3. **Tiene una lógica concreta**: ataca jerarquía, ritmo, contraste, simetría o memoria visual, no caos aleatorio.

## 10. Nueva capa informativa para la web

La task_022 cambia el proyecto de "landing caótica" a "landing caótica + mini explicación real". La web debe poder informar sin curarse del todo: contenido verificable, pero colocado con la misma mala intención visual.

### Ideas científicas/UX que conviene mostrar en pantalla

1. **Predicción visual y patrón casi roto**
   - Las interfaces ordenadas permiten anticipar alineación, ritmo y jerarquía.
   - La incomodidad aparece mejor cuando hay un patrón reconocible que falla por poco, no cuando todo es ruido.
   - Aplicación: cards repetidas con una sola desviación de ancho, listados con bullets casi alineados, bloques que parecen seguir una grid pero se salen.

2. **Efecto Von Restorff / aislamiento**
   - Entre elementos parecidos, el elemento distinto tiende a recordarse más.
   - Aplicación TOC: crear falsos protagonistas que no son la acción principal: badges, números, etiquetas o notas demasiado visibles.
   - Riesgo: si cada cosa es distinta, desaparece el aislamiento y solo queda saturación.

3. **Aesthetic-usability effect invertido**
   - La investigación de HCI muestra que las interfaces estéticamente agradables suelen percibirse como más usables.
   - Aplicación TOC: preservar navegación y lectura, pero quitarle a la página la confianza estética que normalmente suaviza problemas menores.
   - Riesgo: si se rompe la funcionalidad, ya no es tensión perceptiva; es fallo.

4. **Contraste mínimo como frontera de diseño**
   - WCAG usa 4.5:1 como referencia de contraste para texto normal y 3:1 para texto grande.
   - NNGroup recuerda que texto sobre fondos complejos necesita ayuda de contraste para seguir siendo legible.
   - Aplicación TOC: usar fondos agresivos y vibración cromática en entorno, pero mantener cajas/overlays donde haya información útil.

### Estructura aplicada

Se añade sección `#evidence` con cuatro notas:
- orden visual y expectativas
- Von Restorff aplicado como falso foco
- aesthetic-usability invertido
- contraste mínimo como límite antes del ruido inútil

La sección está deliberadamente desalineada, pero mantiene párrafos breves y encabezados claros para que funcione como fuente de información real.

## 11. Fuentes consultadas
- Laws of UX — **Von Restorff Effect**: aislamiento visual y memoria de elementos distintivos.
- Laws of UX — **Aesthetic-Usability Effect**: relación entre percepción estética y tolerancia a fricciones de uso.
- Nielsen Norman Group — **The Aesthetic-Usability Effect**: lo atractivo puede hacer que usuarios toleren problemas menores.
- Nielsen Norman Group — **Ensure High Contrast for Text Over Images**: preservar legibilidad mínima incluso sobre fondos agresivos.
- W3C/WCAG 2.2 — **Contrast Minimum**: referencia 4.5:1 para texto normal y 3:1 para texto grande.
