// ============================================
// CONFIGURACIÓN RAYTECNO - PRODUCCIÓN
// ============================================

// Azure Blob Storage ✅
export const STORAGE_URL = "https://raygoldstorage.blob.core.windows.net";
export const IMAGES_CONTAINER = "imagenes";

// NUEVO: Contenedor del menú
export const MENU_CONTAINER = "imagen-menu-web";
export const MENU_STORAGE_URL = `${STORAGE_URL}/${MENU_CONTAINER}`;

/**
 * Obtiene URL de imagen en raíz del contenedor
 */
export function getImageUrl(filename) {
  return `${STORAGE_URL}/${IMAGES_CONTAINER}/${filename}`;
}

/**
 * Obtiene URL de imagen dentro de una carpeta de producto
 * Ejemplo: getProductImageUrl('HILO-001619-', '2.jpg')
 */
export function getProductImageUrl(folder, filename) {
  return `${STORAGE_URL}/${IMAGES_CONTAINER}/${folder}/${filename}`;
}