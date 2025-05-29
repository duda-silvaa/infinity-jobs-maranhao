
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-gradient-to-r from-[#0A1F44] to-blue-800 text-white py-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Transformando talentos locais em oportunidades reais
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Conecte-se a prestadores de serviço de todo o Maranhão. 
          Valorizando profissionais locais e gerando impacto social.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => navigate('/area-cliente')}
            className="bg-white text-[#0A1F44] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Sou Cliente
          </button>
          <button 
            onClick={() => navigate('/area-prestador')}
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#0A1F44] transition-colors"
          >
            Sou Prestador
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
