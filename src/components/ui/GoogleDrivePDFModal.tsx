'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink } from 'lucide-react';

interface GoogleDrivePDFModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title: string;
  downloadUrl?: string;
}

export default function GoogleDrivePDFModal({ 
  isOpen, 
  onClose, 
  pdfUrl, 
  title,
  downloadUrl 
}: GoogleDrivePDFModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
        
        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-6xl h-[90vh] bg-slate-900 rounded-2xl border border-blue-500/30 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <div>
              <h3 className="text-lg font-semibold text-white truncate">{title}</h3>
              <p className="text-sm text-gray-400">Vista previa del documento</p>
            </div>
            
            <div className="flex items-center space-x-2">
              {downloadUrl && (
                <a 
                  href={downloadUrl}
                  download
                  className="p-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg transition-colors duration-200"
                  title="Descargar PDF"
                >
                  <Download className="h-5 w-5" />
                </a>
              )}
              
              <a 
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-green-500/20 hover:bg-green-500/30 text-green-400 rounded-lg transition-colors duration-200"
                title="Abrir en nueva ventana"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
              
              <button
                onClick={onClose}
                className="p-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition-colors duration-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* PDF Viewer */}
          <div className="flex-1 bg-gray-100">
            <iframe
              src={pdfUrl}
              className="w-full h-full"
              title={title}
              style={{ height: 'calc(90vh - 80px)' }}
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}