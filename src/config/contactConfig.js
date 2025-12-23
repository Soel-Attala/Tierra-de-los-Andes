// ============================================
// CONFIGURACIÓN DE CONTACTO - TIERRA DE LOS ANDES
// ============================================
// Archivo centralizado para toda la información de contacto

export const CONTACT_CONFIG = {
  // Email principal del barrio
  email: 'contacto@tierradelosandes.com',
  
  // Teléfono en formato internacional (sin espacios ni caracteres especiales)
  // Formato: +[código_país][código_área][número]
  // Ejemplo Argentina: +54 9 11 1234-5678 → +5491112345678
  telefono: '+5491112345678',
  
  // Teléfono formateado para mostrar a usuarios (más legible)
  telefonoDisplay: '+54 9 11 1234-5678',
  
  // Mensaje inicial cuando se abre WhatsApp
  whatsappMensaje: 'Hola, quería solicitar información sobre Tierra de Los Andes!'
};

// ============================================
// IMPORTANTE AL CONFIGURAR:
// ============================================
// 1. EMAIL: Reemplazá con el email real del barrio
// 2. TELÉFONO: Formato sin espacios para WhatsApp (debe incluir código de país)
// 3. TELÉFONO DISPLAY: Formato legible para mostrar en la UI
// 4. MENSAJE WHATSAPP: Personalizable, máximo 200 caracteres recomendado