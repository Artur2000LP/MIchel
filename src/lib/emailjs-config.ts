// Configuración de EmailJS
// Para configurar EmailJS:
// 1. Ve a https://www.emailjs.com/
// 2. Crea una cuenta gratuita
// 3. Configura un servicio de email (Gmail recomendado)
// 4. Crea un template de email
// 5. Obtén tu Public Key desde la configuración

export const EMAILJS_CONFIG = {
  // Reemplaza estos valores con los tuyos de EmailJS
  SERVICE_ID: 'service_portafolio', // Tu Service ID
  TEMPLATE_ID: 'template_contacto', // Tu Template ID
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY_HERE', // Tu Public Key
  
  // Email de destino
  TO_EMAIL: 'michelpv71@gmail.com'
};

// Template de email recomendado para EmailJS:
/*
Asunto: Nuevo contacto desde portafolio - {{from_name}}

Hola Michel,

Has recibido un nuevo mensaje de contacto desde tu portafolio:

Nombre: {{from_name}}
Email: {{from_email}}

Mensaje:
{{message}}

---
Este mensaje fue enviado desde tu portafolio web.
Puedes responder directamente a: {{reply_to}}
*/