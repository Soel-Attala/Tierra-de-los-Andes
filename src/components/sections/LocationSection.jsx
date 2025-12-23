import { MapPin } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

export default function LocationSection() {
  return (
    <section id="ubicacion" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <SectionTitle
          title=""
          highlight="Ubicación"
          subtitle={
            <span className="flex items-center justify-center gap-2">
              <MapPin size={20} />
              A solo 15 minutos del centro de la ciudad
            </span>
          }
        />

        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d410.2827932187926!2d-68.39680073930751!3d-34.64807694460767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1ses!2shu!4v1766519782475!5m2!1ses!2shu"
              width="100%"
              height="500"
              style={{ border: 1 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Tierra de Los Andes"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}