
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Search, Users, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#0A1F44] to-blue-600 text-white pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo principal */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Conectamos pessoas com{' '}
              <span className="text-yellow-300">talento</span> no Maranhão
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Encontre os melhores prestadores de serviço ou ofereça suas habilidades para quem precisa
            </p>
            
            {/* Botões de ação */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link to="/area-cliente">
                <Button size="lg" className="bg-yellow-400 text-[#0A1F44] hover:bg-yellow-300 font-semibold px-8 py-3 text-lg w-full sm:w-auto">
                  Quero Contratar
                </Button>
              </Link>
              <Link to="/area-prestador">
                <Button size="lg" className="bg-white text-[#0A1F44] hover:bg-gray-100 font-semibold px-8 py-3 text-lg w-full sm:w-auto border-2 border-white">
                  Quero Trabalhar
                </Button>
              </Link>
            </div>

            {/* Estatísticas */}
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="flex justify-center mb-2">
                  <Users size={32} />
                </div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-blue-200">Prestadores</div>
              </div>
              <div>
                <div className="flex justify-center mb-2">
                  <Search size={32} />
                </div>
                <div className="text-2xl font-bold">1200+</div>
                <div className="text-blue-200">Serviços</div>
              </div>
              <div>
                <div className="flex justify-center mb-2">
                  <Star size={32} />
                </div>
                <div className="text-2xl font-bold">4.8</div>
                <div className="text-blue-200">Avaliação</div>
              </div>
            </div>
          </div>

          {/* Imagem ilustrativa */}
          <div className="relative">
            <div className="bg-white bg-opacity-10 rounded-3xl p-8 backdrop-blur-sm">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Pessoas trabalhando e se conectando" 
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              
              {/* Card flutuante */}
              <div className="absolute -bottom-4 -left-4 bg-white text-[#0A1F44] p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Star className="text-[#0A1F44]" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-lg">João Silva</div>
                    <div className="text-gray-600">Eletricista • ⭐ 4.9</div>
                  </div>
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
