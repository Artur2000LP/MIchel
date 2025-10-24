'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Twitter, Youtube, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/lib/emailjs-config';

export default function ContactSection() {
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Validación básica
      if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
        setSubmitStatus('error');
        setIsSubmitting(false);
        return;
      }

      // Simular tiempo de procesamiento para mejor UX
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Preparar datos para el mailto
      const emailBody = `
Nuevo mensaje de contacto desde el portafolio:

INFORMACIÓN DEL REMITENTE:
- Nombre: ${formData.name}
- Email: ${formData.email}
- Fecha: ${new Date().toLocaleString('es-PE', { timeZone: 'America/Lima' })}

MENSAJE:
${formData.message}

---
Este mensaje fue enviado desde tu portafolio web.
Puedes responder directamente a: ${formData.email}
      `.trim();

      const mailtoLink = `mailto:michelpv71@gmail.com?subject=${encodeURIComponent(`Contacto desde portafolio - ${formData.name}`)}&body=${encodeURIComponent(emailBody)}`;
      
      // Mostrar éxito y limpiar formulario
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Abrir cliente de email después de un breve delay
      setTimeout(() => {
        window.location.href = mailtoLink;
      }, 1000);
      
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
                    <p className="text-gray-300">+51 984 009 253</p>
                    <p className="text-sm text-gray-400">Disponible de 8:00 AM a 6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">WhatsApp</h4>
                    <a 
                      href="https://wa.me/51984009253"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-300 transition-colors duration-200"
                    >
                      +51 984 009 253
                    </a>
                    <p className="text-sm text-gray-400">Contacto directo por WhatsApp</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Correo Electrónico</h4>
                    <a 
                      href="mailto:michelpv71@gmail.com"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                    >
                      michelpv71@gmail.com
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
                    <p className="text-gray-300">Jirón Cusco Nro 718</p>
                    <p className="text-gray-300">Abancay</p>
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
                Jirón Cusco Nro 718, Abancay, Apurímac, Perú
              </p>
            </div>

            {/* Quick Contact Form */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-cyan-500/20 p-8">
              <h3 className="text-xl font-bold text-white mb-6">Contacto Rápido</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
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
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-slate-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-200"
                    placeholder="tu@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full bg-slate-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-200 resize-none"
                    placeholder="Cuéntanos sobre tu consulta..."
                  />
                </div>


                
                <div className="space-y-3">
                  <div className="flex space-x-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`flex-grow py-3 px-4 rounded-lg font-semibold transition-all duration-300 transform ${
                        isSubmitting
                          ? 'bg-gray-600 cursor-not-allowed'
                          : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 hover:scale-105'
                      }`}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span className="hidden sm:inline">Preparando...</span>
                          <span className="sm:hidden">...</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center space-x-2">
                          <Mail className="w-4 h-4" />
                          <span className="hidden sm:inline">Enviar por Email</span>
                          <span className="sm:hidden">Email</span>
                        </div>
                      )}
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => {
                        const whatsappMessage = `Hola Michel, soy ${formData.name || '[Tu nombre]'}. ${formData.message || 'Me gustaría contactarte sobre el curso de TICs e IA.'}`;
                        const whatsappUrl = `https://wa.me/51984009253?text=${encodeURIComponent(whatsappMessage)}`;
                        window.open(whatsappUrl, '_blank');
                      }}
                      className="bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 flex-shrink-0"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span className="hidden sm:inline">WhatsApp</span>
                      <span className="sm:hidden">WA</span>
                    </button>
                  </div>
                  
                  <p className="text-center text-xs text-gray-400">
                    Email formal • Chat directo
                  </p>

                  {/* Status Messages - Moved to bottom */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center text-xs text-green-400 mt-2"
                    >
                      ✓ ¡Listo! Se abre tu email
                    </motion.div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center text-xs text-red-400 mt-2"
                    >
                      ⚠ Completa todos los campos
                    </motion.div>
                  )}
                </div>
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