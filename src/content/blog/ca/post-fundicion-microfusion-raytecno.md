---
title: "Fosa i microfusió en joieria: el cor del taller, controlat des de l'ERP"
excerpt: "Anàlisi del procés de microfusió a la cera perduda en joieria: del model CAD a la peça acabada, punts crítics de qualitat, variables de cost i com un ERP joier controla la traçabilitat de l'or."
author: "Equip RayTecno"
category: "Fabricació & ERP"
tags: ["fosa", "microfusió", "cera perduda", "joieria", "ERP", "traçabilitat", "minva", "or"]
date: 2026-05-05
language: "ca"
seoKeyword: "microfusió joieria ERP"
---

# Fosa i microfusió en joieria: el cor del taller

> *Cada gram d'or que entra al forn té un cost, una procedència i un destí. Cada peça que en surt té una història. Entre el lingot i la vitrina, el moment més crític —on més valor es guanya o es perd— és la fosa. Si el seu ERP no controla aquest punt, no controla el seu negoci.*

En qualsevol taller de joieria amb producció pròpia, **la fosa és el coll d'ampolla tècnic, el punt de major cost energètic, el moment de major risc de minva i, alhora, la fase de la qual depèn la qualitat de tot el que ve després**. Una porositat mal detectada en fosa s'arrossega a través de l'esmerilat, el poliment, l'encast i els acabats. Arribarà al client final com una imperfecció visible que desqualificarà la peça.

En aquest article recorrem el procés de fosa joiera moderna —centrant-nos en la **microfusió a la cera perduda**, la tècnica dominant del sector— des de la perspectiva de qui ha de **controlar producció, traçabilitat i costos** des d'un ERP. El que segueix és el que hem après a RayTecno acompanyant tallers reals.

---

## 1. Per què la microfusió continua sent la tècnica dominant?

La microfusió a la cera perduda és **la tècnica de fosa més utilitzada en joieria**, tant en producció de bijuteria com en alta joieria. Existeixen altres opcions —fosa en sorra, fosa contínua, fosa a pressió— però cap combina les dues qualitats que el sector joier exigeix:

- **Precisió de reproducció del detall** (filigranes, textures, encastos preformats, tipografies).
- **Versatilitat de volum** (des d'una peça única fins a sèries de centenars sobre un mateix arbre).

Aquesta tècnica permet treballar pràcticament tots els metalls nobles: or groc, or blanc, or rosa (en aliatges des de 9k fins a 22k), plata 925 i 930, pal·ladi, platí, llautó i bronze. Cadascun amb les seves particularitats de temperatura de colada, atmosfera de protecció, propensió a defectes.

I el 2026 la microfusió viu una **segona joventut** gràcies a la integració amb impressió 3D: el model en cera ja no es talla manualment, s'imprimeix en resina fonedissa directament des d'un arxiu CAD. Això redueix el temps del concepte a peça física de setmanes a dies, i permet a tallers petits competir en complexitat amb les grans marques.

---

## 2. El procés pas a pas: on es guanya i es perd valor

Repassem les fases del procés amb la lent d'un responsable de producció que necessita controlar-les des de l'ERP.

### 2.1 Disseny i model CAD

Tot comença amb el **model digital**. Abans era un model en cera tallat a mà per un mestre modelista. Avui és un arxiu CAD —Rhino, 3Design, Matrix, ZBrush— que defineix geometria, pes teòric i volum de metall necessari.

**El que l'ERP ha de controlar:**

- Versionat del model (cada revisió és una variant, amb el seu BOM).
- Pes teòric del model segons aliatge (un anell en or 18k pesa molt diferent que en plata).
- Temps de fabricació estimat per fase.
- Cost teòric del model a preu d'or del dia.

### 2.2 Cautxú i matriu

A partir del model (o directament del CAD si s'imprimeix en resina), es fabrica un **motlle de cautxú vulcanitzat** que servirà per injectar ceres en sèrie. És la peça que defineix la rendibilitat de tota una col·lecció: un bon cautxú dura milers d'injeccions, un mal fet trenca a les cent.

**Variables crítiques:**

- Tipus de cautxú (silicona vulcanitzable, silicona injectable a baixa temperatura, RTV).
- Geometria dels canals d'injecció (mal dissenyats, generen peces incompletes).
- Vida útil acumulada (cada cautxú té un comptador real d'injeccions).

**El que l'ERP ha de controlar:** un **mestre de cautxús** amb identificador únic, data de creació, nombre d'injeccions acumulades i estat (actiu, en revisió, retirat).

### 2.3 Injecció de ceres

Cada peça comença sent una rèplica en cera. La injectora introdueix cera fosa (típicament a 60-80°C) al motlle de cautxú a pressió controlada. Un cop solidificada, s'extreu la cera i s'inspecciona.

**Defectes típics en aquesta fase:**

- Peces incompletes (cera que no va omplir el motlle).
- Bombolles atrapades a la cera.
- Deformacions per extracció prematura.

**KPI a mesurar:** rendiment d'injecció (% de ceres vàlides / total injectades). Un cautxú que cau per sota del 85% de rendiment és candidat a substitució.

### 2.4 Encast en cera (opcional però crític)

En peces amb encast de gemmes petites (pavé, cluster), les gemmes es col·loquen **directament a la cera** abans de la fosa, en una tècnica anomenada *stone-in-place*. El metall fon al voltant de les gemmes, estalviant una fase posterior d'encast manual.

Això exigeix gemmes de molt alta resistència tèrmica (diamants naturals o sintètics, safirs, robins) i un control precís de temperatura per no danyar-les.

**El que l'ERP ha de controlar:** traçabilitat de gemmes des de compra (amb certificat Kimberley o equivalent) fins al seu encast en peça concreta.

### 2.5 Muntatge de l'arbre

Les ceres individuals es solden a un **canal central de cera**, formant un "arbre" que permet fondre dotzenes de peces en una sola colada. El disseny de l'arbre és un art en si mateix: peces mal distribuïdes generen defectes per flux de metall desigual.

**KPI clau:** **grams de metall per arbre**. És la unitat econòmica bàsica del taller: si l'arbre pesa 200 g d'or 18k a 65 €/g, són 13.000 € en joc en una sola colada.

### 2.6 Col·locació en cilindre i guix de revestiment

L'arbre es col·loca dins d'un cilindre metàl·lic i s'omple amb **guix de microfusió d'alta resistència tèrmica**, barrejat amb aigua en proporció exacta. La barreja es vibra al buit per eliminar bombolles que generarien porositat al metall final.

**Variables crítiques:**

- Proporció guix/aigua (típicament 38-40% d'aigua).
- Temps de buit (60-90 segons).
- Temps de fraguat abans de passar al forn (mínim 2 hores).

### 2.7 Desencerat al forn

El cilindre passa al forn seguint una **rampa de temperatura programada**: pujada lenta fins a 150°C per evaporar humitat, plateau a 300°C per fondre i eliminar la cera, pujada final fins a 700-750°C per calcinar restes orgànics i deixar el motlle net.

Una rampa mal programada genera fissures al guix, que es tradueixen en peces amb rebabes o totalment inservibles.

### 2.8 Fosa i colada

El metall es fon en gresol —en forns d'inducció moderns— a la temperatura específica de cada aliatge. El cilindre calent es col·loca a la centrifugadora o a la màquina de colada al buit, i el metall líquid s'injecta al motlle.

**Temperatures típiques de colada:**

- Or groc 18k: ~1050°C
- Or blanc 18k: ~1100°C
- Plata 925: ~1000°C
- Platí: ~1850°C (requereix equips especialitzats)

**Defectes crítics en aquesta fase:**

- **Porositat per gas** (atrapament d'aire o excés d'humitat al guix).
- **Ompliment incomplet** (temperatura de colada baixa o canals mal dimensionats).
- **Tensions internes** (refredament massa ràpid).
- **Contaminació** per excés de metall reciclat: utilitzar més del 50% de metall recuperat de colades anteriors **augmenta significativament els defectes**.

### 2.9 Desemmotllat i separació de peces

El cilindre es refreda amb aigua, cosa que trenca el guix. L'arbre metàl·lic s'extreu, es neteja i se separen les peces individuals del canal d'alimentació amb disc de tall. Cada peça es pesa i es contrasta amb el seu pes teòric.

**KPI fonamental:** **minva de metall**. Un taller ben gestionat manté minves de fosa per sota del 2-3% (la resta es recupera i es reincorpora controladament).

---

## 3. Els punts de control que l'ERP ha de gestionar

Al llarg de les nou fases anteriors, hi ha sis variables crítiques que han de quedar registrades a l'ERP perquè el taller sigui governable:

### 3.1 Traçabilitat del metall

**D'on ve cada gram i on va.** L'ERP ha de registrar, per cada lot d'or o plata:

- Proveïdor i certificació (LBMA per a or responsable, recycled silver certified).
- Puresa analitzada (no la declarada).
- Aliatge al qual s'incorpora.
- Peça final on acaba.

Aquesta cadena permet respondre preguntes que cada vegada més clients fan: *"aquest or ve de mineria responsable?"*.

### 3.2 Control de minves per fase

No n'hi ha prou amb saber quant s'ha minvat en total. Cal saber **on**: en fosa, en esmerilat, en poliment, en encast. Cada fase té el seu rang acceptable, i desviacions significatives són senyal de problema.

### 3.3 Cost real per peça

El preu de l'or fluctua diàriament. Una peça fosa avui a 65 €/g i venuda d'aquí a tres mesos a 70 €/g pot haver generat un marge fictici si l'ERP no recalcula cost a preu de dia de fabricació.

### 3.4 Vida útil de cautxús i consumibles

Els cautxús, els gresols, els pucks de fosa tenen vida útil finita. L'ERP ha de comptar injeccions, colades i hores d'ús, alertant abans que el desgast generi defectes.

### 3.5 Rendiment per colada

**Colades vàlides / colades totals** és el KPI més important de fosa. Permet detectar tendències: un descens sostingut del rendiment indica un problema sistèmic (guix de mala qualitat, calibratge del forn, formació insuficient de l'operari).

### 3.6 Traçabilitat fotogràfica

En joieria d'alt valor, cada peça única ha de tenir **registre fotogràfic en cada fase crítica**: post-fosa, post-encast, abans d'empaquetatge. És prova de qualitat, suport de garantia i defensa davant reclamacions.

---

## 4. Els KPIs que la direcció hauria de veure cada dilluns

A nivell directiu, el soroll del taller es condensa en cinc números:

| KPI | Què mesura | Rang saludable |
|---|---|---|
| **Rendiment de colada** | % peces vàlides sobre total fos | > 90 % |
| **Minva global** | % metall perdut entre lingot i peça final | < 5 % |
| **Cost per gram de peça acabada** | Cost total / grams produïts | Estable o decreixent |
| **Temps mitjà model → peça** | Dies des d'aprovació CAD a primera peça | < 7 dies |
| **Reprocés** | % peces que tornen a fase anterior | < 8 % |

Quan un d'aquests cinc es mou, cal mirar abans que es converteixi en un problema econòmic.

---

## 5. Sostenibilitat: el factor que ningú demanava fa 10 anys i avui és central

La fosa joiera té una petjada energètica i de materials considerable. El 2026 això importa per dues raons:

- **Normativa creixent** (RJC, LBMA, certificacions ESG).
- **Demanda del client final**, especialment en segments joves que pregunten per origen de l'or i sostenibilitat abans de comprar.

Bones pràctiques que l'ERP ha de documentar:

- **Reciclatge controlat** de minves i deixalles (amb anàlisi de puresa en reincorporar).
- **Traçabilitat d'origen** del metall nou (or reciclat certificat, plata reciclada, or de mineria ètica).
- **Eficiència energètica** del forn (registre de consum elèctric per colada).
- **Gestió de residus químics** del desencerat i dels banys posteriors.

Comparada amb el mecanitzat CNC, la microfusió és **més sostenible** en ús de material (menys deixalla), però **menys eficient energèticament** que el forjat tradicional. Saber-ho i poder-ho demostrar amb dades de l'ERP és cada vegada més un argument comercial.

---

## 6. Com ho materialitza RayTecno

A **RayTecno** el mòdul de fabricació gestiona la microfusió joiera amb sis blocs integrats:

1. **Mestre de models i cautxús** amb versionat, BOM, vida útil i cost teòric actualitzable a preu d'or.
2. **Ordres de fabricació** que generen automàticament la documentació de l'arbre (pes esperat, nombre de peces, aliatge).
3. **Registre de colades** amb temperatura, hora, operari, lot de metall d'entrada, lot de guix, pes post-fosa i rendiment real.
4. **Traçabilitat peça a peça** amb codi únic que acompanya la joia fins a venda.
5. **Càlcul de cost real** que recalcula amb preu d'or del dia i reparteix costos indirectes del taller.
6. **Quadre de comandament directiu** amb els cinc KPIs anteriors en temps real i alertes sobre desviacions.

La filosofia és la mateixa que a la resta del sistema: **construir la qualitat i la traçabilitat a cada fase**, no inspeccionar-les al final.

---

## 7. Conclusió: la fosa és el moment de la veritat

En el cicle complet d'una joia, la fosa és el moment on més valor es concentra i més es pot perdre. Un taller que controla bé aquesta fase és un taller rendible. Un taller que no la controla compensa amb sobrecost, amb reprocés i amb frustració.

La bona notícia és que tota la complexitat descrita —nou fases, sis variables crítiques, cinc KPIs directius— és **perfectament sistematitzable** des d'un ERP especialitzat. No cal reinventar res: cal mesurar el que ja passa i actuar sobre les dades.

Si el seu taller fa microfusió i sent que no té visibilitat real del que està passant colada a colada, [parlem-ne](https://www.raytecno.es/contacte). Probablement el primer pas no sigui canviar el forn: sigui instrumentar el que ja té.

---

### Per continuar llegint

- *La IA en els sistemes de fabricació de joieria i en sistemes de qualitat: com evolucionen els 14 punts de Deming el 2026*
- *1998 → 2026: 28 anys després, l'arquitectura ERP d'una joieria continua sent la mateixa*
- *Abastiment a botigues de joieria: com decidir quant producte enviar a cada punt de venda*
- *Tipus d'organització empresarial al sector joier: les 5 configuracions de Mintzberg*

---

**Li ha resultat útil aquest article?** Comparteixi'l amb el seu equip de producció o subscrigui's al blog de RayTecno per rebre una anàlisi estratègica al mes.
