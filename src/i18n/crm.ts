/**
 * crm.ts — Textos del CRM comercial: vitrina de portada y página /crm
 *
 * @file src/i18n/crm.ts
 *
 * Paso 1 (Octubre 2026): vitrina de la portada (clave `vitrina` + `pantallas`).
 * Paso 2 (Octubre 2026): página /crm (clave `pagina`). Los capítulos reutilizan
 * las capturas de `pantallas` por su `id`, más `objetivos`, que solo sale aquí.
 *
 * Idiomas (Octubre 2026): es, en, fr, ca y pt-br completos. Con
 * Record<Lang, …> TypeScript avisa si se añade un idioma a Lang y falta aquí.
 * getCrmTranslations mantiene la reserva en español por si acaso.
 *
 * Criterios de traducción: inglés de EE. UU. ("jewelry", como el resto de
 * la web), francés "bijouterie", "Forecast" → Prévisions / Previsió /
 * Previsão, "Central" → Sales HQ / Pilotage / Central / Central.
 * En pt-br, "facturas" → "notas fiscais", y "en euros" → "em valor".
 *
 * Capturas: van en el blob web/ con los nombres de `archivo`. Deben salir
 * de una empresa de demostración de joyería (clientes joyerías, vendedores
 * ficticios), no de los datos actuales de autocaravanas.
 */
import type { Lang } from '@/config/pages';

export type CrmPara = 'vendedor' | 'direccion';

export interface CrmPantalla {
  /** Identificador estable (ids de DOM, analítica) */
  id: string;
  /** Texto corto de la pestaña */
  pestana: string;
  /** Para quién es la pantalla: decide el chip */
  para: CrmPara;
  /** Frase principal que vende la pantalla */
  titulo: string;
  /** Una o dos frases de detalle */
  texto: string;
  /** Nombre del archivo en el blob web/ */
  archivo: string;
  alt: string;
}

/** Un paso de un capítulo de la página /crm: una pantalla explicada a fondo */
export interface CrmPaso {
  /** id de una pantalla de `pantallas` o de `pantallasExtra` */
  pantalla: string;
  /** Titular del paso */
  titulo: string;
  /** Párrafos de explicación */
  parrafos: string[];
  /** Detalles concretos de la pantalla, en lista */
  puntos: string[];
}

export interface CrmCapitulo {
  id: string;
  /** Rótulo corto ("Capítulo 1") */
  numero: string;
  titulo: string;
  entradilla: string;
  pasos: CrmPaso[];
}

export interface CrmTranslations {
  vitrina: {
    sello: string;
    titulo: string;
    tituloEnfasis: string;
    lead: string;
    pestanasLabel: string;
    para: Record<CrmPara, string>;
    etiquetaPantalla: string;
    verPantalla: string;
    cerrar: string;
    verMas: string;
  };
  pantallas: CrmPantalla[];
  /** Capturas que solo aparecen en la página /crm (no en la vitrina) */
  pantallasExtra: CrmPantalla[];
  pagina: {
    metaTitulo: string;
    metaDescripcion: string;
    sello: string;
    titulo: string;
    tituloEnfasis: string;
    lead: string;
    ctaContacto: string;
    ctaRecorrido: string;
    claves: { titulo: string; texto: string }[];
    indiceLabel: string;
    capitulos: CrmCapitulo[];
    masTitulo: string;
    masTexto: string;
    masPantallas: string[];
    faqTitulo: string;
    faq: { pregunta: string; respuesta: string }[];
    cierreTitulo: string;
    cierreEnfasis: string;
    cierreTexto: string;
    cierreCta: string;
  };
}

const es: CrmTranslations = {
  vitrina: {
    sello: 'CRM comercial',
    titulo: 'La fuga que no sale en el balance:',
    tituloEnfasis: 'el cliente que deja de comprar sin avisar.',
    lead:
      'El CRM de RayGold no es un programa aparte: trabaja sobre las mismas ventas, pedidos y facturas que el resto del ERP. El vendedor sabe a quién llamar hoy y la dirección ve el año entero.',
    pestanasLabel: 'Pantallas del CRM',
    para: {
      vendedor: 'Vendedor',
      direccion: 'Dirección',
    },
    etiquetaPantalla: 'Pantalla real · datos de demostración',
    verPantalla: 'Ver a pantalla completa',
    cerrar: 'Cerrar',
    verMas: 'Ver el CRM a fondo',
  },
  pantallas: [
    {
      id: 'mi-dia',
      pestana: 'Mi día',
      para: 'vendedor',
      titulo: 'Abre el programa y sabe a quién llamar.',
      texto:
        'Ventas del mes, agenda, seguimientos vencidos y los clientes que ya deberían haber vuelto a comprar. Y el escaparate de piezas que le envía central para enseñar en la visita.',
      archivo: 'crm-mi-dia.webp',
      alt: 'Inicio del vendedor en RayGold: ventas del mes, escaparate de joyas, agenda del día y clientes a recuperar',
    },
    {
      id: 'actividades',
      pestana: 'Seguimiento',
      para: 'vendedor',
      titulo: 'Cada visita, llamada y oportunidad, apuntada.',
      texto:
        'Visitas, llamadas, avisos, incidencias y documentos de cada cliente en una sola lista, con su estado, su prioridad y la próxima acción.',
      archivo: 'crm-actividades.webp',
      alt: 'Lista de actividades comerciales en RayGold filtrada por tipo, con estado, prioridad y próxima acción',
    },
    {
      id: 'fidelizacion',
      pestana: 'Fidelización',
      para: 'vendedor',
      titulo: 'Ves quién se te va antes de perderlo.',
      texto:
        'Cada cliente se clasifica solo por recencia, frecuencia e importe: campeones, fieles, en riesgo, dormidos. Sus meses habituales de compra avisan cuando uno se salta el pedido de siempre.',
      archivo: 'crm-fidelizacion.webp',
      alt: 'Fidelización de clientes en RayGold: segmentos RFM, meses habituales de compra y variación frente al año anterior',
    },
    {
      id: 'piramide',
      pestana: 'Pirámide',
      para: 'direccion',
      titulo: 'Quién sostiene de verdad tu facturación.',
      texto:
        'La cartera ordenada en superiores, grandes, medios y pequeños según la curva de Pareto. Casi siempre, unos pocos clientes pesan más que todos los demás juntos.',
      archivo: 'crm-piramide.webp',
      alt: 'Pirámide de clientes en RayGold: segmentos superiores, grandes, medios y pequeños con su peso en la facturación',
    },
    {
      id: 'forecast',
      pestana: 'Forecast',
      para: 'direccion',
      titulo: 'Sabes en octubre cómo cerrarás el año.',
      texto:
        'Lo facturado más el pipeline ponderado por probabilidad, mes a mes, frente al objetivo. Un clic en un mes y ves qué oportunidades lo sostienen.',
      archivo: 'crm-forecast.webp',
      alt: 'Forecast comercial en RayGold: ventas reales y pipeline ponderado frente al objetivo mensual',
    },
    {
      id: 'central',
      pestana: 'Central',
      para: 'direccion',
      titulo: 'Todo el equipo comercial en una pantalla.',
      texto:
        'Ranking de vendedores, previsto de cierre, embudo, territorios e incorporaciones. La dirección lo tiene a la vista sin pedir informes.',
      archivo: 'crm-central.webp',
      alt: 'Central comercial de RayGold: ventas del año, ranking de vendedores y ritmo mensual frente al objetivo',
    },
  ],
  pantallasExtra: [
    {
      id: 'objetivos',
      pestana: 'Objetivos',
      para: 'direccion',
      titulo: 'El objetivo de cada cliente, y quién va por detrás.',
      texto:
        'Objetivo anual repartido por cliente, cumplimiento a fecha y proyección de cierre.',
      archivo: 'crm-objetivos.webp',
      alt: 'Objetivos por cliente en RayGold: objetivo anual, real acumulado, desviación, cumplimiento y proyección de cierre',
    },
  ],
  pagina: {
    metaTitulo: 'CRM para joyería: clientes, vendedores y previsión de ventas | RayGold',
    metaDescripcion:
      'El CRM de RayGold trabaja sobre las ventas y facturas del ERP de joyería: fidelización por recencia, frecuencia e importe, pirámide de clientes, agenda del vendedor, forecast y objetivos.',
    sello: 'CRM comercial',
    titulo: 'El CRM que ya conoce a tus clientes',
    tituloEnfasis: 'porque vive dentro del ERP.',
    lead:
      'Un CRM aparte empieza vacío y se queda a medias: alguien tiene que meterle las ventas. El de RayGold lee las mismas facturas, pedidos y clientes que usa el resto del programa, así que desde el primer día sabe quién compra, cuánto y cada cuánto.',
    ctaContacto: 'Pedir una demostración',
    ctaRecorrido: 'Ver el recorrido',
    claves: [
      {
        titulo: 'Sobre tus datos de siempre',
        texto: 'Ventas, pedidos y facturas del ERP. Nada que importar ni que cuadrar a fin de mes.',
      },
      {
        titulo: 'Para el vendedor',
        texto: 'Su día, su agenda y los clientes que tiene que recuperar, en la primera pantalla.',
      },
      {
        titulo: 'Para la dirección',
        texto: 'La cartera, el equipo y el cierre del año, sin esperar a que alguien prepare un informe.',
      },
    ],
    indiceLabel: 'Capítulos',
    capitulos: [
      {
        id: 'cartera',
        numero: 'Capítulo 1',
        titulo: 'Conocer la cartera',
        entradilla:
          'Antes de salir a vender hay que saber a quién. Quién sostiene la facturación y quién se está alejando sin decir nada.',
        pasos: [
          {
            pantalla: 'piramide',
            titulo: 'La pirámide: quién pesa de verdad',
            parrafos: [
              'RayGold ordena a todos los clientes por lo que facturan y los reparte en cuatro escalones: superiores, grandes, medios y pequeños. Los cortes siguen la curva de Pareto, la misma lógica de siempre, pero recalculada sola con cada factura.',
              'El resultado suele sorprender: un puñado de clientes arriba sostiene más de la mitad de los ingresos, y una base ancha de pequeños aporta poco cada uno. Perder a uno de arriba se nota en el año; perder a uno de abajo, no.',
            ],
            puntos: [
              'Peso de cada cliente sobre el año y acumulado de la curva',
              'Media por cliente en cada escalón',
              'Comparativa por ejercicio: cómo se mueve la pirámide de un año a otro',
            ],
          },
          {
            pantalla: 'fidelizacion',
            titulo: 'Fidelización: el aviso antes de la pérdida',
            parrafos: [
              'Cada cliente recibe tres notas, de recencia, frecuencia e importe, y con ellas un estado: campeón, fiel, prometedor, en riesgo, dormido o perdido. Nadie tiene que etiquetarlo a mano.',
              'La fila de meses habituales es la que más se usa: muestra en qué meses suele comprar cada cliente. Si estamos en uno de sus meses y no ha pedido nada, el cliente se marca antes de que la caída llegue al balance.',
            ],
            puntos: [
              'Meses sin compra y facturación de los últimos 12 meses',
              'Variación frente al año anterior',
              'Alertas de clientes que se saltan su mes habitual',
            ],
          },
        ],
      },
      {
        id: 'dia',
        numero: 'Capítulo 2',
        titulo: 'Trabajar el día',
        entradilla:
          'El vendedor no necesita informes: necesita saber qué hacer esta mañana y dejar constancia de lo que ha hecho.',
        pasos: [
          {
            pantalla: 'mi-dia',
            titulo: 'Mi día: la primera pantalla del vendedor',
            parrafos: [
              'Al entrar, el vendedor ve sus ventas del mes y del año frente al objetivo, su agenda, los seguimientos pendientes y la lista de clientes a recuperar: los que ya deberían haber vuelto a comprar según su ritmo habitual.',
              'Central le envía un escaparate con las piezas que quiere que se enseñen esa temporada, con su referencia y su foto. Llega a la visita sabiendo qué presentar.',
            ],
            puntos: [
              'Agenda filtrada por tipo: visitas, llamadas, avisos, oportunidades',
              'Clientes a recuperar con días sin comprar y frecuencia habitual',
              'Escaparate de piezas enviado por central',
            ],
          },
          {
            pantalla: 'actividades',
            titulo: 'Seguimiento: lo que se habla queda escrito',
            parrafos: [
              'Visitas, llamadas, avisos, pistas, oportunidades, incidencias, mailings, notas y documentos. Todo lo que pasa con un cliente queda en una sola lista, con su estado, su prioridad y la fecha de la próxima acción.',
              'Si un vendedor se va o cambia de zona, la relación con el cliente no se va con él: el historial sigue en el programa.',
            ],
            puntos: [
              'Filtros por tipo de actividad con su recuento',
              'Próxima acción con fecha, en rojo si está vencida',
              'Vista por vendedor y por cliente',
            ],
          },
        ],
      },
      {
        id: 'adelante',
        numero: 'Capítulo 3',
        titulo: 'Mirar adelante',
        entradilla:
          'Lo facturado ya pasó. La dirección necesita saber cómo va a acabar el año y quién va por detrás mientras todavía hay tiempo.',
        pasos: [
          {
            pantalla: 'forecast',
            titulo: 'Forecast: el cierre del año, mes a mes',
            parrafos: [
              'Lo facturado más el pipeline de oportunidades ponderado por su probabilidad, mes a mes, frente al objetivo. La línea del objetivo y las barras de lo real dicen en un vistazo si el año va bien.',
              'Un clic en un mes y aparecen las oportunidades que lo sostienen, con su fase, su importe y su fecha de cierre. Las vencidas salen marcadas.',
            ],
            puntos: [
              'Objetivo, real acumulado, pipeline ponderado y previsto de cierre',
              'Lo que falta para el objetivo, en euros y en porcentaje',
              'Celdas por mes en importe o en porcentaje',
            ],
          },
          {
            pantalla: 'objetivos',
            titulo: 'Objetivos: el reparto por cliente',
            parrafos: [
              'El objetivo del vendedor se reparte entre sus clientes, y RayGold compara cada uno con lo facturado hasta hoy. Se ve quién va por detrás, quién está en aviso y quién cumple.',
              'La columna de meses por debajo cuenta cuántos meses seguidos lleva un cliente sin llegar a su parte: el aviso llega antes de que la desviación sea imposible de recuperar.',
            ],
            puntos: [
              'Objetivo a fecha, real, desviación y proyección de cierre',
              'Cuadre entre el objetivo del vendedor y la suma de sus clientes',
              'Vista de seguimiento y vista para fijar objetivos',
            ],
          },
          {
            pantalla: 'central',
            titulo: 'Central: todo el equipo en una pantalla',
            parrafos: [
              'La dirección comercial ve a todos los vendedores a la vez: ventas del año, ranking frente al objetivo, ritmo mensual, previsto de cierre y pipeline.',
              'Desde aquí se reparten territorios, se siguen las incorporaciones y se envían escaparates a los vendedores. No depende de ningún vendedor en concreto: es la vista del equipo entero.',
            ],
            puntos: [
              'Ranking de vendedores con su cumplimiento',
              'Ritmo del año frente al objetivo y al año anterior',
              'Territorios, equipo e incorporaciones',
            ],
          },
        ],
      },
    ],
    masTitulo: 'Y más pantallas en el mismo módulo',
    masTexto: 'El CRM comercial incluye además estas vistas, sobre los mismos datos.',
    masPantallas: ['Contactos', 'Pipeline', 'Recompra', 'Estadísticas', 'Imágenes', 'Marketing'],
    faqTitulo: 'Preguntas frecuentes',
    faq: [
      {
        pregunta: '¿El CRM de RayGold es un programa aparte?',
        respuesta:
          'No. Es un módulo del propio ERP y trabaja sobre las mismas ventas, pedidos, facturas y clientes. No hay que importar datos ni mantener dos programas al día.',
      },
      {
        pregunta: '¿Cómo decide RayGold si un cliente está en riesgo?',
        respuesta:
          'Con tres notas calculadas sobre sus compras: recencia (cuánto hace que compró), frecuencia (cada cuánto compra) e importe (cuánto factura). Además compara con sus meses habituales de compra para avisar cuando se salta uno.',
      },
      {
        pregunta: '¿Lo usan los vendedores o la dirección?',
        respuesta:
          'Los dos, con pantallas distintas. El vendedor trabaja con su día, su agenda, su seguimiento y sus clientes a recuperar. La dirección usa la pirámide, el forecast, los objetivos y la central del equipo.',
      },
    ],
    cierreTitulo: 'Tus clientes ya están en RayGold.',
    cierreEnfasis: 'Solo falta mirarlos así.',
    cierreTexto:
      'Te enseñamos el CRM con una demostración sobre una joyería de ejemplo y te explicamos cómo quedaría con tus datos.',
    cierreCta: 'Pedir una demostración',
  },
};

/* ═══════════════════════════ ENGLISH ═══════════════════════════ */
const en: CrmTranslations = {
  vitrina: {
    sello: 'Sales CRM',
    titulo: 'The leak that never shows on the balance sheet:',
    tituloEnfasis: 'the customer who quietly stops buying.',
    lead:
      'The RayGold CRM is not a separate program: it works on the same sales, orders and invoices as the rest of the ERP. Sales reps know who to call today, and management sees the whole year.',
    pestanasLabel: 'CRM screens',
    para: {
      vendedor: 'Sales rep',
      direccion: 'Management',
    },
    etiquetaPantalla: 'Real screen · demo data',
    verPantalla: 'View full screen',
    cerrar: 'Close',
    verMas: 'Explore the CRM',
  },
  pantallas: [
    {
      id: 'mi-dia',
      pestana: 'My day',
      para: 'vendedor',
      titulo: 'Open the program and know who to call.',
      texto:
        "Sales this month, agenda, overdue follow-ups and the customers who should have ordered again by now. Plus the showcase of pieces head office sends to present on the visit.",
      archivo: 'crm-mi-dia.webp',
      alt: "RayGold sales rep home screen: this month's sales, jewelry showcase, today's agenda and customers to win back",
    },
    {
      id: 'actividades',
      pestana: 'Follow-up',
      para: 'vendedor',
      titulo: 'Every visit, call and opportunity, on record.',
      texto:
        'Visits, calls, reminders, issues and documents for each customer in a single list, with status, priority and next action.',
      archivo: 'crm-actividades.webp',
      alt: 'RayGold sales activity list filtered by type, with status, priority and next action',
    },
    {
      id: 'fidelizacion',
      pestana: 'Loyalty',
      para: 'vendedor',
      titulo: 'See who is drifting away before you lose them.',
      texto:
        'Every customer is classified automatically by recency, frequency and value: champions, loyal, at risk, dormant. Their usual buying months flag anyone who skips their regular order.',
      archivo: 'crm-fidelizacion.webp',
      alt: 'RayGold customer loyalty: RFM segments, usual buying months and change versus the previous year',
    },
    {
      id: 'piramide',
      pestana: 'Pyramid',
      para: 'direccion',
      titulo: 'Who really carries your revenue.',
      texto:
        'Your customer base ranked into top, large, medium and small tiers along the Pareto curve. Almost always, a handful of customers outweigh all the others combined.',
      archivo: 'crm-piramide.webp',
      alt: 'RayGold customer pyramid: top, large, medium and small tiers with their share of revenue',
    },
    {
      id: 'forecast',
      pestana: 'Forecast',
      para: 'direccion',
      titulo: 'Know in October how the year will close.',
      texto:
        'Invoiced sales plus the probability-weighted pipeline, month by month, against target. Click a month to see which opportunities support it.',
      archivo: 'crm-forecast.webp',
      alt: 'RayGold sales forecast: actual sales and weighted pipeline against the monthly target',
    },
    {
      id: 'central',
      pestana: 'Sales HQ',
      para: 'direccion',
      titulo: 'The whole sales team on one screen.',
      texto:
        'Sales rep ranking, year-end forecast, funnel, territories and onboarding. Management has it in view without asking for reports.',
      archivo: 'crm-central.webp',
      alt: 'RayGold sales headquarters: year-to-date sales, sales rep ranking and monthly pace against target',
    },
  ],
  pantallasExtra: [
    {
      id: 'objetivos',
      pestana: 'Targets',
      para: 'direccion',
      titulo: 'Each customer’s target, and who is falling behind.',
      texto: 'Annual target split by customer, achievement to date and year-end projection.',
      archivo: 'crm-objetivos.webp',
      alt: 'RayGold targets by customer: annual target, actual to date, variance, achievement and year-end projection',
    },
  ],
  pagina: {
    metaTitulo: 'Jewelry CRM: customers, sales reps and sales forecast | RayGold',
    metaDescripcion:
      'The RayGold CRM runs on the sales and invoices of the jewelry ERP: loyalty by recency, frequency and value, customer pyramid, sales rep agenda, forecast and targets.',
    sello: 'Sales CRM',
    titulo: 'The CRM that already knows your customers',
    tituloEnfasis: 'because it lives inside the ERP.',
    lead:
      'A standalone CRM starts empty and stays half-finished: someone has to feed it the sales. The RayGold CRM reads the same invoices, orders and customers the rest of the program uses, so from day one it knows who buys, how much and how often.',
    ctaContacto: 'Request a demo',
    ctaRecorrido: 'Take the tour',
    claves: [
      {
        titulo: 'On the data you already have',
        texto: 'ERP sales, orders and invoices. Nothing to import, nothing to reconcile at month end.',
      },
      {
        titulo: 'For sales reps',
        texto: 'Their day, their agenda and the customers to win back, on the first screen.',
      },
      {
        titulo: 'For management',
        texto: 'The customer base, the team and the year-end close, without waiting for someone to build a report.',
      },
    ],
    indiceLabel: 'Chapters',
    capitulos: [
      {
        id: 'cartera',
        numero: 'Chapter 1',
        titulo: 'Know your customer base',
        entradilla:
          'Before you go out and sell, you need to know who to sell to. Who carries the revenue, and who is drifting away without saying a word.',
        pasos: [
          {
            pantalla: 'piramide',
            titulo: 'The pyramid: who really matters',
            parrafos: [
              'RayGold ranks every customer by revenue and splits them into four tiers: top, large, medium and small. The cut-offs follow the Pareto curve, the same logic as always, but recalculated automatically with every invoice.',
              'The result is often surprising: a handful of customers at the top carry more than half the revenue, and a broad base of small ones contributes little each. Losing one at the top shows in the year; losing one at the bottom does not.',
            ],
            puntos: [
              'Each customer’s share of the year and the cumulative curve',
              'Average per customer in each tier',
              'Year-by-year comparison: how the pyramid shifts',
            ],
          },
          {
            pantalla: 'fidelizacion',
            titulo: 'Loyalty: the warning before the loss',
            parrafos: [
              'Each customer gets three scores, for recency, frequency and value, and from them a status: champion, loyal, promising, at risk, dormant or lost. Nobody has to tag them by hand.',
              'The usual-months row is the one people use most: it shows the months in which each customer normally buys. If it is one of their months and they have not ordered, the customer is flagged before the drop reaches the balance sheet.',
            ],
            puntos: [
              'Months without purchases and revenue over the last 12 months',
              'Change versus the previous year',
              'Alerts for customers who skip their usual month',
            ],
          },
        ],
      },
      {
        id: 'dia',
        numero: 'Chapter 2',
        titulo: 'Work the day',
        entradilla:
          'Sales reps do not need reports: they need to know what to do this morning and keep a record of what they have done.',
        pasos: [
          {
            pantalla: 'mi-dia',
            titulo: 'My day: the sales rep’s first screen',
            parrafos: [
              'On login, the rep sees month and year sales against target, the agenda, pending follow-ups and the list of customers to win back: those who should have ordered again by their usual pace.',
              'Head office sends a showcase of the pieces it wants presented this season, each with its reference and photo. The rep arrives at the visit knowing what to show.',
            ],
            puntos: [
              'Agenda filtered by type: visits, calls, reminders, opportunities',
              'Customers to win back with days since last purchase and usual frequency',
              'Showcase of pieces sent by head office',
            ],
          },
          {
            pantalla: 'actividades',
            titulo: 'Follow-up: what is said gets written down',
            parrafos: [
              'Visits, calls, reminders, leads, opportunities, issues, mailings, notes and documents. Everything that happens with a customer sits in one list, with status, priority and the date of the next action.',
              'If a rep leaves or changes territory, the customer relationship does not leave with them: the history stays in the program.',
            ],
            puntos: [
              'Filters by activity type with their count',
              'Next action with a date, in red when overdue',
              'View by sales rep and by customer',
            ],
          },
        ],
      },
      {
        id: 'adelante',
        numero: 'Chapter 3',
        titulo: 'Look ahead',
        entradilla:
          'What has been invoiced is in the past. Management needs to know how the year will end and who is falling behind while there is still time.',
        pasos: [
          {
            pantalla: 'forecast',
            titulo: 'Forecast: the year-end close, month by month',
            parrafos: [
              'Invoiced sales plus the opportunity pipeline weighted by probability, month by month, against target. The target line and the actual bars tell you at a glance whether the year is on track.',
              'Click a month and the opportunities behind it appear, with stage, amount and close date. Overdue ones are flagged.',
            ],
            puntos: [
              'Target, actual to date, weighted pipeline and year-end forecast',
              'Gap to target, in euros and as a percentage',
              'Monthly cells as amounts or percentages',
            ],
          },
          {
            pantalla: 'objetivos',
            titulo: 'Targets: split by customer',
            parrafos: [
              'The rep’s target is split across their customers, and RayGold compares each one with what has been invoiced to date. You see who is behind, who is on watch and who is on target.',
              'The months-below column counts how many months in a row a customer has missed their share: the warning arrives before the gap becomes impossible to close.',
            ],
            puntos: [
              'Target to date, actual, variance and year-end projection',
              'Reconciliation between the rep’s target and the sum of their customers',
              'Tracking view and target-setting view',
            ],
          },
          {
            pantalla: 'central',
            titulo: 'Sales HQ: the whole team on one screen',
            parrafos: [
              'Sales management sees every rep at once: year-to-date sales, ranking against target, monthly pace, year-end forecast and pipeline.',
              'From here territories are assigned, new hires are followed and showcases are sent to the reps. It does not depend on any single rep: it is the view of the whole team.',
            ],
            puntos: [
              'Sales rep ranking with achievement',
              'Pace of the year against target and the previous year',
              'Territories, team and onboarding',
            ],
          },
        ],
      },
    ],
    masTitulo: 'And more screens in the same module',
    masTexto: 'The sales CRM also includes these views, on the same data.',
    masPantallas: ['Contacts', 'Pipeline', 'Repurchase', 'Statistics', 'Images', 'Marketing'],
    faqTitulo: 'Frequently asked questions',
    faq: [
      {
        pregunta: 'Is the RayGold CRM a separate program?',
        respuesta:
          'No. It is a module of the ERP itself and works on the same sales, orders, invoices and customers. There is no data to import and no second program to keep up to date.',
      },
      {
        pregunta: 'How does RayGold decide a customer is at risk?',
        respuesta:
          'With three scores calculated from their purchases: recency (how long since they last bought), frequency (how often they buy) and value (how much they spend). It also checks their usual buying months to flag when they skip one.',
      },
      {
        pregunta: 'Is it for sales reps or for management?',
        respuesta:
          'Both, with different screens. Sales reps work with their day, agenda, follow-up and customers to win back. Management uses the pyramid, forecast, targets and the team’s sales HQ.',
      },
    ],
    cierreTitulo: 'Your customers are already in RayGold.',
    cierreEnfasis: 'Now see them this way.',
    cierreTexto:
      'We show you the CRM with a demo on a sample jewelry business and explain how it would look with your own data.',
    cierreCta: 'Request a demo',
  },
};

/* ═══════════════════════════ FRANÇAIS ═══════════════════════════ */
const fr: CrmTranslations = {
  vitrina: {
    sello: 'CRM commercial',
    titulo: 'La fuite qui n’apparaît jamais au bilan :',
    tituloEnfasis: 'le client qui cesse d’acheter sans prévenir.',
    lead:
      'Le CRM de RayGold n’est pas un logiciel à part : il travaille sur les mêmes ventes, commandes et factures que le reste de l’ERP. Le commercial sait qui appeler aujourd’hui et la direction voit l’année entière.',
    pestanasLabel: 'Écrans du CRM',
    para: {
      vendedor: 'Commercial',
      direccion: 'Direction',
    },
    etiquetaPantalla: 'Écran réel · données de démonstration',
    verPantalla: 'Voir en plein écran',
    cerrar: 'Fermer',
    verMas: 'Découvrir le CRM en détail',
  },
  pantallas: [
    {
      id: 'mi-dia',
      pestana: 'Ma journée',
      para: 'vendedor',
      titulo: 'Il ouvre le logiciel et sait qui appeler.',
      texto:
        'Ventes du mois, agenda, relances en retard et les clients qui auraient déjà dû racheter. Et la vitrine de pièces envoyée par le siège pour la présenter en visite.',
      archivo: 'crm-mi-dia.webp',
      alt: 'Accueil du commercial dans RayGold : ventes du mois, vitrine de bijoux, agenda du jour et clients à reconquérir',
    },
    {
      id: 'actividades',
      pestana: 'Suivi',
      para: 'vendedor',
      titulo: 'Chaque visite, appel et opportunité, consigné.',
      texto:
        'Visites, appels, rappels, incidents et documents de chaque client dans une seule liste, avec leur statut, leur priorité et la prochaine action.',
      archivo: 'crm-actividades.webp',
      alt: 'Liste des activités commerciales dans RayGold filtrée par type, avec statut, priorité et prochaine action',
    },
    {
      id: 'fidelizacion',
      pestana: 'Fidélisation',
      para: 'vendedor',
      titulo: 'Voir qui s’éloigne avant de le perdre.',
      texto:
        'Chaque client est classé automatiquement selon la récence, la fréquence et le montant : champions, fidèles, à risque, endormis. Ses mois d’achat habituels signalent celui qui saute sa commande habituelle.',
      archivo: 'crm-fidelizacion.webp',
      alt: 'Fidélisation des clients dans RayGold : segments RFM, mois d’achat habituels et évolution par rapport à l’année précédente',
    },
    {
      id: 'piramide',
      pestana: 'Pyramide',
      para: 'direccion',
      titulo: 'Qui porte vraiment votre chiffre d’affaires.',
      texto:
        'Le portefeuille classé en clients majeurs, grands, moyens et petits selon la courbe de Pareto. Presque toujours, quelques clients pèsent plus que tous les autres réunis.',
      archivo: 'crm-piramide.webp',
      alt: 'Pyramide des clients dans RayGold : clients majeurs, grands, moyens et petits avec leur poids dans le chiffre d’affaires',
    },
    {
      id: 'forecast',
      pestana: 'Prévisions',
      para: 'direccion',
      titulo: 'Savoir dès octobre comment l’année va se terminer.',
      texto:
        'Le facturé plus le pipeline pondéré par probabilité, mois par mois, face à l’objectif. Un clic sur un mois montre les opportunités qui le soutiennent.',
      archivo: 'crm-forecast.webp',
      alt: 'Prévisions commerciales dans RayGold : ventes réelles et pipeline pondéré face à l’objectif mensuel',
    },
    {
      id: 'central',
      pestana: 'Pilotage',
      para: 'direccion',
      titulo: 'Toute l’équipe commerciale sur un seul écran.',
      texto:
        'Classement des commerciaux, prévision de clôture, entonnoir, territoires et intégrations. La direction a tout sous les yeux sans demander de rapports.',
      archivo: 'crm-central.webp',
      alt: 'Pilotage commercial dans RayGold : ventes de l’année, classement des commerciaux et rythme mensuel face à l’objectif',
    },
  ],
  pantallasExtra: [
    {
      id: 'objetivos',
      pestana: 'Objectifs',
      para: 'direccion',
      titulo: 'L’objectif de chaque client, et qui est en retard.',
      texto: 'Objectif annuel réparti par client, réalisation à date et projection de clôture.',
      archivo: 'crm-objetivos.webp',
      alt: 'Objectifs par client dans RayGold : objectif annuel, réalisé, écart, taux de réalisation et projection de clôture',
    },
  ],
  pagina: {
    metaTitulo: 'CRM pour la bijouterie : clients, commerciaux et prévisions de ventes | RayGold',
    metaDescripcion:
      'Le CRM de RayGold travaille sur les ventes et factures de l’ERP pour la bijouterie : fidélisation par récence, fréquence et montant, pyramide des clients, agenda du commercial, prévisions et objectifs.',
    sello: 'CRM commercial',
    titulo: 'Le CRM qui connaît déjà vos clients',
    tituloEnfasis: 'parce qu’il vit dans l’ERP.',
    lead:
      'Un CRM séparé démarre vide et reste à moitié rempli : quelqu’un doit y saisir les ventes. Celui de RayGold lit les mêmes factures, commandes et clients que le reste du logiciel. Dès le premier jour, il sait qui achète, combien et à quelle fréquence.',
    ctaContacto: 'Demander une démonstration',
    ctaRecorrido: 'Voir le parcours',
    claves: [
      {
        titulo: 'Sur vos données habituelles',
        texto: 'Ventes, commandes et factures de l’ERP. Rien à importer ni à rapprocher en fin de mois.',
      },
      {
        titulo: 'Pour le commercial',
        texto: 'Sa journée, son agenda et les clients à reconquérir, dès le premier écran.',
      },
      {
        titulo: 'Pour la direction',
        texto: 'Le portefeuille, l’équipe et la clôture de l’année, sans attendre qu’on prépare un rapport.',
      },
    ],
    indiceLabel: 'Chapitres',
    capitulos: [
      {
        id: 'cartera',
        numero: 'Chapitre 1',
        titulo: 'Connaître le portefeuille',
        entradilla:
          'Avant d’aller vendre, il faut savoir à qui. Qui porte le chiffre d’affaires et qui s’éloigne sans rien dire.',
        pasos: [
          {
            pantalla: 'piramide',
            titulo: 'La pyramide : qui pèse vraiment',
            parrafos: [
              'RayGold classe tous les clients selon leur chiffre d’affaires et les répartit en quatre niveaux : majeurs, grands, moyens et petits. Les seuils suivent la courbe de Pareto, la logique de toujours, mais recalculée automatiquement à chaque facture.',
              'Le résultat surprend souvent : une poignée de clients en haut porte plus de la moitié du chiffre d’affaires, et une large base de petits clients apporte peu chacun. Perdre un client du haut se voit sur l’année ; en perdre un du bas, non.',
            ],
            puntos: [
              'Poids de chaque client sur l’année et cumul de la courbe',
              'Moyenne par client à chaque niveau',
              'Comparaison par exercice : comment la pyramide évolue d’une année à l’autre',
            ],
          },
          {
            pantalla: 'fidelizacion',
            titulo: 'Fidélisation : l’alerte avant la perte',
            parrafos: [
              'Chaque client reçoit trois notes, de récence, de fréquence et de montant, et avec elles un statut : champion, fidèle, prometteur, à risque, endormi ou perdu. Personne n’a à l’étiqueter à la main.',
              'La ligne des mois habituels est la plus utilisée : elle montre les mois où chaque client achète d’ordinaire. Si l’on est dans l’un de ses mois et qu’il n’a rien commandé, le client est signalé avant que la baisse n’arrive au bilan.',
            ],
            puntos: [
              'Mois sans achat et chiffre d’affaires des 12 derniers mois',
              'Évolution par rapport à l’année précédente',
              'Alertes pour les clients qui sautent leur mois habituel',
            ],
          },
        ],
      },
      {
        id: 'dia',
        numero: 'Chapitre 2',
        titulo: 'Travailler la journée',
        entradilla:
          'Le commercial n’a pas besoin de rapports : il a besoin de savoir quoi faire ce matin et de garder une trace de ce qu’il a fait.',
        pasos: [
          {
            pantalla: 'mi-dia',
            titulo: 'Ma journée : le premier écran du commercial',
            parrafos: [
              'À la connexion, le commercial voit ses ventes du mois et de l’année face à l’objectif, son agenda, les relances en attente et la liste des clients à reconquérir : ceux qui auraient déjà dû racheter selon leur rythme habituel.',
              'Le siège lui envoie une vitrine des pièces à présenter cette saison, avec leur référence et leur photo. Il arrive en visite en sachant quoi montrer.',
            ],
            puntos: [
              'Agenda filtré par type : visites, appels, rappels, opportunités',
              'Clients à reconquérir avec jours sans achat et fréquence habituelle',
              'Vitrine de pièces envoyée par le siège',
            ],
          },
          {
            pantalla: 'actividades',
            titulo: 'Suivi : ce qui se dit est consigné',
            parrafos: [
              'Visites, appels, rappels, pistes, opportunités, incidents, mailings, notes et documents. Tout ce qui se passe avec un client se trouve dans une seule liste, avec son statut, sa priorité et la date de la prochaine action.',
              'Si un commercial part ou change de secteur, la relation client ne part pas avec lui : l’historique reste dans le logiciel.',
            ],
            puntos: [
              'Filtres par type d’activité avec leur nombre',
              'Prochaine action datée, en rouge si elle est en retard',
              'Vue par commercial et par client',
            ],
          },
        ],
      },
      {
        id: 'adelante',
        numero: 'Chapitre 3',
        titulo: 'Regarder devant',
        entradilla:
          'Le facturé appartient au passé. La direction doit savoir comment l’année va se terminer et qui est en retard tant qu’il reste du temps.',
        pasos: [
          {
            pantalla: 'forecast',
            titulo: 'Prévisions : la clôture de l’année, mois par mois',
            parrafos: [
              'Le facturé plus le pipeline d’opportunités pondéré par sa probabilité, mois par mois, face à l’objectif. La ligne de l’objectif et les barres du réalisé disent d’un coup d’œil si l’année se passe bien.',
              'Un clic sur un mois fait apparaître les opportunités qui le soutiennent, avec leur étape, leur montant et leur date de clôture. Celles qui sont échues sont signalées.',
            ],
            puntos: [
              'Objectif, réalisé cumulé, pipeline pondéré et prévision de clôture',
              'Ce qui manque pour atteindre l’objectif, en euros et en pourcentage',
              'Cellules mensuelles en montant ou en pourcentage',
            ],
          },
          {
            pantalla: 'objetivos',
            titulo: 'Objectifs : la répartition par client',
            parrafos: [
              'L’objectif du commercial est réparti entre ses clients, et RayGold compare chacun au facturé à date. On voit qui est en retard, qui est sous surveillance et qui atteint son objectif.',
              'La colonne des mois en dessous compte combien de mois d’affilée un client n’atteint pas sa part : l’alerte arrive avant que l’écart devienne impossible à rattraper.',
            ],
            puntos: [
              'Objectif à date, réalisé, écart et projection de clôture',
              'Rapprochement entre l’objectif du commercial et la somme de ses clients',
              'Vue de suivi et vue de fixation des objectifs',
            ],
          },
          {
            pantalla: 'central',
            titulo: 'Pilotage : toute l’équipe sur un seul écran',
            parrafos: [
              'La direction commerciale voit tous les commerciaux à la fois : ventes de l’année, classement face à l’objectif, rythme mensuel, prévision de clôture et pipeline.',
              'C’est d’ici que l’on répartit les territoires, que l’on suit les intégrations et que l’on envoie les vitrines aux commerciaux. Cette vue ne dépend d’aucun commercial : c’est celle de toute l’équipe.',
            ],
            puntos: [
              'Classement des commerciaux avec leur taux de réalisation',
              'Rythme de l’année face à l’objectif et à l’année précédente',
              'Territoires, équipe et intégrations',
            ],
          },
        ],
      },
    ],
    masTitulo: 'Et d’autres écrans dans le même module',
    masTexto: 'Le CRM commercial comprend aussi ces vues, sur les mêmes données.',
    masPantallas: ['Contacts', 'Pipeline', 'Réachat', 'Statistiques', 'Images', 'Marketing'],
    faqTitulo: 'Questions fréquentes',
    faq: [
      {
        pregunta: 'Le CRM de RayGold est-il un logiciel à part ?',
        respuesta:
          'Non. C’est un module de l’ERP lui-même, qui travaille sur les mêmes ventes, commandes, factures et clients. Il n’y a pas de données à importer ni deux logiciels à tenir à jour.',
      },
      {
        pregunta: 'Comment RayGold décide-t-il qu’un client est à risque ?',
        respuesta:
          'Avec trois notes calculées sur ses achats : la récence (depuis quand il n’a pas acheté), la fréquence (à quel rythme il achète) et le montant (combien il dépense). Il les compare aussi à ses mois d’achat habituels pour signaler quand il en saute un.',
      },
      {
        pregunta: 'Est-il destiné aux commerciaux ou à la direction ?',
        respuesta:
          'Aux deux, avec des écrans différents. Le commercial travaille avec sa journée, son agenda, son suivi et ses clients à reconquérir. La direction utilise la pyramide, les prévisions, les objectifs et le pilotage de l’équipe.',
      },
    ],
    cierreTitulo: 'Vos clients sont déjà dans RayGold.',
    cierreEnfasis: 'Il ne reste qu’à les voir ainsi.',
    cierreTexto:
      'Nous vous présentons le CRM avec une démonstration sur une bijouterie fictive et vous expliquons ce qu’il donnerait avec vos données.',
    cierreCta: 'Demander une démonstration',
  },
};

/* ═══════════════════════════ CATALÀ ═══════════════════════════ */
const ca: CrmTranslations = {
  vitrina: {
    sello: 'CRM comercial',
    titulo: 'La fuga que no surt al balanç:',
    tituloEnfasis: 'el client que deixa de comprar sense avisar.',
    lead:
      'El CRM de RayGold no és un programa a part: treballa sobre les mateixes vendes, comandes i factures que la resta de l’ERP. El venedor sap a qui ha de trucar avui i la direcció veu l’any sencer.',
    pestanasLabel: 'Pantalles del CRM',
    para: {
      vendedor: 'Venedor',
      direccion: 'Direcció',
    },
    etiquetaPantalla: 'Pantalla real · dades de demostració',
    verPantalla: 'Veure a pantalla completa',
    cerrar: 'Tancar',
    verMas: 'Veure el CRM a fons',
  },
  pantallas: [
    {
      id: 'mi-dia',
      pestana: 'El meu dia',
      para: 'vendedor',
      titulo: 'Obre el programa i sap a qui trucar.',
      texto:
        'Vendes del mes, agenda, seguiments vençuts i els clients que ja haurien d’haver tornat a comprar. I l’aparador de peces que li envia central per ensenyar a la visita.',
      archivo: 'crm-mi-dia.webp',
      alt: 'Inici del venedor a RayGold: vendes del mes, aparador de joies, agenda del dia i clients a recuperar',
    },
    {
      id: 'actividades',
      pestana: 'Seguiment',
      para: 'vendedor',
      titulo: 'Cada visita, trucada i oportunitat, anotada.',
      texto:
        'Visites, trucades, avisos, incidències i documents de cada client en una sola llista, amb el seu estat, la seva prioritat i la propera acció.',
      archivo: 'crm-actividades.webp',
      alt: 'Llista d’activitats comercials a RayGold filtrada per tipus, amb estat, prioritat i propera acció',
    },
    {
      id: 'fidelizacion',
      pestana: 'Fidelització',
      para: 'vendedor',
      titulo: 'Veus qui se’t va abans de perdre’l.',
      texto:
        'Cada client es classifica sol per recència, freqüència i import: campions, fidels, en risc, adormits. Els seus mesos habituals de compra avisen quan un se salta la comanda de sempre.',
      archivo: 'crm-fidelizacion.webp',
      alt: 'Fidelització de clients a RayGold: segments RFM, mesos habituals de compra i variació respecte a l’any anterior',
    },
    {
      id: 'piramide',
      pestana: 'Piràmide',
      para: 'direccion',
      titulo: 'Qui sosté de veritat la teva facturació.',
      texto:
        'La cartera ordenada en superiors, grans, mitjans i petits segons la corba de Pareto. Gairebé sempre, uns quants clients pesen més que tots els altres junts.',
      archivo: 'crm-piramide.webp',
      alt: 'Piràmide de clients a RayGold: segments superiors, grans, mitjans i petits amb el seu pes en la facturació',
    },
    {
      id: 'forecast',
      pestana: 'Previsió',
      para: 'direccion',
      titulo: 'Saps a l’octubre com tancaràs l’any.',
      texto:
        'El facturat més el pipeline ponderat per probabilitat, mes a mes, davant de l’objectiu. Un clic en un mes i veus quines oportunitats el sostenen.',
      archivo: 'crm-forecast.webp',
      alt: 'Previsió comercial a RayGold: vendes reals i pipeline ponderat davant de l’objectiu mensual',
    },
    {
      id: 'central',
      pestana: 'Central',
      para: 'direccion',
      titulo: 'Tot l’equip comercial en una pantalla.',
      texto:
        'Rànquing de venedors, previsió de tancament, embut, territoris i incorporacions. La direcció ho té a la vista sense demanar informes.',
      archivo: 'crm-central.webp',
      alt: 'Central comercial de RayGold: vendes de l’any, rànquing de venedors i ritme mensual davant de l’objectiu',
    },
  ],
  pantallasExtra: [
    {
      id: 'objetivos',
      pestana: 'Objectius',
      para: 'direccion',
      titulo: 'L’objectiu de cada client, i qui va endarrerit.',
      texto: 'Objectiu anual repartit per client, compliment a data i projecció de tancament.',
      archivo: 'crm-objetivos.webp',
      alt: 'Objectius per client a RayGold: objectiu anual, real acumulat, desviació, compliment i projecció de tancament',
    },
  ],
  pagina: {
    metaTitulo: 'CRM per a joieria: clients, venedors i previsió de vendes | RayGold',
    metaDescripcion:
      'El CRM de RayGold treballa sobre les vendes i factures de l’ERP de joieria: fidelització per recència, freqüència i import, piràmide de clients, agenda del venedor, previsió i objectius.',
    sello: 'CRM comercial',
    titulo: 'El CRM que ja coneix els teus clients',
    tituloEnfasis: 'perquè viu dins de l’ERP.',
    lead:
      'Un CRM a part comença buit i es queda a mitges: algú ha d’introduir-hi les vendes. El de RayGold llegeix les mateixes factures, comandes i clients que fa servir la resta del programa, així que des del primer dia sap qui compra, quant i cada quant.',
    ctaContacto: 'Demanar una demostració',
    ctaRecorrido: 'Veure el recorregut',
    claves: [
      {
        titulo: 'Sobre les dades de sempre',
        texto: 'Vendes, comandes i factures de l’ERP. Res a importar ni a quadrar a final de mes.',
      },
      {
        titulo: 'Per al venedor',
        texto: 'El seu dia, la seva agenda i els clients que ha de recuperar, a la primera pantalla.',
      },
      {
        titulo: 'Per a la direcció',
        texto: 'La cartera, l’equip i el tancament de l’any, sense esperar que algú prepari un informe.',
      },
    ],
    indiceLabel: 'Capítols',
    capitulos: [
      {
        id: 'cartera',
        numero: 'Capítol 1',
        titulo: 'Conèixer la cartera',
        entradilla:
          'Abans de sortir a vendre cal saber a qui. Qui sosté la facturació i qui s’està allunyant sense dir res.',
        pasos: [
          {
            pantalla: 'piramide',
            titulo: 'La piràmide: qui pesa de veritat',
            parrafos: [
              'RayGold ordena tots els clients pel que facturen i els reparteix en quatre esglaons: superiors, grans, mitjans i petits. Els talls segueixen la corba de Pareto, la mateixa lògica de sempre, però recalculada sola amb cada factura.',
              'El resultat sol sorprendre: un grapat de clients a dalt sostenen més de la meitat dels ingressos, i una base ampla de petits aporta poc cadascun. Perdre’n un de dalt es nota a l’any; perdre’n un de baix, no.',
            ],
            puntos: [
              'Pes de cada client sobre l’any i acumulat de la corba',
              'Mitjana per client a cada esglaó',
              'Comparativa per exercici: com es mou la piràmide d’un any a l’altre',
            ],
          },
          {
            pantalla: 'fidelizacion',
            titulo: 'Fidelització: l’avís abans de la pèrdua',
            parrafos: [
              'Cada client rep tres notes, de recència, freqüència i import, i amb elles un estat: campió, fidel, prometedor, en risc, adormit o perdut. Ningú no l’ha d’etiquetar a mà.',
              'La fila de mesos habituals és la que més es fa servir: mostra en quins mesos sol comprar cada client. Si som en un dels seus mesos i no ha demanat res, el client es marca abans que la caiguda arribi al balanç.',
            ],
            puntos: [
              'Mesos sense compra i facturació dels darrers 12 mesos',
              'Variació respecte a l’any anterior',
              'Alertes de clients que se salten el seu mes habitual',
            ],
          },
        ],
      },
      {
        id: 'dia',
        numero: 'Capítol 2',
        titulo: 'Treballar el dia',
        entradilla:
          'El venedor no necessita informes: necessita saber què ha de fer aquest matí i deixar constància del que ha fet.',
        pasos: [
          {
            pantalla: 'mi-dia',
            titulo: 'El meu dia: la primera pantalla del venedor',
            parrafos: [
              'En entrar, el venedor veu les vendes del mes i de l’any davant de l’objectiu, la seva agenda, els seguiments pendents i la llista de clients a recuperar: els que ja haurien d’haver tornat a comprar segons el seu ritme habitual.',
              'Central li envia un aparador amb les peces que vol que s’ensenyin aquesta temporada, amb la referència i la foto. Arriba a la visita sabent què ha de presentar.',
            ],
            puntos: [
              'Agenda filtrada per tipus: visites, trucades, avisos, oportunitats',
              'Clients a recuperar amb dies sense comprar i freqüència habitual',
              'Aparador de peces enviat per central',
            ],
          },
          {
            pantalla: 'actividades',
            titulo: 'Seguiment: el que es parla queda escrit',
            parrafos: [
              'Visites, trucades, avisos, pistes, oportunitats, incidències, mailings, notes i documents. Tot el que passa amb un client queda en una sola llista, amb el seu estat, la seva prioritat i la data de la propera acció.',
              'Si un venedor marxa o canvia de zona, la relació amb el client no se’n va amb ell: l’historial continua al programa.',
            ],
            puntos: [
              'Filtres per tipus d’activitat amb el seu recompte',
              'Propera acció amb data, en vermell si està vençuda',
              'Vista per venedor i per client',
            ],
          },
        ],
      },
      {
        id: 'adelante',
        numero: 'Capítol 3',
        titulo: 'Mirar endavant',
        entradilla:
          'El que s’ha facturat ja ha passat. La direcció necessita saber com acabarà l’any i qui va endarrerit mentre encara hi ha temps.',
        pasos: [
          {
            pantalla: 'forecast',
            titulo: 'Previsió: el tancament de l’any, mes a mes',
            parrafos: [
              'El facturat més el pipeline d’oportunitats ponderat per la seva probabilitat, mes a mes, davant de l’objectiu. La línia de l’objectiu i les barres del real diuen d’un cop d’ull si l’any va bé.',
              'Un clic en un mes i apareixen les oportunitats que el sostenen, amb la fase, l’import i la data de tancament. Les vençudes surten marcades.',
            ],
            puntos: [
              'Objectiu, real acumulat, pipeline ponderat i previsió de tancament',
              'El que falta per a l’objectiu, en euros i en percentatge',
              'Cel·les per mes en import o en percentatge',
            ],
          },
          {
            pantalla: 'objetivos',
            titulo: 'Objectius: el repartiment per client',
            parrafos: [
              'L’objectiu del venedor es reparteix entre els seus clients, i RayGold compara cadascun amb el que s’ha facturat fins avui. Es veu qui va endarrerit, qui està en avís i qui compleix.',
              'La columna de mesos per sota compta quants mesos seguits porta un client sense arribar a la seva part: l’avís arriba abans que la desviació sigui impossible de recuperar.',
            ],
            puntos: [
              'Objectiu a data, real, desviació i projecció de tancament',
              'Quadrament entre l’objectiu del venedor i la suma dels seus clients',
              'Vista de seguiment i vista per fixar objectius',
            ],
          },
          {
            pantalla: 'central',
            titulo: 'Central: tot l’equip en una pantalla',
            parrafos: [
              'La direcció comercial veu tots els venedors alhora: vendes de l’any, rànquing davant de l’objectiu, ritme mensual, previsió de tancament i pipeline.',
              'Des d’aquí es reparteixen territoris, se segueixen les incorporacions i s’envien aparadors als venedors. No depèn de cap venedor en concret: és la vista de l’equip sencer.',
            ],
            puntos: [
              'Rànquing de venedors amb el seu compliment',
              'Ritme de l’any davant de l’objectiu i de l’any anterior',
              'Territoris, equip i incorporacions',
            ],
          },
        ],
      },
    ],
    masTitulo: 'I més pantalles al mateix mòdul',
    masTexto: 'El CRM comercial inclou també aquestes vistes, sobre les mateixes dades.',
    masPantallas: ['Contactes', 'Pipeline', 'Recompra', 'Estadístiques', 'Imatges', 'Màrqueting'],
    faqTitulo: 'Preguntes freqüents',
    faq: [
      {
        pregunta: 'El CRM de RayGold és un programa a part?',
        respuesta:
          'No. És un mòdul del mateix ERP i treballa sobre les mateixes vendes, comandes, factures i clients. No cal importar dades ni mantenir dos programes al dia.',
      },
      {
        pregunta: 'Com decideix RayGold si un client està en risc?',
        respuesta:
          'Amb tres notes calculades sobre les seves compres: recència (quant fa que va comprar), freqüència (cada quant compra) i import (quant factura). A més, ho compara amb els seus mesos habituals de compra per avisar quan se’n salta un.',
      },
      {
        pregunta: 'El fan servir els venedors o la direcció?',
        respuesta:
          'Tots dos, amb pantalles diferents. El venedor treballa amb el seu dia, la seva agenda, el seu seguiment i els clients a recuperar. La direcció fa servir la piràmide, la previsió, els objectius i la central de l’equip.',
      },
    ],
    cierreTitulo: 'Els teus clients ja són a RayGold.',
    cierreEnfasis: 'Només cal mirar-los així.',
    cierreTexto:
      'T’ensenyem el CRM amb una demostració sobre una joieria d’exemple i t’expliquem com quedaria amb les teves dades.',
    cierreCta: 'Demanar una demostració',
  },
};

/* ═══════════════════════ PORTUGUÊS (BRASIL) ═══════════════════════ */
const ptbr: CrmTranslations = {
  vitrina: {
    sello: 'CRM comercial',
    titulo: 'O vazamento que não aparece no balanço:',
    tituloEnfasis: 'o cliente que para de comprar sem avisar.',
    lead:
      'O CRM do RayGold não é um programa à parte: ele trabalha sobre as mesmas vendas, pedidos e notas fiscais que o restante do ERP. O vendedor sabe para quem ligar hoje e a diretoria vê o ano inteiro.',
    pestanasLabel: 'Telas do CRM',
    para: {
      vendedor: 'Vendedor',
      direccion: 'Diretoria',
    },
    etiquetaPantalla: 'Tela real · dados de demonstração',
    verPantalla: 'Ver em tela cheia',
    cerrar: 'Fechar',
    verMas: 'Conhecer o CRM a fundo',
  },
  pantallas: [
    {
      id: 'mi-dia',
      pestana: 'Meu dia',
      para: 'vendedor',
      titulo: 'Abre o sistema e sabe para quem ligar.',
      texto:
        'Vendas do mês, agenda, acompanhamentos atrasados e os clientes que já deveriam ter voltado a comprar. E a vitrine de peças que a central envia para mostrar na visita.',
      archivo: 'crm-mi-dia.webp',
      alt: 'Tela inicial do vendedor no RayGold: vendas do mês, vitrine de joias, agenda do dia e clientes a recuperar',
    },
    {
      id: 'actividades',
      pestana: 'Acompanhamento',
      para: 'vendedor',
      titulo: 'Cada visita, ligação e oportunidade, registrada.',
      texto:
        'Visitas, ligações, avisos, ocorrências e documentos de cada cliente em uma única lista, com status, prioridade e próxima ação.',
      archivo: 'crm-actividades.webp',
      alt: 'Lista de atividades comerciais no RayGold filtrada por tipo, com status, prioridade e próxima ação',
    },
    {
      id: 'fidelizacion',
      pestana: 'Fidelização',
      para: 'vendedor',
      titulo: 'Veja quem está se afastando antes de perdê-lo.',
      texto:
        'Cada cliente é classificado automaticamente por recência, frequência e valor: campeões, fiéis, em risco, inativos. Os meses habituais de compra avisam quando alguém pula o pedido de sempre.',
      archivo: 'crm-fidelizacion.webp',
      alt: 'Fidelização de clientes no RayGold: segmentos RFM, meses habituais de compra e variação em relação ao ano anterior',
    },
    {
      id: 'piramide',
      pestana: 'Pirâmide',
      para: 'direccion',
      titulo: 'Quem realmente sustenta o seu faturamento.',
      texto:
        'A carteira ordenada em superiores, grandes, médios e pequenos segundo a curva de Pareto. Quase sempre, poucos clientes pesam mais do que todos os outros juntos.',
      archivo: 'crm-piramide.webp',
      alt: 'Pirâmide de clientes no RayGold: segmentos superiores, grandes, médios e pequenos com seu peso no faturamento',
    },
    {
      id: 'forecast',
      pestana: 'Previsão',
      para: 'direccion',
      titulo: 'Saiba em outubro como vai fechar o ano.',
      texto:
        'O faturado mais o pipeline ponderado por probabilidade, mês a mês, frente à meta. Um clique em um mês mostra as oportunidades que o sustentam.',
      archivo: 'crm-forecast.webp',
      alt: 'Previsão comercial no RayGold: vendas realizadas e pipeline ponderado frente à meta mensal',
    },
    {
      id: 'central',
      pestana: 'Central',
      para: 'direccion',
      titulo: 'Toda a equipe comercial em uma única tela.',
      texto:
        'Ranking de vendedores, previsão de fechamento, funil, territórios e integrações. A diretoria tem tudo à vista sem pedir relatórios.',
      archivo: 'crm-central.webp',
      alt: 'Central comercial do RayGold: vendas do ano, ranking de vendedores e ritmo mensal frente à meta',
    },
  ],
  pantallasExtra: [
    {
      id: 'objetivos',
      pestana: 'Metas',
      para: 'direccion',
      titulo: 'A meta de cada cliente, e quem está atrasado.',
      texto: 'Meta anual distribuída por cliente, cumprimento até a data e projeção de fechamento.',
      archivo: 'crm-objetivos.webp',
      alt: 'Metas por cliente no RayGold: meta anual, realizado acumulado, desvio, cumprimento e projeção de fechamento',
    },
  ],
  pagina: {
    metaTitulo: 'CRM para joalheria: clientes, vendedores e previsão de vendas | RayGold',
    metaDescripcion:
      'O CRM do RayGold trabalha sobre as vendas e notas fiscais do ERP para joalheria: fidelização por recência, frequência e valor, pirâmide de clientes, agenda do vendedor, previsão e metas.',
    sello: 'CRM comercial',
    titulo: 'O CRM que já conhece os seus clientes',
    tituloEnfasis: 'porque vive dentro do ERP.',
    lead:
      'Um CRM separado começa vazio e fica pela metade: alguém precisa alimentá-lo com as vendas. O do RayGold lê as mesmas notas fiscais, pedidos e clientes que o restante do sistema usa, então desde o primeiro dia sabe quem compra, quanto e com que frequência.',
    ctaContacto: 'Solicitar uma demonstração',
    ctaRecorrido: 'Ver o percurso',
    claves: [
      {
        titulo: 'Sobre os dados de sempre',
        texto: 'Vendas, pedidos e notas fiscais do ERP. Nada para importar nem conciliar no fim do mês.',
      },
      {
        titulo: 'Para o vendedor',
        texto: 'O dia dele, a agenda e os clientes que precisa recuperar, logo na primeira tela.',
      },
      {
        titulo: 'Para a diretoria',
        texto: 'A carteira, a equipe e o fechamento do ano, sem esperar que alguém prepare um relatório.',
      },
    ],
    indiceLabel: 'Capítulos',
    capitulos: [
      {
        id: 'cartera',
        numero: 'Capítulo 1',
        titulo: 'Conhecer a carteira',
        entradilla:
          'Antes de sair para vender é preciso saber para quem. Quem sustenta o faturamento e quem está se afastando sem dizer nada.',
        pasos: [
          {
            pantalla: 'piramide',
            titulo: 'A pirâmide: quem realmente pesa',
            parrafos: [
              'O RayGold ordena todos os clientes pelo que faturam e os distribui em quatro degraus: superiores, grandes, médios e pequenos. Os cortes seguem a curva de Pareto, a mesma lógica de sempre, mas recalculada automaticamente a cada nota fiscal.',
              'O resultado costuma surpreender: um punhado de clientes no topo sustenta mais da metade da receita, e uma base ampla de pequenos contribui pouco cada um. Perder um do topo pesa no ano; perder um da base, não.',
            ],
            puntos: [
              'Peso de cada cliente no ano e acumulado da curva',
              'Média por cliente em cada degrau',
              'Comparação por exercício: como a pirâmide muda de um ano para outro',
            ],
          },
          {
            pantalla: 'fidelizacion',
            titulo: 'Fidelização: o alerta antes da perda',
            parrafos: [
              'Cada cliente recebe três notas, de recência, frequência e valor, e com elas um status: campeão, fiel, promissor, em risco, inativo ou perdido. Ninguém precisa etiquetá-lo à mão.',
              'A linha de meses habituais é a mais usada: mostra em quais meses cada cliente costuma comprar. Se estamos em um desses meses e ele não fez nenhum pedido, o cliente é marcado antes que a queda chegue ao balanço.',
            ],
            puntos: [
              'Meses sem compra e faturamento dos últimos 12 meses',
              'Variação em relação ao ano anterior',
              'Alertas de clientes que pulam o mês habitual',
            ],
          },
        ],
      },
      {
        id: 'dia',
        numero: 'Capítulo 2',
        titulo: 'Trabalhar o dia',
        entradilla:
          'O vendedor não precisa de relatórios: precisa saber o que fazer nesta manhã e deixar registrado o que fez.',
        pasos: [
          {
            pantalla: 'mi-dia',
            titulo: 'Meu dia: a primeira tela do vendedor',
            parrafos: [
              'Ao entrar, o vendedor vê as vendas do mês e do ano frente à meta, a agenda, os acompanhamentos pendentes e a lista de clientes a recuperar: os que já deveriam ter voltado a comprar segundo o seu ritmo habitual.',
              'A central envia uma vitrine com as peças que quer mostrar nesta temporada, com referência e foto. Ele chega à visita sabendo o que apresentar.',
            ],
            puntos: [
              'Agenda filtrada por tipo: visitas, ligações, avisos, oportunidades',
              'Clientes a recuperar com dias sem comprar e frequência habitual',
              'Vitrine de peças enviada pela central',
            ],
          },
          {
            pantalla: 'actividades',
            titulo: 'Acompanhamento: o que se conversa fica registrado',
            parrafos: [
              'Visitas, ligações, avisos, leads, oportunidades, ocorrências, mailings, notas e documentos. Tudo o que acontece com um cliente fica em uma única lista, com status, prioridade e data da próxima ação.',
              'Se um vendedor sai ou muda de região, o relacionamento com o cliente não vai embora com ele: o histórico continua no sistema.',
            ],
            puntos: [
              'Filtros por tipo de atividade com sua contagem',
              'Próxima ação com data, em vermelho quando atrasada',
              'Visão por vendedor e por cliente',
            ],
          },
        ],
      },
      {
        id: 'adelante',
        numero: 'Capítulo 3',
        titulo: 'Olhar para frente',
        entradilla:
          'O que foi faturado já passou. A diretoria precisa saber como o ano vai terminar e quem está atrasado enquanto ainda há tempo.',
        pasos: [
          {
            pantalla: 'forecast',
            titulo: 'Previsão: o fechamento do ano, mês a mês',
            parrafos: [
              'O faturado mais o pipeline de oportunidades ponderado pela probabilidade, mês a mês, frente à meta. A linha da meta e as barras do realizado mostram de relance se o ano vai bem.',
              'Um clique em um mês e aparecem as oportunidades que o sustentam, com fase, valor e data de fechamento. As vencidas aparecem marcadas.',
            ],
            puntos: [
              'Meta, realizado acumulado, pipeline ponderado e previsão de fechamento',
              'Quanto falta para a meta, em valor e em porcentagem',
              'Células por mês em valor ou em porcentagem',
            ],
          },
          {
            pantalla: 'objetivos',
            titulo: 'Metas: a distribuição por cliente',
            parrafos: [
              'A meta do vendedor é distribuída entre os seus clientes, e o RayGold compara cada um com o que foi faturado até hoje. Dá para ver quem está atrasado, quem está em alerta e quem está cumprindo.',
              'A coluna de meses abaixo conta quantos meses seguidos um cliente não alcança a sua parte: o alerta chega antes que o desvio se torne impossível de recuperar.',
            ],
            puntos: [
              'Meta até a data, realizado, desvio e projeção de fechamento',
              'Conciliação entre a meta do vendedor e a soma dos seus clientes',
              'Visão de acompanhamento e visão para definir metas',
            ],
          },
          {
            pantalla: 'central',
            titulo: 'Central: toda a equipe em uma única tela',
            parrafos: [
              'A diretoria comercial vê todos os vendedores ao mesmo tempo: vendas do ano, ranking frente à meta, ritmo mensal, previsão de fechamento e pipeline.',
              'Daqui se distribuem territórios, se acompanham as integrações de novos vendedores e se enviam vitrines à equipe. Não depende de nenhum vendedor específico: é a visão da equipe inteira.',
            ],
            puntos: [
              'Ranking de vendedores com o seu cumprimento',
              'Ritmo do ano frente à meta e ao ano anterior',
              'Territórios, equipe e integrações',
            ],
          },
        ],
      },
    ],
    masTitulo: 'E mais telas no mesmo módulo',
    masTexto: 'O CRM comercial inclui também estas visões, sobre os mesmos dados.',
    masPantallas: ['Contatos', 'Pipeline', 'Recompra', 'Estatísticas', 'Imagens', 'Marketing'],
    faqTitulo: 'Perguntas frequentes',
    faq: [
      {
        pregunta: 'O CRM do RayGold é um programa à parte?',
        respuesta:
          'Não. É um módulo do próprio ERP e trabalha sobre as mesmas vendas, pedidos, notas fiscais e clientes. Não é preciso importar dados nem manter dois sistemas atualizados.',
      },
      {
        pregunta: 'Como o RayGold decide se um cliente está em risco?',
        respuesta:
          'Com três notas calculadas sobre as suas compras: recência (há quanto tempo comprou), frequência (de quanto em quanto tempo compra) e valor (quanto fatura). Além disso, compara com os seus meses habituais de compra para avisar quando ele pula um.',
      },
      {
        pregunta: 'Quem usa: os vendedores ou a diretoria?',
        respuesta:
          'Os dois, com telas diferentes. O vendedor trabalha com o seu dia, a agenda, o acompanhamento e os clientes a recuperar. A diretoria usa a pirâmide, a previsão, as metas e a central da equipe.',
      },
    ],
    cierreTitulo: 'Seus clientes já estão no RayGold.',
    cierreEnfasis: 'Só falta olhá-los assim.',
    cierreTexto:
      'Mostramos o CRM com uma demonstração sobre uma joalheria de exemplo e explicamos como ficaria com os seus dados.',
    cierreCta: 'Solicitar uma demonstração',
  },
};

const crm: Record<Lang, CrmTranslations> = { es, en, fr, ca, 'pt-br': ptbr };

export function getCrmTranslations(lang: Lang): CrmTranslations {
  return crm[lang] ?? es;
}
