---
title: "Supplying jewelry stores: how to decide how much product to send to each point of sale without overstock or stockout"
excerpt: "Technical guide to jewelry supply across a store network: needs calculation formula, ABC catalog classification and DRP model applied to the jewelry sector and integrated in RayTecno."
author: "RayTecno Team"
category: "Logistics & ERP"
tags: ["supply", "DRP", "ABC", "stock", "jewelry", "ERP", "retail", "coverage rate"]
date: 2026-05-05
language: "en"
seoKeyword: "jewelry supply ERP"
---

# Supplying jewelry stores: how to decide how much to send to each point of sale

> *There are two ways to get supply wrong for a store: send too little —and lose sales that won't come back— or send too much —and leave capital tied up in slow-moving stock. The difference between a jewelry business that grows and one that drowns in inventory is in how it avoids both.*

One of the most frequent questions we receive about our [specialized jewelry ERP](/en) comes from jewelry businesses with a network of stores: **"how much product should I send to each store and when?"**. The question seems simple, but behind it lies one of the most complex problems of modern jewelry management, especially when we talk about:

- Jewelry businesses with several owned stores in different cities.
- Jewelry brands present in **large retailers and shopping centers** (concession spaces or corners), where space is limited and expensive.
- Chains with their own production supplying their own network.
- Jewelry businesses that combine retail + wholesale + e-commerce from the same central warehouse.

In all these scenarios, the decision of **how much to send and to whom** cannot be made by eye. It must be systematized. And there are three technical tools that, combined, solve the problem:

1. **The ABC classification of the catalog** — to know what to control with what intensity.
2. **The needs calculation formula** — to translate consumption into quantity to order.
3. **The DRP (Distribution Requirements Planning) model** — to articulate the whole into a repeatable process.

In this article we develop all three, ground them in the jewelry sector and show how they integrate within a specialized ERP.

---

## 1. The real problem: why getting it wrong hurts so much in jewelry

Unlike a fast-moving consumer good, in jewelry **the cost of error is asymmetric**:

- **Overstock:** capital tied up in gold, silver or stones. Financial costs that grow every day (in precious metals we often talk about **8-18% annual** between financial cost, storage and deterioration/theft, depending on the type of merchandise).
- **Stockout:** the customer who comes in looking for an 18 mm white gold solitaire and doesn't find it **doesn't wait**. She goes to the jewelry store next door. The sale is lost, and often the customer too.

The balance between both risks is the essence of the supply problem. And it gets complicated by sector-specific factors:

- **Very marked seasonality:** Christmas, Valentine's Day, communions, Mother's Day, weddings (May-September).
- **Huge assortments with low rotation per reference:** an average jewelry business manages thousands of SKUs, many with annual sales of one or two units.
- **In-house production with long lead times:** manufacturing a wedding band collection can take weeks.
- **Very limited sales spaces** in corners and large retailers: every display slot has to be maximally profitable.

---

## 2. First step: ABC classification of the catalog

Before calculating **how much** to send, you have to know **what** you are sending. The ABC curve (also called **80/20 rule** or Pareto's law) is the classic tool for classifying catalog references according to their economic importance.

### Concept

The idea is simple: **a small percentage of references concentrates most of the inventory or sales value**. Typically:

| Class | % of references | % of value |
|---|---|---|
| **A** | ~15-20% | ~70-80% |
| **B** | ~25-30% | ~15-20% |
| **C** | ~50-60% | ~5-10% |

### Application to the jewelry sector

In a jewelry business, ABC can be built on different criteria and it is advisable to cross them:

- **ABC by inventory value** (18k gold, set diamonds → tend to be A).
- **ABC by sales value** (may not match the previous one: an expensive piece that rotates little can be C in sales and A in inventory).
- **ABC by units sold** (basic wedding bands, gifts below a certain amount).
- **ABC by margin** (not everything that sells a lot leaves a margin).

> **Useful indicator:** when **class A by value** and **class C by units sold** coincide in the same reference, there is overstock. This is an alert that the ERP should issue automatically.

### Operational implications

| Class | Operational treatment |
|---|---|
| **A** | Strict control, continuous review of levels, avoid overstock, maximum accuracy in records |
| **B** | Intermediate control, periodic reviews, automation with supervision |
| **C** | Light control, review by grouping (same supplier, same family), minimum possible stock |

ABC is not a one-time exercise: **it is recalculated periodically** because the catalog's behavior changes with seasons, fashions and new collections.

---

## 3. Second step: the needs calculation formula

Once the catalog is classified, you have to decide **how much to order or send of each reference**. Here comes a formula that at RayTecno we collect in the supply module and that synthesizes the main factors in a single equation:

```
Quantity to order = Target stock - Physical stock - Expected entries + (Sales in period + Pending orders)
```

Let's break down each variable. This is the **technical basis** of the calculation:

| Variable | Meaning | Where it comes from |
|---|---|---|
| **TOTCAN** | Quantity to order (final result) | Calculated |
| **TOTSFO** | Final target stock = Coverage rate × Average weekly sales | Calculated |
| **TOTSTK** | Current physical stock (discounting reserves) | Stock master |
| **TOTENT** | Expected entries in progress (production or purchases) | Production plan |
| **TOTVEP** | Estimated sales during the supply period | Production time × Average sales |
| **TOTPAA** | Pending orders (open commitments) | Order book |
| **TASCOB** | Coverage rate: number of weeks to stock | Parameter per item / family |
| **VALMS** | Average weekly sales value = historical sales / no. weeks | Historical statistics |
| **TEMPRO** | Production / supply time (in weeks) | Item master |

### Practical reading of the formula

The formula says something very logical:

> *"Order me what I will need at the end of the period (TOTSFO), subtract what I already have (TOTSTK), subtract what is already on the way (TOTENT) and add what I will sell or serve while the order arrives (TOTVEP + TOTPAA)."*

### Applied example: basic wedding bands

Imagine a jewelry business with a network of 12 stores wanting to supply **"classic 18k gold 4mm" wedding bands** to one of its stores:

- Average weekly sales in that store (`VALMS`): **3 units**
- Target coverage rate (`TASCOB`): **6 weeks**
- Target stock (`TOTSFO` = 6 × 3): **18 units**
- Current physical stock (`TOTSTK`): **5 units**
- Currently in manufacturing (`TOTENT`): **0 units**
- Production time (`TEMPRO`): **2 weeks**
- Expected sales during those 2 weeks (`TOTVEP` = 2 × 3): **6 units**
- Committed orders (`TOTPAA`): **2 units**

Applying the formula:

```
TOTCAN = 18 - 5 - 0 + (6 + 2) = 21 units
```

The store needs to be sent **21 wedding bands** to maintain the sales pace and target coverage.

### Parameters the ERP must manage

The power of the formula lies in how the **values are parameterized** by:

- **Item** (each reference has its coverage rate).
- **Branch** (a store in a seasonal tourist area needs different parameters than an urban one).
- **Branch type** (corner in large retailer vs owned store vs wholesaler).
- **Family/subfamily** (wedding bands, signet rings, pendants…).
- **Period** (Christmas or Valentine's Day change weekly averages).

This results in a **hierarchical structure of attributes** —family → subfamily → product → item → branch— that allows defining rules at a global level and exceptions at a specific level. This is exactly what the RayTecno supply module does when configured for a jewelry group with several brands and channels.

---

## 4. Third step: the DRP (Distribution Requirements Planning) model

The previous formula solves the calculation **for one reference and one store**. The real challenge is to scale that to **thousands of references × dozens of stores × dozens of planned weeks**, with forecasts that change, limited production and variable lead times. That's where **DRP** comes in.

### What DRP is

**Distribution Requirements Planning** is a methodology that extends the logic of MRP (typical of manufacturing) to the distribution side. Originated in the late 1980s as a natural evolution of MRP, today it is **standard in multi-store retail** and a regular module in modern industrial and distribution ERPs.

In essence, DRP translates real and forecast demand at each store into **time-phased replenishment orders**, propagating that demand backwards —from store to distribution center, and from there to workshop or supplier— in a coordinated manner.

### Push vs Pull: two logics, one balance

| Model | How it works | When it is suitable |
|---|---|---|
| **Push** | Centrally decided how much to send to each store based on historical forecast | Seasonal product, launches, promotions, controlled scarcity |
| **Pull** | The store "pulls" stock as it consumes; the center replenishes based on actual sales | Stable assortment, high rotation, recurring product |

Modern DRP **combines both approaches**: push for new collections and seasonal product; pull for assortment baseline. RayTecno allows defining strategy by family and store type, which is especially useful for jewelry businesses that mix permanent collection with specific campaigns (Valentine's Day, Christmas, communions).

### What DRP brings over the simple "reorder point"

A basic **reorder point (ROP)** system triggers an order when stock falls below a threshold. It works, but has three serious limitations for jewelry:

1. **It does not anticipate demand changes** (Christmas arrives and the system reacts late).
2. **It does not coordinate between stores** (one has excess, another stockout, and no one cross-references them).
3. **It does not integrate production or supplier** (the store orders, but the workshop doesn't arrive on time).

DRP does solve these three points because it works with a **time-phased horizon** (typically weekly) and consolidates demand from the entire network.

### Typical case: jewelry business with stores in large retailers

A jewelry brand with **20 corners in large retailers** faces a common scenario:

- The physical space of each corner is very limited (no more than X units per family fit).
- Rotation varies greatly by location: a capital shopping center with tourism sells very differently from a provincial one.
- The brand produces part of the catalog in its own workshop and buys the rest.
- The end customer doesn't forgive stockouts: if there is no ring in her size in stock, she leaves.

**Without DRP** the problem is solved with several Excel sheets handled by analysts. It works —badly— up to a certain size. The typical consequences:

- 30% of **A** references with stockouts in stores while there is stock at the distribution center.
- 5,000 monthly units moved between stores to compensate surpluses with shortages (very high logistics cost).
- Stores renting additional storage near the shopping center to "keep what doesn't fit on display."

**With DRP well implemented** the model changes:

- Stock concentrates at the distribution center; the store receives **what it will sell** at the defined frequency.
- Replenishment proposals are calculated automatically with the needs formula and presented to the supply specialist for validation.
- Each store can have different priority (those in capitals, high priority) when central stock doesn't reach all.
- Substitute products are managed (if model X is missing, offer Y) and predecessor products (the new collection "inherits" the history of the previous one).

---

## 5. Attributes the ERP must manage for all this to work

For DRP to generate reasonable proposals, the ERP needs to maintain a series of **attributes per item and per branch**. The main ones:

### Per item

- **Target coverage rate** (in weeks or days).
- **Minimum stock** (in units or sales days).
- **Maximum stock** and rounding %.
- **Year-on-year variation coefficient** (corrects forecast with actual trend).
- **Substitute product** and predecessor product.
- **Production / supply time**.
- **Family, subfamily, product** (hierarchy for parameter inheritance).

### Per branch

- **Supply variation coefficient** (corrects the average for that specific store).
- **Minimum stock in days**.
- **Travel days from the distribution center**.
- **Reception calendar** (which days each branch receives: Monday, Tuesday, Wednesday…).
- **Sales averages** (last 7, 15, 30, 60, 90 and 120 days, same month previous year).
- **Branch type** (corner, owned store, franchise, wholesaler…).
- **Priority** in case of stock scarcity.

And critically: the ERP must allow **mass updates** by hierarchical inheritance. Configuring 5,000 references × 20 stores × 15 attributes manually is unfeasible. The system must allow:

1. Defining rules at family level.
2. Applying exceptions at subfamily or product level.
3. Inheriting everything automatically at item/branch level.
4. Mass changing when the season or strategy changes.

---

## 6. Conclusion: three levels of maturity in jewelry supply

To finish, a useful self-diagnostic:

| Level | How it is decided what to send | Risks |
|---|---|---|
| **1. Manual / intuitive** | Each store manager orders what they think, or a central buyer decides by eye | Simultaneous overstock + stockout, dependence on people, no traceability |
| **2. Basic rules** | Excel sheets with minimum stocks per item, manual weekly review | Works up to 3-5 stores; collapses with more |
| **3. DRP integrated in ERP** | Automatic proposals calculated with needs formula and validated by specialists | Scalable, traceable, improves with historical data and learning |

The jump from level 2 to level 3 requires a [jewelry ERP software](/en) that knows how to handle sector complexity: we maintain in the system the catalog ABC, the parameters per item and branch, the needs calculation formula, the reviewable replenishment proposals and the integration with production and purchases. Management regains control without losing tactical flexibility in the stores.

If your jewelry business has several stores, presence in large retailers or a combination of channels that can no longer be managed with spreadsheets, [let's talk](https://www.raytecno.es/contact). The problem is probably not the team —which is usually doing the best possible with the tools they have— but the lack of a system that scales with the business.

---

### Further reading

- *Types of business organization in the jewelry sector: Mintzberg's 5 configurations*
- *The Schneider case: 5 strategic marketing lessons applicable to jewelry*
- *Gold traceability: from ingot to sold piece*
- *KPIs every jewelry management should review every Monday*

---

**Did you find this article useful?** Share it with your management team or subscribe to the RayTecno blog to receive a monthly strategic analysis.
