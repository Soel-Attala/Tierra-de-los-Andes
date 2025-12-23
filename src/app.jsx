import { CONTACT_CONFIG } from './config/contactConfig';
import { maquetas, galeria } from './data/images';
import { servicios } from './data/services';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import ProjectSection from './components/sections/ProjectSection';
import GallerySection from './components/sections/GallerySection';
import ServicesSection from './components/sections/ServicesSection';
import LocationSection from './components/sections/LocationSection';
import ContactSection from './components/sections/ContactSection';

function TierraDeLosAndesWebsite() {
  // Función para scroll suave a secciones
  const scrollToSection = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Función para abrir WhatsApp
  const openWhatsApp = () => {
    const mensaje = encodeURIComponent(CONTACT_CONFIG.whatsappMensaje);
    window.open(
      `https://wa.me/${CONTACT_CONFIG.telefono}?text=${mensaje}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  // Función para abrir email
  const openEmail = () => {
    window.location.href = `mailto:${CONTACT_CONFIG.email}`;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={scrollToSection} />
      
      <HeroSection onNavigate={scrollToSection} />
      
      <ProjectSection images={maquetas} />
      
      <GallerySection images={galeria} />
      
      <ServicesSection services={servicios} />
      
      <LocationSection />
      
      <ContactSection 
        openEmail={openEmail}
        openWhatsApp={openWhatsApp}
      />
      
      <Footer 
        onNavigate={scrollToSection}
        openEmail={openEmail}
        openWhatsApp={openWhatsApp}
      />
    </div>
  );
}

export default TierraDeLosAndesWebsite;