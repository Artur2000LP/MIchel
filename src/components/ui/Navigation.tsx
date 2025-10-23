'use client';

import { useState } from 'react';
import { Menu, X, Brain, BookOpen, Cpu, Phone } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Inicio', href: '#hero', icon: Brain },
    { name: 'Sobre el Curso', href: '#about-course', icon: BookOpen },
    { name: 'Sesiones', href: '#sesiones', icon: BookOpen },
    { name: 'Aplicaciones IA', href: '#aplicaciones-ia', icon: Cpu },
    { name: 'Contacto', href: '#contact', icon: Phone },
  ];

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
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-1 text-gray-300 hover:text-blue-400 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/95 rounded-lg mt-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 block px-3 py-2 rounded-md transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}