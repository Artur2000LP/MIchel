// Configuración del Agente IA
// Settings y utilidades para el sistema de IA

export const AI_CONFIG = {
  // Proveedor de IA
  provider: 'openai', // 'openai' | 'anthropic' | 'groq'
  
  // Modelos disponibles
  models: {
    openai: {
      fast: 'gpt-4o-mini', // Rápido y económico
      smart: 'gpt-4o',     // Más inteligente
    },
    anthropic: {
      fast: 'claude-3-haiku-20240307',
      smart: 'claude-3-5-sonnet-20241022',
    },
    groq: {
      fast: 'llama-3.1-8b-instant',
      smart: 'llama-3.1-70b-versatile',
    },
  },

  // Configuración de generación
  generation: {
    temperature: 0.7,      // Creatividad (0-1)
    maxTokens: 500,        // Máximo de tokens por respuesta
    topP: 0.9,             // Nucleus sampling
    frequencyPenalty: 0.3, // Evita repeticiones
    presencePenalty: 0.3,  // Fomenta variedad
  },

  // Límites y seguridad
  limits: {
    maxMessagesInContext: 10,    // Máximo de mensajes en contexto
    maxCharactersPerMessage: 500, // Máximo de caracteres por mensaje del usuario
    rateLimitPerMinute: 10,       // Máximo de requests por minuto
  },

  // UI Settings
  ui: {
    enableSuggestedQuestions: true,
    enableTypingIndicator: true,
    enableMarkdown: true,
    enableCopyButton: true,
    theme: 'dark-red', // Tema personalizado
  },
};

// Función para validar API Keys
export function validateApiKeys(): boolean {
  const openaiKey = process.env.OPENAI_API_KEY;
  const anthropicKey = process.env.ANTHROPIC_API_KEY;
  const groqKey = process.env.GROQ_API_KEY;

  if (!openaiKey && !anthropicKey && !groqKey) {
    console.warn('⚠️ No API keys found. Please add at least one in .env.local');
    return false;
  }

  return true;
}

// Función para obtener el modelo activo
export function getActiveModel(): string {
  const { provider, models } = AI_CONFIG;
  
  switch (provider) {
    case 'openai':
      return models.openai.fast;
    case 'anthropic':
      return models.anthropic.fast;
    case 'groq':
      return models.groq.fast;
    default:
      return models.openai.fast;
  }
}

// Función para sanitizar input del usuario
export function sanitizeUserInput(input: string): string {
  return input
    .trim()
    .slice(0, AI_CONFIG.limits.maxCharactersPerMessage)
    .replace(/[<>]/g, ''); // Básica protección XSS
}

// Rate limiter simple (en memoria)
const requestTimestamps: number[] = [];

export function checkRateLimit(): boolean {
  const now = Date.now();
  const oneMinuteAgo = now - 60000;

  // Limpiar timestamps antiguos
  while (requestTimestamps.length > 0 && requestTimestamps[0] < oneMinuteAgo) {
    requestTimestamps.shift();
  }

  // Verificar límite
  if (requestTimestamps.length >= AI_CONFIG.limits.rateLimitPerMinute) {
    return false;
  }

  requestTimestamps.push(now);
  return true;
}

// Tipos TypeScript
export interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp?: number;
}

export interface ChatResponse {
  message: string;
  suggestedQuestions?: string[];
  error?: string;
}
