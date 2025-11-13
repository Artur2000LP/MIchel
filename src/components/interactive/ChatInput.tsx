'use client';

import { useState, useRef, KeyboardEvent } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

export default function ChatInput({ onSendMessage, disabled }: ChatInputProps) {
  const [message, setMessage] = useState('');
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = () => {
    if (message.trim() && !disabled) {
      onSendMessage(message);
      setMessage('');
      inputRef.current?.focus();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="p-4 bg-gray-900 border-t border-red-700/50 rounded-b-lg">
      <div className="flex gap-2">
        <textarea
          ref={inputRef}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Escribe tu pregunta..."
          disabled={disabled}
          rows={1}
          className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent resize-none disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ maxHeight: '120px', minHeight: '48px' }}
        />
        <button
          onClick={handleSubmit}
          disabled={disabled || !message.trim()}
          className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 disabled:from-gray-700 disabled:to-gray-700 disabled:cursor-not-allowed text-white rounded-lg px-4 py-3 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-red-500/50"
          aria-label="Enviar mensaje"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
      <p className="text-xs text-gray-500 mt-2">
        Presiona <kbd className="bg-gray-800 px-1 rounded">Enter</kbd> para enviar,{' '}
        <kbd className="bg-gray-800 px-1 rounded">Shift + Enter</kbd> para nueva línea
      </p>
    </div>
  );
}
