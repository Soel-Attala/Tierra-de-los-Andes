// Componente de botón reutilizable con variantes
export default function Button({ children, variant = 'primary', onClick, className = '' }) {
  const variants = {
    primary: 'bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800',
    secondary: 'bg-white text-green-700 border-2 border-green-700 hover:bg-green-50',
    outline: 'bg-white border-2 border-green-600 text-green-700 hover:bg-green-50'
  };

  return (
    <button
      onClick={onClick}
      className={`px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}