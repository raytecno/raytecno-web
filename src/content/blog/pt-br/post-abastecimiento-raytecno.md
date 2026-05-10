---
title: "Abastecimento a lojas de joalheria: como decidir quanto produto enviar a cada ponto de venda sem sobreestoque nem ruptura"
excerpt: "Guia técnico de abastecimento joalheiro à rede de lojas: fórmula de necessidade, classificação ABC do catálogo e modelo DRP aplicado ao setor joalheiro e integrado no RayTecno."
author: "Equipe RayTecno"
category: "Logística & ERP"
tags: ["abastecimento", "DRP", "ABC", "estoque", "joalheria", "ERP", "varejo", "taxa de cobertura"]
date: 2026-05-05
language: "pt-br"
seoKeyword: "abastecimento joalheria ERP"
---

# Abastecimento a lojas de joalheria: como decidir quanto enviar a cada ponto de venda

> *Há duas formas de errar abastecendo uma loja: enviar de menos —e perder vendas que não voltam— ou enviar demais —e deixar capital imobilizado em produto que gira lento. A diferença entre uma joalheria que cresce e uma que se afoga em estoque está em como evita ambas.*

Uma das perguntas mais frequentes que recebemos na **RayTecno** vem de joalherias com rede de lojas: **"quanto produto devo mandar a cada loja e quando?"**. A pergunta parece simples, mas por trás se esconde um dos problemas mais complexos da gestão joalheira moderna, especialmente quando falamos de:

- Joalherias com várias lojas próprias em diferentes cidades.
- Marcas joalheiras com presença em **grandes superfícies e shoppings** (espaços concessionados ou córneres), onde o espaço é limitado e caro.
- Cadeias com produção própria que abastecem sua própria rede.
- Joalherias que combinam varejo + atacado + e-commerce a partir de um mesmo armazém central.

Em todos estes cenários, a decisão de **quanto enviar e a quem** não pode ser tomada a olho. Tem que ser sistematizada. E há três ferramentas técnicas que, combinadas, resolvem o problema:

1. **A classificação ABC do catálogo** — para saber o que controlar com qual intensidade.
2. **A fórmula de cálculo de necessidade** — para traduzir consumo em quantidade a pedir.
3. **O modelo DRP (Distribution Requirements Planning)** — para articular o conjunto em um processo repetível.

Neste artigo desenvolvemos os três, os aplicamos ao setor joalheiro e mostramos como se integram dentro de um ERP especializado.

---

## 1. O problema real: por que falhar dói tanto em joalheria

Diferente de um produto de grande consumo, em joalheria **o custo do erro é assimétrico**:

- **Sobreestoque:** capital imobilizado em ouro, prata ou pedras. Custos financeiros que crescem cada dia (em metais preciosos falamos com frequência de **8-18 % anual** entre custo financeiro, armazenamento e deterioração/roubo, segundo o tipo de mercadoria).
- **Ruptura de estoque:** a cliente que entra para procurar um solitário de 18 mm em ouro branco e não o encontra **não espera**. Vai para a joalheria do lado. A venda se perde, e muitas vezes também a cliente.

O equilíbrio entre ambos os riscos é a essência do problema de abastecimento. E se complica com fatores específicos do setor:

- **Sazonalidade muito marcada:** Natal, Dia dos Namorados, primeira comunhão, Dia das Mães, casamentos.
- **Sortimentos enormes com baixo giro por referência:** uma joalheria média gerencia milhares de SKUs, muitos com vendas anuais de uma ou duas unidades.
- **Produção própria com prazos longos:** fabricar uma coleção de alianças pode levar semanas.
- **Espaços de venda muito reduzidos** em córneres e grandes superfícies: cada espaço de exposição tem que se rentabilizar ao máximo.

---

## 2. Primeiro passo: classificação ABC do catálogo

Antes de calcular **quanto** enviar, é preciso saber **o que** estamos enviando. A curva ABC (também chamada **regra 80/20** ou lei de Pareto) é a ferramenta clássica para classificar as referências do catálogo segundo sua importância econômica.

### Conceito

A ideia é simples: **uma porcentagem pequena de referências concentra a maior parte do valor de inventário ou de vendas**. Tipicamente:

| Classe | % de referências | % do valor |
|---|---|---|
| **A** | ~15-20 % | ~70-80 % |
| **B** | ~25-30 % | ~15-20 % |
| **C** | ~50-60 % | ~5-10 % |

### Aplicação ao setor joalheiro

Em uma joalheria, o ABC pode ser construído sobre diferentes critérios e convém cruzá-los:

- **ABC por valor de inventário** (ouro 18k, diamantes cravados → costumam ser A).
- **ABC por valor de venda** (pode não coincidir com o anterior: uma peça cara que gira pouco pode ser C em vendas e A em inventário).
- **ABC por unidades vendidas** (alianças básicas, presentes abaixo de certo valor).
- **ABC por margem** (nem tudo o que vende muito deixa margem).

> **Indicador útil:** quando a **classe A em valor** e a **classe C em unidades vendidas** coincidem em uma mesma referência, há sobreestoque. É um alerta que o ERP deveria emitir automaticamente.

### Implicações operacionais

| Classe | Tratamento operacional |
|---|---|
| **A** | Controle estrito, revisão contínua de níveis, evitar sobreestoque, exatidão máxima nos registros |
| **B** | Controle intermediário, revisões periódicas, automação com supervisão |
| **C** | Controle leve, revisão por agrupamento (mesmo fornecedor, mesma família), estoque mínimo possível |

O ABC não é um exercício de uma vez: **se recalcula periodicamente** porque o comportamento do catálogo muda com a temporada, as modas e as coleções novas.

---

## 3. Segundo passo: a fórmula de cálculo de necessidade

Uma vez classificado o catálogo, é preciso decidir **quanto pedir ou enviar de cada referência**. Aqui entra uma fórmula que na RayTecno recolhemos no módulo de abastecimento e que sintetiza os principais fatores em uma só equação:

```
Quantidade a pedir = Estoque objetivo - Estoque físico - Entradas previstas + (Vendas em período + Pedidos a atender)
```

Vamos detalhar cada variável. Esta é a **base técnica** do cálculo:

| Variável | Significado | De onde sai |
|---|---|---|
| **TOTCAN** | Quantidade a pedir (resultado final) | Calculado |
| **TOTSFO** | Estoque objetivo final = Taxa cobertura × Venda média semanal | Calculado |
| **TOTSTK** | Estoque físico atual (descontando reservas) | Cadastro de estoques |
| **TOTENT** | Entradas previstas em curso (produção ou compras) | Plano de produção |
| **TOTVEP** | Vendas estimadas durante o período de aprovisionamento | Tempo produção × Venda média |
| **TOTPAA** | Pedidos a atender (compromissos abertos) | Carteira de pedidos |
| **TASCOB** | Taxa de cobertura: nº de semanas que se quer estocar | Parâmetro por artigo / família |
| **VALMS** | Valor médio semanal de venda = vendas históricas / nº semanas | Estatística histórica |
| **TEMPRO** | Tempo de produção / aprovisionamento (em semanas) | Cadastro de artigos |

### Leitura prática da fórmula

A fórmula diz algo muito lógico:

> *"Peça-me o que vou precisar no final do período (TOTSFO), subtraia o que já tenho (TOTSTK), subtraia o que já vem a caminho (TOTENT) e some o que vou vender ou servir enquanto chega o pedido (TOTVEP + TOTPAA)."*

### Exemplo aplicado: alianças básicas

Imaginemos uma joalheria com rede de 12 lojas que quer abastecer **alianças modelo "clássico ouro 18k 4mm"** a uma de suas lojas:

- Venda média semanal nessa loja (`VALMS`): **3 unidades**
- Taxa de cobertura objetivo (`TASCOB`): **6 semanas**
- Estoque objetivo (`TOTSFO` = 6 × 3): **18 unidades**
- Estoque físico atual (`TOTSTK`): **5 unidades**
- Em curso de fabricação (`TOTENT`): **0 unidades**
- Tempo de produção (`TEMPRO`): **2 semanas**
- Vendas previstas durante essas 2 semanas (`TOTVEP` = 2 × 3): **6 unidades**
- Pedidos comprometidos (`TOTPAA`): **2 unidades**

Aplicando a fórmula:

```
TOTCAN = 18 - 5 - 0 + (6 + 2) = 21 unidades
```

A loja precisa que lhe enviem **21 alianças** para manter o ritmo de venda e a cobertura objetivo.

### Parâmetros que o ERP deve gerenciar

A potência da fórmula está em como se **parametrizam os valores** por:

- **Artigo** (cada referência tem sua taxa de cobertura).
- **Filial** (uma loja em zona turística sazonal precisa de parâmetros diferentes de uma urbana).
- **Tipo de filial** (córner em grande superfície vs loja própria vs atacado).
- **Família/subfamília** (alianças, anéis brasão, pingentes...).
- **Período** (Natal ou Dia dos Namorados mudam as médias semanais).

Isto dá lugar a uma **estrutura hierárquica de atributos** —família → subfamília → produto → artigo → filial— que permite definir regras a nível global e exceções a nível concreto. É exatamente o que faz o módulo de abastecimento da RayTecno quando configurado para um grupo joalheiro com várias marcas e canais.

---

## 4. Terceiro passo: o modelo DRP (Distribution Requirements Planning)

A fórmula anterior resolve o cálculo **para uma referência e uma loja**. O desafio real é escalar isso a **milhares de referências × dezenas de lojas × dezenas de semanas planejadas**, com prognósticos que mudam, produção limitada e prazos de entrega variáveis. Aí entra o **DRP**.

### O que é o DRP

O **Distribution Requirements Planning** —ou planejamento de necessidades de distribuição— é uma metodologia que estende a lógica do MRP (típica de fabricação) ao lado da distribuição. Originada no final dos anos 80 como evolução natural do MRP, hoje é **padrão em varejo multi-loja** e módulo habitual nos ERPs industriais e de distribuição modernos.

Em essência, o DRP traduz a demanda real e prevista em cada loja em **ordens de reabastecimento escalonadas no tempo**, propagando essa demanda para trás —da loja ao centro de distribuição, e deste à oficina ou ao fornecedor— de forma coordenada.

### Push vs Pull: duas lógicas, um equilíbrio

| Modelo | Como funciona | Quando convém |
|---|---|---|
| **Push** | Decide-se centralmente quanto enviar a cada loja segundo previsão histórica | Produto sazonal, lançamentos, promoções, escassez controlada |
| **Pull** | A loja "puxa" do estoque conforme consome; o centro reabastece em função da venda real | Sortimento estável, alta rotação, produto recorrente |

O DRP moderno **combina ambos os enfoques**: push para coleções novas e produto sazonal; pull para fundo de sortimento. RayTecno permite definir estratégia por família e por tipo de loja, o que é especialmente útil para joalherias que misturam coleção permanente com campanhas pontuais (Dia dos Namorados, Natal, primeiras comunhões).

### O que o DRP traz sobre o simples "ponto de pedido"

Um sistema básico de **ponto de pedido (ROP)** dispara uma ordem quando o estoque baixa de um limite. Funciona, mas tem três limitações graves para joalheria:

1. **Não antecipa mudanças de demanda** (Natal chega e o sistema reage tarde).
2. **Não coordena entre lojas** (uma tem excesso, outra ruptura, e ninguém as cruza).
3. **Não integra produção nem fornecedor** (a loja pede, mas a oficina não chega a tempo).

O DRP resolve esses três pontos porque trabalha com um **horizonte temporal escalonado** (tipicamente semanal) e consolida a demanda de toda a rede.

### Caso típico: joalheria com lojas em grandes superfícies

Uma marca joalheira com **20 córneres em grandes superfícies** se enfrenta a um cenário comum:

- O espaço físico de cada córner é muito limitado (não cabem mais de X unidades por família).
- A rotação varia muito segundo localização: um shopping de capital com turismo vende muito diferente de um de província.
- A marca produz parte do catálogo em oficina própria e compra o resto.
- O cliente final não perdoa a ruptura: se não há anel do seu tamanho em estoque, vai embora.

**Sem DRP** o problema se resolve com várias planilhas Excel manejadas por analistas. Funciona —mal— até certo tamanho. As consequências típicas:

- 30 % de referências **A** com ruptura em lojas enquanto há estoque no centro de distribuição.
- 5.000 unidades mensais movidas entre lojas para compensar excedentes com faltas (custo logístico altíssimo).
- Lojas alugando depósito adicional perto do shopping para "guardar o que não cabe em exposição".

**Com DRP bem implementado** o modelo muda:

- O estoque se concentra no centro de distribuição; a loja recebe **o que vai vender** na frequência definida.
- As propostas de reposição se calculam automaticamente com a fórmula de necessidade e se apresentam ao especialista de abastecimento para validação.
- Cada loja pode ter prioridade diferente (as de capital, prioridade alta) quando o estoque central não chega para todas.
- Gerenciam-se produtos substitutos (se falta o modelo X, oferecer o Y) e produtos predecessores (a nova coleção "herda" o histórico da anterior).

---

## 5. Atributos que o ERP deve gerenciar para que tudo isto funcione

Para que o DRP gere propostas razoáveis, o ERP precisa manter uma série de **atributos por artigo e por filial**. Os principais:

### Por artigo

- **Taxa de cobertura objetivo** (em semanas ou dias).
- **Estoque mínimo** (em unidades ou dias de venda).
- **Estoque máximo** e % de arredondamento.
- **Coeficiente de variação interanual** (corrige a previsão com a tendência real).
- **Produto substituto** e produto predecessor.
- **Tempo de produção / aprovisionamento**.
- **Família, subfamília, produto** (hierarquia para herança de parâmetros).

### Por filial

- **Coeficiente de variação de abastecimento** (corrige a média para essa loja concreta).
- **Estoque mínimo em dias**.
- **Dias de viagem desde o centro de distribuição**.
- **Calendário de recepções** (que dias recebe cada filial: segunda, terça, quarta...).
- **Médias de venda** (últimos 7, 15, 30, 60, 90 e 120 dias, mesmo mês ano anterior).
- **Tipo de filial** (córner, loja própria, franquia, atacado...).
- **Prioridade** ante escassez de estoque.

E crítico: o ERP deve permitir **atualizações em massa** por herança hierárquica. Configurar 5.000 referências × 20 lojas × 15 atributos manualmente é inviável. O sistema deve permitir:

1. Definir regras a nível família.
2. Aplicar exceções a nível subfamília ou produto.
3. Herdar tudo automaticamente ao nível artigo/filial.
4. Mudar massivamente quando muda a temporada ou a estratégia.

---

## 6. Conclusão: três níveis de maturidade em abastecimento joalheiro

Para terminar, uma forma útil de autodiagnóstico:

| Nível | Como se decide o que enviar | Riscos |
|---|---|---|
| **1. Manual / intuitivo** | Cada gerente de loja pede o que acha, ou um comprador central decide a olho | Sobreestoque + ruptura simultânea, dependência de pessoas, sem rastreabilidade |
| **2. Regras básicas** | Planilhas Excel com estoques mínimos por artigo, revisão semanal manual | Funciona até 3-5 lojas; colapsa com mais |
| **3. DRP integrado em ERP** | Propostas automáticas calculadas com fórmula de necessidade e validadas por especialistas | Escalável, rastreável, melhora com dados históricos e aprendizagem |

O salto do nível 2 ao 3 é exatamente o que um ERP especializado como **RayTecno** está desenhado para acompanhar: mantemos no sistema o ABC do catálogo, os parâmetros por artigo e filial, a fórmula de cálculo de necessidade, as propostas de reposição revisáveis e a integração com produção e compras. A direção recupera o controle sem deixar de ter flexibilidade tática nas lojas.

Se sua joalheria tem várias lojas, presença em grandes superfícies ou uma combinação de canais que já não se pode gerenciar com planilhas, [conversemos](https://www.raytecno.es/contato). É provável que o problema não seja a equipe —que costuma estar fazendo o melhor possível com as ferramentas que tem— mas a falta de um sistema que escale com o negócio.

---

### Para continuar lendo

- *Tipos de organização empresarial no setor joalheiro: as 5 configurações de Mintzberg*
- *O caso Schneider: 5 lições de marketing estratégico aplicáveis à joalheria*
- *Rastreabilidade do ouro: do lingote à peça vendida*
- *KPIs que toda direção de joalheria deveria revisar cada segunda-feira*

---

**Este artigo lhe foi útil?** Compartilhe-o com sua equipe diretiva ou inscreva-se no blog da RayTecno para receber uma análise estratégica por mês.
