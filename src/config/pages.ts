/**
 * Configuración de páginas y rutas multiidioma
 * src/config/pages.ts
 */

// Tipos
export type Lang = 'es' | 'en' | 'fr' | 'ca' | 'pt-br';

// Idiomas soportados
export const supportedLangs: Lang[] = ['es', 'en', 'fr', 'ca', 'pt-br'];

// Idioma por defecto
export const defaultLang: Lang = 'es';

// Definición de slugs por página e idioma
export const pageSlugs: Record<string, Record<Lang, string>> = {
  inicio: {
    es: '',
    en: '',
    fr: '',
    ca: '',
    'pt-br': '',
  },
  modulos: {
    es: 'modulos',
    en: 'modules',
    fr: 'modules',
    ca: 'moduls',
    'pt-br': 'modulos',
  },
  precios: {
    es: 'precios',
    en: 'pricing',
    fr: 'tarifs',
    ca: 'preus',
    'pt-br': 'precos',
  },
  tecnologia: {
    es: 'tecnologia',
    en: 'technology',
    fr: 'technologie',
    ca: 'tecnologia',
    'pt-br': 'tecnologia',
  },
  contacto: {
    es: 'contacto',
    en: 'contact',
    fr: 'contact',
    ca: 'contacte',
    'pt-br': 'contato',
  },
  nosotros: {
    es: 'nosotros',
    en: 'about',
    fr: 'a-propos',
    ca: 'nosaltres',
    'pt-br': 'sobre',
  },
  blog: {
    es: 'blog',
    en: 'blog',
    fr: 'blog',
    ca: 'blog',
    'pt-br': 'blog',
  },
};

/**
 * Obtiene la URL completa de una página en un idioma específico
 * @param pageKey - Clave de la página (ej: 'modulos', 'precios')
 * @param lang - Código del idioma
 * @returns URL completa (ej: '/es/modulos', '/en/pricing')
 */
export function getPageUrl(pageKey: string, lang: Lang = defaultLang): string {
  const slugs = pageSlugs[pageKey];
  
  if (!slugs) {
    console.warn(`Page "${pageKey}" not found in pageSlugs`);
    return `/${lang}/`;
  }
  
  const slug = slugs[lang] || slugs[defaultLang];
  
  // Si el slug está vacío, es la página de inicio
  if (!slug) {
    return `/${lang}/`;
  }
  
  return `/${lang}/${slug}`;
}

/**
 * Obtiene el pageKey a partir de un slug y un idioma
 * @param slug - Slug de la URL
 * @param lang - Código del idioma
 * @returns pageKey o undefined si no se encuentra
 */
export function getPageKeyFromSlug(slug: string, lang: Lang): string | undefined {
  for (const [pageKey, slugs] of Object.entries(pageSlugs)) {
    if (slugs[lang] === slug) {
      return pageKey;
    }
  }
  return undefined;
}

/**
 * Genera URLs alternativas para una página (para hreflang)
 * @param pageKey - Clave de la página
 * @param baseUrl - URL base del sitio
 * @returns Array de objetos con lang y url
 */
export function getAlternateUrls(pageKey: string, baseUrl: string = ''): { lang: Lang; url: string }[] {
  return supportedLangs.map(lang => ({
    lang,
    url: `${baseUrl}${getPageUrl(pageKey, lang)}`,
  }));
}

/**
 * Información de los idiomas para el selector
 */
export const languageInfo: Record<Lang, { name: string; flag: string; code: string }> = {
  es: { name: 'Español', flag: '🇪🇸', code: 'es' },
  en: { name: 'English', flag: '🇬🇧', code: 'en' },
  fr: { name: 'Français', flag: '🇫🇷', code: 'fr' },
  ca: { name: 'Català', flag: '🏴󠁥󠁳󠁣󠁴󠁿', code: 'ca' },
  'pt-br': { name: 'Português', flag: '🇧🇷', code: 'pt-BR' },
};
