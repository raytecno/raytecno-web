/**
 * Sistema de internacionalización (i18n)
 * 
 * Uso:
 * import { t, getTranslations } from '@/i18n';
 * const texts = getTranslations('es');
 * texts.nav.inicio // "Inicio"
 */

import es from './es.json';
import en from './en.json';
import fr from './fr.json';
import ca from './ca.json';
import ptBr from './pt-br.json';
import type { Lang } from '@/config/pages';

// Tipo de traducciones basado en español (referencia)
export type Translations = typeof es;

const translations: Record<Lang, Translations> = {
  es,
  en,
  fr,
  ca,
  'pt-br': ptBr
};

/**
 * Obtener todas las traducciones de un idioma
 */
export function getTranslations(lang: Lang): Translations {
  return translations[lang] || translations.es;
}

/**
 * Obtener una traducción específica por clave
 * Ejemplo: t('es', 'nav.inicio') → "Inicio"
 */
export function t(lang: Lang, key: string): string {
  const keys = key.split('.');
  let value: any = translations[lang] || translations.es;
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      // Fallback a español
      value = translations.es;
      for (const fallbackKey of keys) {
        if (value && typeof value === 'object' && fallbackKey in value) {
          value = value[fallbackKey];
        } else {
          return key; // Devolver la clave si no se encuentra
        }
      }
      break;
    }
  }
  
  return typeof value === 'string' ? value : key;
}

/**
 * Nombres de idiomas para el selector
 */
export const langNames: Record<Lang, string> = {
  es: 'Español',
  en: 'English',
  fr: 'Français',
  ca: 'Català',
  'pt-br': 'Português'
};

/**
 * Banderas de idiomas (emojis o códigos para iconos)
 */
export const langFlags: Record<Lang, string> = {
  es: '🇪🇸',
  en: '🇬🇧',
  fr: '🇫🇷',
  ca: '🇪🇸', // Cataluña usa bandera española o senyera
  'pt-br': '🇧🇷'
};
