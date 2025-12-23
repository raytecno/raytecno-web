// src/wordpress.js
import { WORDPRESS_GRAPHQL, WORDPRESS_URL } from "./config.js";

export async function getPageBySlug(slug) {
  const query = `
    query GetPage($slug: ID!) {
      page(id: $slug, idType: URI) {
        title
        content
        modified
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  `;

  try {
    const response = await fetch(WORDPRESS_GRAPHQL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query,
        variables: { slug },
      }),
    });

    const { data } = await response.json();
    return data?.page || null;
  } catch (error) {
    console.error("Error fetching WordPress:", error);
    return null;
  }
}

// NUEVA FUNCIÓN: Obtener imágenes de la biblioteca de medios
export async function getMediaImages(first = 10) {
  const query = `
    query GetMedia($first: Int!) {
      mediaItems(first: $first, where: {mimeType: IMAGE_JPEG}) {
        nodes {
          sourceUrl
          altText
          title
        }
      }
    }
  `;

  try {
    const response = await fetch(WORDPRESS_GRAPHQL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query,
        variables: { first },
      }),
    });

    const { data } = await response.json();

    // Convertir URLs relativas a absolutas
    const images = data?.mediaItems?.nodes || [];
    return images.map((img) => ({
      ...img,
      sourceUrl: img.sourceUrl.startsWith("http")
        ? img.sourceUrl
        : WORDPRESS_URL + img.sourceUrl,
    }));
  } catch (error) {
    console.error("Error fetching media:", error);
    return [];
  }
}
