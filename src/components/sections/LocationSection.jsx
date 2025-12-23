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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52563.01574756071!2d-58.445577874999995!3d-34.615662199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e10!2sBuenos%20Aires%2C%20Argentina!5e0!3m2!1ses!2sar!4v1234567890123!5m2!1ses!2sar"
              width="100%"
              height="500"
              style={{ border: 0 }}
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