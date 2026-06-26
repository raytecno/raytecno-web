/**
 * Configuración de páginas y rutas multiidioma
 * src/config/pages.ts
 * 
 * CORRECCIÓN (Febrero 2026):
 * - getLegalUrl() ahora genera URLs SIN carpeta /legal/ 
 *   para páginas que están en la raíz de [lang]/
 *   Ejemplo: /es/privacidad en vez de /es/legal/privacidad
 * - Las páginas de VERI*FACTU sí usan /legal/ porque están en esa carpeta
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

// Slugs de la carpeta de herramientas por idioma
export const toolsFolderSlugs: Record<Lang, string> = {
  es: 'herramientas',
  en: 'tools',
  fr: 'outils',
  ca: 'eines',
  'pt-br': 'ferramentas',
};

// Slugs de cada herramienta por idioma
export const toolSlugs: Record<string, Record<Lang, string>> = {
  calculadora: { 
    es: 'calculadora-rentabilidad', 
    en: 'profitability-calculator', 
    fr: 'calculateur-rentabilite', 
    ca: 'calculadora-rendibilitat', 
    'pt-br': 'calculadora-rentabilidade' 
  },
  cotizacion: { 
    es: 'cotizacion-oro-plata', 
    en: 'gold-silver-prices', 
    fr: 'cours-or-argent', 
    ca: 'cotitzacio-or-plata', 
    'pt-br': 'cotacao-ouro-prata' 
  },
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
  inventarios: { es: 'inventarios', en: 'stocktaking', fr: 'stocks', ca: 'inventaris', 'pt-br': 'estoques' },
  estadisticas: { es: 'estadisticas', en: 'statistics', fr: 'statistiques', ca: 'estadistiques', 'pt-br': 'estatisticas' },
  vendedores: { es: 'vendedores', en: 'sales-reps', fr: 'vendeurs', ca: 'venedors', 'pt-br': 'vendedores' },
  ecommerce: { es: 'ecommerce', en: 'ecommerce', fr: 'ecommerce', ca: 'ecommerce', 'pt-br': 'ecommerce' },
 impresoras3d: { es: 'impresoras3d', en: '3dprinters', fr: 'imprimantes3d', ca: 'impressores3d', 'pt-br': 'impressoras3d' },
  portal: { es: 'portal', en: 'portal', fr: 'portail', ca: 'portal', 'pt-br': 'portal' },
  asistenteia: { es: 'asistente-ia', en: 'ai-assistant', fr: 'assistant-ia', ca: 'assistent-ia', 'pt-br': 'assistente-ia' },
};

// ============================================
// SECCIÓN LEGAL - CORREGIDO
// ============================================

// Slugs de la carpeta legal por idioma (solo para páginas dentro de /legal/)
export const legalFolderSlugs: Record<Lang, string> = {
  es: 'legal',
  en: 'legal',
  fr: 'legal',
  ca: 'legal',
  'pt-br': 'legal',
};

// Slugs de cada página legal por idioma
// NOTA: privacidad, terminos, cookies están EN LA RAÍZ de [lang]/, no en /legal/
export const legalSlugs: Record<string, Record<Lang, string>> = {
  // VERI*FACTU sí está en /legal/
  verifactu: { 
    es: 'declaracion-verifactu', 
    en: 'verifactu-declaration', 
    fr: 'declaration-verifactu', 
    ca: 'declaracio-verifactu', 
    'pt-br': 'declaracao-verifactu' 
  },
  // Estas páginas están en la RAÍZ de [lang]/, NO en /legal/
  privacidad: { 
    es: 'privacidad', 
    en: 'privacy', 
    fr: 'confidentialite', 
    ca: 'privacitat', 
    'pt-br': 'privacidade' 
  },
  terminos: { 
    es: 'terminos', 
    en: 'terms', 
    fr: 'conditions', 
    ca: 'termes', 
    'pt-br': 'termos' 
  },
  cookies: { 
    es: 'cookies', 
    en: 'cookies', 
    fr: 'cookies', 
    ca: 'cookies', 
    'pt-br': 'cookies' 
  },
};

// Páginas legales que SÍ usan la carpeta /legal/
const legalPagesInFolder = ['verifactu'];

/**
 * Obtiene la URL de una página legal específica
 * 
 * CORREGIDO: Solo VERI*FACTU usa /legal/, las demás están en la raíz
 * 
 * Ejemplos:
 * - getLegalUrl('verifactu', 'es')   → '/es/legal/declaracion-verifactu'
 * - getLegalUrl('privacidad', 'es')  → '/es/privacidad'
 * - getLegalUrl('cookies', 'en')     → '/en/cookies'
 */
export function getLegalUrl(legalKey: string, lang: Lang): string {
  const legalSlug = legalSlugs[legalKey]?.[lang];
  
  if (!legalSlug) {
    return `/${lang}`;
  }
  
  // Solo VERI*FACTU usa la carpeta /legal/
  if (legalPagesInFolder.includes(legalKey)) {
    const folderSlug = legalFolderSlugs[lang];
    return `/${lang}/${folderSlug}/${legalSlug}`;
  }
  
  // Las demás páginas legales están en la raíz de [lang]/
  return `/${lang}/${legalSlug}`;
}

/**
 * Genera URLs alternativas para páginas legales (hreflang)
 */
export function getLegalAlternateUrls(legalKey: string): { lang: Lang; url: string }[] {
  return supportedLangs.map(lang => ({
    lang,
    url: getLegalUrl(legalKey, lang),
  }));
}

// ============================================
// FUNCIONES EXISTENTES
// ============================================

/**
 * Obtiene la URL de una página en un idioma específico
 */
export function getPageUrl(pageKey: string, lang: Lang): string {
  const slugs = pageSlugs[pageKey];
  if (!slugs) return `/${lang}`;
  
  const slug = slugs[lang];
  if (!slug) return `/${lang}`;
  
  return `/${lang}/${slug}`;
}

/**
 * Obtiene la URL de un submódulo específico
 */
export function getModuloUrl(moduloKey: string, lang: Lang): string {
  const folderSlug = modFolderSlugs[lang];
  const moduloSlug = moduloSlugs[moduloKey]?.[lang];
  
  if (!folderSlug || !moduloSlug) {
    return `/${lang}`;
  }
  
  return `/${lang}/${folderSlug}/${moduloSlug}`;
}

/**
 * Obtiene la URL de una herramienta específica
 */
export function getToolUrl(toolKey: string, lang: Lang): string {
  const folderSlug = toolsFolderSlugs[lang];
  const toolSlug = toolSlugs[toolKey]?.[lang];
  
  if (!folderSlug || !toolSlug) {
    return `/${lang}`;
  }
  
  return `/${lang}/${folderSlug}/${toolSlug}`;
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
 * Genera URLs alternativas para herramientas
 */
export function getToolAlternateUrls(toolKey: string): { lang: Lang; url: string }[] {
  return supportedLangs.map(lang => ({
    lang,
    url: getToolUrl(toolKey, lang),
  }));
}

/**
 * Obtiene el slug de navegación para cada página
 */
export const navSlugs: Record<Lang, { modulos: string; precios: string; tecnologia: string; contacto: string; herramientas: string }> = {
  es: { modulos: 'modulos', precios: 'precios', tecnologia: 'tecnologia', contacto: 'contacto', herramientas: 'herramientas' },
  en: { modulos: 'modules', precios: 'pricing', tecnologia: 'technology', contacto: 'contact', herramientas: 'tools' },
  fr: { modulos: 'modules', precios: 'tarifs', tecnologia: 'technologie', contacto: 'contact', herramientas: 'outils' },
  ca: { modulos: 'moduls', precios: 'preus', tecnologia: 'tecnologia', contacto: 'contacte', herramientas: 'eines' },
  'pt-br': { modulos: 'modulos', precios: 'precos', tecnologia: 'tecnologia', contacto: 'contato', herramientas: 'ferramentas' },
};