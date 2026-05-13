---
title: "1998 → 2026: 28 anys després, l'arquitectura ERP d'una joieria continua sent la mateixa (i això és una bona notícia)"
excerpt: "Recuperem dos diagrames de 1998 sobre el flux d'un taller joier integrat. 28 anys després, l'esquema conceptual d'un ERP joier continua intacte: només canvien les capes tecnològiques."
category: "Arquitectura & ERP"
tags: ["CIM", "ERP", "joieria", "arquitectura", "traçabilitat", "IoT", "indústria 4.0"]
date: 2026-05-05
language: "ca"
seoKeyword: "ERP joieria arquitectura"
---

# 1998 → 2026: 28 anys després, l'arquitectura ERP d'una joieria continua sent la mateixa

> *Reviso els pòsters que vaig fer el 1998 explicant l'arquitectura d'un sistema integrat per a taller de joieria. L'estètica s'ha quedat ancorada en aquell Office 97. Però l'arquitectura conceptual —administració, planificació, disseny, qualitat, control de producció, vendes, compres, fabricació, flux de materials— és exactament la mateixa sobre la qual es construeix RayTecno avui.*
>
> *Això no és nostàlgia. És una observació útil per a qualsevol joieria que estigui avaluant un ERP el 2026.*

El 1998 vaig dibuixar dos pòsters per presentar a clients joiers la idea d'un **sistema CIM (Computer Integrated Manufacturing)** aplicat al seu sector. Aleshores parlar de "0 estocs, 0 retards, 0 papers, qualitat total" en tallers on els fulls de ruta circulaven tacats d'or entre encastadors i polidors sonava més a manifest que a proposta tecnològica.

Gairebé tres dècades després, aquesta proposta ha acabat sent l'estàndard de qualsevol [ERP joier](/ca) modern. Però —i això és el que és interessant— **l'esquema conceptual no ha canviat**. El que ha canviat són les **capes tecnològiques** que s'han anat apilant a sobre.

En aquest article recupero els dos diagrames originals (modernitzats visualment per a web), afegeixo un tercer que mostra què s'ha sumat entre 1998 i 2026, i reflexiono sobre el que això significa per a qualsevol joieria que s'estigui replantejant avui el seu sistema de gestió.

---

## 1. L'arquitectura: el que vaig dibuixar el 1998 continua sent vàlid el 2026

El primer pòster era un esquema de **capes funcionals**: administració a dalt, nucli CIM al centre, fabricació a sota, i el flux de materials travessant-ho tot de proveïdor a client.

![Arquitectura ERP integrat per a joieria](./arquitectura-erp-joyeria-2026.svg)

Les peces són les mateixes que qualsevol llibre modern d'Indústria 4.0 continua descrivint:

- **Administració:** comptabilitat, personal, comptabilitat industrial.
- **Planificació d'empresa:** objectius, estratègia, marc de producció.
- **CAD:** disseny, càlcul, dibuix, llista de peces, simulació.
- **CAP** (planificació de treball) i **CAQ** (control de qualitat).
- **PPC** (Production Planning and Control): programa de producció, llançament d'ordres.
- **Vendes i compres** integrats al nucli.
- **CAM** (Computer Aided Manufacturing): control de flux de materials, control de fabricació, conservació.

I un **flux horitzontal** que travessa el taller: cera → fosa → exteriors → encastadors → poliments → acabats → expedició.

> **El punt important:** aquest esquema no era una visió pròpia, era la traducció al sector joier del paradigma CIM que s'ensenyava als 90 a escoles d'enginyeria industrial. El que sí que era novetat aleshores és que **algú ho apliqués seriosament a un taller de joieria**, on la majoria anaven amb Excel i llibreta. Avui és la base de qualsevol ERP joier seriós.

---

## 2. El flux del taller: seccions, fases i estocs intermedis

El segon pòster era un diagrama radial. Tres anells concèntrics —centres de cost, seccions del taller, fases productives concretes— amb l'or al nucli i els magatzems intermedis marcats radialment.

![Flux de fabricació de joieria — taller complet](./flujo-taller-joyeria-2026.svg)

El que aquest diagrama ensenya, i que continua sent igual de vàlid avui, són tres idees que qualsevol joier amb taller propi reconeixerà:

**Primera: l'or entra una vegada i es transforma moltes.**
El nucli és la matèria primera. Tota la resta són transformacions que afegeixen valor (i cost) sobre ella. Un ERP joier seriós ha de mesurar on es guanya aquest valor i on es perd en minves.

**Segona: hi ha tres centres de cost, no un.**
CC1, CC2 i CC3 representen agrupacions de seccions que comparteixen naturalesa productiva. La comptabilitat de costos joiera no funciona si tot el taller és un únic centre: cal poder comparar el cost per gram de la fosa davant del poliment davant de l'encast.

**Tercera: entre fases hi ha estocs intermedis (WIP) que ningú vol veure.**
Els magatzems de pilots, cautxús, ceres, pedres, matèria primera, complements, semielaborats i acabats són **capital immobilitzat** dormint entre fases. Tenir-los identificats explícitament al diagrama és el que permet atacar-los: la pregunta operativa no és "quant estoc tinc?" sinó "en quin punt del flux el tinc?".

---

## 3. El que sí que ha canviat: sis capes modernes sobre el mateix nucli

Si l'arquitectura conceptual no ha canviat, què ha canviat doncs? La resposta: **les capacitats**, i s'han afegit en forma de capes.

![De 1998 a 2026: l'arquitectura aguanta, les capes creixen](./capas-modernas-1998-2026.svg)

Aquestes són les sis capes que el 1998 no hi eren —o eren embrionàries— i que avui són centrals en qualsevol ERP joier modern:

### 3.1 Traçabilitat per peça i per lot

El 1998 el control de qualitat era una secció més de l'esquema CIM. Avui parlem d'una cosa molt més exigent: **cada peça venuda té una història completa documentada** —de quin lingot va sortir l'or, quin proveïdor va lliurar les gemmes, quin encastador la va treballar, quin torn de poliment va passar, quins controls va superar, en quina botiga es va vendre, a quin client.

Això no és un caprici: és un requisit normatiu creixent (LBMA, Kimberley, RJC) i un actiu comercial cada vegada més valuós per al client final que pregunta "d'on ve aquest diamant?".

### 3.2 Omnicanalitat

El 1998 una joieria venia a la seva botiga. Punt. Avui una marca joiera mitjana opera en paral·lel a:

- Botigues pròpies.
- Córners i espais concessionats en grans superfícies.
- Web pròpia.
- Marketplaces.
- Distribució majorista B2B.
- Esdeveniments efímers (pop-ups, fires).

I tot això ha de compartir **un únic estoc real** i un únic històric de client. La capa omnicanal de l'ERP és la que fa possible que la dependenta d'una botiga vegi que la clienta va comprar un anell a joc al web fa sis mesos.

### 3.3 Integració amb el client final

Configuradors 3D en línia, prova virtual amb realitat augmentada, anells a mida demanats des del mòbil, pressupostos compartits per WhatsApp amb fotos de l'avenç del taller. El client final ja no és només la destinació del flux: és **un actor més dins del flux**, amb capacitat per iniciar ordres de fabricació que entren directament al sistema.

### 3.4 IoT al taller

El 1998 el control de fabricació s'alimentava de parts en paper que l'encarregat tecletjava al final del torn. El 2026 les dades vénen directament dels equips:

- Forns de fosa que reporten temperatura i corba del cicle en temps real.
- Bàscules de precisió connectades que registren el pes de cada peça en cada fase.
- Banys de rodi amb control de gruix automatitzat.
- Càmeres que documenten l'estat de la peça en cada punt crític.

L'ERP rep dades de màquina sense intervenció humana. La conseqüència: traçabilitat sense fricció, i la possibilitat de detectar anomalies (minves anormals, cicles fora de rang) abans que es converteixin en problema.

### 3.5 Analítica predictiva

Els ERP dels 90 contestaven la pregunta *"què va passar?"*. Els ERP moderns contesten també *"què passarà?"*. Aplicat a joieria:

- **Predicció de colls d'ampolla:** sabent la càrrega actual del taller, quina fase saturarà primer la setmana que ve.
- **Predicció de ruptura d'estoc per botiga:** combinant històric, estacionalitat i esdeveniments puntuals (campanyes, clima, festius locals).
- **Predicció de demanda per col·lecció:** detectant abans que la intuïció quines referències s'enlairaran.

Aquesta capa només és possible quan la traçabilitat i l'IoT són al seu lloc: l'analítica predictiva necessita dades històriques netes i abundants per entrenar.

### 3.6 Compliment normatiu digital

El 1998 les obligacions normatives eren més senzilles i es gestionaven en paper. El 2026 una joieria s'enfronta a:

- **LBMA** (London Bullion Market Association) per a certificació d'or responsable.
- **Procés Kimberley** per a diamants lliures de conflicte.
- **RJC** (Responsible Jewellery Council) per a certificació integral de la cadena.
- **Declaracions IVA digitals** (SII a Espanya, equivalents europeus).
- **Registre d'operacions sospitoses** (AML/PBC per a metalls preciosos).
- **Facturació electrònica obligatòria** segons evolució regulatòria.

Aquesta capa no és opcional: és condició per operar. I només és viable si està integrada a l'ERP, no com a afegit posterior.

---

## 4. La conclusió que importa: l'arquitectura és estable, les capacitats evolucionen

Mirar dos pòsters de 1998 i verificar que l'arquitectura continua intacta no és un exercici nostàlgic. Té una **implicació pràctica directa** per a qualsevol joieria que estigui avaluant avui el seu ERP.

**La pregunta correcta no és "aquest ERP té IA / blockchain / IoT?"**. Aquesta pregunta porta a comprar capes modernes muntades sobre arquitectures fràgils.

**La pregunta correcta és: "aquest ERP respecta l'arquitectura natural del negoci joier —administració, planificació, CAD, qualitat, control de producció, vendes, compres, fabricació, flux de materials— i construeix les capes modernes a sobre?"**.

Si la resposta és sí, les capes noves que s'inventin els pròxims 28 anys es podran continuar afegint sense trencar el sistema. Si la resposta és no, cap mòdul d'IA salvarà el sistema quan el taller creixi o canviïn les normatives.

A **RayTecno** ho plantegem exactament així amb [RayGold](/ca): el nucli és l'arquitectura clàssica del CIM joier, provada durant dècades; les capes modernes (traçabilitat, omnicanal, IoT, analítica, compliment) són mòduls que s'activen segons necessiti cada joieria. Una joieria petita comença pel nucli. Un grup joier amb producció pròpia i vint botigues activa totes les capes.

L'arquitectura és la promesa que el seu ERP no quedarà obsolet quan arribi la pròxima onada de tecnologia. I la pròxima ja està arribant.

Si la seva joieria té taller propi, xarxa de botigues o ambdues coses, i vol revisar el seu sistema de gestió amb aquesta lent arquitectònica en lloc d'amb una checklist de funcionalitats, [parlem-ne](https://www.raytecno.es/contacte).

---

### Per continuar llegint

- *Abastiment a botigues de joieria: com decidir quant producte enviar a cada punt de venda*
- *Tipus d'organització empresarial al sector joier: les 5 configuracions de Mintzberg*
- *El cas Schneider: 5 lliçons de màrqueting estratègic aplicables a joieria*

---

**Li ha resultat útil aquest article?** Comparteixi'l amb el seu equip directiu o subscrigui's al blog de RayTecno per rebre una anàlisi estratègica al mes.

---

*Nota de l'autor: els pòsters originals de 1998 estan guardats al meu arxiu personal. Aquests diagrames són recreacions modernitzades que respecten l'arquitectura conceptual de l'original, adaptada visualment per a web.*
