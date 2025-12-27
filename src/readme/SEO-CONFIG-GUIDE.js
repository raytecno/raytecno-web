/**
 * ============================================
 * CONFIGURACIÓN SEO PARA ASTRO - RAYGOLD
 * ============================================
 * 
 * Este archivo contiene las instrucciones para configurar
 * el sitemap automático y otras opciones SEO en Astro.
 */

// ============================================
// 1. INSTALAR DEPENDENCIA DEL SITEMAP
// ============================================

// Ejecutar en terminal:
// npm install @astrojs/sitemap

// ============================================
// 2. CONFIGURAR astro.config.mjs
// ============================================

// Reemplazar el contenido de astro.config.mjs con:

import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // URL del sitio (IMPORTANTE para sitemap y SEO)
  site: 'https://www.raytecno.es',
  
  // Integraciones
  integrations: [
    sitemap({
      // Excluir páginas específicas
      filter: (page) => 
        !page.includes('/admin') && 
        !page.includes('/api') &&
        !page.includes('/404'),
      
      // Frecuencia de cambio por defecto
      changefreq: 'weekly',
      
      // Prioridad por defecto
      priority: 0.7,
      
      // Última modificación
      lastmod: new Date(),
      
      // Personalizar entradas específicas
      serialize: (item) => {
        // Página principal - máxima prioridad
        if (item.url === 'https://www.raytecno.es/') {
          return { ...item, priority: 1.0, changefreq: 'daily' };
        }
        // Páginas de módulos - alta prioridad
        if (item.url.includes('/modulos')) {
          return { ...item, priority: 0.9, changefreq: 'weekly' };
        }
        // Precios - alta prioridad
        if (item.url.includes('/precios')) {
          return { ...item, priority: 0.9, changefreq: 'monthly' };
        }
        // Tecnología
        if (item.url.includes('/tecnologia')) {
          return { ...item, priority: 0.8, changefreq: 'monthly' };
        }
        return item;
      },
      
      // Generar sitemap para múltiples idiomas (si aplica)
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-ES',
          // ca: 'ca-ES', // Catalán si lo añades
        },
      },
    }),
  ],
  
  // Trailing slash (importante para consistencia de URLs)
  trailingSlash: 'never',
  
  // Build options
  build: {
    // Inlining de estilos pequeños
    inlineStylesheets: 'auto',
  },
  
  // Compresión
  compressHTML: true,
});

// ============================================
// 3. ESTRUCTURA DE ARCHIVOS RECOMENDADA
// ============================================

/*
public/
  ├── robots.txt          ← Copiar el robots.txt generado
  ├── favicon.ico
  ├── favicon.svg
  ├── apple-touch-icon.png (180x180)
  └── images/
      ├── logo.png        ← Logo para Schema.org
      ├── og-default.jpg  ← Imagen OG por defecto (1200x630)
      └── og-modulos.jpg  ← Imágenes OG específicas

src/
  ├── components/
  │   ├── SEO.astro       ← Componente SEO
  │   └── WhatsAppButton.astro
  ├── layouts/
  │   └── Layout.astro    ← Usar SEO aquí
  └── pages/
      ├── index.astro
      ├── precios.astro
      ├── tecnologia.astro
      └── modulos/
          ├── index.astro
          └── maestros.astro
*/

// ============================================
// 4. USO DEL COMPONENTE SEO EN LAYOUT.ASTRO
// ============================================

/*
---
import SEO from '../components/SEO.astro';

interface Props {
  title?: string;
  description?: string;
  image?: string;
  type?: 'website' | 'article' | 'product';
}

const { title, description, image, type = 'website' } = Astro.props;
---

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  
  <!-- SEO Component -->
  <SEO 
    title={title}
    description={description}
    image={image}
    type={type}
  />
  
  <!-- Preconnect para performance -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://raygoldstorage.blob.core.windows.net" />
</head>
<body>
  <slot />
</body>
</html>
*/

// ============================================
// 5. EJEMPLO DE USO EN PÁGINAS
// ============================================

/*
// index.astro - Página principal
<Layout title={undefined}> <!-- Usa título por defecto -->

// precios.astro
<Layout 
  title="Precios y Planes"
  description="Planes de precios de RayGold ERP: SaaS desde 29€/usuario/mes o licencia perpetua desde 12.000€"
  type="product"
>

// modulos/maestros.astro
<Layout 
  title="Módulo Maestros"
  description="Gestión completa de artículos, proveedores, clientes y familias para joyería"
  image="/images/og-maestros.jpg"
>

// tecnologia.astro
<Layout 
  title="Tecnología"
  description="Stack tecnológico moderno: Vue.js, ASP.NET Core, Azure Cloud, SQL Server"
>
*/

// ============================================
// 6. VERIFICAR SEO DESPUÉS DE DEPLOY
// ============================================

/*
Herramientas recomendadas:

1. Google Search Console
   - Verificar propiedad del dominio
   - Enviar sitemap: https://www.raytecno.es/sitemap-index.xml
   - Monitorear indexación

2. Google Rich Results Test
   - https://search.google.com/test/rich-results
   - Verificar Schema.org

3. Facebook Sharing Debugger
   - https://developers.facebook.com/tools/debug/
   - Verificar Open Graph

4. Twitter Card Validator
   - https://cards-dev.twitter.com/validator
   - Verificar Twitter Cards

5. Lighthouse (Chrome DevTools)
   - Auditoría de SEO
   - Performance
   - Accessibility
*/
