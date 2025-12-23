import SectionTitle from '../common/SectionTitle';
import ServiceCard from '../ui/ServiceCard';

export default function ServicesSection({ services }) {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Estado de"
          highlight="Servicios"
          subtitle="Infraestructura instalada y en desarrollo"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((servicio, index) => (
            <ServiceCard key={index} servicio={servicio} />
          ))}
        </div>
      </div>
    </section>
  );
}