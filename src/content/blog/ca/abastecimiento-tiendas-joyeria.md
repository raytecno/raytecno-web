---
title: "Abastiment a botigues de joieria: com decidir quant producte enviar a cada punt de venda sense sobreestoc ni ruptura"
excerpt: "Guia tècnica d'abastiment joier a xarxa de botigues: fórmula de necessitat, classificació ABC del catàleg i model DRP aplicat al sector joier i integrat a RayTecno."
author: "Equip RayTecno"
category: "Logística & ERP"
tags: ["abastiment", "DRP", "ABC", "estoc", "joieria", "ERP", "retail", "taxa de cobertura"]
date: 2026-05-05
language: "ca"
seoKeyword: "abastiment joieria ERP"
---

# Abastiment a botigues de joieria: com decidir quant enviar a cada punt de venda

> *Hi ha dues maneres d'equivocar-se abastint una botiga: enviar de menys —i perdre vendes que no tornen— o enviar de més —i deixar capital immobilitzat en producte que rota lent. La diferència entre una joieria que creix i una que s'ofega en estoc està en com evita ambdues.*

Una de les preguntes més freqüents que rebem sobre el nostre [ERP especialitzat en joieria](/ca) prové de joieries amb xarxa de botigues: **"quant producte he d'enviar a cada botiga i quan?"**. La pregunta sembla senzilla, però al darrere s'amaga un dels problemes més complexos de la gestió joiera moderna, especialment quan parlem de:

- Joieries amb diverses botigues pròpies a diferents ciutats.
- Marques joieres amb presència en **grans superfícies i centres comercials** (espais concessionats o córners), on l'espai és limitat i car.
- Cadenes amb producció pròpia que abasteixen la seva pròpia xarxa.
- Joieries que combinen retail + majorista + e-commerce des d'un mateix magatzem central.

En tots aquests escenaris, la decisió de **quant enviar i a qui** no es pot prendre a ull. Cal sistematitzar-la. I hi ha tres eines tècniques que, combinades, resolen el problema:

1. **La classificació ABC del catàleg** — per saber què controlar amb quina intensitat.
2. **La fórmula de càlcul de necessitat** — per traduir consum en quantitat a demanar.
3. **El model DRP (Distribution Requirements Planning)** — per articular el conjunt en un procés repetible.

En aquest article desenvolupem els tres, els aterrem al sector joier i mostrem com s'integren dins d'un ERP especialitzat.

---

## 1. El problema real: per què fallar fa tant de mal en joieria

A diferència d'un producte de gran consum, en joieria **el cost de l'error és asimètric**:

- **Sobreestoc:** capital immobilitzat en or, plata o pedres. Costos financers que creixen cada dia (en metalls preciosos parlem sovint de **8-18 % anual** entre cost financer, emmagatzematge i deteriorament/robatori, segons el tipus de mercaderia).
- **Ruptura d'estoc:** la clienta que entra a buscar un solitari de 18 mm en or blanc i no el troba **no espera**. Va a la joieria del costat. La venda es perd, i sovint també la clienta.

L'equilibri entre ambdós riscos és l'essència del problema d'abastiment. I es complica amb factors específics del sector:

- **Estacionalitat molt marcada:** Nadal, Sant Valentí, comunions, dia de la mare, casaments (maig-setembre).
- **Assortits enormes amb baixa rotació per referència:** una joieria mitjana gestiona milers de SKUs, molts d'ells amb vendes anuals d'una o dues unitats.
- **Producció pròpia amb terminis llargs:** fabricar una col·lecció d'aliances pot durar setmanes.
- **Espais de venda molt reduïts** en córners i grans superfícies: cada forat d'exposició s'ha de rendibilitzar al màxim.

---

## 2. Primer pas: classificació ABC del catàleg

Abans de calcular **quant** enviar, cal saber **què** estem enviant. La corba ABC (també anomenada **regla 80/20** o llei de Pareto) és l'eina clàssica per classificar les referències del catàleg segons la seva importància econòmica.

### Concepte

La idea és simple: **un percentatge petit de referències concentra la major part del valor d'inventari o de vendes**. Típicament:

| Classe | % de referències | % del valor |
|---|---|---|
| **A** | ~15-20 % | ~70-80 % |
| **B** | ~25-30 % | ~15-20 % |
| **C** | ~50-60 % | ~5-10 % |

### Aplicació al sector joier

En una joieria, l'ABC es pot construir sobre diferents criteris i convé creuar-los:

- **ABC per valor d'inventari** (or 18k, diamants encastats → solen ser A).
- **ABC per valor de venda** (pot no coincidir amb l'anterior: una peça cara que rota poc pot ser C en vendes i A en inventari).
- **ABC per unitats venudes** (aliances bàsiques, regals per sota de cert import).
- **ABC per marge** (no tot el que ven molt deixa marge).

> **Indicador útil:** quan la **classe A en valor** i la **classe C en unitats venudes** coincideixen en una mateixa referència, hi ha sobreestoc. És una alerta que l'ERP hauria d'emetre automàticament.

### Implicacions operatives

| Classe | Tractament operatiu |
|---|---|
| **A** | Control estricte, revisió contínua de nivells, evitar sobreestoc, exactitud màxima en registres |
| **B** | Control intermedi, revisions periòdiques, automatització amb supervisió |
| **C** | Control lleuger, revisió per agrupació (mateix proveïdor, mateixa família), estoc mínim possible |

L'ABC no és un exercici d'una vegada: **es recalcula periòdicament** perquè el comportament del catàleg canvia amb la temporada, les modes i les col·leccions noves.

---

## 3. Segon pas: la fórmula de càlcul de necessitat

Un cop classificat el catàleg, cal decidir **quant demanar o enviar de cada referència**. Aquí entra una fórmula que a RayTecno recollim al mòdul d'abastiment i que sintetitza els principals factors en una sola equació:

```
Quantitat a demanar = Estoc objectiu - Estoc físic - Entrades previstes + (Vendes en període + Comandes a atendre)
```

Anem a desglossar cada variable. Aquesta és la **base tècnica** del càlcul:

| Variable | Significat | D'on surt |
|---|---|---|
| **TOTCAN** | Quantitat a demanar (resultat final) | Calculat |
| **TOTSFO** | Estoc objectiu final = Taxa cobertura × Venda mitjana setmanal | Calculat |
| **TOTSTK** | Estoc físic actual (descomptant reserves) | Mestre d'estocs |
| **TOTENT** | Entrades previstes en curs (producció o compres) | Pla de producció |
| **TOTVEP** | Vendes estimades durant el període d'aprovisionament | Temps producció × Venda mitjana |
| **TOTPAA** | Comandes a atendre (compromisos oberts) | Cartera de comandes |
| **TASCOB** | Taxa de cobertura: nº de setmanes que es vol estocar | Paràmetre per article / família |
| **VALMS** | Valor mitjà setmanal de venda = vendes històriques / nº setmanes | Estadística històrica |
| **TEMPRO** | Temps de producció / aprovisionament (en setmanes) | Mestre d'articles |

### Lectura pràctica de la fórmula

La fórmula diu una cosa molt lògica:

> *"Demana'm el que necessitaré al final del període (TOTSFO), resta'm el que ja tinc (TOTSTK), resta'm el que ja ve de camí (TOTENT) i suma'm el que vendré o serviré mentre arriba la comanda (TOTVEP + TOTPAA)."*

### Exemple aplicat: aliances bàsiques

Imaginem una joieria amb xarxa de 12 botigues que vol abastir **aliances model "clàssic or 18k 4mm"** a una de les seves botigues:

- Venda mitjana setmanal en aquesta botiga (`VALMS`): **3 unitats**
- Taxa de cobertura objectiu (`TASCOB`): **6 setmanes**
- Estoc objectiu (`TOTSFO` = 6 × 3): **18 unitats**
- Estoc físic actual (`TOTSTK`): **5 unitats**
- En curs de fabricació (`TOTENT`): **0 unitats**
- Temps de producció (`TEMPRO`): **2 setmanes**
- Vendes previstes durant aquestes 2 setmanes (`TOTVEP` = 2 × 3): **6 unitats**
- Comandes compromeses (`TOTPAA`): **2 unitats**

Aplicant la fórmula:

```
TOTCAN = 18 - 5 - 0 + (6 + 2) = 21 unitats
```

La botiga necessita que se li enviïn **21 aliances** per mantenir el ritme de venda i la cobertura objectiu.

### Paràmetres que l'ERP ha de gestionar

La potència de la fórmula està en com es **parametritzen els valors** per:

- **Article** (cada referència té la seva taxa de cobertura).
- **Sucursal** (una botiga en zona turística estacional necessita paràmetres diferents a una urbana).
- **Tipus de sucursal** (córner en gran superfície vs botiga pròpia vs majorista).
- **Família/subfamília** (aliances, segells, penjolls...).
- **Període** (Nadal o Sant Valentí canvien les mitjanes setmanals).

Això dona lloc a una **estructura jeràrquica d'atributs** —família → subfamília → producte → article → sucursal— que permet definir regles a nivell global i excepcions a nivell concret. És exactament el que fa el mòdul d'abastiment de RayTecno quan es configura per a un grup joier amb diverses marques i canals.

---

## 4. Tercer pas: el model DRP (Distribution Requirements Planning)

La fórmula anterior resol el càlcul **per a una referència i una botiga**. El repte real és escalar això a **milers de referències × desenes de botigues × desenes de setmanes planificades**, amb pronòstics que canvien, producció limitada i terminis de lliurament variables. Aquí entra el **DRP**.

### Què és el DRP

El **Distribution Requirements Planning** —o planificació de necessitats de distribució— és una metodologia que estén la lògica del MRP (típica de fabricació) al costat de la distribució. Originada a finals dels anys 80 com a evolució natural del MRP, avui és **estàndard en retail multi-botiga** i mòdul habitual als ERP industrials i de distribució moderns.

En essència, el DRP tradueix la demanda real i prevista a cada botiga en **ordres de reaprovisionament esglaonades en el temps**, propagant aquesta demanda cap enrere —des de la botiga al centre de distribució, i d'aquest al taller o al proveïdor— de manera coordinada.

### Push vs Pull: dues lògiques, un equilibri

| Model | Com funciona | Quan convé |
|---|---|---|
| **Push** | Es decideix centralment quant enviar a cada botiga segons previsió històrica | Producte estacional, llançaments, promocions, escassetat controlada |
| **Pull** | La botiga "estira" de l'estoc segons consumeix; el centre reabasteix en funció de la venda real | Assortit estable, alta rotació, producte recurrent |

El DRP modern **combina ambdós enfocaments**: push per a col·leccions noves i producte estacional; pull per a fons d'assortit. RayTecno permet definir estratègia per família i per tipus de botiga, cosa que és especialment útil per a joieries que barregen col·lecció permanent amb campanyes puntuals (Sant Valentí, Nadal, comunions).

### El que el DRP aporta sobre el simple "punt de comanda"

Un sistema bàsic de **punt de comanda (ROP)** dispara una ordre quan l'estoc baixa d'un llindar. Funciona, però té tres limitacions greus per a joieria:

1. **No anticipa canvis de demanda** (Nadal arriba i el sistema reacciona tard).
2. **No coordina entre botigues** (una té excés, una altra ruptura, i ningú les creua).
3. **No integra producció ni proveïdor** (la botiga demana, però el taller no arriba a temps).

El DRP sí que resol aquests tres punts perquè treballa amb un **horitzó temporal esglaonat** (típicament setmanal) i consolida la demanda de tota la xarxa.

### Cas típic: joieria amb botigues en grans superfícies

Una marca joiera amb **20 córners en grans superfícies** s'enfronta a un escenari comú:

- L'espai físic de cada córner és molt limitat (no hi caben més de X unitats per família).
- La rotació varia molt segons ubicació: un centre comercial de capital amb turisme ven molt diferent a un de província.
- La marca produeix part del catàleg en taller propi i compra la resta.
- El client final no perdona la ruptura: si no hi ha anell de la seva talla en estoc, se'n va.

**Sense DRP** el problema es resol amb diversos fulls d'Excel manejats per analistes. Funciona —malament— fins a cert tamany. Les conseqüències típiques:

- 30 % de referències **A** amb ruptura a botigues mentre hi ha estoc al centre de distribució.
- 5.000 unitats mensuals mogudes entre botigues per compensar excedents amb mancances (cost logístic altíssim).
- Botigues llogant traster addicional a prop del centre comercial per "guardar el que no cap a exposició".

**Amb DRP ben implementat** el model canvia:

- L'estoc es concentra al centre de distribució; la botiga rep **el que vendrà** en la freqüència definida.
- Les propostes de reposició es calculen automàticament amb la fórmula de necessitat i es presenten a l'especialista d'abastiment per a validació.
- Cada botiga pot tenir prioritat diferent (les de capital, prioritat alta) quan l'estoc central no arriba per a totes.
- Es gestionen productes substituts (si falta el model X, oferir el Y) i productes predecessors (la nova col·lecció "hereta" l'històric de l'anterior).

---

## 5. Atributs que l'ERP ha de gestionar perquè tot això funcioni

Perquè el DRP generi propostes raonables, l'ERP necessita mantenir una sèrie d'**atributs per article i per sucursal**. Els principals:

### Per article

- **Taxa de cobertura objectiu** (en setmanes o dies).
- **Estoc mínim** (en unitats o dies de venda).
- **Estoc màxim** i % d'arrodoniment.
- **Coeficient de variació interanual** (corregeix la previsió amb la tendència real).
- **Producte substitut** i producte predecessor.
- **Temps de producció / aprovisionament**.
- **Família, subfamília, producte** (jerarquia per a herències de paràmetres).

### Per sucursal

- **Coeficient de variació d'abastiment** (corregeix la mitjana per a aquesta botiga concreta).
- **Estoc mínim en dies**.
- **Dies de viatge des del centre de distribució**.
- **Calendari de recepcions** (quins dies rep cada sucursal: dilluns, dimarts, dimecres...).
- **Mitjanes de venda** (últims 7, 15, 30, 60, 90 i 120 dies, mateix mes any anterior).
- **Tipus de sucursal** (córner, botiga pròpia, franquícia, majorista...).
- **Prioritat** davant escassetat d'estoc.

I crític: l'ERP ha de permetre **actualitzacions massives** per herència jeràrquica. Configurar 5.000 referències × 20 botigues × 15 atributs manualment és inviable. El sistema ha de permetre:

1. Definir regles a nivell família.
2. Aplicar excepcions a nivell subfamília o producte.
3. Heretar tot automàticament al nivell article/sucursal.
4. Canviar massivament quan canvia la temporada o l'estratègia.

---

## 6. Conclusió: tres nivells de maduresa en abastiment joier

Per acabar, una manera útil d'autodiagnòstic:

| Nivell | Com es decideix què enviar | Riscos |
|---|---|---|
| **1. Manual / intuïtiu** | Cada encarregat de botiga demana el que creu, o un comprador central decideix a ull | Sobreestoc + ruptura simultània, dependència de persones, sense traçabilitat |
| **2. Regles bàsiques** | Fulls Excel amb estocs mínims per article, revisió setmanal manual | Funciona fins a 3-5 botigues; col·lapsa amb més |
| **3. DRP integrat a l'ERP** | Propostes automàtiques calculades amb fórmula de necessitat i validades per especialistes | Escalable, traçable, millora amb dades històriques i aprenentatge |

El salt del nivell 2 al 3 requereix un [programari ERP joier](/ca) que sàpiga gestionar la complexitat del sector: estacionalitat forta, assortits enormes, producció pròpia amb terminis llargs i espais de venda molt reduïts en córners i grans superfícies.

Si la seva joieria té diverses botigues, presència en grans superfícies o una combinació de canals que ja no es pot gestionar amb fulls de càlcul, [parlem-ne](https://www.raytecno.es/contacte). És probable que el problema no sigui l'equip —que sol estar fent-ho el millor possible amb les eines que té— sinó la manca d'un sistema que escali amb el negoci.

---

### Per continuar llegint

- *Tipus d'organització empresarial al sector joier: les 5 configuracions de Mintzberg*
- *El cas Schneider: 5 lliçons de màrqueting estratègic aplicables a joieria*
- *Traçabilitat de l'or: del lingot a la peça venuda*
- *KPIs que tota direcció de joieria hauria de revisar cada dilluns*

---

**Li ha resultat útil aquest article?** Comparteixi'l amb el seu equip directiu o subscrigui's al blog de RayTecno per rebre una anàlisi estratègica al mes.
