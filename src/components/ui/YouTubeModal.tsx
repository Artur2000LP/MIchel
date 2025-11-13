'use client';

import { useState, useEffect } from 'react';
import { X, Maximize2, ExternalLink, MessageSquare, Minimize2 } from 'lucide-react';

interface YouTubeModalProps {
  videoId: string;
  title: string;
  description?: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function YouTubeModal({ 
  videoId, 
  title, 
  description,
  isOpen, 
  onClose 
}: YouTubeModalProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showChat, setShowChat] = useState(true);
  const [chatMessages, setChatMessages] = useState<Array<{ role: 'user' | 'assistant', content: string }>>([
    {
      role: 'assistant',
      content: `¡Hola! Soy tu asistente para este video: "${title}". Puedo ayudarte con preguntas sobre el contenido.`
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;

  // Cerrar con tecla ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = { role: 'user' as const, content: inputMessage };
    setChatMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [
            ...chatMessages,
            userMessage,
            {
              role: 'system',
              content: `Contexto: El usuario está viendo el video "${title}". ${description ? `Descripción: ${description}` : ''}`
            }
          ],
        }),
      });

      const data = await response.json();
      setChatMessages(prev => [...prev, { role: 'assistant', content: data.message }]);
    } catch (error) {
      setChatMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Lo siento, hubo un error. Por favor intenta de nuevo.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 top-16 z-40 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
      {/* Contenedor principal - Ventana centrada con mejor proporción */}
      <div className="relative w-full max-w-5xl h-full max-h-[85vh] bg-gray-950 rounded-lg shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-3 border-b border-red-700/30 bg-gradient-to-r from-red-900/50 to-gray-900/80 backdrop-blur-sm rounded-t-lg">
          <div className="flex-1 min-w-0">
            <h2 className="text-lg font-bold text-white">{title}</h2>
          </div>
          
          <div className="flex items-center gap-2 ml-4">
            {/* Botón Chat con IA */}
            <button
              onClick={() => setShowChat(!showChat)}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-2 transform hover:scale-105 ${
                showChat 
                  ? 'bg-gray-700 hover:bg-blue-600 text-gray-300 hover:text-white border border-gray-600 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/30' 
                  : 'bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/30'
              }`}
              title="Chat con IA sobre el video"
            >
              <MessageSquare className="w-4 h-4" />
              <span className="hidden sm:inline">
                {showChat ? 'Ocultar' : 'Chat'}
              </span>
            </button>
            
            {/* Abrir en YouTube */}
            <a
              href={`https://www.youtube.com/watch?v=${videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 hover:bg-red-600 text-gray-400 hover:text-white rounded-md transition-all duration-300 text-sm transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/30"
              title="Abrir en YouTube"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            
            {/* Cerrar */}
            <button
              onClick={onClose}
              className="p-2 bg-gray-800 hover:bg-red-600 text-gray-400 hover:text-white rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/30"
              title="Cerrar (ESC)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Contenido */}
        <div className={`flex flex-1 overflow-hidden ${showChat ? 'flex-row' : 'flex-col'}`}>
          {/* Video Player */}
          <div className={`${showChat ? 'w-3/5' : 'w-full'} flex items-center justify-center bg-black relative rounded-bl-lg ${!showChat ? 'rounded-br-lg' : ''}`}
               style={{ aspectRatio: showChat ? '16/10' : '16/9', minHeight: '400px' }}>
            <iframe
              src={embedUrl}
              title={title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Chat con IA */}
          {showChat && (
                        <div className="w-2/5 min-w-[320px] max-w-[420px] bg-gray-950 border-l-2 border-red-700/30 flex flex-col shadow-2xl rounded-br-lg">
              {/* Header del chat */}
              <div className="p-3 bg-gradient-to-r from-red-900/40 to-gray-900/60 border-b border-red-700/30 backdrop-blur-sm">
                <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-red-400" />
                  Asistente IA - Consulta sobre el video
                </h3>
                <p className="text-xs text-gray-400 mt-0.5">Pregunta lo que necesites sobre este contenido</p>
              </div>

              {/* Mensajes */}
              <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-gray-950">
                {chatMessages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[90%] rounded-lg p-2.5 text-sm leading-snug shadow-lg ${
                        msg.role === 'user'
                          ? 'bg-gradient-to-r from-gray-800 to-gray-700 text-white border border-gray-600'
                          : 'bg-gradient-to-r from-red-900/40 to-red-800/30 text-gray-100 border border-red-700/40'
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-gradient-to-r from-red-900/40 to-red-800/30 rounded-lg p-2.5 border border-red-700/40 shadow-lg">
                      <div className="flex gap-1.5 items-center">
                        <div className="flex gap-1">
                          <div className="w-1.5 h-1.5 bg-red-400 rounded-full animate-bounce" />
                          <div className="w-1.5 h-1.5 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }} />
                          <div className="w-1.5 h-1.5 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
                        </div>
                        <span className="text-xs text-gray-400">Escribiendo...</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="p-3 border-t-2 border-red-700/30 bg-gray-900/80 backdrop-blur-sm">
                <div className="flex gap-2 items-end">
                  <textarea
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                      }
                    }}
                    placeholder="Pregunta sobre el video..."
                    rows={2}
                    className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent resize-none"
                    disabled={isLoading}
                    style={{ maxHeight: '80px', minHeight: '40px' }}
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={isLoading || !inputMessage.trim()}
                    className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 disabled:from-gray-700 disabled:to-gray-700 text-white p-2.5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-red-500/50 disabled:cursor-not-allowed flex-shrink-0"
                    aria-label="Enviar mensaje"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
