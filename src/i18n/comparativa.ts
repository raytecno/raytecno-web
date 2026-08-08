/**
 * Traducciones de la comparativa de Tasas Horarias
 * @file src/i18n/comparativa.ts
 *
 * Los NIVELES (si/parcial/no) viven en el componente y son iguales en todos
 * los idiomas; aqui solo hay textos. Las notas van en el orden de columnas
 * del render: [RayGold, SAP, Dynamics 365, PIRO, Odoo]. Cadena vacia = sin nota.
 * Los terminos de producto (KP26, Cost estimate, Shop floor...) no se traducen.
 */

import type { Lang } from "@/config/pages";

export interface ComparativaFilaTexts {
    concepto: string;
    detalle: string;
    notas: [string, string, string, string, string];
}

export interface ComparativaTexts {
    kicker: string;
    titulo: string;
    intro: string;
    glosario: { codigo: string; texto: string }[];
    tags: { raygold: string; sap: string; d365: string; piro: string; odoo: string };
    grupos: [string, string, string];
    filas: ComparativaFilaTexts[];
    leyenda: { si: string; parcial: string; no: string };
    pie: string;
    pieLink: string;
    cta1: string;
    cta2: string;
    ctaBoton: string;
    sr: { concepto: string; si: string; parcial: string; no: string; tabla: string; glosario: string };
}

const es: ComparativaTexts = {
    kicker: "Costes de produccion",
    titulo: "La tarifa horaria de tu taller, al nivel de los grandes",
    intro: "¿Cuanto cuesta una hora de engastado? ¿Y de pulido? Comparamos como resuelven el coste de produccion por seccion los grandes ERP del mercado — y como lo resuelve RayGold hablando el idioma de la joyeria.",
    glosario: [
        { codigo: "KP26", texto: "Horas anuales y capacidad de cada seccion" },
        { codigo: "KSPI", texto: "Calculo de la tarifa: coste ÷ horas" },
        { codigo: "CK40N", texto: "Reactualizacion masiva con simulacion previa" },
        { codigo: "KSII", texto: "Cierre del ejercicio con la tarifa real" },
    ],
    tags: { raygold: "Tasas Horarias", sap: "Modulo CO", d365: "Supply Chain", piro: "Jewelry ERP · EE.UU.", odoo: "MRP" },
    grupos: [
        "El coste de cada seccion del taller",
        "El coste de cada pieza y cada orden",
        "Y lo que solo entiende un joyero",
    ],
    filas: [
        { concepto: "Secciones como centros de coste", detalle: "Fundicion, engastado, pulido... cada una con su coste propio",
          notas: ["Elementos de ruta", "Centros de coste", "Work centers", "Pasos de workflow", "Work centers"] },
        { concepto: "Catalogo de tipos de coste", detalle: "Salarios, amortizaciones, energia, alquiler... cada concepto identificado",
          notas: ["Elementos + estructura", "Elementos de coste", "Cost categories", "", "Un importe unico"] },
        { concepto: "Arbol de costes por seccion", detalle: "Directos, indirectos y amortizaciones desglosados y sumados por niveles",
          notas: ["Explosion por niveles", "Planificacion KP06", "Costing sheet", "", "Se calcula fuera"] },
        { concepto: "Horas anuales y capacidad", detalle: "Actividad planificada y capacidad instalada de cada seccion, por ejercicio",
          notas: ["KP26", "KP26", "Fuera del sistema", "", ""] },
        { concepto: "Tarifa calculada, no tecleada", detalle: "Tasa /h = coste anual de la seccion ÷ horas anuales, con trazabilidad",
          notas: ["KSPI", "KSPI", "Precio introducido", "No aplica", "Precio introducido"] },
        { concepto: "Reparto fijo / variable", detalle: "El fijo se divide por capacidad: la infrautilizacion no infla la tarifa",
          notas: ["Naturaleza del coste", "Indicador de precio 2", "Setup vs run time", "", ""] },
        { concepto: "Indirectos como porcentaje", detalle: "Gastos generales aplicados como % o coeficiente sobre los directos",
          notas: ["Nodos PORCENTAJE", "Assessments", "Surcharge", "", "A mano en la tarifa"] },
        { concepto: "Coste plan al lanzar la orden", detalle: "Tiempos de la ruta × tarifa + escandallo de materiales, congelado en la orden",
          notas: ["Simulador de precios", "Cost estimate", "BOM calculation", "Presupuesto", "MO Cost"] },
        { concepto: "Tiempos reales por operario y fase", detalle: "Quien, cuanto y en que seccion, capturado en planta pieza a pieza",
          notas: ["Marcajes codigo de barras", "Confirmaciones", "Job registration", "Timekeeping", "Shop floor"] },
        { concepto: "Reactualizacion masiva con simulacion", detalle: "Cambia un factor y revaloriza todas las tarifas viendo antes las variaciones",
          notas: ["CK40N con informe Δ%", "CK40N", "Costing versions", "", ""] },
        { concepto: "Cierre con tarifa real", detalle: "Coste real ÷ horas reales al cierre: desviacion plan vs real por seccion",
          notas: ["KSII", "KSII", "", "Solo por orden", "Solo por orden"] },
        { concepto: "Metales preciosos y kilates", detalle: "Oro 999 a 375, plata, platino: ley, peso y valor en el coste",
          notas: ["De serie desde 1990", "Desarrollo a medida", "Desarrollo a medida", "", "Modulos de terceros"] },
        { concepto: "Mermas de fundicion", detalle: "Peso estimado vs real, arbolitos, recuperacion de metal",
          notas: ["Fundicion integrada", "", "", "Casting trees", ""] },
        { concepto: "Implantacion pensada para talleres", detalle: "Sin consultoras externas ni proyectos de meses para arrancar el costeo",
          notas: ["Lo montamos contigo", "Proyecto de consultoria", "Partner necesario", "3-6 meses", "Segun partner"] },
    ],
    leyenda: { si: "Incluido", parcial: "Parcial o con configuracion", no: "No disponible o a medida" },
    pie: "Elaboracion propia a partir de la documentacion publica de cada fabricante (SAP CO, Microsoft Learn, Odoo Docs, PIRO). Cada producto evoluciona: si detectas una imprecision,",
    pieLink: "cuentanoslo",
    cta1: "Los costes de tu taller, calculados como en SAP.",
    cta2: "Explicados como entre joyeros.",
    ctaBoton: "Ver una demo del modulo de costes",
    sr: { concepto: "Concepto", si: "Si", parcial: "Parcial", no: "No", tabla: "Comparativa de ERP", glosario: "Terminologia de costes" },
};

const en: ComparativaTexts = {
    kicker: "Production costs",
    titulo: "Your workshop's hourly rate, on par with the big players",
    intro: "How much does an hour of stone setting cost? And polishing? We compare how the leading ERPs solve production costing per section — and how RayGold solves it speaking the language of jewelry.",
    glosario: [
        { codigo: "KP26", texto: "Annual hours and capacity per section" },
        { codigo: "KSPI", texto: "Rate calculation: cost ÷ hours" },
        { codigo: "CK40N", texto: "Mass recalculation with prior simulation" },
        { codigo: "KSII", texto: "Year-end closing with the actual rate" },
    ],
    tags: { raygold: "Hourly Rates", sap: "CO Module", d365: "Supply Chain", piro: "Jewelry ERP · USA", odoo: "MRP" },
    grupos: [
        "The cost of each workshop section",
        "The cost of each piece and each order",
        "And what only a jeweler understands",
    ],
    filas: [
        { concepto: "Sections as cost centers", detalle: "Casting, setting, polishing... each with its own cost",
          notas: ["Routing elements", "Cost centers", "Work centers", "Workflow steps", "Work centers"] },
        { concepto: "Catalog of cost types", detalle: "Wages, depreciation, energy, rent... every concept identified",
          notas: ["Elements + structure", "Cost elements", "Cost categories", "", "A single amount"] },
        { concepto: "Cost tree per section", detalle: "Direct, indirect and depreciation broken down and rolled up by levels",
          notas: ["Multi-level explosion", "KP06 planning", "Costing sheet", "", "Computed outside"] },
        { concepto: "Annual hours and capacity", detalle: "Planned activity and installed capacity per section, by fiscal year",
          notas: ["KP26", "KP26", "Outside the system", "", ""] },
        { concepto: "Calculated rate, not typed in", detalle: "Rate /h = annual section cost ÷ annual hours, fully traceable",
          notas: ["KSPI", "KSPI", "Entered price", "Not applicable", "Entered price"] },
        { concepto: "Fixed / variable split", detalle: "Fixed cost divided by capacity: under-utilization doesn't inflate the rate",
          notas: ["Cost nature", "Price indicator 2", "Setup vs run time", "", ""] },
        { concepto: "Overheads as a percentage", detalle: "General expenses applied as a % or coefficient over direct costs",
          notas: ["PERCENTAGE nodes", "Assessments", "Surcharge", "", "Manually in the rate"] },
        { concepto: "Planned cost at order release", detalle: "Routing times × rate + bill of materials, frozen on the order",
          notas: ["Price simulator", "Cost estimate", "BOM calculation", "Quote", "MO Cost"] },
        { concepto: "Actual times per worker and phase", detalle: "Who, how long and in which section, captured on the shop floor piece by piece",
          notas: ["Barcode tracking", "Confirmations", "Job registration", "Timekeeping", "Shop floor"] },
        { concepto: "Mass recalculation with simulation", detalle: "Change one factor and revalue every rate, seeing the variances first",
          notas: ["CK40N with Δ% report", "CK40N", "Costing versions", "", ""] },
        { concepto: "Closing with the actual rate", detalle: "Actual cost ÷ actual hours at closing: plan vs actual variance per section",
          notas: ["KSII", "KSII", "", "Per order only", "Per order only"] },
        { concepto: "Precious metals and karats", detalle: "Gold 999 to 375, silver, platinum: fineness, weight and value in the cost",
          notas: ["Built-in since 1990", "Custom development", "Custom development", "", "Third-party modules"] },
        { concepto: "Casting losses", detalle: "Estimated vs actual weight, casting trees, metal recovery",
          notas: ["Integrated casting", "", "", "Casting trees", ""] },
        { concepto: "Implementation built for workshops", detalle: "No external consultants or months-long projects to start costing",
          notas: ["We set it up with you", "Consulting project", "Partner required", "3-6 months", "Depends on partner"] },
    ],
    leyenda: { si: "Included", parcial: "Partial or with configuration", no: "Not available or custom-built" },
    pie: "Own analysis based on each vendor's public documentation (SAP CO, Microsoft Learn, Odoo Docs, PIRO). Every product evolves: if you spot an inaccuracy,",
    pieLink: "let us know",
    cta1: "Your workshop's costs, calculated like in SAP.",
    cta2: "Explained like one jeweler to another.",
    ctaBoton: "See a demo of the costing module",
    sr: { concepto: "Concept", si: "Yes", parcial: "Partial", no: "No", tabla: "ERP comparison", glosario: "Costing terminology" },
};

const fr: ComparativaTexts = {
    kicker: "Couts de production",
    titulo: "Le taux horaire de votre atelier, au niveau des grands",
    intro: "Combien coute une heure de sertissage ? Et de polissage ? Nous comparons comment les grands ERP resolvent le cout de production par section — et comment RayGold le resout en parlant le langage de la bijouterie.",
    glosario: [
        { codigo: "KP26", texto: "Heures annuelles et capacite de chaque section" },
        { codigo: "KSPI", texto: "Calcul du tarif : cout ÷ heures" },
        { codigo: "CK40N", texto: "Reactualisation massive avec simulation prealable" },
        { codigo: "KSII", texto: "Cloture de l'exercice avec le tarif reel" },
    ],
    tags: { raygold: "Taux Horaires", sap: "Module CO", d365: "Supply Chain", piro: "Jewelry ERP · USA", odoo: "MRP" },
    grupos: [
        "Le cout de chaque section de l'atelier",
        "Le cout de chaque piece et chaque ordre",
        "Et ce que seul un bijoutier comprend",
    ],
    filas: [
        { concepto: "Les sections comme centres de cout", detalle: "Fonte, sertissage, polissage... chacune avec son propre cout",
          notas: ["Elements de gamme", "Centres de cout", "Work centers", "Etapes de workflow", "Work centers"] },
        { concepto: "Catalogue des types de cout", detalle: "Salaires, amortissements, energie, loyer... chaque concept identifie",
          notas: ["Elements + structure", "Elements de cout", "Cost categories", "", "Un montant unique"] },
        { concepto: "Arbre des couts par section", detalle: "Directs, indirects et amortissements ventiles et cumules par niveaux",
          notas: ["Explosion par niveaux", "Planification KP06", "Costing sheet", "", "Calcule en dehors"] },
        { concepto: "Heures annuelles et capacite", detalle: "Activite planifiee et capacite installee par section, par exercice",
          notas: ["KP26", "KP26", "Hors du systeme", "", ""] },
        { concepto: "Tarif calcule, pas saisi", detalle: "Taux /h = cout annuel de la section ÷ heures annuelles, avec tracabilite",
          notas: ["KSPI", "KSPI", "Prix saisi", "Sans objet", "Prix saisi"] },
        { concepto: "Repartition fixe / variable", detalle: "Le fixe est divise par la capacite : la sous-utilisation ne gonfle pas le tarif",
          notas: ["Nature du cout", "Indicateur de prix 2", "Setup vs run time", "", ""] },
        { concepto: "Frais generaux en pourcentage", detalle: "Frais generaux appliques en % ou coefficient sur les couts directs",
          notas: ["Noeuds POURCENTAGE", "Assessments", "Surcharge", "", "A la main dans le tarif"] },
        { concepto: "Cout planifie au lancement de l'ordre", detalle: "Temps de gamme × tarif + nomenclature, fige sur l'ordre",
          notas: ["Simulateur de prix", "Cost estimate", "BOM calculation", "Devis", "MO Cost"] },
        { concepto: "Temps reels par operateur et phase", detalle: "Qui, combien et dans quelle section, pointes en atelier piece par piece",
          notas: ["Pointage code-barres", "Confirmations", "Job registration", "Timekeeping", "Shop floor"] },
        { concepto: "Reactualisation massive avec simulation", detalle: "Changez un facteur et revalorisez tous les tarifs en voyant d'abord les ecarts",
          notas: ["CK40N avec rapport Δ%", "CK40N", "Costing versions", "", ""] },
        { concepto: "Cloture avec le tarif reel", detalle: "Cout reel ÷ heures reelles a la cloture : ecart plan/reel par section",
          notas: ["KSII", "KSII", "", "Par ordre uniquement", "Par ordre uniquement"] },
        { concepto: "Metaux precieux et carats", detalle: "Or 999 a 375, argent, platine : titre, poids et valeur dans le cout",
          notas: ["De serie depuis 1990", "Developpement sur mesure", "Developpement sur mesure", "", "Modules tiers"] },
        { concepto: "Pertes de fonte", detalle: "Poids estime vs reel, arbres de fonte, recuperation du metal",
          notas: ["Fonte integree", "", "", "Casting trees", ""] },
        { concepto: "Implantation pensee pour les ateliers", detalle: "Sans consultants externes ni projets de plusieurs mois pour demarrer le costing",
          notas: ["On le met en place avec vous", "Projet de conseil", "Partenaire requis", "3-6 mois", "Selon le partenaire"] },
    ],
    leyenda: { si: "Inclus", parcial: "Partiel ou avec configuration", no: "Non disponible ou sur mesure" },
    pie: "Analyse propre basee sur la documentation publique de chaque editeur (SAP CO, Microsoft Learn, Odoo Docs, PIRO). Chaque produit evolue : si vous reperez une imprecision,",
    pieLink: "dites-le-nous",
    cta1: "Les couts de votre atelier, calcules comme dans SAP.",
    cta2: "Expliques comme entre bijoutiers.",
    ctaBoton: "Voir une demo du module de couts",
    sr: { concepto: "Concept", si: "Oui", parcial: "Partiel", no: "Non", tabla: "Comparatif ERP", glosario: "Terminologie des couts" },
};

const ca: ComparativaTexts = {
    kicker: "Costos de produccio",
    titulo: "La tarifa horaria del teu taller, al nivell dels grans",
    intro: "Quant costa una hora d'encastat? I de polit? Comparem com resolen el cost de produccio per seccio els grans ERP del mercat — i com ho resol RayGold parlant l'idioma de la joieria.",
    glosario: [
        { codigo: "KP26", texto: "Hores anuals i capacitat de cada seccio" },
        { codigo: "KSPI", texto: "Calcul de la tarifa: cost ÷ hores" },
        { codigo: "CK40N", texto: "Reactualitzacio massiva amb simulacio previa" },
        { codigo: "KSII", texto: "Tancament de l'exercici amb la tarifa real" },
    ],
    tags: { raygold: "Tarifes Horaries", sap: "Modul CO", d365: "Supply Chain", piro: "Jewelry ERP · EUA", odoo: "MRP" },
    grupos: [
        "El cost de cada seccio del taller",
        "El cost de cada peca i cada ordre",
        "I el que nomes enten un joier",
    ],
    filas: [
        { concepto: "Seccions com a centres de cost", detalle: "Fosa, encastat, polit... cadascuna amb el seu cost propi",
          notas: ["Elements de ruta", "Centres de cost", "Work centers", "Passos de workflow", "Work centers"] },
        { concepto: "Cataleg de tipus de cost", detalle: "Salaris, amortitzacions, energia, lloguer... cada concepte identificat",
          notas: ["Elements + estructura", "Elements de cost", "Cost categories", "", "Un import unic"] },
        { concepto: "Arbre de costos per seccio", detalle: "Directes, indirectes i amortitzacions desglossats i sumats per nivells",
          notas: ["Explosio per nivells", "Planificacio KP06", "Costing sheet", "", "Es calcula fora"] },
        { concepto: "Hores anuals i capacitat", detalle: "Activitat planificada i capacitat instal·lada de cada seccio, per exercici",
          notas: ["KP26", "KP26", "Fora del sistema", "", ""] },
        { concepto: "Tarifa calculada, no teclejada", detalle: "Taxa /h = cost anual de la seccio ÷ hores anuals, amb tracabilitat",
          notas: ["KSPI", "KSPI", "Preu introduit", "No aplica", "Preu introduit"] },
        { concepto: "Repartiment fix / variable", detalle: "El fix es divideix per capacitat: la infrautilitzacio no infla la tarifa",
          notas: ["Naturalesa del cost", "Indicador de preu 2", "Setup vs run time", "", ""] },
        { concepto: "Indirectes com a percentatge", detalle: "Despeses generals aplicades com a % o coeficient sobre els directes",
          notas: ["Nodes PERCENTATGE", "Assessments", "Surcharge", "", "A ma en la tarifa"] },
        { concepto: "Cost pla en llancar l'ordre", detalle: "Temps de la ruta × tarifa + escandall de materials, congelat a l'ordre",
          notas: ["Simulador de preus", "Cost estimate", "BOM calculation", "Pressupost", "MO Cost"] },
        { concepto: "Temps reals per operari i fase", detalle: "Qui, quant i en quina seccio, capturat a planta peca a peca",
          notas: ["Marcatges codi de barres", "Confirmacions", "Job registration", "Timekeeping", "Shop floor"] },
        { concepto: "Reactualitzacio massiva amb simulacio", detalle: "Canvia un factor i revaloritza totes les tarifes veient abans les variacions",
          notas: ["CK40N amb informe Δ%", "CK40N", "Costing versions", "", ""] },
        { concepto: "Tancament amb tarifa real", detalle: "Cost real ÷ hores reals al tancament: desviacio pla vs real per seccio",
          notas: ["KSII", "KSII", "", "Nomes per ordre", "Nomes per ordre"] },
        { concepto: "Metalls preciosos i quirats", detalle: "Or 999 a 375, plata, plati: llei, pes i valor en el cost",
          notas: ["De serie des de 1990", "Desenvolupament a mida", "Desenvolupament a mida", "", "Moduls de tercers"] },
        { concepto: "Minves de fosa", detalle: "Pes estimat vs real, arbrets, recuperacio de metall",
          notas: ["Fosa integrada", "", "", "Casting trees", ""] },
        { concepto: "Implantacio pensada per a tallers", detalle: "Sense consultores externes ni projectes de mesos per arrencar el costeig",
          notas: ["Ho muntem amb tu", "Projecte de consultoria", "Partner necessari", "3-6 mesos", "Segons partner"] },
    ],
    leyenda: { si: "Inclos", parcial: "Parcial o amb configuracio", no: "No disponible o a mida" },
    pie: "Elaboracio propia a partir de la documentacio publica de cada fabricant (SAP CO, Microsoft Learn, Odoo Docs, PIRO). Cada producte evoluciona: si detectes una imprecisio,",
    pieLink: "explica'ns-ho",
    cta1: "Els costos del teu taller, calculats com a SAP.",
    cta2: "Explicats com entre joiers.",
    ctaBoton: "Veure una demo del modul de costos",
    sr: { concepto: "Concepte", si: "Si", parcial: "Parcial", no: "No", tabla: "Comparativa d'ERP", glosario: "Terminologia de costos" },
};

const ptBr: ComparativaTexts = {
    kicker: "Custos de producao",
    titulo: "A taxa horaria da sua oficina, no nivel dos grandes",
    intro: "Quanto custa uma hora de cravacao? E de polimento? Comparamos como os grandes ERPs do mercado resolvem o custo de producao por secao — e como o RayGold resolve falando o idioma da joalheria.",
    glosario: [
        { codigo: "KP26", texto: "Horas anuais e capacidade de cada secao" },
        { codigo: "KSPI", texto: "Calculo da tarifa: custo ÷ horas" },
        { codigo: "CK40N", texto: "Reatualizacao em massa com simulacao previa" },
        { codigo: "KSII", texto: "Fechamento do exercicio com a tarifa real" },
    ],
    tags: { raygold: "Taxas Horarias", sap: "Modulo CO", d365: "Supply Chain", piro: "Jewelry ERP · EUA", odoo: "MRP" },
    grupos: [
        "O custo de cada secao da oficina",
        "O custo de cada peca e cada ordem",
        "E o que so um joalheiro entende",
    ],
    filas: [
        { concepto: "Secoes como centros de custo", detalle: "Fundicao, cravacao, polimento... cada uma com seu proprio custo",
          notas: ["Elementos de roteiro", "Centros de custo", "Work centers", "Etapas de workflow", "Work centers"] },
        { concepto: "Catalogo de tipos de custo", detalle: "Salarios, depreciacoes, energia, aluguel... cada conceito identificado",
          notas: ["Elementos + estrutura", "Elementos de custo", "Cost categories", "", "Um valor unico"] },
        { concepto: "Arvore de custos por secao", detalle: "Diretos, indiretos e depreciacoes detalhados e somados por niveis",
          notas: ["Explosao por niveis", "Planejamento KP06", "Costing sheet", "", "Calculado fora"] },
        { concepto: "Horas anuais e capacidade", detalle: "Atividade planejada e capacidade instalada de cada secao, por exercicio",
          notas: ["KP26", "KP26", "Fora do sistema", "", ""] },
        { concepto: "Tarifa calculada, nao digitada", detalle: "Taxa /h = custo anual da secao ÷ horas anuais, com rastreabilidade",
          notas: ["KSPI", "KSPI", "Preco digitado", "Nao se aplica", "Preco digitado"] },
        { concepto: "Divisao fixo / variavel", detalle: "O fixo e dividido pela capacidade: a subutilizacao nao infla a tarifa",
          notas: ["Natureza do custo", "Indicador de preco 2", "Setup vs run time", "", ""] },
        { concepto: "Indiretos como percentual", detalle: "Despesas gerais aplicadas como % ou coeficiente sobre os diretos",
          notas: ["Nos PERCENTUAL", "Assessments", "Surcharge", "", "Manualmente na tarifa"] },
        { concepto: "Custo planejado ao lancar a ordem", detalle: "Tempos do roteiro × tarifa + estrutura de materiais, congelado na ordem",
          notas: ["Simulador de precos", "Cost estimate", "BOM calculation", "Orcamento", "MO Cost"] },
        { concepto: "Tempos reais por operario e fase", detalle: "Quem, quanto e em que secao, capturado na fabrica peca a peca",
          notas: ["Apontamento por codigo de barras", "Confirmacoes", "Job registration", "Timekeeping", "Shop floor"] },
        { concepto: "Reatualizacao em massa com simulacao", detalle: "Altere um fator e revalorize todas as tarifas vendo antes as variacoes",
          notas: ["CK40N com relatorio Δ%", "CK40N", "Costing versions", "", ""] },
        { concepto: "Fechamento com tarifa real", detalle: "Custo real ÷ horas reais no fechamento: desvio plano vs real por secao",
          notas: ["KSII", "KSII", "", "Somente por ordem", "Somente por ordem"] },
        { concepto: "Metais preciosos e quilates", detalle: "Ouro 999 a 375, prata, platina: teor, peso e valor no custo",
          notas: ["De serie desde 1990", "Desenvolvimento sob medida", "Desenvolvimento sob medida", "", "Modulos de terceiros"] },
        { concepto: "Perdas de fundicao", detalle: "Peso estimado vs real, arvores de fundicao, recuperacao de metal",
          notas: ["Fundicao integrada", "", "", "Casting trees", ""] },
        { concepto: "Implantacao pensada para oficinas", detalle: "Sem consultorias externas nem projetos de meses para comecar o custeio",
          notas: ["Montamos com voce", "Projeto de consultoria", "Parceiro necessario", "3-6 meses", "Depende do parceiro"] },
    ],
    leyenda: { si: "Incluido", parcial: "Parcial ou com configuracao", no: "Nao disponivel ou sob medida" },
    pie: "Elaboracao propria a partir da documentacao publica de cada fabricante (SAP CO, Microsoft Learn, Odoo Docs, PIRO). Cada produto evolui: se voce detectar uma imprecisao,",
    pieLink: "conte para a gente",
    cta1: "Os custos da sua oficina, calculados como no SAP.",
    cta2: "Explicados como entre joalheiros.",
    ctaBoton: "Ver uma demo do modulo de custos",
    sr: { concepto: "Conceito", si: "Sim", parcial: "Parcial", no: "Nao", tabla: "Comparativo de ERPs", glosario: "Terminologia de custos" },
};

const comparativaMap: Record<string, ComparativaTexts> = {
    es,
    en,
    fr,
    ca,
    "pt-br": ptBr,
};

export function getComparativaTexts(lang: string): ComparativaTexts {
    return comparativaMap[lang] || comparativaMap["es"];
}

/** Slug de contacto por idioma (espejo de pageSlugs.contacto en config/pages.ts). */
export const contactoSlugs: Record<Lang, string> = {
    es: "contacto",
    en: "contact",
    fr: "contact",
    ca: "contacte",
    "pt-br": "contato",
};

export function getContactoUrl(lang: string): string {
    const slug = contactoSlugs[lang as Lang] || contactoSlugs.es;
    return `/${lang}/${slug}`;
}
