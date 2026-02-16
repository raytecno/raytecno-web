/**
 * Content Collections Config - Reemplaza WordPress + ACF
 * 
 * Este archivo define el schema del blog, equivalente a:
 * - cpt-blog-posts.php (Custom Post Type)
 * - acf-blog-fields.php (Campos ACF: SEO, CTA, Config)
 * 
 * @file src/content/config.ts
 */

import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content', // Markdown con frontmatter
  schema: z.object({
    // ============================================
    // BÁSICOS (equivale al CPT de WordPress)
    // ============================================
    title: z.string(),
    excerpt: z.string().max(300).describe('Extracto para tarjetas y meta description'),
    date: z.coerce.date(),
    modified: z.coerce.date().optional(),
    featuredImage: z.string().nullable().optional().describe('URL de imagen destacada (Azure Blob Storage)'),
    draft: z.boolean().default(false),

    // ============================================
    // IDIOMA Y TRADUCCIÓN (equivale a ACF language + translationGroup)
    // ============================================
    language: z.enum(['es', 'en', 'fr', 'ca', 'pt-br']),
    translationGroup: z.string().optional().describe('ID compartido entre traducciones del mismo artículo, ej: "control-mermas-001"'),

    // ============================================
    // SEO (equivale a ACF grupo "SEO del Artículo")
    // ============================================
    seoTitle: z.string().optional().describe('Meta title personalizado (si difiere del título)'),
    seoDescription: z.string().optional().describe('Meta description (si difiere del excerpt)'),
    seoKeyword: z.string().describe('Keyword principal para posicionar'),
    seoKeywordsSecondary: z.string().optional().describe('Keywords secundarias separadas por coma'),

    // ============================================
    // CATEGORÍAS Y ETIQUETAS (equivale a taxonomías WP)
    // ============================================
    category: z.string().describe('Categoría principal: producto, gestion, fabricacion, normativa, tecnologia'),
    tags: z.array(z.string()).default([]),

    // ============================================
    // CTA (equivale a ACF grupo "Call to Action")
    // ============================================
    ctaEnabled: z.boolean().default(true),
    ctaType: z.enum(['demo', 'contacto', 'whatsapp', 'newsletter', 'custom']).default('demo'),
    ctaTitle: z.string().optional(),
    ctaText: z.string().optional(),
    ctaButton: z.string().optional(),
    ctaUrl: z.string().optional(),

    // ============================================
    // CONFIGURACIÓN (equivale a ACF grupo "Configuración")
    // ============================================
    isFeatured: z.boolean().default(false),
    showToc: z.boolean().default(true).describe('Mostrar tabla de contenidos'),
    author: z.string().default('RayGold').describe('Autor del artículo'),
    readingTime: z.number().optional().describe('Tiempo lectura manual (se calcula automáticamente si no se pone)'),

    // ============================================
    // ARTÍCULOS RELACIONADOS
    // ============================================
    relatedSlugs: z.array(z.string()).default([]).describe('Slugs de artículos relacionados'),
  }),
});

export const collections = {
  blog: blogCollection,
};
