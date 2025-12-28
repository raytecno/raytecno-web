/**
 * Sistema de internacionalización para RayGold
 * src/i18n/index.ts
 */

import type { Lang } from "@/config/pages";

// Tipo de traducciones
export interface Translations {
  nav: {
    home: string;
    modules: string;
    pricing: string;
    technology: string;
    contact: string;
  };
  contact: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    subtitle: string;
    nombre: string;
    email: string;
    telefono: string;
    empresa: string;
    mensaje: string;
    enviar: string;
    llamanos: string;
    whatsapp: string;
  };
  modules: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    subtitle: string;
    list: Record<string, { title: string; description: string }>;
  };
  cta: {
    title: string;
    description: string;
    button: string;
  };
  footer: {
    description: string;
    product: string;
    modules: string;
    pricing: string;
    technology: string;
    company: string;
    about: string;
    contact: string;
    blog: string;
    legal: string;
    privacy: string;
    terms: string;
    cookies: string;
    copyright: string;
  };
}

// Traducciones por idioma
const translations: Record<Lang, Translations> = {
  es: {
    nav: {
      home: "Inicio",
      modules: "Módulos",
      pricing: "Precios",
      technology: "Tecnología",
      contact: "Contacto",
    },
    contact: {
      metaTitle: "Contacto | RayGold ERP para Joyería",
      metaDescription: "Contacta con RayGold para más información sobre nuestro software ERP para joyería",
      title: "Contacto",
      subtitle: "Estamos aquí para ayudarte",
      nombre: "Nombre",
      email: "Email",
      telefono: "Teléfono",
      empresa: "Empresa",
      mensaje: "Mensaje",
      enviar: "Enviar mensaje",
      llamanos: "Llámanos",
      whatsapp: "WhatsApp",
    },
    modules: {
      metaTitle: "Módulos | RayGold ERP para Joyería",
      metaDescription: "Descubre los 8 módulos integrados de RayGold ERP: Maestros, Comercial, Fabricación, Finanzas y más",
      title: "Módulos",
      subtitle: "8 módulos integrados para tu joyería",
      list: {
        maestros: { title: "Maestros", description: "Artículos, proveedores, clientes y familias" },
        comercial: { title: "Comercial", description: "Ventas, pedidos y facturación" },
        fabricacion: { title: "Fabricación", description: "Producción, órdenes de trabajo y control de mermas" },
        finanzas: { title: "Finanzas", description: "Contabilidad, tesorería e IVA" },
        historicos: { title: "Históricos", description: "Consulta de datos históricos" },
        estadisticas: { title: "Estadísticas", description: "Informes y cuadros de mando" },
        vendedores: { title: "Vendedores", description: "Gestión de comisiones" },
        ecommerce: { title: "Ecommerce", description: "Tienda online sincronizada" },
      },
    },
    cta: {
      title: "¿Listo para empezar?",
      description: "Solicita una demo personalizada",
      button: "Solicitar demo",
    },
    footer: {
      description: "Software ERP especializado para la industria joyera",
      product: "Producto",
      modules: "Módulos",
      pricing: "Precios",
      technology: "Tecnología",
      company: "Empresa",
      about: "Nosotros",
      contact: "Contacto",
      blog: "Blog",
      legal: "Legal",
      privacy: "Privacidad",
      terms: "Términos",
      cookies: "Cookies",
      copyright: "© 2024 RayGold. Todos los derechos reservados.",
    },
  },
  en: {
    nav: {
      home: "Home",
      modules: "Modules",
      pricing: "Pricing",
      technology: "Technology",
      contact: "Contact",
    },
    contact: {
      metaTitle: "Contact | RayGold ERP for Jewelry",
      metaDescription: "Contact RayGold for more information about our jewelry ERP software",
      title: "Contact",
      subtitle: "We are here to help you",
      nombre: "Name",
      email: "Email",
      telefono: "Phone",
      empresa: "Company",
      mensaje: "Message",
      enviar: "Send message",
      llamanos: "Call us",
      whatsapp: "WhatsApp",
    },
    modules: {
      metaTitle: "Modules | RayGold ERP for Jewelry",
      metaDescription: "Discover the 8 integrated modules of RayGold ERP: Masters, Commercial, Manufacturing, Finance and more",
      title: "Modules",
      subtitle: "8 integrated modules for your jewelry business",
      list: {
        maestros: { title: "Masters", description: "Items, suppliers, customers and categories" },
        comercial: { title: "Commercial", description: "Sales, orders and invoicing" },
        fabricacion: { title: "Manufacturing", description: "Production, work orders and loss control" },
        finanzas: { title: "Finance", description: "Accounting, treasury and VAT" },
        historicos: { title: "Historical", description: "Historical data query" },
        estadisticas: { title: "Statistics", description: "Reports and dashboards" },
        vendedores: { title: "Sales Reps", description: "Commission management" },
        ecommerce: { title: "Ecommerce", description: "Synchronized online store" },
      },
    },
    cta: {
      title: "Ready to get started?",
      description: "Request a personalized demo",
      button: "Request demo",
    },
    footer: {
      description: "Specialized ERP software for the jewelry industry",
      product: "Product",
      modules: "Modules",
      pricing: "Pricing",
      technology: "Technology",
      company: "Company",
      about: "About",
      contact: "Contact",
      blog: "Blog",
      legal: "Legal",
      privacy: "Privacy",
      terms: "Terms",
      cookies: "Cookies",
      copyright: "© 2024 RayGold. All rights reserved.",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      modules: "Modules",
      pricing: "Tarifs",
      technology: "Technologie",
      contact: "Contact",
    },
    contact: {
      metaTitle: "Contact | RayGold ERP pour Bijouterie",
      metaDescription: "Contactez RayGold pour plus d'informations sur notre logiciel ERP pour bijouterie",
      title: "Contact",
      subtitle: "Nous sommes là pour vous aider",
      nombre: "Nom",
      email: "Email",
      telefono: "Téléphone",
      empresa: "Entreprise",
      mensaje: "Message",
      enviar: "Envoyer le message",
      llamanos: "Appelez-nous",
      whatsapp: "WhatsApp",
    },
    modules: {
      metaTitle: "Modules | RayGold ERP pour Bijouterie",
      metaDescription: "Découvrez les 8 modules intégrés de RayGold ERP",
      title: "Modules",
      subtitle: "8 modules intégrés pour votre bijouterie",
      list: {
        maestros: { title: "Maîtres", description: "Articles, fournisseurs, clients et familles" },
        comercial: { title: "Commercial", description: "Ventes, commandes et facturation" },
        fabricacion: { title: "Fabrication", description: "Production, ordres de travail" },
        finanzas: { title: "Finances", description: "Comptabilité, trésorerie et TVA" },
        historicos: { title: "Historiques", description: "Consultation des données historiques" },
        estadisticas: { title: "Statistiques", description: "Rapports et tableaux de bord" },
        vendedores: { title: "Vendeurs", description: "Gestion des commissions" },
        ecommerce: { title: "Ecommerce", description: "Boutique en ligne synchronisée" },
      },
    },
    cta: {
      title: "Prêt à commencer?",
      description: "Demandez une démo personnalisée",
      button: "Demander une démo",
    },
    footer: {
      description: "Logiciel ERP spécialisé pour l'industrie de la bijouterie",
      product: "Produit",
      modules: "Modules",
      pricing: "Tarifs",
      technology: "Technologie",
      company: "Entreprise",
      about: "À propos",
      contact: "Contact",
      blog: "Blog",
      legal: "Légal",
      privacy: "Confidentialité",
      terms: "Conditions",
      cookies: "Cookies",
      copyright: "© 2024 RayGold. Tous droits réservés.",
    },
  },
  ca: {
    nav: {
      home: "Inici",
      modules: "Mòduls",
      pricing: "Preus",
      technology: "Tecnologia",
      contact: "Contacte",
    },
    contact: {
      metaTitle: "Contacte | RayGold ERP per a Joieria",
      metaDescription: "Contacta amb RayGold per a més informació sobre el nostre software ERP per a joieria",
      title: "Contacte",
      subtitle: "Som aquí per ajudar-te",
      nombre: "Nom",
      email: "Email",
      telefono: "Telèfon",
      empresa: "Empresa",
      mensaje: "Missatge",
      enviar: "Enviar missatge",
      llamanos: "Truca'ns",
      whatsapp: "WhatsApp",
    },
    modules: {
      metaTitle: "Mòduls | RayGold ERP per a Joieria",
      metaDescription: "Descobreix els 8 mòduls integrats de RayGold ERP",
      title: "Mòduls",
      subtitle: "8 mòduls integrats per a la teva joieria",
      list: {
        maestros: { title: "Mestres", description: "Articles, proveïdors, clients i famílies" },
        comercial: { title: "Comercial", description: "Vendes, comandes i facturació" },
        fabricacion: { title: "Fabricació", description: "Producció, ordres de treball" },
        finanzas: { title: "Finances", description: "Comptabilitat, tresoreria i IVA" },
        historicos: { title: "Històrics", description: "Consulta de dades històriques" },
        estadisticas: { title: "Estadístiques", description: "Informes i quadres de comandament" },
        vendedores: { title: "Venedors", description: "Gestió de comissions" },
        ecommerce: { title: "Ecommerce", description: "Botiga online sincronitzada" },
      },
    },
    cta: {
      title: "Preparat per començar?",
      description: "Sol·licita una demo personalitzada",
      button: "Sol·licitar demo",
    },
    footer: {
      description: "Software ERP especialitzat per a la indústria joiera",
      product: "Producte",
      modules: "Mòduls",
      pricing: "Preus",
      technology: "Tecnologia",
      company: "Empresa",
      about: "Nosaltres",
      contact: "Contacte",
      blog: "Blog",
      legal: "Legal",
      privacy: "Privacitat",
      terms: "Termes",
      cookies: "Cookies",
      copyright: "© 2024 RayGold. Tots els drets reservats.",
    },
  },
  "pt-br": {
    nav: {
      home: "Início",
      modules: "Módulos",
      pricing: "Preços",
      technology: "Tecnologia",
      contact: "Contato",
    },
    contact: {
      metaTitle: "Contato | RayGold ERP para Joalheria",
      metaDescription: "Entre em contato com a RayGold para mais informações sobre nosso software ERP para joalheria",
      title: "Contato",
      subtitle: "Estamos aqui para ajudar você",
      nombre: "Nome",
      email: "Email",
      telefono: "Telefone",
      empresa: "Empresa",
      mensaje: "Mensagem",
      enviar: "Enviar mensagem",
      llamanos: "Ligue para nós",
      whatsapp: "WhatsApp",
    },
    modules: {
      metaTitle: "Módulos | RayGold ERP para Joalheria",
      metaDescription: "Descubra os 8 módulos integrados do RayGold ERP",
      title: "Módulos",
      subtitle: "8 módulos integrados para sua joalheria",
      list: {
        maestros: { title: "Mestres", description: "Artigos, fornecedores, clientes e famílias" },
        comercial: { title: "Comercial", description: "Vendas, pedidos e faturamento" },
        fabricacion: { title: "Fabricação", description: "Produção, ordens de trabalho" },
        finanzas: { title: "Finanças", description: "Contabilidade, tesouraria e IVA" },
        historicos: { title: "Históricos", description: "Consulta de dados históricos" },
        estadisticas: { title: "Estatísticas", description: "Relatórios e painéis" },
        vendedores: { title: "Vendedores", description: "Gestão de comissões" },
        ecommerce: { title: "Ecommerce", description: "Loja online sincronizada" },
      },
    },
    cta: {
      title: "Pronto para começar?",
      description: "Solicite uma demo personalizada",
      button: "Solicitar demo",
    },
    footer: {
      description: "Software ERP especializado para a indústria joalheira",
      product: "Produto",
      modules: "Módulos",
      pricing: "Preços",
      technology: "Tecnologia",
      company: "Empresa",
      about: "Sobre",
      contact: "Contato",
      blog: "Blog",
      legal: "Legal",
      privacy: "Privacidade",
      terms: "Termos",
      cookies: "Cookies",
      copyright: "© 2024 RayGold. Todos os direitos reservados.",
    },
  },
};

/**
 * Obtiene las traducciones para un idioma
 */
export function getTranslations(lang: Lang): Translations {
  return translations[lang] || translations.es;
}
