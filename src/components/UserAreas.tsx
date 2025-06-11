
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { 
  Users, 
  Briefcase, 
  ArrowRight, 
  Star, 
  CheckCircle, 
  TrendingUp,
  Shield,
  Clock
} from 'lucide-react';

const UserAreas = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#0A1F44] via-blue-500 to-yellow-400"></div>
      <div className="absolute top-20 right-20 w-32 h-32 bg-yellow-400 bg-opacity-10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-blue-400 bg-opacity-10 rounded-full animate-pulse delay-500"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-4">
            Faça Parte da Nossa Comunidade
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Junte-se a milhares de profissionais e clientes que confiam na nossa plataforma
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Card para Clientes */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50 animate-fade-in">
            <div className="relative overflow-hidden rounded-t-lg">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Cliente satisfeito" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay com ícone */}
              <div className="absolute inset-0 bg-[#0A1F44] bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
                <Users className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100" size={48} />
              </div>

              {/* Badge */}
              <div className="absolute top-4 left-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                <TrendingUp size={14} className="mr-1" />
                Popular
              </div>
            </div>

            <CardHeader className="pb-4">
              <CardTitle className="flex items-center space-x-2 text-[#0A1F44] text-2xl group-hover:text-blue-600 transition-colors">
                <Users size={28} />
                <span>Sou Cliente</span>
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-gray-600 text-lg group-hover:text-gray-700 transition-colors">
                Encontre profissionais qualificados para seus projetos e necessidades
              </p>
              
              {/* Benefícios */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Acesso a profissionais verificados</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="text-blue-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Pagamentos seguros e protegidos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="text-yellow-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Sistema de avaliações confiável</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="text-purple-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Suporte 24/7 disponível</span>
                </div>
              </div>
              
              <Link to="/area-cliente" className="block">
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-[#0A1F44] to-blue-600 text-white hover:from-blue-900 hover:to-blue-700 font-semibold py-3 text-lg hover-scale transition-all duration-300 group-hover:shadow-lg"
                >
                  Saiba Mais
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Card para Prestadores */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 bg-gradient-to-br from-white to-yellow-50 animate-fade-in delay-200">
            <div className="relative overflow-hidden rounded-t-lg">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Prestador de serviço" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay com ícone */}
              <div className="absolute inset-0 bg-yellow-600 bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
                <Briefcase className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100" size={48} />
              </div>

              {/* Badge */}
              <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                <Briefcase size={14} className="mr-1" />
                Oportunidades
              </div>
            </div>

            <CardHeader className="pb-4">
              <CardTitle className="flex items-center space-x-2 text-[#0A1F44] text-2xl group-hover:text-yellow-600 transition-colors">
                <Briefcase size={28} />
                <span>Sou Prestador</span>
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-gray-600 text-lg group-hover:text-gray-700 transition-colors">
                Ofereça seus serviços e conecte-se com clientes em todo o Maranhão
              </p>
              
              {/* Benefícios */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="text-green-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Aumente sua renda mensal</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="text-blue-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Amplie sua base de clientes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="text-purple-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Perfil verificado e confiável</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="text-orange-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Flexibilidade de horários</span>
                </div>
              </div>
              
              <Link to="/area-prestador" className="block">
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:from-yellow-600 hover:to-orange-600 font-semibold py-3 text-lg hover-scale transition-all duration-300 group-hover:shadow-lg"
                >
                  Saiba Mais
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Estatísticas em destaque */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto animate-fade-in delay-400">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#0A1F44] mb-2">500+</div>
            <div className="text-gray-600">Profissionais</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#0A1F44] mb-2">1.2k+</div>
            <div className="text-gray-600">Clientes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#0A1F44] mb-2">4.8</div>
            <div className="text-gray-600">Avaliação</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#0A1F44] mb-2">98%</div>
            <div className="text-gray-600">Satisfação</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserAreas;
