---
title: "Casting and microfusion in jewelry: the heart of the workshop, controlled from the ERP"
excerpt: "Analysis of the lost-wax microfusion process in jewelry: from the CAD model to the finished piece, critical quality points, cost variables and how a jewelry ERP controls gold traceability."
author: "RayTecno Team"
category: "Manufacturing & ERP"
tags: ["casting", "microfusion", "lost wax", "jewelry", "ERP", "traceability", "scrap", "gold"]
date: 2026-05-05
language: "en"
seoKeyword: "jewelry microfusion ERP"
---

# Casting and microfusion in jewelry: the heart of the workshop

> *Every gram of gold that enters the furnace has a cost, an origin and a destination. Every piece that comes out has a story. Between the ingot and the display case, the most critical moment —where most value is gained or lost— is casting. If your ERP doesn't control this point, it doesn't control your business.*

In any jewelry workshop with its own production, **casting is the technical bottleneck, the point of greatest energy cost, the moment of greatest scrap risk and, at the same time, the phase on which the quality of everything that comes after depends**. A poorly detected porosity in casting is dragged through grinding, polishing, setting and finishing. It will reach the end customer as a visible imperfection that will disqualify the piece.

In this article we go through the process of modern jewelry casting —focusing on **lost-wax microfusion**, the dominant technique in the sector— from the perspective of someone who needs to **control production, traceability and costs** from an ERP. What follows is what we have learned at RayTecno accompanying real workshops.

---

## 1. Why is microfusion still the dominant technique?

Lost-wax microfusion is **the most widely used casting technique in jewelry**, both in costume jewelry production and in fine jewelry. Other options exist —sand casting, continuous casting, pressure die casting— but none combine the two qualities the jewelry sector demands:

- **Detail reproduction precision** (filigrees, textures, preformed settings, typography).
- **Volume versatility** (from a unique piece to series of hundreds on the same tree).

This technique allows working with practically all noble metals: yellow gold, white gold, rose gold (in alloys from 9k to 22k), 925 and 930 silver, palladium, platinum, brass and bronze. Each with its particular pouring temperature, protective atmosphere, defect propensity.

And in 2026 microfusion is experiencing a **second youth** thanks to integration with 3D printing: the wax model is no longer carved manually, it is printed in castable resin directly from a CAD file. This reduces the time from concept to physical piece from weeks to days, and allows small workshops to compete in complexity with the big brands.

---

## 2. The process step by step: where value is gained and lost

Let's review the process phases through the lens of a production manager who needs to control them from the ERP.

### 2.1 Design and CAD model

It all starts with the **digital model**. Before, it was a wax model carved by hand by a master modeler. Today it is a CAD file —Rhino, 3Design, Matrix, ZBrush— that defines geometry, theoretical weight and necessary metal volume.

**What the ERP must control:**

- Model versioning (each revision is a variant, with its BOM).
- Theoretical weight of the model according to alloy (a ring in 18k gold weighs very differently than in silver).
- Estimated manufacturing time per phase.
- Theoretical cost of the model at day's gold price.

### 2.2 Rubber and matrix

From the model (or directly from CAD if printed in resin), a **vulcanized rubber mold** is manufactured that will be used to inject waxes in series. It is the piece that defines the profitability of an entire collection: a good rubber lasts thousands of injections, a poorly made one breaks after a hundred.

**Critical variables:**

- Rubber type (vulcanizable silicone, low-temperature injectable silicone, RTV).
- Geometry of injection channels (poorly designed, they generate incomplete pieces).
- Accumulated useful life (each rubber has a real injection counter).

**What the ERP must control:** a **rubber master file** with unique identifier, creation date, accumulated number of injections and status (active, in review, retired).

### 2.3 Wax injection

Each piece begins as a wax replica. The injector introduces molten wax (typically at 60-80°C) into the rubber mold at controlled pressure. Once solidified, the wax is extracted and inspected.

**Typical defects in this phase:**

- Incomplete pieces (wax that did not fill the mold).
- Bubbles trapped in the wax.
- Deformations from premature extraction.

**KPI to measure:** injection yield (% of valid waxes / total injected). A rubber that falls below 85% yield is a candidate for replacement.

### 2.4 Setting in wax (optional but critical)

In pieces with small gem setting (pavé, cluster), gems are placed **directly in the wax** before casting, in a technique called *stone-in-place*. The metal melts around the gems, saving a subsequent manual setting phase.

This requires gems of very high thermal resistance (natural or synthetic diamonds, sapphires, rubies) and precise temperature control to avoid damaging them.

**What the ERP must control:** gem traceability from purchase (with Kimberley certificate or equivalent) to setting in a specific piece.

### 2.5 Tree assembly

The individual waxes are welded to a **central wax channel**, forming a "tree" that allows dozens of pieces to be cast in a single pour. Tree design is an art in itself: poorly distributed pieces generate defects from uneven metal flow.

**Key KPI:** **grams of metal per tree**. It is the basic economic unit of the workshop: if the tree weighs 200 g of 18k gold at €65/g, that's €13,000 at stake in a single pour.

### 2.6 Cylinder placement and investment plaster

The tree is placed inside a metal cylinder and filled with **high thermal resistance microfusion plaster**, mixed with water in exact proportion. The mixture is vacuum-vibrated to eliminate bubbles that would generate porosity in the final metal.

**Critical variables:**

- Plaster/water ratio (typically 38-40% water).
- Vacuum time (60-90 seconds).
- Setting time before going to the oven (minimum 2 hours).

### 2.7 Dewaxing in oven

The cylinder goes into the oven following a **programmed temperature ramp**: slow rise to 150°C to evaporate moisture, plateau at 300°C to melt and eliminate the wax, final rise to 700-750°C to calcine organic remains and leave the mold clean.

A poorly programmed ramp generates cracks in the plaster, which translate into pieces with flash or completely unusable.

### 2.8 Casting and pour

The metal is melted in a crucible —in modern induction furnaces— at the specific temperature of each alloy. The hot cylinder is placed in the centrifuge or vacuum casting machine, and the liquid metal is injected into the mold.

**Typical pouring temperatures:**

- Yellow gold 18k: ~1050°C
- White gold 18k: ~1100°C
- 925 silver: ~1000°C
- Platinum: ~1850°C (requires specialized equipment)

**Critical defects in this phase:**

- **Gas porosity** (air entrapment or excess moisture in plaster).
- **Incomplete filling** (low pouring temperature or poorly dimensioned channels).
- **Internal stresses** (too rapid cooling).
- **Contamination** from excess recycled metal: using more than 50% of metal recovered from previous pours **significantly increases defects**.

### 2.9 Demolding and piece separation

The cylinder is cooled with water, which breaks the plaster. The metal tree is extracted, cleaned and individual pieces are separated from the feeding channel with a cutting disc. Each piece is weighed and contrasted with its theoretical weight.

**Fundamental KPI:** **metal scrap**. A well-managed workshop keeps casting scrap below 2-3% (the rest is recovered and reincorporated in a controlled manner).

---

## 3. The control points the ERP must manage

Throughout the nine phases above, there are six critical variables that must be recorded in an [ERP for jewelry manufacturers](/en) for the workshop to be governable:

### 3.1 Metal traceability

**Where each gram comes from and where it goes.** The ERP must record, for each gold or silver batch:

- Supplier and certification (LBMA for responsible gold, recycled silver certified).
- Analyzed purity (not declared).
- Alloy to which it is incorporated.
- Final piece where it ends up.

This chain allows answering questions that more and more customers ask: *"does this gold come from responsible mining?"*.

### 3.2 Scrap control per phase

It is not enough to know how much has been scrapped in total. You have to know **where**: in casting, in grinding, in polishing, in setting. Each phase has its acceptable range, and significant deviations are a sign of trouble.

### 3.3 Real cost per piece

The price of gold fluctuates daily. A piece cast today at €65/g and sold three months from now at €70/g may have generated a fictitious margin if the ERP does not recalculate cost at the manufacturing day's price.

### 3.4 Useful life of rubbers and consumables

Rubbers, crucibles and casting pucks have finite useful life. The ERP must count injections, pours and hours of use, alerting before wear generates defects.

### 3.5 Yield per pour

**Valid pours / total pours** is the most important KPI in casting. It allows detecting trends: a sustained drop in yield indicates a systemic problem (poor quality plaster, oven calibration, insufficient operator training).

### 3.6 Photographic traceability

In high-value jewelry, each unique piece must have a **photographic record at each critical phase**: post-casting, post-setting, before packaging. It is proof of quality, warranty support and defense against claims.

---

## 4. The KPIs management should see every Monday

At management level, workshop noise condenses into five numbers that a good [jewelry ERP](/en) should always have in sight:

| KPI | What it measures | Healthy range |
|---|---|---|
| **Pour yield** | % valid pieces over total cast | > 90 % |
| **Global scrap** | % metal lost between ingot and final piece | < 5 % |
| **Cost per gram of finished piece** | Total cost / grams produced | Stable or decreasing |
| **Average model → piece time** | Days from CAD approval to first piece | < 7 days |
| **Rework** | % pieces that return to a previous phase | < 8 % |

When one of these five moves, you have to look before it becomes an economic problem.

---

## 5. Sustainability: the factor no one was asking for 10 years ago and today is central

Jewelry casting has a considerable energy and materials footprint. In 2026 this matters for two reasons:

- **Growing regulation** (RJC, LBMA, ESG certifications).
- **End customer demand**, especially in young segments asking about gold origin and sustainability before buying.

Good practices the ERP must document:

- **Controlled recycling** of scrap and waste (with purity analysis when reincorporating).
- **Origin traceability** of new metal (certified recycled gold, recycled silver, ethical mining gold).
- **Energy efficiency** of the furnace (record of electrical consumption per pour).
- **Chemical waste management** from dewaxing and subsequent baths.

Compared to CNC machining, microfusion is **more sustainable** in material use (less waste), but **less energy efficient** than traditional forging. Knowing this and being able to demonstrate it with ERP data is increasingly a commercial argument.

---

## 6. How RayTecno makes it real

At **RayTecno** the manufacturing module manages jewelry microfusion with six integrated blocks:

1. **Master file of models and rubbers** with versioning, BOM, useful life and theoretical cost updatable to gold price.
2. **Manufacturing orders** that automatically generate tree documentation (expected weight, number of pieces, alloy).
3. **Pour record** with temperature, time, operator, input metal batch, plaster batch, post-casting weight and real yield.
4. **Piece-by-piece traceability** with unique code that accompanies the jewel until sale.
5. **Real cost calculation** that recalculates with day's gold price and distributes workshop indirect costs.
6. **Management dashboard** with the five previous KPIs in real time and alerts on deviations.

The philosophy is the same as in the rest of the system: **build quality and traceability at each phase**, do not inspect them at the end.

---

## 7. Conclusion: casting is the moment of truth

In the complete cycle of a jewel, casting is the moment where most value is concentrated and most can be lost. A workshop that controls this phase well is a profitable workshop. A workshop that does not control it compensates with overcost, with rework and with frustration.

The good news is that all the complexity described —nine phases, six critical variables, five management KPIs— is **perfectly systematizable** from a specialized ERP. There is no need to reinvent anything: you have to measure what is already happening and act on the data.

If your workshop does microfusion and feels it has no real visibility of what is happening pour by pour, [let's talk](https://www.raytecno.es/contact). Probably the first step is not to change the furnace: it is to instrument what you already have.

---

### Further reading

- *AI in jewelry manufacturing systems and quality systems: how Deming's 14 points evolve in 2026*
- *1998 → 2026: 28 years later, the ERP architecture of a jewelry business is still the same*
- *Supplying jewelry stores: how to decide how much product to send to each point of sale*
- *Types of business organization in the jewelry sector: Mintzberg's 5 configurations*

---

**Did you find this article useful?** Share it with your production team or subscribe to the RayTecno blog to receive a monthly strategic analysis.
