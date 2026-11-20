# Capturas para la web · Noviembre 2026

Pantallas de RAYGOLD que hay que capturar para las secciones nuevas de la web, que hoy van solo con texto. Para cada una se indica dónde está en la aplicación, qué debe verse y con qué nombre guardarla.

## Antes de empezar

- **Empresa:** la de Raytecno, con datos de demostración: los clientes de caravanas del CRM, las tiendas DEMO01…DEMO30, las joyas de ejemplo de Ingeniería (AN-0000, PT-0000 y CG-0000) y el stock de las tiendas DEMO. **Nunca la base de datos de un cliente**: son datos reales.
- **Ventana:** navegador a 1920 × 1080, zoom al 100 %, tema claro. Recortar solo el área de la aplicación, sin pestañas ni barra del navegador.
- **Tamaño final:** unos 1.850 × 940 px, como las capturas que ya hay.
- **Formato:** PNG para las páginas de módulos y WebP (o PNG, que yo lo convierto) para la página del CRM.
- **Tapar siempre:**
  - El nombre y la foto del usuario conectado, en la cabecera y en el menú lateral.
  - Los nombres de operarios, cronometradores, inspectores, diseñadores y vendedores reales.
  - Cualquier teléfono, dirección o chat que no sea de demostración.
- **Dónde dejarlas:** súbelas al contenedor `web/` del blob, como las anteriores, o déjalas en una carpeta y me dices dónde. Después yo añado los títulos y las conecto en la web.

Orden recomendado: primero **Fabricación** e **Ingeniería de producto**, que ya tienen el hueco preparado y solo hay que añadir los títulos; después el **CRM**, que necesita un pequeño cambio en la página para mostrar imágenes en los bloques nuevos.

---

## 1. Fabricación · Calidad preventiva (3 capturas)

Pantalla **Control de calidad** (componente `fabricacion/Calidad`), desde su entrada del menú de Fabricación.

| Archivo | Vista | Qué debe verse |
|---|---|---|
| `CAL01.png` | **Puntos de control**, ficha abierta de un punto | Un control de Fundición (o Engastado) recién cargado con **Plantilla joyería**: peso, ley del metal con 750–760 ‰, piedras, poros… Que se vean «Quién mide», «Frecuencia» y «Si no pasa». |
| `CAL02.png` | **Inspecciones**, ficha de una inspección | Una inspección con una o dos características en **No**, cada una con su defecto del desplegable y una foto. Mejor con la decisión todavía sin cerrar. **Tapar el operario y el inspector.** |
| `CAL03.png` | **Control estadístico** | La ley en Fundición, últimos 90 días: gráfico de control con los límites ±3σ, el indicador **Cp · Cpk** y el histograma. Hacen falta unas cuantas medidas para que el gráfico tenga forma. |

Alternativa a cualquiera de las tres: **Indicadores** con el «Pareto de defectos». Y si queréis una cuarta captura, la pastilla naranja **«N calidades pendientes»** abierta en Marcajes de producción, con la bandeja «Calidad pendiente».

> `CAL01`–`CAL03` ya existen en el blob, pero son plantillas de relleno que dicen «Control Calidad»: hay que **sustituirlas**.

## 2. Fabricación · Métodos y tiempos (3 capturas)

Pantalla **Cronometrajes** (componente `fabricacion/Cronometrajes`).

| Archivo | Vista | Qué debe verse |
|---|---|---|
| `CRO01.png` | **Cronómetro** | Un ciclo en marcha, a mitad de la ruta: unas operaciones con tiempo y la actual corriendo, con la pista «Espacio pasa a la siguiente operación». **Tapar el trabajador y el cronometrador.** |
| `CRO02.png` | **Análisis › Comparativa** | La comparativa ciclo a ciclo de un artículo con 10 o más ciclos, frente al estándar. |
| `CRO03.png` | **Configuración › Suplementos** | La tabla de suplementos con sus porcentajes. Sin datos personales. |

## 3. Ingeniería de producto (7 a 9 capturas)

Pantalla **Ingeniería de producto** (componente `ingenieria/Ingenieria`), con las joyas de ejemplo o un modelo de prueba. **Tapar el diseñador y el responsable** si salen con nombre real.

| Archivo | Pestaña de la web | Vista en la aplicación | Qué debe verse |
|---|---|---|---|
| `ING-PIP01.png` | Del boceto a producción | **Pipeline** | El kanban con las 7 columnas y tarjetas repartidas en varias etapas. Es la más importante. |
| `ING-PIP02.png` | Del boceto a producción | Versión › **Prototipos** | Tres prototipos (resina, caucho, piloto) con sus estados aprobados. |
| `ING-COS01.png` | Coste y viabilidad | Versión › **Coste** | El «Desglose del cálculo» con el margen en ámbar o verde y el histórico de valoraciones. |
| `ING-CAD01.png` | CAD, STL y 3D | Versión › **Archivos** | El STL con su miniatura en el color del metal, los renders, el volumen y el peso estimado. |
| `ING-CAD02.png` | CAD, STL y 3D | **Visor 3D** (pulsar la miniatura) | La pieza en oro con reflejos. Mejor sin «Ver malla» y con las medidas abajo. |
| `ING-RDY01.png` | Readiness y liberación | Versión › **Readiness** | La lista con varias marcadas y alguna pendiente, y el botón Liberar con «7/9 obligatorios». |
| `ING-VER01.png` | Versiones y documentos | Impresora › **Ficha para cliente** | La vista de impresión de la ficha comercial, sin costes. |
| `ING-VER02.png` *(opcional)* | Versiones y documentos | Impresora › **Dossier técnico interno** | La primera página del dossier. **Tapar las firmas y los nombres.** |
| `ING-VER03.png` *(opcional)* | Versiones y documentos | **Órdenes de cambio** | Una orden de cambio con su motivo e impacto. |

## 4. CRM (6 a 8 capturas)

Pantalla **CRM** (componente `crm/IndexCRM`, menú «Marketing y CRM › CRM»), con un vendedor de los clientes de caravanas de demostración seleccionado arriba a la derecha.

> La página `/crm` todavía no tiene huecos de imagen en los bloques nuevos. Cuando tengáis estas capturas, los añado.

| Archivo | Pestaña | Qué debe verse | Cuidado con |
|---|---|---|---|
| `crm-recompra.webp` | **Recompra**, vista «Año completo» | Los doce meses en verde, ámbar y lila. | Solo clientes de demostración |
| `crm-pipeline.webp` | **Pipeline** | El kanban Leads → Cierre con importes y probabilidad. | |
| `crm-ruta.webp` | **Ruta › Mapa** | Los clientes en el mapa coloreados por estado y la lista por distancia. | Direcciones de demostración |
| `crm-postventa.webp` | **Postventa**, un ticket abierto | El estado, la pieza y «Firmas y adjuntos» con una firma. | Firma y fotos de prueba |
| `crm-precios-tiendas.webp` | Inventarios › Stocks › **Tiendas** › «Grabar y reetiquetar» | El diálogo «Grabar precios y reetiquetar» con Ahora / Nuevo / Dif. y la casilla «Avisar a las tiendas». | Tiendas DEMO01… |
| `crm-mensajes.webp` | **Mensajes** | Las tres columnas: lista, chat y ficha del cliente con «Crear pedido». | ⚠️ **El canal de RAYTECNO es real.** Solo con una conversación de prueba montada a propósito; si no, déjala para más adelante. |
| `crm-central-tv.webp` *(opcional)* | **Central › Modo TV** | El panel a pantalla completa. | ⚠️ El ranking muestra nombres reales de vendedores: hay que taparlos |
| `crm-movil.webp` *(opcional)* | App del vendedor `/vendedor`, pestaña **Hoy** | Captura de móvil, en vertical. | Datos de demostración |

## 5. Opcionales

- **Ayuda «modo ?»** (`ayuda-panel.webp`): la ficha de artículo con el modo ayuda encendido, el halo lila sobre «Tipo de artículo» y el panel abierto con una nota en «Mis notas». La web ya tiene una maqueta en HTML, así que esta captura sería un extra.
- **Implantación:** mejor **no** capturarla. Todo lo que hay cargado son empleados reales de un cliente.

---

## Resumen

| Bloque | Capturas | Hueco en la web |
|---|---|---|
| Fabricación · Calidad | 3 (sustituyen las de relleno) | Listo |
| Fabricación · Métodos y tiempos | 3 | Listo |
| Ingeniería de producto | 7 + 2 opcionales | Listo |
| CRM | 6 + 2 opcionales | Hay que añadirlo |
| Ayuda | 1 opcional | Hay que añadirlo |
