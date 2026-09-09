/**
 * fugas.ts — Contenido de la portada "Las 15 fugas"
 *
 * @file src/i18n/fugas.ts
 *
 * De momento solo está el español. Los demás idiomas caen a `es` mediante
 * getFugasTranslations(), así que el build no rompe aunque falten.
 * Cuando los textos estén cerrados, se duplica el bloque `es` y se traduce.
 *
 * Si más adelante prefieres sacarlo a JSON (patrón sharing.json), basta con
 * mover el objeto `es` a src/data/fugas.es.json e importarlo aquí.
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
}

export interface Pantalla {
  /** Nombre del fichero en el blob, sin ruta */
  archivo: string;
  /** Cómo se llama esa pantalla, visible bajo el hero */
  nombre: string;
  /** alt de la imagen ampliada */
  alt: string;
}

export interface FugasTranslations {
  hero: {
    sello: string;
    titulo: string;
    tituloEnfasis: string;
    lead: string;
    leadFuerte: string;
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

const es: FugasTranslations = {
  hero: {
    sello: 'Desde 1990 · +200 joyerías en España, Colombia, Perú y Brasil',
    titulo: 'En tu taller no hay un gran problema.',
    tituloEnfasis: 'Hay muchos problemas pequeños.',
    lead: 'Medio gramo que no aparece, dos días de retraso, un margen que no cuadra. RayGold es el',
    leadFuerte: 'ERP para joyería',
    ctaPrimario: 'Ver las 15 fugas',
    ctaSecundario: 'Pedir una demostración',
    etiquetaDetras: 'detrás',
    verPantalla: 'Ver la pantalla completa',
    cerrar: 'Cerrar',
  },

  pantallas: [
    { archivo: 'InicioFin5.png', nombre: 'Mapa de fabricación', alt: 'Mapa de fabricación de RayGold con las fases de producción' },
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
    },
    {
      area: 'fab',
      titulo: 'No sabes dónde está cada pieza',
      problema: 'Cera, fundición, engaste, pulido. Alguien pregunta por el encargo y se recorre el taller.',
      cierre: 'Orden de fabricación con secuencia de fases y estado al momento.',
      modulo: 'Fabricación · Órdenes',
    },
    {
      area: 'fab',
      titulo: 'El coste real nunca está en un solo sitio',
      problema:
        'Hechura, metal, piedra y subcontratación se suman en cuatro papeles distintos, o en ninguno.',
      cierre: 'Escandallo automático por pieza, con el oro del día.',
      modulo: 'Fabricación · Escandallo',
    },
    {
      // OJO: no publicar como capacidad hasta que exista el enlace Trabajo3D ↔ orden en código.
      area: 'fab',
      titulo: 'El archivo se imprime y nadie sabe para qué orden',
      problema:
        'El STL sale de la impresora, la resina se funde, y el trabajo no está atado a ningún encargo.',
      cierre: 'Cola de impresión y biblioteca de archivos enlazadas a la orden de fabricación.',
      modulo: 'Print3D · Fabricación',
    },
    {
      area: 'fab',
      titulo: 'La chatarra vuelve sin saber su ley',
      problema:
        'Se recupera, se reincorpora, y la pureza de lo que entra otra vez en el crisol es una suposición.',
      cierre: 'Lotes de recuperación con análisis y merma de fundición controlada.',
      modulo: 'Fundición · Control de metal',
    },

    {
      area: 'prov',
      titulo: 'El oro cambió de precio desde el presupuesto',
      problema: 'Diste precio con el oro de hace tres semanas. La factura sale con el de hoy.',
      cierre: 'Cotización del día integrada en presupuesto, orden y factura.',
      modulo: 'Comercial · Cotizaciones',
    },
    {
      area: 'prov',
      titulo: 'Metal fuera de casa sin cuenta',
      problema: 'Sale a engastar, a pulir, a grabar. Vuelve algo menos y nadie lleva la resta.',
      cierre: 'Cuenta de metal por taller externo: gramos que salen, gramos que vuelven, saldo.',
      modulo: 'Subcontratación',
    },
    {
      area: 'prov',
      titulo: 'Piedras sin lote ni certificado atado a la pieza',
      problema: 'Un cliente pregunta de dónde salió la esmeralda y la respuesta está en un cajón.',
      cierre: 'Ficha de gema con lote, certificado y trazabilidad hasta la pieza vendida.',
      modulo: 'Inventarios · Gemas',
    },
    {
      area: 'prov',
      titulo: 'Te enteras del faltante cuando ya paras',
      problema: 'Se acaba la aleación, el caucho o la resina el día que más se necesita.',
      cierre: 'Stock mínimo por material y aviso antes de que falte.',
      modulo: 'Inventarios · Alertas',
    },

    {
      area: 'cli',
      titulo: 'Dos días para dar un precio',
      problema:
        'El cliente manda un dibujo por WhatsApp. Alguien lo mira, estima peso, cuenta piedras, consulta el oro.',
      cierre: 'Del dibujo al presupuesto en segundos, comparando con tus propias piezas ya fabricadas.',
      modulo: 'Comercial · Presupuesto asistido',
    },
    {
      area: 'cli',
      titulo: 'El metal del cliente y tu hechura, mezclados',
      problema: 'Él puso el oro, tú el trabajo, y la factura no distingue una cosa de la otra.',
      cierre: 'Dos líneas: hechura y metal aportado, cada una con su valoración.',
      modulo: 'Comercial · Facturación',
    },
    {
      area: 'cli',
      titulo: 'Llama para saber cómo va el encargo',
      problema: 'Cada llamada es alguien del taller buscando la pieza para responder.',
      cierre: 'Portal de cliente con el estado por fase, sin llamar.',
      modulo: 'Portal Cliente',
    },

    {
      area: 'info',
      titulo: 'Cada uno tiene su verdad en un Excel',
      problema: 'Compras, taller y tienda cuadran cada uno con sus números. Nunca con los de los demás.',
      cierre: 'Una sola base de datos. El mismo gramo en todos los sitios.',
      modulo: 'Todo RayGold',
    },
    {
      area: 'info',
      titulo: 'Cada país pide una factura distinta',
      problema:
        'VERI*FACTU, DIAN, SUNAT, NF-e. Requisitos que cambian y que no se resuelven con un parche.',
      cierre: 'Localización fiscal nativa para España, Colombia, Perú y Brasil.',
      modulo: 'Finanzas · Localización',
    },

    {
      area: 'it',
      titulo: 'Un programa genérico adaptado a martillazos',
      problema:
        'No entiende de peso fino, de aleaciones ni de merma. Cada cosa del oficio es una excepción.',
      cierre: 'Un sistema hecho para joyería desde el principio. Las excepciones son lo normal.',
      modulo: 'RayGold',
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

/**
 * Mapa de idiomas. Los que aún no están traducidos apuntan a `es`
 * para que el build de los cinco idiomas no falle.
 */
const fugasMap: Record<string, FugasTranslations> = {
  es,
  ca: es, // TODO traducir
  en: es, // TODO traducir
  fr: es, // TODO traducir · recordar: en francés "façon" SÍ es el término correcto
  'pt-br': es, // TODO traducir
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