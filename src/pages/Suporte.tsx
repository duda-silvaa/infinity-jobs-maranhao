
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MessageCircle, Phone, Mail, FileText, HelpCircle, Users } from 'lucide-react';
import { Button } from '../components/ui/button';

const Suporte = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#0A1F44] to-blue-800 text-white py-20">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")'
            }}
          ></div>
          <div className="relative container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Central de Suporte
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Estamos aqui para ajudar você a aproveitar ao máximo nossa plataforma
            </p>
          </div>
        </section>

        {/* Opções de Suporte */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-4">
                Como Podemos Ajudar?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                <MessageCircle className="w-16 h-16 text-[#0A1F44] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#0A1F44] mb-4">Chat Online</h3>
                <p className="text-gray-600 mb-6">
                  Converse diretamente com nossa equipe de suporte através do chat em tempo real.
                </p>
                <Button className="bg-[#0A1F44] text-white">
                  Iniciar Chat
                </Button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                <Phone className="w-16 h-16 text-[#0A1F44] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#0A1F44] mb-4">Telefone</h3>
                <p className="text-gray-600 mb-6">
                  Ligue para nossa central de atendimento de segunda a sexta, das 8h às 18h.
                </p>
                <Button className="bg-[#0A1F44] text-white">
                  (98) 9 9999-9999
                </Button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                <Mail className="w-16 h-16 text-[#0A1F44] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#0A1F44] mb-4">E-mail</h3>
                <p className="text-gray-600 mb-6">
                  Envie sua dúvida por e-mail e receba uma resposta detalhada em até 24h.
                </p>
                <Button className="bg-[#0A1F44] text-white">
                  Enviar E-mail
                </Button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                <HelpCircle className="w-16 h-16 text-[#0A1F44] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#0A1F44] mb-4">FAQ</h3>
                <p className="text-gray-600 mb-6">
                  Consulte nossa base de conhecimento com as perguntas mais frequentes.
                </p>
                <Button className="bg-[#0A1F44] text-white">
                  Ver FAQ
                </Button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                <FileText className="w-16 h-16 text-[#0A1F44] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#0A1F44] mb-4">Tutoriais</h3>
                <p className="text-gray-600 mb-6">
                  Aprenda a usar todas as funcionalidades da plataforma com nossos guias.
                </p>
                <Button className="bg-[#0A1F44] text-white">
                  Ver Tutoriais
                </Button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                <Users className="w-16 h-16 text-[#0A1F44] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#0A1F44] mb-4">Comunidade</h3>
                <p className="text-gray-600 mb-6">
                  Participe da nossa comunidade e troque experiências com outros usuários.
                </p>
                <Button className="bg-[#0A1F44] text-white">
                  Acessar Fórum
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Contato Direto */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-[#0A1F44] mb-4">
                  Ainda tem dúvidas?
                </h2>
                <p className="text-gray-600">
                  Preencha o formulário abaixo e nossa equipe entrará em contato
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nome
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A1F44]"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        E-mail
                      </label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A1F44]"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Assunto
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A1F44]">
                      <option>Dúvida sobre cadastro</option>
                      <option>Problema técnico</option>
                      <option>Sugestão</option>
                      <option>Reclamação</option>
                      <option>Outro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem
                    </label>
                    <textarea
                      rows={6}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A1F44]"
                      placeholder="Descreva sua dúvida ou problema..."
                    ></textarea>
                  </div>

                  <Button className="w-full bg-[#0A1F44] text-white py-3">
                    Enviar Mensagem
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Suporte;
