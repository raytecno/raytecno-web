/**
 * Configuración de precios de competidores
 * src/config/competitors.ts
 * 
 * VERSIÓN CON DESGLOSE POR AÑOS
 * - Año 1: Implementación + Configuración + Licencias
 * - Año 2-3: Solo Licencias + Mantenimiento
 * 
 * TODOS LOS VALORES SON EDITABLES
 */

import type { Lang } from "@/config/pages";

// ============================================
// PARÁMETROS DEL ESCENARIO
// ============================================
export const scenario = {
  users: 10,
  monthsPerYear: 12,
};

// ============================================
// PRECIOS BASE DE RAYGOLD (por usuario/mes en EUR)
// ============================================
export const raygold = {
  name: "RayGold",
  pricePerUserMonth: 49,
  // Año 1 - Inversión inicial
  implementation: 500,        // Implementación básica
  configuration: 0,           // Ya está configurado para joyería
  training: 0,                // Incluido
  dataMigration: 0,           // Incluido
  // Años 2-3
  maintenancePerYear: 0,      // Incluido en suscripción
  // Colores
  color: "#10b981",
  highlight: true,
};

// ============================================
// PRECIOS DE COMPETIDORES (fuentes públicas)
// ============================================
export const competitors = {
  odoo: {
    name: "Odoo",
    enabled: true,
    pricePerUserMonth: 25,
    // Año 1
    implementation: 8000,
    configuration: 10000,      // Adaptación al sector (no es específico joyería)
    training: 2500,
    dataMigration: 2000,
    // Años 2-3
    maintenancePerYear: 2700,  // ~15% de licencia
    color: "#714B67",
    sources: [
      { name: "skysize.io", url: "https://www.skysize.io/blog/guides-5/how-much-does-odoo-cost-pricing-breakdown-for-2025-13", quote: "10 users = €3,108/year" },
      { name: "sdlccorp.com", url: "https://sdlccorp.com/post/how-much-does-it-cost-to-implementation-odoo-erp/", quote: "Implementation $5,000 - $50,000" },
    ]
  },
  
  sap: {
    name: "SAP B1",
    enabled: true,
    pricePerUserMonth: 90,
    // Año 1
    implementation: 15000,
    configuration: 15000,
    training: 3000,
    dataMigration: 3000,
    // Años 2-3
    maintenancePerYear: 5400,  // ~18% de licencia
    color: "#0078d4",
    sources: [
      { name: "business-one-consultancy.com", url: "https://www.business-one-consultancy.com/sap-business-one/prices-and-costs.html", quote: "Professional €91/month cloud" },
      { name: "itqlick.com", url: "https://www.itqlick.com/sap-business-one/pricing", quote: "Implementation $10,000 - $60,000" },
    ]
  },
  
  dynamics: {
    name: "Dynamics 365",
    enabled: true,
    pricePerUserMonth: 110,
    // Año 1
    implementation: 40000,
    configuration: 20000,
    training: 5000,
    dataMigration: 5000,
    // Años 2-3
    maintenancePerYear: 0,     // Incluido en cloud
    color: "#00a4ef",
    sources: [
      { name: "microsoft.com", url: "https://www.microsoft.com/en-us/dynamics-365/products/business-central/pricing", quote: "Premium $110/user/month" },
      { name: "cargas.com", url: "https://cargas.com/software/microsoft/dynamics-365-business-central/pricing/", quote: "Implementation $40,000 - $100,000+" },
    ]
  },
};

// ============================================
// FUNCIONES DE CÁLCULO POR AÑO
// ============================================

export interface YearlyBreakdown {
  year: number;
  licenses: number;
  implementation: number;
  configuration: number;
  training: number;
  dataMigration: number;
  maintenance: number;
  total: number;
}

// Calcular RayGold por año
export function calculateRaygoldByYear(): YearlyBreakdown[] {
  const { users, monthsPerYear } = scenario;
  const r = raygold;
  const yearlyLicense = r.pricePerUserMonth * users * monthsPerYear;
  
  return [
    {
      year: 1,
      licenses: yearlyLicense,
      implementation: r.implementation,
      configuration: r.configuration,
      training: r.training,
      dataMigration: r.dataMigration,
      maintenance: 0,
      total: yearlyLicense + r.implementation + r.configuration + r.training + r.dataMigration,
    },
    {
      year: 2,
      licenses: yearlyLicense,
      implementation: 0,
      configuration: 0,
      training: 0,
      dataMigration: 0,
      maintenance: r.maintenancePerYear,
      total: yearlyLicense + r.maintenancePerYear,
    },
    {
      year: 3,
      licenses: yearlyLicense,
      implementation: 0,
      configuration: 0,
      training: 0,
      dataMigration: 0,
      maintenance: r.maintenancePerYear,
      total: yearlyLicense + r.maintenancePerYear,
    },
  ];
}

// Calcular competidor por año
export function calculateCompetitorByYear(key: keyof typeof competitors): YearlyBreakdown[] {
  const { users, monthsPerYear } = scenario;
  const c = competitors[key];
  const yearlyLicense = c.pricePerUserMonth * users * monthsPerYear;
  
  return [
    {
      year: 1,
      licenses: yearlyLicense,
      implementation: c.implementation,
      configuration: c.configuration,
      training: c.training,
      dataMigration: c.dataMigration,
      maintenance: 0,
      total: yearlyLicense + c.implementation + c.configuration + c.training + c.dataMigration,
    },
    {
      year: 2,
      licenses: yearlyLicense,
      implementation: 0,
      configuration: 0,
      training: 0,
      dataMigration: 0,
      maintenance: c.maintenancePerYear,
      total: yearlyLicense + c.maintenancePerYear,
    },
    {
      year: 3,
      licenses: yearlyLicense,
      implementation: 0,
      configuration: 0,
      training: 0,
      dataMigration: 0,
      maintenance: c.maintenancePerYear,
      total: yearlyLicense + c.maintenancePerYear,
    },
  ];
}

// Formato de moneda
export function formatEUR(value: number): string {
  if (value === 0) return "—";
  return value.toLocaleString("es-ES") + "€";
}

// Obtener todos los datos para el componente
export function getComparisonData() {
  const raygoldYears = calculateRaygoldByYear();
  const raygoldTotal = raygoldYears.reduce((sum, y) => sum + y.total, 0);
  
  const competitorsData = Object.entries(competitors)
    .filter(([_, c]) => c.enabled)
    .map(([key, c]) => {
      const years = calculateCompetitorByYear(key as keyof typeof competitors);
      const total = years.reduce((sum, y) => sum + y.total, 0);
      return {
        key,
        name: c.name,
        color: c.color,
        sources: c.sources,
        years,
        total,
      };
    });
  
  return {
    scenario,
    raygold: {
      name: raygold.name,
      color: raygold.color,
      years: raygoldYears,
      total: raygoldTotal,
    },
    competitors: competitorsData,
  };
}

// Recopilar todas las fuentes
export function getAllSources() {
  return Object.values(competitors)
    .filter(c => c.enabled)
    .flatMap(c => c.sources);
}

// ============================================
// TEXTOS TRADUCIDOS
// ============================================
export const comparisonTexts: Record<Lang, {
  title: string;
  subtitle: string;
  scenario: string;
  year1: string;
  year1Desc: string;
  year2: string;
  year2Desc: string;
  year3: string;
  year3Desc: string;
  licenses: string;
  implementation: string;
  configuration: string;
  training: string;
  migration: string;
  maintenance: string;
  yearTotal: string;
  total3Years: string;
  included: string;
  sources: string;
  disclaimer: string;
}> = {
  es: {
    title: "Comparativa de inversión",
    subtitle: "Desglose por años para una joyería con 10 usuarios",
    scenario: "Escenario: Joyería PYME con 10 usuarios",
    year1: "Año 1",
    year1Desc: "Inversión inicial",
    year2: "Año 2",
    year2Desc: "Operación",
    year3: "Año 3",
    year3Desc: "Operación",
    licenses: "Licencias",
    implementation: "Implementación",
    configuration: "Configuración sector",
    training: "Formación",
    migration: "Migración datos",
    maintenance: "Mantenimiento",
    yearTotal: "Total año",
    total3Years: "TOTAL 3 AÑOS",
    included: "Incluido",
    sources: "Ver fuentes",
    disclaimer: "* Estimaciones basadas en fuentes públicas (2024-2025). Los precios reales varían según región, partner y configuración.",
  },
  en: {
    title: "Investment comparison",
    subtitle: "Yearly breakdown for a jewelry store with 10 users",
    scenario: "Scenario: SMB jewelry store with 10 users",
    year1: "Year 1",
    year1Desc: "Initial investment",
    year2: "Year 2",
    year2Desc: "Operation",
    year3: "Year 3",
    year3Desc: "Operation",
    licenses: "Licenses",
    implementation: "Implementation",
    configuration: "Industry setup",
    training: "Training",
    migration: "Data migration",
    maintenance: "Maintenance",
    yearTotal: "Year total",
    total3Years: "TOTAL 3 YEARS",
    included: "Included",
    sources: "View sources",
    disclaimer: "* Estimates based on public sources (2024-2025). Actual prices vary by region, partner and configuration.",
  },
  fr: {
    title: "Comparaison d'investissement",
    subtitle: "Répartition annuelle pour une bijouterie de 10 utilisateurs",
    scenario: "Scénario: Bijouterie PME avec 10 utilisateurs",
    year1: "Année 1",
    year1Desc: "Investissement initial",
    year2: "Année 2",
    year2Desc: "Exploitation",
    year3: "Année 3",
    year3Desc: "Exploitation",
    licenses: "Licences",
    implementation: "Implémentation",
    configuration: "Config. secteur",
    training: "Formation",
    migration: "Migration données",
    maintenance: "Maintenance",
    yearTotal: "Total année",
    total3Years: "TOTAL 3 ANS",
    included: "Inclus",
    sources: "Voir sources",
    disclaimer: "* Estimations basées sur des sources publiques. Les prix réels varient.",
  },
  ca: {
    title: "Comparativa d'inversió",
    subtitle: "Desglossament per anys per a una joieria amb 10 usuaris",
    scenario: "Escenari: Joieria PIME amb 10 usuaris",
    year1: "Any 1",
    year1Desc: "Inversió inicial",
    year2: "Any 2",
    year2Desc: "Operació",
    year3: "Any 3",
    year3Desc: "Operació",
    licenses: "Llicències",
    implementation: "Implementació",
    configuration: "Config. sector",
    training: "Formació",
    migration: "Migració dades",
    maintenance: "Manteniment",
    yearTotal: "Total any",
    total3Years: "TOTAL 3 ANYS",
    included: "Inclòs",
    sources: "Veure fonts",
    disclaimer: "* Estimacions basades en fonts públiques. Els preus reals varien.",
  },
  "pt-br": {
    title: "Comparação de investimento",
    subtitle: "Detalhamento anual para uma joalheria com 10 usuários",
    scenario: "Cenário: Joalheria PME com 10 usuários",
    year1: "Ano 1",
    year1Desc: "Investimento inicial",
    year2: "Ano 2",
    year2Desc: "Operação",
    year3: "Ano 3",
    year3Desc: "Operação",
    licenses: "Licenças",
    implementation: "Implementação",
    configuration: "Config. setor",
    training: "Treinamento",
    migration: "Migração dados",
    maintenance: "Manutenção",
    yearTotal: "Total ano",
    total3Years: "TOTAL 3 ANOS",
    included: "Incluído",
    sources: "Ver fontes",
    disclaimer: "* Estimativas baseadas em fontes públicas. Os preços reais variam.",
  },
};
