/**
 * Configuración de internacionalización para Raytecno
 * 
 * Idiomas soportados:
 * - es: Español (por defecto)
 * - en: English
 * - fr: Français
 * - ca: Català
 * - pt-br: Português (Brasil)
 */

export const languages = {
  es: { name: 'Español', flag: '🇪🇸', code: 'es-ES' },
  en: { name: 'English', flag: '🇬🇧', code: 'en-US' },
  fr: { name: 'Français', flag: '🇫🇷', code: 'fr-FR' },
  ca: { name: 'Català', flag: '🏴󠁥󠁳󠁣󠁴󠁿', code: 'ca-ES' },
  'pt-br': { name: 'Português', flag: '🇧🇷', code: 'pt-BR' },
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = 'es';

// Rutas que NO necesitan prefijo de idioma (español por defecto)
export const showDefaultLang = false;

// Mapeo de rutas por idioma (para SEO)
export const routes = {
  es: {
    home: '/',
    pricing: '/precios',
    technology: '/tecnologia',
    modules: '/modulos',
    contact: '/contacto',
  },
  en: {
    home: '/en',
    pricing: '/en/pricing',
    technology: '/en/technology',
    modules: '/en/modules',
    contact: '/en/contact',
  },
  fr: {
    home: '/fr',
    pricing: '/fr/tarifs',
    technology: '/fr/technologie',
    modules: '/fr/modules',
    contact: '/fr/contact',
  },
  ca: {
    home: '/ca',
    pricing: '/ca/preus',
    technology: '/ca/tecnologia',
    modules: '/ca/moduls',
    contact: '/ca/contacte',
  },
  'pt-br': {
    home: '/pt-br',
    pricing: '/pt-br/precos',
    technology: '/pt-br/tecnologia',
    modules: '/pt-br/modulos',
    contact: '/pt-br/contato',
  },
} as const;

// Helper para obtener el idioma de la URL
export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Language;
  return defaultLang;
}

// Helper para obtener la ruta en otro idioma
export function getRouteFromUrl(url: URL): string {
  const pathname = url.pathname;
  const lang = getLangFromUrl(url);
  
  // Remover el prefijo de idioma si existe
  if (lang !== defaultLang) {
    return pathname.replace(`/${lang}`, '') || '/';
  }
  return pathname;
}

// Helper para construir URL en otro idioma
export function useTranslatedPath(lang: Language) {
  return function translatePath(path: string, targetLang: Language = lang): string {
    if (targetLang === defaultLang && !showDefaultLang) {
      return path;
    }
    return `/${targetLang}${path}`;
  };
}
