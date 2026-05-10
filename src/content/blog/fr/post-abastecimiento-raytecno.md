---
title: "Approvisionnement aux boutiques de joaillerie : comment décider combien de produit envoyer à chaque point de vente sans surstock ni rupture"
excerpt: "Guide technique d'approvisionnement joaillier au réseau de boutiques : formule de calcul de besoin, classification ABC du catalogue et modèle DRP appliqué au secteur joaillier et intégré dans RayTecno."
author: "Équipe RayTecno"
category: "Logistique & ERP"
tags: ["approvisionnement", "DRP", "ABC", "stock", "joaillerie", "ERP", "retail", "taux de couverture"]
date: 2026-05-05
language: "fr"
seoKeyword: "approvisionnement joaillerie ERP"
---

# Approvisionnement aux boutiques de joaillerie : comment décider combien envoyer à chaque point de vente

> *Il y a deux façons de se tromper dans l'approvisionnement d'une boutique : envoyer trop peu —et perdre des ventes qui ne reviennent pas— ou envoyer trop —et laisser du capital immobilisé dans du produit qui tourne lentement. La différence entre une joaillerie qui croît et une qui se noie dans le stock réside dans la façon dont elle évite les deux.*

Une des questions les plus fréquentes que nous recevons chez **RayTecno** vient de joailleries avec un réseau de boutiques : **« combien de produit dois-je envoyer à chaque boutique et quand ? »**. La question semble simple, mais derrière se cache l'un des problèmes les plus complexes de la gestion joaillère moderne, en particulier quand on parle de :

- Joailleries avec plusieurs boutiques propres dans différentes villes.
- Marques joaillères présentes dans **grandes surfaces et centres commerciaux** (espaces concédés ou corners), où l'espace est limité et cher.
- Chaînes avec production propre approvisionnant leur propre réseau.
- Joailleries combinant retail + grossiste + e-commerce depuis un même entrepôt central.

Dans tous ces scénarios, la décision de **combien envoyer et à qui** ne peut pas être prise au jugé. Il faut la systématiser. Et il y a trois outils techniques qui, combinés, résolvent le problème :

1. **La classification ABC du catalogue** — pour savoir quoi contrôler avec quelle intensité.
2. **La formule de calcul de besoin** — pour traduire la consommation en quantité à commander.
3. **Le modèle DRP (Distribution Requirements Planning)** — pour articuler l'ensemble en un processus reproductible.

Dans cet article, nous développons les trois, les ancrons dans le secteur joaillier et montrons comment ils s'intègrent dans un ERP spécialisé.

---

## 1. Le vrai problème : pourquoi se tromper fait si mal en joaillerie

Contrairement à un produit de grande consommation, en joaillerie **le coût de l'erreur est asymétrique** :

- **Surstock :** capital immobilisé en or, argent ou pierres. Coûts financiers qui croissent chaque jour (en métaux précieux on parle souvent de **8-18 % annuel** entre coût financier, stockage et détérioration/vol, selon le type de marchandise).
- **Rupture de stock :** la cliente qui entre chercher un solitaire de 18 mm en or blanc et ne le trouve pas **n'attend pas**. Elle va à la joaillerie d'à côté. La vente est perdue, et souvent la cliente aussi.

L'équilibre entre les deux risques est l'essence du problème d'approvisionnement. Et il se complique avec des facteurs spécifiques au secteur :

- **Saisonnalité très marquée :** Noël, Saint-Valentin, communions, fête des mères, mariages (mai-septembre).
- **Assortiments énormes avec faible rotation par référence :** une joaillerie moyenne gère des milliers de SKUs, beaucoup avec des ventes annuelles d'une ou deux unités.
- **Production propre avec longs délais :** fabriquer une collection d'alliances peut prendre des semaines.
- **Espaces de vente très réduits** dans les corners et grandes surfaces : chaque emplacement d'exposition doit être rentabilisé au maximum.

---

## 2. Première étape : classification ABC du catalogue

Avant de calculer **combien** envoyer, il faut savoir **quoi** on envoie. La courbe ABC (aussi appelée **règle 80/20** ou loi de Pareto) est l'outil classique pour classer les références du catalogue selon leur importance économique.

### Concept

L'idée est simple : **un petit pourcentage de références concentre la majeure partie de la valeur d'inventaire ou de ventes**. Typiquement :

| Classe | % de références | % de la valeur |
|---|---|---|
| **A** | ~15-20 % | ~70-80 % |
| **B** | ~25-30 % | ~15-20 % |
| **C** | ~50-60 % | ~5-10 % |

### Application au secteur joaillier

Dans une joaillerie, l'ABC peut être construit sur différents critères et il convient de les croiser :

- **ABC par valeur d'inventaire** (or 18k, diamants sertis → tendent à être A).
- **ABC par valeur de vente** (peut ne pas coïncider avec le précédent : une pièce chère qui tourne peu peut être C en ventes et A en inventaire).
- **ABC par unités vendues** (alliances basiques, cadeaux en dessous d'un certain montant).
- **ABC par marge** (tout ce qui se vend beaucoup ne laisse pas de marge).

> **Indicateur utile :** quand la **classe A en valeur** et la **classe C en unités vendues** coïncident pour une même référence, il y a surstock. C'est une alerte que l'ERP devrait émettre automatiquement.

### Implications opérationnelles

| Classe | Traitement opérationnel |
|---|---|
| **A** | Contrôle strict, révision continue des niveaux, éviter le surstock, exactitude maximale dans les registres |
| **B** | Contrôle intermédiaire, révisions périodiques, automatisation avec supervision |
| **C** | Contrôle léger, révision par regroupement (même fournisseur, même famille), stock minimum possible |

L'ABC n'est pas un exercice ponctuel : **il est recalculé périodiquement** car le comportement du catalogue change avec la saison, les modes et les nouvelles collections.

---

## 3. Deuxième étape : la formule de calcul de besoin

Une fois le catalogue classé, il faut décider **combien commander ou envoyer de chaque référence**. Ici intervient une formule que chez RayTecno nous intégrons dans le module d'approvisionnement et qui synthétise les principaux facteurs en une seule équation :

```
Quantité à commander = Stock cible - Stock physique - Entrées prévues + (Ventes en période + Commandes à honorer)
```

Décomposons chaque variable. C'est la **base technique** du calcul :

| Variable | Signification | D'où elle vient |
|---|---|---|
| **TOTCAN** | Quantité à commander (résultat final) | Calculé |
| **TOTSFO** | Stock cible final = Taux couverture × Vente moyenne hebdomadaire | Calculé |
| **TOTSTK** | Stock physique actuel (en déduisant les réserves) | Maître de stocks |
| **TOTENT** | Entrées prévues en cours (production ou achats) | Plan de production |
| **TOTVEP** | Ventes estimées pendant la période d'approvisionnement | Temps production × Vente moyenne |
| **TOTPAA** | Commandes à honorer (engagements ouverts) | Carnet de commandes |
| **TASCOB** | Taux de couverture : nb de semaines à stocker | Paramètre par article / famille |
| **VALMS** | Valeur moyenne hebdomadaire de vente = ventes historiques / nb semaines | Statistique historique |
| **TEMPRO** | Temps de production / approvisionnement (en semaines) | Maître d'articles |

### Lecture pratique de la formule

La formule dit quelque chose de très logique :

> *« Commande-moi ce dont j'aurai besoin à la fin de la période (TOTSFO), soustrais ce que j'ai déjà (TOTSTK), soustrais ce qui est déjà en route (TOTENT) et ajoute ce que je vendrai ou servirai pendant que la commande arrive (TOTVEP + TOTPAA). »*

### Exemple appliqué : alliances basiques

Imaginons une joaillerie avec un réseau de 12 boutiques qui veut approvisionner des **alliances modèle « classique or 18k 4mm »** à l'une de ses boutiques :

- Vente moyenne hebdomadaire dans cette boutique (`VALMS`) : **3 unités**
- Taux de couverture cible (`TASCOB`) : **6 semaines**
- Stock cible (`TOTSFO` = 6 × 3) : **18 unités**
- Stock physique actuel (`TOTSTK`) : **5 unités**
- En cours de fabrication (`TOTENT`) : **0 unités**
- Temps de production (`TEMPRO`) : **2 semaines**
- Ventes prévues pendant ces 2 semaines (`TOTVEP` = 2 × 3) : **6 unités**
- Commandes engagées (`TOTPAA`) : **2 unités**

En appliquant la formule :

```
TOTCAN = 18 - 5 - 0 + (6 + 2) = 21 unités
```

La boutique a besoin qu'on lui envoie **21 alliances** pour maintenir le rythme de vente et la couverture cible.

### Paramètres que l'ERP doit gérer

La puissance de la formule réside dans la façon dont les **valeurs sont paramétrées** par :

- **Article** (chaque référence a son taux de couverture).
- **Succursale** (une boutique en zone touristique saisonnière a besoin de paramètres différents d'une urbaine).
- **Type de succursale** (corner en grande surface vs boutique propre vs grossiste).
- **Famille/sous-famille** (alliances, chevalières, pendentifs…).
- **Période** (Noël ou Saint-Valentin changent les moyennes hebdomadaires).

Cela donne lieu à une **structure hiérarchique d'attributs** —famille → sous-famille → produit → article → succursale— qui permet de définir des règles au niveau global et des exceptions au niveau spécifique. C'est exactement ce que fait le module d'approvisionnement de RayTecno lorsqu'il est configuré pour un groupe joaillier avec plusieurs marques et canaux.

---

## 4. Troisième étape : le modèle DRP (Distribution Requirements Planning)

La formule précédente résout le calcul **pour une référence et une boutique**. Le vrai défi est de mettre cela à l'échelle de **milliers de références × dizaines de boutiques × dizaines de semaines planifiées**, avec des prévisions qui changent, une production limitée et des délais de livraison variables. C'est là qu'intervient le **DRP**.

### Qu'est-ce que le DRP

Le **Distribution Requirements Planning** —ou planification des besoins de distribution— est une méthodologie qui étend la logique du MRP (typique de la fabrication) au côté de la distribution. Originaire de la fin des années 1980 comme évolution naturelle du MRP, c'est aujourd'hui un **standard dans le retail multi-boutique** et un module habituel dans les ERP industriels et de distribution modernes.

En essence, le DRP traduit la demande réelle et prévue dans chaque boutique en **ordres de réapprovisionnement échelonnés dans le temps**, propageant cette demande en arrière —de la boutique au centre de distribution, et de celui-ci à l'atelier ou au fournisseur— de manière coordonnée.

### Push vs Pull : deux logiques, un équilibre

| Modèle | Comment ça fonctionne | Quand c'est adapté |
|---|---|---|
| **Push** | On décide centralement combien envoyer à chaque boutique selon la prévision historique | Produit saisonnier, lancements, promotions, rareté contrôlée |
| **Pull** | La boutique « tire » sur le stock selon ce qu'elle consomme ; le centre réapprovisionne en fonction de la vente réelle | Assortiment stable, forte rotation, produit récurrent |

Le DRP moderne **combine les deux approches** : push pour les nouvelles collections et le produit saisonnier ; pull pour le fond d'assortiment. RayTecno permet de définir une stratégie par famille et par type de boutique, ce qui est particulièrement utile pour les joailleries qui mêlent collection permanente et campagnes ponctuelles (Saint-Valentin, Noël, communions).

### Ce que le DRP apporte par rapport au simple « point de commande »

Un système basique de **point de commande (ROP)** déclenche une commande quand le stock baisse en dessous d'un seuil. Cela fonctionne, mais a trois limitations graves pour la joaillerie :

1. **Il n'anticipe pas les changements de demande** (Noël arrive et le système réagit en retard).
2. **Il ne coordonne pas entre les boutiques** (l'une a un excédent, l'autre une rupture, et personne ne les croise).
3. **Il n'intègre ni production ni fournisseur** (la boutique commande, mais l'atelier n'arrive pas à temps).

Le DRP résout bien ces trois points car il travaille avec un **horizon temporel échelonné** (typiquement hebdomadaire) et consolide la demande de tout le réseau.

### Cas typique : joaillerie avec boutiques en grandes surfaces

Une marque joaillère avec **20 corners en grandes surfaces** fait face à un scénario commun :

- L'espace physique de chaque corner est très limité (pas plus de X unités par famille).
- La rotation varie beaucoup selon l'emplacement : un centre commercial de capitale avec tourisme vend très différemment d'un de province.
- La marque produit une partie du catalogue dans son atelier propre et achète le reste.
- Le client final ne pardonne pas la rupture : s'il n'y a pas de bague de sa taille en stock, elle s'en va.

**Sans DRP** le problème se résout avec plusieurs feuilles Excel gérées par des analystes. Cela fonctionne —mal— jusqu'à une certaine taille. Les conséquences typiques :

- 30 % de références **A** en rupture en boutiques alors qu'il y a du stock au centre de distribution.
- 5 000 unités mensuelles déplacées entre boutiques pour compenser excédents et manques (coût logistique très élevé).
- Boutiques louant un débarras supplémentaire près du centre commercial pour « garder ce qui ne rentre pas en exposition ».

**Avec un DRP bien implémenté** le modèle change :

- Le stock se concentre au centre de distribution ; la boutique reçoit **ce qu'elle va vendre** à la fréquence définie.
- Les propositions de réapprovisionnement sont calculées automatiquement avec la formule de besoin et présentées au spécialiste d'approvisionnement pour validation.
- Chaque boutique peut avoir une priorité différente (celles de capitale, priorité haute) quand le stock central ne suffit pas pour toutes.
- Sont gérés les produits substituts (si le modèle X manque, proposer le Y) et les produits prédécesseurs (la nouvelle collection « hérite » de l'historique de la précédente).

---

## 5. Attributs que l'ERP doit gérer pour que tout cela fonctionne

Pour que le DRP génère des propositions raisonnables, l'ERP doit maintenir une série d'**attributs par article et par succursale**. Les principaux :

### Par article

- **Taux de couverture cible** (en semaines ou jours).
- **Stock minimum** (en unités ou jours de vente).
- **Stock maximum** et % d'arrondi.
- **Coefficient de variation interannuel** (corrige la prévision avec la tendance réelle).
- **Produit substitut** et produit prédécesseur.
- **Temps de production / approvisionnement**.
- **Famille, sous-famille, produit** (hiérarchie pour héritages de paramètres).

### Par succursale

- **Coefficient de variation d'approvisionnement** (corrige la moyenne pour cette boutique concrète).
- **Stock minimum en jours**.
- **Jours de voyage depuis le centre de distribution**.
- **Calendrier de réceptions** (quels jours reçoit chaque succursale : lundi, mardi, mercredi…).
- **Moyennes de vente** (derniers 7, 15, 30, 60, 90 et 120 jours, même mois année précédente).
- **Type de succursale** (corner, boutique propre, franchise, grossiste…).
- **Priorité** face à la pénurie de stock.

Et critique : l'ERP doit permettre des **mises à jour massives** par héritage hiérarchique. Configurer 5 000 références × 20 boutiques × 15 attributs manuellement est impraticable. Le système doit permettre :

1. Définir des règles au niveau famille.
2. Appliquer des exceptions au niveau sous-famille ou produit.
3. Hériter de tout automatiquement au niveau article/succursale.
4. Changer massivement quand la saison ou la stratégie change.

---

## 6. Conclusion : trois niveaux de maturité en approvisionnement joaillier

Pour terminer, une manière utile d'auto-diagnostic :

| Niveau | Comment se décide ce qu'on envoie | Risques |
|---|---|---|
| **1. Manuel / intuitif** | Chaque responsable de boutique commande ce qu'il croit, ou un acheteur central décide au jugé | Surstock + rupture simultanés, dépendance des personnes, sans traçabilité |
| **2. Règles basiques** | Feuilles Excel avec stocks minimums par article, révision hebdomadaire manuelle | Fonctionne jusqu'à 3-5 boutiques ; s'effondre au-delà |
| **3. DRP intégré dans l'ERP** | Propositions automatiques calculées avec formule de besoin et validées par spécialistes | Évolutif, traçable, s'améliore avec données historiques et apprentissage |

Le saut du niveau 2 au 3 est exactement ce qu'un ERP spécialisé comme **RayTecno** est conçu pour accompagner : nous maintenons dans le système l'ABC du catalogue, les paramètres par article et succursale, la formule de calcul de besoin, les propositions de réapprovisionnement révisables et l'intégration avec production et achats. La direction reprend le contrôle sans perdre la flexibilité tactique dans les boutiques.

Si votre joaillerie a plusieurs boutiques, une présence en grandes surfaces ou une combinaison de canaux qui ne peut plus être gérée avec des feuilles de calcul, [parlons-en](https://www.raytecno.es/contact). Le problème n'est probablement pas l'équipe —qui fait généralement de son mieux avec les outils dont elle dispose— mais le manque d'un système qui évolue avec l'entreprise.

---

### Pour continuer la lecture

- *Types d'organisation entrepreneuriale dans le secteur joaillier : les 5 configurations de Mintzberg*
- *Le cas Schneider : 5 leçons de marketing stratégique applicables à la joaillerie*
- *Traçabilité de l'or : du lingot à la pièce vendue*
- *KPIs que toute direction de joaillerie devrait revoir chaque lundi*

---

**Cet article vous a-t-il été utile ?** Partagez-le avec votre équipe de direction ou abonnez-vous au blog RayTecno pour recevoir une analyse stratégique par mois.
