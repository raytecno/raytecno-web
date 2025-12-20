import { WORDPRESS_GRAPHQL } from './config.js';

/**
 * Obtiene el contenido de una página por su slug
 * @param {string} slug - El slug de la página (ej: 'inicio')
 */
export async function getPageBySlug(slug) {
  try {
    const response = await fetch(WORDPRESS_GRAPHQL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query GetPage($slug: ID!) {
            page(id: $slug, idType: URI) {
              title
              content
              modified
            }
          }
        `,
        variables: { slug }
      })
    });

    const { data, errors } = await response.json();
    
    if (errors) {
      console.error('GraphQL errors:', errors);
      return null;
    }

    return data?.page;
  } catch (error) {
    console.error('Error fetching WordPress:', error);
    return null;
  }
}

/**
 * Obtiene todos los posts del blog
 */
export async function getPosts() {
  try {
    const response = await fetch(WORDPRESS_GRAPHQL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          {
            posts(first: 10) {
              nodes {
                id
                title
                slug
                excerpt
                date
              }
            }
          }
        `
      })
    });

    const { data } = await response.json();
    return data?.posts?.nodes || [];
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}
