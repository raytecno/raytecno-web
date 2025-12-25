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

// Obtener imágenes de la biblioteca de medios
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

// =============================================
// Obtener un módulo por slug
// NOTA: El campo ACF se llama "datosDelMDulo" (con M mayúscula)
// =============================================
export async function getModuloBySlug(slug) {
  const query = `
    query GetModulo($slug: String!) {
      modulos(where: {name: $slug}) {
        nodes {
          title
          slug
          content
          datosDelMDulo {
            moduloIconoSvg
            moduloSubtitulo
            moduloColor
            moduloSeccionesJson
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
    const node = data?.modulos?.nodes?.[0] || null;

    if (!node) return null;

    // Extraer los campos ACF del objeto datosDelMDulo
    const modulo = {
      title: node.title,
      slug: node.slug,
      content: node.content,
      moduloIconoSvg: node.datosDelMDulo?.moduloIconoSvg || "",
      moduloSubtitulo: node.datosDelMDulo?.moduloSubtitulo || "",
      moduloColor: node.datosDelMDulo?.moduloColor || "#667eea",
      secciones: [],
    };

    // Parsear el JSON de secciones si existe
    if (node.datosDelMDulo?.moduloSeccionesJson) {
      try {
        modulo.secciones = JSON.parse(node.datosDelMDulo.moduloSeccionesJson);
      } catch (e) {
        console.error("Error parseando secciones JSON:", e);
        modulo.secciones = [];
      }
    }

    return modulo;
  } catch (error) {
    console.error("Error fetching módulo:", error);
    return null;
  }
}

// =============================================
// Obtener todos los módulos
// =============================================
export async function getAllModulos() {
  const query = `
    query GetAllModulos {
      modulos(first: 20) {
        nodes {
          title
          slug
          datosDelMDulo {
            moduloIconoSvg
            moduloSubtitulo
            moduloColor
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

    // Mapear para aplanar la estructura
    return (data?.modulos?.nodes || []).map((node) => ({
      title: node.title,
      slug: node.slug,
      moduloIconoSvg: node.datosDelMDulo?.moduloIconoSvg || "",
      moduloSubtitulo: node.datosDelMDulo?.moduloSubtitulo || "",
      moduloColor: node.datosDelMDulo?.moduloColor || "#667eea",
    }));
  } catch (error) {
    console.error("Error fetching módulos:", error);
    return [];
  }
}
