---
title: "Fundição e microfusão em joalheria: o coração da oficina, controlado a partir do ERP"
excerpt: "Análise do processo de microfusão à cera perdida em joalheria: do modelo CAD à peça acabada, pontos críticos de qualidade, variáveis de custo e como um ERP joalheiro controla a rastreabilidade do ouro."
author: "Equipe RayTecno"
category: "Fabricação & ERP"
tags: ["fundição", "microfusão", "cera perdida", "joalheria", "ERP", "rastreabilidade", "perda", "ouro"]
date: 2026-05-05
language: "pt-br"
seoKeyword: "microfusão joalheria ERP"
---

# Fundição e microfusão em joalheria: o coração da oficina

> *Cada grama de ouro que entra no forno tem um custo, uma procedência e um destino. Cada peça que sai tem uma história. Entre o lingote e a vitrine, o momento mais crítico —onde mais valor se ganha ou se perde— é a fundição. Se seu ERP não controla este ponto, não controla seu negócio.*

Em qualquer oficina de joalheria com produção própria, **a fundição é o gargalo técnico, o ponto de maior custo energético, o momento de maior risco de perda e, ao mesmo tempo, a fase da qual depende a qualidade de tudo o que vem depois**. Uma porosidade mal detectada em fundição se arrasta através do esmerilhado, do polimento, da cravação e dos acabamentos. Chegará ao cliente final como uma imperfeição visível que desclassificará a peça.

Neste artigo percorremos o processo de fundição joalheira moderna —focando na **microfusão à cera perdida**, a técnica dominante do setor— a partir da perspectiva de quem precisa **controlar produção, rastreabilidade e custos** desde um ERP. O que segue é o que aprendemos na RayTecno acompanhando oficinas reais.

---

## 1. Por que a microfusão continua sendo a técnica dominante?

A microfusão à cera perdida é **a técnica de fundição mais utilizada em joalheria**, tanto em produção de bijuteria quanto em alta joalheria. Existem outras opções —fundição em areia, fundição contínua, fundição sob pressão— mas nenhuma combina as duas qualidades que o setor joalheiro exige:

- **Precisão de reprodução do detalhe** (filigranas, texturas, cravações pré-formadas, tipografias).
- **Versatilidade de volume** (de uma peça única a séries de centenas sobre uma mesma árvore).

Esta técnica permite trabalhar praticamente todos os metais nobres: ouro amarelo, ouro branco, ouro rosa (em ligas de 9k a 22k), prata 925 e 930, paládio, platina, latão e bronze. Cada um com suas particularidades de temperatura de vazamento, atmosfera de proteção, propensão a defeitos.

E em 2026 a microfusão vive uma **segunda juventude** graças à integração com impressão 3D: o modelo em cera já não é talhado manualmente, é impresso em resina fundível diretamente a partir de um arquivo CAD. Isto reduz o tempo do conceito à peça física de semanas a dias, e permite a oficinas pequenas competir em complexidade com as grandes marcas.

---

## 2. O processo passo a passo: onde se ganha e se perde valor

Repassemos as fases do processo com a lente de um responsável de produção que precisa controlá-las desde o ERP.

### 2.1 Design e modelo CAD

Tudo começa com o **modelo digital**. Antes era um modelo em cera talhado à mão por um mestre modelista. Hoje é um arquivo CAD —Rhino, 3Design, Matrix, ZBrush— que define geometria, peso teórico e volume de metal necessário.

**O que o ERP deve controlar:**

- Versionamento do modelo (cada revisão é uma variante, com seu BOM).
- Peso teórico do modelo segundo liga (um anel em ouro 18k pesa muito diferente que em prata).
- Tempo de fabricação estimado por fase.
- Custo teórico do modelo a preço de ouro do dia.

### 2.2 Borracha e matriz

A partir do modelo (ou diretamente do CAD se imprime em resina), fabrica-se um **molde de borracha vulcanizada** que servirá para injetar ceras em série. É a peça que define a rentabilidade de toda uma coleção: uma boa borracha dura milhares de injeções, uma malfeita quebra em cem.

**Variáveis críticas:**

- Tipo de borracha (silicone vulcanizável, silicone injetável a baixa temperatura, RTV).
- Geometria dos canais de injeção (mal projetados, geram peças incompletas).
- Vida útil acumulada (cada borracha tem um contador real de injeções).

**O que o ERP deve controlar:** um **cadastro de borrachas** com identificador único, data de criação, número de injeções acumuladas e estado (ativo, em revisão, retirado).

### 2.3 Injeção de ceras

Cada peça começa sendo uma réplica em cera. A injetora introduz cera fundida (tipicamente a 60-80°C) no molde de borracha a pressão controlada. Uma vez solidificada, extrai-se a cera e se inspeciona.

**Defeitos típicos nesta fase:**

- Peças incompletas (cera que não preencheu o molde).
- Bolhas presas na cera.
- Deformações por extração prematura.

**KPI a medir:** rendimento de injeção (% de ceras válidas / total injetadas). Uma borracha que cai abaixo de 85% de rendimento é candidata a substituição.

### 2.4 Cravação em cera (opcional mas crítica)

Em peças com cravação de gemas pequenas (pavé, cluster), as gemas são colocadas **diretamente na cera** antes da fundição, em uma técnica chamada *stone-in-place*. O metal funde ao redor das gemas, economizando uma fase posterior de cravação manual.

Isto exige gemas de muito alta resistência térmica (diamantes naturais ou sintéticos, safiras, rubis) e um controle preciso de temperatura para não danificá-las.

**O que o ERP deve controlar:** rastreabilidade de gemas desde a compra (com certificado Kimberley ou equivalente) até sua cravação em peça concreta.

### 2.5 Montagem da árvore

As ceras individuais são soldadas a um **canal central de cera**, formando uma "árvore" que permite fundir dezenas de peças em um único vazamento. O design da árvore é uma arte em si mesmo: peças mal distribuídas geram defeitos por fluxo de metal desigual.

**KPI chave:** **gramas de metal por árvore**. É a unidade econômica básica da oficina: se a árvore pesa 200 g de ouro 18k a R$ 400/g, são R$ 80.000 em jogo em um único vazamento.

### 2.6 Colocação em cilindro e gesso de revestimento

A árvore é colocada dentro de um cilindro metálico e preenchida com **gesso de microfusão de alta resistência térmica**, misturado com água em proporção exata. A mistura é vibrada a vácuo para eliminar bolhas que gerariam porosidade no metal final.

**Variáveis críticas:**

- Proporção gesso/água (tipicamente 38-40% de água).
- Tempo de vácuo (60-90 segundos).
- Tempo de cura antes de passar ao forno (mínimo 2 horas).

### 2.7 Desencerado em forno

O cilindro passa ao forno seguindo uma **rampa de temperatura programada**: subida lenta até 150°C para evaporar umidade, plateau a 300°C para fundir e eliminar a cera, subida final até 700-750°C para calcinar restos orgânicos e deixar o molde limpo.

Uma rampa mal programada gera fissuras no gesso, que se traduzem em peças com rebarbas ou totalmente inservíveis.

### 2.8 Fundição e vazamento

O metal é fundido em cadinho —em fornos de indução modernos— à temperatura específica de cada liga. O cilindro quente é colocado na centrífuga ou na máquina de vazamento a vácuo, e o metal líquido é injetado no molde.

**Temperaturas típicas de vazamento:**

- Ouro amarelo 18k: ~1050°C
- Ouro branco 18k: ~1100°C
- Prata 925: ~1000°C
- Platina: ~1850°C (requer equipamentos especializados)

**Defeitos críticos nesta fase:**

- **Porosidade por gás** (aprisionamento de ar ou excesso de umidade no gesso).
- **Preenchimento incompleto** (temperatura de vazamento baixa ou canais mal dimensionados).
- **Tensões internas** (resfriamento muito rápido).
- **Contaminação** por excesso de metal reciclado: usar mais de 50% de metal recuperado de vazamentos anteriores **aumenta significativamente os defeitos**.

### 2.9 Desmoldagem e separação de peças

O cilindro é resfriado com água, o que quebra o gesso. A árvore metálica é extraída, limpa e as peças individuais são separadas do canal de alimentação com disco de corte. Cada peça é pesada e contrastada com seu peso teórico.

**KPI fundamental:** **perda de metal**. Uma oficina bem gerenciada mantém perdas de fundição abaixo de 2-3% (o resto se recupera e se reincorpora controladamente).

---

## 3. Os pontos de controle que o ERP deve gerenciar

Ao longo das nove fases anteriores, há seis variáveis críticas que devem ficar registradas no ERP para que a oficina seja governável:

### 3.1 Rastreabilidade do metal

**De onde vem cada grama e para onde vai.** O ERP deve registrar, por cada lote de ouro ou prata:

- Fornecedor e certificação (LBMA para ouro responsável, recycled silver certified).
- Pureza analisada (não a declarada).
- Liga à qual se incorpora.
- Peça final onde acaba.

Esta cadeia permite responder perguntas que cada vez mais clientes fazem: *"este ouro vem de mineração responsável?"*.

### 3.2 Controle de perdas por fase

Não basta saber quanto se perdeu no total. É preciso saber **onde**: em fundição, em esmerilhado, em polimento, em cravação. Cada fase tem sua faixa aceitável, e desvios significativos são sinal de problema.

### 3.3 Custo real por peça

O preço do ouro flutua diariamente. Uma peça fundida hoje a R$ 400/g e vendida daqui a três meses a R$ 430/g pode ter gerado uma margem fictícia se o ERP não recalcula custo a preço do dia de fabricação.

### 3.4 Vida útil de borrachas e consumíveis

As borrachas, os cadinhos, os pucks de fundição têm vida útil finita. O ERP deve contar injeções, vazamentos e horas de uso, alertando antes que o desgaste gere defeitos.

### 3.5 Rendimento por vazamento

**Vazamentos válidos / vazamentos totais** é o KPI mais importante de fundição. Permite detectar tendências: uma queda sustentada do rendimento indica um problema sistêmico (gesso de má qualidade, calibração do forno, formação insuficiente do operador).

### 3.6 Rastreabilidade fotográfica

Em joalheria de alto valor, cada peça única deve ter **registro fotográfico em cada fase crítica**: pós-fundição, pós-cravação, antes do empacotamento. É prova de qualidade, suporte de garantia e defesa diante de reclamações.

---

## 4. Os KPIs que a direção deveria ver cada segunda-feira

A nível diretivo, o ruído da oficina se condensa em cinco números:

| KPI | O que mede | Faixa saudável |
|---|---|---|
| **Rendimento de vazamento** | % peças válidas sobre total fundido | > 90 % |
| **Perda global** | % metal perdido entre lingote e peça final | < 5 % |
| **Custo por grama de peça acabada** | Custo total / gramas produzidos | Estável ou decrescente |
| **Tempo médio modelo → peça** | Dias desde aprovação CAD até primeira peça | < 7 dias |
| **Retrabalho** | % peças que voltam à fase anterior | < 8 % |

Quando um destes cinco se move, é preciso olhar antes que se converta em um problema econômico.

---

## 5. Sustentabilidade: o fator que ninguém pedia há 10 anos e hoje é central

A fundição joalheira tem uma pegada energética e de materiais considerável. Em 2026 isto importa por duas razões:

- **Normativa crescente** (RJC, LBMA, certificações ESG).
- **Demanda do cliente final**, especialmente em segmentos jovens que perguntam por origem do ouro e sustentabilidade antes de comprar.

Boas práticas que o ERP deve documentar:

- **Reciclagem controlada** de perdas e desperdícios (com análise de pureza ao reincorporar).
- **Rastreabilidade de origem** do metal novo (ouro reciclado certificado, prata reciclada, ouro de mineração ética).
- **Eficiência energética** do forno (registro de consumo elétrico por vazamento).
- **Gestão de resíduos químicos** do desencerado e dos banhos posteriores.

Comparada com a usinagem CNC, a microfusão é **mais sustentável** em uso de material (menos desperdício), mas **menos eficiente energeticamente** que o forjamento tradicional. Saber isto e poder demonstrá-lo com dados do ERP é cada vez mais um argumento comercial.

---

## 6. Como a RayTecno materializa isto

Na **RayTecno** o módulo de fabricação gerencia a microfusão joalheira com seis blocos integrados:

1. **Cadastro de modelos e borrachas** com versionamento, BOM, vida útil e custo teórico atualizável a preço de ouro.
2. **Ordens de fabricação** que geram automaticamente a documentação da árvore (peso esperado, número de peças, liga).
3. **Registro de vazamentos** com temperatura, hora, operador, lote de metal de entrada, lote de gesso, peso pós-fundição e rendimento real.
4. **Rastreabilidade peça a peça** com código único que acompanha a joia até a venda.
5. **Cálculo de custo real** que recalcula com preço de ouro do dia e distribui custos indiretos da oficina.
6. **Painel diretivo** com os cinco KPIs anteriores em tempo real e alertas sobre desvios.

A filosofia é a mesma que no resto do sistema: **construir a qualidade e a rastreabilidade em cada fase**, não inspecioná-las no final.

---

## 7. Conclusão: a fundição é o momento da verdade

No ciclo completo de uma joia, a fundição é o momento onde mais valor se concentra e mais se pode perder. Uma oficina que controla bem esta fase é uma oficina rentável. Uma oficina que não a controla compensa com sobrecusto, com retrabalho e com frustração.

A boa notícia é que toda a complexidade descrita —nove fases, seis variáveis críticas, cinco KPIs diretivos— é **perfeitamente sistematizável** desde um ERP especializado. Não há que reinventar nada: há que medir o que já acontece e atuar sobre os dados.

Se sua oficina faz microfusão e sente que não tem visibilidade real do que está acontecendo vazamento a vazamento, [conversemos](https://www.raytecno.es/contato). Provavelmente o primeiro passo não seja trocar o forno: seja instrumentar o que já tem.

---

### Para continuar lendo

- *A IA nos sistemas de fabricação de joalheria e em sistemas de qualidade: como evoluem os 14 pontos de Deming em 2026*
- *1998 → 2026: 28 anos depois, a arquitetura ERP de uma joalheria continua sendo a mesma*
- *Abastecimento a lojas de joalheria: como decidir quanto produto enviar a cada ponto de venda*
- *Tipos de organização empresarial no setor joalheiro: as 5 configurações de Mintzberg*

---

**Este artigo lhe foi útil?** Compartilhe-o com sua equipe de produção ou inscreva-se no blog da RayTecno para receber uma análise estratégica por mês.
