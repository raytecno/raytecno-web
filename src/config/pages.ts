/**
 * Configuración de páginas y slugs por idioma
 * src/config/pages.ts
 */

export const langs = ['es', 'en', 'fr', 'ca', 'pt-br'] as const;
export type Lang = (typeof langs)[number];

export const defaultLang: Lang = 'es';

// Configuración de cada página
export const pages = {
  // Páginas principales
  contacto: {
    slugs: {
      es: 'contacto',
      en: 'contact',
      fr: 'contact',
      ca: 'contacte',
      'pt-br': 'contato'
    },
    template: 'ContactoPage'
  },
  precios: {
    slugs: {
      es: 'precios',
      en: 'pricing',
      fr: 'tarifs',
      ca: 'preus',
      'pt-br': 'precos'
    },
    template: 'PreciosPage'
  },
  tecnologia: {
    slugs: {
      es: 'tecnologia',
      en: 'technology',
      fr: 'technologie',
      ca: 'tecnologia',
      'pt-br': 'tecnologia'
    },
    template: 'TecnologiaPage'
  },
  galeria: {
    slugs: {
      es: 'galeria',
      en: 'gallery',
      fr: 'galerie',
      ca: 'galeria',
      'pt-br': 'galeria'
    },
    template: 'GaleriaPage'
  },
  
  // Módulos - página índice
  modulos: {
    slugs: {
      es: 'modulos',
      en: 'modules',
      fr: 'modules',
      ca: 'moduls',
      'pt-br': 'modulos'
    },
    template: 'ModulosPage'
  },
  
  // Submódulos individuales
  'modulos/maestros': {
    slugs: {
      es: 'modulos/maestros',
      en: 'modules/master-data',
      fr: 'modules/donnees-base',
      ca: 'moduls/mestres',
      'pt-br': 'modulos/cadastros'
    },
    template: 'modulos/MaestrosPage'
  },
  'modulos/comercial': {
    slugs: {
      es: 'modulos/comercial',
      en: 'modules/sales',
      fr: 'modules/commercial',
      ca: 'moduls/comercial',
      'pt-br': 'modulos/comercial'
    },
    template: 'modulos/ComercialPage'
  },
  'modulos/fabricacion': {
    slugs: {
      es: 'modulos/fabricacion',
      en: 'modules/manufacturing',
      fr: 'modules/fabrication',
      ca: 'moduls/fabricacio',
      'pt-br': 'modulos/fabricacao'
    },
    template: 'modulos/FabricacionPage'
  },
  'modulos/finanzas': {
    slugs: {
      es: 'modulos/finanzas',
      en: 'modules/finance',
      fr: 'modules/finances',
      ca: 'moduls/finances',
      'pt-br': 'modulos/financas'
    },
    template: 'modulos/FinanzasPage'
  },
  'modulos/historicos': {
    slugs: {
      es: 'modulos/historicos',
      en: 'modules/history',
      fr: 'modules/historiques',
      ca: 'moduls/historics',
      'pt-br': 'modulos/historicos'
    },
    template: 'modulos/HistoricosPage'
  },
  'modulos/estadisticas': {
    slugs: {
      es: 'modulos/estadisticas',
      en: 'modules/analytics',
      fr: 'modules/statistiques',
      ca: 'moduls/estadistiques',
      'pt-br': 'modulos/estatisticas'
    },
    template: 'modulos/EstadisticasPage'
  },
  'modulos/vendedores': {
    slugs: {
      es: 'modulos/vendedores',
      en: 'modules/sales-team',
      fr: 'modules/commerciaux',
      ca: 'moduls/venedors',
      'pt-br': 'modulos/vendedores'
    },
    template: 'modulos/VendedoresPage'
  },
  'modulos/ecommerce': {
    slugs: {
      es: 'modulos/ecommerce',
      en: 'modules/ecommerce',
      fr: 'modules/ecommerce',
      ca: 'moduls/ecommerce',
      'pt-br': 'modulos/ecommerce'
    },
    template: 'modulos/EcommercePage'
  }
} as const;

export type PageId = keyof typeof pages;

/**
 * Obtener el slug de una página en un idioma específico
 */
export function getSlug(pageId: PageId, lang: Lang): string {
  const page = pages[pageId];
  if (page && page.slugs && lang in page.slugs) {
    return page.slugs[lang as keyof typeof page.slugs];
  }
  return pageId;
}

/**
 * Obtener el ID de página desde un slug y idioma
 */
export function getPageIdFromSlug(slug: string, lang: Lang): PageId | null {
  for (const [pageId, config] of Object.entries(pages)) {
    const pageSlug = config.slugs[lang as keyof typeof config.slugs];
    if (pageSlug === slug) {
      return pageId as PageId;
    }
  }
  return null;
}

/**
 * Obtener URL completa de una página
 */
export function getPageUrl(pageId: PageId, lang: Lang): string {
  const slug = getSlug(pageId, lang);
  return `/${lang}/${slug}`;
}

/**
 * Obtener todas las variantes de idioma de una página (para hreflang)
 */
export function getAlternateUrls(pageId: PageId): { lang: Lang; url: string }[] {
  return langs.map(lang => ({
    lang,
    url: getPageUrl(pageId, lang)
  }));
}

/**
 * Verificar si un idioma es válido
 */
export function isValidLang(lang: string): lang is Lang {
  return langs.includes(lang as Lang);
}

/**
 * Obtener el template de una página
 */
export function getTemplate(pageId: PageId): string {
  return pages[pageId]?.template || pageId;
}

/**
 * Generar todas las rutas estáticas para getStaticPaths
 */
export function getAllStaticPaths() {
  const paths: { params: { slug: string }; props: { lang: Lang; pageId: PageId } }[] = [];
  
  for (const lang of langs) {
    for (const [pageId, config] of Object.entries(pages)) {
      const slug = config.slugs[lang as keyof typeof config.slugs];
      paths.push({
        params: { slug: `${lang}/${slug}` },
        props: { lang, pageId: pageId as PageId }
      });
    }
  }
  
  return paths;
}