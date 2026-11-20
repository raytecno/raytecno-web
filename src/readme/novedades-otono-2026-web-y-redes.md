# Novedades otoño 2026 · Propuesta para la web y redes sociales

Fuente: los 7 documentos internos de octubre y noviembre de 2026 (Ayuda, Ingeniería de producto, Métodos y Tiempos, CRM v2, Calidad preventiva, Implantación y Reparto del coste del diseñador).

**Anonimización aplicada:** no aparece ningún cliente, persona, ciudad, taller, código de artículo real ni importe en moneda local. Los números que se citan son los de demostración que vienen en los propios documentos (lo dicen ellos mismos: "datos de prueba"). Tampoco se anuncia como disponible nada que los PDF dejan en "Lo que viene" o "próximo paso" (agentes de IA, guías paso a paso, el ciclo semanal de externos, la medición pieza a pieza…).

---

## 1. Qué hay de nuevo y si la web ya lo cuenta

| Novedad | Qué es, en una línea | ¿Está en la web? |
|---|---|---|
| **Ayuda "modo ?"** | Botón ? en cada pantalla: tres capas (RAYGOLD, la empresa, tus notas) y una IA que contesta con los números reales de la pantalla, según los permisos de cada usuario | No |
| **CRM v2** | Sin APIs. Recompra, pipeline con leads de la web y de tarjetas de visita, ruta con GPS, app móvil, postventa con firma, WhatsApp, Instagram y Facebook en una bandeja, canal con las tiendas, reetiquetado cuando sube el oro, email con Brevo, IA y MCP | Parcial: la página /crm cuenta pirámide, fidelización, forecast, objetivos y Central, pero no lo demás |
| **Ingeniería de producto** | Del boceto a producción en 7 etapas (kanban), coste por etapa con semáforo de margen, peso estimado desde el STL, visor 3D, readiness, versiones y órdenes de cambio, ficha para el cliente y dossier técnico | No |
| **Métodos y Tiempos** | Cronometraje con TMO → TN → TE, de 10 a 15 ciclos, valoración del ritmo, dificultad y suplementos, y paso del tiempo a la ruta | No. Fabricación solo tiene Tasas horarias |
| **Calidad preventiva** | Puntos de control en la ruta que bloquean la fase siguiente, autocontrol, inspección del encargado, plantilla de joyería, defectos y Pareto, fotos, SPC con Cp/Cpk, y la misma calidad para la casa, los externos y los talleres | No |
| **Implantación (quién hace cada trabajo)** | Pantalla RACI: cada actividad con quién responde, lo hace, suple, opina o se entera, niveles de 0 a 4 y avisos de conflicto de funciones, carga y falta de suplente | No |
| **Coste del diseñador** | Repartirlo entre coste de fabricación (diseño técnico) y gasto del periodo (colecciones), según su tiempo | No. Es un tema de blog, no una función |

---

## 2. Cambios propuestos en la web (por prioridad)

Todo en los 5 idiomas, como el resto de la web.

### P1 · Ampliar la página CRM (`/crm`)
Es la que más ha cambiado y la que ya existe. Añadiría en `src/i18n/crm.ts` y `CrmCapitulos.astro`:
- Un bloque nuevo, **"Sin APIs, sin integraciones"**: nada que conectar, todo al momento, nada que mantener. Es el argumento más diferenciador del documento.
- Un capítulo **"Hablar con el cliente"**: Mensajes (WhatsApp, Instagram y Facebook en una bandeja, pedido desde el chat), canal con las tiendas (avisos con "Enterado") y marketing por email por segmentos.
- Un capítulo **"En la calle"**: ruta con visita verificada por GPS a menos de 200 m, app instalable sin tiendas de apps, escáner de tarjetas con IA y notas de voz.
- **Recompra** y **Postventa** (firma en pantalla, fotos, fecha límite) dentro de los capítulos que ya existen.
- **"Sube el oro → reetiquetar"**: recalcular los precios de las tiendas, revisar solo lo que cambia y avisar a cada tienda.
- La **tabla comparativa con un CRM aparte**: ventas reales de serie, precio por empresa y no por usuario.

### P2 · Fabricación: dos secciones nuevas
En `submodulos.*.json` (sección `fabricacion`):
- **Calidad preventiva**: "detectar en la fase, no al final", el código de colores, la plantilla de joyería (peso, ley, poros, piedras…), SPC con Cpk y la guía para órdenes de 1 a 5 piezas.
- **Métodos y Tiempos**: el cronometraje y por qué hacen falta de 10 a 15 ciclos. Se puede unir a la sección de Tasas horarias que ya hay.
- Hacen falta 3 capturas por sección, con datos de demostración.

### P3 · Ingeniería de producto: submódulo nuevo
Página nueva en `moduloSlugs` (por ejemplo `ingenieria-producto`), enlazada desde Maestros y desde Impresoras 3D: el pipeline, el semáforo de margen, del STL al peso y el visor 3D, readiness y liberar, las versiones y la ficha para el cliente.

### P4 · "Ayuda que conoce tu empresa" en Tecnología o en Qué es RayGold
Un bloque con las tres capas, Mis notas y la IA con los números de la pantalla. Es un diferenciador fuerte para la duda de siempre: "¿y cuánto cuesta formar a la gente?".

### P5 · "Cómo implantamos" en Qué es RayGold o Precios
Un bloque corto sobre el método: antes de enseñar pantallas se reparte quién hace cada trabajo, con los papeles RACI, los niveles y los avisos de conflicto de funciones. Da confianza a quien teme una implantación larga.

### P6 · Blog: 5 artículos nuevos (en los 5 idiomas)
1. *Calidad preventiva en joyería: parar el defecto donde nace* (fabricacion)
2. *Cronometraje en el taller de joyería: por qué un solo tiempo no basta* (fabricacion)
3. *Del boceto a producción: cómo saber si una joya es rentable antes de fabricarla* (producto)
4. *Un CRM sin APIs: por qué el CRM de una joyería debería vivir dentro del ERP* (producto)
5. *¿Dónde va el coste del diseñador? Fabricación o estructura* (gestion)

### P7 · Home
Una franja de "Novedades" con 4 tarjetas que enlacen a lo anterior: Calidad, Ingeniería de producto, CRM y Ayuda.

---

## 3. Calendario de redes (8 semanas, 2 posts por semana)

| Semana | Post A | Post B |
|---|---|---|
| 1 | #1 La ayuda que conoce tu empresa | #3 Un CRM sin APIs |
| 2 | #12 Calidad: el defecto se para donde nace | #8 Del boceto a producción |
| 3 | #10 Por qué 10–15 ciclos | #5 Sube el oro: reetiquetar |
| 4 | #2 Mis notas | #13 La ley a 745 ‰ |
| 5 | #9 Del STL al peso | #6 WhatsApp en el ERP |
| 6 | #11 Suplementos iguales para todos | #4 Recompra |
| 7 | #14 Calidad en órdenes pequeñas | #7 Ruta y postventa |
| 8 | #15 Quién hace cada trabajo | #16 El coste del diseñador |

Cada post lleva una versión **LinkedIn** (larga) y una versión **Instagram / Facebook** (corta), con una idea de imagen. Se alternan temas de taller y temas comerciales.

---

## 4. Los posts

### #1 · La ayuda que conoce tu empresa
**LinkedIn**
En casi todos los programas, la ayuda es un manual aparte que nadie abre. Está escrito para "cualquier empresa", no dice cómo se trabaja en la tuya y, al final, se le pregunta al compañero. Y lo que sabe el compañero se va con él.

En RAYGOLD la ayuda está en la propia pantalla. Pulsas **?**, lo que tiene explicación se ilumina y tocas el campo que no entiendes. El panel dice qué es, para qué sirve, qué poner y qué vigilar.

Cada explicación tiene tres capas:
🔹 **RAYGOLD**: lo que hace el programa con ese dato.
🔹 **La empresa**: cómo se trabaja en tu casa, escrito con el lápiz. Lo ven todos.
🔹 **Tú**: tus notas, que solo ves tú.

La persona nueva no necesita que nadie le explique cada campo, y lo que sabe la gente con más años queda escrito en la pantalla, no en su cabeza.

#ERP #Joyería #RayGold #Formación #GestiónDelConocimiento

**Instagram / Facebook**
Pulsa ?, toca el campo y la pantalla se explica sola. Con la forma de trabajar de tu empresa y tus propias notas. ✨ #ERPjoyería #RayGold
🖼️ *Imagen: ficha de artículo con el halo lila sobre un campo y el panel de ayuda abierto (datos de demostración).*

---

### #2 · Mis notas: una ayuda para cada persona
**LinkedIn**
"Para este proveedor, pedir siempre con 15 días."
"Los conjuntos que vendemos son anillo, pendientes y colgante."
"Los valores van por minuto porque la ruta divide entre 60."

Son notas reales de uso. Cada usuario de RAYGOLD tiene, en cada campo y en cada botón, su bloque de **Mis notas**: privadas, con fecha, de hasta 4.000 caracteres. La próxima vez que toque ese campo, ahí están.

Y si una nota es útil para todos, un botón la **propone a la empresa** y pasa a ser la explicación oficial.

Primero se apunta para uno mismo, sin miedo a equivocarse. Después, lo que vale pasa a la empresa. La ayuda la va escribiendo la gente que trabaja con el programa cada día.

#ERP #Joyería #RayGold #Productividad

**Instagram / Facebook**
Tus trucos, en el sitio exacto donde los necesitas. Solo los ves tú… hasta que decides compartirlos con el equipo. 📝 #RayGold
🖼️ *Imagen: el bloque verde "Mis notas · solo las ves tú" con tres notas de ejemplo.*

---

### #3 · Un CRM sin APIs
**LinkedIn**
Un CRM aparte empieza vacío. Hay que darle de alta los clientes, conectarlo al ERP con una API para los clientes, otra para las facturas, otra para los pedidos… y alguien que las mantenga.

El CRM de RAYGOLD **nace lleno**. Trabaja sobre las facturas, los pedidos y los clientes del propio ERP:
✅ Nada que conectar: ni conectores ni sincronizaciones nocturnas.
✅ Todo al momento: la factura que sale ahora ya está en la ficha del cliente y en el forecast.
✅ Nada que mantener: una actualización del ERP no rompe el CRM, porque son el mismo programa.

Y el precio es por empresa, no por usuario: entran todos los vendedores, la central y las tiendas.

El CRM no es un programa que se conecta al ERP. Es el ERP visto desde el vendedor.

#CRM #ERP #Joyería #RayGold #Ventas

**Instagram / Facebook**
Cada flecha entre programas es un desarrollo, una cuota y un sitio donde se pierden datos. Nuestro CRM no tiene flechas. 🔗❌ #CRM #RayGold
🖼️ *Imagen: a la izquierda, el esquema de un CRM aparte con cuatro APIs; a la derecha, RAYGOLD como un solo bloque.*

---

### #4 · Recompra: los clientes que tocan este mes
**LinkedIn**
Muchos clientes de joyería compran siempre en los mismos meses: antes de la temporada, antes de Navidad…

RAYGOLD aprende esos meses de las facturas de cada cliente y, cada mes, le enseña al vendedor **quién debería comprar, quién ya lo ha hecho y quién falta**, con el importe en juego y lo que suele comprar.

Es la lista de llamadas del vendedor. Desde cada cliente se crea la cita con un clic.

En la vista del año: en verde lo que ya compró, en ámbar el mes habitual que pasó sin compra y en lila lo que está por llegar.

#CRM #Joyería #Ventas #Fidelización #RayGold

**Instagram / Facebook**
¿Quién suele comprar en noviembre y todavía no lo ha hecho? Tu ERP lo sabe. 📅 #RayGold
🖼️ *Imagen: la pantalla Recompra con datos de demostración.*

---

### #5 · Sube el oro: precios nuevos y reetiquetar las tiendas
**LinkedIn**
Sube el oro. ¿Cuánto tarda tu empresa en tener el precio nuevo en el mostrador de todas las tiendas?

En RAYGOLD es un solo recorrido:
1️⃣ La central recalcula con la cotización del día, a la ley de cada artículo y con el beneficio de cada tienda.
2️⃣ Revisa **solo lo que cambia**, tienda a tienda, con aviso para las subidas fuera de lo normal.
3️⃣ Al grabar, el TPV ya cobra el precio nuevo.
4️⃣ Cada tienda recibe su lista de piezas para imprimir las etiquetas y pulsa "Hecho".
5️⃣ La central ve qué tiendas han reetiquetado y cuáles faltan.

Sin Excel, sin llamadas y sin sorpresas en el mostrador.

#Joyería #PrecioDelOro #Retail #ERP #RayGold

**Instagram / Facebook**
Sube el oro → calcular → grabar lo que cambia → aviso a cada tienda → reetiquetar → "Hecho". ✅ #RayGold #Joyería
🖼️ *Imagen: la cadena de 5 pasos como infografía.*

---

### #6 · WhatsApp, Instagram y Facebook en el ERP
**LinkedIn**
Tus clientes escriben por WhatsApp, por Instagram y por Facebook. ¿Dónde acaba esa conversación?

En RAYGOLD entra en **una sola bandeja**, conectada a las cuentas oficiales de la empresa:
🔹 Reconoce al cliente por el teléfono y enseña sus ventas de 12 meses y su última compra.
🔹 Si es nuevo, se pasa a lead con un clic.
🔹 **Crear pedido** desde el chat: un pedido del ERP, con el mismo cálculo de precio.
🔹 La IA propone la respuesta y resume la conversación. La vendedora la revisa y la envía.

Y las tiendas hablan con la central desde su TPV, sin WhatsApp, con avisos que hay que confirmar con "Enterado".

#WhatsApp #CRM #Joyería #Omnicanal #RayGold

**Instagram / Facebook**
Un WhatsApp que acaba en pedido, sin copiar nada a mano. 💬➡️📦 #RayGold
🖼️ *Imagen: conversación de demostración con la ficha del cliente a la derecha y el botón "Crear pedido".*

---

### #7 · El vendedor en la calle: ruta y postventa
**LinkedIn**
Dos cosas que un CRM genérico no hace en joyería:

📍 **Visitas verificadas.** Al llegar, "He llegado" registra la visita con el GPS. Si el vendedor está a menos de 200 m del cliente, la visita queda verificada. La ruta del día se ordena por cercanía y se abre en Google Maps.

🔧 **Postventa de piezas.** Reparaciones, garantías y reclamaciones como tickets: fotos de la pieza, nota de voz, fecha límite y la **firma del cliente con el dedo** al dejarla y al recogerla.

Todo desde una app que se instala en el navegador del móvil, sin tiendas de apps, en iPhone y Android.

#CRM #Joyería #Postventa #Ventas #RayGold

**Instagram / Facebook**
"He llegado" con GPS, firma con el dedo y fotos de la pieza. El vendedor de joyería, en el bolsillo. 📱 #RayGold
🖼️ *Imagen: el móvil con la pestaña Ruta y el mapa.*

---

### #8 · Del boceto a producción
**LinkedIn**
Antes de fabricar una joya se hacen bocetos, ceras, resinas impresas en 3D, cauchos y un primer piloto en metal. En cada paso cambian el peso, las piedras y las horas, y con ellos el coste.

El nuevo módulo de **Ingeniería de producto** de RAYGOLD responde a tres preguntas:
💰 **¿Es rentable?** El coste se valora en cada etapa frente al precio objetivo, con un semáforo verde, ámbar o rojo.
✅ **¿Está lista?** Una lista de comprobaciones dice qué falta: CAD, estructura, ruta, piloto, peso real, calidad, aprobación comercial…
🔁 **¿Qué ha cambiado?** Cada cambio es una versión nueva con su motivo.

Boceto → Prototipo → Piloto → Viabilidad → Readiness → Liberada.

Al liberar, RAYGOLD crea el artículo definitivo con su estructura, sus fases y sus stocks.

#Joyería #DesarrolloDeProducto #ERP #RayGold #Diseño

**Instagram / Facebook**
Ninguna joya llega a producción sin saber si es rentable. 🟢🟠🔴 #RayGold #DiseñoDeJoyas
🖼️ *Imagen: el tablero kanban con las 7 columnas.*

---

### #9 · Del archivo STL al peso de la joya
**LinkedIn**
En una pieza de oro, el metal puede ser el **90 % del coste**. Unas décimas de gramo deciden si es viable.

En RAYGOLD arrastras el STL y el sistema mide el volumen en el propio navegador. Con la densidad de cada metal saca el peso estimado:

Una candonga de 18 mm con hilo de 2 mm:
▪️ Volumen: 0,1574 cm³
▪️ En oro de 18 K amarillo: 0,1574 × 15,5 = **2,44 g**
▪️ En plata 925: 0,1574 × 10,36 = **1,63 g**

Después, el piloto fundido da el **peso real**, y se puede calcular el coste con uno o con otro. Y la pieza se ve en 3D, en el color del metal.

#Joyería #CAD #Impresión3D #ERP #RayGold

**Instagram / Facebook**
Del archivo 3D a los gramos de oro, antes de fundir nada. ⚖️ #RayGold #Joyería3D
🖼️ *Imagen: el visor 3D de una candonga en oro amarillo (pieza de demostración).*

---

### #10 · Por qué un solo cronometraje no basta
**LinkedIn**
Un cronometraje no es un tiempo estándar: es una observación.

En el trabajo manual de joyería, la misma operación varía de una pieza a otra: la cera, el metal, el engaste, el cansancio, la hora del día. Con el método de la OIT, para un error de ±5 % con un 95 % de confianza:
▪️ Una operación regular, de máquina, necesita unos **3 ciclos**.
▪️ Una operación manual típica de joyería necesita unos **17 ciclos**.

Por eso en el nuevo módulo de **Métodos y Tiempos** de RAYGOLD la norma es de **10 ciclos como mínimo y 15 como ideal** antes de pasar un tiempo a la ruta, repartidos entre varios operarios, días y turnos.

Y como el sistema usa los 15 ciclos más recientes, cuando el método mejora el estándar se actualiza solo.

#Productividad #EstudioDelTrabajo #Joyería #ERP #RayGold

**Instagram / Facebook**
TE = TMO × FV × (FD + 1) / 100 × (SUPL + 1). Traducido: tiempos medidos, no estimados. ⏱️ #RayGold
🖼️ *Imagen: la fórmula con los cinco términos (TMO, FV, FCO, TN, TE) como infografía.*

---

### #11 · El mismo tiempo, lo haga quien lo haga
**LinkedIn**
La tabla de suplementos de referencia de la OIT, la que compensa la fatiga y las necesidades personales en los tiempos estándar, daba algunos valores distintos para hombres y para mujeres.

En RAYGOLD hemos decidido **no hacer esa distinción**. Cada suplemento tiene un único porcentaje, el mayor de los dos, para que nadie salga perjudicado y la misma operación tenga el mismo tiempo estándar la haga quien la haga.

Los suplementos dependen del **puesto**, no de la persona: trabajar de pie, la postura, la tensión visual del engaste o la soldadura, el ruido, la monotonía…

Es coherente con el principio de igual retribución por trabajo de igual valor. Y cada empresa puede ajustarlos a su propia evaluación ergonómica.

#Igualdad #Ergonomía #Joyería #ERP #RayGold

**Instagram / Facebook**
Los suplementos dependen del puesto, no de quién lo ocupa. ⚖️ #Igualdad #RayGold
🖼️ *Imagen: una tarjeta con la frase y un banco de joyero.*

---

### #12 · Calidad: parar el defecto donde nace
**LinkedIn**
Si una piedra está suelta y se descubre en Expedición, la pieza ya ha pasado por pulido, engastado y baño. Se ha perdido todo ese trabajo.

La **calidad preventiva** de RAYGOLD mide dentro de la ruta, justo después de la fase que puede fallar:
🔹 Al marcar la salida de la fase, la inspección **nace sola**.
🔹 Si el control bloquea, la pieza no entra en la fase siguiente hasta que se acepta.
🔹 La salida nunca se bloquea: el operario siempre puede terminar su trabajo.
🔹 Queda registrado quién la fabricó, quién la midió, cuándo y con qué medidas y fotos.

Una piedra suelta en Engastado cuesta un repaso. En el cliente cuesta la piedra, la joya y la confianza.

#Calidad #Joyería #Fabricación #ERP #RayGold

**Instagram / Facebook**
Detectar en la fase, no al final. 🔍💎 #CalidadJoyería #RayGold
🖼️ *Imagen: la ruta Fundición → … → Expedición con las rayas turquesa de los puntos de control.*

---

### #13 · Si la ley sale a 745 ‰
**LinkedIn**
En joyería, los dos datos que cuestan dinero son la **ley** y el **peso**.

Por eso la plantilla de calidad de RAYGOLD trae de serie lo que se mide en un taller: peso (balanza de 0,01 g), ley del metal (750–760 ‰ con XRF o toque), medida o talla, piedras bien sujetas, sin poros (lupa 10x), acabado, contraste, cierre y color.

Si una característica **crítica** falla, por ejemplo una ley a 745 ‰, el botón Aceptar se desactiva. Solo queda rechazar y reponer, reprocesar o aceptar con una desviación firmada.

Y con el **control estadístico** (Cp, Cpk y reglas de alarma), un Cpk bajo en la ley de Fundición avisa de que la aleación se está quedando al límite antes de que salga una pieza a 749 ‰.

#Calidad #SPC #Joyería #Oro #RayGold

**Instagram / Facebook**
Ley a 745 ‰ → Aceptar bloqueado. El control de calidad que sabe de joyería. 🥇 #RayGold
🖼️ *Imagen: ficha de inspección de demostración con la barra de tolerancia en rojo.*

---

### #14 · Calidad pensada para órdenes de 1 a 5 piezas
**LinkedIn**
Los grandes sistemas pensaron la calidad para fábricas que hacen lotes de cientos de piezas iguales: se revisa una muestra y se aplica estadística por lote.

Un taller de joyería trabaja al revés: muchas órdenes al día, de 1 a 5 piezas cada una. Las tablas de muestreo piden casi todo el lote.

Por eso en RAYGOLD:
▪️ El control va al 100 %: la muestra es el sobre.
▪️ Con varias piezas se anota el valor más desfavorable.
▪️ Si falla 1 de 3, se crea la reposición desde la propia hoja y las buenas pueden seguir con una desviación documentada.
▪️ Se configura cuánto trabajo le cae al encargado. Para empezar recomendamos inspector en Engastado y Acabados, y autocontrol en Fundición y Pulido.

Y el mismo control vale para la casa, los externos y los talleres subcontratados.

#Calidad #Joyería #Taller #ERP #RayGold

**Instagram / Facebook**
Ni lotes de mil ni muestreos de manual: calidad para el taller de joyería de verdad. 🛠️ #RayGold
🖼️ *Imagen: la "chuleta del taller" en una tarjeta.*

---

### #15 · Antes de enseñar pantallas: quién hace cada trabajo
**LinkedIn**
Muchas implantaciones de ERP fallan por algo que no es el programa: nadie tiene claro quién hace cada trabajo.

Por eso, en RAYGOLD, antes de formar a nadie repartimos las actividades de la empresa, desde dar de alta un artículo hasta cerrar el mes, con el método **RACI**, el mismo que usan las grandes implantaciones:
🅰️ **Responde**: uno solo por actividad.
🆁 **Lo hace**: el trabajo de cada día.
🆂 **Suplente**: para lo que no puede parar.
🅲 **Consultado** e 🅸 **Informado**.

Cada persona tiene un nivel de 0 a 4 en cada actividad, y la pantalla avisa sola de lo que hay que corregir: conflictos de funciones (vender y dar de alta al cliente, recibir y recontar), personas con demasiada carga, actividades sin suplente y a quién hay que formar.

El primer día, cada persona sabe qué le toca.

#ImplantaciónERP #Organización #Joyería #RayGold

**Instagram / Facebook**
Una implantación empieza por saber quién hace qué, no por las pantallas. 👥 #RayGold
🖼️ *Imagen: la vista "Por persona" con nombres ficticios (no usar capturas del cliente).*

---

### #16 · ¿Dónde va el coste del diseñador?
**LinkedIn**
El diseñador de una joyería hace dos trabajos distintos, y cada uno se paga en un sitio distinto del precio:

✏️ **Diseño técnico**: modelos 3D, maestros para los cauchos, fichas técnicas, prototipos. Sin ese trabajo la joya no se puede fabricar → **coste de fabricación**, a través de las tasas horarias del taller.

🎨 **Diseño de colecciones**: tendencias, colecciones nuevas, muestras para vender. Es desarrollo y marketing → **gasto del periodo**, en el recargo de todas las joyas.

Si todo fuera gasto general, una cadena de catálogo pagaría el diseñador igual que un anillo de colección nueva. Si todo fuera fabricación, las piezas del taller pagarían el trabajo de crear colecciones.

Repartido según su tiempo (por ejemplo 60/40), cada joya paga lo que de verdad le corresponde, sin que nada se cuente dos veces.

#Costes #Escandallo #Joyería #ERP #RayGold

**Instagram / Facebook**
Diseño técnico → coste de fabricación. Colecciones → gasto del periodo. Cada joya paga lo suyo. 💡 #RayGold
🖼️ *Imagen: dos columnas, 60 % y 40 %, con a dónde va cada parte.*

---

## 5. Imágenes: cuidado con las capturas

Los PDF tienen capturas con **nombres reales** (empleados, el diseñador, un taller subcontratado, ciudades, códigos de artículo del cliente). Para redes y para la web hay que:
- sacar capturas nuevas de la base de **demostración**, o
- pixelar nombres, códigos y cifras antes de publicar.

Las del CRM ya dicen que son "datos de demostración". Las de la ficha de inspección de Calidad y las de Implantación son del cliente: **no usarlas tal cual**.
