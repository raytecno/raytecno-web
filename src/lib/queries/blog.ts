/**
 * RayGold Blog - GraphQL Queries
 * 
 * Queries para obtener datos del blog desde WordPress
 * Usar con el cliente GraphQL de Astro
 */

// ============================================
// QUERY: LISTADO DE ARTÍCULOS
// ============================================

export const GET_BLOG_POSTS = `
  query GetBlogPosts($first: Int = 10, $after: String) {
    blogPosts(first: $first, after: $after, where: { status: PUBLISH, orderby: { field: DATE, order: DESC } }) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        databaseId
        title
        slug
        date
        excerpt
        featuredImage {
          node {
            sourceUrl
            altText
            mediaDetails {
              width
              height
            }
          }
        }
        blogCategories {
          nodes {
            name
            slug
          }
        }
        seo {
          keywordPrincipal
          extractoBlog
          descripcionSeo
        }
        config {
          tiempoLectura
          destacado
          autorNombre
        }
      }
    }
  }
`;


// ============================================
// QUERY: ARTÍCULOS DESTACADOS
// ============================================

export const GET_FEATURED_POSTS = `
  query GetFeaturedPosts {
    blogPosts(first: 3, where: { status: PUBLISH, orderby: { field: DATE, order: DESC } }) {
      nodes {
        id
        title
        slug
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        blogCategories {
          nodes {
            name
            slug
          }
        }
        seo {
          extractoBlog
        }
        config {
          tiempoLectura
          destacado
        }
      }
    }
  }
`;


// ============================================
// QUERY: ARTÍCULO INDIVIDUAL (por slug)
// ============================================

export const GET_BLOG_POST_BY_SLUG = `
  query GetBlogPostBySlug($slug: ID!) {
    blogPost(id: $slug, idType: SLUG) {
      id
      databaseId
      title
      slug
      date
      modified
      content
      excerpt
      featuredImage {
        node {
          sourceUrl
          altText
          mediaDetails {
            width
            height
          }
        }
      }
      blogCategories {
        nodes {
          name
          slug
        }
      }
      blogTags {
        nodes {
          name
          slug
        }
      }
      seo {
        keywordPrincipal
        keywordsSecundarias
        tituloSeo
        descripcionSeo
        extractoBlog
      }
      cta {
        ctaTipo
        ctaTitulo
        ctaTexto
        ctaBoton
        ctaUrl
      }
      config {
        tiempoLectura
        destacado
        mostrarToc
        autorNombre
      }
      relacionados {
        articulosRelacionados {
          ... on BlogPost {
            id
            title
            slug
            featuredImage {
              node {
                sourceUrl
                altText
              }
            }
            seo {
              extractoBlog
            }
            config {
              tiempoLectura
            }
          }
        }
      }
    }
  }
`;


// ============================================
// QUERY: TODOS LOS SLUGS (para generación estática)
// ============================================

export const GET_ALL_BLOG_SLUGS = `
  query GetAllBlogSlugs {
    blogPosts(first: 100, where: { status: PUBLISH }) {
      nodes {
        slug
        modified
      }
    }
  }
`;


// ============================================
// QUERY: ARTÍCULOS POR CATEGORÍA
// ============================================

export const GET_POSTS_BY_CATEGORY = `
  query GetPostsByCategory($categorySlug: String!, $first: Int = 10) {
    blogPosts(
      first: $first, 
      where: { 
        status: PUBLISH, 
        orderby: { field: DATE, order: DESC },
        taxQuery: {
          taxArray: [
            {
              taxonomy: BLOGCATEGORY,
              field: SLUG,
              terms: [$categorySlug]
            }
          ]
        }
      }
    ) {
      nodes {
        id
        title
        slug
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        seo {
          extractoBlog
        }
        config {
          tiempoLectura
        }
      }
    }
  }
`;


// ============================================
// QUERY: CATEGORÍAS DEL BLOG
// ============================================

export const GET_BLOG_CATEGORIES = `
  query GetBlogCategories {
    blogCategories(first: 20) {
      nodes {
        id
        name
        slug
        count
        description
      }
    }
  }
`;


// ============================================
// QUERY: BUSCAR ARTÍCULOS
// ============================================

export const SEARCH_BLOG_POSTS = `
  query SearchBlogPosts($search: String!, $first: Int = 10) {
    blogPosts(
      first: $first, 
      where: { 
        status: PUBLISH, 
        search: $search,
        orderby: { field: RELEVANCE, order: DESC }
      }
    ) {
      nodes {
        id
        title
        slug
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        seo {
          extractoBlog
        }
        config {
          tiempoLectura
        }
      }
    }
  }
`;


// ============================================
// QUERY: ARTÍCULOS RECIENTES (sidebar/footer)
// ============================================

export const GET_RECENT_POSTS = `
  query GetRecentPosts($first: Int = 5) {
    blogPosts(first: $first, where: { status: PUBLISH, orderby: { field: DATE, order: DESC } }) {
      nodes {
        id
        title
        slug
        date
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;
