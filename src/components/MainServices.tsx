
import React from 'react';
import { Wrench, Home, Zap, Paintbrush, TreePine, Car } from 'lucide-react';

const MainServices = () => {
  const services = [
    {
      id: 1,
      name: 'Reparos Gerais',
      description: 'Consertos domésticos, montagem de móveis e pequenos reparos',
      icon: Wrench,
      image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      professionals: 124
    },
    {
      id: 2,
      name: 'Limpeza Residencial',
      description: 'Faxinas completas, limpeza de carpetes e organização',
      icon: Home,
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      professionals: 89
    },
    {
      id: 3,
      name: 'Serviços Elétricos',
      description: 'Instalações elétricas, reparos e manutenção predial',
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1621905252472-e8b3191aa262?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      professionals: 67
    },
    {
      id: 4,
      name: 'Pintura',
      description: 'Pintura residencial, comercial e serviços de decoração',
      icon: Paintbrush,
      image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      professionals: 78
    },
    {
      id: 5,
      name: 'Jardinagem',
      description: 'Cuidados com jardins, podas e paisagismo',
      icon: TreePine,
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      professionals: 45
    },
    {
      id: 6,
      name: 'Mecânica Automotiva',
      description: 'Reparos automotivos, manutenção e serviços móveis',
      icon: Car,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      professionals: 56
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-4">
            Principais Serviços Disponíveis
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encontre profissionais qualificados em todo o Maranhão
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-[#0A1F44] text-white p-2 rounded-full">
                      <IconComponent size={24} />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0A1F44] mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {service.professionals} profissionais
                    </span>
                    <button className="bg-[#0A1F44] text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-900 transition-colors">
                      Ver Prestadores
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MainServices;
