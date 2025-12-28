import { defineConfig } from "astro/config";

export default defineConfig({
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en", "fr", "ca", "pt-br"],
    routing: {
      prefixDefaultLocale: true, // /es/contacto en lugar de /contacto
    },
  },
});
