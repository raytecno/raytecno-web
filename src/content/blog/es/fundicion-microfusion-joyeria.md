---
title: "Fundición y microfusión en joyería: el corazón del taller, controlado desde el ERP"
excerpt: "Análisis del proceso de microfusión a la cera perdida en joyería: del modelo CAD a la pieza acabada, puntos críticos de calidad, variables de coste y cómo un ERP joyero controla la trazabilidad del oro."
author: "Equipo RayTecno"
category: "Fabricación & ERP"
tags: ["fundición", "microfusión", "cera perdida", "joyería", "ERP", "trazabilidad", "merma", "oro"]
date: 2026-05-05
language: "es"
seoKeyword: "microfusión joyería ERP"
---

# Fundición y microfusión en joyería: el corazón del taller

> *Cada gramo de oro que entra en el horno tiene un coste, una procedencia y un destino. Cada pieza que sale tiene una historia. Entre el lingote y la vitrina, el momento más crítico —donde más valor se gana o se pierde— es la fundición. Si su ERP no controla este punto, no controla su negocio.*

En cualquier taller de joyería con producción propia, **la fundición es el cuello de botella técnico, el punto de mayor coste energético, el momento de mayor riesgo de merma y, a la vez, la fase de la que depende la calidad de todo lo que viene después**. Una porosidad mal detectada en fundición se arrastra a través del esmerilado, el pulido, el engaste y los acabados. Llegará al cliente final como una imperfección visible que descalificará la pieza.

En este artículo recorremos el proceso de fundición joyera moderna —centrándonos en la **microfusión a la cera perdida**, la técnica dominante del sector— desde la perspectiva de quién tiene que **controlar producción, trazabilidad y costes** desde un ERP. Lo que sigue es lo que hemos aprendido en RayTecno acompañando talleres reales.

---

## 1. ¿Por qué la microfusión sigue siendo la técnica dominante?

La microfusión a la cera perdida es **la técnica de fundición más utilizada en joyería**, tanto en producción de bisutería como en alta joyería. Existen otras opciones —fundición en arena, fundición continua, fundición a presión— pero ninguna combina las dos cualidades que el sector joyero exige:

- **Precisión de reproducción del detalle** (filigranas, texturas, engastes preformados, tipografías).
- **Versatilidad de volumen** (desde una pieza única hasta series de cientos sobre un mismo árbol).

Esta técnica permite trabajar prácticamente todos los metales nobles: oro amarillo, oro blanco, oro rosa (en aleaciones desde 9k hasta 22k), plata 925 y 930, paladio, platino, latón y bronce. Cada uno con sus particularidades de temperatura de colada, atmósfera de protección, propensión a defectos.

Y en 2026 la microfusión vive una **segunda juventud** gracias a la integración con impresión 3D: el modelo en cera ya no se talla manualmente, se imprime en resina fundible directamente desde un archivo CAD. Esto reduce el tiempo del concepto a pieza física de semanas a días, y permite a talleres pequeños competir en complejidad con las grandes marcas.

---

## 2. El proceso paso a paso: dónde se gana y se pierde valor

Repasamos las fases del proceso con la lente de un responsable de producción que necesita controlarlas desde el ERP.

### 2.1 Diseño y modelo CAD

Todo empieza con el **modelo digital**. Antes era un modelo en cera tallado a mano por un maestro modelista. Hoy es un archivo CAD —Rhino, 3Design, Matrix, ZBrush— que define geometría, peso teórico y volumen de metal necesario.

**Lo que el ERP debe controlar:**

- Versionado del modelo (cada revisión es una variante, con su BOM).
- Peso teórico del modelo según aleación (un anillo en oro 18k pesa muy distinto que en plata).
- Tiempo de fabricación estimado por fase.
- Coste teórico del modelo a precio de oro del día.

### 2.2 Caucho y matriz

A partir del modelo (o directamente del CAD si se imprime en resina), se fabrica un **molde de caucho vulcanizado** que servirá para inyectar ceras en serie. Es la pieza que define la rentabilidad de toda una colección: un buen caucho dura miles de inyecciones, uno mal hecho rompe a las cien.

**Variables críticas:**

- Tipo de caucho (silicona vulcanizable, silicona inyectable a baja temperatura, RTV).
- Geometría de los canales de inyección (mal diseñados, generan piezas incompletas).
- Vida útil acumulada (cada caucho tiene un contador real de inyecciones).

**Lo que el ERP debe controlar:** un **maestro de cauchos** con identificador único, fecha de creación, número de inyecciones acumuladas y estado (activo, en revisión, retirado).

### 2.3 Inyección de ceras

Cada pieza empieza siendo una réplica en cera. La inyectora introduce cera fundida (típicamente a 60-80°C) en el molde de caucho a presión controlada. Una vez solidificada, se extrae la cera y se inspecciona.

**Defectos típicos en esta fase:**

- Piezas incompletas (cera que no llenó el molde).
- Burbujas atrapadas en la cera.
- Deformaciones por extracción prematura.

**KPI a medir:** rendimiento de inyección (% de ceras válidas / total inyectadas). Un caucho que cae por debajo del 85% de rendimiento es candidato a sustitución.

### 2.4 Engaste en cera (opcional pero crítico)

En piezas con engaste de gemas pequeñas (pavé, cluster), las gemas se colocan **directamente en la cera** antes de la fundición, en una técnica llamada *stone-in-place*. El metal se funde alrededor de las gemas, ahorrando una fase posterior de engaste manual.

Esto exige gemas de muy alta resistencia térmica (diamantes naturales o sintéticos, zafiros, rubíes) y un control preciso de temperatura para no dañarlas.

**Lo que el ERP debe controlar:** trazabilidad de gemas desde compra (con certificado Kimberley o equivalente) hasta su engaste en pieza concreta.

### 2.5 Montaje del árbol

Las ceras individuales se sueldan a un **canal central de cera**, formando un "árbol" que permite fundir docenas de piezas en una sola colada. El diseño del árbol es un arte en sí mismo: piezas mal distribuidas generan defectos por flujo de metal desigual.

**KPI clave:** **gramos de metal por árbol**. Es la unidad económica básica del taller: si el árbol pesa 200 g de oro 18k a 65 €/g, son 13.000 € en juego en una sola colada.

### 2.6 Colocación en cilindro y yeso de revestimiento

El árbol se coloca dentro de un cilindro metálico y se rellena con **yeso de microfusión de alta resistencia térmica**, mezclado con agua en proporción exacta. La mezcla se vibra al vacío para eliminar burbujas que generarían porosidad en el metal final.

**Variables críticas:**

- Proporción yeso/agua (típicamente 38-40% de agua).
- Tiempo de vacío (60-90 segundos).
- Tiempo de fraguado antes de pasar al horno (mínimo 2 horas).

### 2.7 Descerado en horno

El cilindro pasa al horno siguiendo una **rampa de temperatura programada**: subida lenta hasta 150°C para evaporar humedad, plateau a 300°C para fundir y eliminar la cera, subida final hasta 700-750°C para calcinar restos orgánicos y dejar el molde limpio.

Una rampa mal programada genera fisuras en el yeso, que se traducen en piezas con rebabas o totalmente inservibles.

### 2.8 Fundición y colada

El metal se funde en crisol —en hornos de inducción modernos— a la temperatura específica de cada aleación. El cilindro caliente se coloca en la centrifugadora o en la máquina de colada al vacío, y el metal líquido se inyecta en el molde.

**Temperaturas típicas de colada:**

- Oro amarillo 18k: ~1050°C
- Oro blanco 18k: ~1100°C
- Plata 925: ~1000°C
- Platino: ~1850°C (requiere equipos especializados)

**Defectos críticos en esta fase:**

- **Porosidad por gas** (atrapamiento de aire o exceso de humedad en el yeso).
- **Llenado incompleto** (temperatura de colada baja o canales mal dimensionados).
- **Tensiones internas** (enfriamiento demasiado rápido).
- **Contaminación** por exceso de metal reciclado: usar más del 50% de metal recuperado de coladas anteriores **aumenta significativamente los defectos**.

### 2.9 Desmoldeo y separación de piezas

El cilindro se enfría con agua, lo que rompe el yeso. El árbol metálico se extrae, se limpia y se separan las piezas individuales del canal de alimentación con disco de corte. Cada pieza se pesa y se contrasta con su peso teórico.

**KPI fundamental:** **merma de metal**. Un taller bien gestionado mantiene mermas de fundición por debajo del 2-3% (el resto se recupera y se reincorpora controladamente).

---

## 3. Los puntos de control que el ERP debe gestionar

A lo largo de las nueve fases anteriores, hay seis variables críticas que deben quedar registradas en un [ERP para fabricantes de joyería](/es) para que el taller sea gobernable:

### 3.1 Trazabilidad del metal

**De dónde viene cada gramo y a dónde va.** El ERP debe registrar, por cada lote de oro o plata:

- Proveedor y certificación (LBMA para oro responsable, recycled silver certified).
- Pureza analizada (no la declarada).
- Aleación a la que se incorpora.
- Pieza final donde acaba.

Esta cadena permite responder preguntas que cada vez más clientes hacen: *"¿este oro viene de minería responsable?"*.

### 3.2 Control de mermas por fase

No basta con saber cuánto se ha mermado en total. Hay que saber **dónde**: en fundición, en esmerilado, en pulido, en engaste. Cada fase tiene su rango aceptable, y desviaciones significativas son señal de problema.

### 3.3 Coste real por pieza

El precio del oro fluctúa diariamente. Una pieza fundida hoy a 65 €/g y vendida dentro de tres meses a 70 €/g puede haber generado un margen ficticio si el ERP no recalcula coste a precio de día de fabricación.

### 3.4 Vida útil de cauchos y consumibles

Los cauchos, los crisoles, los pucks de fundición tienen vida útil finita. El ERP debe contar inyecciones, coladas y horas de uso, alertando antes de que el desgaste genere defectos.

### 3.5 Rendimiento por colada

**Coladas válidas / coladas totales** es el KPI más importante de fundición. Permite detectar tendencias: un descenso sostenido del rendimiento indica un problema sistémico (yeso de mala calidad, calibración del horno, formación insuficiente del operario).

### 3.6 Trazabilidad fotográfica

En joyería de alto valor, cada pieza única debe tener **registro fotográfico en cada fase crítica**: post-fundición, post-engaste, antes de empaquetado. Es prueba de calidad, soporte de garantía y defensa ante reclamaciones.

---

## 4. Los KPIs que la dirección debería ver cada lunes

A nivel directivo, el ruido del taller se condensa en cinco números que un buen [ERP joyero](/es) debería tener siempre a la vista:

| KPI | Qué mide | Rango saludable |
|---|---|---|
| **Rendimiento de colada** | % piezas válidas sobre total fundido | > 90 % |
| **Merma global** | % metal perdido entre lingote y pieza final | < 5 % |
| **Coste por gramo de pieza acabada** | Coste total / gramos producidos | Estable o decreciente |
| **Tiempo medio modelo → pieza** | Días desde aprobación CAD a primera pieza | < 7 días |
| **Reproceso** | % piezas que vuelven a fase anterior | < 8 % |

Cuando uno de estos cinco se mueve, hay que mirar antes de que se convierta en un problema económico.

---

## 5. Sostenibilidad: el factor que nadie pedía hace 10 años y hoy es central

La fundición joyera tiene una huella energética y de materiales considerable. En 2026 esto importa por dos razones:

- **Normativa creciente** (RJC, LBMA, certificaciones ESG).
- **Demanda del cliente final**, especialmente en segmentos jóvenes que preguntan por origen del oro y sostenibilidad antes de comprar.

Buenas prácticas que el ERP debe documentar:

- **Reciclaje controlado** de mermas y desperdicios (con análisis de pureza al reincorporar).
- **Trazabilidad de origen** del metal nuevo (oro reciclado certificado, plata reciclada, oro de minería ética).
- **Eficiencia energética** del horno (registro de consumo eléctrico por colada).
- **Gestión de residuos químicos** del descerado y de los baños posteriores.

Comparada con el mecanizado CNC, la microfusión es **más sostenible** en uso de material (menos desperdicio), pero **menos eficiente energéticamente** que el forjado tradicional. Saber esto y poder demostrarlo con datos del ERP es cada vez más un argumento comercial.

---

## 6. Cómo lo materializa RayTecno

En nuestro [ERP para joyería](/es/erp-joyeria) **RayGold**, el módulo de fabricación gestiona la microfusión joyera con seis bloques integrados:

1. **Maestro de modelos y cauchos** con versionado, BOM, vida útil y coste teórico actualizable a precio de oro.
2. **Órdenes de fabricación** que generan automáticamente la documentación del árbol (peso esperado, número de piezas, aleación).
3. **Registro de coladas** con temperatura, hora, operario, lote de metal de entrada, lote de yeso, peso post-fundición y rendimiento real.
4. **Trazabilidad pieza a pieza** con código único que acompaña a la joya hasta venta.
5. **Cálculo de coste real** que recalcula con precio de oro del día y reparte costes indirectos del taller.
6. **Cuadro de mando directivo** con los cinco KPIs anteriores en tiempo real y alertas sobre desviaciones.

La filosofía es la misma que en el resto del sistema: **construir la calidad y la trazabilidad en cada fase**, no inspeccionarlas al final.

---

## 7. Conclusión: la fundición es el momento de la verdad

En el ciclo completo de una joya, la fundición es el momento donde más valor se concentra y más se puede perder. Un taller que controla bien esta fase es un taller rentable. Un taller que no la controla compensa con sobrecoste, con reproceso y con frustración.

La buena noticia es que toda la complejidad descrita —nueve fases, seis variables críticas, cinco KPIs directivos— es **perfectamente sistematizable** desde un ERP especializado. No hay que reinventar nada: hay que medir lo que ya pasa y actuar sobre los datos.

Si su taller hace microfusión y siente que no tiene visibilidad real de qué está pasando colada a colada, [hablemos](https://www.raytecno.es/contacto). Probablemente el primer paso no sea cambiar el horno: sea instrumentar lo que ya tiene.

---

### Para seguir leyendo

- *La IA en los sistemas de fabricación de joyería y en sistemas de calidad: cómo evolucionan los 14 puntos de Deming en 2026*
- *1998 → 2026: 28 años después, la arquitectura ERP de una joyería sigue siendo la misma*
- *Abastecimiento a tiendas de joyería: cómo decidir cuánto producto enviar a cada punto de venta*
- *Tipos de organización empresarial en el sector joyero: las 5 configuraciones de Mintzberg*

---

**¿Le ha resultado útil este artículo?** Compártalo con su equipo de producción o suscríbase al blog de RayTecno para recibir un análisis estratégico al mes.
