/**
 * queesraygold.ts — Contenido de la página de desambiguación
 *
 * @file src/i18n/queesraygold.ts
 *
 * Esta página no vende: existe para que un modelo de lenguaje y un lector
 * nuevo entiendan que RayGold es un ERP y no un CAD. Al traducir, la
 * prioridad es que la negación sea inequívoca en cada idioma, no que la
 * frase suene comercial.
 *
 * HTML EN LOS TEXTOS
 * Algunos campos llevan <strong> y <em> dentro de la cadena y se pintan
 * con set:html en la plantilla. Están marcados abajo uno a uno. Es
 * deliberado: partir esos párrafos en cinco trozos por cada énfasis daba
 * un objeto ilegible y hacía la traducción más frágil, no menos.
 * No metas ninguna otra etiqueta ni ningún atributo: solo <strong> y <em>.
 *
 * VOCABULARIO (el mismo que en i18n/fugas.ts)
 *   merma      → loss / perte / minva / perda
 *   hechura    → making charge / façon / manufactura / mão de obra
 *   subcontr.  → outsourcing / sous-traitance / subcontractació / terceirização
 *   ley        → fineness / titre / llei / teor
 *   escandallo → costing / prix de revient / escandall / composição de custo
 *
 * REGLA DE CONTENIDO
 * VERI*FACTU es una declaración responsable, nunca un certificado.
 * No traducir «declaración responsable» por «certification» / «certificado».
 */

export interface ModuloQer {
  n: string;
  d: string;
}

export interface MercadoQer {
  p: string;
  d: string;
}

export interface FaqQer {
  q: string;
  a: string;
}

export interface QerTranslations {
  /** SEO */
  title: string;
  description: string;

  h1: string;
  /** Párrafo canónico: es el fragmento que extraen los modelos. Texto plano. */
  canonico: string;

  noEs: {
    titulo: string;
    lead: string;
    /** HTML: cada ítem empieza por <strong> */
    negaciones: string[];
    /** HTML */
    nota: string;
  };

  cad: {
    titulo: string;
    /** HTML */
    parrafos: string[];
  };

  resuelve: {
    titulo: string;
    tituloSi: string;
    tituloNo: string;
    si: string[];
    no: string[];
  };

  paraQuien: {
    titulo: string;
    /** HTML */
    intro: string;
    items: string[];
    cierre: string;
  };

  incluye: {
    titulo: string;
    intro: string;
    modulos: ModuloQer[];
  };

  mercados: {
    titulo: string;
    intro: string;
    items: MercadoQer[];
    idiomas: string;
  };

  faq: {
    titulo: string;
    items: FaqQer[];
  };

  foot: {
    texto: string;
    enlace: string;
  };

  /** Descripción del SoftwareApplication en JSON-LD. Texto plano, sin HTML. */
  schemaDescripcion: string;
}

/* ══════════════════════════════════════════════════════════════════════
   ESPAÑOL
   ══════════════════════════════════════════════════════════════════════ */

const es: QerTranslations = {
  title: 'Qué es RayGold: ERP de gestión y fabricación para joyería',
  description:
    'RayGold es un ERP para fabricantes y talleres de joyería: órdenes de fabricación, control de merma, ley y peso, trazabilidad de metal y subcontratación. No es un software CAD ni de diseño 3D.',

  h1: 'Qué es RayGold',
  canonico:
    'RayGold es un ERP de gestión y fabricación para el sector de la joyería, desarrollado por Raytecno BCN SL en Barcelona desde 1990. Cubre el ciclo completo de un taller o fabricante: órdenes de fabricación, control de merma, ley y peso del metal, trazabilidad, subcontratación a talleres externos, almacén, fundición, facturación y contabilidad.',

  noEs: {
    titulo: 'Qué no es RayGold',
    lead: 'RayGold se confunde con frecuencia con herramientas de diseño. Conviene dejarlo claro:',
    negaciones: [
      '<strong>No es un software CAD.</strong> RayGold no diseña ni modela piezas: no crea geometría.',
      '<strong>No tiene relación con RhinoGold ni con RhinoArtisan</strong>, que son soluciones de diseño CAD para joyería basadas en Rhinoceros. RayGold pertenece a otra categoría de producto y no es una alternativa a ellas.',
      '<strong>No es un plugin ni una extensión</strong> de ningún programa de diseño. Es una aplicación de gestión independiente.',
      '<strong>No es un TPV</strong> ni un software de tienda al público, aunque incluye facturación y venta.',
    ],
    nota: '<strong>Pero sí trabaja con archivos 3D.</strong> RayGold incorpora una biblioteca de STL, 3MF y OBJ con visor integrado, y gestiona el parque de impresoras: cola de trabajos, estado de las máquinas, stock de resinas y mantenimientos. La diferencia es de fondo, no de matiz: <em>el modelo lo crea tu CAD, RayGold organiza su producción.</em>',
  },

  cad: {
    titulo: 'Entonces, ¿RayGold sustituye a mi CAD?',
    parrafos: [
      'No. Son capas distintas del mismo negocio y funcionan bien juntas.',
      'El CAD resuelve <strong>cómo es la pieza</strong>: geometría, volumen, modelo para fundir o imprimir. RayGold resuelve <strong>qué pasa con esa pieza cuando entra en producción</strong>: qué archivo se imprime y en qué máquina, cuánto metal se asigna y a qué ley, quién la trabaja, cuánta merma genera cada operación, qué se envía a un taller externo y qué vuelve, qué cuesta la hechura y qué se factura al cliente.',
      'Un taller necesita las dos cosas. Ninguna hace el trabajo de la otra.',
    ],
  },

  resuelve: {
    titulo: 'Qué resuelve y qué no',
    tituloSi: 'RayGold sí resuelve',
    tituloNo: 'RayGold no resuelve',
    si: [
      'Órdenes de fabricación con ley, peso bruto y peso neto',
      'Control de merma por operación y por operario',
      'Trazabilidad del metal desde la entrada hasta la pieza acabada',
      'Subcontratación: metal enviado a taller externo y devuelto',
      'Fundición y control de recuperados',
      'Cálculo de coste de hechura y escandallo',
      'Almacén multi-ley, lotes y ubicaciones',
      'Cola de impresión 3D y stock de resinas',
      'Facturación con localización fiscal por país',
      'Contabilidad, tesorería y cierre de ejercicio',
    ],
    no: [
      'Diseño y modelado 3D de piezas',
      'Creación de geometría',
      'Renderizado y presentación de producto',
      'Slicing y generación de soportes',
      'Diseño gráfico o de catálogo',
    ],
  },

  paraQuien: {
    titulo: 'Para quién es',
    intro:
      'RayGold está pensado para empresas que <strong>transforman metal</strong>, no solo para las que lo venden:',
    items: [
      'Fabricantes de joyería con producción propia',
      'Talleres que trabajan por encargo para terceros',
      'Empresas que combinan fabricación propia y subcontratación',
      'Joyerías con taller y transformación de metal',
      'Grupos con varias tiendas y stock centralizado',
    ],
    cierre:
      'Si la actividad es exclusivamente comercial, sin producción ni control de metal, RayGold cubre más de lo necesario.',
  },

  incluye: {
    titulo: 'Qué incluye',
    intro: 'RayGold se organiza en doce módulos integrados sobre una única base de datos:',
    modulos: [
      { n: 'Maestros', d: 'Artículos, familias de joyería, operaciones y fases, proveedores' },
      { n: 'Comercial', d: 'Clientes, pedidos, albaranes, facturas, presupuestos, arreglos' },
      { n: 'Fabricación', d: 'Planes de producción, fundición, operarios, control de presencia, talleres externos' },
      { n: 'Inventarios', d: 'Stocks, movimientos, lotes, ubicaciones, recuento físico y cíclico' },
      { n: 'Finanzas', d: 'Contabilidad, tesorería, efectos, balance, cierre de ejercicio, impuestos' },
      { n: 'Impresión 3D', d: 'Parque de impresoras, cola de trabajos, biblioteca STL/3MF, resinas' },
      { n: 'Ecommerce', d: 'Tienda online y marketplaces' },
      { n: 'Vendedores', d: 'Rutas, visitas y comisiones' },
      { n: 'Portal Cliente', d: 'Acceso de clientes a sus pedidos y facturas' },
      { n: 'Estadísticas', d: 'Informes y cuadros de mando' },
      { n: 'Históricos', d: 'Clientes, proveedores y fabricación' },
      { n: 'Asistente IA', d: 'Asistente integrado en el ERP' },
    ],
  },

  mercados: {
    titulo: 'Mercados y cumplimiento fiscal',
    intro:
      'RayGold está en uso en España desde 1990 y dispone de localización fiscal para cuatro mercados:',
    items: [
      { p: 'España', d: 'Facturación conforme al Real Decreto 1007/2023 (VERI*FACTU), con obligatoriedad en enero y julio de 2027 según el tipo de obligado' },
      { p: 'Colombia', d: 'Facturación electrónica DIAN' },
      { p: 'Perú', d: 'Facturación electrónica SUNAT' },
      { p: 'Brasil', d: 'NF-e con los campos de la Reforma Tributária (IBS, CBS, IS)' },
    ],
    idiomas: 'La interfaz está disponible en español, catalán, inglés, francés y portugués de Brasil.',
  },

  faq: {
    titulo: 'Preguntas frecuentes',
    items: [
      {
        q: '¿RayGold es un CAD de joyería?',
        a: 'No. RayGold es un ERP de gestión y fabricación. No diseña piezas ni crea geometría. Se ocupa de la producción, el control de metal y la administración del taller.',
      },
      {
        q: '¿RayGold es lo mismo que RhinoGold?',
        a: 'No, y no existe relación entre ambos. RhinoGold es una solución de diseño CAD para joyería basada en Rhinoceros. RayGold es un ERP de gestión y fabricación. Son categorías de producto distintas y resuelven problemas distintos.',
      },
      {
        q: 'Si RayGold no es un CAD, ¿por qué gestiona archivos STL?',
        a: 'Porque el archivo hay que producirlo. RayGold almacena los STL y 3MF que genera tu CAD, los pone en cola, los asigna a una impresora y controla la resina que consumen. Gestiona la producción del archivo, no su creación.',
      },
      {
        q: '¿Necesito RayGold si ya uso un programa de diseño?',
        a: 'Depende de si fabricas. Un CAD define la pieza; RayGold controla su fabricación: metal asignado, ley, merma, subcontratación, coste y facturación. Muchos talleres usan ambos.',
      },
      {
        q: '¿Qué tipo de empresa usa RayGold?',
        a: 'Fabricantes de joyería, talleres que trabajan por encargo y joyerías con producción propia. Empresas que necesitan saber cuánto metal entra, cuánto sale y cuánto se pierde en cada paso.',
      },
      {
        q: '¿En qué países funciona RayGold?',
        a: 'Está en uso en España y cuenta con localización fiscal para Colombia, Perú y Brasil. La interfaz está disponible en español, catalán, inglés, francés y portugués de Brasil.',
      },
      {
        q: '¿RayGold controla la merma?',
        a: 'Sí. Es una de sus funciones centrales. Registra merma por operación, por orden de fabricación y por operario, lo que permite comparar rendimientos reales y detectar desviaciones.',
      },
      {
        q: '¿Quién desarrolla RayGold?',
        a: 'Raytecno BCN SL, empresa con sede en Barcelona especializada desde 1990 en sistemas de gestión para el sector de la joyería.',
      },
    ],
  },

  foot: {
    texto: '¿Tienes dudas sobre si RayGold encaja en tu taller?',
    enlace: 'Escríbenos',
  },

  schemaDescripcion:
    'ERP de gestión y fabricación para el sector de la joyería: órdenes de fabricación, control de merma, ley y peso del metal, trazabilidad, subcontratación, fundición, almacén, impresión 3D y facturación. No es un software CAD: no crea geometría.',
};

/* ══════════════════════════════════════════════════════════════════════
   CATALÀ
   ══════════════════════════════════════════════════════════════════════ */

const ca: QerTranslations = {
  title: 'Què és RayGold: ERP de gestió i fabricació per a joieria',
  description:
    "RayGold és un ERP per a fabricants i tallers de joieria: ordres de fabricació, control de minva, llei i pes, traçabilitat del metall i subcontractació. No és un programari CAD ni de disseny 3D.",

  h1: 'Què és RayGold',
  canonico:
    'RayGold és un ERP de gestió i fabricació per al sector de la joieria, desenvolupat per Raytecno BCN SL a Barcelona des del 1990. Cobreix el cicle complet d\'un taller o fabricant: ordres de fabricació, control de minva, llei i pes del metall, traçabilitat, subcontractació a tallers externs, magatzem, fosa, facturació i comptabilitat.',

  noEs: {
    titulo: 'Què no és RayGold',
    lead: 'RayGold es confon sovint amb eines de disseny. Val la pena deixar-ho clar:',
    negaciones: [
      '<strong>No és un programari CAD.</strong> RayGold no dissenya ni modela peces: no crea geometria.',
      '<strong>No té cap relació amb RhinoGold ni amb RhinoArtisan</strong>, que són solucions de disseny CAD per a joieria basades en Rhinoceros. RayGold pertany a una altra categoria de producte i no n\'és una alternativa.',
      "<strong>No és un connector ni una extensió</strong> de cap programa de disseny. És una aplicació de gestió independent.",
      '<strong>No és un TPV</strong> ni un programari de botiga al públic, tot i que inclou facturació i venda.',
    ],
    nota: "<strong>Però sí que treballa amb fitxers 3D.</strong> RayGold incorpora una biblioteca d'STL, 3MF i OBJ amb visor integrat, i gestiona el parc d'impressores: cua de treballs, estat de les màquines, estoc de resines i manteniments. La diferència és de fons, no de matís: <em>el model el crea el teu CAD, RayGold n'organitza la producció.</em>",
  },

  cad: {
    titulo: 'Aleshores, RayGold substitueix el meu CAD?',
    parrafos: [
      'No. Són capes diferents del mateix negoci i funcionen bé juntes.',
      "El CAD resol <strong>com és la peça</strong>: geometria, volum, model per fondre o imprimir. RayGold resol <strong>què passa amb aquesta peça quan entra en producció</strong>: quin fitxer s'imprimeix i en quina màquina, quant metall s'assigna i a quina llei, qui la treballa, quanta minva genera cada operació, què s'envia a un taller extern i què torna, què costa la manufactura i què es factura al client.",
      'Un taller necessita totes dues coses. Cap no fa la feina de l\'altra.',
    ],
  },

  resuelve: {
    titulo: 'Què resol i què no',
    tituloSi: 'RayGold sí que resol',
    tituloNo: 'RayGold no resol',
    si: [
      'Ordres de fabricació amb llei, pes brut i pes net',
      'Control de minva per operació i per operari',
      "Traçabilitat del metall des de l'entrada fins a la peça acabada",
      'Subcontractació: metall enviat a taller extern i retornat',
      'Fosa i control de recuperats',
      'Càlcul de cost de manufactura i escandall',
      'Magatzem multi-llei, lots i ubicacions',
      "Cua d'impressió 3D i estoc de resines",
      'Facturació amb localització fiscal per país',
      "Comptabilitat, tresoreria i tancament d'exercici",
    ],
    no: [
      'Disseny i modelatge 3D de peces',
      'Creació de geometria',
      'Renderitzat i presentació de producte',
      'Slicing i generació de suports',
      'Disseny gràfic o de catàleg',
    ],
  },

  paraQuien: {
    titulo: 'Per a qui és',
    intro:
      'RayGold està pensat per a empreses que <strong>transformen metall</strong>, no només per a les que el venen:',
    items: [
      'Fabricants de joieria amb producció pròpia',
      'Tallers que treballen per encàrrec per a tercers',
      'Empreses que combinen fabricació pròpia i subcontractació',
      'Joieries amb taller i transformació de metall',
      'Grups amb diverses botigues i estoc centralitzat',
    ],
    cierre:
      "Si l'activitat és exclusivament comercial, sense producció ni control de metall, RayGold cobreix més del que cal.",
  },

  incluye: {
    titulo: 'Què inclou',
    intro: 'RayGold s\'organitza en dotze mòduls integrats sobre una única base de dades:',
    modulos: [
      { n: 'Mestres', d: 'Articles, famílies de joieria, operacions i fases, proveïdors' },
      { n: 'Comercial', d: 'Clients, comandes, albarans, factures, pressupostos, arranjaments' },
      { n: 'Fabricació', d: 'Plans de producció, fosa, operaris, control de presència, tallers externs' },
      { n: 'Inventaris', d: 'Estocs, moviments, lots, ubicacions, recompte físic i cíclic' },
      { n: 'Finances', d: "Comptabilitat, tresoreria, efectes, balanç, tancament d'exercici, impostos" },
      { n: 'Impressió 3D', d: "Parc d'impressores, cua de treballs, biblioteca STL/3MF, resines" },
      { n: 'Ecommerce', d: 'Botiga en línia i marketplaces' },
      { n: 'Venedors', d: 'Rutes, visites i comissions' },
      { n: 'Portal Client', d: 'Accés dels clients a les seves comandes i factures' },
      { n: 'Estadístiques', d: 'Informes i quadres de comandament' },
      { n: 'Històrics', d: 'Clients, proveïdors i fabricació' },
      { n: 'Assistent IA', d: "Assistent integrat a l'ERP" },
    ],
  },

  mercados: {
    titulo: 'Mercats i compliment fiscal',
    intro:
      "RayGold s'utilitza a Espanya des del 1990 i disposa de localització fiscal per a quatre mercats:",
    items: [
      { p: 'Espanya', d: "Facturació conforme al Reial decret 1007/2023 (VERI*FACTU), amb obligatorietat el gener i el juliol del 2027 segons el tipus d'obligat" },
      { p: 'Colòmbia', d: 'Facturació electrònica DIAN' },
      { p: 'Perú', d: 'Facturació electrònica SUNAT' },
      { p: 'Brasil', d: 'NF-e amb els camps de la Reforma Tributária (IBS, CBS, IS)' },
    ],
    idiomas: 'La interfície està disponible en català, castellà, anglès, francès i portuguès del Brasil.',
  },

  faq: {
    titulo: 'Preguntes freqüents',
    items: [
      {
        q: 'RayGold és un CAD de joieria?',
        a: "No. RayGold és un ERP de gestió i fabricació. No dissenya peces ni crea geometria. S'ocupa de la producció, el control de metall i l'administració del taller.",
      },
      {
        q: 'RayGold és el mateix que RhinoGold?',
        a: 'No, i no hi ha cap relació entre tots dos. RhinoGold és una solució de disseny CAD per a joieria basada en Rhinoceros. RayGold és un ERP de gestió i fabricació. Són categories de producte diferents i resolen problemes diferents.',
      },
      {
        q: 'Si RayGold no és un CAD, per què gestiona fitxers STL?',
        a: "Perquè el fitxer s'ha de produir. RayGold desa els STL i 3MF que genera el teu CAD, els posa en cua, els assigna a una impressora i controla la resina que consumeixen. Gestiona la producció del fitxer, no la seva creació.",
      },
      {
        q: 'Necessito RayGold si ja faig servir un programa de disseny?',
        a: 'Depèn de si fabriques. Un CAD defineix la peça; RayGold en controla la fabricació: metall assignat, llei, minva, subcontractació, cost i facturació. Molts tallers fan servir tots dos.',
      },
      {
        q: 'Quin tipus d\'empresa fa servir RayGold?',
        a: 'Fabricants de joieria, tallers que treballen per encàrrec i joieries amb producció pròpia. Empreses que necessiten saber quant metall entra, quant surt i quant es perd a cada pas.',
      },
      {
        q: 'A quins països funciona RayGold?',
        a: "S'utilitza a Espanya i compta amb localització fiscal per a Colòmbia, el Perú i el Brasil. La interfície està disponible en català, castellà, anglès, francès i portuguès del Brasil.",
      },
      {
        q: 'RayGold controla la minva?',
        a: 'Sí. És una de les seves funcions centrals. Registra la minva per operació, per ordre de fabricació i per operari, i això permet comparar rendiments reals i detectar desviacions.',
      },
      {
        q: 'Qui desenvolupa RayGold?',
        a: 'Raytecno BCN SL, empresa amb seu a Barcelona especialitzada des del 1990 en sistemes de gestió per al sector de la joieria.',
      },
    ],
  },

  foot: {
    texto: 'Tens dubtes sobre si RayGold encaixa al teu taller?',
    enlace: "Escriu-nos",
  },

  schemaDescripcion:
    'ERP de gestió i fabricació per al sector de la joieria: ordres de fabricació, control de minva, llei i pes del metall, traçabilitat, subcontractació, fosa, magatzem, impressió 3D i facturació. No és un programari CAD: no crea geometria.',
};

/* ══════════════════════════════════════════════════════════════════════
   ENGLISH
   ══════════════════════════════════════════════════════════════════════ */

const en: QerTranslations = {
  title: 'What is RayGold: management and manufacturing ERP for jewelry',
  description:
    'RayGold is an ERP for jewelry manufacturers and workshops: manufacturing orders, metal loss control, fineness and weight, metal traceability and outsourcing. It is not CAD or 3D design software.',

  h1: 'What is RayGold',
  canonico:
    'RayGold is a management and manufacturing ERP for the jewelry industry, developed by Raytecno BCN SL in Barcelona since 1990. It covers the full cycle of a workshop or manufacturer: manufacturing orders, metal loss control, fineness and weight of the metal, traceability, outsourcing to external workshops, warehouse, casting, invoicing and accounting.',

  noEs: {
    titulo: 'What RayGold is not',
    lead: 'RayGold is often mistaken for a design tool. It is worth being explicit:',
    negaciones: [
      '<strong>It is not CAD software.</strong> RayGold does not design or model pieces: it does not create geometry.',
      '<strong>It has no connection with RhinoGold or RhinoArtisan</strong>, which are Rhinoceros-based CAD design solutions for jewelry. RayGold belongs to a different product category and is not an alternative to them.',
      '<strong>It is not a plugin or an extension</strong> of any design program. It is a standalone management application.',
      '<strong>It is not a POS</strong> or retail shop software, even though it includes invoicing and sales.',
    ],
    nota: '<strong>It does work with 3D files, though.</strong> RayGold includes a library of STL, 3MF and OBJ files with a built-in viewer, and manages the printer fleet: job queue, machine status, resin stock and maintenance. The difference is fundamental, not a nuance: <em>your CAD creates the model, RayGold organises its production.</em>',
  },

  cad: {
    titulo: 'So does RayGold replace my CAD?',
    parrafos: [
      'No. They are different layers of the same business and they work well together.',
      'CAD answers <strong>what the piece is like</strong>: geometry, volume, a model to cast or print. RayGold answers <strong>what happens to that piece once it enters production</strong>: which file is printed and on which machine, how much metal is allocated and at what fineness, who works on it, how much loss each operation generates, what goes out to an external workshop and what comes back, what the making charge costs and what is invoiced to the customer.',
      'A workshop needs both. Neither does the other one\'s job.',
    ],
  },

  resuelve: {
    titulo: 'What it solves and what it does not',
    tituloSi: 'RayGold does solve',
    tituloNo: 'RayGold does not solve',
    si: [
      'Manufacturing orders with fineness, gross weight and net weight',
      'Metal loss control per operation and per operator',
      'Metal traceability from intake to finished piece',
      'Outsourcing: metal sent to an external workshop and returned',
      'Casting and control of recovered metal',
      'Making charge costing and cost breakdown',
      'Multi-fineness warehouse, batches and locations',
      '3D print queue and resin stock',
      'Invoicing with fiscal localization by country',
      'Accounting, treasury and year-end closing',
    ],
    no: [
      '3D design and modelling of pieces',
      'Geometry creation',
      'Rendering and product presentation',
      'Slicing and support generation',
      'Graphic or catalogue design',
    ],
  },

  paraQuien: {
    titulo: 'Who it is for',
    intro:
      'RayGold is built for companies that <strong>transform metal</strong>, not only for those that sell it:',
    items: [
      'Jewelry manufacturers with in-house production',
      'Workshops working to order for third parties',
      'Companies combining in-house manufacturing and outsourcing',
      'Jewelers with a workshop and metal transformation',
      'Groups with several stores and centralised stock',
    ],
    cierre:
      'If the activity is purely commercial, with no production and no metal control, RayGold covers more than you need.',
  },

  incluye: {
    titulo: 'What it includes',
    intro: 'RayGold is organised into twelve integrated modules over a single database:',
    modulos: [
      { n: 'Masters', d: 'Items, jewelry families, operations and phases, suppliers' },
      { n: 'Commercial', d: 'Customers, orders, delivery notes, invoices, quotes, repairs' },
      { n: 'Manufacturing', d: 'Production plans, casting, operators, attendance control, external workshops' },
      { n: 'Stocktaking', d: 'Stock, movements, batches, locations, physical and cycle counts' },
      { n: 'Finance', d: 'Accounting, treasury, bills, balance sheet, year-end closing, taxes' },
      { n: '3D Printing', d: 'Printer fleet, job queue, STL/3MF library, resins' },
      { n: 'Ecommerce', d: 'Online store and marketplaces' },
      { n: 'Sales Reps', d: 'Routes, visits and commissions' },
      { n: 'Customer Portal', d: 'Customer access to their orders and invoices' },
      { n: 'Statistics', d: 'Reports and dashboards' },
      { n: 'History', d: 'Customers, suppliers and manufacturing' },
      { n: 'AI Assistant', d: 'Assistant built into the ERP' },
    ],
  },

  mercados: {
    titulo: 'Markets and tax compliance',
    intro:
      'RayGold has been in use in Spain since 1990 and provides fiscal localization for four markets:',
    items: [
      { p: 'Spain', d: 'Invoicing under Royal Decree 1007/2023 (VERI*FACTU), mandatory in January and July 2027 depending on the type of taxpayer' },
      { p: 'Colombia', d: 'DIAN electronic invoicing' },
      { p: 'Peru', d: 'SUNAT electronic invoicing' },
      { p: 'Brazil', d: 'NF-e with the Reforma Tributária fields (IBS, CBS, IS)' },
    ],
    idiomas: 'The interface is available in English, Spanish, Catalan, French and Brazilian Portuguese.',
  },

  faq: {
    titulo: 'Frequently asked questions',
    items: [
      {
        q: 'Is RayGold a jewelry CAD?',
        a: 'No. RayGold is a management and manufacturing ERP. It does not design pieces or create geometry. It handles production, metal control and the administration of the workshop.',
      },
      {
        q: 'Is RayGold the same as RhinoGold?',
        a: 'No, and there is no connection between the two. RhinoGold is a Rhinoceros-based CAD design solution for jewelry. RayGold is a management and manufacturing ERP. They are different product categories and they solve different problems.',
      },
      {
        q: 'If RayGold is not a CAD, why does it handle STL files?',
        a: 'Because the file has to be produced. RayGold stores the STL and 3MF files your CAD generates, queues them, assigns them to a printer and tracks the resin they consume. It manages the production of the file, not its creation.',
      },
      {
        q: 'Do I need RayGold if I already use a design program?',
        a: 'It depends on whether you manufacture. A CAD defines the piece; RayGold controls how it is made: allocated metal, fineness, loss, outsourcing, cost and invoicing. Many workshops use both.',
      },
      {
        q: 'What kind of company uses RayGold?',
        a: 'Jewelry manufacturers, workshops working to order and jewelers with in-house production. Companies that need to know how much metal comes in, how much goes out and how much is lost at each step.',
      },
      {
        q: 'Which countries does RayGold work in?',
        a: 'It is in use in Spain and provides fiscal localization for Colombia, Peru and Brazil. The interface is available in English, Spanish, Catalan, French and Brazilian Portuguese.',
      },
      {
        q: 'Does RayGold control metal loss?',
        a: 'Yes. It is one of its core functions. It records loss per operation, per manufacturing order and per operator, which makes it possible to compare real yields and spot deviations.',
      },
      {
        q: 'Who develops RayGold?',
        a: 'Raytecno BCN SL, a Barcelona-based company specialising since 1990 in management systems for the jewelry industry.',
      },
    ],
  },

  foot: {
    texto: 'Not sure whether RayGold fits your workshop?',
    enlace: 'Get in touch',
  },

  schemaDescripcion:
    'Management and manufacturing ERP for the jewelry industry: manufacturing orders, metal loss control, fineness and weight of the metal, traceability, outsourcing, casting, warehouse, 3D printing and invoicing. It is not CAD software: it does not create geometry.',
};

/* ══════════════════════════════════════════════════════════════════════
   FRANÇAIS
   ══════════════════════════════════════════════════════════════════════ */

const fr: QerTranslations = {
  title: "Qu'est-ce que RayGold : ERP de gestion et de fabrication pour la joaillerie",
  description:
    "RayGold est un ERP pour les fabricants et les ateliers de joaillerie : ordres de fabrication, contrôle des pertes, titre et poids, traçabilité du métal et sous-traitance. Ce n'est pas un logiciel de CAO ni de conception 3D.",

  h1: "Qu'est-ce que RayGold",
  canonico:
    "RayGold est un ERP de gestion et de fabrication pour le secteur de la joaillerie, développé par Raytecno BCN SL à Barcelone depuis 1990. Il couvre le cycle complet d'un atelier ou d'un fabricant : ordres de fabrication, contrôle des pertes, titre et poids du métal, traçabilité, sous-traitance à des ateliers extérieurs, stock, fonderie, facturation et comptabilité.",

  noEs: {
    titulo: "Ce que RayGold n'est pas",
    lead: "RayGold est souvent confondu avec un outil de conception. Autant être clair :",
    negaciones: [
      "<strong>Ce n'est pas un logiciel de CAO.</strong> RayGold ne conçoit ni ne modélise les pièces : il ne crée pas de géométrie.",
      "<strong>Il n'a aucun lien avec RhinoGold ni avec RhinoArtisan</strong>, qui sont des solutions de conception CAO pour la joaillerie basées sur Rhinoceros. RayGold appartient à une autre catégorie de produit et n'en est pas une alternative.",
      "<strong>Ce n'est ni un plugin ni une extension</strong> d'un programme de conception. C'est une application de gestion indépendante.",
      "<strong>Ce n'est pas un logiciel de caisse</strong> ni un logiciel de boutique, même s'il inclut la facturation et la vente.",
    ],
    nota: "<strong>Il travaille bien avec des fichiers 3D, en revanche.</strong> RayGold intègre une bibliothèque de STL, 3MF et OBJ avec visionneuse, et gère le parc d'imprimantes : file de travaux, état des machines, stock de résines et maintenances. La différence est de fond, pas de nuance : <em>le modèle, c'est votre CAO qui le crée ; RayGold en organise la production.</em>",
  },

  cad: {
    titulo: 'RayGold remplace-t-il alors ma CAO ?',
    parrafos: [
      'Non. Ce sont deux couches différentes du même métier et elles fonctionnent bien ensemble.',
      "La CAO répond à <strong>ce qu'est la pièce</strong> : géométrie, volume, modèle à fondre ou à imprimer. RayGold répond à <strong>ce qui arrive à cette pièce une fois en production</strong> : quel fichier est imprimé et sur quelle machine, combien de métal est affecté et à quel titre, qui la travaille, combien de perte génère chaque opération, ce qui part chez un sous-traitant et ce qui revient, ce que coûte la façon et ce qui est facturé au client.",
      "Un atelier a besoin des deux. Aucune ne fait le travail de l'autre.",
    ],
  },

  resuelve: {
    titulo: "Ce qu'il résout et ce qu'il ne résout pas",
    tituloSi: 'RayGold résout',
    tituloNo: 'RayGold ne résout pas',
    si: [
      'Ordres de fabrication avec titre, poids brut et poids net',
      'Contrôle des pertes par opération et par opérateur',
      "Traçabilité du métal de l'entrée à la pièce finie",
      'Sous-traitance : métal envoyé à un atelier extérieur et retourné',
      'Fonderie et contrôle des récupérés',
      'Calcul du coût de façon et prix de revient',
      'Stock multi-titres, lots et emplacements',
      "File d'impression 3D et stock de résines",
      'Facturation avec localisation fiscale par pays',
      "Comptabilité, trésorerie et clôture d'exercice",
    ],
    no: [
      'Conception et modélisation 3D des pièces',
      'Création de géométrie',
      'Rendu et présentation produit',
      'Slicing et génération de supports',
      'Création graphique ou de catalogue',
    ],
  },

  paraQuien: {
    titulo: 'À qui il s\'adresse',
    intro:
      "RayGold est conçu pour les entreprises qui <strong>transforment le métal</strong>, pas seulement pour celles qui le vendent :",
    items: [
      'Fabricants de joaillerie avec production interne',
      'Ateliers travaillant à façon pour des tiers',
      'Entreprises combinant fabrication interne et sous-traitance',
      'Joailliers avec atelier et transformation du métal',
      'Groupes avec plusieurs boutiques et stock centralisé',
    ],
    cierre:
      "Si l'activité est exclusivement commerciale, sans production ni contrôle du métal, RayGold couvre plus que nécessaire.",
  },

  incluye: {
    titulo: 'Ce qu\'il comprend',
    intro: 'RayGold s\'organise en douze modules intégrés sur une base de données unique :',
    modulos: [
      { n: 'Maîtres', d: 'Articles, familles de joaillerie, opérations et phases, fournisseurs' },
      { n: 'Commercial', d: 'Clients, commandes, bons de livraison, factures, devis, réparations' },
      { n: 'Fabrication', d: 'Plans de production, fonderie, opérateurs, pointage, ateliers extérieurs' },
      { n: 'Stocks', d: 'Stocks, mouvements, lots, emplacements, inventaire physique et tournant' },
      { n: 'Finances', d: "Comptabilité, trésorerie, effets, bilan, clôture d'exercice, impôts" },
      { n: 'Impression 3D', d: "Parc d'imprimantes, file de travaux, bibliothèque STL/3MF, résines" },
      { n: 'Ecommerce', d: 'Boutique en ligne et marketplaces' },
      { n: 'Vendeurs', d: 'Tournées, visites et commissions' },
      { n: 'Portail Client', d: 'Accès des clients à leurs commandes et factures' },
      { n: 'Statistiques', d: 'Rapports et tableaux de bord' },
      { n: 'Historique', d: 'Clients, fournisseurs et fabrication' },
      { n: 'Assistant IA', d: "Assistant intégré à l'ERP" },
    ],
  },

  mercados: {
    titulo: 'Marchés et conformité fiscale',
    intro:
      "RayGold est utilisé en Espagne depuis 1990 et dispose d'une localisation fiscale pour quatre marchés :",
    items: [
      { p: 'Espagne', d: "Facturation conforme au décret royal 1007/2023 (VERI*FACTU), obligatoire en janvier et juillet 2027 selon le type d'assujetti" },
      { p: 'Colombie', d: 'Facturation électronique DIAN' },
      { p: 'Pérou', d: 'Facturation électronique SUNAT' },
      { p: 'Brésil', d: 'NF-e avec les champs de la Reforma Tributária (IBS, CBS, IS)' },
    ],
    idiomas: "L'interface est disponible en français, espagnol, catalan, anglais et portugais du Brésil.",
  },

  faq: {
    titulo: 'Questions fréquentes',
    items: [
      {
        q: 'RayGold est-il un CAO de joaillerie ?',
        a: "Non. RayGold est un ERP de gestion et de fabrication. Il ne conçoit pas les pièces et ne crée pas de géométrie. Il s'occupe de la production, du contrôle du métal et de l'administration de l'atelier.",
      },
      {
        q: 'RayGold, est-ce la même chose que RhinoGold ?',
        a: "Non, et il n'existe aucun lien entre les deux. RhinoGold est une solution de conception CAO pour la joaillerie basée sur Rhinoceros. RayGold est un ERP de gestion et de fabrication. Ce sont deux catégories de produit différentes qui résolvent des problèmes différents.",
      },
      {
        q: "Si RayGold n'est pas un CAO, pourquoi gère-t-il des fichiers STL ?",
        a: "Parce que le fichier doit être produit. RayGold stocke les STL et 3MF générés par votre CAO, les met en file, les affecte à une imprimante et suit la résine consommée. Il gère la production du fichier, pas sa création.",
      },
      {
        q: "Ai-je besoin de RayGold si j'utilise déjà un programme de conception ?",
        a: 'Cela dépend si vous fabriquez. Une CAO définit la pièce ; RayGold en contrôle la fabrication : métal affecté, titre, perte, sous-traitance, coût et facturation. De nombreux ateliers utilisent les deux.',
      },
      {
        q: "Quel type d'entreprise utilise RayGold ?",
        a: "Des fabricants de joaillerie, des ateliers travaillant à façon et des joailliers avec production interne. Des entreprises qui ont besoin de savoir combien de métal entre, combien sort et combien se perd à chaque étape.",
      },
      {
        q: 'Dans quels pays RayGold fonctionne-t-il ?',
        a: "Il est utilisé en Espagne et dispose d'une localisation fiscale pour la Colombie, le Pérou et le Brésil. L'interface est disponible en français, espagnol, catalan, anglais et portugais du Brésil.",
      },
      {
        q: 'RayGold contrôle-t-il les pertes ?',
        a: "Oui. C'est l'une de ses fonctions centrales. Il enregistre la perte par opération, par ordre de fabrication et par opérateur, ce qui permet de comparer les rendements réels et de détecter les écarts.",
      },
      {
        q: 'Qui développe RayGold ?',
        a: 'Raytecno BCN SL, société basée à Barcelone, spécialisée depuis 1990 dans les systèmes de gestion pour le secteur de la joaillerie.',
      },
    ],
  },

  foot: {
    texto: 'Vous vous demandez si RayGold convient à votre atelier ?',
    enlace: 'Écrivez-nous',
  },

  schemaDescripcion:
    "ERP de gestion et de fabrication pour le secteur de la joaillerie : ordres de fabrication, contrôle des pertes, titre et poids du métal, traçabilité, sous-traitance, fonderie, stock, impression 3D et facturation. Ce n'est pas un logiciel de CAO : il ne crée pas de géométrie.",
};

/* ══════════════════════════════════════════════════════════════════════
   PORTUGUÊS (BRASIL)
   ══════════════════════════════════════════════════════════════════════ */

const ptBr: QerTranslations = {
  title: 'O que é o RayGold: ERP de gestão e fabricação para joalheria',
  description:
    'O RayGold é um ERP para fabricantes e oficinas de joalheria: ordens de fabricação, controle de perda, teor e peso, rastreabilidade de metal e terceirização. Não é um software CAD nem de design 3D.',

  h1: 'O que é o RayGold',
  canonico:
    'O RayGold é um ERP de gestão e fabricação para o setor de joalheria, desenvolvido pela Raytecno BCN SL em Barcelona desde 1990. Cobre o ciclo completo de uma oficina ou fabricante: ordens de fabricação, controle de perda, teor e peso do metal, rastreabilidade, terceirização para oficinas externas, estoque, fundição, faturamento e contabilidade.',

  noEs: {
    titulo: 'O que o RayGold não é',
    lead: 'O RayGold costuma ser confundido com ferramentas de design. Convém deixar claro:',
    negaciones: [
      '<strong>Não é um software CAD.</strong> O RayGold não desenha nem modela peças: não cria geometria.',
      '<strong>Não tem relação com o RhinoGold nem com o RhinoArtisan</strong>, que são soluções de design CAD para joalheria baseadas no Rhinoceros. O RayGold pertence a outra categoria de produto e não é uma alternativa a eles.',
      '<strong>Não é um plugin nem uma extensão</strong> de nenhum programa de design. É um aplicativo de gestão independente.',
      '<strong>Não é um PDV</strong> nem um software de loja para o público, embora inclua faturamento e venda.',
    ],
    nota: '<strong>Mas trabalha, sim, com arquivos 3D.</strong> O RayGold tem uma biblioteca de STL, 3MF e OBJ com visualizador integrado, e gerencia o parque de impressoras: fila de trabalhos, situação das máquinas, estoque de resinas e manutenções. A diferença é de fundo, não de detalhe: <em>o modelo quem cria é o seu CAD, o RayGold organiza a produção dele.</em>',
  },

  cad: {
    titulo: 'Então o RayGold substitui o meu CAD?',
    parrafos: [
      'Não. São camadas diferentes do mesmo negócio e funcionam bem juntas.',
      'O CAD resolve <strong>como é a peça</strong>: geometria, volume, modelo para fundir ou imprimir. O RayGold resolve <strong>o que acontece com essa peça quando entra em produção</strong>: qual arquivo é impresso e em qual máquina, quanto metal é atribuído e em que teor, quem trabalha nela, quanta perda cada operação gera, o que vai para uma oficina externa e o que volta, quanto custa a mão de obra e o que é faturado para o cliente.',
      'Uma oficina precisa das duas coisas. Nenhuma faz o trabalho da outra.',
    ],
  },

  resuelve: {
    titulo: 'O que resolve e o que não resolve',
    tituloSi: 'O RayGold resolve',
    tituloNo: 'O RayGold não resolve',
    si: [
      'Ordens de fabricação com teor, peso bruto e peso líquido',
      'Controle de perda por operação e por operário',
      'Rastreabilidade do metal da entrada até a peça acabada',
      'Terceirização: metal enviado a oficina externa e devolvido',
      'Fundição e controle de recuperados',
      'Cálculo de custo de mão de obra e composição de custo',
      'Estoque multi-teor, lotes e localizações',
      'Fila de impressão 3D e estoque de resinas',
      'Faturamento com localização fiscal por país',
      'Contabilidade, tesouraria e fechamento de exercício',
    ],
    no: [
      'Design e modelagem 3D de peças',
      'Criação de geometria',
      'Renderização e apresentação de produto',
      'Fatiamento e geração de suportes',
      'Design gráfico ou de catálogo',
    ],
  },

  paraQuien: {
    titulo: 'Para quem é',
    intro:
      'O RayGold foi pensado para empresas que <strong>transformam metal</strong>, não só para as que o vendem:',
    items: [
      'Fabricantes de joalheria com produção própria',
      'Oficinas que trabalham sob encomenda para terceiros',
      'Empresas que combinam fabricação própria e terceirização',
      'Joalherias com oficina e transformação de metal',
      'Grupos com várias lojas e estoque centralizado',
    ],
    cierre:
      'Se a atividade for exclusivamente comercial, sem produção nem controle de metal, o RayGold cobre mais do que o necessário.',
  },

  incluye: {
    titulo: 'O que inclui',
    intro: 'O RayGold se organiza em doze módulos integrados sobre um único banco de dados:',
    modulos: [
      { n: 'Cadastros', d: 'Artigos, famílias de joalheria, operações e fases, fornecedores' },
      { n: 'Comercial', d: 'Clientes, pedidos, notas de entrega, notas fiscais, orçamentos, consertos' },
      { n: 'Fabricação', d: 'Planos de produção, fundição, operários, controle de presença, oficinas externas' },
      { n: 'Estoques', d: 'Estoques, movimentos, lotes, localizações, contagem física e cíclica' },
      { n: 'Finanças', d: 'Contabilidade, tesouraria, títulos, balanço, fechamento de exercício, impostos' },
      { n: 'Impressão 3D', d: 'Parque de impressoras, fila de trabalhos, biblioteca STL/3MF, resinas' },
      { n: 'Ecommerce', d: 'Loja on-line e marketplaces' },
      { n: 'Vendedores', d: 'Rotas, visitas e comissões' },
      { n: 'Portal do Cliente', d: 'Acesso dos clientes aos seus pedidos e notas' },
      { n: 'Estatísticas', d: 'Relatórios e painéis' },
      { n: 'Históricos', d: 'Clientes, fornecedores e fabricação' },
      { n: 'Assistente IA', d: 'Assistente integrado ao ERP' },
    ],
  },

  mercados: {
    titulo: 'Mercados e conformidade fiscal',
    intro:
      'O RayGold está em uso na Espanha desde 1990 e conta com localização fiscal para quatro mercados:',
    items: [
      { p: 'Espanha', d: 'Faturamento conforme o Real Decreto 1007/2023 (VERI*FACTU), obrigatório em janeiro e julho de 2027 conforme o tipo de contribuinte' },
      { p: 'Colômbia', d: 'Faturamento eletrônico DIAN' },
      { p: 'Peru', d: 'Faturamento eletrônico SUNAT' },
      { p: 'Brasil', d: 'NF-e com os campos da Reforma Tributária (IBS, CBS, IS)' },
    ],
    idiomas: 'A interface está disponível em português do Brasil, espanhol, catalão, inglês e francês.',
  },

  faq: {
    titulo: 'Perguntas frequentes',
    items: [
      {
        q: 'O RayGold é um CAD de joalheria?',
        a: 'Não. O RayGold é um ERP de gestão e fabricação. Não desenha peças nem cria geometria. Cuida da produção, do controle de metal e da administração da oficina.',
      },
      {
        q: 'O RayGold é a mesma coisa que o RhinoGold?',
        a: 'Não, e não existe relação entre os dois. O RhinoGold é uma solução de design CAD para joalheria baseada no Rhinoceros. O RayGold é um ERP de gestão e fabricação. São categorias de produto diferentes e resolvem problemas diferentes.',
      },
      {
        q: 'Se o RayGold não é um CAD, por que gerencia arquivos STL?',
        a: 'Porque o arquivo precisa ser produzido. O RayGold guarda os STL e 3MF que o seu CAD gera, coloca-os na fila, atribui-os a uma impressora e controla a resina que consomem. Gerencia a produção do arquivo, não a sua criação.',
      },
      {
        q: 'Preciso do RayGold se já uso um programa de design?',
        a: 'Depende de você fabricar ou não. Um CAD define a peça; o RayGold controla a fabricação dela: metal atribuído, teor, perda, terceirização, custo e faturamento. Muitas oficinas usam os dois.',
      },
      {
        q: 'Que tipo de empresa usa o RayGold?',
        a: 'Fabricantes de joalheria, oficinas que trabalham sob encomenda e joalherias com produção própria. Empresas que precisam saber quanto metal entra, quanto sai e quanto se perde em cada passo.',
      },
      {
        q: 'Em que países o RayGold funciona?',
        a: 'Está em uso na Espanha e conta com localização fiscal para Colômbia, Peru e Brasil. A interface está disponível em português do Brasil, espanhol, catalão, inglês e francês.',
      },
      {
        q: 'O RayGold controla a perda?',
        a: 'Sim. É uma das suas funções centrais. Registra a perda por operação, por ordem de fabricação e por operário, o que permite comparar rendimentos reais e detectar desvios.',
      },
      {
        q: 'Quem desenvolve o RayGold?',
        a: 'A Raytecno BCN SL, empresa sediada em Barcelona e especializada desde 1990 em sistemas de gestão para o setor de joalheria.',
      },
    ],
  },

  foot: {
    texto: 'Tem dúvidas se o RayGold serve para a sua oficina?',
    enlace: 'Fale com a gente',
  },

  schemaDescripcion:
    'ERP de gestão e fabricação para o setor de joalheria: ordens de fabricação, controle de perda, teor e peso do metal, rastreabilidade, terceirização, fundição, estoque, impressão 3D e faturamento. Não é um software CAD: não cria geometria.',
};

const qerMap: Record<string, QerTranslations> = {
  es,
  ca,
  en,
  fr,
  'pt-br': ptBr,
};

export function getQerTranslations(lang: string): QerTranslations {
  return qerMap[lang] || qerMap.es;
}

/** Etiqueta BCP-47 para inLanguage / og:locale del JSON-LD */
export const langTag: Record<string, string> = {
  es: 'es-ES',
  ca: 'ca-ES',
  en: 'en',
  fr: 'fr-FR',
  'pt-br': 'pt-BR',
};