---
title: "Fonte et microfusion en joaillerie : le cœur de l'atelier, contrôlé depuis l'ERP"
excerpt: "Analyse du processus de microfusion à la cire perdue en joaillerie : du modèle CAO à la pièce finie, points critiques de qualité, variables de coût et comment un ERP joaillier contrôle la traçabilité de l'or."
author: "Équipe RayTecno"
category: "Fabrication & ERP"
tags: ["fonte", "microfusion", "cire perdue", "joaillerie", "ERP", "traçabilité", "perte", "or"]
date: 2026-05-05
language: "fr"
seoKeyword: "microfusion joaillerie ERP"
---

# Fonte et microfusion en joaillerie : le cœur de l'atelier

> *Chaque gramme d'or qui entre dans le four a un coût, une provenance et une destination. Chaque pièce qui en sort a une histoire. Entre le lingot et la vitrine, le moment le plus critique —où le plus de valeur se gagne ou se perd— c'est la fonte. Si votre ERP ne contrôle pas ce point, il ne contrôle pas votre entreprise.*

Dans tout atelier de joaillerie avec production propre, **la fonte est le goulot d'étranglement technique, le point de plus grand coût énergétique, le moment de plus grand risque de perte et, en même temps, la phase dont dépend la qualité de tout ce qui vient ensuite**. Une porosité mal détectée en fonte se traîne à travers le meulage, le polissage, le sertissage et les finitions. Elle arrivera au client final comme une imperfection visible qui disqualifiera la pièce.

Dans cet article nous parcourons le processus de fonte joaillère moderne —en nous concentrant sur la **microfusion à la cire perdue**, la technique dominante du secteur— du point de vue de celui qui doit **contrôler production, traçabilité et coûts** depuis un ERP. Ce qui suit est ce que nous avons appris chez RayTecno en accompagnant des ateliers réels.

---

## 1. Pourquoi la microfusion reste-t-elle la technique dominante ?

La microfusion à la cire perdue est **la technique de fonte la plus utilisée en joaillerie**, tant en production de bijouterie qu'en haute joaillerie. D'autres options existent —fonte en sable, fonte continue, fonte sous pression— mais aucune ne combine les deux qualités que le secteur joaillier exige :

- **Précision de reproduction du détail** (filigranes, textures, sertissages préformés, typographies).
- **Polyvalence de volume** (de la pièce unique aux séries de centaines sur un même arbre).

Cette technique permet de travailler pratiquement tous les métaux nobles : or jaune, or blanc, or rose (en alliages de 9k à 22k), argent 925 et 930, palladium, platine, laiton et bronze. Chacun avec ses particularités de température de coulée, atmosphère de protection, propension aux défauts.

Et en 2026 la microfusion vit une **seconde jeunesse** grâce à l'intégration avec l'impression 3D : le modèle en cire ne se sculpte plus manuellement, il s'imprime en résine fusible directement depuis un fichier CAO. Cela réduit le temps du concept à la pièce physique de semaines à jours, et permet aux petits ateliers de concurrencer en complexité les grandes marques.

---

## 2. Le processus pas à pas : où la valeur se gagne et se perd

Passons en revue les phases du processus à travers la lentille d'un responsable de production qui doit les contrôler depuis l'ERP.

### 2.1 Conception et modèle CAO

Tout commence par le **modèle numérique**. Avant c'était un modèle en cire sculpté à la main par un maître modeleur. Aujourd'hui c'est un fichier CAO —Rhino, 3Design, Matrix, ZBrush— qui définit géométrie, poids théorique et volume de métal nécessaire.

**Ce que l'ERP doit contrôler :**

- Versionnement du modèle (chaque révision est une variante, avec sa BOM).
- Poids théorique du modèle selon l'alliage (une bague en or 18k pèse très différemment qu'en argent).
- Temps de fabrication estimé par phase.
- Coût théorique du modèle au prix d'or du jour.

### 2.2 Caoutchouc et matrice

À partir du modèle (ou directement de la CAO si on imprime en résine), on fabrique un **moule en caoutchouc vulcanisé** qui servira à injecter des cires en série. C'est la pièce qui définit la rentabilité de toute une collection : un bon caoutchouc dure des milliers d'injections, un mal fait se casse au bout de cent.

**Variables critiques :**

- Type de caoutchouc (silicone vulcanisable, silicone injectable à basse température, RTV).
- Géométrie des canaux d'injection (mal conçus, ils génèrent des pièces incomplètes).
- Vie utile accumulée (chaque caoutchouc a un compteur réel d'injections).

**Ce que l'ERP doit contrôler :** un **fichier maître de caoutchoucs** avec identifiant unique, date de création, nombre d'injections accumulées et état (actif, en révision, retiré).

### 2.3 Injection de cires

Chaque pièce commence par être une réplique en cire. L'injecteur introduit de la cire fondue (typiquement à 60-80°C) dans le moule en caoutchouc à pression contrôlée. Une fois solidifiée, la cire est extraite et inspectée.

**Défauts typiques de cette phase :**

- Pièces incomplètes (cire qui n'a pas rempli le moule).
- Bulles piégées dans la cire.
- Déformations par extraction prématurée.

**KPI à mesurer :** rendement d'injection (% de cires valides / total injectées). Un caoutchouc qui tombe sous les 85% de rendement est candidat au remplacement.

### 2.4 Sertissage en cire (optionnel mais critique)

Dans les pièces avec sertissage de petites gemmes (pavé, cluster), les gemmes sont placées **directement dans la cire** avant la fonte, dans une technique appelée *stone-in-place*. Le métal fond autour des gemmes, économisant une phase ultérieure de sertissage manuel.

Cela exige des gemmes de très haute résistance thermique (diamants naturels ou synthétiques, saphirs, rubis) et un contrôle précis de température pour ne pas les endommager.

**Ce que l'ERP doit contrôler :** traçabilité des gemmes depuis l'achat (avec certificat Kimberley ou équivalent) jusqu'à leur sertissage dans une pièce concrète.

### 2.5 Montage de l'arbre

Les cires individuelles sont soudées à un **canal central de cire**, formant un « arbre » qui permet de fondre des dizaines de pièces en une seule coulée. La conception de l'arbre est un art en soi : des pièces mal réparties génèrent des défauts par flux de métal inégal.

**KPI clé :** **grammes de métal par arbre**. C'est l'unité économique de base de l'atelier : si l'arbre pèse 200 g d'or 18k à 65 €/g, ce sont 13 000 € en jeu en une seule coulée.

### 2.6 Mise en cylindre et plâtre de revêtement

L'arbre est placé dans un cylindre métallique et rempli de **plâtre de microfusion à haute résistance thermique**, mélangé à l'eau en proportion exacte. Le mélange est vibré sous vide pour éliminer les bulles qui généreraient de la porosité dans le métal final.

**Variables critiques :**

- Proportion plâtre/eau (typiquement 38-40% d'eau).
- Temps de vide (60-90 secondes).
- Temps de prise avant de passer au four (minimum 2 heures).

### 2.7 Décirage au four

Le cylindre passe au four en suivant une **rampe de température programmée** : montée lente jusqu'à 150°C pour évaporer l'humidité, plateau à 300°C pour fondre et éliminer la cire, montée finale jusqu'à 700-750°C pour calciner les restes organiques et laisser le moule propre.

Une rampe mal programmée génère des fissures dans le plâtre, qui se traduisent par des pièces avec bavures ou totalement inutilisables.

### 2.8 Fonte et coulée

Le métal est fondu dans un creuset —dans des fours à induction modernes— à la température spécifique de chaque alliage. Le cylindre chaud est placé dans la centrifugeuse ou dans la machine de coulée sous vide, et le métal liquide est injecté dans le moule.

**Températures typiques de coulée :**

- Or jaune 18k : ~1050°C
- Or blanc 18k : ~1100°C
- Argent 925 : ~1000°C
- Platine : ~1850°C (nécessite des équipements spécialisés)

**Défauts critiques de cette phase :**

- **Porosité par gaz** (piégeage d'air ou excès d'humidité dans le plâtre).
- **Remplissage incomplet** (température de coulée basse ou canaux mal dimensionnés).
- **Tensions internes** (refroidissement trop rapide).
- **Contamination** par excès de métal recyclé : utiliser plus de 50% de métal récupéré de coulées antérieures **augmente significativement les défauts**.

### 2.9 Démoulage et séparation des pièces

Le cylindre est refroidi avec de l'eau, ce qui casse le plâtre. L'arbre métallique est extrait, nettoyé et les pièces individuelles sont séparées du canal d'alimentation avec un disque de coupe. Chaque pièce est pesée et comparée à son poids théorique.

**KPI fondamental :** **perte de métal**. Un atelier bien géré maintient des pertes de fonte sous les 2-3% (le reste est récupéré et réincorporé de manière contrôlée).

---

## 3. Les points de contrôle que l'ERP doit gérer

Tout au long des neuf phases précédentes, il y a six variables critiques qui doivent être enregistrées dans l'ERP pour que l'atelier soit gouvernable :

### 3.1 Traçabilité du métal

**D'où vient chaque gramme et où il va.** L'ERP doit enregistrer, pour chaque lot d'or ou d'argent :

- Fournisseur et certification (LBMA pour or responsable, recycled silver certified).
- Pureté analysée (pas la déclarée).
- Alliage auquel il s'incorpore.
- Pièce finale où il finit.

Cette chaîne permet de répondre à des questions que de plus en plus de clients posent : *« cet or vient-il d'une mine responsable ? »*.

### 3.2 Contrôle des pertes par phase

Il ne suffit pas de savoir combien on a perdu au total. Il faut savoir **où** : en fonte, en meulage, en polissage, en sertissage. Chaque phase a sa plage acceptable, et des écarts significatifs sont signe de problème.

### 3.3 Coût réel par pièce

Le prix de l'or fluctue quotidiennement. Une pièce fondue aujourd'hui à 65 €/g et vendue dans trois mois à 70 €/g peut avoir généré une marge fictive si l'ERP ne recalcule pas le coût au prix du jour de fabrication.

### 3.4 Vie utile des caoutchoucs et consommables

Les caoutchoucs, les creusets, les pucks de fonte ont une vie utile finie. L'ERP doit compter injections, coulées et heures d'usage, alertant avant que l'usure ne génère des défauts.

### 3.5 Rendement par coulée

**Coulées valides / coulées totales** est le KPI le plus important de la fonte. Il permet de détecter des tendances : une baisse soutenue du rendement indique un problème systémique (plâtre de mauvaise qualité, calibrage du four, formation insuffisante de l'opérateur).

### 3.6 Traçabilité photographique

En joaillerie de haute valeur, chaque pièce unique doit avoir un **registre photographique à chaque phase critique** : post-fonte, post-sertissage, avant emballage. C'est preuve de qualité, support de garantie et défense face aux réclamations.

---

## 4. Les KPIs que la direction devrait voir chaque lundi

Au niveau directif, le bruit de l'atelier se condense en cinq chiffres :

| KPI | Ce qu'il mesure | Plage saine |
|---|---|---|
| **Rendement de coulée** | % pièces valides sur total fondu | > 90 % |
| **Perte globale** | % métal perdu entre lingot et pièce finale | < 5 % |
| **Coût par gramme de pièce finie** | Coût total / grammes produits | Stable ou décroissant |
| **Temps moyen modèle → pièce** | Jours depuis approbation CAO à première pièce | < 7 jours |
| **Reprise** | % pièces qui retournent à une phase antérieure | < 8 % |

Quand l'un de ces cinq bouge, il faut regarder avant que cela ne devienne un problème économique.

---

## 5. Durabilité : le facteur que personne ne demandait il y a 10 ans et qui est central aujourd'hui

La fonte joaillère a une empreinte énergétique et matérielle considérable. En 2026 cela importe pour deux raisons :

- **Réglementation croissante** (RJC, LBMA, certifications ESG).
- **Demande du client final**, particulièrement dans les segments jeunes qui s'interrogent sur l'origine de l'or et la durabilité avant d'acheter.

Bonnes pratiques que l'ERP doit documenter :

- **Recyclage contrôlé** des pertes et déchets (avec analyse de pureté lors de la réincorporation).
- **Traçabilité d'origine** du métal neuf (or recyclé certifié, argent recyclé, or de mine éthique).
- **Efficacité énergétique** du four (registre de consommation électrique par coulée).
- **Gestion des déchets chimiques** du décirage et des bains ultérieurs.

Comparée à l'usinage CNC, la microfusion est **plus durable** en utilisation de matière (moins de déchets), mais **moins efficace énergétiquement** que le forgeage traditionnel. Le savoir et pouvoir le démontrer avec les données de l'ERP est de plus en plus un argument commercial.

---

## 6. Comment RayTecno le matérialise

Chez **RayTecno** le module de fabrication gère la microfusion joaillère avec six blocs intégrés :

1. **Fichier maître de modèles et caoutchoucs** avec versionnement, BOM, vie utile et coût théorique actualisable au prix d'or.
2. **Ordres de fabrication** qui génèrent automatiquement la documentation de l'arbre (poids attendu, nombre de pièces, alliage).
3. **Registre de coulées** avec température, heure, opérateur, lot de métal d'entrée, lot de plâtre, poids post-fonte et rendement réel.
4. **Traçabilité pièce par pièce** avec code unique qui accompagne le bijou jusqu'à la vente.
5. **Calcul de coût réel** qui recalcule au prix d'or du jour et répartit les coûts indirects de l'atelier.
6. **Tableau de bord directif** avec les cinq KPIs précédents en temps réel et alertes sur les écarts.

La philosophie est la même que dans le reste du système : **construire la qualité et la traçabilité à chaque phase**, ne pas les inspecter à la fin.

---

## 7. Conclusion : la fonte est le moment de vérité

Dans le cycle complet d'un bijou, la fonte est le moment où le plus de valeur se concentre et le plus peut se perdre. Un atelier qui contrôle bien cette phase est un atelier rentable. Un atelier qui ne la contrôle pas compense par du surcoût, de la reprise et de la frustration.

La bonne nouvelle est que toute la complexité décrite —neuf phases, six variables critiques, cinq KPIs directifs— est **parfaitement systématisable** depuis un ERP spécialisé. Il n'y a rien à réinventer : il faut mesurer ce qui se passe déjà et agir sur les données.

Si votre atelier fait de la microfusion et sent qu'il n'a pas de visibilité réelle de ce qui se passe coulée après coulée, [parlons-en](https://www.raytecno.es/contact). Le premier pas n'est probablement pas de changer le four : c'est d'instrumenter ce que vous avez déjà.

---

### Pour continuer la lecture

- *L'IA dans les systèmes de fabrication de joaillerie et systèmes qualité : comment évoluent les 14 points de Deming en 2026*
- *1998 → 2026 : 28 ans plus tard, l'architecture ERP d'une joaillerie reste la même*
- *Approvisionnement aux boutiques de joaillerie : comment décider combien de produit envoyer à chaque point de vente*
- *Types d'organisation entrepreneuriale dans le secteur joaillier : les 5 configurations de Mintzberg*

---

**Cet article vous a-t-il été utile ?** Partagez-le avec votre équipe de production ou abonnez-vous au blog RayTecno pour recevoir une analyse stratégique par mois.
