import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // =============================================
  // SITE URL - OBLIGATORIO PARA SITEMAP
  // =============================================
  // Sin esto, el sitemap NO se genera correctamente.
  // Debe coincidir EXACTAMENTE con el dominio canónico
  // (con www, ya que es lo que sirve Azure SWA).
  site: "https://www.raytecno.es",

  // =============================================
  // TRAILING SLASH - CORREGIDO PARA AZURE SWA
  // =============================================
  // Azure Static Web Apps elimina el trailing slash (301 redirect).
  // Ponemos "never" para que Astro genere URLs sin /
  // y así coincidan con lo que Azure realmente sirve.
  // Esto resuelve el problema de "Canonicals: Canonicalizada"
  // que Screaming Frog detectaba en 98 URLs.
  trailingSlash: "never",

  // =============================================
  // BUILD OUTPUT
  // =============================================
  // 'static' genera HTML estático (recomendado para Azure Static Web Apps)
  output: "static",

  // =============================================
  // I18N - MULTIIDIOMA
  // =============================================
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en", "fr", "ca", "pt-br"],
    routing: {
      prefixDefaultLocale: true, // /es/contacto en lugar de /contacto
      redirectToDefaultLocale: false,
    },
  },

  // =============================================
  // INTEGRATIONS
  // =============================================
  integrations: [
    sitemap({
      // Configuración i18n para que el sitemap genere
      // hreflang automáticamente entre las versiones traducidas
      i18n: {
        defaultLocale: "es",
        locales: {
          es: "es-ES",
          ca: "ca-ES",
          en: "en-US",
          fr: "fr-FR",
          "pt-br": "pt-BR",
        },
      },
      // Excluir rutas que no queremos en el sitemap
      filter: (page) =>
        !page.includes("/admin") &&
        !page.includes("/api/") &&
        !page.includes("/preview") &&
        !page.includes("/404"),
      // Configuración por defecto para todas las URLs
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],

  // =============================================
  // VITE CONFIG
  // =============================================
  vite: {
    build: {
      cssMinify: true,
    },
  },
});