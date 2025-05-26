
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Search, Star, MessageCircle, FileText, Shield, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';

const AreaCliente = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#0A1F44] to-blue-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Área do Cliente
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Encontre os melhores profissionais do Maranhão
            </p>
            <Button className="bg-white text-[#0A1F44] px-8 py-4 text-lg font-semibold hover:bg-gray-100">
              Cadastre-se Gratuitamente
            </Button>
          </div>
        </section>

        {/* Funcionalidades */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-4">
                Como Funciona para Você
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Search className="w-16 h-16 text-[#0A1F44] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#0A1F44] mb-4">Busque Profissionais</h3>
                <p className="text-gray-600">
                  Use nossa busca inteligente para encontrar o profissional ideal por serviço, localização e avaliação.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <MessageCircle className="w-16 h-16 text-[#0A1F44] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#0A1F44] mb-4">Solicite Orçamentos</h3>
                <p className="text-gray-600">
                  Entre em contato direto com prestadores e receba orçamentos personalizados rapidamente.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Star className="w-16 h-16 text-[#0A1F44] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#0A1F44] mb-4">Avalie Serviços</h3>
                <p className="text-gray-600">
                  Compartilhe sua experiência e ajude outros clientes a encontrar os melhores profissionais.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <FileText className="w-16 h-16 text-[#0A1F44] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#0A1F44] mb-4">Histórico Completo</h3>
                <p className="text-gray-600">
                  Acompanhe todos os seus serviços, orçamentos e avaliações em um só lugar.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Shield className="w-16 h-16 text-[#0A1F44] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#0A1F44] mb-4">Segurança Total</h3>
                <p className="text-gray-600">
                  Todos os prestadores são verificados e avaliados pela nossa comunidade.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Clock className="w-16 h-16 text-[#0A1F44] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#0A1F44] mb-4">Atendimento Rápido</h3>
                <p className="text-gray-600">
                  Conecte-se com profissionais disponíveis e resolva suas necessidades com agilidade.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#0A1F44] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para Encontrar o Profissional Ideal?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Cadastre-se gratuitamente e tenha acesso aos melhores prestadores de serviço do Maranhão.
            </p>
            <Button className="bg-white text-[#0A1F44] px-8 py-4 text-lg font-semibold hover:bg-gray-100">
              Criar Conta de Cliente
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AreaCliente;
