// Componente reutilizable para títulos de sección
export default function SectionTitle({ title, subtitle, highlight }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        {title} {highlight && <span className="text-green-700">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="text-gray-600 text-lg">{subtitle}</p>
      )}
    </div>
  );
}