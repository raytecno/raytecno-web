/**
 * fugas.ts — Contenido de la portada "Las 15 fugas"
 *
 * @file src/i18n/fugas.ts
 *
 * TRADUCIDO (Septiembre 2026): los cinco idiomas completos.
 * Ya no hay caída a `es`: cada idioma tiene su propio objeto.
 *
 * NUEVO en esta revisión:
 *   - hero.leadFin — la cola del párrafo lead, que antes estaba escrita
 *     en duro dentro de FugasHero.astro y salía en español en los cinco
 *     idiomas. Requiere el patch correspondiente en FugasHero.astro.
 *   - imagenAlt rellenado en las fugas 4, 11 y 14, que tenían captura
 *     pero alt vacío.
 *
 * Vocabulario fijado (no improvisar al traducir nuevas fugas):
 *   merma      → loss / perte / minva / perda
 *   hechura    → making charge / façon / manufactura / mão de obra
 *   subcontr.  → outsourcing / sous-traitance / subcontractació / terceirização
 *   ley        → fineness / titre / llei / teor
 *   escandallo → costing / prix de revient / escandall / composição de custo
 *
 *   ⚠️ Los valores de `imagen` son los mismos en todos los idiomas: las
 *   capturas del ERP no están localizadas. Si algún día se capturan en
 *   inglés, basta con cambiar el nombre de fichero en el bloque `en`.
 */

export type AreaId = 'fab' | 'prov' | 'cli' | 'info' | 'it';

export interface Fuga {
  area: AreaId;
  /** Título corto, en lenguaje de taller */
  titulo: string;
  /** El problema, dos líneas */
  problema: string;
  /** Cómo lo cierra RayGold */
  cierre: string;
  /** Dónde vive dentro del programa */
  modulo: string;
  /** Nombre del fichero en el blob. Vacío = sin captura. */
  imagen: string;
  /** Texto alternativo de la captura */
  imagenAlt: string;
}

export interface Pantalla {
  archivo: string;
  nombre: string;
  alt: string;
}

export interface FugasTranslations {
  hero: {
    sello: string;
    titulo: string;
    tituloEnfasis: string;
    lead: string;
    leadFuerte: string;
    /** Cola del lead, después del término en negrita */
    leadFin: string;
    ctaPrimario: string;
    ctaSecundario: string;
    etiquetaDetras: string;
    verPantalla: string;
    cerrar: string;
  };
  pantallas: Pantalla[];
  frases: {
    propia: string;
    propiaEnfasis: string;
    propiaFuente: string;
    fugas: string;
    fugasEnfasis: string;
    fugasFuente: string;
    medidorPie: string;
    medidorPieArea: string; // usa {area}
  };
  seccion: {
    titulo: string;
    entradilla: string;
    filtroTodas: string;
    verComoSeCierra: string;
    cerrar: string;
    etiquetaCierre: string;
    dentroDelPrograma: string;
    /** Etiqueta bajo la captura */
    etiquetaPantalla: string;
  };
  areas: Record<AreaId, string>;
  fugas: Fuga[];
  cierre: {
    frase: string;
    fraseEnfasis: string;
    texto: string;
    cta: string;
  };
}

/* ══════════════════════════════════════════════════════════════════════
   ESPAÑOL
   ══════════════════════════════════════════════════════════════════════ */

const es: FugasTranslations = {
  hero: {
    sello: 'Desde 1990 · +200 joyerías en España, Colombia, Perú y Brasil',
    titulo: 'En tu taller no hay un gran problema.',
    tituloEnfasis: 'Hay muchos problemas pequeños.',
    lead: 'Medio gramo que no aparece, dos días de retraso, un margen que no cuadra. RayGold es el',
    leadFuerte: 'ERP para joyería',
    leadFin:
      'que los saca a la luz uno a uno y te da con qué cerrarlos: gramo a gramo, del lingote al escaparate.',
    ctaPrimario: 'Ver las 15 fugas',
    ctaSecundario: 'Pedir una demostración',
    etiquetaDetras: 'detrás',
    verPantalla: 'Ver la pantalla completa',
    cerrar: 'Cerrar',
  },

  pantallas: [
    { archivo: 'IniciFin5.png', nombre: 'Mapa de fabricación', alt: 'Mapa de fabricación de RayGold con las fases de producción' },
    { archivo: 'InicioFin4.png', nombre: 'Planes y artículos',  alt: 'Pantalla de planes y artículos de RayGold' },
    { archivo: 'InicioFin6.png', nombre: 'Cuadro de mando',     alt: 'Cuadro de mando de RayGold con indicadores del taller' },
  ],

  frases: {
    propia: 'Tú no tienes un gran problema.',
    propiaEnfasis: 'Tienes muchos pequeños.',
    propiaFuente: 'Lo que se decía en los talleres de Brasil.',
    fugas: 'Un taller no quiebra por una catástrofe,',
    fugasEnfasis: 'sino por 15 fugas de un 2 % cada una.',
    fugasFuente: 'Lo que vemos desde 1990 en las cuentas de nuestros clientes.',
    medidorPie: 'del margen, sin un solo gran problema.',
    medidorPieArea: 'del margen solo en {area}.',
  },

  seccion: {
    titulo: 'Las quince fugas de un taller de joyería',
    entradilla:
      'Ninguna justifica cambiar de sistema. Todas juntas te comen el margen sin que sepas por dónde. Abre una para ver cómo la cierra RayGold.',
    filtroTodas: 'Todas',
    verComoSeCierra: 'Ver cómo se cierra',
    cerrar: 'Cerrar',
    etiquetaCierre: 'cierre',
    dentroDelPrograma: 'Dentro del programa:',
    etiquetaPantalla: 'en pantalla',
  },

  areas: {
    fab: 'Fabricación',
    prov: 'Proveedores',
    cli: 'Clientes',
    info: 'Información',
    it: 'Informática',
  },

  fugas: [
    {
      area: 'fab',
      titulo: 'La merma que no ves',
      problema:
        'Vendes pensando que ganas un 40 % y a fin de mes descubres que la merma sin control se ha comido la mitad.',
      cierre: 'Pesada de entrada y salida en cada fase y por operario. La diferencia aparece con nombre.',
      modulo: 'Fabricación · Control de metal',
      imagen: 'MermasFun.png',
      imagenAlt: 'Control de merma por fase en RayGold',
    },
    {
      area: 'fab',
      titulo: 'No sabes dónde está cada pieza',
      problema: 'Cera, fundición, engaste, pulido. Alguien pregunta por el encargo y se recorre el taller.',
      cierre: 'Orden de fabricación con secuencia de fases y estado al momento.',
      modulo: 'Fabricación · Órdenes',
      imagen: 'IniciFin5.png',
      imagenAlt: 'Mapa de fabricación con el estado de cada orden',
    },
    {
      area: 'fab',
      titulo: 'El coste real nunca está en un solo sitio',
      problema:
        'Hechura, metal, piedra y subcontratación se suman en cuatro papeles distintos, o en ninguno.',
      cierre: 'Escandallo automático por pieza, con el oro del día.',
      modulo: 'Fabricación · Escandallo',
      imagen: 'CosteArt.png',
      imagenAlt: 'Escandallo de una pieza en RayGold',
    },
    {
      // OJO: no publicar como capacidad hasta que exista el enlace Trabajo3D ↔ orden.
      area: 'fab',
      titulo: 'El archivo se imprime y nadie sabe para qué orden',
      problema:
        'El STL sale de la impresora, la resina se funde, y el trabajo no está atado a ningún encargo.',
      cierre: 'Cola de impresión y biblioteca de archivos enlazadas a la orden de fabricación.',
      modulo: 'Print3D · Fabricación',
      imagen: 'Impresora.png',
      imagenAlt: 'Cola de impresión 3D en RayGold',
    },
    {
      area: 'fab',
      titulo: 'La chatarra vuelve sin saber su ley',
      problema:
        'Se recupera, se reincorpora, y la pureza de lo que entra otra vez en el crisol es una suposición.',
      cierre: 'Lotes de recuperación con análisis y merma de fundición controlada.',
      modulo: 'Fundición · Control de metal',
      imagen: 'ResFun.png',
      imagenAlt: 'Lotes de recuperación y fundición en RayGold',
    },

    {
      area: 'prov',
      titulo: 'El oro cambió de precio desde el presupuesto',
      problema: 'Diste precio con el oro de hace tres semanas. La factura sale con el de hoy.',
      cierre: 'Cotización del día integrada en presupuesto, orden y factura.',
      modulo: 'Comercial · Cotizaciones',
      imagen: 'Cotizacion.png',
      imagenAlt: 'Cotización del metal del día en RayGold',
    },
    {
      area: 'prov',
      titulo: 'Metal fuera de casa sin cuenta',
      problema: 'Sale a engastar, a pulir, a grabar. Vuelve algo menos y nadie lleva la resta.',
      cierre: 'Cuenta de metal por taller externo: gramos que salen, gramos que vuelven, saldo.',
      modulo: 'Subcontratación',
      imagen: 'Exteriores.png',
      imagenAlt: 'Cuenta de metal con talleres externos',
    },
    {
      area: 'prov',
      titulo: 'Piedras sin lote ni certificado atado a la pieza',
      problema: 'Un cliente pregunta de dónde salió la esmeralda y la respuesta está en un cajón.',
      cierre: 'Ficha de gema con lote, certificado y trazabilidad hasta la pieza vendida.',
      modulo: 'Inventarios · Gemas',
      imagen: 'ExtrucArt.png',
      imagenAlt: 'Ficha de gema con lote y certificado',
    },
    {
      area: 'prov',
      titulo: 'Te enteras del faltante cuando ya paras',
      problema: 'Se acaba la aleación, el caucho o la resina el día que más se necesita.',
      cierre: 'Stock mínimo por material y aviso antes de que falte.',
      modulo: 'Inventarios · Alertas',
      imagen: 'MovFabric.png',
      imagenAlt: 'Alertas de stock mínimo por material',
    },

    {
      area: 'cli',
      titulo: 'Dos días para dar un precio',
      problema:
        'El cliente manda un dibujo por WhatsApp. Alguien lo mira, estima peso, cuenta piedras, consulta el oro.',
      cierre: 'Del dibujo al presupuesto en segundos, comparando con tus propias piezas ya fabricadas.',
      modulo: 'Comercial · Presupuesto asistido',
      imagen: 'SimuladorPre.png',
      imagenAlt: 'Presupuesto asistido a partir de piezas ya fabricadas',
    },
    {
      area: 'cli',
      titulo: 'El metal del cliente y tu hechura, mezclados',
      problema: 'Él puso el oro, tú el trabajo, y la factura no distingue una cosa de la otra.',
      cierre: 'Dos líneas: hechura y metal aportado, cada una con su valoración.',
      modulo: 'Comercial · Facturación',
      imagen: 'LO02.png',
      imagenAlt: 'Factura con líneas separadas de hechura y metal aportado',
    },
    {
      area: 'cli',
      titulo: 'Llama para saber cómo va el encargo',
      problema: 'Cada llamada es alguien del taller buscando la pieza para responder.',
      cierre: 'Portal de cliente con el estado por fase, sin llamar.',
      modulo: 'Portal Cliente',
      imagen: '',
      imagenAlt: '',
    },

    {
      area: 'info',
      titulo: 'Cada uno tiene su verdad en un Excel',
      problema: 'Compras, taller y tienda cuadran cada uno con sus números. Nunca con los de los demás.',
      cierre: 'Una sola base de datos. El mismo gramo en todos los sitios.',
      modulo: 'Todo RayGold',
      imagen: '',
      imagenAlt: 'Cuadro de mando de RayGold con datos de todo el taller',
    },
    {
      area: 'info',
      titulo: 'Cada país pide una factura distinta',
      problema:
        'VERI*FACTU, DIAN, SUNAT, NF-e. Requisitos que cambian y que no se resuelven con un parche.',
      cierre: 'Localización fiscal nativa para España, Colombia, Perú y Brasil.',
      modulo: 'Finanzas · Localización',
      imagen: 'Verifac.png',
      imagenAlt: 'Configuración de localización fiscal en RayGold',
    },

    {
      area: 'it',
      titulo: 'Un programa genérico adaptado a martillazos',
      problema:
        'No entiende de peso fino, de aleaciones ni de merma. Cada cosa del oficio es una excepción.',
      cierre: 'Un sistema hecho para joyería desde el principio. Las excepciones son lo normal.',
      modulo: 'RayGold',
      imagen: 'MapAlmacenes.png',
      imagenAlt: 'Interfaz de RayGold con vocabulario de joyería',
    },
  ],

  cierre: {
    frase: 'No vendemos la solución a un gran problema.',
    fraseEnfasis: 'Cerramos, uno a uno, los pequeños.',
    texto:
      'Treinta y seis años viendo talleres por dentro nos enseñaron dónde se escapa el gramo, el día y el euro. Enséñanos el tuyo y te decimos por qué fuga empezar.',
    cta: 'Pedir una demostración',
  },
};

/* ══════════════════════════════════════════════════════════════════════
   CATALÀ
   ══════════════════════════════════════════════════════════════════════ */

const ca: FugasTranslations = {
  hero: {
    sello: 'Des del 1990 · +200 joieries a Espanya, Colòmbia, el Perú i el Brasil',
    titulo: 'Al teu taller no hi ha un gran problema.',
    tituloEnfasis: 'Hi ha molts problemes petits.',
    lead: 'Mig gram que no apareix, dos dies de retard, un marge que no quadra. RayGold és un',
    leadFuerte: 'ERP per a la joieria',
    leadFin:
      "que els treu a la llum un a un i et dona amb què tancar-los: gram a gram, del lingot a l'aparador.",
    ctaPrimario: 'Veure les 15 fuites',
    ctaSecundario: 'Demanar una demostració',
    etiquetaDetras: 'darrere',
    verPantalla: 'Veure la pantalla sencera',
    cerrar: 'Tancar',
  },

  pantallas: [
    { archivo: 'IniciFin5.png', nombre: 'Mapa de fabricació',    alt: 'Mapa de fabricació de RayGold amb les fases de producció' },
    { archivo: 'InicioFin4.png', nombre: 'Plans i articles',      alt: 'Pantalla de plans i articles de RayGold' },
    { archivo: 'InicioFin6.png', nombre: 'Quadre de comandament', alt: 'Quadre de comandament de RayGold amb indicadors del taller' },
  ],

  frases: {
    propia: 'Tu no tens un gran problema.',
    propiaEnfasis: 'En tens molts de petits.',
    propiaFuente: 'El que es deia als tallers del Brasil.',
    fugas: 'Un taller no fa fallida per una catàstrofe,',
    fugasEnfasis: "sinó per 15 fuites d'un 2 % cadascuna.",
    fugasFuente: 'El que veiem des del 1990 als comptes dels nostres clients.',
    medidorPie: 'del marge, sense ni un sol gran problema.',
    medidorPieArea: 'del marge només a {area}.',
  },

  seccion: {
    titulo: "Les quinze fuites d'un taller de joieria",
    entradilla:
      "Cap no justifica canviar de sistema. Totes juntes et mengen el marge sense que sàpigues per on. Obre'n una per veure com la tanca RayGold.",
    filtroTodas: 'Totes',
    verComoSeCierra: 'Veure com es tanca',
    cerrar: 'Tancar',
    etiquetaCierre: 'tancament',
    dentroDelPrograma: 'Dins del programa:',
    etiquetaPantalla: 'a la pantalla',
  },

  areas: {
    fab: 'Fabricació',
    prov: 'Proveïdors',
    cli: 'Clients',
    info: 'Informació',
    it: 'Informàtica',
  },

  fugas: [
    {
      area: 'fab',
      titulo: 'La minva que no veus',
      problema:
        "Véns pensant que guanyes un 40 % i a final de mes descobreixes que la minva sense control se n'ha menjat la meitat.",
      cierre: "Pesada d'entrada i de sortida a cada fase i per operari. La diferència apareix amb nom.",
      modulo: 'Fabricació · Control de metall',
      imagen: 'MermasFun.png',
      imagenAlt: 'Control de minva per fase a RayGold',
    },
    {
      area: 'fab',
      titulo: 'No saps on és cada peça',
      problema: "Cera, fosa, encast, poliment. Algú pregunta per l'encàrrec i es recorre tot el taller.",
      cierre: 'Ordre de fabricació amb seqüència de fases i estat al moment.',
      modulo: 'Fabricació · Ordres',
      imagen: 'IniciFin5.png',
      imagenAlt: "Mapa de fabricació amb l'estat de cada ordre",
    },
    {
      area: 'fab',
      titulo: 'El cost real mai no és en un sol lloc',
      problema:
        'Manufactura, metall, pedra i subcontractació se sumen en quatre papers diferents, o en cap.',
      cierre: "Escandall automàtic per peça, amb l'or del dia.",
      modulo: 'Fabricació · Escandall',
      imagen: 'CosteArt.png',
      imagenAlt: "Escandall d'una peça a RayGold",
    },
    {
      // OJO: no publicar como capacidad hasta que exista el enlace Trabajo3D ↔ orden.
      area: 'fab',
      titulo: "L'arxiu s'imprimeix i ningú sap per a quina ordre",
      problema:
        "L'STL surt de la impressora, la resina es fon, i la feina no està lligada a cap encàrrec.",
      cierre: "Cua d'impressió i biblioteca d'arxius enllaçades a l'ordre de fabricació.",
      modulo: 'Print3D · Fabricació',
      imagen: 'Impresora.png',
      imagenAlt: "Cua d'impressió 3D a RayGold",
    },
    {
      area: 'fab',
      titulo: 'La ferralla torna sense saber-ne la llei',
      problema:
        'Es recupera, es reincorpora, i la puresa del que torna a entrar al gresol és una suposició.',
      cierre: 'Lots de recuperació amb anàlisi i minva de fosa controlada.',
      modulo: 'Fosa · Control de metall',
      imagen: 'ResFun.png',
      imagenAlt: 'Lots de recuperació i fosa a RayGold',
    },

    {
      area: 'prov',
      titulo: "L'or ha canviat de preu des del pressupost",
      problema: "Vas donar preu amb l'or de fa tres setmanes. La factura surt amb el d'avui.",
      cierre: "Cotització del dia integrada al pressupost, a l'ordre i a la factura.",
      modulo: 'Comercial · Cotitzacions',
      imagen: 'Cotizacion.png',
      imagenAlt: 'Cotització del metall del dia a RayGold',
    },
    {
      area: 'prov',
      titulo: 'Metall fora de casa sense compte',
      problema: 'Surt a encastar, a polir, a gravar. En torna una mica menys i ningú no porta la resta.',
      cierre: 'Compte de metall per taller extern: grams que surten, grams que tornen, saldo.',
      modulo: 'Subcontractació',
      imagen: 'Exteriores.png',
      imagenAlt: 'Compte de metall amb tallers externs',
    },
    {
      area: 'prov',
      titulo: 'Pedres sense lot ni certificat lligats a la peça',
      problema: "Un client pregunta d'on va sortir la maragda i la resposta és en un calaix.",
      cierre: 'Fitxa de gemma amb lot, certificat i traçabilitat fins a la peça venuda.',
      modulo: 'Inventaris · Gemmes',
      imagen: 'ExtrucArt.png',
      imagenAlt: 'Fitxa de gemma amb lot i certificat',
    },
    {
      area: 'prov',
      titulo: "T'assabentes de la falta quan ja has parat",
      problema: "S'acaba l'aliatge, el cautxú o la resina el dia que més es necessita.",
      cierre: 'Estoc mínim per material i avís abans que falti.',
      modulo: 'Inventaris · Alertes',
      imagen: 'MovFabric.png',
      imagenAlt: "Alertes d'estoc mínim per material",
    },

    {
      area: 'cli',
      titulo: 'Dos dies per donar un preu',
      problema:
        "El client envia un dibuix per WhatsApp. Algú se'l mira, estima el pes, compta les pedres, consulta l'or.",
      cierre: 'Del dibuix al pressupost en segons, comparant amb les teves peces ja fabricades.',
      modulo: 'Comercial · Pressupost assistit',
      imagen: 'SimuladorPre.png',
      imagenAlt: 'Pressupost assistit a partir de peces ja fabricades',
    },
    {
      area: 'cli',
      titulo: 'El metall del client i la teva manufactura, barrejats',
      problema: "Ell hi va posar l'or, tu la feina, i la factura no distingeix una cosa de l'altra.",
      cierre: 'Dues línies: manufactura i metall aportat, cadascuna amb la seva valoració.',
      modulo: 'Comercial · Facturació',
      imagen: 'LO02.png',
      imagenAlt: 'Factura amb línies separades de manufactura i metall aportat',
    },
    {
      area: 'cli',
      titulo: "Truca per saber com va l'encàrrec",
      problema: 'Cada trucada és algú del taller buscant la peça per poder respondre.',
      cierre: "Portal de client amb l'estat per fase, sense trucar.",
      modulo: 'Portal Client',
      imagen: '',
      imagenAlt: '',
    },

    {
      area: 'info',
      titulo: 'Cadascú té la seva veritat en un Excel',
      problema: 'Compres, taller i botiga quadren cadascun amb els seus números. Mai amb els dels altres.',
      cierre: 'Una sola base de dades. El mateix gram a tot arreu.',
      modulo: 'Tot RayGold',
      imagen: '',
      imagenAlt: 'Quadre de comandament de RayGold amb dades de tot el taller',
    },
    {
      area: 'info',
      titulo: 'Cada país demana una factura diferent',
      problema:
        'VERI*FACTU, DIAN, SUNAT, NF-e. Requisits que canvien i que no es resolen amb un pedaç.',
      cierre: 'Localització fiscal nativa per a Espanya, Colòmbia, el Perú i el Brasil.',
      modulo: 'Finances · Localització',
      imagen: 'Verifac.png',
      imagenAlt: 'Configuració de localització fiscal a RayGold',
    },

    {
      area: 'it',
      titulo: 'Un programa genèric adaptat a cops de martell',
      problema:
        "No entén de pes fi, ni d'aliatges, ni de minva. Cada cosa de l'ofici és una excepció.",
      cierre: 'Un sistema fet per a joieria des del principi. Les excepcions són la norma.',
      modulo: 'RayGold',
      imagen: 'MapAlmacenes.png',
      imagenAlt: 'Interfície de RayGold amb vocabulari de joieria',
    },
  ],

  cierre: {
    frase: 'No venem la solució a un gran problema.',
    fraseEnfasis: 'Tanquem, un a un, els petits.',
    texto:
      "Trenta-sis anys veient tallers per dins ens han ensenyat on s'escapa el gram, el dia i l'euro. Ensenya'ns el teu i et direm per quina fuita començar.",
    cta: 'Demanar una demostració',
  },
};

/* ══════════════════════════════════════════════════════════════════════
   ENGLISH
   ══════════════════════════════════════════════════════════════════════ */

const en: FugasTranslations = {
  hero: {
    sello: 'Since 1990 · 200+ jewelers in Spain, Colombia, Peru and Brazil',
    titulo: "Your workshop doesn't have one big problem.",
    tituloEnfasis: 'It has many small ones.',
    lead: "Half a gram that never turns up, two days late, a margin that doesn't add up. RayGold is the",
    leadFuerte: 'ERP for jewelry',
    leadFin:
      'that brings them to light one by one and gives you what it takes to close them: gram by gram, from ingot to shop window.',
    ctaPrimario: 'See the 15 leaks',
    ctaSecundario: 'Request a demo',
    etiquetaDetras: 'behind',
    verPantalla: 'View full screen',
    cerrar: 'Close',
  },

  pantallas: [
    { archivo: 'IniciFin5.png', nombre: 'Manufacturing map', alt: 'RayGold manufacturing map showing the production phases' },
    { archivo: 'InicioFin4.png', nombre: 'Plans and items',   alt: 'RayGold plans and items screen' },
    { archivo: 'InicioFin6.png', nombre: 'Dashboard',         alt: 'RayGold dashboard with workshop indicators' },
  ],

  frases: {
    propia: "You don't have one big problem.",
    propiaEnfasis: 'You have many small ones.',
    propiaFuente: 'What they used to say in the workshops of Brazil.',
    fugas: "A workshop doesn't go under because of a catastrophe,",
    fugasEnfasis: 'but because of 15 leaks of 2 % each.',
    fugasFuente: "What we have seen since 1990 in our clients' books.",
    medidorPie: 'of your margin, without a single big problem.',
    medidorPieArea: 'of your margin in {area} alone.',
  },

  seccion: {
    titulo: 'The fifteen leaks of a jewelry workshop',
    entradilla:
      'Not one of them justifies changing your system. Together they eat your margin without you knowing where. Open one to see how RayGold closes it.',
    filtroTodas: 'All',
    verComoSeCierra: 'See how it is closed',
    cerrar: 'Close',
    etiquetaCierre: 'the fix',
    dentroDelPrograma: 'Inside the program:',
    etiquetaPantalla: 'on screen',
  },

  areas: {
    fab: 'Manufacturing',
    prov: 'Suppliers',
    cli: 'Customers',
    info: 'Information',
    it: 'IT',
  },

  fugas: [
    {
      area: 'fab',
      titulo: "The loss you can't see",
      problema:
        'You sell thinking you make 40 % and at month end you find that uncontrolled metal loss has eaten half of it.',
      cierre: 'Weigh-in and weigh-out at every phase and per operator. The difference shows up with a name on it.',
      modulo: 'Manufacturing · Metal control',
      imagen: 'MermasFun.png',
      imagenAlt: 'Metal loss control by phase in RayGold',
    },
    {
      area: 'fab',
      titulo: "You don't know where each piece is",
      problema: 'Wax, casting, setting, polishing. Someone asks about an order and you walk the whole workshop.',
      cierre: 'Manufacturing order with phase sequence and status as of right now.',
      modulo: 'Manufacturing · Orders',
      imagen: 'IniciFin5.png',
      imagenAlt: 'Manufacturing map with the status of each order',
    },
    {
      area: 'fab',
      titulo: 'The real cost is never in one single place',
      problema:
        'Making charge, metal, stones and outsourcing add up on four different pieces of paper, or on none at all.',
      cierre: "Automatic cost breakdown per piece, with the day's gold price.",
      modulo: 'Manufacturing · Costing',
      imagen: 'CosteArt.png',
      imagenAlt: 'Cost breakdown of a piece in RayGold',
    },
    {
      // OJO: no publicar como capacidad hasta que exista el enlace Trabajo3D ↔ orden.
      area: 'fab',
      titulo: 'The file gets printed and nobody knows which order it belongs to',
      problema:
        'The STL comes off the printer, the resin is burned out, and the job is not tied to any order.',
      cierre: 'Print queue and file library linked to the manufacturing order.',
      modulo: 'Print3D · Manufacturing',
      imagen: 'Impresora.png',
      imagenAlt: '3D print queue in RayGold',
    },
    {
      area: 'fab',
      titulo: 'Scrap comes back and nobody knows its fineness',
      problema:
        'It is recovered, put back in, and the purity of what goes into the crucible again is a guess.',
      cierre: 'Recovery batches with assay and controlled casting loss.',
      modulo: 'Casting · Metal control',
      imagen: 'ResFun.png',
      imagenAlt: 'Recovery and casting batches in RayGold',
    },

    {
      area: 'prov',
      titulo: 'Gold moved since you quoted',
      problema: "You quoted with gold from three weeks ago. The invoice goes out with today's.",
      cierre: "The day's metal price built into quote, order and invoice.",
      modulo: 'Commercial · Metal prices',
      imagen: 'Cotizacion.png',
      imagenAlt: "Today's metal price in RayGold",
    },
    {
      area: 'prov',
      titulo: 'Metal out of the house with no account',
      problema: 'It goes out for setting, polishing, engraving. A little less comes back and nobody keeps the subtraction.',
      cierre: 'Metal account per external workshop: grams out, grams back, balance.',
      modulo: 'Outsourcing',
      imagen: 'Exteriores.png',
      imagenAlt: 'Metal account with external workshops',
    },
    {
      area: 'prov',
      titulo: 'Stones with no batch or certificate tied to the piece',
      problema: 'A customer asks where the emerald came from and the answer is in a drawer.',
      cierre: 'Gem record with batch, certificate and traceability down to the piece sold.',
      modulo: 'Stocktaking · Gems',
      imagen: 'ExtrucArt.png',
      imagenAlt: 'Gem record with batch and certificate',
    },
    {
      area: 'prov',
      titulo: 'You find out you are short when the bench has already stopped',
      problema: 'You run out of alloy, rubber or resin on the day you need it most.',
      cierre: 'Minimum stock per material and a warning before it runs out.',
      modulo: 'Stocktaking · Alerts',
      imagen: 'MovFabric.png',
      imagenAlt: 'Minimum stock alerts per material',
    },

    {
      area: 'cli',
      titulo: 'Two days to give a price',
      problema:
        'The customer sends a drawing on WhatsApp. Someone looks at it, estimates the weight, counts the stones, checks the gold price.',
      cierre: 'From drawing to quote in seconds, comparing against pieces you have already made.',
      modulo: 'Commercial · Assisted quoting',
      imagen: 'SimuladorPre.png',
      imagenAlt: 'Assisted quote based on pieces already manufactured',
    },
    {
      area: 'cli',
      titulo: "The customer's metal and your making charge, mixed together",
      problema: 'He supplied the gold, you supplied the work, and the invoice tells one from the other nowhere.',
      cierre: 'Two lines: making charge and metal supplied, each with its own valuation.',
      modulo: 'Commercial · Invoicing',
      imagen: 'LO02.png',
      imagenAlt: 'Invoice with separate lines for making charge and metal supplied',
    },
    {
      area: 'cli',
      titulo: 'They call to ask how the order is going',
      problema: 'Every call is someone on the shop floor hunting for the piece so they can answer.',
      cierre: 'Customer portal with the status by phase, no phone call needed.',
      modulo: 'Customer Portal',
      imagen: '',
      imagenAlt: '',
    },

    {
      area: 'info',
      titulo: 'Everyone has their own truth in a spreadsheet',
      problema: 'Purchasing, workshop and shop each balance with their own numbers. Never with anyone else\'s.',
      cierre: 'One single database. The same gram everywhere.',
      modulo: 'All of RayGold',
      imagen: '',
      imagenAlt: 'RayGold dashboard with data from the whole workshop',
    },
    {
      area: 'info',
      titulo: 'Every country wants a different invoice',
      problema:
        'VERI*FACTU, DIAN, SUNAT, NF-e. Requirements that keep changing and that a patch will not solve.',
      cierre: 'Native fiscal localization for Spain, Colombia, Peru and Brazil.',
      modulo: 'Finance · Localization',
      imagen: 'Verifac.png',
      imagenAlt: 'Fiscal localization settings in RayGold',
    },

    {
      area: 'it',
      titulo: 'A generic program hammered into shape',
      problema:
        'It knows nothing about fine weight, alloys or metal loss. Every single thing about the trade is an exception.',
      cierre: 'A system built for jewelry from the start. Here the exceptions are the norm.',
      modulo: 'RayGold',
      imagen: 'MapAlmacenes.png',
      imagenAlt: 'RayGold interface using jewelry vocabulary',
    },
  ],

  cierre: {
    frase: "We don't sell the solution to one big problem.",
    fraseEnfasis: 'We close the small ones, one by one.',
    texto:
      'Thirty-six years looking at workshops from the inside taught us where the gram, the day and the euro escape. Show us yours and we will tell you which leak to start with.',
    cta: 'Request a demo',
  },
};

/* ══════════════════════════════════════════════════════════════════════
   FRANÇAIS
   ══════════════════════════════════════════════════════════════════════ */

const fr: FugasTranslations = {
  hero: {
    sello: "Depuis 1990 · +200 joailleries en Espagne, Colombie, Pérou et Brésil",
    titulo: "Dans votre atelier, il n'y a pas un grand problème.",
    tituloEnfasis: 'Il y en a beaucoup de petits.',
    lead: "Un demi-gramme introuvable, deux jours de retard, une marge qui ne tombe pas juste. RayGold est un",
    leadFuerte: 'ERP pour la joaillerie',
    leadFin:
      "qui les met en lumière un à un et vous donne de quoi les colmater : gramme après gramme, du lingot à la vitrine.",
    ctaPrimario: 'Voir les 15 fuites',
    ctaSecundario: 'Demander une démonstration',
    etiquetaDetras: 'derrière',
    verPantalla: "Voir l'écran en entier",
    cerrar: 'Fermer',
  },

  pantallas: [
    { archivo: 'IniciFin5.png', nombre: 'Carte de fabrication', alt: 'Carte de fabrication de RayGold avec les phases de production' },
    { archivo: 'InicioFin4.png', nombre: 'Plans et articles',    alt: 'Écran des plans et articles de RayGold' },
    { archivo: 'InicioFin6.png', nombre: 'Tableau de bord',      alt: "Tableau de bord de RayGold avec les indicateurs de l'atelier" },
  ],

  frases: {
    propia: "Vous n'avez pas un grand problème.",
    propiaEnfasis: 'Vous en avez beaucoup de petits.',
    propiaFuente: "Ce qu'on disait dans les ateliers du Brésil.",
    fugas: "Un atelier ne fait pas faillite à cause d'une catastrophe,",
    fugasEnfasis: 'mais à cause de 15 fuites de 2 % chacune.',
    fugasFuente: 'Ce que nous voyons depuis 1990 dans les comptes de nos clients.',
    medidorPie: 'de la marge, sans un seul grand problème.',
    medidorPieArea: "de la marge rien qu'en {area}.",
  },

  seccion: {
    titulo: "Les quinze fuites d'un atelier de joaillerie",
    entradilla:
      "Aucune ne justifie de changer de système. Toutes ensemble, elles mangent votre marge sans que vous sachiez par où. Ouvrez-en une pour voir comment RayGold la colmate.",
    filtroTodas: 'Toutes',
    verComoSeCierra: 'Voir comment elle se colmate',
    cerrar: 'Fermer',
    etiquetaCierre: 'colmatage',
    dentroDelPrograma: 'Dans le programme :',
    etiquetaPantalla: "à l'écran",
  },

  areas: {
    fab: 'Fabrication',
    prov: 'Fournisseurs',
    cli: 'Clients',
    info: 'Information',
    it: 'Informatique',
  },

  fugas: [
    {
      area: 'fab',
      titulo: 'La perte que vous ne voyez pas',
      problema:
        "Vous vendez en pensant gagner 40 % et à la fin du mois vous découvrez que la perte non maîtrisée en a mangé la moitié.",
      cierre: "Pesée d'entrée et de sortie à chaque phase et par opérateur. L'écart apparaît avec un nom.",
      modulo: 'Fabrication · Contrôle du métal',
      imagen: 'MermasFun.png',
      imagenAlt: 'Contrôle des pertes par phase dans RayGold',
    },
    {
      area: 'fab',
      titulo: 'Vous ne savez pas où est chaque pièce',
      problema: "Cire, fonte, sertissage, polissage. Quelqu'un demande où en est la commande et on parcourt tout l'atelier.",
      cierre: "Ordre de fabrication avec séquence de phases et statut à l'instant.",
      modulo: 'Fabrication · Ordres',
      imagen: 'IniciFin5.png',
      imagenAlt: 'Carte de fabrication avec le statut de chaque ordre',
    },
    {
      area: 'fab',
      titulo: "Le coût réel n'est jamais au même endroit",
      problema:
        "Façon, métal, pierre et sous-traitance s'additionnent sur quatre papiers différents, ou sur aucun.",
      cierre: "Prix de revient automatique par pièce, avec l'or du jour.",
      modulo: 'Fabrication · Prix de revient',
      imagen: 'CosteArt.png',
      imagenAlt: "Prix de revient d'une pièce dans RayGold",
    },
    {
      // OJO: no publicar como capacidad hasta que exista el enlace Trabajo3D ↔ orden.
      area: 'fab',
      titulo: "Le fichier est imprimé et personne ne sait pour quel ordre",
      problema:
        "Le STL sort de l'imprimante, la résine part en fonte, et le travail n'est rattaché à aucune commande.",
      cierre: "File d'impression et bibliothèque de fichiers reliées à l'ordre de fabrication.",
      modulo: 'Print3D · Fabrication',
      imagen: 'Impresora.png',
      imagenAlt: "File d'impression 3D dans RayGold",
    },
    {
      area: 'fab',
      titulo: "Les déchets reviennent sans qu'on connaisse leur titre",
      problema:
        "On les récupère, on les réincorpore, et le titre de ce qui repart au creuset est une supposition.",
      cierre: 'Lots de récupération avec analyse et perte à la fonte maîtrisée.',
      modulo: 'Fonderie · Contrôle du métal',
      imagen: 'ResFun.png',
      imagenAlt: 'Lots de récupération et de fonte dans RayGold',
    },

    {
      area: 'prov',
      titulo: "L'or a changé de prix depuis le devis",
      problema: "Vous avez chiffré avec l'or d'il y a trois semaines. La facture sort avec celui d'aujourd'hui.",
      cierre: "Cours du jour intégré au devis, à l'ordre et à la facture.",
      modulo: 'Commercial · Cours des métaux',
      imagen: 'Cotizacion.png',
      imagenAlt: 'Cours du métal du jour dans RayGold',
    },
    {
      area: 'prov',
      titulo: 'Du métal dehors sans compte',
      problema: 'Il part au sertissage, au polissage, à la gravure. Il revient un peu moins et personne ne fait la soustraction.',
      cierre: 'Compte métal par atelier extérieur : grammes sortis, grammes revenus, solde.',
      modulo: 'Sous-traitance',
      imagen: 'Exteriores.png',
      imagenAlt: 'Compte métal avec les ateliers extérieurs',
    },
    {
      area: 'prov',
      titulo: 'Des pierres sans lot ni certificat rattachés à la pièce',
      problema: "Un client demande d'où vient l'émeraude et la réponse est dans un tiroir.",
      cierre: "Fiche gemme avec lot, certificat et traçabilité jusqu'à la pièce vendue.",
      modulo: 'Stocks · Gemmes',
      imagen: 'ExtrucArt.png',
      imagenAlt: 'Fiche gemme avec lot et certificat',
    },
    {
      area: 'prov',
      titulo: "Vous apprenez le manque quand l'atelier est déjà à l'arrêt",
      problema: "L'alliage, le caoutchouc ou la résine manquent le jour où on en a le plus besoin.",
      cierre: 'Stock minimum par matière et alerte avant la rupture.',
      modulo: 'Stocks · Alertes',
      imagen: 'MovFabric.png',
      imagenAlt: 'Alertes de stock minimum par matière',
    },

    {
      area: 'cli',
      titulo: 'Deux jours pour donner un prix',
      problema:
        "Le client envoie un dessin par WhatsApp. Quelqu'un le regarde, estime le poids, compte les pierres, consulte le cours de l'or.",
      cierre: 'Du dessin au devis en quelques secondes, en comparant avec vos propres pièces déjà fabriquées.',
      modulo: 'Commercial · Devis assisté',
      imagen: 'SimuladorPre.png',
      imagenAlt: 'Devis assisté à partir de pièces déjà fabriquées',
    },
    {
      area: 'cli',
      titulo: 'Le métal du client et votre façon, mélangés',
      problema: "Il a apporté l'or, vous le travail, et la facture ne distingue pas l'un de l'autre.",
      cierre: 'Deux lignes : façon et métal apporté, chacune avec sa valorisation.',
      modulo: 'Commercial · Facturation',
      imagen: 'LO02.png',
      imagenAlt: 'Facture avec des lignes séparées pour la façon et le métal apporté',
    },
    {
      area: 'cli',
      titulo: 'Il appelle pour savoir où en est la commande',
      problema: "Chaque appel, c'est quelqu'un de l'atelier qui cherche la pièce pour pouvoir répondre.",
      cierre: 'Portail client avec le statut par phase, sans appeler.',
      modulo: 'Portail Client',
      imagen: '',
      imagenAlt: '',
    },

    {
      area: 'info',
      titulo: 'Chacun a sa vérité dans un Excel',
      problema: "Les achats, l'atelier et la boutique bouclent chacun avec leurs chiffres. Jamais avec ceux des autres.",
      cierre: 'Une seule base de données. Le même gramme partout.',
      modulo: 'Tout RayGold',
      imagen: '',
      imagenAlt: "Tableau de bord de RayGold avec les données de tout l'atelier",
    },
    {
      area: 'info',
      titulo: 'Chaque pays demande une facture différente',
      problema:
        "VERI*FACTU, DIAN, SUNAT, NF-e. Des exigences qui changent et qu'un correctif ne règle pas.",
      cierre: "Localisation fiscale native pour l'Espagne, la Colombie, le Pérou et le Brésil.",
      modulo: 'Finances · Localisation',
      imagen: 'Verifac.png',
      imagenAlt: 'Paramétrage de la localisation fiscale dans RayGold',
    },

    {
      area: 'it',
      titulo: 'Un logiciel générique adapté à coups de marteau',
      problema:
        "Il ne connaît ni le poids fin, ni les alliages, ni la perte. Chaque détail du métier est une exception.",
      cierre: 'Un système fait pour la joaillerie dès le départ. Les exceptions y sont la règle.',
      modulo: 'RayGold',
      imagen: 'MapAlmacenes.png',
      imagenAlt: 'Interface de RayGold avec le vocabulaire de la joaillerie',
    },
  ],

  cierre: {
    frase: "Nous ne vendons pas la solution à un grand problème.",
    fraseEnfasis: 'Nous colmatons, un à un, les petits.',
    texto:
      "Trente-six ans à voir des ateliers de l'intérieur nous ont appris où s'échappent le gramme, le jour et l'euro. Montrez-nous le vôtre et nous vous dirons par quelle fuite commencer.",
    cta: 'Demander une démonstration',
  },
};

/* ══════════════════════════════════════════════════════════════════════
   PORTUGUÊS (BRASIL)
   ══════════════════════════════════════════════════════════════════════ */

const ptBr: FugasTranslations = {
  hero: {
    sello: 'Desde 1990 · +200 joalherias na Espanha, Colômbia, Peru e Brasil',
    titulo: 'Na sua oficina não há um grande problema.',
    tituloEnfasis: 'Há muitos problemas pequenos.',
    lead: 'Meio grama que não aparece, dois dias de atraso, uma margem que não fecha. RayGold é o',
    leadFuerte: 'ERP para joalheria',
    leadFin:
      'que traz cada um deles à tona e te dá com que fechá-los: grama a grama, do lingote à vitrine.',
    ctaPrimario: 'Ver os 15 vazamentos',
    ctaSecundario: 'Pedir uma demonstração',
    etiquetaDetras: 'ao fundo',
    verPantalla: 'Ver a tela inteira',
    cerrar: 'Fechar',
  },

  pantallas: [
    { archivo: 'IniciFin5.png', nombre: 'Mapa de fabricação',   alt: 'Mapa de fabricação do RayGold com as fases de produção' },
    { archivo: 'InicioFin4.png', nombre: 'Planos e artigos',     alt: 'Tela de planos e artigos do RayGold' },
    { archivo: 'InicioFin6.png', nombre: 'Painel de indicadores', alt: 'Painel do RayGold com indicadores da oficina' },
  ],

  frases: {
    propia: 'Você não tem um grande problema.',
    propiaEnfasis: 'Tem muitos pequenos.',
    propiaFuente: 'O que se dizia nas oficinas do Brasil.',
    fugas: 'Uma oficina não quebra por uma catástrofe,',
    fugasEnfasis: 'mas por 15 vazamentos de 2 % cada um.',
    fugasFuente: 'O que vemos desde 1990 nas contas dos nossos clientes.',
    medidorPie: 'da margem, sem um único grande problema.',
    medidorPieArea: 'da margem só em {area}.',
  },

  seccion: {
    titulo: 'Os quinze vazamentos de uma oficina de joalheria',
    entradilla:
      'Nenhum deles justifica trocar de sistema. Todos juntos comem a sua margem sem que você saiba por onde. Abra um para ver como o RayGold o fecha.',
    filtroTodas: 'Todos',
    verComoSeCierra: 'Ver como se fecha',
    cerrar: 'Fechar',
    etiquetaCierre: 'fecho',
    dentroDelPrograma: 'Dentro do programa:',
    etiquetaPantalla: 'na tela',
  },

  areas: {
    fab: 'Fabricação',
    prov: 'Fornecedores',
    cli: 'Clientes',
    info: 'Informação',
    it: 'TI',
  },

  fugas: [
    {
      area: 'fab',
      titulo: 'A perda que você não vê',
      problema:
        'Você vende achando que ganha 40 % e no fim do mês descobre que a perda sem controle comeu metade.',
      cierre: 'Pesagem de entrada e de saída em cada fase e por operário. A diferença aparece com nome.',
      modulo: 'Fabricação · Controle de metal',
      imagen: 'MermasFun.png',
      imagenAlt: 'Controle de perda por fase no RayGold',
    },
    {
      area: 'fab',
      titulo: 'Você não sabe onde está cada peça',
      problema: 'Cera, fundição, cravação, polimento. Alguém pergunta pelo pedido e se percorre a oficina inteira.',
      cierre: 'Ordem de fabricação com sequência de fases e situação no momento.',
      modulo: 'Fabricação · Ordens',
      imagen: 'IniciFin5.png',
      imagenAlt: 'Mapa de fabricação com a situação de cada ordem',
    },
    {
      area: 'fab',
      titulo: 'O custo real nunca está num só lugar',
      problema:
        'Mão de obra, metal, pedra e terceirização se somam em quatro papéis diferentes, ou em nenhum.',
      cierre: 'Composição de custo automática por peça, com o ouro do dia.',
      modulo: 'Fabricação · Custo por peça',
      imagen: 'CosteArt.png',
      imagenAlt: 'Composição de custo de uma peça no RayGold',
    },
    {
      // OJO: no publicar como capacidad hasta que exista el enlace Trabajo3D ↔ orden.
      area: 'fab',
      titulo: 'O arquivo é impresso e ninguém sabe para qual ordem',
      problema:
        'O STL sai da impressora, a resina é queimada, e o trabalho não está preso a nenhum pedido.',
      cierre: 'Fila de impressão e biblioteca de arquivos ligadas à ordem de fabricação.',
      modulo: 'Print3D · Fabricação',
      imagen: 'Impresora.png',
      imagenAlt: 'Fila de impressão 3D no RayGold',
    },
    {
      area: 'fab',
      titulo: 'A sucata volta sem se saber o teor',
      problema:
        'Recupera-se, reincorpora-se, e a pureza do que entra de novo no cadinho é um palpite.',
      cierre: 'Lotes de recuperação com análise e perda de fundição controlada.',
      modulo: 'Fundição · Controle de metal',
      imagen: 'ResFun.png',
      imagenAlt: 'Lotes de recuperação e fundição no RayGold',
    },

    {
      area: 'prov',
      titulo: 'O ouro mudou de preço desde o orçamento',
      problema: 'Você deu preço com o ouro de três semanas atrás. A nota sai com o de hoje.',
      cierre: 'Cotação do dia integrada ao orçamento, à ordem e à nota.',
      modulo: 'Comercial · Cotações',
      imagen: 'Cotizacion.png',
      imagenAlt: 'Cotação do metal do dia no RayGold',
    },
    {
      area: 'prov',
      titulo: 'Metal fora de casa sem conta',
      problema: 'Sai para cravar, polir, gravar. Volta um pouco menos e ninguém faz a subtração.',
      cierre: 'Conta de metal por oficina externa: gramas que saem, gramas que voltam, saldo.',
      modulo: 'Terceirização',
      imagen: 'Exteriores.png',
      imagenAlt: 'Conta de metal com oficinas externas',
    },
    {
      area: 'prov',
      titulo: 'Pedras sem lote nem certificado ligados à peça',
      problema: 'Um cliente pergunta de onde saiu a esmeralda e a resposta está numa gaveta.',
      cierre: 'Ficha de gema com lote, certificado e rastreabilidade até a peça vendida.',
      modulo: 'Estoques · Gemas',
      imagen: 'ExtrucArt.png',
      imagenAlt: 'Ficha de gema com lote e certificado',
    },
    {
      area: 'prov',
      titulo: 'Você descobre a falta quando a bancada já parou',
      problema: 'Acaba a liga, a borracha ou a resina no dia em que mais se precisa.',
      cierre: 'Estoque mínimo por material e aviso antes de faltar.',
      modulo: 'Estoques · Alertas',
      imagen: 'MovFabric.png',
      imagenAlt: 'Alertas de estoque mínimo por material',
    },

    {
      area: 'cli',
      titulo: 'Dois dias para dar um preço',
      problema:
        'O cliente manda um desenho pelo WhatsApp. Alguém olha, estima o peso, conta as pedras, consulta o ouro.',
      cierre: 'Do desenho ao orçamento em segundos, comparando com as suas peças já fabricadas.',
      modulo: 'Comercial · Orçamento assistido',
      imagen: 'SimuladorPre.png',
      imagenAlt: 'Orçamento assistido a partir de peças já fabricadas',
    },
    {
      area: 'cli',
      titulo: 'O metal do cliente e a sua mão de obra, misturados',
      problema: 'Ele pôs o ouro, você o trabalho, e a nota não distingue uma coisa da outra.',
      cierre: 'Duas linhas: mão de obra e metal fornecido, cada uma com a sua valorização.',
      modulo: 'Comercial · Faturamento',
      imagen: 'LO02.png',
      imagenAlt: 'Nota com linhas separadas de mão de obra e metal fornecido',
    },
    {
      area: 'cli',
      titulo: 'Liga para saber como está o pedido',
      problema: 'Cada ligação é alguém da oficina procurando a peça para poder responder.',
      cierre: 'Portal do cliente com a situação por fase, sem precisar ligar.',
      modulo: 'Portal do Cliente',
      imagen: '',
      imagenAlt: '',
    },

    {
      area: 'info',
      titulo: 'Cada um tem a sua verdade numa planilha',
      problema: 'Compras, oficina e loja fecham cada um com os seus números. Nunca com os dos outros.',
      cierre: 'Um único banco de dados. O mesmo grama em todos os lugares.',
      modulo: 'Todo o RayGold',
      imagen: '',
      imagenAlt: 'Painel do RayGold com dados de toda a oficina',
    },
    {
      area: 'info',
      titulo: 'Cada país pede uma nota diferente',
      problema:
        'VERI*FACTU, DIAN, SUNAT, NF-e. Exigências que mudam e que não se resolvem com um remendo.',
      cierre: 'Localização fiscal nativa para Espanha, Colômbia, Peru e Brasil.',
      modulo: 'Finanças · Localização',
      imagen: 'Verifac.png',
      imagenAlt: 'Configuração de localização fiscal no RayGold',
    },

    {
      area: 'it',
      titulo: 'Um programa genérico adaptado a marteladas',
      problema:
        'Não entende de peso fino, de ligas nem de perda. Cada coisa do ofício é uma exceção.',
      cierre: 'Um sistema feito para joalheria desde o início. As exceções são o normal.',
      modulo: 'RayGold',
      imagen: 'MapAlmacenes.png',
      imagenAlt: 'Interface do RayGold com vocabulário de joalheria',
    },
  ],

  cierre: {
    frase: 'Não vendemos a solução para um grande problema.',
    fraseEnfasis: 'Fechamos, um a um, os pequenos.',
    texto:
      'Trinta e seis anos vendo oficinas por dentro nos ensinaram onde escapa o grama, o dia e o euro. Mostre a sua e dizemos por qual vazamento começar.',
    cta: 'Pedir uma demonstração',
  },
};

/**
 * Mapa de idiomas. Los cinco están traducidos; `es` sigue siendo el
 * fallback para cualquier código de idioma desconocido.
 */
const fugasMap: Record<string, FugasTranslations> = {
  es,
  ca,
  en,
  fr,
  'pt-br': ptBr,
};

export function getFugasTranslations(lang: string): FugasTranslations {
  return fugasMap[lang] || fugasMap.es;
}

/** Cuenta de fugas por área, para las pastillas del filtro */
export function contarPorArea(t: FugasTranslations): Record<AreaId, number> {
  return t.fugas.reduce(
    (acc, f) => ({ ...acc, [f.area]: (acc[f.area] || 0) + 1 }),
    {} as Record<AreaId, number>
  );
}