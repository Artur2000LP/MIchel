'use client';

import { motion } from 'framer-motion';
import { BookOpen, Users, Calendar, MapPin, Mail, Phone, MessageCircle } from 'lucide-react';

export default function AboutCourseSection() {
  return (
    <div className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Sobre el Curso
            </span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto px-2">
            Un programa integral sobre la aplicación de la Inteligencia Artificial en la innovación educativa
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Course Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-xl lg:rounded-2xl border border-blue-500/20">
              <BookOpen className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-blue-400 mb-4 sm:mb-6" />
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">Objetivos del Curso</h3>
              <ul className="space-y-2 sm:space-y-3 text-gray-300">
                <li className="flex items-start space-x-2 sm:space-x-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Comprender los fundamentos de la Inteligencia Artificial</span>
                </li>
                <li className="flex items-start space-x-2 sm:space-x-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Explorar herramientas de IA aplicadas a la educación</span>
                </li>
                <li className="flex items-start space-x-2 sm:space-x-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Desarrollar estrategias de innovación educativa</span>
                </li>
                <li className="flex items-start space-x-2 sm:space-x-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Implementar soluciones tecnológicas en el aula</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-xl lg:rounded-2xl border border-cyan-500/20">
              <Users className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-cyan-400 mb-4 sm:mb-6" />
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">Metodología</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                El curso combina teoría y práctica a través de sesiones interactivas, 
                análisis de casos reales, y exploración de herramientas de IA. 
                Los participantes desarrollan competencias para integrar la inteligencia 
                artificial en sus contextos educativos.
              </p>
            </div>
          </motion.div>

          {/* Course Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4 sm:space-y-6"
          >
            {/* Course Details */}
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-xl lg:rounded-2xl border border-blue-500/30">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 sm:mb-6">Detalles del Curso</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold text-sm sm:text-base">Duración</p>
                    <p className="text-gray-300 text-xs sm:text-sm">5 Sesiones Completas</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-400 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold text-sm sm:text-base">Modalidad</p>
                    <p className="text-gray-300 text-xs sm:text-sm">Teórico-Práctica</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold text-sm sm:text-base">Dirigido a</p>
                    <p className="text-gray-300 text-xs sm:text-sm">Educadores e Innovadores</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-slate-800/50 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-xl lg:rounded-2xl border border-blue-500/20">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 sm:mb-6">Información de Contacto</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-white font-semibold text-sm sm:text-base">Celular</p>
                    <p className="text-gray-300 text-xs sm:text-sm">+51 984 009 253</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-400 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-white font-semibold text-sm sm:text-base">WhatsApp</p>
                    <a 
                      href="https://wa.me/51984009253" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-400 text-xs sm:text-sm hover:text-green-300 transition-colors duration-200 underline"
                    >
                      +51 984 009 253
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-400 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold text-sm sm:text-base">Correo</p>
                    <p className="text-gray-300 text-xs sm:text-sm break-all">michelpv71@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold text-sm sm:text-base">Ubicación</p>
                    <p className="text-gray-300 text-xs sm:text-sm">Jirón Cusco Nro 718, Abancay</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* UNESCO Logo Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/20 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">Alineado con estándares internacionales</h3>
            <p className="text-gray-300 mb-6">
              Este curso sigue las recomendaciones de UNESCO para la integración 
              de tecnologías educativas e inteligencia artificial en el aula.
            </p>
            <div className="flex justify-center">
              <div className="bg-white/10 px-6 py-3 rounded-lg">
                <span className="text-blue-400 font-bold text-lg">UNESCO</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}