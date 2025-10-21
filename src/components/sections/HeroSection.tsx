'use client';

import { motion } from 'framer-motion';
import { Brain, Sparkles, Zap, BookOpen } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-cyan-900/20" />
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[
            { left: '10%', top: '20%' },
            { left: '85%', top: '15%' },
            { left: '25%', top: '60%' },
            { left: '70%', top: '45%' },
            { left: '15%', top: '80%' },
            { left: '90%', top: '70%' },
            { left: '45%', top: '25%' },
            { left: '60%', top: '85%' },
            { left: '20%', top: '40%' },
            { left: '80%', top: '30%' },
            { left: '35%', top: '75%' },
            { left: '65%', top: '55%' },
            { left: '5%', top: '65%' },
            { left: '95%', top: '50%' },
            { left: '50%', top: '10%' },
            { left: '75%', top: '90%' },
            { left: '30%', top: '35%' },
            { left: '55%', top: '70%' },
            { left: '40%', top: '15%' },
            { left: '85%', top: '80%' }
          ].map((position, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              style={{
                left: position.left,
                top: position.top,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="relative"
            >
              <Brain className="h-20 w-20 text-blue-400" />
              <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl animate-pulse" />
            </motion.div>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
              TICs
            </span>
            <br />
            <span className="text-white">Inteligencia Artificial</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Innovación Educativa
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4"
        >
          Portafolio del curso de Inteligencia Artificial aplicada a la innovación educativa. 
          Explorando herramientas, sesiones de aprendizaje y aplicaciones prácticas de la IA en el aula.
        </motion.p>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 px-4"
        >
          <div className="bg-slate-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
            <BookOpen className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-blue-400 mb-3 sm:mb-4 mx-auto" />
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">5 Sesiones</h3>
            <p className="text-sm sm:text-base text-gray-400">Contenido completo del curso con videos y PDFs</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
            <Sparkles className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-cyan-400 mb-3 sm:mb-4 mx-auto" />
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Herramientas IA</h3>
            <p className="text-sm sm:text-base text-gray-400">Aplicaciones y herramientas de inteligencia artificial</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
            <Zap className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-blue-400 mb-3 sm:mb-4 mx-auto" />
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Innovación</h3>
            <p className="text-sm sm:text-base text-gray-400">Transformando la educación con tecnología</p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
        >
          <a
            href="#sesiones"
            className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base text-center"
          >
            Ver Sesiones del Curso
          </a>
          <a
            href="#aplicaciones-ia"
            className="border border-blue-500 text-blue-400 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105 text-sm sm:text-base text-center"
          >
            Explorar Aplicaciones IA
          </a>
        </motion.div>
      </div>
    </div>
  );
}