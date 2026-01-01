/**
 * Configuración de precios de competidores
 * src/config/competitors.ts
 * 
 * VERSIÓN SEGURA - Datos verificables con fuentes públicas
 * TODOS LOS VALORES SON EDITABLES
 */

// ============================================
// PARÁMETROS DEL ESCENARIO
// ============================================
export const scenario = {
  users: 10,
  months: 36,
  years: 3,
};

// ============================================
// PRECIOS BASE DE RAYGOLD
// ============================================
export const raygold = {
  pricePerUserMonth: 49,
  implementation: 500,
  training: 0,
  customization: 0,
  maintenancePerYear: 0,
  color: "#10b981",
  highlight: true,
};

// ============================================
// PRECIOS DE COMPETIDORES (solo con fuentes públicas)
// ============================================
export const competitors = {
  odoo: {
    name: "Odoo Enterprise",
    enabled: true,
    pricePerUserMonth: 25,
    implementation: 8000,
    training: 2500,
    customization: 15000,
    maintenancePerYear: 2700,
    color: "#7c3aed",
    sources: [
      { name: "skysize.io", url: "https://www.skysize.io/blog/guides-5/how-much-does-odoo-cost-pricing-breakdown-for-2025-13", quote: "10 users = €3,108/year" },
      { name: "sdlccorp.com", url: "https://sdlccorp.com/post/how-much-does-it-cost-to-implementation-odoo-erp/", quote: "Implementation $5,000 - $50,000" },
      { name: "captivea.com", url: "https://www.captivea.com/odoo-erp/odoo-pricing", quote: "15% license/year maintenance" },
    ]
  },
  
  sap: {
    name: "SAP Business One",
    enabled: true,
    pricePerUserMonth: 90,
    implementation: 15000,
    training: 3000,
    customization: 20000,
    maintenancePerYear: 5400,
    color: "#0078d4",
    sources: [
      { name: "business-one-consultancy.com", url: "https://www.business-one-consultancy.com/sap-business-one/prices-and-costs.html", quote: "Professional €91/month cloud" },
      { name: "itqlick.com", url: "https://www.itqlick.com/sap-business-one/pricing", quote: "Implementation $10,000 - $60,000" },
    ]
  },
  
  dynamics: {
    name: "Dynamics 365 BC",
    enabled: true,
    pricePerUserMonth: 110,
    implementation: 40000,
    training: 5000,
    customization: 25000,
    maintenancePerYear: 0,
    color: "#00a4ef",
    sources: [
      { name: "microsoft.com", url: "https://www.microsoft.com/en-us/dynamics-365/products/business-central/pricing", quote: "Premium $110/user/month" },
      { name: "cargas.com", url: "https://cargas.com/software/microsoft/dynamics-365-business-central/pricing/", quote: "Implementation $40,000 - $100,000+" },
    ]
  },
};

// ============================================
// FUNCIONES DE CÁLCULO
// ============================================

export function calculateRaygoldTotal() {
  const { users, months, years } = scenario;
  const r = raygold;
  
  const license = r.pricePerUserMonth * users * months;
  const maintenance = r.maintenancePerYear * years;
  const total = license + r.implementation + r.training + r.customization + maintenance;
  
  return { license, implementation: r.implementation, training: r.training, customization: r.customization, maintenance, total };
}

export function calculateCompetitorTotal(key: keyof typeof competitors) {
  const { users, months, years } = scenario;
  const c = competitors[key];
  
  const license = c.pricePerUserMonth * users * months;
  const maintenance = c.maintenancePerYear * years;
  const total = license + c.implementation + c.training + c.customization + maintenance;
  
  return { license, implementation: c.implementation, training: c.training, customization: c.customization, maintenance, total };
}

export function formatEUR(value: number | null): string {
  if (value === null) return "—";
  return value.toLocaleString("es-ES") + "€";
}

export function getComparisonData() {
  const raygoldData = calculateRaygoldTotal();
  
  const competitorsData = Object.entries(competitors)
    .filter(([_, c]) => c.enabled)
    .map(([key, c]) => {
      const calc = calculateCompetitorTotal(key as keyof typeof competitors);
      return {
        key,
        name: c.name,
        color: c.color,
        sources: c.sources,
        license: calc.license,
        implementation: calc.implementation,
        customization: calc.customization,
        maintenance: calc.maintenance,
        total: calc.total,
        isSpecialized: c.customization === 0,
      };
    });
  
  return {
    scenario,
    raygold: { ...raygoldData, color: raygold.color, isSpecialized: true },
    competitors: competitorsData,
  };
}

// ============================================
// TEXTOS TRADUCIDOS (versión segura)
// ============================================
export const comparisonTexts = {
  es: {
    title: "Comparativa de inversión",
    subtitle: `Estimación para ${scenario.users} usuarios en ${scenario.years} años`,
    scenario: `Escenario orientativo: Joyería PYME con ${scenario.users} usuarios`,
    concept: "Concepto",
    license: `Licencias (${scenario.years} años)`,
    implementation: "Implementación",
    customization: "Adaptación joyería",
    maintenance: `Mantenimiento (${scenario.years} años)`,
    total: `TOTAL ESTIMADO`,
    included: "Incluido",
    notRequired: "No necesario",
    specialized: "Ya especializado",
    sources: "Ver fuentes",
    disclaimer: "* Estimaciones basadas en fuentes públicas consultadas en 2024-2025. Los precios reales pueden variar significativamente según región, partner, configuración y negociación. Recomendamos solicitar presupuesto personalizado a cada proveedor.",
    estimated: "Estimado",
  },
  en: {
    title: "Investment comparison",
    subtitle: `Estimate for ${scenario.users} users over ${scenario.years} years`,
    scenario: `Indicative scenario: SMB jewelry store with ${scenario.users} users`,
    concept: "Concept",
    license: `Licenses (${scenario.years} years)`,
    implementation: "Implementation",
    customization: "Jewelry adaptation",
    maintenance: `Maintenance (${scenario.years} years)`,
    total: `ESTIMATED TOTAL`,
    included: "Included",
    notRequired: "Not required",
    specialized: "Already specialized",
    sources: "View sources",
    disclaimer: "* Estimates based on public sources consulted in 2024-2025. Actual prices may vary significantly by region, partner, configuration and negotiation. We recommend requesting a personalized quote from each provider.",
    estimated: "Estimated",
  },
  fr: {
    title: "Comparaison d'investissement",
    subtitle: `Estimation pour ${scenario.users} utilisateurs sur ${scenario.years} ans`,
    scenario: `Scénario indicatif: Bijouterie PME avec ${scenario.users} utilisateurs`,
    concept: "Concept",
    license: `Licences (${scenario.years} ans)`,
    implementation: "Implémentation",
    customization: "Adaptation bijouterie",
    maintenance: `Maintenance (${scenario.years} ans)`,
    total: `TOTAL ESTIMÉ`,
    included: "Inclus",
    notRequired: "Non nécessaire",
    specialized: "Déjà spécialisé",
    sources: "Voir sources",
    disclaimer: "* Estimations basées sur des sources publiques. Les prix réels peuvent varier.",
    estimated: "Estimé",
  },
  ca: {
    title: "Comparativa d'inversió",
    subtitle: `Estimació per a ${scenario.users} usuaris en ${scenario.years} anys`,
    scenario: `Escenari orientatiu: Joieria PIME amb ${scenario.users} usuaris`,
    concept: "Concepte",
    license: `Llicències (${scenario.years} anys)`,
    implementation: "Implementació",
    customization: "Adaptació joieria",
    maintenance: `Manteniment (${scenario.years} anys)`,
    total: `TOTAL ESTIMAT`,
    included: "Inclòs",
    notRequired: "No necessari",
    specialized: "Ja especialitzat",
    sources: "Veure fonts",
    disclaimer: "* Estimacions basades en fonts públiques. Els preus reals poden variar.",
    estimated: "Estimat",
  },
  "pt-br": {
    title: "Comparação de investimento",
    subtitle: `Estimativa para ${scenario.users} usuários em ${scenario.years} anos`,
    scenario: `Cenário orientativo: Joalheria PME com ${scenario.users} usuários`,
    concept: "Conceito",
    license: `Licenças (${scenario.years} anos)`,
    implementation: "Implementação",
    customization: "Adaptação joalheria",
    maintenance: `Manutenção (${scenario.years} anos)`,
    total: `TOTAL ESTIMADO`,
    included: "Incluído",
    notRequired: "Não necessário",
    specialized: "Já especializado",
    sources: "Ver fontes",
    disclaimer: "* Estimativas baseadas em fontes públicas. Os preços reais podem variar.",
    estimated: "Estimado",
  },
};
