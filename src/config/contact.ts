/**
 * Configuración de contacto de la empresa
 * src/config/contact.ts
 * 
 * Cambia estos valores cuando necesites actualizar los datos de contacto
 */

export const contact = {
  // WhatsApp - formato internacional sin espacios ni símbolos
  whatsapp: {
    number: "34648088550",
    // Mensaje predeterminado por idioma
    defaultMessage: {
      es: "Hola, me interesa RayGold para mi joyería",
      en: "Hi, I'm interested in RayGold for my jewelry business",
      fr: "Bonjour, je suis intéressé par RayGold pour ma bijouterie",
      ca: "Hola, m'interessa RayGold per a la meva joieria",
      "pt-br": "Olá, tenho interesse no RayGold para minha joalheria",
    },
  },

  // Email de contacto
  email: "info@raytecno.es",

  // Teléfono de contacto (formato display)
  phone: {
    display: "+34 648 088 550",
    link: "tel:+34648088550",
  },

  // Redes sociales (añadir cuando sea necesario)
  social: {
    linkedin: "",
    twitter: "",
    facebook: "",
    instagram: "",
  },
};

/**
 * Genera la URL de WhatsApp con mensaje personalizado
 * Usa wa.me que funciona en todos los dispositivos
 */
export function getWhatsAppUrl(lang: string = "es", customMessage?: string): string {
  const message = customMessage || contact.whatsapp.defaultMessage[lang as keyof typeof contact.whatsapp.defaultMessage] || contact.whatsapp.defaultMessage.es;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${contact.whatsapp.number}?text=${encodedMessage}`;
}

/**
 * Genera la URL de WhatsApp sin mensaje
 */
export function getWhatsAppUrlSimple(): string {
  return `https://wa.me/${contact.whatsapp.number}`;
}

/**
 * Datos para el script del cliente que detecta dispositivo
 */
export function getWhatsAppData(lang: string = "es", customMessage?: string): { number: string; message: string } {
  const message = customMessage || contact.whatsapp.defaultMessage[lang as keyof typeof contact.whatsapp.defaultMessage] || contact.whatsapp.defaultMessage.es;
  return {
    number: contact.whatsapp.number,
    message: message,
  };
}