'use client';

import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { ChevronLeft, ChevronRight, Download, X, ZoomIn, ZoomOut } from 'lucide-react';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

interface PDFViewerProps {
  file: string;
  fileName: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function PDFViewer({ file, fileName, isOpen, onClose }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.0);
  const [loading, setLoading] = useState<boolean>(true);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setLoading(false);
  }

  function onDocumentLoadError(error: Error) {
    console.error('Error loading PDF:', error);
    setLoading(false);
  }

  const goToPrevPage = () => {
    setPageNumber(prev => Math.max(1, prev - 1));
  };

  const goToNextPage = () => {
    setPageNumber(prev => Math.min(numPages, prev + 1));
  };

  const zoomIn = () => {
    setScale(prev => Math.min(2.0, prev + 0.2));
  };

  const zoomOut = () => {
    setScale(prev => Math.max(0.5, prev - 0.2));
  };

  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = file;
    link.download = fileName;
    link.click();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 rounded-2xl border border-blue-500/20 w-full max-w-6xl h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <div>
            <h3 className="text-xl font-bold text-white">{fileName}</h3>
            <p className="text-sm text-gray-400">
              {loading ? 'Cargando...' : `Página ${pageNumber} de ${numPages}`}
            </p>
          </div>
          
          <div className="flex items-center space-x-2">
            {/* Zoom Controls */}
            <button
              onClick={zoomOut}
              className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors duration-200"
              disabled={scale <= 0.5}
            >
              <ZoomOut className="h-5 w-5 text-white" />
            </button>
            <span className="text-white text-sm min-w-[4rem] text-center">
              {Math.round(scale * 100)}%
            </span>
            <button
              onClick={zoomIn}
              className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors duration-200"
              disabled={scale >= 2.0}
            >
              <ZoomIn className="h-5 w-5 text-white" />
            </button>
            
            {/* Download Button */}
            <button
              onClick={downloadPDF}
              className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
            >
              <Download className="h-5 w-5 text-white" />
            </button>
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors duration-200"
            >
              <X className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>

        {/* PDF Content */}
        <div className="flex-1 overflow-auto bg-gray-100 p-4">
          <div className="flex justify-center">
            {loading ? (
              <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
              </div>
            ) : (
              <Document
                file={file}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onDocumentLoadError}
                loading={
                  <div className="flex items-center justify-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                  </div>
                }
              >
                <Page
                  pageNumber={pageNumber}
                  scale={scale}
                  renderTextLayer={true}
                  renderAnnotationLayer={true}
                />
              </Document>
            )}
          </div>
        </div>

        {/* Navigation Footer */}
        {!loading && numPages > 0 && (
          <div className="flex items-center justify-between p-4 border-t border-gray-700">
            <button
              onClick={goToPrevPage}
              disabled={pageNumber <= 1}
              className="flex items-center space-x-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 disabled:bg-slate-800 disabled:opacity-50 rounded-lg transition-colors duration-200"
            >
              <ChevronLeft className="h-5 w-5 text-white" />
              <span className="text-white">Anterior</span>
            </button>

            <div className="flex items-center space-x-4">
              <span className="text-gray-300">
                Página {pageNumber} de {numPages}
              </span>
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
                className="w-16 px-2 py-1 bg-slate-700 border border-gray-600 rounded text-white text-center focus:border-blue-500 focus:outline-none"
              />
            </div>

            <button
              onClick={goToNextPage}
              disabled={pageNumber >= numPages}
              className="flex items-center space-x-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 disabled:bg-slate-800 disabled:opacity-50 rounded-lg transition-colors duration-200"
            >
              <span className="text-white">Siguiente</span>
              <ChevronRight className="h-5 w-5 text-white" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}