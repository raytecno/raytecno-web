/**
 * Configuración de precios y monedas para RayGold
 * src/config/pricing.ts
 */

import type { Lang } from "./pages";

// ============================================
// TASAS DE CONVERSIÓN
// Base: 1 EUR = X moneda
// Actualizar periódicamente
// ============================================
export const exchangeRates = {
  EUR: 1,
  USD: 1.10,    // 1 EUR = 1.10 USD
  GBP: 0.85,    // 1 EUR = 0.85 GBP
  BRL: 6.30,    // 1 EUR = 6.30 BRL
};

export type Currency = keyof typeof exchangeRates;

// ============================================
// CONFIGURACIÓN DE MONEDAS
// ============================================
export const currencies: Record<Currency, {
  symbol: string;
  code: string;
  name: Record<Lang, string>;
  flag: string;
  position: "before" | "after";
}> = {
  EUR: {
    symbol: "€",
    code: "EUR",
    name: {
      es: "Euro",
      en: "Euro",
      fr: "Euro",
      ca: "Euro",
      "pt-br": "Euro",
    },
    flag: "🇪🇺",
    position: "after",
  },
  USD: {
    symbol: "$",
    code: "USD",
    name: {
      es: "Dólar (EEUU)",
      en: "US Dollar",
      fr: "Dollar US",
      ca: "Dòlar (EUA)",
      "pt-br": "Dólar (EUA)",
    },
    flag: "🇺🇸",
    position: "before",
  },
  GBP: {
    symbol: "£",
    code: "GBP",
    name: {
      es: "Libra (UK)",
      en: "British Pound",
      fr: "Livre Sterling",
      ca: "Lliura (UK)",
      "pt-br": "Libra (UK)",
    },
    flag: "🇬🇧",
    position: "before",
  },
  BRL: {
    symbol: "R$",
    code: "BRL",
    name: {
      es: "Real (Brasil)",
      en: "Brazilian Real",
      fr: "Réal Brésilien",
      ca: "Real (Brasil)",
      "pt-br": "Real",
    },
    flag: "🇧🇷",
    position: "before",
  },
};

// ============================================
// MONEDAS POR IDIOMA
// ============================================
export const currenciesByLang: Record<Lang, Currency[]> = {
  es: ["EUR"],
  en: ["USD", "GBP", "EUR"],      // Dólar primero, luego Libra, luego Euro
  fr: ["EUR"],
  ca: ["EUR"],
  "pt-br": ["BRL", "EUR"],        // Real primero, luego Euro
};

export const defaultCurrency: Record<Lang, Currency> = {
  es: "EUR",
  en: "USD",
  fr: "EUR",
  ca: "EUR",
  "pt-br": "BRL",
};

// ============================================
// PRECIOS BASE (en EUR)
// ============================================
export const basePrices = {
  starter: { monthly: 29, minUsers: 2 },
  professional: { monthly: 49, minUsers: 3 },
  enterprise: { monthly: 69, minUsers: 5 },
  perpetual: { base: 12000 },
};

// ============================================
// FUNCIONES
// ============================================

export function convertPrice(priceEUR: number, currency: Currency): number {
  return Math.round(priceEUR * exchangeRates[currency]);
}

export function formatPrice(price: number, currency: Currency): string {
  const config = currencies[currency];
  const formatted = price.toLocaleString();
  return config.position === "before" 
    ? `${config.symbol}${formatted}` 
    : `${formatted}${config.symbol}`;
}

export function getPrices(currency: Currency) {
  return {
    starter: formatPrice(convertPrice(basePrices.starter.monthly, currency), currency),
    starterRaw: convertPrice(basePrices.starter.monthly, currency),
    professional: formatPrice(convertPrice(basePrices.professional.monthly, currency), currency),
    professionalRaw: convertPrice(basePrices.professional.monthly, currency),
    enterprise: formatPrice(convertPrice(basePrices.enterprise.monthly, currency), currency),
    enterpriseRaw: convertPrice(basePrices.enterprise.monthly, currency),
    perpetual: formatPrice(convertPrice(basePrices.perpetual.base, currency), currency),
    perpetualRaw: convertPrice(basePrices.perpetual.base, currency),
    symbol: currencies[currency].symbol,
    code: currency,
  };
}

export function getAvailableCurrencies(lang: Lang) {
  return currenciesByLang[lang].map(code => ({
    code,
    ...currencies[code],
    nameLocalized: currencies[code].name[lang],
  }));
}

export function showCurrencySelector(lang: Lang): boolean {
  return currenciesByLang[lang].length > 1;
}

// Textos del selector
export const selectorTexts: Record<Lang, { label: string; currency: string }> = {
  es: { label: "Moneda", currency: "Moneda" },
  en: { label: "Currency", currency: "Currency" },
  fr: { label: "Devise", currency: "Devise" },
  ca: { label: "Moneda", currency: "Moneda" },
  "pt-br": { label: "Moeda", currency: "Moeda" },
};
