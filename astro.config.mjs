import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // URL del sitio (IMPORTANTE para sitemap y SEO)
  site: "https://www.raytecno.es",

  // Integraciones
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
        // Página principal - máxima prioridad
        if (item.url === "https://www.raytecno.es/") {
          return { ...item, priority: 1.0, changefreq: "daily" };
        }
        // Páginas de módulos - alta prioridad
        if (item.url.includes("/modulos")) {
          return { ...item, priority: 0.9, changefreq: "weekly" };
        }
        // Precios - alta prioridad
        if (item.url.includes("/precios")) {
          return { ...item, priority: 0.9, changefreq: "monthly" };
        }
        // Tecnología
        if (item.url.includes("/tecnologia")) {
          return { ...item, priority: 0.8, changefreq: "monthly" };
        }
        return item;
      },

      // Generar sitemap para múltiples idiomas (si aplica)
      i18n: {
        defaultLocale: "es",
        locales: {
          es: "es-ES",
          // ca: 'ca-ES', // Catalán si lo añades
        },
      },
    }),
  ],

  // Trailing slash (importante para consistencia de URLs)
  trailingSlash: "never",

  // Build options
  build: {
    // Inlining de estilos pequeños
    inlineStylesheets: "auto",
  },

  // Compresión
  compressHTML: true,
});
