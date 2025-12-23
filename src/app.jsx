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
  MessageCircle,
  MapPin,
  X,
  Camera
} from 'lucide-react';
import { CONTACT_CONFIG } from './config/contactConfig';

function TierraDeLosAndesWebsite() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  // Imágenes del carrusel principal
  const maquetas = [
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800'
  ];

  // Galería de fotos (agregá más si querés)
  const galeria = [
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400',
    'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400',
    'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=400'
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

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextLightboxImage = () =>
    setLightboxIndex((prev) => (prev + 1) % galeria.length);

  const prevLightboxImage = () =>
    setLightboxIndex((prev) => (prev - 1 + galeria.length) % galeria.length);

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
            {[
              ['#home', 'Inicio'],
              ['#maquetas', 'Proyecto'],
              ['#galeria', 'Galería'],
              ['#servicios', 'Servicios'],
              ['#ubicacion', 'Ubicación'],
              ['#contacto', 'Contacto']
            ].map(([id, text]) => (
              <li key={id}>
                <button
                  onClick={() => scrollToSection(id)}
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

      {/* HOME - HERO SECTION */}
      <section id="home" className="relative pt-20 pb-32 overflow-hidden">
        {/* Fondo con gradiente y patrón */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-green-100"></div>
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

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
              <button
                onClick={() => scrollToSection('#contacto')}
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
              >
                Consultá Ahora
              </button>
              <button
                onClick={() => scrollToSection('#maquetas')}
                className="px-8 py-4 bg-white text-green-700 border-2 border-green-700 rounded-xl font-semibold hover:bg-green-50 transition-all"
              >
                Ver Proyecto
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                ['45', 'Lotes Exclusivos'],
                ['500m²', 'Desde'],
                ['24/7', 'Seguridad']
              ].map(([num, label]) => (
                <div key={label} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-green-700">{num}</div>
                  <div className="text-sm text-gray-600 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MAQUETAS - PROYECTO */}
      <section id="maquetas" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Visualización del <span className="text-green-700">Proyecto</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Conocé cómo quedará Tierra de Los Andes una vez finalizado
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
              <img
                src={maquetas[currentSlide]}
                alt="Maqueta"
                className="w-full h-[500px] md:h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay con info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">Vista {currentSlide + 1}</h3>
                  <p className="text-white/90">Renders profesionales del desarrollo</p>
                </div>
              </div>
            </div>

            {/* Botones de navegación mejorados */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-4 rounded-full shadow-lg transform hover:scale-110 transition-all"
            >
              <ChevronLeft className="text-green-700" size={28} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-4 rounded-full shadow-lg transform hover:scale-110 transition-all"
            >
              <ChevronRight className="text-green-700" size={28} />
            </button>

            {/* Indicadores mejorados */}
            <div className="flex justify-center mt-8 space-x-3">
              {maquetas.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide
                      ? 'bg-green-700 w-12'
                      : 'bg-gray-300 w-2 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALERÍA EXPANDIBLE */}
      <section id="galeria" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Galería de <span className="text-green-700">Imágenes</span>
            </h2>
            <p className="text-gray-600 text-lg flex items-center justify-center gap-2">
              <Camera size={20} />
              Hacé clic en cualquier imagen para ampliar
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {galeria.map((img, index) => (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group aspect-square"
              >
                <img
                  src={img}
                  alt={`Galería ${index + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                  <Camera className="text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all" size={40} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all"
          >
            <X className="text-white" size={32} />
          </button>

          <button
            onClick={prevLightboxImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all"
          >
            <ChevronLeft className="text-white" size={32} />
          </button>

          <img
            src={galeria[lightboxIndex]}
            alt={`Imagen ${lightboxIndex + 1}`}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />

          <button
            onClick={nextLightboxImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all"
          >
            <ChevronRight className="text-white" size={32} />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-lg">
            {lightboxIndex + 1} / {galeria.length}
          </div>
        </div>
      )}

      {/* SERVICIOS */}
      <section id="servicios" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Estado de <span className="text-green-700">Servicios</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Infraestructura instalada y en desarrollo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {servicios.map((s, i) => {
              const Icon = s.icono;
              return (
                <div
                  key={i}
                  className="bg-gradient-to-br from-green-50 to-green-100/50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all border border-green-100"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-gradient-to-br from-green-600 to-green-700 p-4 rounded-xl shadow-lg">
                      <Icon className="text-white" size={32} />
                    </div>
                    {s.estado === 'completado' ? (
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
                    {s.nombre}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {s.descripcion}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* UBICACIÓN - GOOGLE MAPS */}
      <section id="ubicacion" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-green-700">Ubicación</span> Privilegiada
            </h2>
            <p className="text-gray-600 text-lg flex items-center justify-center gap-2">
              <MapPin size={20} />
              A solo 15 minutos del centro de la ciudad
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              {/* Reemplazá esta URL con las coordenadas reales del barrio */}
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

      {/* CONTACTO */}
      <section id="contacto" className="py-20 bg-gradient-to-br from-green-50 via-white to-green-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contactanos
            </h2>
            <p className="text-gray-600 text-lg">
              Consultá por disponibilidad de lotes y condiciones de compra
            </p>
          </div>

          {/* BOTONES DE CONTACTO */}
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-12 max-w-4xl mx-auto">
            <button
              onClick={openEmail}
              className="flex items-center space-x-3 bg-white border-2 border-green-600 text-green-700 px-8 py-5 rounded-2xl hover:bg-green-50 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
            >
              <div className="bg-green-100 p-3 rounded-xl">
                <Mail size={24} className="text-green-700" />
              </div>
              <div className="text-left">
                <div className="font-bold text-lg">Enviar Email</div>
                <div className="text-sm text-gray-600">{CONTACT_CONFIG.email}</div>
              </div>
            </button>

            <button
              onClick={openWhatsApp}
              className="flex items-center space-x-3 bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-5 rounded-2xl hover:from-green-700 hover:to-green-800 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
            >
              <div className="bg-white/20 p-3 rounded-xl">
                <MessageCircle size={24} />
              </div>
              <div className="text-left">
                <div className="font-bold text-lg">Abrir WhatsApp</div>
                <div className="text-sm text-white/90">{CONTACT_CONFIG.telefonoDisplay}</div>
              </div>
            </button>

            <button
              onClick={() => window.location.href = `tel:${CONTACT_CONFIG.telefono}`}
              className="flex items-center space-x-3 bg-white border-2 border-green-600 text-green-700 px-8 py-5 rounded-2xl hover:bg-green-50 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
            >
              <div className="bg-green-100 p-3 rounded-xl">
                <Phone size={24} className="text-green-700" />
              </div>
              <div className="text-left">
                <div className="font-bold text-lg">Llamar</div>
                <div className="text-sm text-gray-600">{CONTACT_CONFIG.telefonoDisplay}</div>
              </div>
            </button>
          </div>

          {/* FORMULARIO */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">
                O dejanos tu consulta
              </h3>
              <p className="text-gray-600 text-center mb-8">
                Te responderemos a la brevedad
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    name="nombre"
                    placeholder="Juan Pérez"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                    className="w-full border-2 border-gray-200 p-4 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="juan@ejemplo.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full border-2 border-gray-200 p-4 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    name="telefono"
                    type="tel"
                    placeholder="+54 9 11 1234-5678"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    className="w-full border-2 border-gray-200 p-4 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    name="mensaje"
                    placeholder="Me interesa conocer más sobre los lotes disponibles..."
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full border-2 border-gray-200 p-4 rounded-xl focus:border-green-500 focus:outline-none transition-colors resize-none"
                  />
                </div>
                
                <button className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-xl font-bold text-lg hover:from-green-700 hover:to-green-800 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
                  Enviar Consulta
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
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
                {[
                  ['#home', 'Inicio'],
                  ['#maquetas', 'Proyecto'],
                  ['#galeria', 'Galería'],
                  ['#servicios', 'Servicios'],
                  ['#ubicacion', 'Ubicación'],
                  ['#contacto', 'Contacto']
                ].map(([id, text]) => (
                  <li key={id}>
                    <button
                      onClick={() => scrollToSection(id)}
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
    </div>
  );
}

export default TierraDeLosAndesWebsite;