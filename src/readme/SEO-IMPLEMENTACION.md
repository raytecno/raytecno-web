# 🔍 Guía de Implementación SEO - RayGold

## Archivos incluidos

| Archivo | Ubicación destino | Descripción |
|---------|-------------------|-------------|
| `SEO.astro` | `src/components/` | Componente completo con todas las opciones |
| `SEOHead.astro` | `src/components/` | Versión simplificada (recomendada para empezar) |
| `robots.txt` | `public/` | Instrucciones para buscadores |
| `SEO-CONFIG-GUIDE.js` | (referencia) | Guía de configuración de Astro |

---

## 1️⃣ Instalar sitemap de Astro

```bash
npm install @astrojs/sitemap
```

## 2️⃣ Actualizar `astro.config.mjs`

```javascript
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.raytecno.es',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      changefreq: 'weekly',
      priority: 0.7,
    }),
  ],
});
```

## 3️⃣ Copiar archivos

```
public/
  └── robots.txt        ← Copiar aquí

src/components/
  └── SEOHead.astro     ← Copiar aquí
```

## 4️⃣ Usar en Layout.astro

```astro
---
import SEOHead from '../components/SEOHead.astro';

interface Props {
  title?: string;
  description?: string;
}

const { title, description } = Astro.props;
---

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  
  <!-- SEO -->
  <SEOHead title={title} description={description} />
</head>
<body>
  <slot />
</body>
</html>
```

## 5️⃣ Usar en páginas

```astro
<!-- index.astro (usa valores por defecto) -->
<Layout>

<!-- precios.astro -->
<Layout 
  title="Precios y Planes"
  description="Planes de RayGold ERP desde 29€/usuario/mes"
>

<!-- modulos/maestros.astro -->
<Layout 
  title="Módulo Maestros"
  description="Gestión de artículos, proveedores y clientes para joyería"
>
```

## 6️⃣ Crear imagen Open Graph

Necesitas crear una imagen para redes sociales:

- **Tamaño:** 1200 x 630 píxeles
- **Formato:** JPG
- **Ubicación:** `public/images/og-default.jpg`

**Contenido sugerido:**
- Logo de RayGold
- Texto: "Software ERP para Joyería"
- Fondo oscuro acorde al sitio

---

## ✅ Verificación post-deploy

1. **Google Search Console**
   - Verificar dominio
   - Enviar sitemap: `https://www.raytecno.es/sitemap-index.xml`

2. **Rich Results Test**
   - https://search.google.com/test/rich-results

3. **Facebook Debugger**
   - https://developers.facebook.com/tools/debug/

4. **Lighthouse** (Chrome DevTools → F12 → Lighthouse)

---

## 📋 Checklist final

- [ ] Instalar `@astrojs/sitemap`
- [ ] Actualizar `astro.config.mjs` con `site`
- [ ] Copiar `robots.txt` a `public/`
- [ ] Copiar `SEOHead.astro` a `src/components/`
- [ ] Actualizar `Layout.astro`
- [ ] Crear imagen OG (1200x630)
- [ ] Build y verificar sitemap generado
- [ ] Verificar en herramientas de SEO
