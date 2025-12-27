/**
 * Middleware de internacionalización para Astro
 * 
 * Funcionalidades:
 * - Detecta el idioma preferido del navegador
 * - Redirige a la versión correcta del sitio
 * - Guarda la preferencia en cookie
 * 
 * Archivo: src/middleware.ts
 */

import { defineMiddleware } from 'astro:middleware';
import { defaultLang, languages, type Language } from './i18n/config';
import { detectLanguage, getLangFromPath } from './i18n/utils';

// Nombre de la cookie para guardar preferencia
const LANG_COOKIE = 'preferred_lang';

// Rutas que no necesitan redirección
const EXCLUDED_PATHS = [
  '/api/',
  '/_astro/',
  '/images/',
  '/fonts/',
  '/favicon',
  '/robots.txt',
  '/sitemap',
];

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;
  
  // Ignorar rutas excluidas (assets, API, etc.)
  if (EXCLUDED_PATHS.some(path => pathname.startsWith(path))) {
    return next();
  }
  
  // Obtener el idioma de la URL actual
  const urlLang = getLangFromPath(pathname);
  
  // Si la URL ya tiene un idioma válido, continuar
  if (urlLang !== defaultLang || pathname === '/') {
    // Establecer el idioma en locals para uso en componentes
    context.locals.lang = urlLang;
    return next();
  }
  
  // SOLO para la página principal (/), verificar si debemos redirigir
  if (pathname === '/') {
    // Verificar cookie de preferencia
    const cookieLang = context.cookies.get(LANG_COOKIE)?.value as Language | undefined;
    
    if (cookieLang && cookieLang in languages && cookieLang !== defaultLang) {
      // Redirigir al idioma preferido guardado
      return context.redirect(`/${cookieLang}/`, 302);
    }
    
    // Detectar idioma del navegador
    const acceptLanguage = context.request.headers.get('accept-language');
    const detectedLang = detectLanguage(acceptLanguage);
    
    // Si el idioma detectado NO es español, redirigir
    if (detectedLang !== defaultLang) {
      // Guardar preferencia en cookie (30 días)
      context.cookies.set(LANG_COOKIE, detectedLang, {
        path: '/',
        maxAge: 60 * 60 * 24 * 30, // 30 días
        sameSite: 'lax',
      });
      
      return context.redirect(`/${detectedLang}/`, 302);
    }
  }
  
  // Establecer idioma por defecto
  context.locals.lang = defaultLang;
  return next();
});

/**
 * NOTA: Para que este middleware funcione correctamente, 
 * necesitas agregar la siguiente configuración en astro.config.mjs:
 * 
 * export default defineConfig({
 *   output: 'server', // o 'hybrid'
 *   // ...resto de config
 * });
 * 
 * Si usas 'static', el middleware solo funcionará en desarrollo.
 */
