import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Modal de lightbox para galería de imágenes
export default function Lightbox({ isOpen, images, currentIndex, onClose, onNext, onPrev }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all"
      >
        <X className="text-white" size={32} />
      </button>

      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all"
      >
        <ChevronLeft className="text-white" size={32} />
      </button>

      <img
        src={images[currentIndex]}
        alt={`Imagen ${currentIndex + 1}`}
        className="max-w-full max-h-[90vh] object-contain rounded-lg"
      />

      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all"
      >
        <ChevronRight className="text-white" size={32} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-lg">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}