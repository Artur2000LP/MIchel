# 🤖 Portafolio Interactivo con IA - Michel Palma

## 📋 Parcial Nro 1 - Universidad César Vallejo
**Material Interactivo con IA: Donde tu carrera + creatividad + IA = aprendizaje que impacta**

---

## 🎯 Descripción del Proyecto

Portafolio web profesional e interactivo desarrollado con **Next.js 15**, **TypeScript**, y **Agente de IA conversacional**. Este proyecto integra Inteligencia Artificial real para crear una experiencia única donde los visitantes pueden interactuar con un asistente virtual que responde preguntas sobre experiencia profesional, proyectos, cursos y servicios.

### ✨ Características Principales

- 🤖 **Agente IA Conversacional** - Asistente virtual con contexto personalizado
- 🎨 **Diseño Moderno** - Tema rojo oscuro profesional con animaciones suaves
- 📱 **Responsive Design** - Adaptado a todos los dispositivos
- ⚡ **Performance Optimizado** - Next.js 15 con App Router y Turbopack
- 📊 **Estructura Profesional** - Código organizado y escalable
- 🔒 **Seguro** - Rate limiting y sanitización de inputs

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- **Next.js 15.5.4** - Framework React de última generación
- **React 19.1.0** - Biblioteca UI
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Styling utility-first
- **Framer Motion** - Animaciones fluidas
- **Lucide React** - Iconos modernos

### Inteligencia Artificial
- **OpenAI GPT-4o-mini** - Modelo de lenguaje (opción 1)
- **Groq API** - Alternativa gratuita con Llama 3.1 (opción 2)
- **Anthropic Claude** - Opción adicional (opción 3)
- **Sistema de prompts personalizado** - Knowledge base específica

### Otras Herramientas
- **EmailJS** - Sistema de contacto
- **Vercel** - Despliegue y hosting
- **Git & GitHub** - Control de versiones

---

## 📁 Estructura del Proyecto

```
portafolio-michel-palma/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── chat/
│   │   │       └── route.ts           # API del agente IA
│   │   ├── globals.css                # Estilos globales (tema rojo)
│   │   ├── layout.tsx                 # Layout principal
│   │   └── page.tsx                   # Página home
│   │
│   ├── components/
│   │   ├── interactive/               # ⭐ NUEVO - Componentes IA
│   │   │   ├── AIAgent.tsx            # Componente principal del chat
│   │   │   ├── ChatBubble.tsx         # Burbujas de mensajes
│   │   │   ├── ChatInput.tsx          # Input de usuario
│   │   │   └── ChatSuggestions.tsx    # Preguntas sugeridas
│   │   │
│   │   ├── sections/                  # Secciones del portafolio
│   │   │   ├── HeroSection.tsx
│   │   │   ├── CourseSessionsSection.tsx
│   │   │   ├── AIApplicationsSection.tsx
│   │   │   ├── SesionesZoom.tsx
│   │   │   └── ContactSection.tsx
│   │   │
│   │   └── ui/                        # Componentes UI reutilizables
│   │       ├── Navigation.tsx
│   │       ├── PDFViewer.tsx
│   │       ├── YouTubeVideo.tsx
│   │       └── ...
│   │
│   ├── data/                          # ⭐ NUEVO - Datos estructurados
│   │   ├── profile.json               # Información personal
│   │   ├── skills.json                # Habilidades técnicas
│   │   ├── projects.json              # Proyectos realizados
│   │   └── courses.json               # Cursos y sesiones
│   │
│   └── lib/
│       ├── ai/                        # ⭐ NUEVO - Sistema de IA
│       │   ├── agent-config.ts        # Configuración del agente
│       │   ├── prompts.ts             # System prompts
│       │   └── knowledge-base.ts      # Base de conocimiento
│       │
│       └── emailjs-config.ts          # Configuración EmailJS
│
├── .env.example                       # Plantilla de variables de entorno
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

---

## 🚀 Instalación y Configuración

### 1. Clonar el Repositorio

```bash
git clone https://github.com/tuusuario/portafolio-michel-palma.git
cd portafolio-michel-palma
```

### 2. Instalar Dependencias

```bash
npm install
```

### 3. Configurar Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```bash
cp .env.example .env.local
```

Edita `.env.local` y agrega tu API key (elige una opción):

#### OPCIÓN A: OpenAI (Recomendado - $5 crédito gratis)
```env
OPENAI_API_KEY=sk-tu-api-key-aqui
```
👉 Obtener en: https://platform.openai.com/api-keys

#### OPCIÓN B: Groq (GRATIS con límites generosos)
```env
GROQ_API_KEY=gsk_tu-api-key-aqui
```
👉 Obtener en: https://console.groq.com/keys

#### OPCIÓN C: Anthropic Claude
```env
ANTHROPIC_API_KEY=sk-ant-tu-api-key-aqui
```
👉 Obtener en: https://console.anthropic.com/

### 4. Ejecutar en Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### 5. Construir para Producción

```bash
npm run build
npm start
```

---

## 🎨 Paleta de Colores - Tema Rojo Oscuro

```css
/* Rojos Principales */
--red-950: #450a0a  /* Más oscuro */
--red-900: #7f1d1d
--red-800: #991b1b
--red-700: #b91c1c
--red-600: #dc2626  /* Acento principal */
--red-500: #ef4444
--red-400: #f87171  /* Hover states */

/* Grises Complementarios */
--gray-950: #0a0a0a /* Background */
--gray-900: #111827
--gray-800: #1f2937
```

### Uso en Componentes

```tsx
// Backgrounds
className="bg-gradient-to-br from-gray-950 via-red-950 to-gray-950"

// Botones
className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500"

// Bordes
className="border-2 border-red-700"

// Efectos de glow
className="shadow-lg shadow-red-900/50 glow-red"
```

---

## 🤖 Sistema de IA - Funcionamiento

### Arquitectura del Agente

```
Usuario → ChatInput → AIAgent → API Route → OpenAI/Groq
                                     ↓
                              Knowledge Base
                                     ↓
                              System Prompt
                                     ↓
                            Respuesta Contextual
```

### Knowledge Base

El agente tiene acceso a:
- ✅ Información personal y profesional
- ✅ 4 categorías de habilidades (20+ tecnologías)
- ✅ 5+ proyectos con detalles completos
- ✅ 3 cursos disponibles
- ✅ Sesiones de consultoría

### Capacidades del Agente

1. **Responder preguntas** sobre experiencia y proyectos
2. **Recomendar cursos** según necesidades del visitante
3. **Proporcionar información de contacto**
4. **Sugerir acciones** (ver proyectos, agendar sesión, etc.)
5. **Mantener contexto** conversacional

---

## 📊 Personalización de Datos

### Actualizar tu Información

Edita los archivos JSON en `src/data/`:

#### 1. Profile (`profile.json`)
```json
{
  "name": "Tu Nombre",
  "title": "Tu Título Profesional",
  "bio": "Tu biografía",
  "email": "tu@email.com",
  // ... más campos
}
```

#### 2. Skills (`skills.json`)
```json
{
  "categories": [
    {
      "name": "Frontend Development",
      "skills": [
        { "name": "React", "level": 95, "yearsOfExperience": 4 }
      ]
    }
  ]
}
```

#### 3. Projects (`projects.json`)
```json
{
  "projects": [
    {
      "title": "Tu Proyecto",
      "description": "Descripción",
      "technologies": ["React", "Node.js"],
      "featured": true
    }
  ]
}
```

#### 4. Courses (`courses.json`)
```json
{
  "courses": [
    {
      "title": "Tu Curso",
      "duration": "8 semanas",
      "price": 299
    }
  ]
}
```

---

## 🎯 Uso del Agente IA

### Para Visitantes

1. Hacer clic en el botón flotante de IA (esquina inferior derecha)
2. El chat se abrirá con un mensaje de bienvenida
3. Hacer preguntas o usar las sugerencias rápidas
4. El agente responderá con información contextual

### Ejemplos de Preguntas

- "¿Qué tecnologías dominas?"
- "Muéstrame tus proyectos con IA"
- "¿Qué cursos ofreces?"
- "¿Cómo puedo contactarte?"
- "Recomiéndame un curso para aprender React"

---

## 📦 Despliegue en Vercel

### Paso 1: Conectar con GitHub

1. Sube tu proyecto a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Click en "New Project"
4. Importa tu repositorio

### Paso 2: Configurar Variables de Entorno

En el dashboard de Vercel:
1. Settings → Environment Variables
2. Agrega `OPENAI_API_KEY` (o `GROQ_API_KEY`)
3. Guarda los cambios

### Paso 3: Deploy

```bash
# O desde la línea de comandos
npm run build:vercel
```

Tu sitio estará en: `https://tu-proyecto.vercel.app`

---

## 📚 Herramientas IA Utilizadas en el Proyecto

### 1. **OpenAI GPT-4o-mini**
- **Uso:** Motor principal del agente conversacional
- **Por qué:** Respuestas precisas y contextuales
- **Costo:** Muy económico ($0.15 por 1M tokens)

### 2. **GitHub Copilot**
- **Uso:** Asistencia en desarrollo de código
- **Por qué:** Acelera el desarrollo con sugerencias inteligentes

### 3. **ChatGPT/Claude**
- **Uso:** Planificación de arquitectura y diseño
- **Por qué:** Ayuda en decisiones de diseño de sistema

### 4. **NotebookLM**
- **Uso:** Organización de conocimiento del proyecto
- **Por qué:** Genera resúmenes de documentación

---

## 🎓 Proceso de Desarrollo

### Fase 1: Planificación (Día 1)
- ✅ Análisis de requisitos del parcial
- ✅ Diseño de arquitectura del sistema
- ✅ Selección de tecnologías
- ✅ Wireframes y mockups

### Fase 2: Estructura de Datos (Día 2)
- ✅ Creación de archivos JSON
- ✅ Definición de tipos TypeScript
- ✅ Organización de carpetas

### Fase 3: Integración de IA (Días 3-4)
- ✅ Configuración de APIs
- ✅ Desarrollo del agente conversacional
- ✅ Sistema de prompts y knowledge base
- ✅ Componentes de chat UI

### Fase 4: Diseño Visual (Día 5)
- ✅ Implementación del tema rojo oscuro
- ✅ Animaciones y microinteracciones
- ✅ Responsive design

### Fase 5: Testing y Documentación (Día 6)
- ✅ Pruebas de funcionalidad
- ✅ Optimización de performance
- ✅ Documentación completa
- ✅ Preparación para entrega

---

## 🎯 Criterios del Parcial Cumplidos

### ✅ Trabajo Grupal
- Uso de equipos formados en clase
- Roles y responsabilidades definidas

### ✅ Tema Relevante
- Desarrollo Web + IA (área de carrera)
- Aplicación práctica y profesional

### ✅ Herramientas con IA
- **OpenAI GPT-4o-mini** → Agente conversacional
- **GitHub Copilot** → Desarrollo de código
- **ChatGPT/Claude** → Planificación y diseño
- **NotebookLM** → Organización de conocimiento

### ✅ Objetivo Claro
- Crear un portafolio interactivo profesional
- Demostrar habilidades de desarrollo e IA
- Material que impacta en el aprendizaje

### ✅ Entregables
1. ✅ Informe PDF/PPT/DOCX (ver INFORME.md)
2. ✅ Producto final funcional (este proyecto)
3. ✅ Archivo .zip con código fuente
4. ✅ Link al sitio desplegado

---

## 🚀 Próximos Pasos y Mejoras

### Corto Plazo
- [ ] Agregar más proyectos al portafolio
- [ ] Integrar sistema de blog con IA
- [ ] Añadir analytics y métricas
- [ ] Implementar sistema de comentarios

### Mediano Plazo
- [ ] Multi-idioma (inglés/español)
- [ ] Dashboard administrativo
- [ ] Sistema de reserva de sesiones
- [ ] Integración con calendario

### Largo Plazo
- [ ] Plataforma de cursos completa
- [ ] Comunidad de estudiantes
- [ ] Marketplace de recursos
- [ ] App móvil

---

## 🤝 Contribuciones

Este proyecto fue desarrollado como parte del **Parcial Nro 1** de la Universidad César Vallejo.

### Autor Principal
**Michel Palma** - Desarrollo Full Stack e Integración IA

### Herramientas de IA Utilizadas
- OpenAI GPT-4o-mini
- GitHub Copilot
- Claude (Anthropic)
- NotebookLM (Google)

---

## 📄 Licencia

Este proyecto es de uso educativo y personal.

---

## 📞 Contacto

- **Email:** contacto@michelpalma.com
- **LinkedIn:** [linkedin.com/in/michelpalma](https://linkedin.com/in/michelpalma)
- **GitHub:** [github.com/michelpalma](https://github.com/michelpalma)
- **Website:** [michelpalma.vercel.app](https://michelpalma.vercel.app)

---

## 🎉 Agradecimientos

- Universidad César Vallejo - Por el desafío propuesto
- OpenAI - Por democratizar el acceso a IA
- Vercel - Por la plataforma de despliegue
- Comunidad de desarrolladores - Por recursos y apoyo

---

**¡Gracias por explorar este proyecto!** 🚀

Si tienes preguntas, no dudes en abrir un issue o contactarme directamente.
