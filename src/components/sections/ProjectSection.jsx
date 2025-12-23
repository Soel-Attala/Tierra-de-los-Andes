import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

export default function ProjectSection({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section id="maquetas" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Visualización del"
          highlight="Proyecto"
          subtitle="Conocé cómo quedará Tierra de Los Andes una vez finalizado"
        />

        <div className="relative max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
            <img
              src={images[currentSlide]}
              alt="Maqueta"
              className="w-full h-[500px] md:h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700"
            />

            {/* Overlay con info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-2">
                  Vista {currentSlide + 1}
                </h3>
                <p className="text-white/90">Renders profesionales del desarrollo</p>
              </div>
            </div>
          </div>

          {/* Botones de navegación */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-4 rounded-full shadow-lg transform hover:scale-110 transition-all"
          >
            <ChevronLeft className="text-green-700" size={28} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-4 rounded-full shadow-lg transform hover:scale-110 transition-all"
          >
            <ChevronRight className="text-green-700" size={28} />
          </button>

          {/* Indicadores */}
          <div className="flex justify-center mt-8 space-x-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-green-700 w-12'
                    : 'bg-gray-300 w-2 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}