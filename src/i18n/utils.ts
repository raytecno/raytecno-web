/**
 * Utilidades de internacionalización para Raytecno
 * 
 * Uso:
 * import { useTranslations, getI18nPath } from '@/i18n/utils';
 * const t = useTranslations(lang);
 * const path = getI18nPath('/precios', lang);
 */

import { defaultLang, languages, type Language } from './config';

// Importar traducciones
import es from './locales/es.json';
import en from './locales/en.json';
import fr from './locales/fr.json';
import ca from './locales/ca.json';
import ptBr from './locales/pt-br.json';

// Objeto de traducciones
const translations = {
  es,
  en,
  fr,
  ca,
  'pt-br': ptBr,
} as const;

type TranslationKeys = typeof es;

/**
 * Hook para obtener traducciones
 * @param lang - Código de idioma
 * @returns Función para obtener traducciones
 */
export function useTranslations(lang: Language) {
  return function t(key: string): string {
    const keys = key.split('.');
    let value: any = translations[lang];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback al español si no existe la traducción
        value = translations[defaultLang];
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object' && fallbackKey in value) {
            value = value[fallbackKey];
          } else {
            return key; // Retorna la key si no encuentra traducción
          }
        }
        break;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };
}

/**
 * Obtiene todas las traducciones para un idioma
 * @param lang - Código de idioma
 * @returns Objeto de traducciones
 */
export function getTranslations(lang: Language): TranslationKeys {
  return translations[lang] || translations[defaultLang];
}

/**
 * Genera la ruta con prefijo de idioma
 * @param path - Ruta base (ej: '/precios')
 * @param lang - Código de idioma
 * @returns Ruta con prefijo de idioma
 */
export function getI18nPath(path: string, lang: Language): string {
  // El español (idioma por defecto) no tiene prefijo
  if (lang === defaultLang) {
    return path;
  }
  // Evitar doble slash
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `/${lang}${cleanPath}`;
}

/**
 * Obtiene el idioma de una URL
 * @param pathname - Pathname de la URL
 * @returns Código de idioma
 */
export function getLangFromPath(pathname: string): Language {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  if (firstSegment && firstSegment in languages) {
    return firstSegment as Language;
  }
  
  return defaultLang;
}

/**
 * Remueve el prefijo de idioma de una ruta
 * @param pathname - Pathname con posible prefijo de idioma
 * @returns Ruta sin prefijo de idioma
 */
export function removeI18nPrefix(pathname: string): string {
  const lang = getLangFromPath(pathname);
  
  if (lang !== defaultLang) {
    return pathname.replace(`/${lang}`, '') || '/';
  }
  
  return pathname;
}

/**
 * Genera URLs alternativas para hreflang (SEO)
 * @param pathname - Ruta actual
 * @param baseUrl - URL base del sitio
 * @returns Array de objetos con lang y url
 */
export function getAlternateUrls(pathname: string, baseUrl: string) {
  const basePath = removeI18nPrefix(pathname);
  
  return Object.keys(languages).map((lang) => ({
    lang: languages[lang as Language].code,
    hreflang: lang === defaultLang ? 'x-default' : lang,
    url: `${baseUrl}${getI18nPath(basePath, lang as Language)}`,
  }));
}

/**
 * Detecta el idioma preferido del usuario
 * @param acceptLanguage - Header Accept-Language
 * @returns Código de idioma
 */
export function detectLanguage(acceptLanguage: string | null): Language {
  if (!acceptLanguage) return defaultLang;
  
  const browserLangs = acceptLanguage
    .split(',')
    .map((lang) => lang.split(';')[0].trim().toLowerCase());
  
  for (const browserLang of browserLangs) {
    // Coincidencia exacta
    if (browserLang in languages) {
      return browserLang as Language;
    }
    
    // Coincidencia parcial (ej: 'pt' para 'pt-br')
    const baseLang = browserLang.split('-')[0];
    for (const supportedLang of Object.keys(languages)) {
      if (supportedLang.startsWith(baseLang)) {
        return supportedLang as Language;
      }
    }
  }
  
  return defaultLang;
}

/**
 * Lista de idiomas disponibles para selectores
 */
export function getLanguageList() {
  return Object.entries(languages).map(([code, info]) => ({
    code,
    ...info,
  }));
}
