
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { UserCheck, Camera, MessageCircle, Star, TrendingUp, DollarSign } from 'lucide-react';
import { Button } from '../components/ui/button';

const AreaPrestador = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#0A1F44] to-blue-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Área do Prestador
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Transforme seu talento em oportunidades de negócio
            </p>
            <Button className="bg-white text-[#0A1F44] px-8 py-4 text-lg font-semibold hover:bg-gray-100">
              Cadastre-se Gratuitamente
            </Button>
            <p className="mt-4 text-lg">
              <strong>100% Gratuito</strong> • Orientações sobre MEI e precificação
            </p>
          </div>
        </section>

        {/* Benefícios */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-4">
                Por que Escolher Nossa Plataforma?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <MessageCircle className="w-16 h-16 text-[#0A1F44] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#0A1F44] mb-4">Receba Solicitações</h3>
                <p className="text-gray-600">
                  Clientes interessados entram em contato diretamente com você para solicitar orçamentos.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Camera className="w-16 h-16 text-[#0A1F44] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#0A1F44] mb-4">Mostre seu Trabalho</h3>
                <p className="text-gray-600">
                  Crie um portfólio com fotos e vídeos dos seus serviços para conquistar mais clientes.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Star className="w-16 h-16 text-[#0A1F44] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#0A1F44] mb-4">Sistema de Gamificação</h3>
                <p className="text-gray-600">
                  Ganhe pontos, badges e apareça nos rankings regionais para se destacar da concorrência.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <TrendingUp className="w-16 h-16 text-[#0A1F44] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#0A1F44] mb-4">Cresça seu Negócio</h3>
                <p className="text-gray-600">
                  Receba orientações sobre como precificar serviços, atendimento ao cliente e gestão de MEI.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <DollarSign className="w-16 h-16 text-[#0A1F44] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#0A1F44] mb-4">Sem Taxas Abusivas</h3>
                <p className="text-gray-600">
                  Plataforma gratuita para cadastro e uso. Você fica com 100% do valor dos seus serviços.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <UserCheck className="w-16 h-16 text-[#0A1F44] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#0A1F44] mb-4">Perfil Verificado</h3>
                <p className="text-gray-600">
                  Tenha um perfil verificado que gera confiança e credibilidade junto aos clientes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gamificação */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-4">
                Sistema de Conquistas
              </h2>
              <p className="text-xl text-gray-600">
                Ganhe reconhecimento e destaque-se na plataforma
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="bg-yellow-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star size={32} />
                </div>
                <h4 className="font-bold text-[#0A1F44] mb-2">5 Estrelas</h4>
                <p className="text-gray-600 text-sm">Mantenha alta avaliação</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserCheck size={32} />
                </div>
                <h4 className="font-bold text-[#0A1F44] mb-2">Confiável</h4>
                <p className="text-gray-600 text-sm">Prestador verificado</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp size={32} />
                </div>
                <h4 className="font-bold text-[#0A1F44] mb-2">Top Regional</h4>
                <p className="text-gray-600 text-sm">Destaque na sua região</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="bg-purple-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star size={32} />
                </div>
                <h4 className="font-bold text-[#0A1F44] mb-2">Expert</h4>
                <p className="text-gray-600 text-sm">100+ serviços realizados</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#0A1F44] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para Começar?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Cadastre-se gratuitamente e comece a receber solicitações de clientes hoje mesmo.
            </p>
            <Button className="bg-white text-[#0A1F44] px-8 py-4 text-lg font-semibold hover:bg-gray-100">
              Criar Conta de Prestador
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AreaPrestador;
