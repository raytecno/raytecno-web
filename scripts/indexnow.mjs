// scripts/indexnow.mjs
// Lee el sitemap publicado en producción y envía todas las URLs a IndexNow.
// Se ejecuta en GitHub Actions DESPUÉS del deploy a Azure Static Web Apps.
// Requiere Node 18+ (fetch nativo) y el secreto INDEXNOW_KEY.

const HOST = "www.raytecno.es";
const SITEMAP = `https://${HOST}/sitemap-index.xml`;
const KEY = process.env.INDEXNOW_KEY;
const ENDPOINT = "https://api.indexnow.org/indexnow";
const LOTE = 10000; // máximo de URLs por petición según el protocolo

if (!KEY) {
  console.error("❌ Falta la variable INDEXNOW_KEY");
  process.exit(1);
}

const extraerLocs = (xml) =>
  [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1]);

async function leer(url) {
  const res = await fetch(url, { headers: { "User-Agent": "raytecno-indexnow" } });
  if (!res.ok) throw new Error(`${res.status} al leer ${url}`);
  return res.text();
}

async function recogerUrls(url, vistos = new Set()) {
  if (vistos.has(url)) return [];
  vistos.add(url);
  const xml = await leer(url);
  const locs = extraerLocs(xml);
  // sitemap-index.xml contiene otros sitemaps; los recorremos
  if (xml.includes("<sitemapindex")) {
    const hijos = await Promise.all(locs.map((l) => recogerUrls(l, vistos)));
    return hijos.flat();
  }
  return locs;
}

async function comprobarClave() {
  const url = `https://${HOST}/${KEY}.txt`;
  const txt = (await leer(url)).trim();
  if (txt !== KEY) throw new Error(`El archivo ${url} no contiene la clave correcta`);
  return url;
}

async function main() {
  const keyLocation = await comprobarClave();
  const urls = [...new Set(await recogerUrls(SITEMAP))].filter((u) =>
    u.startsWith(`https://${HOST}/`)
  );

  console.log(`🔎 ${urls.length} URLs encontradas en el sitemap`);
  if (!urls.length) return;

  for (let i = 0; i < urls.length; i += LOTE) {
    const urlList = urls.slice(i, i + LOTE);
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({ host: HOST, key: KEY, keyLocation, urlList }),
    });
    // 200 = aceptado, 202 = recibido pendiente de validar la clave
    if (res.status === 200 || res.status === 202) {
      console.log(`✅ Lote enviado (${urlList.length} URLs) → ${res.status}`);
    } else {
      console.error(`⚠️ IndexNow respondió ${res.status}: ${await res.text()}`);
      process.exitCode = 1;
    }
  }
}

main().catch((e) => {
  console.error("❌", e.message);
  process.exit(1);
});
