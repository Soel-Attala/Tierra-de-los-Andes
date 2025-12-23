import { Leaf, Mail, Phone, MessageCircle } from 'lucide-react';
import { CONTACT_CONFIG } from '../../config/contactConfig';

export default function Footer({ onNavigate, openEmail, openWhatsApp }) {
  const navItems = [
    ['#home', 'Inicio'],
    ['#maquetas', 'Proyecto'],
    ['#galeria', 'Galería'],
    ['#servicios', 'Servicios'],
    ['#ubicacion', 'Ubicación'],
    ['#contacto', 'Contacto']
  ];

  return (
    <footer className="bg-gradient-to-br from-green-900 to-green-950 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* COLUMNA 1 */}
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-white/10 p-2 rounded-lg">
                <Leaf size={28} />
              </div>
              <span className="ml-3 text-2xl font-bold">
                Tierra de Los Andes
              </span>
            </div>
            <p className="text-green-200 leading-relaxed">
              Tu nuevo hogar en armonía con la naturaleza. Un desarrollo
              pensado para el bienestar de tu familia.
            </p>
          </div>

          {/* COLUMNA 2 */}
          <div>
            <h4 className="font-bold mb-6 text-xl">Navegación</h4>
            <ul className="space-y-3">
              {navItems.map(([id, text]) => (
                <li key={id}>
                  <button
                    onClick={() => onNavigate(id)}
                    className="text-green-200 hover:text-white transition-colors hover:translate-x-2 transform inline-block"
                  >
                    → {text}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMNA 3 */}
          <div>
            <h4 className="font-bold mb-6 text-xl">Contacto</h4>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={openEmail}
                  className="flex items-center text-green-200 hover:text-white transition-colors group"
                >
                  <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors">
                    <Mail size={18} />
                  </div>
                  <span className="ml-3">{CONTACT_CONFIG.email}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => window.location.href = `tel:${CONTACT_CONFIG.telefono}`}
                  className="flex items-center text-green-200 hover:text-white transition-colors group"
                >
                  <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors">
                    <Phone size={18} />
                  </div>
                  <span className="ml-3">{CONTACT_CONFIG.telefonoDisplay}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={openWhatsApp}
                  className="flex items-center text-green-200 hover:text-white transition-colors group"
                >
                  <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors">
                    <MessageCircle size={18} />
                  </div>
                  <span className="ml-3">WhatsApp</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-green-800 pt-8 text-center">
          <p className="text-green-300">
            © 2024 Tierra de Los Andes. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}