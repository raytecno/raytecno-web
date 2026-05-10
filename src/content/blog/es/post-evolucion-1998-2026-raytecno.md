---
title: "1998 → 2026: 28 años después, la arquitectura ERP de una joyería sigue siendo la misma (y eso es una buena noticia)"
excerpt: "Recuperamos dos diagramas que diseñé en 1998 para entender el flujo de un taller de joyería integrado. Comparados con cualquier ERP joyero moderno, el esquema conceptual no ha cambiado: lo que cambian son las capas tecnológicas que se construyen sobre él."
author: "Agustín — Equipo RayTecno"
category: "Arquitectura & ERP"
tags: ["CIM", "ERP", "joyería", "arquitectura", "trazabilidad", "IoT", "industria 4.0"]
date: 2026-05-05
language: "es"
seoKeyword: "28 años después"
---

# 1998 → 2026: 28 años después, la arquitectura ERP de una joyería sigue siendo la misma

> *Reviso los pósters que hice en 1998 explicando la arquitectura de un sistema integrado para taller de joyería. La estética se ha quedado anclada en aquel Office 97. Pero la arquitectura conceptual —administración, planificación, diseño, calidad, control de producción, ventas, compras, fabricación, flujo de materiales— es exactamente la misma sobre la que se construye RayTecno hoy.*
>
> *Esto no es nostalgia. Es una observación útil para cualquier joyería que esté evaluando un ERP en 2026.*

En 1998 dibujé dos pósters para presentar a clientes joyeros la idea de un **sistema CIM (Computer Integrated Manufacturing)** aplicado a su sector. Por entonces hablar de "0 stocks, 0 retrasos, 0 papeles, calidad total" en talleres donde las hojas de ruta circulaban manchadas de oro entre engastadores y pulidores sonaba más a manifiesto que a propuesta tecnológica.

Casi tres décadas después, esa propuesta ha terminado siendo el estándar. Pero —y esto es lo interesante— **el esquema conceptual no ha cambiado**. Lo que ha cambiado son las **capas tecnológicas** que se han ido apilando encima.

En este artículo recupero los dos diagramas originales (modernizados visualmente para web), añado un tercero que muestra qué se ha sumado entre 1998 y 2026, y reflexiono sobre lo que esto significa para cualquier joyería que esté replanteándose hoy su sistema de gestión.

---

## 1. La arquitectura: lo que dibujé en 1998 sigue siendo válido en 2026

El primer póster era un esquema de **capas funcionales**: administración arriba, núcleo CIM en el centro, fabricación debajo, y el flujo de materiales atravesándolo todo de proveedor a cliente.

![Arquitectura ERP integrado para joyería](./arquitectura-erp-joyeria-2026.svg)

Las piezas son las mismas que cualquier libro moderno de Industria 4.0 sigue describiendo:

- **Administración:** contabilidad, personal, contabilidad industrial.
- **Planificación de empresa:** objetivos, estrategia, marco de producción.
- **CAD:** diseño, cálculo, dibujo, lista de piezas, simulación.
- **CAP** (planificación de trabajo) y **CAQ** (control de calidad).
- **PPC** (Production Planning and Control): programa de producción, lanzamiento de órdenes.
- **Ventas y compras** integrados al núcleo.
- **CAM** (Computer Aided Manufacturing): control de flujo de materiales, control de fabricación, conservación.

Y un **flujo horizontal** que atraviesa el taller: cera → fundición → exteriores → engastadores → pulidos → acabados → expedición.

> **El punto importante:** este esquema no era una visión propia, era la traducción al sector joyero del paradigma CIM que se enseñaba en los 90 en escuelas de ingeniería industrial. Lo que sí era novedoso entonces es que **alguien lo aplicara en serio a un taller de joyería**, donde la mayoría iban con Excel y libreta. Hoy es la base de cualquier ERP joyero serio.

---

## 2. El flujo del taller: secciones, fases y stocks intermedios

El segundo póster era un diagrama radial. Tres anillos concéntricos —centros de coste, secciones del taller, fases productivas concretas— con el oro en el núcleo y los almacenes intermedios marcados radialmente.

![Flujo de fabricación de joyería — taller completo](./flujo-taller-joyeria-2026.svg)

Lo que este diagrama enseña, y que sigue siendo igual de válido hoy, son tres ideas que cualquier joyero con taller propio reconocerá:

**Primera: el oro entra una vez y se transforma muchas.**
El núcleo es la materia prima. Todo lo demás son transformaciones que añaden valor (y coste) sobre ella. Un ERP joyero serio tiene que medir dónde se gana ese valor y dónde se pierde en mermas.

**Segunda: hay tres centros de coste, no uno.**
CC1, CC2 y CC3 representan agrupaciones de secciones que comparten naturaleza productiva. La contabilidad de costes joyera no funciona si todo el taller es un único centro: hay que poder comparar el coste por gramo de la fundición frente al pulido frente al engaste.

**Tercera: entre fases hay stocks intermedios (WIP) que nadie quiere ver.**
Los almacenes de pilotos, cauchos, ceras, piedras, materia prima, complementos, semielaborados y acabados son **capital inmovilizado** durmiendo entre fases. Tenerlos identificados explícitamente en el diagrama es lo que permite atacarlos: la pregunta operativa no es "¿cuánto stock tengo?" sino "¿en qué punto del flujo lo tengo?".

---

## 3. Lo que sí ha cambiado: seis capas modernas sobre el mismo núcleo

Si la arquitectura conceptual no ha cambiado, ¿qué sí ha cambiado entonces? La respuesta: **las capacidades**, y se han añadido en forma de capas.

![De 1998 a 2026: la arquitectura aguanta, las capas crecen](./capas-modernas-1998-2026.svg)

Estas son las seis capas que en 1998 no estaban —o estaban embrionarias— y que hoy son centrales en cualquier ERP joyero moderno:

### 3.1 Trazabilidad por pieza y por lote

En 1998 el control de calidad era una sección más del esquema CIM. Hoy hablamos de algo mucho más exigente: **cada pieza vendida tiene una historia completa documentada** —de qué lingote salió el oro, qué proveedor entregó las gemas, qué engastador la trabajó, qué turno de pulido pasó, qué controles superó, en qué tienda se vendió, a qué cliente.

Esto no es un capricho: es un requisito normativo creciente (LBMA, Kimberley, RJC) y un activo comercial cada vez más valioso para el cliente final que pregunta "¿de dónde viene este diamante?".

### 3.2 Omnicanalidad

En 1998 una joyería vendía en su tienda. Punto. Hoy una marca joyera mediana opera en paralelo en:

- Tiendas propias.
- Córners y espacios concesionados en grandes superficies.
- Web propia.
- Marketplaces.
- Distribución mayorista B2B.
- Eventos efímeros (pop-ups, ferias).

Y todo eso tiene que compartir **un único stock real** y un único histórico de cliente. La capa omnicanal del ERP es la que hace posible que la dependienta de una tienda vea que la clienta compró un anillo a juego en la web hace seis meses.

### 3.3 Integración con el cliente final

Configuradores 3D online, prueba virtual con realidad aumentada, anillos a medida pedidos desde el móvil, presupuestos compartidos por WhatsApp con fotos del avance del taller. El cliente final ya no es solo el destino del flujo: es **un actor más dentro del flujo**, con capacidad para iniciar órdenes de fabricación que entran directamente en el sistema.

### 3.4 IoT en el taller

En 1998 el control de fabricación se alimentaba de partes en papel que el encargado tecleaba al final del turno. En 2026 los datos vienen directamente de los equipos:

- Hornos de fundición que reportan temperatura y curva del ciclo en tiempo real.
- Básculas de precisión conectadas que registran el peso de cada pieza en cada fase.
- Baños de rodio con control de espesor automatizado.
- Cámaras que documentan el estado de la pieza en cada punto crítico.

El ERP recibe datos de máquina sin intervención humana. La consecuencia: trazabilidad sin fricción, y la posibilidad de detectar anomalías (mermas anormales, ciclos fuera de rango) antes de que se conviertan en problema.

### 3.5 Analítica predictiva

Los ERP de los 90 contestaban a la pregunta *"¿qué pasó?"*. Los ERP modernos contestan también a *"¿qué va a pasar?"*. Aplicado a joyería:

- **Predicción de cuellos de botella:** sabiendo la carga actual del taller, qué fase saturará primero la semana que viene.
- **Predicción de rotura de stock por tienda:** combinando histórico, estacionalidad y eventos puntuales (campañas, clima, festivos locales).
- **Predicción de demanda por colección:** detectando antes que la intuición qué referencias van a despegar.

Esta capa solo es posible cuando la trazabilidad y el IoT están en su sitio: la analítica predictiva necesita datos históricos limpios y abundantes para entrenar.

### 3.6 Cumplimiento normativo digital

En 1998 las obligaciones normativas eran más sencillas y se gestionaban en papel. En 2026 una joyería se enfrenta a:

- **LBMA** (London Bullion Market Association) para certificación de oro responsable.
- **Proceso Kimberley** para diamantes libres de conflicto.
- **RJC** (Responsible Jewellery Council) para certificación integral de la cadena.
- **Declaraciones IVA digitales** (SII en España, equivalentes europeos).
- **Registro de operaciones sospechosas** (AML/PBC para metales preciosos).
- **Facturación electrónica obligatoria** según evolución regulatoria.

Esta capa no es opcional: es condición para operar. Y solo es viable si está integrada en el ERP, no como añadido posterior.

---

## 4. La conclusión que importa: la arquitectura es estable, las capacidades evolucionan

Mirar dos pósters de 1998 y verificar que la arquitectura sigue intacta no es un ejercicio nostálgico. Tiene una **implicación práctica directa** para cualquier joyería que esté evaluando hoy su ERP.

**La pregunta correcta no es "¿este ERP tiene IA / blockchain / IoT?"**. Esa pregunta lleva a comprar capas modernas montadas sobre arquitecturas frágiles.

**La pregunta correcta es: "¿este ERP respeta la arquitectura natural del negocio joyero —administración, planificación, CAD, calidad, control de producción, ventas, compras, fabricación, flujo de materiales— y construye las capas modernas encima de ella?"**.

Si la respuesta es sí, las capas nuevas que se inventen los próximos 28 años se podrán seguir añadiendo sin romper el sistema. Si la respuesta es no, ningún módulo de IA va a salvar al sistema cuando el taller crezca o cambien las normativas.

En **RayTecno** lo planteamos exactamente así: el núcleo es la arquitectura clásica del CIM joyero, probada durante décadas; las capas modernas (trazabilidad, omnicanal, IoT, analítica, cumplimiento) son módulos que se activan según necesite cada joyería. Una joyería pequeña empieza por el núcleo. Un grupo joyero con producción propia y veinte tiendas activa todas las capas.

La arquitectura es la promesa de que su ERP no se quedará obsoleto cuando llegue la próxima ola de tecnología. Y la próxima ya está llegando.

Si su joyería tiene taller propio, red de tiendas o ambas cosas, y quiere revisar su sistema de gestión con esta lente arquitectónica en lugar de con un checklist de funcionalidades, [hablemos](https://www.raytecno.es/contacto).

---

### Para seguir leyendo

- *Abastecimiento a tiendas de joyería: cómo decidir cuánto producto enviar a cada punto de venta*
- *Tipos de organización empresarial en el sector joyero: las 5 configuraciones de Mintzberg*
- *El caso Schneider: 5 lecciones de marketing estratégico aplicables a joyería*

---

**¿Le ha resultado útil este artículo?** Compártalo con su equipo directivo o suscríbase al blog de RayTecno para recibir un análisis estratégico al mes.

---

*Nota del autor: los pósters originales de 1998 están guardados en mi archivo personal. Estos diagramas son recreaciones modernizadas que respetan la arquitectura conceptual del original, adaptada visualmente para web.*
