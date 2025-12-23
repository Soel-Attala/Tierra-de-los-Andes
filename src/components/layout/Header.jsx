import { Leaf } from 'lucide-react';

export default function Header({ onNavigate }) {
  const navItems = [
    ['#home', 'Inicio'],
    ['#maquetas', 'Proyecto'],
    ['#galeria', 'Galería'],
    ['#servicios', 'Servicios'],
    ['#ubicacion', 'Ubicación'],
    ['#contacto', 'Contacto']
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-md z-50 transition-all">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2 group cursor-pointer">
          <div className="bg-gradient-to-br from-green-600 to-green-800 p-2 rounded-lg transform group-hover:scale-110 transition-transform">
            <Leaf className="text-white" size={28} />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-green-700 to-green-900 bg-clip-text text-transparent">
            Tierra de Los Andes
          </span>
        </div>

        <ul className="hidden md:flex space-x-8">
          {navItems.map(([id, text]) => (
            <li key={id}>
              <button
                onClick={() => onNavigate(id)}
                className="text-green-700 hover:text-green-900 font-medium relative group transition-colors"
              >
                {text}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-700 group-hover:w-full transition-all duration-300"></span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}