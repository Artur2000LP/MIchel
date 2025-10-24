# Configuración de EmailJS para el Formulario de Contacto

## Pasos para configurar EmailJS:

### 1. Crear cuenta en EmailJS
- Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
- Regístrate con tu email (puedes usar michelpv71@gmail.com)
- Confirma tu email

### 2. Configurar servicio de email
- En el dashboard, ve a **"Email Services"**
- Haz clic en **"Add New Service"**
- Selecciona **"Gmail"** (recomendado)
- Autoriza el acceso a tu cuenta Gmail (michelpv71@gmail.com)
- Nombra el servicio como `service_portafolio`

### 3. Crear template de email
- Ve a **"Email Templates"**
- Haz clic en **"Create New Template"**
- Usa este contenido para el template:

**Subject:** `Nuevo contacto desde portafolio - {{from_name}}`

**Content:**
```
Hola Michel,

Has recibido un nuevo mensaje de contacto desde tu portafolio:

Nombre: {{from_name}}
Email: {{from_email}}
Fecha: {{timestamp}}

Mensaje:
{{message}}

---
Este mensaje fue enviado desde tu portafolio web.
Puedes responder directamente a: {{reply_to}}
```

- Guarda el template como `template_contacto`

### 4. Obtener credenciales
- Ve a **"Account"** > **"General"**
- Copia tu **Public Key**
- Ve a **"Email Services"** y copia el **Service ID**
- Ve a **"Email Templates"** y copia el **Template ID**

### 5. Actualizar configuración
- Abre el archivo `src/lib/emailjs-config.ts`
- Reemplaza los valores:
  ```typescript
  export const EMAILJS_CONFIG = {
    SERVICE_ID: 'tu_service_id_aqui',
    TEMPLATE_ID: 'tu_template_id_aqui', 
    PUBLIC_KEY: 'tu_public_key_aqui',
    TO_EMAIL: 'michelpv71@gmail.com'
  };
  ```

### 6. Probar el formulario
- El formulario debería enviar emails directamente a michelpv71@gmail.com
- Si hay algún error, se abrirá el cliente de email como fallback

## Límites de la cuenta gratuita:
- 200 emails por mes
- Perfecto para un portafolio personal

## Alternativas si no quieres usar EmailJS:
1. **Formspree** - Más simple, solo necesitas un endpoint
2. **Netlify Forms** - Si deployeas en Netlify
3. **Vercel** - Si usas Vercel, puedes crear una API route

¡El formulario está listo para funcionar una vez que completes la configuración de EmailJS!