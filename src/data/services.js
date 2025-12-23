import { Droplet, Zap, Leaf, Wifi } from 'lucide-react';

// Datos centralizados de servicios
export const servicios = [
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