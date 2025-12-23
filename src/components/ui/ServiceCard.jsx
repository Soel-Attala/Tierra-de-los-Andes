import { Check, Clock } from 'lucide-react';

// Tarjeta individual de servicio
export default function ServiceCard({ servicio }) {
  const Icon = servicio.icono;

  return (
    <div className="bg-gradient-to-br from-green-50 to-green-100/50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all border border-green-100">
      <div className="flex items-start justify-between mb-4">
        <div className="bg-gradient-to-br from-green-600 to-green-700 p-4 rounded-xl shadow-lg">
          <Icon className="text-white" size={32} />
        </div>
        {servicio.estado === 'completado' ? (
          <span className="flex items-center gap-1 text-green-700 text-sm font-bold bg-green-100 px-3 py-1 rounded-full">
            <Check size={16} />
            Listo
          </span>
        ) : (
          <span className="flex items-center gap-1 text-amber-600 text-sm font-bold bg-amber-100 px-3 py-1 rounded-full">
            <Clock size={16} />
            Pronto
          </span>
        )}
      </div>
      <h3 className="font-bold text-xl text-gray-900 mb-2">
        {servicio.nombre}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        {servicio.descripcion}
      </p>
    </div>
  );
}