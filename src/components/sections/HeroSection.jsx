import { MapPin } from 'lucide-react';
import Button from '../ui/Button';

export default function HeroSection({ onNavigate }) {
  const stats = [
    ['45', 'Lotes Exclusivos'],
    ['500m²', 'Desde'],
    ['24/7', 'Seguridad']
  ];

  return (
    <section id="home" className="relative pt-20 pb-32 overflow-hidden">
      {/* Fondo con gradiente y patrón */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-green-100"></div>
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-6 py-2 bg-green-100 rounded-full">
            <span className="text-green-800 font-semibold flex items-center gap-2">
              <MapPin size={18} />
              Tu nuevo hogar te espera
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-green-700 via-green-600 to-green-800 bg-clip-text text-transparent">
              Tierra de Los Andes
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            Un desarrollo residencial exclusivo donde la{' '}
            <span className="text-green-700 font-semibold">naturaleza</span> y el{' '}
            <span className="text-green-700 font-semibold">confort</span> se encuentran
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="primary" onClick={() => onNavigate('#contacto')}>
              Consultá Ahora
            </Button>
            <Button variant="secondary" onClick={() => onNavigate('#maquetas')}>
              Ver Proyecto
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
            {stats.map(([num, label]) => (
              <div
                key={label}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
              >
                <div className="text-3xl font-bold text-green-700">{num}</div>
                <div className="text-sm text-gray-600 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}