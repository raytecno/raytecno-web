---
title: "1998 → 2026: 28 anos depois, a arquitetura ERP de uma joalheria continua sendo a mesma (e isso é uma boa notícia)"
excerpt: "Recuperamos dois diagramas de 1998 sobre o fluxo de uma oficina joalheira integrada. 28 anos depois, o esquema conceitual de um ERP joalheiro continua intacto: só mudam as camadas tecnológicas."
category: "Arquitetura & ERP"
tags: ["CIM", "ERP", "joalheria", "arquitetura", "rastreabilidade", "IoT", "indústria 4.0"]
date: 2026-05-05
language: "pt-br"
seoKeyword: "ERP joalheria arquitetura"
---

# 1998 → 2026: 28 anos depois, a arquitetura ERP de uma joalheria continua sendo a mesma

> *Reviso os pôsteres que fiz em 1998 explicando a arquitetura de um sistema integrado para oficina de joalheria. A estética ficou ancorada naquele Office 97. Mas a arquitetura conceitual —administração, planejamento, design, qualidade, controle de produção, vendas, compras, fabricação, fluxo de materiais— é exatamente a mesma sobre a qual se constrói o RayTecno hoje.*
>
> *Isto não é nostalgia. É uma observação útil para qualquer joalheria que esteja avaliando um ERP em 2026.*

Em 1998 desenhei dois pôsteres para apresentar a clientes joalheiros a ideia de um **sistema CIM (Computer Integrated Manufacturing)** aplicado ao seu setor. Naquela época falar de "0 estoques, 0 atrasos, 0 papéis, qualidade total" em oficinas onde as folhas de rota circulavam manchadas de ouro entre cravadores e polidores soava mais a manifesto do que a proposta tecnológica.

Quase três décadas depois, essa proposta acabou sendo o padrão. Mas —e isto é o interessante— **o esquema conceitual não mudou**. O que mudou são as **camadas tecnológicas** que foram se empilhando em cima.

Neste artigo recupero os dois diagramas originais (modernizados visualmente para web), adiciono um terceiro que mostra o que se somou entre 1998 e 2026, e reflito sobre o que isso significa para qualquer joalheria que esteja repensando hoje seu sistema de gestão.

---

## 1. A arquitetura: o que desenhei em 1998 continua válido em 2026

O primeiro pôster era um esquema de **camadas funcionais**: administração no topo, núcleo CIM no centro, fabricação embaixo, e o fluxo de materiais atravessando tudo de fornecedor a cliente.

![Arquitetura ERP integrado para joalheria](./arquitectura-erp-joyeria-2026.svg)

As peças são as mesmas que qualquer livro moderno de Indústria 4.0 continua descrevendo:

- **Administração:** contabilidade, pessoal, contabilidade industrial.
- **Planejamento de empresa:** objetivos, estratégia, marco de produção.
- **CAD:** design, cálculo, desenho, lista de peças, simulação.
- **CAP** (planejamento de trabalho) e **CAQ** (controle de qualidade).
- **PPC** (Production Planning and Control): programa de produção, lançamento de ordens.
- **Vendas e compras** integrados ao núcleo.
- **CAM** (Computer Aided Manufacturing): controle de fluxo de materiais, controle de fabricação, conservação.

E um **fluxo horizontal** que atravessa a oficina: cera → fundição → exteriores → cravadores → polimentos → acabamentos → expedição.

> **O ponto importante:** este esquema não era uma visão própria, era a tradução ao setor joalheiro do paradigma CIM que se ensinava nos anos 90 em escolas de engenharia industrial. O que sim era novidade então é que **alguém o aplicasse a sério a uma oficina de joalheria**, onde a maioria ia com Excel e caderno. Hoje é a base de qualquer ERP joalheiro sério.

---

## 2. O fluxo da oficina: seções, fases e estoques intermediários

O segundo pôster era um diagrama radial. Três anéis concêntricos —centros de custo, seções da oficina, fases produtivas concretas— com o ouro no núcleo e os almoxarifados intermediários marcados radialmente.

![Fluxo de fabricação de joalheria — oficina completa](./flujo-taller-joyeria-2026.svg)

O que este diagrama ensina, e que continua sendo igualmente válido hoje, são três ideias que qualquer joalheiro com oficina própria reconhecerá:

**Primeira: o ouro entra uma vez e se transforma muitas.**
O núcleo é a matéria-prima. Todo o resto são transformações que agregam valor (e custo) sobre ela. Um ERP joalheiro sério tem que medir onde se ganha esse valor e onde se perde em perdas.

**Segunda: há três centros de custo, não um.**
CC1, CC2 e CC3 representam agrupamentos de seções que compartilham natureza produtiva. A contabilidade de custos joalheira não funciona se toda a oficina é um único centro: é preciso poder comparar o custo por grama da fundição frente ao polimento frente à cravação.

**Terceira: entre fases há estoques intermediários (WIP) que ninguém quer ver.**
Os almoxarifados de pilotos, borrachas, ceras, pedras, matéria-prima, complementos, semielaborados e acabados são **capital imobilizado** dormindo entre fases. Tê-los identificados explicitamente no diagrama é o que permite atacá-los: a pergunta operacional não é "quanto estoque tenho?" mas "em que ponto do fluxo o tenho?".

---

## 3. O que mudou: seis camadas modernas sobre o mesmo núcleo

Se a arquitetura conceitual não mudou, o que mudou então? A resposta: **as capacidades**, e foram adicionadas em forma de camadas.

![De 1998 a 2026: a arquitetura aguenta, as camadas crescem](./capas-modernas-1998-2026.svg)

Estas são as seis camadas que em 1998 não estavam —ou estavam embrionárias— e que hoje são centrais em qualquer ERP joalheiro moderno:

### 3.1 Rastreabilidade por peça e por lote

Em 1998 o controle de qualidade era uma seção a mais do esquema CIM. Hoje falamos de algo muito mais exigente: **cada peça vendida tem uma história completa documentada** —de que lingote saiu o ouro, que fornecedor entregou as gemas, que cravador a trabalhou, que turno de polimento passou, que controles superou, em que loja se vendeu, a que cliente.

Isto não é um capricho: é um requisito normativo crescente (LBMA, Kimberley, RJC) e um ativo comercial cada vez mais valioso para o cliente final que pergunta "de onde vem este diamante?".

### 3.2 Omnicanalidade

Em 1998 uma joalheria vendia em sua loja. Ponto. Hoje uma marca joalheira média opera em paralelo em:

- Lojas próprias.
- Córneres e espaços concessionados em grandes superfícies.
- Site próprio.
- Marketplaces.
- Distribuição atacadista B2B.
- Eventos efêmeros (pop-ups, feiras).

E tudo isso tem que compartilhar **um único estoque real** e um único histórico de cliente. A camada omnicanal do ERP é a que torna possível que a vendedora de uma loja veja que a cliente comprou um anel combinando no site há seis meses.

### 3.3 Integração com o cliente final

Configuradores 3D online, prova virtual com realidade aumentada, anéis sob medida pedidos do celular, orçamentos compartilhados por WhatsApp com fotos do avanço da oficina. O cliente final já não é só o destino do fluxo: é **um ator a mais dentro do fluxo**, com capacidade para iniciar ordens de fabricação que entram diretamente no sistema.

### 3.4 IoT na oficina

Em 1998 o controle de fabricação se alimentava de relatórios em papel que o encarregado digitava no final do turno. Em 2026 os dados vêm diretamente dos equipamentos:

- Fornos de fundição que reportam temperatura e curva do ciclo em tempo real.
- Balanças de precisão conectadas que registram o peso de cada peça em cada fase.
- Banhos de ródio com controle de espessura automatizado.
- Câmeras que documentam o estado da peça em cada ponto crítico.

O ERP recebe dados de máquina sem intervenção humana. A consequência: rastreabilidade sem fricção, e a possibilidade de detectar anomalias (perdas anormais, ciclos fora de faixa) antes que se convertam em problema.

### 3.5 Análise preditiva

Os ERPs dos anos 90 respondiam à pergunta *"o que aconteceu?"*. Os ERPs modernos respondem também a *"o que vai acontecer?"*. Aplicado a joalheria:

- **Predição de gargalos:** sabendo a carga atual da oficina, que fase saturará primeiro na semana que vem.
- **Predição de ruptura de estoque por loja:** combinando histórico, sazonalidade e eventos pontuais (campanhas, clima, feriados locais).
- **Predição de demanda por coleção:** detectando antes que a intuição quais referências vão decolar.

Esta camada só é possível quando a rastreabilidade e o IoT estão em seu lugar: a análise preditiva precisa de dados históricos limpos e abundantes para treinar.

### 3.6 Conformidade normativa digital

Em 1998 as obrigações normativas eram mais simples e se gerenciavam em papel. Em 2026 uma joalheria se enfrenta a:

- **LBMA** (London Bullion Market Association) para certificação de ouro responsável.
- **Processo Kimberley** para diamantes livres de conflito.
- **RJC** (Responsible Jewellery Council) para certificação integral da cadeia.
- **Declarações fiscais digitais** (SPED no Brasil, equivalentes internacionais).
- **Registro de operações suspeitas** (PLD/AML para metais preciosos).
- **Faturamento eletrônico obrigatório** segundo evolução regulatória.

Esta camada não é opcional: é condição para operar. E só é viável se está integrada no ERP, não como adendo posterior.

---

## 4. A conclusão que importa: a arquitetura é estável, as capacidades evoluem

Olhar dois pôsteres de 1998 e verificar que a arquitetura continua intacta não é um exercício nostálgico. Tem uma **implicação prática direta** para qualquer joalheria que esteja avaliando hoje seu ERP.

**A pergunta correta não é "este ERP tem IA / blockchain / IoT?"**. Essa pergunta leva a comprar camadas modernas montadas sobre arquiteturas frágeis.

**A pergunta correta é: "este ERP respeita a arquitetura natural do negócio joalheiro —administração, planejamento, CAD, qualidade, controle de produção, vendas, compras, fabricação, fluxo de materiais— e constrói as camadas modernas em cima dela?"**.

Se a resposta for sim, as camadas novas que se inventem nos próximos 28 anos poderão continuar sendo adicionadas sem quebrar o sistema. Se a resposta for não, nenhum módulo de IA vai salvar o sistema quando a oficina crescer ou mudarem as normas.

Na **RayTecno** o colocamos exatamente assim: o núcleo é a arquitetura clássica do CIM joalheiro, comprovada durante décadas; as camadas modernas (rastreabilidade, omnicanal, IoT, análise, conformidade) são módulos que se ativam segundo necessite cada joalheria. Uma joalheria pequena começa pelo núcleo. Um grupo joalheiro com produção própria e vinte lojas ativa todas as camadas.

A arquitetura é a promessa de que seu ERP não ficará obsoleto quando chegar a próxima onda de tecnologia. E a próxima já está chegando.

Se sua joalheria tem oficina própria, rede de lojas ou ambas as coisas, e quer revisar seu sistema de gestão com esta lente arquitetônica em vez de com um checklist de funcionalidades, [conversemos](https://www.raytecno.es/contato).

---

### Para continuar lendo

- *Abastecimento a lojas de joalheria: como decidir quanto produto enviar a cada ponto de venda*
- *Tipos de organização empresarial no setor joalheiro: as 5 configurações de Mintzberg*
- *O caso Schneider: 5 lições de marketing estratégico aplicáveis à joalheria*

---

**Este artigo lhe foi útil?** Compartilhe-o com sua equipe diretiva ou inscreva-se no blog da RayTecno para receber uma análise estratégica por mês.

---

*Nota do autor: os pôsteres originais de 1998 estão guardados no meu arquivo pessoal. Estes diagramas são recriações modernizadas que respeitam a arquitetura conceitual do original, adaptada visualmente para web.*
