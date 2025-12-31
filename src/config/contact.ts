/**
 * Configuración de contacto y redes sociales de la empresa
 * src/config/contact.ts
 *
 * Cambia estos valores cuando necesites actualizar los datos
 */

// ============================================
// DATOS DE CONTACTO
// ============================================
export const contact = {
  // WhatsApp - formato internacional sin espacios ni símbolos
  whatsapp: {
    number: "34648088550",
    defaultMessage: {
      es: "Hola, me interesa RayGold para mi joyería",
      en: "Hi, I'm interested in RayGold for my jewelry business",
      fr: "Bonjour, je suis intéressé par RayGold pour ma bijouterie",
      ca: "Hola, m'interessa RayGold per a la meva joieria",
      "pt-br": "Olá, tenho interesse no RayGold para minha joalheria",
    },
  },

  // Email de contacto
  email: "info@raytecno.es",

  // Teléfono de contacto
  phone: {
    display: "+34 648 088 550",
    link: "tel:+34648088550",
  },

  // Dirección (opcional)
  address: {
    street: "C/ Barcelona, 26 6º-2ª",
    city: "Montgat",
    region: "Cataluña",
    country: "España",
    postalCode: "",
    full: "Montgat, Barcelona, España",
  },
};

// ============================================
// REDES SOCIALES
// ============================================
export const social = {
  linkedin: {
    url: "https://www.linkedin.com/in/raytecno-raytecno-062901117",
    handle: "raytecno",
  },
  twitter: {
    url: "https://twitter.com/raytecno",
    handle: "@raytecno",
  },
  facebook: {
    url: "https://www.facebook.com/raytecno",
    handle: "raytecno",
  },
  instagram: {
    url: "https://www.instagram.com/raytecno",
    handle: "@raytecno",
  },
  youtube: {
    url: "https://www.youtube.com/@raytecno",
    handle: "raytecno",
  },
};

// ============================================
// SEO - CONFIGURACIÓN GLOBAL
// ============================================
export const seo = {
  // Nombre del sitio
  siteName: "RayGold",

  // URLs de los dominios
  domains: {
    es: "https://www.raytecno.es",
    en: "https://www.raytecno.com",
  },

  // Títulos por defecto por idioma
  defaultTitle: {
    es: "RayGold - Software ERP para Joyería",
    en: "RayGold - ERP Software for Jewelry",
    fr: "RayGold - Logiciel ERP pour Bijouterie",
    ca: "RayGold - Software ERP per a Joieria",
    "pt-br": "RayGold - Software ERP para Joalheria",
  },

  // Descripciones por defecto por idioma
  defaultDescription: {
    es: "El ERP más completo para joyerías. Gestión de inventario, fabricación, ventas y contabilidad. +200 joyerías confían en nosotros desde 1990.",
    en: "The most complete ERP for jewelry businesses. Inventory management, manufacturing, sales and accounting. +200 jewelers trust us since 1990.",
    fr: "L'ERP le plus complet pour les bijouteries. Gestion des stocks, fabrication, ventes et comptabilité. +200 bijouteries nous font confiance depuis 1990.",
    ca: "L'ERP més complet per a joieries. Gestió d'inventari, fabricació, vendes i comptabilitat. +200 joieries confien en nosaltres des de 1990.",
    "pt-br":
      "O ERP mais completo para joalherias. Gestão de estoque, fabricação, vendas e contabilidade. +200 joalherias confiam em nós desde 1990.",
  },

  // Keywords principales por idioma
  keywords: {
    es: "ERP joyería, software joyería, gestión joyería, programa joyerías, control stock oro, software fabricación joyas",
    en: "jewelry ERP, jewelry software, jewelry management, jewelry program, gold stock control, jewelry manufacturing software",
    fr: "ERP bijouterie, logiciel bijouterie, gestion bijouterie, programme bijouteries, contrôle stock or, logiciel fabrication bijoux",
    ca: "ERP joieria, software joieria, gestió joieria, programa joieries, control estoc or, software fabricació joies",
    "pt-br":
      "ERP joalheria, software joalheria, gestão joalheria, programa joalherias, controle estoque ouro, software fabricação joias",
  },

  // Open Graph - imagen por defecto
  ogImage: "/images/og-image.jpg",

  // Twitter Card
  twitterCard: "summary_large_image",
  twitterSite: "@raytecno",

  // Información de la empresa para Schema.org
  company: {
    name: "RayTecno",
    legalName: "RayTecno S.L.",
    foundingDate: "1990",
    founders: ["Agustín Principi"],
    numberOfEmployees: "2-10",
    logo: "/images/logo.png",
  },
};

// ============================================
// FUNCIONES HELPER
// ============================================

/**
 * Genera la URL de WhatsApp con mensaje personalizado
 */
export function getWhatsAppUrl(
  lang: string = "es",
  customMessage?: string
): string {
  const message =
    customMessage ||
    contact.whatsapp.defaultMessage[
      lang as keyof typeof contact.whatsapp.defaultMessage
    ] ||
    contact.whatsapp.defaultMessage.es;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${contact.whatsapp.number}?text=${encodedMessage}`;
}

/**
 * Genera la URL de WhatsApp sin mensaje
 */
export function getWhatsAppUrlSimple(): string {
  return `https://wa.me/${contact.whatsapp.number}`;
}

/**
 * Datos para el script del cliente que detecta dispositivo
 */
export function getWhatsAppData(
  lang: string = "es",
  customMessage?: string
): { number: string; message: string } {
  const message =
    customMessage ||
    contact.whatsapp.defaultMessage[
      lang as keyof typeof contact.whatsapp.defaultMessage
    ] ||
    contact.whatsapp.defaultMessage.es;
  return {
    number: contact.whatsapp.number,
    message: message,
  };
}

/**
 * Obtiene el dominio correcto según el idioma
 */
export function getDomain(lang: string = "es"): string {
  return lang === "en" ? seo.domains.en : seo.domains.es;
}

/**
 * Genera URL canónica completa
 */
export function getCanonicalUrl(path: string, lang: string = "es"): string {
  const domain = getDomain(lang);
  return `${domain}${path}`;
}

/**
 * Obtiene los datos SEO para una página
 */
export function getSeoData(
  lang: string = "es",
  customTitle?: string,
  customDescription?: string
) {
  return {
    title:
      customTitle ||
      seo.defaultTitle[lang as keyof typeof seo.defaultTitle] ||
      seo.defaultTitle.es,
    description:
      customDescription ||
      seo.defaultDescription[lang as keyof typeof seo.defaultDescription] ||
      seo.defaultDescription.es,
    keywords:
      seo.keywords[lang as keyof typeof seo.keywords] || seo.keywords.es,
    ogImage: seo.ogImage,
    twitterCard: seo.twitterCard,
    twitterSite: seo.twitterSite,
  };
}

/**
 * Genera Schema.org JSON-LD para la organización
 */
export function getOrganizationSchema(lang: string = "es"): object {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: seo.company.name,
    legalName: seo.company.legalName,
    url: getDomain(lang),
    logo: `${getDomain(lang)}${seo.company.logo}`,
    foundingDate: seo.company.foundingDate,
    founders: seo.company.founders.map((name) => ({
      "@type": "Person",
      name: name,
    })),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: contact.phone.link.replace("tel:", ""),
      contactType: "customer service",
      email: contact.email,
      availableLanguage: [
        "Spanish",
        "English",
        "French",
        "Catalan",
        "Portuguese",
      ],
    },
    sameAs: [
      social.linkedin.url,
      social.twitter.url,
      social.facebook.url,
      social.instagram.url,
      social.youtube.url,
    ].filter((url) => url),
  };
}

/**
 * Genera Schema.org JSON-LD para el software
 */
export function getSoftwareSchema(lang: string = "es"): object {
  const descriptions = seo.defaultDescription;

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "RayGold",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Windows, Web",
    description:
      descriptions[lang as keyof typeof descriptions] || descriptions.es,
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "200",
      bestRating: "5",
      worstRating: "1",
    },
    provider: {
      "@type": "Organization",
      name: seo.company.name,
      url: getDomain(lang),
    },
  };
}
