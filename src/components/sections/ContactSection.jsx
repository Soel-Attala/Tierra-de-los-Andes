import { useState } from 'react';
import { Mail, MessageCircle, Phone } from 'lucide-react';
import { CONTACT_CONFIG } from "../../config/contactConfig";
import SectionTitle from '../common/SectionTitle';

export default function ContactSection({ openEmail, openWhatsApp }) {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

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

    setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-green-50 via-white to-green-50">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Contactanos"
          subtitle="Consultá por disponibilidad de lotes y condiciones de compra"
        />

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
              <div className="text-sm text-white/90">
                {CONTACT_CONFIG.telefonoDisplay}
              </div>
            </div>
          </button>

          <button
            onClick={() =>
              (window.location.href = `tel:${CONTACT_CONFIG.telefono}`)
            }
            className="flex items-center space-x-3 bg-white border-2 border-green-600 text-green-700 px-8 py-5 rounded-2xl hover:bg-green-50 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
          >
            <div className="bg-green-100 p-3 rounded-xl">
              <Phone size={24} className="text-green-700" />
            </div>
            <div className="text-left">
              <div className="font-bold text-lg">Llamar</div>
              <div className="text-sm text-gray-600">
                {CONTACT_CONFIG.telefonoDisplay}
              </div>
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
  );
}