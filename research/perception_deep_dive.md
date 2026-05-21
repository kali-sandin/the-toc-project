# Deep dive: percepción, orden visual y fricción TOC


> **Rol en la biblioteca:** explicación perceptiva de agrupación, jerarquía, recorrido y carga.
> **Úsalo para:** tocar layout, cards, evidence o ritmo de lectura sin caer en caos aleatorio.
> **Complementa con:** [`toc_patterns.md`](toc_patterns.md) para patrones concretos y [`interaction_memory_research.md`](interaction_memory_research.md) si el cambio afecta navegación o reconocimiento.

Este documento amplía `toc_patterns.md` con una capa más operativa: no solo qué patrones molestan, sino por qué funcionan y cómo convertirlos en tareas de producto sin destruir la legibilidad.

## 1. Principio base: el ojo no lee píxeles, infiere estructura

La percepción visual intenta convertir señales dispersas en grupos, jerarquías y recorridos. Una interfaz cómoda reduce trabajo mental porque permite predecir qué pertenece a qué, qué es importante y dónde seguirá la lectura.

En The TOC Project nos interesa lo contrario, pero con límite: crear señales que prometen orden y luego lo contradicen por pequeñas diferencias. El usuario no debe pensar "esto está roto"; debe sentir "esto casi encaja y me molesta que no encaje".

## 2. Gestalt aplicada al mal

### Proximidad

NNGroup resume el principio de proximidad así: los elementos cercanos se perciben como relacionados; los separados, como grupos distintos. Además, la proximidad puede imponerse sobre color o forma.

**Uso normal:** agrupar controles relacionados y separar funciones distintas.

**Uso TOC:** colocar elementos relacionados a distancias apenas incorrectas, o acercar elementos no relacionados para producir falsas agrupaciones.

Patrones aplicables:
- Menú con separaciones que sugieren subgrupos inexistentes.
- Bibliografía con enlaces casi en columnas, pero con un link fuera de ritmo.
- Cards informativas donde el número parece pertenecer al bloque equivocado.

**Límite:** no acercar tanto que se confunda el click/tap real.

### Similitud

Elementos parecidos en forma, color o tratamiento se leen como familia.

**Uso TOC:** crear familias casi idénticas con una anomalía pequeña: un borde más grueso, un radio distinto, una etiqueta con otra fuente, un ancho 3px mayor.

**Efecto buscado:** el cerebro detecta repetición y luego tropieza con la excepción.

### Continuidad

El ojo sigue líneas, ejes y recorridos suaves.

**Uso TOC:** romper ejes con desplazamientos leves: una línea de lectura empieza ordenada, se tuerce en el segundo bloque y vuelve a medio alinearse en el cuarto.

**Efecto buscado:** microcorrecciones constantes durante el escaneo.

### Figura/fondo

La interfaz debe dejar claro qué es contenido y qué es fondo.

**Uso TOC:** fondos activos y ruido visual alrededor del contenido, pero overlays suficientes para que el texto no desaparezca.

**Límite:** si figura/fondo colapsa, deja de ser incomodidad y pasa a ser ilegibilidad.

## 3. Carga cognitiva: incomodar sin agotar

NNGroup define la carga cognitiva de una UI como los recursos mentales necesarios para operar el sistema. La carga extrínseca —procesamiento que no ayuda al objetivo— es lo que normalmente se debe reducir.

**Uso TOC:** aumentar carga extrínseca de forma controlada:
- más comprobaciones visuales de las necesarias;
- jerarquías que parecen claras pero compiten;
- agrupaciones que obligan a revalidar qué pertenece a qué;
- microdesalineaciones que no bloquean lectura, pero sí impiden fluidez.

**Regla de producto:** añadir fricción visual, no fricción funcional. Leer debe costar un poco más; navegar no debe romperse.

## 4. Chunking: información útil en piezas incómodas

El chunking ayuda a procesar contenido agrupándolo en unidades pequeñas y distinguibles. Esto es clave para que la web sea informativa.

**Uso normal:** párrafos cortos, grupos claros, jerarquía limpia.

**Uso TOC:** conservar chunks reales, pero sabotear su presentación:
- notas breves con títulos claros;
- agrupación semántica correcta;
- offsets, rotaciones y tamaños sutilmente discordantes;
- una anomalía por grupo, no veinte.

La sección `#evidence` debe seguir este patrón: información real dividida en piezas digeribles, presentada con mala educación visual.

## 5. Escaneo web y patrón F

NNGroup documenta que usuarios suelen escanear páginas en patrones como la F: franja superior, segunda franja más corta y descenso vertical por la izquierda. También aclara que no es el único patrón, y que una buena estructura puede evitar escaneos pobres.

**Uso TOC:** jugar con el escaneo sin sabotearlo del todo:
- poner anomalías cerca del eje izquierdo para robar fijaciones;
- hacer que la segunda línea visual sea más corta o más torcida de lo esperado;
- colocar notas laterales que compitan con el recorrido natural.

**Límite:** mantener encabezados y anchors reconocibles para que el usuario pueda recuperar orientación.

## 6. Modelo operativo: cuatro perillas de incomodidad

Para cada intervención nueva, elegir una perilla principal y una secundaria:

1. **Agrupación:** proximidad, similitud, región común.
2. **Recorrido:** continuidad, patrón de lectura, scroll rhythm.
3. **Jerarquía:** contraste, tamaño, peso, foco falso.
4. **Carga:** cantidad de señales simultáneas que el usuario debe resolver.

Una intervención buena debe poder describirse así:

> "Aumento [perilla] mediante [técnica] sin romper [límite]."

Ejemplo:

> "Aumento carga extrínseca mediante notas laterales falsamente relacionadas sin romper lectura de la sección evidence."

## 7. Backlog recomendado desde este deep dive

### Para Moss

**Mapa de bibliografía incómoda**
Añadir una zona visible con enlaces reales agrupados por tema: Gestalt, carga cognitiva, lectura web, contraste. Debe usar chunking correcto, pero proximidad y alineación levemente defectuosas.

### Para Gilfoyle

**Sabotaje de proximidad en evidence**
Aplicar separaciones falsas y regiones visuales ambiguas alrededor de `#evidence`: stickers, líneas, cajas o conectores que sugieran relaciones incorrectas sin tapar contenido.

### Para siguiente turno de Richard

**Matriz de intervención TOC**
Convertir las cuatro perillas en una tabla visible o documento de decisión: patrón, base perceptiva, efecto esperado, riesgo, dónde aplicarlo.

## 8. Fuentes consultadas

- Interaction Design Foundation — Gestalt Principles: agrupación, patrones y simplificación perceptiva.
- Nielsen Norman Group — Proximity Principle in Visual Design: la cercanía comunica relación y puede dominar otras señales visuales.
- Nielsen Norman Group — Minimize Cognitive Load to Maximize Usability: la UI consume recursos mentales; la carga extrínseca reduce rendimiento.
- Nielsen Norman Group — How Chunking Helps Content Processing: dividir información en unidades mejora escaneo, comprensión y memoria.
- Nielsen Norman Group — F-Shaped Pattern of Reading on the Web: patrones de escaneo, fijaciones superiores/izquierdas y límites del patrón F.
