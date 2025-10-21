'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function ContactSection() {
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('es-PE', {
        timeZone: 'America/Lima',
        hour: '2-digit',
        minute: '2-digit'
      }));
      setCurrentDate(now.toLocaleDateString('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }));
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Contacto
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            ¿Tienes preguntas sobre el curso o quieres más información? Contáctanos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-blue-500/20 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Teléfono</h4>
                    <p className="text-gray-300">950600024</p>
                    <p className="text-sm text-gray-400">Disponible de 8:00 AM a 6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Correo Electrónico</h4>
                    <a 
                      href="mailto:michel.palma.vargas@gmail.com"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                    >
                      michel.palma.vargas@gmail.com
                    </a>
                    <p className="text-sm text-gray-400">Respuesta en 24 horas</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Ubicación</h4>
                    <p className="text-gray-300">Jr. Arequipa 515 int 04</p>
                    <p className="text-gray-300">Abancay, Perú</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Time */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-green-500/20 p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                  <Clock className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Hora actual en Abancay, Perú</h4>
                  <p className="text-green-400 font-mono text-xl">
                    {currentTime || '--:--'}
                  </p>
                  <p className="text-sm text-gray-400 capitalize">
                    {currentDate || 'Cargando fecha...'}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-purple-500/20 p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Síguenos en redes sociales</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                >
                  <Facebook className="h-6 w-6 text-white" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center hover:bg-pink-700 transition-colors duration-200"
                >
                  <Instagram className="h-6 w-6 text-white" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-sky-500 rounded-xl flex items-center justify-center hover:bg-sky-600 transition-colors duration-200"
                >
                  <Twitter className="h-6 w-6 text-white" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center hover:bg-red-700 transition-colors duration-200"
                >
                  <Youtube className="h-6 w-6 text-white" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Map and Quick Contact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Embedded Map */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-blue-500/20 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Nuestra Ubicación</h3>
              <div className="aspect-video rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3894.5234567890123!2d-72.8771234567890!3d-13.6346789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDM4JzA0LjgiUyA3MsKwNTInMzAuNCJX!5e0!3m2!1sen!2spe!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                />
              </div>
              <p className="text-sm text-gray-400 mt-3">
                Jr. Arequipa 515 int 04, Abancay, Apurímac, Perú
              </p>
            </div>

            {/* Quick Contact Form */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-cyan-500/20 p-8">
              <h3 className="text-xl font-bold text-white mb-6">Contacto Rápido</h3>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    className="w-full bg-slate-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-200"
                    placeholder="Tu nombre"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    className="w-full bg-slate-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-200"
                    placeholder="tu@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-slate-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-200 resize-none"
                    placeholder="Cuéntanos sobre tu consulta..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-gray-700"
        >
          <div className="text-center">
            <p className="text-gray-400">
              Curso TICs - Inteligencia Artificial e Innovación Educativa. 
              Todos los derechos reservados.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Abancay, Apurímac, Perú | En colaboración con UNESCO
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}