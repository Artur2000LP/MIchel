'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from 'lucide-react';
import { Document, Page, pdfjs } from 'react-pdf';

// Configurar el worker de PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface PDFModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title: string;
}

export default function PDFModal({ isOpen, onClose, pdfUrl, title }: PDFModalProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setIsLoading(false);
  }

  function onDocumentLoadError(error: Error) {
    console.error('Error loading PDF:', error);
    setIsLoading(false);
  }

  const goToPrevPage = () => {
    setPageNumber(prev => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber(prev => Math.min(prev + 1, numPages));
  };

  const zoomIn = () => {
    setScale(prev => Math.min(prev + 0.2, 2.0));
  };

  const zoomOut = () => {
    setScale(prev => Math.max(prev - 0.2, 0.5));
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = title;
    link.click();
  };

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setPageNumber(1);
      setScale(1.0);
      setIsLoading(true);
    }
  }, [isOpen]);

  // Close modal with Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-slate-900 rounded-2xl border border-blue-500/30 shadow-2xl max-w-6xl max-h-[90vh] w-full flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <div>
                <h3 className="text-xl font-bold text-white">{title}</h3>
                {numPages > 0 && (
                  <p className="text-sm text-gray-400">
                    Página {pageNumber} de {numPages}
                  </p>
                )}
              </div>
              
              {/* Controls */}
              <div className="flex items-center space-x-2">
                {/* Zoom Controls */}
                <button
                  onClick={zoomOut}
                  className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
                  title="Alejar"
                >
                  <ZoomOut className="h-4 w-4 text-white" />
                </button>
                <span className="text-sm text-gray-300 min-w-[60px] text-center">
                  {Math.round(scale * 100)}%
                </span>
                <button
                  onClick={zoomIn}
                  className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
                  title="Acercar"
                >
                  <ZoomIn className="h-4 w-4 text-white" />
                </button>

                {/* Download Button */}
                <button
                  onClick={handleDownload}
                  className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                  title="Descargar PDF"
                >
                  <Download className="h-4 w-4 text-white" />
                </button>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="p-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
                  title="Cerrar"
                >
                  <X className="h-4 w-4 text-white" />
                </button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 flex flex-col overflow-hidden">
              <div className="flex-1 overflow-auto bg-gray-200 p-4">
                {isLoading && (
                  <div className="flex items-center justify-center h-64">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                      <p className="text-gray-600">Cargando PDF...</p>
                    </div>
                  </div>
                )}

                <div className="flex justify-center">
                  <Document
                    file={pdfUrl}
                    onLoadSuccess={onDocumentLoadSuccess}
                    onLoadError={onDocumentLoadError}
                    loading={
                      <div className="flex items-center justify-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                      </div>
                    }
                  >
                    <Page
                      pageNumber={pageNumber}
                      scale={scale}
                      loading={
                        <div className="flex items-center justify-center h-64">
                          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                        </div>
                      }
                    />
                  </Document>
                </div>
              </div>

              {/* Navigation Controls */}
              {numPages > 1 && (
                <div className="flex items-center justify-center space-x-4 p-4 border-t border-gray-700">
                  <button
                    onClick={goToPrevPage}
                    disabled={pageNumber <= 1}
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed rounded-lg transition-colors"
                  >
                    <ChevronLeft className="h-4 w-4 text-white" />
                    <span className="text-white">Anterior</span>
                  </button>

                  <div className="flex items-center space-x-2">
                    <span className="text-gray-300">Página:</span>
                    <input
                      type="number"
                      min={1}
                      max={numPages}
                      value={pageNumber}
                      onChange={(e) => {
                        const page = parseInt(e.target.value);
                        if (page >= 1 && page <= numPages) {
                          setPageNumber(page);
                        }
                      }}
                      className="w-16 px-2 py-1 bg-slate-700 text-white rounded border border-gray-600 text-center"
                    />
                    <span className="text-gray-300">de {numPages}</span>
                  </div>

                  <button
                    onClick={goToNextPage}
                    disabled={pageNumber >= numPages}
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed rounded-lg transition-colors"
                  >
                    <span className="text-white">Siguiente</span>
                    <ChevronRight className="h-4 w-4 text-white" />
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}