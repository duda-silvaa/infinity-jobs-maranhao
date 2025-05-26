
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Users, Target, Heart, Award } from 'lucide-react';

const Sobre = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#0A1F44] to-blue-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sobre o Projeto
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Conectando talentos maranhenses e transformando vidas através da tecnologia
            </p>
          </div>
        </section>

        {/* Missão, Visão e Valores */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Target className="w-16 h-16 text-[#0A1F44] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#0A1F44] mb-4">Nossa Missão</h3>
                <p className="text-gray-600">
                  Conectar clientes e prestadores de serviços no Maranhão, 
                  valorizando talentos locais e promovendo inclusão digital.
                </p>
              </div>
              <div className="text-center">
                <Users className="w-16 h-16 text-[#0A1F44] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#0A1F44] mb-4">Nossa Visão</h3>
                <p className="text-gray-600">
                  Ser a principal plataforma de serviços do Maranhão, 
                  gerando impacto social positivo em todas as comunidades.
                </p>
              </div>
              <div className="text-center">
                <Heart className="w-16 h-16 text-[#0A1F44] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#0A1F44] mb-4">Nossos Valores</h3>
                <p className="text-gray-600">
                  Transparência, qualidade, inclusão e valorização 
                  dos profissionais maranhenses.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impacto Social */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-4">
                Nosso Impacto Social
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transformando vidas e comunidades através da tecnologia
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center bg-white p-6 rounded-lg shadow-lg">
                <Award className="w-12 h-12 text-[#0A1F44] mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-[#0A1F44] mb-2">500+</h4>
                <p className="text-gray-600">Prestadores Cadastrados</p>
              </div>
              <div className="text-center bg-white p-6 rounded-lg shadow-lg">
                <Users className="w-12 h-12 text-[#0A1F44] mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-[#0A1F44] mb-2">1000+</h4>
                <p className="text-gray-600">Clientes Ativos</p>
              </div>
              <div className="text-center bg-white p-6 rounded-lg shadow-lg">
                <Target className="w-12 h-12 text-[#0A1F44] mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-[#0A1F44] mb-2">217</h4>
                <p className="text-gray-600">Municípios Atendidos</p>
              </div>
              <div className="text-center bg-white p-6 rounded-lg shadow-lg">
                <Heart className="w-12 h-12 text-[#0A1F44] mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-[#0A1F44] mb-2">5000+</h4>
                <p className="text-gray-600">Serviços Realizados</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Sobre;
