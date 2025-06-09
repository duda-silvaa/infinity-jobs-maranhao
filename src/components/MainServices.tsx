
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
  ArrowRight,
  Star,
  Users,
  TrendingUp
} from 'lucide-react';

const MainServices = () => {
  const services = [
    {
      icon: <Wrench size={32} />,
      title: 'Reparos Gerais',
      description: 'Consertos e manutenções diversas para sua casa ou empresa',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      popular: true,
      professionals: '120+'
    },
    {
      icon: <Home size={32} />,
      title: 'Limpeza Residencial',
      description: 'Serviços profissionais de limpeza para deixar sua casa impecável',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      popular: true,
      professionals: '80+'
    },
    {
      icon: <Zap size={32} />,
      title: 'Serviços Elétricos',
      description: 'Instalações, reparos e manutenções elétricas com segurança',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      popular: false,
      professionals: '45+'
    },
    {
      icon: <Brush size={32} />,
      title: 'Pintura',
      description: 'Pintura residencial e comercial com acabamento profissional',
      image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      popular: false,
      professionals: '65+'
    },
    {
      icon: <Car size={32} />,
      title: 'Mecânica Automotiva',
      description: 'Manutenção e reparo de veículos com qualidade garantida',
      image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      popular: false,
      professionals: '30+'
    },
    {
      icon: <Palette size={32} />,
      title: 'Design Gráfico',
      description: 'Criação de logotipos, materiais gráficos e identidade visual',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      popular: true,
      professionals: '25+'
    },
    {
      icon: <Monitor size={32} />,
      title: 'Desenvolvimento Web',
      description: 'Sites, aplicativos e soluções digitais personalizadas',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      popular: false,
      professionals: '15+'
    },
    {
      icon: <Camera size={32} />,
      title: 'Fotografia',
      description: 'Ensaios, eventos e fotografias profissionais',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      popular: false,
      professionals: '20+'
    }
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0A1F44] via-blue-500 to-yellow-400"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-4">
            Principais Categorias de Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conectamos você com profissionais qualificados em diversas áreas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-500 cursor-pointer border-0 shadow-md hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-t-lg group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Badges */}
                <div className="absolute top-2 left-2 right-2 flex justify-between">
                  {service.popular && (
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                      <TrendingUp size={12} className="mr-1" />
                      Popular
                    </div>
                  )}
                  <div className="bg-white bg-opacity-90 text-[#0A1F44] px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                    <Users size={12} className="mr-1" />
                    {service.professionals}
                  </div>
                </div>

                {/* Overlay com ícone */}
                <div className="absolute inset-0 bg-[#0A1F44] bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 rounded-t-lg flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
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
                <p className="text-gray-600 text-sm mb-4 group-hover:text-gray-700 transition-colors">
                  {service.description}
                </p>
                
                <Link to={`/area-cliente?servico=${encodeURIComponent(service.title)}`}>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-[#0A1F44] text-[#0A1F44] hover:bg-gradient-to-r hover:from-[#0A1F44] hover:to-blue-600 hover:text-white group-hover:bg-gradient-to-r group-hover:from-[#0A1F44] group-hover:to-blue-600 group-hover:text-white transition-all duration-300 group-hover:border-transparent"
                  >
                    Ver Prestadores
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in delay-800">
          <Link to="/area-cliente">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#0A1F44] to-blue-600 text-white hover:from-blue-900 hover:to-blue-700 px-8 hover-scale transition-all duration-300"
            >
              Ver Todos os Serviços
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MainServices;
