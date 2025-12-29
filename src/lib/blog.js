// src/lib/blog.js
// Queries GraphQL para el Blog
import { WORDPRESS_GRAPHQL } from "../config.js";

// ============================================
// OBTENER TODOS LOS POSTS DEL BLOG POR IDIOMA
// ============================================
export async function getBlogPosts(lang = 'es', first = 100) {
  const query = `
    query GetBlogPosts($first: Int!) {
      blogPosts(first: $first, where: { status: PUBLISH }) {
        nodes {
          id
          databaseId
          slug
          title
          excerpt
          date
          modified
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          blogSeo {
            seoTitle
            seoDescription
            seoKeyword
            ctaEnabled
            ctaType
            isFeatured
            language
            translationGroup
            readingTime
          }
          blogCategories {
            nodes {
              id
              name
              slug
            }
          }
          blogTags {
            nodes {
              id
              name
              slug
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch(WORDPRESS_GRAPHQL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables: { first } }),
    });

    const { data } = await response.json();
    const posts = data?.blogPosts?.nodes || [];
    
    // Filtrar por idioma
    return posts.filter(post => post.blogSeo?.language === lang);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

// ============================================
// OBTENER UN POST POR SLUG
// ============================================
export async function getBlogPostBySlug(slug, lang = 'es') {
  const query = `
    query GetBlogPost($slug: ID!) {
      blogPost(id: $slug, idType: SLUG) {
        id
        databaseId
        slug
        title
        excerpt
        content
        date
        modified
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        blogSeo {
          seoTitle
          seoDescription
          seoKeyword
          seoKeywordsSecondary
          ctaEnabled
          ctaType
          ctaTitle
          ctaText
          ctaButton
          ctaUrl
          isFeatured
          language
          translationGroup
          readingTime
        }
        blogCategories {
          nodes {
            id
            name
            slug
          }
        }
        blogTags {
          nodes {
            id
            name
            slug
          }
        }
      }
    }
  `;

  try {
    const response = await fetch(WORDPRESS_GRAPHQL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables: { slug } }),
    });

    const { data } = await response.json();
    const post = data?.blogPost;
    
    // Verificar idioma
    if (post && post.blogSeo?.language !== lang) {
      return null;
    }
    
    return post;
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}

// ============================================
// OBTENER POSTS DESTACADOS
// ============================================
export async function getFeaturedPosts(lang = 'es', first = 3) {
  const posts = await getBlogPosts(lang, 50);
  return posts.filter(post => post.blogSeo?.isFeatured).slice(0, first);
}

// ============================================
// OBTENER CATEGORÍAS DEL BLOG
// ============================================
export async function getBlogCategories() {
  const query = `
    query GetBlogCategories {
      blogCategories(first: 50) {
        nodes {
          id
          name
          slug
          count
        }
      }
    }
  `;

  try {
    const response = await fetch(WORDPRESS_GRAPHQL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });

    const { data } = await response.json();
    return data?.blogCategories?.nodes || [];
  } catch (error) {
    console.error("Error fetching blog categories:", error);
    return [];
  }
}

// ============================================
// OBTENER POSTS POR CATEGORÍA
// ============================================
export async function getBlogPostsByCategory(categorySlug, lang = 'es') {
  const posts = await getBlogPosts(lang, 100);
  return posts.filter(post => 
    post.blogCategories?.nodes?.some(cat => cat.slug === categorySlug)
  );
}

// ============================================
// OBTENER POSTS RELACIONADOS
// ============================================
export async function getRelatedPosts(currentSlug, categorySlug, lang = 'es', limit = 3) {
  const posts = await getBlogPosts(lang, 50);
  
  // Filtrar por categoría y excluir el post actual
  const related = posts.filter(post => 
    post.slug !== currentSlug &&
    post.blogCategories?.nodes?.some(cat => cat.slug === categorySlug)
  );
  
  return related.slice(0, limit);
}

// ============================================
// OBTENER TODOS LOS SLUGS (para generación estática)
// ============================================
export async function getAllBlogSlugs() {
  const query = `
    query GetAllSlugs {
      blogPosts(first: 500, where: { status: PUBLISH }) {
        nodes {
          slug
          blogSeo {
            language
          }
        }
      }
    }
  `;

  try {
    const response = await fetch(WORDPRESS_GRAPHQL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });

    const { data } = await response.json();
    return (data?.blogPosts?.nodes || []).map(post => ({
      slug: post.slug,
      lang: post.blogSeo?.language || 'es'
    }));
  } catch (error) {
    console.error("Error fetching slugs:", error);
    return [];
  }
}

// ============================================
// HELPER: Calcular tiempo de lectura
// ============================================
export function calculateReadingTime(content, wordsPerMinute = 200) {
  if (!content) return 5;
  const text = content.replace(/<[^>]*>/g, '');
  const words = text.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

// ============================================
// HELPER: Obtener imagen destacada
// ============================================
export function getFeaturedImageUrl(post) {
  return post?.featuredImage?.node?.sourceUrl || null;
}
