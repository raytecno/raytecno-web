/**
 * crm.ts — Textos del CRM comercial: vitrina de portada y página /crm
 *
 * @file src/i18n/crm.ts
 *
 * Paso 1 (Octubre 2026): vitrina de la portada (clave `vitrina` + `pantallas`).
 * Paso 2 (Octubre 2026): página /crm (clave `pagina`). Los capítulos reutilizan
 * las capturas de `pantallas` por su `id`, más `objetivos`, que solo sale aquí.
 *
 * Paso 3 (Noviembre 2026): /crm amplía con `sinApis`, `grupos` (calle,
 * cliente, IA), `oro` y `comparativa`, y sustituye a `masPantallas`. Solo
 * funciones ya disponibles; el precio va como "incluido en el ERP" (la web
 * cobra por usuario, no por empresa).
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

export interface CrmSinApis {
  sello: string;
  titulo: string;
  tituloEnfasis: string;
  texto: string;
  /** Columna izquierda: un CRM aparte y sus conexiones */
  aparteTitulo: string;
  aparteFlechas: string[];
  aparteNota: string;
  /** Columna derecha: RayGold, una sola aplicación */
  rgTitulo: string;
  rgBloques: string[];
  rgNota: string;
  ventajas: { titulo: string; texto: string }[];
}

export interface CrmGrupo {
  id: string;
  titulo: string;
  entradilla: string;
  items: { titulo: string; texto: string }[];
  /** Línea de aviso al pie del grupo (opcional) */
  nota?: string;
}

export interface CrmOro {
  sello: string;
  titulo: string;
  texto: string;
  pasos: { titulo: string; texto: string }[];
  nota: string;
}

export interface CrmComparativa {
  titulo: string;
  texto: string;
  colQue: string;
  colRg: string;
  colAparte: string;
  /** [qué, RayGold, CRM aparte] */
  filas: [string, string, string][];
  nota: string;
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
    /** Bloque "Sin APIs": un CRM aparte frente a RayGold */
    sinApis: CrmSinApis;
    masTitulo: string;
    masTexto: string;
    /** Funciones sin captura en la página, agrupadas (Noviembre 2026) */
    grupos: CrmGrupo[];
    /** Recorrido "sube el oro → reetiquetar las tiendas" */
    oro: CrmOro;
    comparativa: CrmComparativa;
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
      'CRM para joyería dentro del ERP, sin APIs: fidelización, pirámide de clientes, recompra, forecast y objetivos, ruta con GPS, postventa, WhatsApp, Instagram y Facebook en una bandeja, e IA.',
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
    sinApis: {
      sello: 'Sin APIs · sin integraciones',
      titulo: 'Un CRM aparte hay que conectarlo.',
      tituloEnfasis: 'El de RayGold ya está dentro.',
      texto:
        'Un CRM aparte no sabe nada de la empresa hasta que se le conecta: una API para los clientes, otra para las facturas, otra para los pedidos, otra para el stock… y alguien que las vigile. En RayGold el CRM es una pantalla más de la misma aplicación, sobre la misma base de datos.',
      aparteTitulo: 'Un CRM aparte',
      aparteFlechas: [
        'API · sincronizar clientes y artículos',
        'API · traspasar las ventas cada noche',
        'API · pasar el pedido del CRM al ERP',
        'API · estadísticas y objetivos',
      ],
      aparteNota: 'Cada flecha es un desarrollo, una cuota y un sitio donde se pierden o se duplican datos.',
      rgTitulo: 'RayGold · una aplicación, una base de datos',
      rgBloques: [
        'Clientes', 'Artículos', 'Precios', 'Stock', 'Pedidos', 'Facturas',
        'Fidelización', 'Pirámide', 'Forecast', 'Pipeline', 'Postventa', 'Mensajes',
      ],
      rgNota: 'Sin flechas: el CRM lee y escribe directamente los clientes, las facturas y los pedidos del ERP. Solo salen fuera WhatsApp, Instagram, Facebook y el email, con las conexiones ya hechas.',
      ventajas: [
        {
          titulo: 'Nada que conectar',
          texto: 'Ni conectores, ni sincronizaciones nocturnas, ni datos copiados de un programa a otro.',
        },
        {
          titulo: 'Todo al momento',
          texto: 'La factura que sale ahora ya está en la ficha del cliente, en su fidelización y en el forecast.',
        },
        {
          titulo: 'Nada que mantener',
          texto: 'Una actualización del ERP no rompe el CRM: son el mismo programa, con un solo responsable.',
        },
      ],
    },
    masTitulo: 'Fuera de la oficina',
    masTexto:
      'El vendedor en la calle, la conversación con el cliente y una inteligencia artificial que conoce toda la empresa. Sobre los mismos datos.',
    grupos: [
      {
        id: 'calle',
        titulo: 'En la calle',
        entradilla: 'Lo que el vendedor necesita fuera de la oficina, en el móvil.',
        items: [
          {
            titulo: 'Ruta y visitas verificadas',
            texto: 'Los clientes en el mapa por su estado. «He llegado» registra la visita con el GPS y la marca como verificada si está a menos de 200 m del cliente. La ruta del día se ordena por cercanía y se abre en Google Maps.',
          },
          {
            titulo: 'La app del vendedor',
            texto: 'Se instala desde el navegador, en iPhone y Android, sin tiendas de apps: Hoy, Ruta, Clientes, Agenda y Postventa. Con notas de voz, avisos en el móvil y foto a la tarjeta de visita para crear el lead.',
          },
          {
            titulo: 'Postventa de piezas',
            texto: 'Reparaciones, garantías y reclamaciones como tickets, con fotos de la pieza, presupuesto, fecha límite y la firma del cliente con el dedo al dejarla y al recogerla.',
          },
          {
            titulo: 'Recompra',
            texto: 'RayGold aprende de las facturas en qué meses suele comprar cada cliente. Cada mes enseña quién debería comprar, quién ya lo ha hecho y quién falta, con el importe en juego. Es la lista de llamadas.',
          },
        ],
      },
      {
        id: 'cliente',
        titulo: 'Hablar con el cliente',
        entradilla: 'Todos los canales en el mismo sitio, y cada conversación en la ficha del cliente.',
        items: [
          {
            titulo: 'WhatsApp, Instagram y Facebook en una bandeja',
            texto: 'Conectada a las cuentas oficiales de la empresa. Reconoce al cliente por el teléfono y enseña sus ventas de 12 meses. Si es nuevo, pasa a lead con un clic. Y desde el chat se crea un pedido del ERP, con el mismo cálculo de precio.',
          },
          {
            titulo: 'Las tiendas, en la misma bandeja',
            texto: 'Las tiendas hablan con la central desde su TPV, sin WhatsApp. Los comunicados importantes piden «Enterado» y la central ve qué tiendas faltan; los urgentes salen a pantalla completa.',
          },
          {
            titulo: 'Pipeline y leads',
            texto: 'Oportunidades por fase, con la probabilidad calculada sobre el histórico de la empresa. Los leads llegan del formulario de la web, de las redes sociales o de una foto a la tarjeta de visita, y las automatizaciones crean tareas y avisos solas.',
          },
          {
            titulo: 'Marketing por email',
            texto: 'Campañas con Brevo a los segmentos que calcula RayGold (superiores, en riesgo, dormidos…). Los resultados se miden en ventas: cuántos clientes del segmento compraron después y cuánto.',
          },
        ],
      },
      {
        id: 'ia',
        titulo: 'Inteligencia artificial',
        entradilla: 'Trabaja con los datos de todo el ERP, no solo del CRM, y siempre limitada a la cartera de quien pregunta.',
        items: [
          {
            titulo: 'Asistente',
            texto: 'Se le pregunta en lenguaje normal: «¿qué clientes míos están en riesgo?», «¿cómo voy frente al objetivo?», «¿qué stock hay de este anillo?».',
          },
          {
            titulo: 'Preparar la visita',
            texto: 'Resumen del cliente, qué compra, qué ha dejado de comprar y qué ofrecerle. Y el borrador del email.',
          },
          {
            titulo: 'Responder mensajes',
            texto: 'Propone la respuesta con el trato y el idioma de la conversación, sin inventar precios ni plazos, y la resume: qué quiere y cuál es el siguiente paso.',
          },
          {
            titulo: 'Otras IA, por MCP',
            texto: 'RayGold se conecta a Claude, ChatGPT y otros asistentes, que consultan los datos de la empresa con los permisos del usuario y solo en lectura.',
          },
        ],
        nota: 'La IA propone; no envía mensajes ni graba nada por su cuenta. Todo pasa por la persona.',
      },
    ],
    oro: {
      sello: 'Precios y tiendas',
      titulo: 'Sube el oro: precios nuevos en todas las tiendas, sin Excel',
      texto:
        'La central recalcula los precios de las tiendas con el mismo cálculo del ERP: la cotización del día a la ley de cada artículo, la tarifa y el beneficio de cada tienda. Graba solo lo que cambia y avisa a cada tienda.',
      pasos: [
        { titulo: 'Calcular', texto: 'Con la cotización del día y el beneficio de cada tienda.' },
        { titulo: 'Revisar', texto: 'Solo lo que cambia, tienda a tienda, con aviso en las subidas fuera de lo normal.' },
        { titulo: 'Grabar', texto: 'El TPV ya cobra el precio nuevo.' },
        { titulo: 'Avisar', texto: 'Cada tienda recibe la lista de sus piezas con el precio nuevo.' },
        { titulo: 'Reetiquetar', texto: 'La tienda imprime las etiquetas y pulsa «Hecho». La central ve cuáles faltan.' },
      ],
      nota: 'Sin sorpresas en el mostrador: nada llega a la tienda sin revisarse antes.',
    },
    comparativa: {
      titulo: 'Frente a un CRM aparte',
      texto:
        'Los CRM más conocidos son buenos CRM, pero son un programa más: hay que conectarlos al ERP y pagarlos aparte.',
      colQue: 'Qué',
      colRg: 'RayGold',
      colAparte: 'CRM aparte',
      filas: [
        ['Ventas reales en la ficha del cliente', 'De serie', 'Con integración'],
        ['Fidelización, pirámide y recompra', 'De serie', 'Informes a medida'],
        ['Forecast y objetivos con lo facturado', 'De serie', 'Con integración'],
        ['Pedido desde el CRM o desde un WhatsApp', 'Pedido del ERP', 'Se traspasa'],
        ['Postventa de piezas (taller, garantía, firma)', 'De serie', 'No'],
        ['Canal con las tiendas del TPV', 'De serie', 'No'],
        ['WhatsApp, Instagram y Facebook', 'De serie', 'Módulo aparte'],
        ['IA con los datos de toda la empresa', 'Sí', 'Solo los del CRM'],
        ['Precio', 'Incluido en el ERP', 'Licencia aparte'],
      ],
      nota: 'Comparativa orientativa con las funciones estándar de los CRM más extendidos.',
    },
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
      {
        pregunta: '¿Hay que conectar el CRM con el ERP?',
        respuesta:
          'No. El CRM es parte del ERP y usa la misma base de datos, así que no hay APIs, conectores ni sincronizaciones. Lo único que se conecta fuera son las cuentas de WhatsApp, Instagram y Facebook de la empresa y, si se quiere email marketing, la cuenta de Brevo.',
      },
      {
        pregunta: '¿Se puede hacer un pedido desde un WhatsApp?',
        respuesta:
          'Sí. Con el cliente reconocido en la conversación, «Crear pedido» abre un pedido del ERP con el mismo cálculo de precio que Pedidos. Queda en borrador hasta que se confirma.',
      },
      {
        pregunta: '¿La inteligencia artificial actúa sola?',
        respuesta:
          'No. Propone respuestas, citas, actividades o leads, pero no envía mensajes ni graba nada sin que la persona lo confirme. Y solo ve la cartera de quien pregunta.',
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
      'A jewelry CRM inside the ERP, no APIs: loyalty, customer pyramid, repurchase, forecast and targets, GPS routes, after-sales, WhatsApp, Instagram and Facebook in one inbox, and AI.',
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
    sinApis: {
      sello: 'No APIs · no integrations',
      titulo: 'A standalone CRM has to be connected.',
      tituloEnfasis: 'RayGold’s is already inside.',
      texto:
        'A standalone CRM knows nothing about the business until it is connected: one API for customers, another for invoices, another for orders, another for stock… and someone to keep an eye on them. In RayGold the CRM is just another screen of the same application, on the same database.',
      aparteTitulo: 'A standalone CRM',
      aparteFlechas: [
        'API · sync customers and items',
        'API · move sales over every night',
        'API · push CRM orders into the ERP',
        'API · statistics and targets',
      ],
      aparteNota: 'Every arrow is a development project, a subscription and a place where data gets lost or duplicated.',
      rgTitulo: 'RayGold · one application, one database',
      rgBloques: [
        'Customers', 'Items', 'Prices', 'Stock', 'Orders', 'Invoices',
        'Loyalty', 'Pyramid', 'Forecast', 'Pipeline', 'After-sales', 'Messages',
      ],
      rgNota: 'No arrows: the CRM reads and writes the ERP’s customers, invoices and orders directly. Only WhatsApp, Instagram, Facebook and email go outside, with the connections already built.',
      ventajas: [
        {
          titulo: 'Nothing to connect',
          texto: 'No connectors, no nightly syncs, no data copied from one program to another.',
        },
        {
          titulo: 'Everything in real time',
          texto: 'The invoice issued now is already on the customer record, in their loyalty status and in the forecast.',
        },
        {
          titulo: 'Nothing to maintain',
          texto: 'An ERP update does not break the CRM: they are the same program, with a single vendor responsible.',
        },
      ],
    },
    masTitulo: 'Beyond the office',
    masTexto:
      'Sales reps on the road, conversations with customers and an AI that knows the whole business. On the same data.',
    grupos: [
      {
        id: 'calle',
        titulo: 'On the road',
        entradilla: 'What the sales rep needs outside the office, on their phone.',
        items: [
          {
            titulo: 'Route and verified visits',
            texto: 'Customers on the map by status. “I’m here” logs the visit with GPS and marks it verified if the rep is within 200 m of the customer. Today’s route is sorted by distance and opens in Google Maps.',
          },
          {
            titulo: 'The sales rep app',
            texto: 'Installed from the browser on iPhone and Android, no app store needed: Today, Route, Customers, Calendar and After-sales. With voice notes, phone notifications and a business card scanner that creates the lead.',
          },
          {
            titulo: 'Jewelry after-sales',
            texto: 'Repairs, warranties and complaints as tickets, with photos of the piece, quote, due date and the customer’s finger signature at drop-off and pick-up.',
          },
          {
            titulo: 'Repurchase',
            texto: 'RayGold learns from the invoices which months each customer usually buys in. Every month it shows who should buy, who already has and who is missing, with the amount at stake. It is the call list.',
          },
        ],
      },
      {
        id: 'cliente',
        titulo: 'Talking to customers',
        entradilla: 'Every channel in one place, and every conversation on the customer record.',
        items: [
          {
            titulo: 'WhatsApp, Instagram and Facebook in one inbox',
            texto: 'Connected to the company’s official accounts. It recognizes the customer by phone number and shows their last 12 months of sales. New contacts become leads in one click. And an ERP order can be created right from the chat, with the same pricing.',
          },
          {
            titulo: 'Stores in the same inbox',
            texto: 'Stores talk to head office from their POS, without WhatsApp. Important notices require an “Acknowledged” and head office sees which stores are missing; urgent ones take over the full screen.',
          },
          {
            titulo: 'Pipeline and leads',
            texto: 'Opportunities by stage, with the probability calculated from the company’s own history. Leads come from the website form, social media or a photo of a business card, and automations create tasks and reminders on their own.',
          },
          {
            titulo: 'Email marketing',
            texto: 'Brevo campaigns to the segments RayGold calculates (top customers, at risk, dormant…). Results are measured in sales: how many customers in the segment bought afterwards, and how much.',
          },
        ],
      },
      {
        id: 'ia',
        titulo: 'Artificial intelligence',
        entradilla: 'It works with data from the whole ERP, not just the CRM, and is always limited to the portfolio of whoever is asking.',
        items: [
          {
            titulo: 'Assistant',
            texto: 'Ask in plain language: “which of my customers are at risk?”, “how am I doing against target?”, “how much stock is there of this ring?”.',
          },
          {
            titulo: 'Visit prep',
            texto: 'A customer summary: what they buy, what they have stopped buying and what to offer them. Plus a draft email.',
          },
          {
            titulo: 'Replying to messages',
            texto: 'It suggests a reply in the tone and language of the conversation, without making up prices or lead times, and summarizes it: what the customer wants and the next step.',
          },
          {
            titulo: 'Other AIs, via MCP',
            texto: 'RayGold connects to Claude, ChatGPT and other assistants, which can query company data with the user’s permissions, read-only.',
          },
        ],
        nota: 'The AI suggests; it never sends messages or saves anything on its own. Everything goes through a person.',
      },
    ],
    oro: {
      sello: 'Prices and stores',
      titulo: 'Gold goes up: new prices in every store, no spreadsheets',
      texto:
        'Head office recalculates store prices with the ERP’s own pricing: today’s gold price at each item’s fineness, the price list and each store’s margin. It saves only what changes and notifies each store.',
      pasos: [
        { titulo: 'Calculate', texto: 'With today’s price and each store’s margin.' },
        { titulo: 'Review', texto: 'Only what changes, store by store, with a warning on unusual increases.' },
        { titulo: 'Save', texto: 'The POS charges the new price straight away.' },
        { titulo: 'Notify', texto: 'Each store gets the list of its pieces with the new price.' },
        { titulo: 'Re-tag', texto: 'The store prints the tags and taps “Done”. Head office sees which stores are missing.' },
      ],
      nota: 'No surprises at the counter: nothing reaches the store without being reviewed first.',
    },
    comparativa: {
      titulo: 'Versus a standalone CRM',
      texto:
        'The best-known CRMs are good CRMs, but they are one more program: they have to be connected to the ERP and paid for separately.',
      colQue: 'Feature',
      colRg: 'RayGold',
      colAparte: 'Standalone CRM',
      filas: [
        ['Real sales on the customer record', 'Built in', 'Via integration'],
        ['Loyalty, pyramid and repurchase', 'Built in', 'Custom reports'],
        ['Forecast and targets from invoiced sales', 'Built in', 'Via integration'],
        ['Order from the CRM or from a WhatsApp chat', 'ERP order', 'Transferred'],
        ['Jewelry after-sales (workshop, warranty, signature)', 'Built in', 'No'],
        ['Channel with the stores’ POS', 'Built in', 'No'],
        ['WhatsApp, Instagram and Facebook', 'Built in', 'Separate module'],
        ['AI with data from the whole business', 'Yes', 'CRM data only'],
        ['Price', 'Included in the ERP', 'Separate license'],
      ],
      nota: 'Indicative comparison with the standard features of the most widely used CRMs.',
    },
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
      {
        pregunta: 'Does the CRM need to be connected to the ERP?',
        respuesta:
          'No. The CRM is part of the ERP and uses the same database, so there are no APIs, connectors or syncs. The only outside connections are the company’s WhatsApp, Instagram and Facebook accounts and, for email marketing, the Brevo account.',
      },
      {
        pregunta: 'Can an order be placed from a WhatsApp chat?',
        respuesta:
          'Yes. Once the customer is recognized in the conversation, “Create order” opens an ERP order with the same pricing as Orders. It stays as a draft until it is confirmed.',
      },
      {
        pregunta: 'Does the AI act on its own?',
        respuesta:
          'No. It suggests replies, appointments, activities or leads, but it never sends messages or saves anything without the person confirming. And it only sees the portfolio of whoever is asking.',
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
      'CRM pour la bijouterie intégré à l’ERP, sans API : fidélisation, pyramide des clients, réachat, prévisions et objectifs, tournées GPS, SAV, WhatsApp, Instagram et Facebook dans une seule boîte, et IA.',
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
    sinApis: {
      sello: 'Sans API · sans intégrations',
      titulo: 'Un CRM séparé, il faut le connecter.',
      tituloEnfasis: 'Celui de RayGold est déjà dedans.',
      texto:
        'Un CRM séparé ne sait rien de l’entreprise tant qu’on ne l’a pas connecté : une API pour les clients, une autre pour les factures, une autre pour les commandes, une autre pour le stock… et quelqu’un pour les surveiller. Dans RayGold, le CRM est un écran de plus de la même application, sur la même base de données.',
      aparteTitulo: 'Un CRM séparé',
      aparteFlechas: [
        'API · synchroniser clients et articles',
        'API · transférer les ventes chaque nuit',
        'API · envoyer la commande du CRM à l’ERP',
        'API · statistiques et objectifs',
      ],
      aparteNota: 'Chaque flèche est un développement, un abonnement et un endroit où les données se perdent ou se dupliquent.',
      rgTitulo: 'RayGold · une application, une base de données',
      rgBloques: [
        'Clients', 'Articles', 'Prix', 'Stock', 'Commandes', 'Factures',
        'Fidélisation', 'Pyramide', 'Prévisions', 'Pipeline', 'SAV', 'Messages',
      ],
      rgNota: 'Aucune flèche : le CRM lit et écrit directement les clients, les factures et les commandes de l’ERP. Seuls WhatsApp, Instagram, Facebook et l’e-mail sortent, avec des connexions déjà prêtes.',
      ventajas: [
        {
          titulo: 'Rien à connecter',
          texto: 'Ni connecteurs, ni synchronisations nocturnes, ni données copiées d’un logiciel à l’autre.',
        },
        {
          titulo: 'Tout en temps réel',
          texto: 'La facture émise maintenant est déjà sur la fiche du client, dans sa fidélisation et dans les prévisions.',
        },
        {
          titulo: 'Rien à maintenir',
          texto: 'Une mise à jour de l’ERP ne casse pas le CRM : c’est le même logiciel, avec un seul responsable.',
        },
      ],
    },
    masTitulo: 'Hors du bureau',
    masTexto:
      'Le commercial sur le terrain, la conversation avec le client et une intelligence artificielle qui connaît toute l’entreprise. Sur les mêmes données.',
    grupos: [
      {
        id: 'calle',
        titulo: 'Sur le terrain',
        entradilla: 'Ce dont le commercial a besoin hors du bureau, sur son téléphone.',
        items: [
          {
            titulo: 'Tournée et visites vérifiées',
            texto: 'Les clients sur la carte selon leur statut. « Je suis arrivé » enregistre la visite avec le GPS et la marque comme vérifiée à moins de 200 m du client. La tournée du jour est triée par proximité et s’ouvre dans Google Maps.',
          },
          {
            titulo: 'L’appli du commercial',
            texto: 'Elle s’installe depuis le navigateur, sur iPhone et Android, sans magasin d’applications : Aujourd’hui, Tournée, Clients, Agenda et SAV. Avec notes vocales, notifications et scan de carte de visite pour créer le lead.',
          },
          {
            titulo: 'SAV des bijoux',
            texto: 'Réparations, garanties et réclamations sous forme de tickets, avec photos de la pièce, devis, date limite et signature du client du bout du doigt au dépôt et au retrait.',
          },
          {
            titulo: 'Réachat',
            texto: 'RayGold apprend des factures les mois où chaque client achète d’habitude. Chaque mois, il montre qui devrait acheter, qui l’a déjà fait et qui manque, avec le montant en jeu. C’est la liste d’appels.',
          },
        ],
      },
      {
        id: 'cliente',
        titulo: 'Parler au client',
        entradilla: 'Tous les canaux au même endroit, et chaque conversation sur la fiche du client.',
        items: [
          {
            titulo: 'WhatsApp, Instagram et Facebook dans une seule boîte',
            texto: 'Reliée aux comptes officiels de l’entreprise. Elle reconnaît le client par son téléphone et affiche ses ventes sur 12 mois. Un nouveau contact devient un lead en un clic. Et une commande de l’ERP se crée depuis la conversation, avec le même calcul de prix.',
          },
          {
            titulo: 'Les boutiques, dans la même boîte',
            texto: 'Les boutiques parlent au siège depuis leur caisse, sans WhatsApp. Les communications importantes demandent un « Lu » et le siège voit quelles boutiques manquent ; les urgentes s’affichent en plein écran.',
          },
          {
            titulo: 'Pipeline et leads',
            texto: 'Les opportunités par étape, avec une probabilité calculée sur l’historique de l’entreprise. Les leads arrivent du formulaire du site, des réseaux sociaux ou d’une photo de carte de visite, et les automatisations créent tâches et rappels toutes seules.',
          },
          {
            titulo: 'Marketing par e-mail',
            texto: 'Campagnes Brevo vers les segments calculés par RayGold (meilleurs clients, à risque, dormants…). Les résultats se mesurent en ventes : combien de clients du segment ont acheté ensuite, et pour combien.',
          },
        ],
      },
      {
        id: 'ia',
        titulo: 'Intelligence artificielle',
        entradilla: 'Elle travaille avec les données de tout l’ERP, pas seulement du CRM, et toujours limitée au portefeuille de qui pose la question.',
        items: [
          {
            titulo: 'Assistant',
            texto: 'On lui pose des questions en langage courant : « quels clients à moi sont à risque ? », « où en suis-je par rapport à l’objectif ? », « quel est le stock de cette bague ? ».',
          },
          {
            titulo: 'Préparer la visite',
            texto: 'Le résumé du client : ce qu’il achète, ce qu’il a cessé d’acheter et quoi lui proposer. Et le brouillon de l’e-mail.',
          },
          {
            titulo: 'Répondre aux messages',
            texto: 'Elle propose la réponse avec le ton et la langue de la conversation, sans inventer de prix ni de délais, et la résume : ce que veut le client et l’étape suivante.',
          },
          {
            titulo: 'Autres IA, via MCP',
            texto: 'RayGold se connecte à Claude, ChatGPT et d’autres assistants, qui consultent les données de l’entreprise avec les droits de l’utilisateur, en lecture seule.',
          },
        ],
        nota: 'L’IA propose ; elle n’envoie aucun message et n’enregistre rien d’elle-même. Tout passe par la personne.',
      },
    ],
    oro: {
      sello: 'Prix et boutiques',
      titulo: 'L’or monte : de nouveaux prix dans toutes les boutiques, sans Excel',
      texto:
        'Le siège recalcule les prix des boutiques avec le calcul même de l’ERP : le cours du jour au titre de chaque article, le tarif et la marge de chaque boutique. Il n’enregistre que ce qui change et prévient chaque boutique.',
      pasos: [
        { titulo: 'Calculer', texto: 'Avec le cours du jour et la marge de chaque boutique.' },
        { titulo: 'Vérifier', texto: 'Seulement ce qui change, boutique par boutique, avec une alerte sur les hausses inhabituelles.' },
        { titulo: 'Enregistrer', texto: 'La caisse applique aussitôt le nouveau prix.' },
        { titulo: 'Prévenir', texto: 'Chaque boutique reçoit la liste de ses pièces avec le nouveau prix.' },
        { titulo: 'Réétiqueter', texto: 'La boutique imprime les étiquettes et appuie sur « Fait ». Le siège voit celles qui manquent.' },
      ],
      nota: 'Pas de surprise au comptoir : rien n’arrive en boutique sans avoir été vérifié.',
    },
    comparativa: {
      titulo: 'Face à un CRM séparé',
      texto:
        'Les CRM les plus connus sont de bons CRM, mais ce sont des logiciels de plus : il faut les connecter à l’ERP et les payer à part.',
      colQue: 'Fonction',
      colRg: 'RayGold',
      colAparte: 'CRM séparé',
      filas: [
        ['Ventes réelles sur la fiche du client', 'En standard', 'Par intégration'],
        ['Fidélisation, pyramide et réachat', 'En standard', 'Rapports sur mesure'],
        ['Prévisions et objectifs avec le facturé', 'En standard', 'Par intégration'],
        ['Commande depuis le CRM ou un WhatsApp', 'Commande de l’ERP', 'Transférée'],
        ['SAV des bijoux (atelier, garantie, signature)', 'En standard', 'Non'],
        ['Canal avec les caisses des boutiques', 'En standard', 'Non'],
        ['WhatsApp, Instagram et Facebook', 'En standard', 'Module à part'],
        ['IA avec les données de toute l’entreprise', 'Oui', 'Données du CRM seulement'],
        ['Prix', 'Inclus dans l’ERP', 'Licence à part'],
      ],
      nota: 'Comparaison indicative avec les fonctions standard des CRM les plus répandus.',
    },
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
      {
        pregunta: 'Faut-il connecter le CRM à l’ERP ?',
        respuesta:
          'Non. Le CRM fait partie de l’ERP et utilise la même base de données : il n’y a ni API, ni connecteurs, ni synchronisations. Les seules connexions extérieures sont les comptes WhatsApp, Instagram et Facebook de l’entreprise et, pour le marketing par e-mail, le compte Brevo.',
      },
      {
        pregunta: 'Peut-on passer une commande depuis un WhatsApp ?',
        respuesta:
          'Oui. Une fois le client reconnu dans la conversation, « Créer une commande » ouvre une commande de l’ERP avec le même calcul de prix que Commandes. Elle reste en brouillon jusqu’à sa confirmation.',
      },
      {
        pregunta: 'L’intelligence artificielle agit-elle seule ?',
        respuesta:
          'Non. Elle propose des réponses, des rendez-vous, des activités ou des leads, mais n’envoie aucun message et n’enregistre rien sans la confirmation de la personne. Et elle ne voit que le portefeuille de qui pose la question.',
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
      'CRM per a joieria dins de l’ERP, sense API: fidelització, piràmide de clients, recompra, previsió i objectius, ruta amb GPS, postvenda, WhatsApp, Instagram i Facebook en una safata, i IA.',
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
    sinApis: {
      sello: 'Sense API · sense integracions',
      titulo: 'Un CRM a part s’ha de connectar.',
      tituloEnfasis: 'El de RayGold ja hi és, a dins.',
      texto:
        'Un CRM a part no sap res de l’empresa fins que no s’hi connecta: una API per als clients, una altra per a les factures, una altra per a les comandes, una altra per a l’estoc… i algú que les vigili. A RayGold el CRM és una pantalla més de la mateixa aplicació, sobre la mateixa base de dades.',
      aparteTitulo: 'Un CRM a part',
      aparteFlechas: [
        'API · sincronitzar clients i articles',
        'API · traspassar les vendes cada nit',
        'API · passar la comanda del CRM a l’ERP',
        'API · estadístiques i objectius',
      ],
      aparteNota: 'Cada fletxa és un desenvolupament, una quota i un lloc on es perden o es dupliquen dades.',
      rgTitulo: 'RayGold · una aplicació, una base de dades',
      rgBloques: [
        'Clients', 'Articles', 'Preus', 'Estoc', 'Comandes', 'Factures',
        'Fidelització', 'Piràmide', 'Previsió', 'Pipeline', 'Postvenda', 'Missatges',
      ],
      rgNota: 'Sense fletxes: el CRM llegeix i escriu directament els clients, les factures i les comandes de l’ERP. Només surten fora WhatsApp, Instagram, Facebook i el correu, amb les connexions ja fetes.',
      ventajas: [
        {
          titulo: 'Res a connectar',
          texto: 'Ni connectors, ni sincronitzacions nocturnes, ni dades copiades d’un programa a l’altre.',
        },
        {
          titulo: 'Tot al moment',
          texto: 'La factura que surt ara ja és a la fitxa del client, a la seva fidelització i a la previsió.',
        },
        {
          titulo: 'Res a mantenir',
          texto: 'Una actualització de l’ERP no trenca el CRM: són el mateix programa, amb un sol responsable.',
        },
      ],
    },
    masTitulo: 'Fora de l’oficina',
    masTexto:
      'El venedor al carrer, la conversa amb el client i una intel·ligència artificial que coneix tota l’empresa. Sobre les mateixes dades.',
    grupos: [
      {
        id: 'calle',
        titulo: 'Al carrer',
        entradilla: 'El que el venedor necessita fora de l’oficina, al mòbil.',
        items: [
          {
            titulo: 'Ruta i visites verificades',
            texto: 'Els clients al mapa segons el seu estat. «He arribat» registra la visita amb el GPS i la marca com a verificada si és a menys de 200 m del client. La ruta del dia s’ordena per proximitat i s’obre a Google Maps.',
          },
          {
            titulo: 'L’app del venedor',
            texto: 'S’instal·la des del navegador, a iPhone i Android, sense botigues d’apps: Avui, Ruta, Clients, Agenda i Postvenda. Amb notes de veu, avisos al mòbil i foto a la targeta de visita per crear el lead.',
          },
          {
            titulo: 'Postvenda de peces',
            texto: 'Reparacions, garanties i reclamacions com a tiquets, amb fotos de la peça, pressupost, data límit i la signatura del client amb el dit en deixar-la i en recollir-la.',
          },
          {
            titulo: 'Recompra',
            texto: 'RayGold aprèn de les factures en quins mesos sol comprar cada client. Cada mes mostra qui hauria de comprar, qui ja ho ha fet i qui falta, amb l’import en joc. És la llista de trucades.',
          },
        ],
      },
      {
        id: 'cliente',
        titulo: 'Parlar amb el client',
        entradilla: 'Tots els canals al mateix lloc, i cada conversa a la fitxa del client.',
        items: [
          {
            titulo: 'WhatsApp, Instagram i Facebook en una safata',
            texto: 'Connectada als comptes oficials de l’empresa. Reconeix el client pel telèfon i mostra les seves vendes de 12 mesos. Si és nou, passa a lead amb un clic. I des del xat es crea una comanda de l’ERP, amb el mateix càlcul de preu.',
          },
          {
            titulo: 'Les botigues, a la mateixa safata',
            texto: 'Les botigues parlen amb la central des del seu TPV, sense WhatsApp. Els comunicats importants demanen «Assabentat» i la central veu quines botigues falten; els urgents surten a pantalla completa.',
          },
          {
            titulo: 'Pipeline i leads',
            texto: 'Oportunitats per fase, amb la probabilitat calculada sobre l’històric de l’empresa. Els leads arriben del formulari del web, de les xarxes socials o d’una foto a la targeta de visita, i les automatitzacions creen tasques i avisos soles.',
          },
          {
            titulo: 'Màrqueting per correu',
            texto: 'Campanyes amb Brevo als segments que calcula RayGold (superiors, en risc, adormits…). Els resultats es mesuren en vendes: quants clients del segment van comprar després i quant.',
          },
        ],
      },
      {
        id: 'ia',
        titulo: 'Intel·ligència artificial',
        entradilla: 'Treballa amb les dades de tot l’ERP, no només del CRM, i sempre limitada a la cartera de qui pregunta.',
        items: [
          {
            titulo: 'Assistent',
            texto: 'Se li pregunta en llenguatge normal: «quins clients meus estan en risc?», «com vaig respecte a l’objectiu?», «quin estoc hi ha d’aquest anell?».',
          },
          {
            titulo: 'Preparar la visita',
            texto: 'Resum del client: què compra, què ha deixat de comprar i què oferir-li. I l’esborrany del correu.',
          },
          {
            titulo: 'Respondre missatges',
            texto: 'Proposa la resposta amb el tracte i l’idioma de la conversa, sense inventar preus ni terminis, i la resumeix: què vol i quin és el pas següent.',
          },
          {
            titulo: 'Altres IA, per MCP',
            texto: 'RayGold es connecta a Claude, ChatGPT i altres assistents, que consulten les dades de l’empresa amb els permisos de l’usuari i només en lectura.',
          },
        ],
        nota: 'La IA proposa; no envia missatges ni desa res pel seu compte. Tot passa per la persona.',
      },
    ],
    oro: {
      sello: 'Preus i botigues',
      titulo: 'Puja l’or: preus nous a totes les botigues, sense Excel',
      texto:
        'La central recalcula els preus de les botigues amb el mateix càlcul de l’ERP: la cotització del dia a la llei de cada article, la tarifa i el benefici de cada botiga. Desa només el que canvia i avisa cada botiga.',
      pasos: [
        { titulo: 'Calcular', texto: 'Amb la cotització del dia i el benefici de cada botiga.' },
        { titulo: 'Revisar', texto: 'Només el que canvia, botiga per botiga, amb avís en les pujades fora del normal.' },
        { titulo: 'Desar', texto: 'El TPV ja cobra el preu nou.' },
        { titulo: 'Avisar', texto: 'Cada botiga rep la llista de les seves peces amb el preu nou.' },
        { titulo: 'Reetiquetar', texto: 'La botiga imprimeix les etiquetes i prem «Fet». La central veu quines falten.' },
      ],
      nota: 'Sense sorpreses al taulell: res no arriba a la botiga sense haver-se revisat abans.',
    },
    comparativa: {
      titulo: 'Davant d’un CRM a part',
      texto:
        'Els CRM més coneguts són bons CRM, però són un programa més: s’han de connectar a l’ERP i pagar a part.',
      colQue: 'Què',
      colRg: 'RayGold',
      colAparte: 'CRM a part',
      filas: [
        ['Vendes reals a la fitxa del client', 'De sèrie', 'Amb integració'],
        ['Fidelització, piràmide i recompra', 'De sèrie', 'Informes a mida'],
        ['Previsió i objectius amb el facturat', 'De sèrie', 'Amb integració'],
        ['Comanda des del CRM o des d’un WhatsApp', 'Comanda de l’ERP', 'Es traspassa'],
        ['Postvenda de peces (taller, garantia, signatura)', 'De sèrie', 'No'],
        ['Canal amb els TPV de les botigues', 'De sèrie', 'No'],
        ['WhatsApp, Instagram i Facebook', 'De sèrie', 'Mòdul a part'],
        ['IA amb les dades de tota l’empresa', 'Sí', 'Només les del CRM'],
        ['Preu', 'Inclòs a l’ERP', 'Llicència a part'],
      ],
      nota: 'Comparativa orientativa amb les funcions estàndard dels CRM més estesos.',
    },
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
      {
        pregunta: 'Cal connectar el CRM amb l’ERP?',
        respuesta:
          'No. El CRM és part de l’ERP i fa servir la mateixa base de dades, així que no hi ha API, connectors ni sincronitzacions. L’únic que es connecta fora són els comptes de WhatsApp, Instagram i Facebook de l’empresa i, si es vol màrqueting per correu, el compte de Brevo.',
      },
      {
        pregunta: 'Es pot fer una comanda des d’un WhatsApp?',
        respuesta:
          'Sí. Amb el client reconegut a la conversa, «Crear comanda» obre una comanda de l’ERP amb el mateix càlcul de preu que Comandes. Queda en esborrany fins que es confirma.',
      },
      {
        pregunta: 'La intel·ligència artificial actua sola?',
        respuesta:
          'No. Proposa respostes, cites, activitats o leads, però no envia missatges ni desa res sense que la persona ho confirmi. I només veu la cartera de qui pregunta.',
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
      'CRM para joalheria dentro do ERP, sem APIs: fidelização, pirâmide de clientes, recompra, previsão e metas, rota com GPS, pós-venda, WhatsApp, Instagram e Facebook em uma caixa, e IA.',
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
    sinApis: {
      sello: 'Sem APIs · sem integrações',
      titulo: 'Um CRM separado precisa ser conectado.',
      tituloEnfasis: 'O do RayGold já está dentro.',
      texto:
        'Um CRM separado não sabe nada da empresa até ser conectado: uma API para os clientes, outra para as notas fiscais, outra para os pedidos, outra para o estoque… e alguém para vigiá-las. No RayGold o CRM é mais uma tela do mesmo aplicativo, sobre o mesmo banco de dados.',
      aparteTitulo: 'Um CRM separado',
      aparteFlechas: [
        'API · sincronizar clientes e produtos',
        'API · transferir as vendas toda noite',
        'API · passar o pedido do CRM para o ERP',
        'API · estatísticas e metas',
      ],
      aparteNota: 'Cada seta é um desenvolvimento, uma mensalidade e um ponto onde os dados se perdem ou se duplicam.',
      rgTitulo: 'RayGold · um aplicativo, um banco de dados',
      rgBloques: [
        'Clientes', 'Produtos', 'Preços', 'Estoque', 'Pedidos', 'Notas fiscais',
        'Fidelização', 'Pirâmide', 'Previsão', 'Pipeline', 'Pós-venda', 'Mensagens',
      ],
      rgNota: 'Sem setas: o CRM lê e grava diretamente os clientes, as notas fiscais e os pedidos do ERP. Só saem para fora WhatsApp, Instagram, Facebook e o e-mail, com as conexões já prontas.',
      ventajas: [
        {
          titulo: 'Nada para conectar',
          texto: 'Nem conectores, nem sincronizações noturnas, nem dados copiados de um sistema para outro.',
        },
        {
          titulo: 'Tudo na hora',
          texto: 'A nota fiscal emitida agora já está na ficha do cliente, na sua fidelização e na previsão.',
        },
        {
          titulo: 'Nada para manter',
          texto: 'Uma atualização do ERP não quebra o CRM: são o mesmo programa, com um único responsável.',
        },
      ],
    },
    masTitulo: 'Fora do escritório',
    masTexto:
      'O vendedor na rua, a conversa com o cliente e uma inteligência artificial que conhece a empresa inteira. Sobre os mesmos dados.',
    grupos: [
      {
        id: 'calle',
        titulo: 'Na rua',
        entradilla: 'O que o vendedor precisa fora do escritório, no celular.',
        items: [
          {
            titulo: 'Rota e visitas verificadas',
            texto: 'Os clientes no mapa conforme o seu status. «Cheguei» registra a visita com o GPS e a marca como verificada se o vendedor estiver a menos de 200 m do cliente. A rota do dia é ordenada por proximidade e abre no Google Maps.',
          },
          {
            titulo: 'O app do vendedor',
            texto: 'Instalado pelo navegador, em iPhone e Android, sem lojas de apps: Hoje, Rota, Clientes, Agenda e Pós-venda. Com notas de voz, avisos no celular e foto do cartão de visita para criar o lead.',
          },
          {
            titulo: 'Pós-venda de peças',
            texto: 'Consertos, garantias e reclamações como tickets, com fotos da peça, orçamento, prazo e a assinatura do cliente com o dedo ao deixar e ao retirar a peça.',
          },
          {
            titulo: 'Recompra',
            texto: 'O RayGold aprende pelas notas fiscais em quais meses cada cliente costuma comprar. Todo mês mostra quem deveria comprar, quem já comprou e quem falta, com o valor em jogo. É a lista de ligações.',
          },
        ],
      },
      {
        id: 'cliente',
        titulo: 'Falar com o cliente',
        entradilla: 'Todos os canais no mesmo lugar, e cada conversa na ficha do cliente.',
        items: [
          {
            titulo: 'WhatsApp, Instagram e Facebook em uma caixa',
            texto: 'Conectada às contas oficiais da empresa. Reconhece o cliente pelo telefone e mostra as suas vendas de 12 meses. Se é novo, vira lead com um clique. E pelo chat se cria um pedido do ERP, com o mesmo cálculo de preço.',
          },
          {
            titulo: 'As lojas, na mesma caixa',
            texto: 'As lojas falam com a central pelo PDV, sem WhatsApp. Os comunicados importantes pedem «Ciente» e a central vê quais lojas faltam; os urgentes aparecem em tela cheia.',
          },
          {
            titulo: 'Pipeline e leads',
            texto: 'Oportunidades por fase, com a probabilidade calculada sobre o histórico da empresa. Os leads chegam do formulário do site, das redes sociais ou de uma foto do cartão de visita, e as automações criam tarefas e avisos sozinhas.',
          },
          {
            titulo: 'E-mail marketing',
            texto: 'Campanhas com a Brevo para os segmentos que o RayGold calcula (principais, em risco, inativos…). Os resultados são medidos em vendas: quantos clientes do segmento compraram depois e quanto.',
          },
        ],
      },
      {
        id: 'ia',
        titulo: 'Inteligência artificial',
        entradilla: 'Trabalha com os dados de todo o ERP, não só do CRM, e sempre limitada à carteira de quem pergunta.',
        items: [
          {
            titulo: 'Assistente',
            texto: 'Pergunte em linguagem normal: «quais clientes meus estão em risco?», «como estou em relação à meta?», «qual o estoque deste anel?».',
          },
          {
            titulo: 'Preparar a visita',
            texto: 'Resumo do cliente: o que compra, o que deixou de comprar e o que oferecer. E o rascunho do e-mail.',
          },
          {
            titulo: 'Responder mensagens',
            texto: 'Sugere a resposta com o tom e o idioma da conversa, sem inventar preços nem prazos, e a resume: o que o cliente quer e qual o próximo passo.',
          },
          {
            titulo: 'Outras IAs, via MCP',
            texto: 'O RayGold se conecta ao Claude, ao ChatGPT e a outros assistentes, que consultam os dados da empresa com as permissões do usuário, somente leitura.',
          },
        ],
        nota: 'A IA sugere; não envia mensagens nem grava nada por conta própria. Tudo passa pela pessoa.',
      },
    ],
    oro: {
      sello: 'Preços e lojas',
      titulo: 'O ouro subiu: preços novos em todas as lojas, sem planilha',
      texto:
        'A central recalcula os preços das lojas com o mesmo cálculo do ERP: a cotação do dia no teor de cada produto, a tabela e a margem de cada loja. Grava só o que muda e avisa cada loja.',
      pasos: [
        { titulo: 'Calcular', texto: 'Com a cotação do dia e a margem de cada loja.' },
        { titulo: 'Revisar', texto: 'Só o que muda, loja por loja, com aviso nas altas fora do normal.' },
        { titulo: 'Gravar', texto: 'O PDV já cobra o preço novo.' },
        { titulo: 'Avisar', texto: 'Cada loja recebe a lista das suas peças com o preço novo.' },
        { titulo: 'Reetiquetar', texto: 'A loja imprime as etiquetas e toca em «Feito». A central vê quais faltam.' },
      ],
      nota: 'Sem surpresas no balcão: nada chega à loja sem ser revisado antes.',
    },
    comparativa: {
      titulo: 'Frente a um CRM separado',
      texto:
        'Os CRMs mais conhecidos são bons CRMs, mas são mais um programa: é preciso conectá-los ao ERP e pagar por eles à parte.',
      colQue: 'O quê',
      colRg: 'RayGold',
      colAparte: 'CRM separado',
      filas: [
        ['Vendas reais na ficha do cliente', 'De série', 'Com integração'],
        ['Fidelização, pirâmide e recompra', 'De série', 'Relatórios sob medida'],
        ['Previsão e metas com o faturado', 'De série', 'Com integração'],
        ['Pedido pelo CRM ou por um WhatsApp', 'Pedido do ERP', 'É transferido'],
        ['Pós-venda de peças (oficina, garantia, assinatura)', 'De série', 'Não'],
        ['Canal com o PDV das lojas', 'De série', 'Não'],
        ['WhatsApp, Instagram e Facebook', 'De série', 'Módulo à parte'],
        ['IA com os dados da empresa inteira', 'Sim', 'Só os do CRM'],
        ['Preço', 'Incluído no ERP', 'Licença à parte'],
      ],
      nota: 'Comparação indicativa com as funções padrão dos CRMs mais difundidos.',
    },
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
      {
        pregunta: 'É preciso conectar o CRM ao ERP?',
        respuesta:
          'Não. O CRM faz parte do ERP e usa o mesmo banco de dados, então não há APIs, conectores nem sincronizações. A única coisa conectada por fora são as contas de WhatsApp, Instagram e Facebook da empresa e, para e-mail marketing, a conta da Brevo.',
      },
      {
        pregunta: 'Dá para fazer um pedido a partir de um WhatsApp?',
        respuesta:
          'Sim. Com o cliente reconhecido na conversa, «Criar pedido» abre um pedido do ERP com o mesmo cálculo de preço de Pedidos. Fica como rascunho até ser confirmado.',
      },
      {
        pregunta: 'A inteligência artificial age sozinha?',
        respuesta:
          'Não. Sugere respostas, compromissos, atividades ou leads, mas não envia mensagens nem grava nada sem a confirmação da pessoa. E só vê a carteira de quem pergunta.',
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
