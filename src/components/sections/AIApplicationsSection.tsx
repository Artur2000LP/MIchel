'use client';

import { motion } from 'framer-motion';
import { Zap, Brain, Sparkles } from 'lucide-react';
import YouTubeVideo from '@/components/ui/YouTubeVideo';
import { ChatGPTIcon, MidjourneyIcon, GitHubIcon, GeminiIcon, MetaIcon, DeepSeekIcon } from '@/components/ui/AIIcons';

export default function AIApplicationsSection() {
  const applications = [
    {
      id: 1,
      title: "ChatGPT - Asistente de Texto",
      description: "Herramienta de inteligencia artificial conversacional que puede ayudar con la creación de contenido educativo, responder preguntas y asistir en la planificación de clases.",
      icon: ChatGPTIcon,
      color: "from-green-500 to-emerald-500",
      videoId: "3u1k7Jyn434", // Nuevo video tutorial de ChatGPT
      features: ["Generación de contenido", "Respuestas inteligentes", "Planificación educativa"],
      category: "Generativo"
    },
    {
      id: 2,
      title: "Midjourney - Generación de Imágenes",
      description: "Plataforma de IA para crear imágenes educativas y visuales impactantes que enriquezcan el material didáctico y capturen la atención de los estudiantes.",
      icon: MidjourneyIcon,
      color: "from-purple-500 to-pink-500",
      videoId: "9sJ7-M2seGA", // Nuevo video tutorial de Midjourney
      features: ["Imágenes educativas", "Visualizaciones", "Material didáctico"],
      category: "Creatividad"
    },
    {
      id: 3,
      title: "GitHub Copilot - Programación",
      description: "Asistente de IA para programación que ayuda a enseñar conceptos de coding, automatizar tareas y crear herramientas educativas personalizadas.",
      icon: GitHubIcon,
      color: "from-blue-500 to-indigo-500",
      videoId: "Fi3AJZZregI", // Video actual - este se mantiene
      features: ["Asistencia en código", "Enseñanza de programación", "Automatización"],
      category: "Desarrollo"
    },
    {
      id: 4,
      title: "Google Gemini - IA Multimodal",
      description: "Modelo de IA avanzado de Google que puede procesar texto, imágenes y código para asistir en tareas educativas complejas y análisis multimodal.",
      icon: GeminiIcon,
      color: "from-blue-600 to-purple-600",
      videoId: "UIZAiXYceBI", // Video tutorial de Gemini
      features: ["Análisis multimodal", "Procesamiento de imágenes", "Asistencia educativa"],
      category: "Multimodal"
    },
    {
      id: 5,
      title: "Meta AI - Asistente Inteligente",
      description: "Asistente de inteligencia artificial de Meta que ayuda en la creación de contenido, responde preguntas y asiste en proyectos educativos.",
      icon: MetaIcon,
      color: "from-blue-500 to-cyan-500",
      videoId: "BuSPeb48S3Q", // Nuevo video tutorial de Meta AI
      features: ["Asistencia inteligente", "Creación de contenido", "Proyectos educativos"],
      category: "Asistente"
    },
    {
      id: 6,
      title: "DeepSeek - IA para Programación",
      description: "Modelo de IA especializado en programación y análisis de código que ayuda a enseñar conceptos de desarrollo y resolver problemas técnicos complejos.",
      icon: DeepSeekIcon,
      color: "from-indigo-500 to-purple-500",
      videoId: "zogHIfgIrGU", // Video tutorial actualizado de DeepSeek
      features: ["Análisis de código", "Debugging inteligente", "Enseñanza de programación"],
      category: "Desarrollo"
    }
  ];

  const categories = ["Todos", "Generativo", "Creatividad", "Desarrollo", "Multimodal", "Asistente"];

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Aplicaciones de IA
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Descubre las herramientas de inteligencia artificial más útiles para la innovación educativa
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full bg-slate-800/50 border border-blue-500/30 text-gray-300 hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300"
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Applications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app, index) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-blue-500/50 overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              {/* Category Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="px-3 py-1 text-xs font-semibold bg-blue-500/90 backdrop-blur-sm text-white rounded-full shadow-lg">
                  {app.category}
                </span>
              </div>

              {/* Video Section */}
              <div className="relative">
                <YouTubeVideo 
                  videoId={app.videoId}
                  title={app.title}
                  className="rounded-t-2xl"
                />
              </div>

              {/* Content Section */}
              <div className="p-6">
                {/* App Icon & Title */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${app.color} p-3 group-hover:scale-110 transition-transform duration-300`}>
                    <app.icon className="w-full h-full text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {app.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed text-sm mb-4">
                  {app.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {app.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                      <span className="text-xs text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Additional IA Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20"
        >
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-blue-500/20 p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              ¿Por qué usar IA en Educación?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Eficiencia</h4>
                <p className="text-gray-300 text-sm">
                  Automatiza tareas repetitivas y optimiza el tiempo de preparación de clases
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Personalización</h4>
                <p className="text-gray-300 text-sm">
                  Adapta el contenido y metodología a las necesidades específicas de cada estudiante
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Innovación</h4>
                <p className="text-gray-300 text-sm">
                  Introduce nuevas metodologías y herramientas que enriquecen la experiencia educativa
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl border border-blue-500/30 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Listo para integrar IA en tu práctica educativa?
            </h3>
            <p className="text-gray-300 mb-6">
              Estas herramientas son solo el comienzo. La IA está transformando la educación.
            </p>
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Contáctanos para más información
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}