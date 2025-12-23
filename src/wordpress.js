// src/wordpress.js
import { WORDPRESS_GRAPHQL } from "./config.js";

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
