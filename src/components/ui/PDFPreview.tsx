'use client';

import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Eye, Download, FileText } from 'lucide-react';
import PDFModal from './PDFModal';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

interface PDFPreviewProps {
  fileName: string;
  filePath: string;
  displayName: string;
}

export default function PDFPreview({ fileName, filePath, displayName }: PDFPreviewProps) {
  const [showModal, setShowModal] = useState(false);
  const [previewLoaded, setPreviewLoaded] = useState(false);

  const downloadPDF = (e: React.MouseEvent) => {
    e.stopPropagation();
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    link.click();
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="group bg-slate-700/50 rounded-lg border border-gray-600/50 hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
        {/* PDF Preview */}
        <div className="relative aspect-[3/4] bg-gray-200 overflow-hidden cursor-pointer" onClick={openModal}>
          <Document
            file={filePath}
            onLoadSuccess={() => setPreviewLoaded(true)}
            onLoadError={() => setPreviewLoaded(false)}
            loading={
              <div className="flex items-center justify-center h-full bg-gray-200">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
              </div>
            }
          >
            <Page
              pageNumber={1}
              width={250}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="flex flex-col items-center space-y-2">
              <Eye className="h-8 w-8 text-white" />
              <span className="text-white text-sm font-medium">Ver PDF Completo</span>
            </div>
          </div>
          
          {/* PDF Icon fallback */}
          {!previewLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
              <FileText className="h-16 w-16 text-gray-400" />
            </div>
          )}
        </div>

        {/* PDF Info and Actions */}
        <div className="p-4">
          <h4 className="text-sm font-medium text-white mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
            {displayName}
          </h4>
          
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-400 bg-red-500/20 px-2 py-1 rounded-full">
              PDF
            </span>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={openModal}
                className="p-2 bg-blue-600/20 hover:bg-blue-600/40 rounded-lg transition-colors duration-200 group"
                title="Ver PDF"
              >
                <Eye className="h-4 w-4 text-blue-400 group-hover:text-blue-300" />
              </button>
              
              <button
                onClick={downloadPDF}
                className="p-2 bg-green-600/20 hover:bg-green-600/40 rounded-lg transition-colors duration-200 group"
                title="Descargar"
              >
                <Download className="h-4 w-4 text-green-400 group-hover:text-green-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* PDF Modal */}
      <PDFModal
        isOpen={showModal}
        onClose={closeModal}
        pdfUrl={filePath}
        title={displayName}
      />
    </>
  );
}