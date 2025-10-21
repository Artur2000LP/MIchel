'use client';

import { useState } from 'react';
import { FileText, Loader } from 'lucide-react';

interface PDFThumbnailProps {
  driveUrl: string;
  fileName: string;
  className?: string;
}

export default function PDFThumbnail({ driveUrl, fileName, className = '' }: PDFThumbnailProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Extraer el ID del archivo de Google Drive
  const getFileId = (url: string) => {
    const match = url.match(/\/d\/([a-zA-Z0-9-_]+)/);
    return match ? match[1] : null;
  };

  const fileId = getFileId(driveUrl);
  
  // URLs para diferentes tipos de thumbnail
  const thumbnailUrls = [
    `https://drive.google.com/thumbnail?id=${fileId}&sz=w400-h300`,
    `https://lh3.googleusercontent.com/d/${fileId}=w400-h300`,
    `https://drive.google.com/uc?export=view&id=${fileId}`
  ];

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  if (!fileId || imageError) {
    return (
      <div className={`w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-red-50 to-red-100 ${className}`}>
        <FileText className="text-red-400 w-10 h-10 mb-2" />
        <div className="text-red-600 text-xs font-medium text-center px-2">
          Vista previa no disponible
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Loading placeholder */}
      {!imageLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse">
          <Loader className="text-gray-400 w-6 h-6 animate-spin" />
        </div>
      )}
      
      {/* Thumbnail image */}
      <img
        src={thumbnailUrls[0]}
        alt={`Vista previa de ${fileName}`}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={handleImageLoad}
        onError={handleImageError}
        loading="lazy"
      />
      
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    </div>
  );
}