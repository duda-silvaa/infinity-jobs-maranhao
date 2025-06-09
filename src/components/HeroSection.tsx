
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Search, Users, Star, ArrowRight, CheckCircle, Briefcase, Clock } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#0A1F44] to-blue-600 text-white pt-32 pb-16 relative overflow-hidden">
      {/* Elementos de fundo animados */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400 bg-opacity-20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white bg-opacity-10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-yellow-300 bg-opacity-20 rounded-full animate-pulse delay-300"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo principal */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              Conectamos pessoas com{' '}
              <span className="text-yellow-300">talento</span> no Maranhão
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in delay-200">
              Encontre os melhores prestadores de serviço ou ofereça suas habilidades para quem precisa
            </p>
            
            {/* Botões de ação */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fade-in delay-400">
              <Link to="/area-cliente">
                <Button size="lg" className="bg-yellow-400 text-[#0A1F44] hover:bg-yellow-300 font-semibold px-8 py-3 text-lg w-full sm:w-auto hover-scale group">
                  Quero Contratar
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </Link>
              <Link to="/area-prestador">
                <Button size="lg" className="bg-white text-[#0A1F44] hover:bg-gray-100 font-semibold px-8 py-3 text-lg w-full sm:w-auto border-2 border-white hover-scale group">
                  Quero Trabalhar
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </Link>
            </div>

            {/* Benefícios destacados */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in delay-600">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-yellow-400 flex-shrink-0" size={24} />
                <span className="text-blue-100">Prestadores verificados</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-yellow-400 flex-shrink-0" size={24} />
                <span className="text-blue-100">Pagamento seguro</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-yellow-400 flex-shrink-0" size={24} />
                <span className="text-blue-100">Suporte 24/7</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-yellow-400 flex-shrink-0" size={24} />
                <span className="text-blue-100">Avaliações reais</span>
              </div>
            </div>
          </div>

          {/* Imagem ilustrativa com cards flutuantes */}
          <div className="relative animate-fade-in delay-800">
            <div className="bg-white bg-opacity-10 rounded-3xl p-8 backdrop-blur-sm">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Pessoas trabalhando e se conectando" 
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              
              {/* Cards flutuantes animados - novos cards */}
              <div className="absolute -bottom-4 -left-4 bg-white text-[#0A1F44] p-4 rounded-xl shadow-lg animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-sm">Serviço Concluído</div>
                    <div className="text-gray-600 text-xs">Há 2 minutos</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white p-4 rounded-xl shadow-lg animate-bounce">
                <div className="flex items-center space-x-2">
                  <Users size={18} />
                  <div>
                    <div className="font-bold text-sm">500+ Profissionais</div>
                    <div className="text-xs opacity-90">Ativos agora</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-6 bg-blue-500 text-white p-3 rounded-xl shadow-lg animate-pulse">
                <div className="flex items-center space-x-2">
                  <Clock size={16} />
                  <span className="font-bold text-sm">24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
