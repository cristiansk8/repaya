import React from "react";

const services = [
  { 
    title: "Reparación de conexiones a gas", 
    description: "Servicios certificados para garantizar seguridad y cumplimiento.",
    icon: "/icons/Gas.png", // Ruta del icono
  },
  { 
    title: "Reparación de lavadoras", 
    description: "Diagnóstico y solución de problemas para lavadoras de cualquier marca.",
    icon: "/icons/Lavadora.png", 
  },
  { 
    title: "Reparación de neveras", 
    description: "Servicio técnico especializado en refrigeración.",
    icon: "/icons/Nevera.png", 
  },
  { 
    title: "Reparación de estufas a gas", 
    description: "Arreglo y mantenimiento para un funcionamiento seguro.",
    icon: "/icons/Gas.png", 
  },
];

const ServiceCards = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-center text-3xl font-bold text-gray-800 mb-8">Nuestros Servicios</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="p-6 flex flex-col items-center">
              <img 
                src={service.icon} 
                alt={`${service.title} icon`} 
                className="w-16 h-16 mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-700 text-center">{service.title}</h2>
              <p className="mt-4 text-gray-600 text-center">{service.description}</p>
            </div>
            <div className="bg-gray-50 px-6 py-4">
              <button className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium">
                Más información
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;

