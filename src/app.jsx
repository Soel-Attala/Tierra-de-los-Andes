import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Check,
  Clock,
  Leaf,
  Droplet,
  Zap,
  Wifi,
  Mail,
  Phone,
  MessageCircle
} from 'lucide-react';
import { CONTACT_CONFIG } from './config/contactConfig';

function TierraDeLosAndesWebsite() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const maquetas = [
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800'
  ];

  const servicios = [
    {
      nombre: 'Agua Potable',
      estado: 'completado',
      icono: Droplet,
      descripcion: 'Red de agua potable instalada y operativa'
    },
    {
      nombre: 'Energía Eléctrica',
      estado: 'completado',
      icono: Zap,
      descripcion: 'Conexión eléctrica trifásica en todos los lotes'
    },
    {
      nombre: 'Espacios Verdes',
      estado: 'completado',
      icono: Leaf,
      descripcion: 'Parques y áreas verdes diseñadas y plantadas'
    },
    {
      nombre: 'Internet Fibra Óptica',
      estado: 'en_progreso',
      icono: Wifi,
      descripcion: 'Instalación prevista para próximos 60 días'
    }
  ];

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % maquetas.length);

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + maquetas.length) % maquetas.length);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const asunto = `Consulta desde web - ${formData.nombre}`;
    const cuerpo = encodeURIComponent(`
Nombre: ${formData.nombre}
Email: ${formData.email}
Teléfono: ${formData.telefono}

Mensaje:
${formData.mensaje}
    `);

    window.location.href = `mailto:${CONTACT_CONFIG.email}?subject=${encodeURIComponent(
      asunto
    )}&body=${cuerpo}`;

    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      mensaje: ''
    });
  };

  const openWhatsApp = () => {
    const mensaje = encodeURIComponent(CONTACT_CONFIG.whatsappMensaje);
    window.open(
      `https://wa.me/${CONTACT_CONFIG.telefono}?text=${mensaje}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const openEmail = () => {
    window.location.href = `mailto:${CONTACT_CONFIG.email}`;
  };

  const scrollToSection = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <header className="fixed top-0 w-full bg-white shadow-md z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Leaf className="text-green-700" size={32} />
            <span className="text-2xl font-bold text-green-800">
              Tierra de Los Andes
            </span>
          </div>

          <ul className="hidden md:flex space-x-8">
            {[
              ['#home', 'Inicio'],
              ['#maquetas', 'Visualización'],
              ['#servicios', 'Servicios'],
              ['#contacto', 'Contacto']
            ].map(([id, text]) => (
              <li key={id}>
                <button
                  onClick={() => scrollToSection(id)}
                  className="text-green-700 hover:text-green-900 font-medium"
                >
                  {text}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* HOME */}
      <section id="home" className="pt-24 pb-16 bg-green-50">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-green-800 mb-6">
            Bienvenido a Tierra de Los Andes
          </h1>
          <p className="text-xl text-green-700">
            Tu nuevo hogar en armonía con la naturaleza
          </p>
        </div>
      </section>

      {/* MAQUETAS */}
      <section id="maquetas" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="relative max-w-4xl mx-auto">
            <img
              src={maquetas[currentSlide]}
              alt="Maqueta"
              className="w-full h-96 object-cover rounded-lg"
            />

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 bg-white p-2 rounded-full"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 bg-white p-2 rounded-full"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-16 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-6">
          {servicios.map((s, i) => {
            const Icon = s.icono;
            return (
              <div key={i} className="bg-green-50 p-6 rounded-lg shadow">
                <Icon size={32} className="text-green-700 mb-3" />
                <h3 className="font-bold text-green-800">{s.nombre}</h3>
                <p className="text-sm text-gray-600">{s.descripcion}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-green-800 text-center mb-8">
            Contactanos
          </h2>

          {/* BOTONES DE CONTACTO */}
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-12 max-w-4xl mx-auto">
            <button
              onClick={openEmail}
              className="flex items-center space-x-3 bg-white border-2 border-green-700 text-green-700 px-6 py-4 rounded-lg hover:bg-green-50 shadow-lg"
            >
              <Mail size={24} />
              <div className="text-left">
                <div className="font-bold">Enviar Email</div>
                <div className="text-sm">{CONTACT_CONFIG.email}</div>
              </div>
            </button>

            <button
              onClick={openWhatsApp}
              className="flex items-center space-x-3 bg-green-700 text-white px-6 py-4 rounded-lg hover:bg-green-800 shadow-lg"
            >
              <MessageCircle size={24} />
              <div className="text-left">
                <div className="font-bold">Abrir WhatsApp</div>
                <div className="text-sm">{CONTACT_CONFIG.telefonoDisplay}</div>
              </div>
            </button>

            <button
              onClick={() => window.location.href = `tel:${CONTACT_CONFIG.telefono}`}
              className="flex items-center space-x-3 bg-white border-2 border-green-700 text-green-700 px-6 py-4 rounded-lg hover:bg-green-50 shadow-lg"
            >
              <Phone size={24} />
              <div className="text-left">
                <div className="font-bold">Llamar</div>
                <div className="text-sm">{CONTACT_CONFIG.telefonoDisplay}</div>
              </div>
            </button>
          </div>

          {/* FORMULARIO */}
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-green-800 text-center mb-6">
              O dejanos tu consulta
            </h3>
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-lg shadow space-y-4"
            >
              <input
                name="nombre"
                placeholder="Nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                required
                className="w-full border p-3 rounded"
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full border p-3 rounded"
              />
              <input
                name="telefono"
                type="tel"
                placeholder="Teléfono"
                value={formData.telefono}
                onChange={handleInputChange}
                className="w-full border p-3 rounded"
              />
              <textarea
                name="mensaje"
                placeholder="Mensaje"
                value={formData.mensaje}
                onChange={handleInputChange}
                required
                rows="5"
                className="w-full border p-3 rounded"
              />
              <button className="w-full bg-green-700 text-white py-3 rounded hover:bg-green-800">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-green-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* COLUMNA 1: DESCRIPCIÓN */}
            <div>
              <div className="flex items-center mb-4">
                <Leaf size={28} />
                <span className="ml-2 text-xl font-bold">
                  Tierra de Los Andes
                </span>
              </div>
              <p className="text-green-200 text-sm">
                Tu nuevo hogar en armonía con la naturaleza. Un desarrollo
                pensado para el bienestar de tu familia.
              </p>
            </div>

            {/* COLUMNA 2: NAVEGACIÓN */}
            <div>
              <h4 className="font-bold mb-4 text-lg">Navegación</h4>
              <ul className="space-y-2">
                {[
                  ['#home', 'Inicio'],
                  ['#maquetas', 'Visualización'],
                  ['#servicios', 'Servicios'],
                  ['#contacto', 'Contacto']
                ].map(([id, text]) => (
                  <li key={id}>
                    <button
                      onClick={() => scrollToSection(id)}
                      className="text-green-200 hover:text-white"
                    >
                      {text}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMNA 3: CONTACTO */}
            <div>
              <h4 className="font-bold mb-4 text-lg">Contacto</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={openEmail}
                    className="flex items-center text-green-200 hover:text-white"
                  >
                    <Mail size={18} className="mr-2" />
                    {CONTACT_CONFIG.email}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => window.location.href = `tel:${CONTACT_CONFIG.telefono}`}
                    className="flex items-center text-green-200 hover:text-white"
                  >
                    <Phone size={18} className="mr-2" />
                    {CONTACT_CONFIG.telefonoDisplay}
                  </button>
                </li>
                <li>
                  <button
                    onClick={openWhatsApp}
                    className="flex items-center text-green-200 hover:text-white"
                  >
                    <MessageCircle size={18} className="mr-2" />
                    WhatsApp
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* COPYRIGHT */}
          <div className="border-t border-green-700 pt-8 text-center">
            <p className="text-green-300 text-sm">
              © 2024 Tierra de Los Andes. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default TierraDeLosAndesWebsite;