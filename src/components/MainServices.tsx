
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { 
  Wrench, 
  Brush, 
  Zap, 
  Home, 
  Car, 
  Palette,
  Monitor,
  Camera,
  ArrowRight
} from 'lucide-react';

const MainServices = () => {
  const services = [
    {
      icon: <Wrench size={32} />,
      title: 'Reparos Gerais',
      description: 'Consertos e manutenções diversas para sua casa ou empresa',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      popular: true
    },
    {
      icon: <Home size={32} />,
      title: 'Limpeza Residencial',
      description: 'Serviços profissionais de limpeza para deixar sua casa impecável',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      popular: true
    },
    {
      icon: <Zap size={32} />,
      title: 'Serviços Elétricos',
      description: 'Instalações, reparos e manutenções elétricas com segurança',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      popular: false
    },
    {
      icon: <Brush size={32} />,
      title: 'Pintura',
      description: 'Pintura residencial e comercial com acabamento profissional',
      image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      popular: false
    },
    {
      icon: <Car size={32} />,
      title: 'Mecânica Automotiva',
      description: 'Manutenção e reparo de veículos com qualidade garantida',
      image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      popular: false
    },
    {
      icon: <Palette size={32} />,
      title: 'Design Gráfico',
      description: 'Criação de logotipos, materiais gráficos e identidade visual',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      popular: true
    },
    {
      icon: <Monitor size={32} />,
      title: 'Desenvolvimento Web',
      description: 'Sites, aplicativos e soluções digitais personalizadas',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      popular: false
    },
    {
      icon: <Camera size={32} />,
      title: 'Fotografia',
      description: 'Ensaios, eventos e fotografias profissionais',
      image: 'https://images.unsplash.com/photo-1554048612-b6a482b224a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      popular: false
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-4">
            Principais Categorias de Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conectamos você com profissionais qualificados em diversas áreas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0 shadow-md">
              <div className="relative">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                {service.popular && (
                  <div className="absolute top-2 right-2 bg-yellow-400 text-[#0A1F44] px-2 py-1 rounded-full text-xs font-semibold">
                    Popular
                  </div>
                )}
                <div className="absolute inset-0 bg-[#0A1F44] bg-opacity-0 group-hover:bg-opacity-20 transition-opacity rounded-t-lg flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    {service.icon}
                  </div>
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center space-x-2 text-[#0A1F44] group-hover:text-blue-600 transition-colors">
                  <span className="md:hidden">{service.icon}</span>
                  <span>{service.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <Link to={`/area-cliente?servico=${encodeURIComponent(service.title)}`}>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-[#0A1F44] text-[#0A1F44] hover:bg-[#0A1F44] hover:text-white group-hover:bg-[#0A1F44] group-hover:text-white transition-colors"
                  >
                    Ver Prestadores
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/area-cliente">
            <Button size="lg" className="bg-[#0A1F44] text-white hover:bg-blue-900 px-8">
              Ver Todos os Serviços
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MainServices;
