// src/azure-storage.js
import { STORAGE_URL, MENU_CONTAINER } from "./config.js";

export async function getMenuImages() {
  const listUrl = `${STORAGE_URL}/${MENU_CONTAINER}?restype=container&comp=list`;

  try {
    const response = await fetch(listUrl);
    const xml = await response.text();

    // Extraer nombres de archivos del XML
    const nameRegex = /<Name>([^<]+)<\/Name>/g;
    const images = [];
    let match;

    while ((match = nameRegex.exec(xml)) !== null) {
      const filename = match[1];
      // Solo incluir JPG que NO contengan "Fondo"
      if (filename.endsWith(".jpg") && !filename.includes("Fondo")) {
        images.push({
          filename: filename,
          url: `${STORAGE_URL}/${MENU_CONTAINER}/${encodeURIComponent(
            filename
          )}`,
          name: filename.replace(".jpg", "").replace(/-/g, " "),
        });
      }
    }

    return images;
  } catch (error) {
    console.error("Error fetching menu images:", error);
    return [];
  }
}
