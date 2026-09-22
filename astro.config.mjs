import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import {
  supportedLangs,
  pageSlugs,
  moduloSlugs,
  toolSlugs,
  legalSlugs,
  getPageUrl,
  getModuloUrl,
  getToolUrl,
  getLegalUrl,
} from "./src/config/pages.ts";

// =============================================
// HREFLANG PARA EL SITEMAP
// =============================================
// @astrojs/sitemap solo empareja URLs con el MISMO slug, así que
// /es/modulos/fabricacion y /en/modules/manufacturing quedaban sueltas.
// Aquí construimos los grupos de traducciones desde src/config/pages.ts,
// que es la fuente única de slugs del sitio.

const SITE = "https://www.raytecno.es";

// Códigos hreflang: "es" genérico (no es-ES) para cubrir España + Colombia + Perú.
const HREFLANG = {
  es: "es",
  ca: "ca",
  en: "en",
  fr: "fr",
  "pt-br": "pt-BR",
};

const norm = (p) => (p.length > 1 ? p.replace(/\/+$/, "") : p);

// path → { es: path, en: path, ... }
const alternates = new Map();

function register(build, allowLangRoot = false) {
  const group = {};
  for (const lang of supportedLangs) {
    const path = norm(build(lang));
    // Las funciones de pages.ts devuelven /{lang} cuando falta un slug:
    // no queremos que eso se confunda con la home.
    if (!allowLangRoot && path === `/${lang}`) return;
    group[lang] = path;
  }
  for (const path of Object.values(group)) alternates.set(path, group);
}

for (const key of Object.keys(pageSlugs)) register((l) => getPageUrl(key, l), key === "home");
for (const key of Object.keys(moduloSlugs)) register((l) => getModuloUrl(key, l));
for (const key of Object.keys(toolSlugs)) register((l) => getToolUrl(key, l));
for (const key of Object.keys(legalSlugs)) register((l) => getLegalUrl(key, l));

// Blog: mismo slug en todos los idiomas
const BLOG_RE = /^\/(es|en|fr|ca|pt-br)(\/blog(?:\/.*)?)$/;

function getGroup(path) {
  const group = alternates.get(path);
  if (group) return group;
  const m = path.match(BLOG_RE);
  if (m) return Object.fromEntries(supportedLangs.map((l) => [l, `/${l}${m[2]}`]));
  return null; // página sin traducciones (p. ej. /es/erp-joyeria)
}

export default defineConfig({
  // =============================================
  // SITE URL - OBLIGATORIO PARA SITEMAP
  // =============================================
  site: SITE,

  // =============================================
  // TRAILING SLASH - COINCIDE CON AZURE SWA
  // =============================================
  trailingSlash: "never",

  // =============================================
  // BUILD OUTPUT
  // =============================================
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
      // Excluir rutas que no queremos en el sitemap
      filter: (page) => {
        const path = new URL(page).pathname;
        return (
          path !== "/" && // la raíz hace 301 a /es en Azure: no debe estar en el sitemap
          !path.includes("/admin") &&
          !path.includes("/api/") &&
          !path.includes("/preview") &&
          !path.includes("/404")
        );
      },
      // Sin lastmod/changefreq/priority: Google ignora changefreq y priority,
      // y un lastmod igual a la hora del build en todas las URLs le hace
      // desconfiar del sitemap entero.
      serialize(item) {
        const path = norm(new URL(item.url).pathname);
        const group = getGroup(path);
        const out = { url: item.url };
        if (group) {
          out.links = [
            ...supportedLangs.map((l) => ({ lang: HREFLANG[l], url: SITE + group[l] })),
            { lang: "x-default", url: SITE + group.en },
          ];
        }
        return out;
      },
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
