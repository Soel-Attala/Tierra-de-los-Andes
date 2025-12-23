import { useState } from 'react';
import { Camera } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import Lightbox from '../ui/Lightbox';

export default function GallerySection({ images }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = () =>
    setLightboxIndex((prev) => (prev + 1) % images.length);

  const prevImage = () =>
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <>
      <section id="galeria" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <SectionTitle
            title="Galería de"
            highlight="Imágenes"
            subtitle={
              <span className="flex items-center justify-center gap-2">
                <Camera size={20} />
                Hacé clic en cualquier imagen para ampliar
              </span>
            }
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {images.map((img, index) => (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group aspect-square"
              >
                <img
                  src={img}
                  alt={`Galería ${index + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                  <Camera className="text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all" size={40} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        isOpen={lightboxOpen}
        images={images}
        currentIndex={lightboxIndex}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </>
  );
}