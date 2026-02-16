/**
 * RayGold Blog - Content Collections API
 * 
 * REEMPLAZA: src/lib/blog.js (queries GraphQL a WordPress)
 * AHORA USA: Astro Content Collections (archivos Markdown locales)
 * 
 * Las funciones mantienen la misma interfaz que antes para
 * minimizar cambios en los componentes de página.
 * 
 * @file src/lib/blog.ts
 */

import { getCollection, type CollectionEntry } from 'astro:content';

// ============================================
// TIPOS (equivalentes a los que teníamos con GraphQL)
// ============================================

export type BlogPost = CollectionEntry<'blog'>;

export interface BlogPostProcessed {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  modified: string | null;
  featuredImage: string | null;
  readingTime: number;
  language: string;
  translationGroup: string | null;
  seoTitle: string | null;
  seoDescription: string | null;
  seoKeyword: string;
  category: string;
  tags: string[];
  ctaEnabled: boolean;
  ctaType: string;
  ctaTitle: string | null;
  ctaText: string | null;
  ctaButton: string | null;
  ctaUrl: string | null;
  isFeatured: boolean;
  showToc: boolean;
  author: string;
  relatedSlugs: string[];
  // Referencia original para render()
  _entry: CollectionEntry<'blog'>;
}

// ============================================
// HELPERS
// ============================================

/**
 * Calcula tiempo de lectura (palabras / 200 wpm)
 */
function calculateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

/**
 * Extrae el slug limpio del id del archivo
 * Ejemplo: "es/raygold-el-erp-especializado.md" → "raygold-el-erp-especializado"
 */
function extractSlug(entry: CollectionEntry<'blog'>): string {
  // entry.id = "es/raygold-el-erp-especializado.md" (Astro 4+)
  // entry.slug ya viene limpio en Astro 4
  const parts = entry.id.split('/');
  const filename = parts[parts.length - 1];
  return filename.replace(/\.mdx?$/, '');
}

/**
 * Convierte una entry de Content Collection al formato procesado
 */
function processEntry(entry: CollectionEntry<'blog'>): BlogPostProcessed {
  const { data, body } = entry;
  
  return {
    slug: extractSlug(entry),
    title: data.title,
    excerpt: data.excerpt,
    content: body || '',
    date: data.date.toISOString(),
    modified: data.modified?.toISOString() || null,
    featuredImage: data.featuredImage || null,
    readingTime: data.readingTime || calculateReadingTime(body || ''),
    language: data.language,
    translationGroup: data.translationGroup || null,
    seoTitle: data.seoTitle || null,
    seoDescription: data.seoDescription || null,
    seoKeyword: data.seoKeyword,
    category: data.category,
    tags: data.tags,
    ctaEnabled: data.ctaEnabled,
    ctaType: data.ctaType,
    ctaTitle: data.ctaTitle || null,
    ctaText: data.ctaText || null,
    ctaButton: data.ctaButton || null,
    ctaUrl: data.ctaUrl || null,
    isFeatured: data.isFeatured,
    showToc: data.showToc,
    author: data.author,
    relatedSlugs: data.relatedSlugs,
    _entry: entry,
  };
}

// ============================================
// FUNCIONES PÚBLICAS
// (misma interfaz que el blog.js/blog.ts anterior)
// ============================================

/**
 * Obtener todos los posts del blog por idioma
 * REEMPLAZA: getBlogPosts() con GraphQL
 */
export async function getBlogPosts(lang: string = 'es'): Promise<BlogPostProcessed[]> {
  const allPosts = await getCollection('blog', ({ data }) => {
    return data.language === lang && !data.draft;
  });

  return allPosts
    .map(processEntry)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Obtener un post por su slug e idioma
 * REEMPLAZA: getBlogPostBySlug() con GraphQL
 */
export async function getBlogPostBySlug(slug: string, lang: string = 'es'): Promise<BlogPostProcessed | null> {
  const allPosts = await getCollection('blog', ({ data }) => {
    return data.language === lang && !data.draft;
  });

  const entry = allPosts.find(post => extractSlug(post) === slug);
  return entry ? processEntry(entry) : null;
}

/**
 * Obtener posts destacados por idioma
 * REEMPLAZA: getFeaturedPosts() con GraphQL
 */
export async function getFeaturedPosts(lang: string = 'es'): Promise<BlogPostProcessed[]> {
  const allPosts = await getCollection('blog', ({ data }) => {
    return data.language === lang && !data.draft && data.isFeatured;
  });

  return allPosts
    .map(processEntry)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Obtener posts por categoría
 * REEMPLAZA: getPostsByCategory() con GraphQL
 */
export async function getPostsByCategory(category: string, lang: string = 'es'): Promise<BlogPostProcessed[]> {
  const allPosts = await getCollection('blog', ({ data }) => {
    return data.language === lang && !data.draft && data.category === category;
  });

  return allPosts
    .map(processEntry)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Obtener todas las categorías con conteo
 * REEMPLAZA: getBlogCategories() con GraphQL
 */
export async function getBlogCategories(lang: string = 'es'): Promise<{ name: string; slug: string; count: number }[]> {
  const allPosts = await getCollection('blog', ({ data }) => {
    return data.language === lang && !data.draft;
  });

  const categoryMap = new Map<string, number>();
  
  for (const post of allPosts) {
    const cat = post.data.category;
    categoryMap.set(cat, (categoryMap.get(cat) || 0) + 1);
  }

  return Array.from(categoryMap.entries())
    .map(([name, count]) => ({
      name: name.charAt(0).toUpperCase() + name.slice(1),
      slug: name,
      count,
    }))
    .sort((a, b) => b.count - a.count);
}

/**
 * Obtener traducciones de un artículo (por translationGroup)
 * REEMPLAZA: la lógica de translationGroup en GraphQL
 */
export async function getTranslations(translationGroup: string): Promise<BlogPostProcessed[]> {
  if (!translationGroup) return [];

  const allPosts = await getCollection('blog', ({ data }) => {
    return data.translationGroup === translationGroup && !data.draft;
  });

  return allPosts.map(processEntry);
}

/**
 * Obtener posts relacionados
 * REEMPLAZA: relatedPosts de ACF
 */
export async function getRelatedPosts(post: BlogPostProcessed, limit: number = 3): Promise<BlogPostProcessed[]> {
  const lang = post.language;

  // Si tiene slugs relacionados explícitos, usarlos
  if (post.relatedSlugs.length > 0) {
    const allPosts = await getCollection('blog', ({ data }) => {
      return data.language === lang && !data.draft;
    });

    return allPosts
      .filter(p => post.relatedSlugs.includes(extractSlug(p)))
      .map(processEntry)
      .slice(0, limit);
  }

  // Si no, buscar por misma categoría
  const sameCategoryPosts = await getPostsByCategory(post.category, lang);
  return sameCategoryPosts
    .filter(p => p.slug !== post.slug)
    .slice(0, limit);
}

/**
 * Obtener todos los slugs para getStaticPaths
 * NUEVO: necesario para Astro Content Collections
 */
export async function getAllBlogSlugs(): Promise<{ lang: string; slug: string }[]> {
  const allPosts = await getCollection('blog', ({ data }) => !data.draft);

  return allPosts.map(post => ({
    lang: post.data.language,
    slug: extractSlug(post),
  }));
}
