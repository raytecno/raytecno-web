import { defineConfig } from "astro/config";

export default defineConfig({
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
  // VITE CONFIG
  // =============================================
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
