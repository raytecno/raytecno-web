/**
 * Helper para traducciones de HomePage
 * @file src/i18n/home.ts
 */

import homeEs from './home.es.json';
import homeEn from './home.en.json';
import homeFr from './home.fr.json';
import homeCa from './home.ca.json';
import homePtBr from './home.pt-br.json';

const homeMap: Record<string, any> = {
  es: homeEs,
  en: homeEn,
  fr: homeFr,
  ca: homeCa,
  'pt-br': homePtBr,
};

export interface HomeTranslations {
  home: {
    metaTitle: string;
    metaDescription: string;
    hero: {
      badge: string;
      title: string;
      subtitle: string;
      subtitleStrong: string;
      subtitleEnd: string;
      stats: {
        years: string;
        jewelers: string;
        modules: string;
      };
      ctaPrimary: string;
      ctaSecondary: string;
      visual: {
        label: string;
        badge1: string;
        badge2: string;
      };
      scroll: string;
    };
    porque: {
      badge: string;
      title: string;
      subtitle: string;
      items: Record<string, {
        title: string;
        description: string;
        stat: string;
      }>;
      cta: {
        text: string;
        button: string;
      };
    };
    testimonios: {
      badge: string;
      title: string;
      subtitle: string;
      items: Array<{
        quote: string;
        quoteStrong: string;
        resultNumber: string;
        resultText: string;
        author: string;
        company: string;
        since: string;
        initials: string;
        featured?: boolean;
      }>;
    };
    video: {
      badge: string;
      title: string;
      titleHighlight: string;
      subtitle: string;
      playText: string;
      features: {
        duration: { value: string; label: string };
        modules: { value: string; label: string };
        specialized: { value: string; label: string };
      };
      cta: {
        text: string;
        button: string;
      };
    };
  };
}

export function getHomeTranslations(lang: string): HomeTranslations {
  return homeMap[lang] || homeMap['es'];
}
