'use client';

import { MessageCircle } from 'lucide-react';

const SUGGESTIONS = [
  "¿Qué proyectos con IA ha realizado?",
  "¿Qué cursos ofrece?",
  "¿Cuál es su experiencia?",
  "¿Cómo puedo contactarlo?",
];

interface ChatSuggestionsProps {
  onSuggestionClick: (suggestion: string) => void;
}

export default function ChatSuggestions({ onSuggestionClick }: ChatSuggestionsProps) {
  return (
    <div className="p-4 bg-gray-900/50 border-t border-red-700/30">
      <p className="text-xs text-gray-400 mb-2 flex items-center gap-2">
        <MessageCircle className="w-3 h-3" />
        Preguntas sugeridas:
      </p>
      <div className="flex flex-wrap gap-2">
        {SUGGESTIONS.map((suggestion, index) => (
          <button
            key={index}
            onClick={() => onSuggestionClick(suggestion)}
            className="text-xs bg-red-900/30 hover:bg-red-800/50 text-red-300 border border-red-700/50 px-3 py-1.5 rounded-full transition-all duration-200 hover:scale-105"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
}
