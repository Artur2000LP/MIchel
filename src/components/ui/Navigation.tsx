'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Video, Calendar, Cpu, Phone } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { name: 'Inicio', href: '#hero', icon: Home, section: 'hero' },
    { name: 'Zoom', href: '#about-course', icon: Video, section: 'about-course' },
    { name: 'Sesiones', href: '#sesiones', icon: Calendar, section: 'sesiones' },
    { name: 'Aplicaciones IA', href: '#aplicaciones-ia', icon: Cpu, section: 'aplicaciones-ia' },
    { name: 'Contacto', href: '#contact', icon: Phone, section: 'contact' },
  ];

  // Detectar la sección activa basándose en el scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.section);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Ejecutar una vez al montar

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-sm border-b border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            {/* Logo eliminado - espacio reservado */}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.section;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-1 transition-all duration-300 ${
                    isActive 
                      ? 'text-cyan-400' 
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white transition-colors duration-200"
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden"
            >
              <motion.div
                initial={{ y: -10 }}
                animate={{ y: 0 }}
                exit={{ y: -10 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/95 backdrop-blur-sm rounded-lg mt-2 border border-blue-500/20"
              >
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.section;
                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                      className={`flex items-center space-x-2 block px-3 py-2 rounded-md transition-all duration-300 hover:bg-slate-700/50 ${
                        isActive 
                          ? 'text-cyan-400 bg-blue-500/10' 
                          : 'text-gray-400 hover:text-gray-300'
                      }`}
                      onClick={() => setIsOpen(false)}
                      whileTap={{ scale: 0.98 }}
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.name}</span>
                    </motion.a>
                  );
                })}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}