/**
 * Configuración de Astro - Raytecno
 * Con soporte completo de i18n (5 idiomas) y SEO optimizado
 */

import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Idiomas soportados
const locales = ["es", "en", "fr", "ca", "pt-br"];

export default defineConfig({
  // ================================
  // URL DEL SITIO
  // ================================
  site: "https://www.raytecno.es",

  // ================================
  // INTERNACIONALIZACIÓN (i18n)
  // ================================
  i18n: {
    defaultLocale: "es",
    locales: locales,
    routing: {
      // Español sin prefijo: raytecno.es/
      // Otros idiomas con prefijo: raytecno.es/en/, raytecno.es/fr/, etc.
      prefixDefaultLocale: false,
    },
    // Fallback: si no existe traducción, usa español
    fallback: {
      en: "es",
      fr: "es",
      ca: "es",
      "pt-br": "es",
    },
  },

  // ================================
  // INTEGRACIONES
  // ================================
  integrations: [
    sitemap({
      // Excluir páginas específicas
      filter: (page) =>
        !page.includes("/admin") &&
        !page.includes("/api") &&
        !page.includes("/404"),

      // Frecuencia de cambio por defecto
      changefreq: "weekly",

      // Prioridad por defecto
      priority: 0.7,

      // Última modificación
      lastmod: new Date(),

      // Personalizar entradas específicas
      serialize: (item) => {
        const url = item.url;

        // Páginas principales (todos los idiomas) - máxima prioridad
        if (
          url === "https://www.raytecno.es/" ||
          url === "https://www.raytecno.es/en/" ||
          url === "https://www.raytecno.es/fr/" ||
          url === "https://www.raytecno.es/ca/" ||
          url === "https://www.raytecno.es/pt-br/"
        ) {
          return { ...item, priority: 1.0, changefreq: "daily" };
        }

        // Páginas de módulos - alta prioridad
        if (
          url.includes("/modulos") ||
          url.includes("/modules") ||
          url.includes("/moduls")
        ) {
          return { ...item, priority: 0.9, changefreq: "weekly" };
        }

        // Precios - alta prioridad
        if (
          url.includes("/precios") ||
          url.includes("/pricing") ||
          url.includes("/tarifs") ||
          url.includes("/preus") ||
          url.includes("/precos")
        ) {
          return { ...item, priority: 0.9, changefreq: "monthly" };
        }

        // Tecnología
        if (
          url.includes("/tecnologia") ||
          url.includes("/technology") ||
          url.includes("/technologie")
        ) {
          return { ...item, priority: 0.8, changefreq: "monthly" };
        }

        // Contacto
        if (
          url.includes("/contacto") ||
          url.includes("/contact") ||
          url.includes("/contacte") ||
          url.includes("/contato")
        ) {
          return { ...item, priority: 0.7, changefreq: "monthly" };
        }

        return item;
      },

      // Configuración multiidioma para sitemap
      i18n: {
        defaultLocale: "es",
        locales: {
          es: "es-ES",
          en: "en-US",
          fr: "fr-FR",
          ca: "ca-ES",
          "pt-br": "pt-BR",
        },
      },
    }),
  ],

  // ================================
  // OUTPUT Y BUILD
  // ================================

  // 'static' para sitio estático (GitHub Pages, Netlify, Azure Static)
  // 'server' o 'hybrid' si necesitas detección automática de idioma
  output: "static",

  // Trailing slash (consistencia de URLs)
  trailingSlash: "never",

  // Build options
  build: {
    // Inlining de estilos pequeños
    inlineStylesheets: "auto",
    // Formato: 'directory' genera /page/index.html, 'file' genera /page.html
    format: "directory",
  },

  // Compresión HTML
  compressHTML: true,

  // ================================
  // SERVIDOR DE DESARROLLO
  // ================================
  server: {
    port: 4321,
    host: true,
  },

  // ================================
  // VITE (si necesitas configuración adicional)
  // ================================
  vite: {
    // Optimizaciones
    build: {
      // Tamaño máximo de chunk para warnings
      chunkSizeWarningLimit: 1000,
    },
    // CSS
    css: {
      devSourcemap: true,
    },
  },
});
