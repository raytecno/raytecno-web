---
title: "Abastecimiento a tiendas de joyería: cómo decidir cuánto producto enviar a cada punto de venta sin sobrestock ni rotura"
excerpt: "Guía técnica de abastecimiento joyero a red de tiendas: fórmula de necesidad, clasificación ABC del catálogo y modelo DRP aplicado al sector joyero e integrado en RayTecno."
author: "Equipo RayTecno"
category: "Logística & ERP"
tags: ["abastecimiento", "DRP", "ABC", "stock", "joyería", "ERP", "retail", "tasa de cobertura"]
date: 2026-05-05
language: "es"
seoKeyword: "abastecimiento joyería ERP"
---

# Abastecimiento a tiendas de joyería: cómo decidir cuánto enviar a cada punto de venta

> *Hay dos formas de equivocarse abasteciendo una tienda: enviar de menos —y perder ventas que no vuelven— o enviar de más —y dejar capital inmovilizado en producto que rota lento. La diferencia entre una joyería que crece y una que se ahoga en stock está en cómo evita ambas.*

Una de las preguntas más frecuentes que recibimos en **RayTecno** procede de joyerías con red de tiendas: **"¿cuánto producto debo mandar a cada tienda y cuándo?"**. La pregunta parece sencilla, pero detrás se esconde uno de los problemas más complejos de la gestión joyera moderna, especialmente cuando hablamos de:

- Joyerías con varias tiendas propias en distintas ciudades.
- Marcas joyeras con presencia en **grandes superficies y centros comerciales** (espacios concesionados o córners), donde el espacio es limitado y caro.
- Cadenas con producción propia que abastecen a su propia red.
- Joyerías que combinan retail + mayorista + e-commerce desde un mismo almacén central.

En todos estos escenarios, la decisión de **cuánto enviar y a quién** no puede tomarse a ojo. Hay que sistematizarla. Y hay tres herramientas técnicas que, combinadas, resuelven el problema:

1. **La clasificación ABC del catálogo** — para saber qué controlar con qué intensidad.
2. **La fórmula de cálculo de necesidad** — para traducir consumo en cantidad a pedir.
3. **El modelo DRP (Distribution Requirements Planning)** — para articular el conjunto en un proceso repetible.

En este artículo desarrollamos los tres, los aterrizamos al sector joyero y mostramos cómo se integran dentro de un ERP especializado.

---

## 1. El problema real: por qué fallar duele tanto en joyería

A diferencia de un producto de gran consumo, en joyería **el coste del error es asimétrico**:

- **Sobrestock:** capital inmovilizado en oro, plata o piedras. Costes financieros que crecen cada día (en metales preciosos hablamos a menudo de **8–18 % anual** entre coste financiero, almacenamiento y deterioro/robo, según el tipo de mercancía).
- **Rotura de stock:** la cliente que entra a buscar un solar de 18 mm en oro blanco y no lo encuentra **no espera**. Va a la joyería de al lado. La venta se pierde, y a menudo también la cliente.

El equilibrio entre ambos riesgos es la esencia del problema de abastecimiento. Y se complica con factores específicos del sector:

- **Estacionalidad muy marcada:** Navidad, San Valentín, comuniones, día de la madre, bodas (mayo–septiembre).
- **Surtidos enormes con baja rotación por referencia:** una joyería media gestiona miles de SKUs, muchos de ellos con ventas anuales de una o dos unidades.
- **Producción propia con plazos largos:** fabricar una colección de alianzas puede llevar semanas.
- **Espacios de venta muy reducidos** en córners y grandes superficies: cada hueco de exposición tiene que rentabilizarse al máximo.

---

## 2. Primer paso: clasificación ABC del catálogo

Antes de calcular **cuánto** enviar, hay que saber **qué** estamos enviando. La curva ABC (también llamada **regla 80/20** o ley de Pareto) es la herramienta clásica para clasificar las referencias del catálogo según su importancia económica.

### Concepto

La idea es simple: **un porcentaje pequeño de referencias concentra la mayor parte del valor de inventario o de ventas**. Típicamente:

| Clase | % de referencias | % del valor |
|---|---|---|
| **A** | ~15–20 % | ~70–80 % |
| **B** | ~25–30 % | ~15–20 % |
| **C** | ~50–60 % | ~5–10 % |

### Aplicación al sector joyero

En una joyería, el ABC se puede construir sobre distintos criterios y conviene cruzarlos:

- **ABC por valor de inventario** (oro 18k, diamantes engastados → suelen ser A).
- **ABC por valor de venta** (puede no coincidir con el anterior: una pieza cara que rota poco puede ser C en ventas y A en inventario).
- **ABC por unidades vendidas** (alianzas básicas, regalos por debajo de cierto importe).
- **ABC por margen** (no todo lo que vende mucho deja margen).

> **Indicador útil:** cuando la **clase A en valor** y la **clase C en unidades vendidas** coinciden en una misma referencia, hay sobrestock. Es una alerta que el ERP debería emitir automáticamente.

### Implicaciones operativas

| Clase | Tratamiento operativo |
|---|---|
| **A** | Control estricto, revisión continua de niveles, evitar sobrestock, exactitud máxima en registros |
| **B** | Control intermedio, revisiones periódicas, automatización con supervisión |
| **C** | Control ligero, revisión por agrupación (mismo proveedor, misma familia), stock mínimo posible |

El ABC no es un ejercicio de una vez: **se recalcula periódicamente** porque el comportamiento del catálogo cambia con la temporada, las modas y las colecciones nuevas.

---

## 3. Segundo paso: la fórmula de cálculo de necesidad

Una vez clasificado el catálogo, hay que decidir **cuánto pedir o enviar de cada referencia**. Aquí entra una fórmula que en RayTecno recogemos en el módulo de abastecimiento y que sintetiza los principales factores en una sola ecuación:

```
Cantidad a pedir = Stock objetivo - Stock físico - Entradas previstas + (Ventas en período + Pedidos a atender)
```

Vamos a desglosar cada variable. Esta es la **base técnica** del cálculo:

| Variable | Significado | De dónde sale |
|---|---|---|
| **TOTCAN** | Cantidad a pedir (resultado final) | Calculado |
| **TOTSFO** | Stock objetivo final = Tasa cobertura × Venta media semanal | Calculado |
| **TOTSTK** | Stock físico actual (descontando reservas) | Maestro de stocks |
| **TOTENT** | Entradas previstas en curso (producción o compras) | Plan de producción |
| **TOTVEP** | Ventas estimadas durante el período de aprovisionamiento | Tiempo producción × Venta media |
| **TOTPAA** | Pedidos a atender (compromisos abiertos) | Cartera de pedidos |
| **TASCOB** | Tasa de cobertura: nº de semanas que se quiere stockar | Parámetro por artículo / familia |
| **VALMS** | Valor medio semanal de venta = ventas históricas / nº semanas | Estadística histórica |
| **TEMPRO** | Tiempo de producción / aprovisionamiento (en semanas) | Maestro de artículos |

### Lectura práctica de la fórmula

La fórmula dice algo muy lógico:

> *"Pídeme lo que voy a necesitar al final del período (TOTSFO), réstame lo que ya tengo (TOTSTK), réstame lo que ya viene de camino (TOTENT) y súmame lo que voy a vender o servir mientras llega el pedido (TOTVEP + TOTPAA)."*

### Ejemplo aplicado: alianzas básicas

Imaginemos una joyería con red de 12 tiendas que quiere abastecer **alianzas modelo "clásico oro 18k 4mm"** a una de sus tiendas:

- Venta media semanal en esa tienda (`VALMS`): **3 unidades**
- Tasa de cobertura objetivo (`TASCOB`): **6 semanas**
- Stock objetivo (`TOTSFO` = 6 × 3): **18 unidades**
- Stock físico actual (`TOTSTK`): **5 unidades**
- En curso de fabricación (`TOTENT`): **0 unidades**
- Tiempo de producción (`TEMPRO`): **2 semanas**
- Ventas previstas durante esas 2 semanas (`TOTVEP` = 2 × 3): **6 unidades**
- Pedidos comprometidos (`TOTPAA`): **2 unidades**

Aplicando la fórmula:

```
TOTCAN = 18 - 5 - 0 + (6 + 2) = 21 unidades
```

La tienda necesita que se le envíen **21 alianzas** para mantener el ritmo de venta y la cobertura objetivo.

### Parámetros que el ERP debe gestionar

La potencia de la fórmula está en cómo se **parametrizan los valores** por:

- **Artículo** (cada referencia tiene su tasa de cobertura).
- **Sucursal** (una tienda en zona turística estacional necesita parámetros distintos a una urbana).
- **Tipo de sucursal** (córner en gran superficie vs tienda propia vs mayorista).
- **Familia/subfamilia** (alianzas, sellos, colgantes…).
- **Período** (Navidad o San Valentín cambian las medias semanales).

Esto da lugar a una **estructura jerárquica de atributos** —familia → subfamilia → producto → artículo→ sucursal— que permite definir reglas a nivel global y excepciones a nivel concreto. Es exactamente lo que hace el módulo de abastecimiento de RayTecno cuando se configura para un grupo joyero con varias marcas y canales.

---

## 4. Tercer paso: el modelo DRP (Distribution Requirements Planning)

La fórmula anterior resuelve el cálculo **para una referencia y una tienda**. El reto real es escalar eso a **miles de referencias × decenas de tiendas × decenas de semanas planificadas**, con pronósticos que cambian, producción limitada y plazos de entrega variables. Ahí entra el **DRP**.

### Qué es el DRP

El **Distribution Requirements Planning** —o planificación de necesidades de distribución— es una metodología que extiende la lógica del MRP (típica de fabricación) al lado de la distribución. Originada a finales de los años 80 como evolución natural del MRP, hoy es **estándar en retail multi-tienda** y módulo habitual en los ERP industriales y de distribución modernos.

En esencia, el DRP traduce la demanda real y prevista en cada tienda en **órdenes de reaprovisionamiento escalonadas en el tiempo**, propagando esa demanda hacia atrás —desde la tienda al centro de distribución, y de éste al taller o al proveedor— de forma coordinada.

### Push vs Pull: dos lógicas, un equilibrio

| Modelo | Cómo funciona | Cuándo conviene |
|---|---|---|
| **Push** | Se decide centralmente cuánto enviar a cada tienda según previsión histórica | Producto estacional, lanzamientos, promociones, escasez controlada |
| **Pull** | La tienda "tira" del stock según consume; el centro reabastece en función de la venta real | Surtido estable, alta rotación, producto recurrente |

El DRP moderno **combina ambos enfoques**: push para colecciones nuevas y producto estacional; pull para fondo de surtido. RayTecno permite definir estrategia por familia y por tipo de tienda, lo que es especialmente útil para joyerías que mezclan colección permanente con campañas puntuales (San Valentín, Navidad, comuniones).

### Lo que el DRP aporta sobre el simple "punto de pedido"

Un sistema básico de **punto de pedido (ROP)** dispara una orden cuando el stock baja de un umbral. Funciona, pero tiene tres limitaciones graves para joyería:

1. **No anticipa cambios de demanda** (Navidad llega y el sistema reacciona tarde).
2. **No coordina entre tiendas** (una tiene exceso, otra rotura, y nadie las cruza).
3. **No integra producción ni proveedor** (la tienda pide, pero el taller no llega a tiempo).

El DRP sí resuelve esos tres puntos porque trabaja con un **horizonte temporal escalonado** (típicamente semanal) y consolida la demanda de toda la red.

### Caso típico: joyería con tiendas en grandes superficies

Una marca joyera con **20 córners en grandes superficies** se enfrenta a un escenario común:

- El espacio físico de cada córner es muy limitado (no caben más de X unidades por familia).
- La rotación varía mucho según ubicación: un centro comercial de capital con turismo vende muy distinto a uno de provincia.
- La marca produce parte del catálogo en taller propio y compra el resto.
- El cliente final no perdona la rotura: si no hay anillo de su talla en stock, se va.

**Sin DRP** el problema se resuelve con varias hojas Excel manejadas por analistas. Funciona —mal— hasta cierto tamaño. Las consecuencias típicas:

- 30 % de referencias **A** con rotura en tiendas mientras hay stock en el centro de distribución.
- 5.000 unidades mensuales movidas entre tiendas para compensar excedentes con faltantes (coste logístico altísimo).
- Tiendas alquilando trastero adicional cerca del centro comercial para "guardar lo que no cabe en exposición".

**Con DRP bien implementado** el modelo cambia:

- El stock se concentra en el centro de distribución; la tienda recibe **lo que va a vender** en la frecuencia definida.
- Las propuestas de reposición se calculan automáticamente con la fórmula de necesidad y se presentan al especialista de abastecimiento para validación.
- Cada tienda puede tener prioridad distinta (las de capital, prioridad alta) cuando el stock central no llega para todas.
- Se gestionan productos sustitutos (si falta el modelo X, ofrecer el Y) y productos predecesores (la nueva colección "hereda" el histórico de la anterior).

---

## 5. Atributos que el ERP debe gestionar para que todo esto funcione

Para que el DRP genere propuestas razonables, el ERP necesita mantener una serie de **atributos por artículo y por sucursal**. Los principales:

### Por artículo

- **Tasa de cobertura objetivo** (en semanas o días).
- **Stock mínimo** (en unidades o días de venta).
- **Stock máximo** y % de redondeo.
- **Coeficiente de variación interanual** (corrige la previsión con la tendencia real).
- **Producto sustituto** y producto predecesor.
- **Tiempo de producción / aprovisionamiento**.
- **Familia, subfamilia, producto** (jerarquía para herencias de parámetros).

### Por sucursal

- **Coeficiente de variación de abastecimiento** (corrige la media para esa tienda concreta).
- **Stock mínimo en días**.
- **Días de viaje desde el centro de distribución**.
- **Calendario de recepciones** (qué días recibe cada sucursal: lunes, martes, miércoles…).
- **Promedios de venta** (últimos 7, 15, 30, 60, 90 y 120 días, mismo mes año anterior).
- **Tipo de sucursal** (córner, tienda propia, franquicia, mayorista…).
- **Prioridad** ante escasez de stock.

Y crítico: el ERP debe permitir **actualizaciones masivas** por herencia jerárquica. Configurar 5.000 referencias × 20 tiendas × 15 atributos manualmente es inviable. El sistema debe permitir:

1. Definir reglas a nivel familia.
2. Aplicar excepciones a nivel subfamilia o producto.
3. Heredar todo automáticamente al nivel artículo/sucursal.
4. Cambiar masivamente cuando cambia la temporada o la estrategia.

---

## 6. Conclusión: tres niveles de madurez en abastecimiento joyero

Para terminar, una forma útil de autodiagnóstico:

| Nivel | Cómo se decide qué enviar | Riesgos |
|---|---|---|
| **1. Manual / intuitivo** | Cada encargado de tienda pide lo que cree, o un comprador central decide a ojo | Sobrestock + rotura simultánea, dependencia de personas, sin trazabilidad |
| **2. Reglas básicas** | Hojas Excel con stocks mínimos por artículo, revisión semanal manual | Funciona hasta 3-5 tiendas; colapsa con más |
| **3. DRP integrado en ERP** | Propuestas automáticas calculadas con fórmula de necesidad y validadas por especialistas | Escalable, trazable, mejora con datos históricos y aprendizaje |

El salto del nivel 2 al 3 es exactamente lo que un ERP especializado como **RayTecno** está diseñado para acompañar: mantenemos en el sistema el ABC del catálogo, los parámetros por artículo y sucursal, la fórmula de cálculo de necesidad, las propuestas de reposición revisables y la integración con producción y compras. La dirección recupera el control sin dejar de tener flexibilidad táctica en las tiendas.

Si su joyería tiene varias tiendas, presencia en grandes superficies o una combinación de canales que ya no se puede gestionar con hojas de cálculo, [hablemos](https://www.raytecno.es/contacto). Es probable que el problema no sea el equipo —que suele estar haciéndolo lo mejor posible con las herramientas que tiene— sino la falta de un sistema que escale con el negocio.

---

### Para seguir leyendo

- *Tipos de organización empresarial en el sector joyero: las 5 configuraciones de Mintzberg*
- *El caso Schneider: 5 lecciones de marketing estratégico aplicables a joyería*
- *Trazabilidad del oro: del lingote a la pieza vendida*
- *KPIs que toda dirección de joyería debería revisar cada lunes*

---

**¿Le ha resultado útil este artículo?** Compártalo con su equipo directivo o suscríbase al blog de RayTecno para recibir un análisis estratégico al mes.
