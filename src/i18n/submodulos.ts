/**
 * Helper para obtener traducciones de submódulos
 * @file src/i18n/submodulos.ts
 */

// Importar traducciones
import submodulosEs from './submodulos.es.json';
import submodulosEn from './submodulos.en.json';
import submodulosFr from './submodulos.fr.json';
import submodulosCa from './submodulos.ca.json';
import submodulosPtBr from './submodulos.pt-br.json';

// Tipos
export type ModuloId = 'maestros' | 'comercial' | 'fabricacion' | 'finanzas' | 'historicos' | 'estadisticas' | 'vendedores' | 'ecommerce' | 'impresoras3d';

export interface ImageTranslation {
  title: string;
  description: string;
}

export interface SectionTranslation {
  name: string;
  description: string;
  images: ImageTranslation[];
}

export interface ModuloTranslation {
  title: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  sections: Record<string, SectionTranslation>;
}

export interface CommonTranslation {
  backToModules: string;
  backToHome: string;
  requestDemo: string;
  seeInAction: string;
  imageNotAvailable: string;
  close: string;
}

// Map de traducciones por idioma
const submodulosMap: Record<string, any> = {
  es: submodulosEs,
  en: submodulosEn,
  fr: submodulosFr,
  ca: submodulosCa,
  'pt-br': submodulosPtBr,
};

/**
 * Obtiene las traducciones de un submódulo específico
 */
export function getSubmoduloTranslations(lang: string, moduloId: ModuloId): { common: CommonTranslation; modulo: ModuloTranslation } {
  const data = submodulosMap[lang] || submodulosMap['es'];
  return {
    common: data.submodulos.common as CommonTranslation,
    modulo: data.submodulos[moduloId] as ModuloTranslation,
  };
}

/**
 * Obtiene solo los textos comunes
 */
export function getSubmoduloCommon(lang: string): CommonTranslation {
  const data = submodulosMap[lang] || submodulosMap['es'];
  return data.submodulos.common as CommonTranslation;
}

/**
 * Configuración de secciones por módulo
 */
export interface SeccionConfig {
  id: string;
  prefix: string;
}

export interface ModuloConfig {
  color: string;
  icon: string;
  secciones: SeccionConfig[];
}

/**
 * Lista de módulos disponibles con sus configuraciones
 */
export const modulosConfig: Record<ModuloId, ModuloConfig> = {
  maestros: {
    color: '#667eea',
    icon: `<svg viewBox="0 0 64 64" fill="none"><rect x="8" y="12" width="48" height="40" rx="4" fill="currentColor" opacity="0.2"/><rect x="14" y="18" width="36" height="6" rx="2" fill="currentColor"/><rect x="14" y="28" width="24" height="4" rx="1" fill="currentColor" opacity="0.6"/><rect x="14" y="36" width="30" height="4" rx="1" fill="currentColor" opacity="0.6"/><rect x="14" y="44" width="20" height="4" rx="1" fill="currentColor" opacity="0.6"/><circle cx="46" cy="44" r="6" fill="#10b981"/><path d="M44 44l2 2 4-4" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>`,
    secciones: [
      { id: 'articulos', prefix: 'A' },
      { id: 'precios', prefix: 'P' },
      { id: 'estructuras', prefix: 'E' },
      { id: 'imagenes', prefix: 'I' },
      { id: 'layout', prefix: 'L' },
      { id: 'gestion', prefix: 'GES' },
    ],
  },
  comercial: {
    color: '#06b6d4',
    icon: `<svg viewBox="0 0 64 64" fill="none"><rect x="8" y="16" width="48" height="36" rx="4" fill="currentColor" opacity="0.2"/><rect x="8" y="16" width="48" height="12" rx="4" fill="currentColor"/><circle cx="20" cy="22" r="3" fill="white"/><rect x="28" y="20" width="20" height="4" rx="2" fill="white" opacity="0.6"/><rect x="14" y="34" width="16" height="12" rx="2" fill="currentColor" opacity="0.4"/><rect x="34" y="34" width="16" height="12" rx="2" fill="currentColor" opacity="0.4"/></svg>`,
    secciones: [
      // { id: 'clientes', prefix: 'CLI' },
      { id: 'pedidos', prefix: 'COM' },
      { id: 'albaranes', prefix: 'ALB' },
      { id: 'facturas', prefix: 'FAC' },
      { id: 'libro', prefix: 'LO' },
      { id: 'depositos', prefix: 'DEP' },
    ],
  },
  fabricacion: {
    color: '#f59e0b',
    icon: `<svg viewBox="0 0 64 64" fill="none"><rect x="6" y="32" width="16" height="20" rx="2" fill="currentColor"/><rect x="24" y="24" width="16" height="28" rx="2" fill="currentColor" opacity="0.7"/><rect x="42" y="16" width="16" height="36" rx="2" fill="currentColor" opacity="0.4"/><circle cx="14" cy="18" r="8" fill="currentColor" opacity="0.3"/><circle cx="14" cy="18" r="4" fill="currentColor"/></svg>`,
    secciones: [
      { id: 'ordenes', prefix: 'FAB' },
      { id: 'fases', prefix: 'FAS' },
      { id: 'fundicion', prefix: 'FUN' },
      { id: 'inventario', prefix: 'INV' },
    ],
  },
  finanzas: {
    color: '#10b981',
    icon: `<svg viewBox="0 0 64 64" fill="none"><rect x="8" y="12" width="48" height="40" rx="4" fill="currentColor" opacity="0.2"/><rect x="14" y="18" width="36" height="8" rx="2" fill="currentColor"/><path d="M20 36h24M20 44h16" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><circle cx="46" cy="40" r="8" fill="currentColor" opacity="0.3"/></svg>`,
    secciones: [
      { id: 'contabilidad', prefix: 'CON' },
      { id: 'tesoreria', prefix: 'TES' },
      { id: 'iva', prefix: 'IVA' },
      { id: 'bancos', prefix: 'BAN' },
      { id: 'informes', prefix: 'INF' },
    ],
  },
  historicos: {
    color: '#8b5cf6',
    icon: `<svg viewBox="0 0 64 64" fill="none"><rect x="8" y="12" width="48" height="40" rx="4" fill="currentColor" opacity="0.2"/><rect x="14" y="18" width="36" height="6" rx="2" fill="currentColor"/><circle cx="32" cy="38" r="12" fill="currentColor" opacity="0.3"/><path d="M32 30v8l6 4" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><circle cx="32" cy="38" r="2" fill="currentColor"/></svg>`,
    secciones: [
      { id: 'operaciones', prefix: 'HIS' }
    ],
  },
  estadisticas: {
    color: '#ec4899',
    icon: `<svg viewBox="0 0 64 64" fill="none"><rect x="8" y="12" width="48" height="40" rx="4" fill="currentColor" opacity="0.2"/><rect x="14" y="36" width="8" height="12" rx="1" fill="currentColor"/><rect x="26" y="28" width="8" height="20" rx="1" fill="currentColor" opacity="0.7"/><rect x="38" y="20" width="8" height="28" rx="1" fill="currentColor" opacity="0.5"/></svg>`,
    secciones: [
      { id: 'dashboards', prefix: 'DAS' },
      { id: 'informes', prefix: 'REP' },
    ],
  },
  vendedores: {
    color: '#3b82f6',
    icon: `<svg viewBox="0 0 64 64" fill="none"><circle cx="32" cy="20" r="10" fill="currentColor"/><path d="M16 52c0-10 7-16 16-16s16 6 16 16" fill="currentColor" opacity="0.4"/><circle cx="50" cy="28" r="6" fill="currentColor" opacity="0.6"/><circle cx="14" cy="28" r="6" fill="currentColor" opacity="0.6"/></svg>`,
    secciones: [
      { id: 'aplicacion', prefix: 'VEN' },
      { id: 'gestionv', prefix: 'GESV' }
    ],
  },
  ecommerce: {
    color: '#6366f1',
    icon: `<svg viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="24" fill="currentColor" opacity="0.2"/><ellipse cx="32" cy="32" rx="24" ry="10" stroke="currentColor" stroke-width="2"/><ellipse cx="32" cy="32" rx="10" ry="24" stroke="currentColor" stroke-width="2"/><line x1="8" y1="32" x2="56" y2="32" stroke="currentColor" stroke-width="2"/><circle cx="32" cy="32" r="4" fill="currentColor"/></svg>`,
    secciones: [
      { id: 'catalogo', prefix: 'CAT' },
      { id: 'pedidos', prefix: 'CONF' },
    ],
  },
  impresoras3d: {
    color: '#14b8a6',
    icon: `<svg viewBox="0 0 64 64" fill="none"><rect x="8" y="8" width="48" height="48" rx="4" fill="currentColor" opacity="0.2"/><rect x="12" y="12" width="40" height="8" rx="2" fill="currentColor"/><rect x="16" y="24" width="32" height="24" rx="2" fill="currentColor" opacity="0.3"/><path d="M32 28v16" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M24 36h16" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><circle cx="32" cy="36" r="6" fill="currentColor" opacity="0.5"/><rect x="14" y="52" width="10" height="4" rx="1" fill="currentColor"/><rect x="40" y="52" width="10" height="4" rx="1" fill="currentColor"/></svg>`,
    secciones: [
      { id: 'impresoras', prefix: '3DP' }

    ],
  },
};
