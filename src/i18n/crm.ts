/**
 * crm.ts — Textos del CRM comercial: vitrina de portada y página /crm
 *
 * @file src/i18n/crm.ts
 *
 * Paso 1 (Octubre 2026): vitrina de la portada (clave `vitrina` + `pantallas`).
 * Paso 2 (Octubre 2026): página /crm (clave `pagina`). Los capítulos reutilizan
 * las capturas de `pantallas` por su `id`, más `objetivos`, que solo sale aquí.
 *
 * Idiomas: por ahora solo 'es'. Los demás caen en español hasta que se
 * validen los textos y se traduzcan (getCrmTranslations hace la reserva).
 * La página /crm se genera SOLO en español (guard en getStaticPaths) para
 * no publicar URLs en otros idiomas con el contenido en castellano.
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

const crm: Partial<Record<Lang, CrmTranslations>> = { es };

export function getCrmTranslations(lang: Lang): CrmTranslations {
  return crm[lang] ?? es;
}
