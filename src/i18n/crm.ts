/**
 * crm.ts — Textos del CRM comercial (vitrina de portada y, más adelante, página /crm)
 *
 * @file src/i18n/crm.ts
 *
 * Paso 1 (Octubre 2026): solo la vitrina de la portada. La página /crm
 * (capítulos) se añadirá en la clave `pagina` en el paso siguiente.
 *
 * Idiomas: por ahora solo 'es'. Los demás caen en español hasta que se
 * validen los textos y se traduzcan (getCrmTranslations hace la reserva).
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
};

const crm: Partial<Record<Lang, CrmTranslations>> = { es };

export function getCrmTranslations(lang: Lang): CrmTranslations {
  return crm[lang] ?? es;
}
