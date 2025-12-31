/**
 * Configuración de páginas y rutas multiidioma
 * src/config/pages.ts
 */

export type Lang = 'es' | 'en' | 'fr' | 'ca' | 'pt-br';

export const supportedLangs: Lang[] = ['es', 'en', 'fr', 'ca', 'pt-br'];

export const defaultLang: Lang = 'es';

// Información de cada idioma
export const languageInfo: Record<Lang, { name: string; flag: string; code: string }> = {
  es: { name: 'Español', flag: '🇪🇸', code: 'ES' },
  en: { name: 'English', flag: '🇺🇸', code: 'EN' },
  fr: { name: 'Français', flag: '🇫🇷', code: 'FR' },
  ca: { name: 'Català', flag: '🏴󠁥󠁳󠁣󠁴󠁿', code: 'CA' },
  'pt-br': { name: 'Português', flag: '🇧🇷', code: 'PT' },
};

// Slugs de páginas por idioma
export const pageSlugs: Record<string, Record<Lang, string>> = {
  home: { es: '', en: '', fr: '', ca: '', 'pt-br': '' },
  modulos: { es: 'modulos', en: 'modules', fr: 'modules', ca: 'moduls', 'pt-br': 'modulos' },
  precios: { es: 'precios', en: 'pricing', fr: 'tarifs', ca: 'preus', 'pt-br': 'precos' },
  tecnologia: { es: 'tecnologia', en: 'technology', fr: 'technologie', ca: 'tecnologia', 'pt-br': 'tecnologia' },
  contacto: { es: 'contacto', en: 'contact', fr: 'contact', ca: 'contacte', 'pt-br': 'contato' },
  nosotros: { es: 'nosotros', en: 'about', fr: 'a-propos', ca: 'nosaltres', 'pt-br': 'sobre' },
};

// Slugs de la carpeta de módulos por idioma
export const modFolderSlugs: Record<Lang, string> = {
  es: 'modulos',
  en: 'modules',
  fr: 'modules',
  ca: 'moduls',
  'pt-br': 'modulos',
};

// Slugs de cada submódulo por idioma
export const moduloSlugs: Record<string, Record<Lang, string>> = {
  maestros: { es: 'maestros', en: 'masters', fr: 'maitres', ca: 'mestres', 'pt-br': 'cadastros' },
  comercial: { es: 'comercial', en: 'commercial', fr: 'commercial', ca: 'comercial', 'pt-br': 'comercial' },
  fabricacion: { es: 'fabricacion', en: 'manufacturing', fr: 'fabrication', ca: 'fabricacio', 'pt-br': 'fabricacao' },
  finanzas: { es: 'finanzas', en: 'finance', fr: 'finances', ca: 'finances', 'pt-br': 'financas' },
  historicos: { es: 'historicos', en: 'history', fr: 'historique', ca: 'historics', 'pt-br': 'historicos' },
  estadisticas: { es: 'estadisticas', en: 'statistics', fr: 'statistiques', ca: 'estadistiques', 'pt-br': 'estatisticas' },
  vendedores: { es: 'vendedores', en: 'sales-reps', fr: 'vendeurs', ca: 'venedors', 'pt-br': 'vendedores' },
  ecommerce: { es: 'ecommerce', en: 'ecommerce', fr: 'ecommerce', ca: 'ecommerce', 'pt-br': 'ecommerce' },
  impresoras3d: { es: 'impresoras3d', en: '3dprinters', fr: 'imprimantes3d', ca: 'impressores3d', 'pt-br': 'impressoras3d' },
};

/**
 * Obtiene la URL de una página en un idioma específico
 */
export function getPageUrl(pageKey: string, lang: Lang): string {
  const slugs = pageSlugs[pageKey];
  if (!slugs) return `/${lang}/`;
  
  const slug = slugs[lang];
  if (!slug) return `/${lang}/`;
  
  return `/${lang}/${slug}`;
}

/**
 * Obtiene la URL de un submódulo específico
 * Ejemplo: getModuloUrl('maestros', 'es') → '/es/modulos/maestros'
 * Ejemplo: getModuloUrl('maestros', 'en') → '/en/modules/masters'
 */
export function getModuloUrl(moduloKey: string, lang: Lang): string {
  const folderSlug = modFolderSlugs[lang];
  const moduloSlug = moduloSlugs[moduloKey]?.[lang];
  
  if (!folderSlug || !moduloSlug) {
    return `/${lang}/`;
  }
  
  return `/${lang}/${folderSlug}/${moduloSlug}`;
}

/**
 * Obtiene la clave de página a partir de un slug
 */
export function getPageKeyFromSlug(slug: string, lang: Lang): string | null {
  for (const [pageKey, slugs] of Object.entries(pageSlugs)) {
    if (slugs[lang] === slug) {
      return pageKey;
    }
  }
  return null;
}

/**
 * Genera URLs alternativas para hreflang
 */
export function getAlternateUrls(pageKey: string): { lang: Lang; url: string }[] {
  const slugs = pageSlugs[pageKey];
  if (!slugs) return [];
  
  return supportedLangs.map(lang => ({
    lang,
    url: getPageUrl(pageKey, lang),
  }));
}

/**
 * Obtiene el slug de navegación para cada página
 */
export const navSlugs: Record<Lang, { modulos: string; precios: string; tecnologia: string; contacto: string }> = {
  es: { modulos: 'modulos', precios: 'precios', tecnologia: 'tecnologia', contacto: 'contacto' },
  en: { modulos: 'modules', precios: 'pricing', tecnologia: 'technology', contacto: 'contact' },
  fr: { modulos: 'modules', precios: 'tarifs', tecnologia: 'technologie', contacto: 'contact' },
  ca: { modulos: 'moduls', precios: 'preus', tecnologia: 'tecnologia', contacto: 'contacte' },
  'pt-br': { modulos: 'modulos', precios: 'precos', tecnologia: 'tecnologia', contacto: 'contato' },
};
