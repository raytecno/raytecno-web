import { defineConfig } from "astro/config";

export default defineConfig({
  // =============================================
  // TRAILING SLASH - IMPORTANT PER SEO
  // =============================================
  // Força que TOTES les URLs acabin amb /
  // Això evita duplicats: /es i /es/ seran la mateixa URL
  trailingSlash: "ignore",

  // =============================================
  // BUILD OUTPUT
  // =============================================
  // 'static' genera HTML estàtic (recomanat per Azure Static Web Apps)
  output: "static",

  // =============================================
  // BASE PATH
  // =============================================
  // Si la web està en un subdirectori, canvia això
  // Per exemple: base: '/blog' si està en example.com/blog
  // base: '/',

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
  // VITE CONFIG (opcional)
  // =============================================
  vite: {
    build: {
      // Millora la compressió CSS
      cssMinify: true,
    },
  },
});
