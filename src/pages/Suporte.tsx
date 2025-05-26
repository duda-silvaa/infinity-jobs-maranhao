
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MessageCircle, Phone, Mail, HelpCircle, Book, Users } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

const Suporte = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#0A1F44] to-blue-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Central de Suporte
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Estamos aqui para ajudar você a aproveitar ao máximo nossa plataforma
            </p>
          </div>
        </section>

        {/* Contato */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-4">
                Como Podemos Ajudar?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <MessageCircle className="w-16 h-16 text-[#0A1F44] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#0A1F44] mb-4">Chat Online</h3>
                <p className="text-gray-600 mb-4">
                  Converse conosco em tempo real para resolver suas dúvidas rapidamente.
                </p>
                <Button className="bg-[#0A1F44] text-white hover:bg-blue-900">
                  Iniciar Chat
                </Button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Phone className="w-16 h-16 text-[#0A1F44] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#0A1F44] mb-4">Telefone</h3>
                <p className="text-gray-600 mb-4">
                  Ligue para nossa central de atendimento de segunda a sexta, das 8h às 18h.
                </p>
                <p className="text-[#0A1F44] font-bold text-lg">(98) 3000-0000</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Mail className="w-16 h-16 text-[#0A1F44] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#0A1F44] mb-4">E-mail</h3>
                <p className="text-gray-600 mb-4">
                  Envie sua dúvida por e-mail e receba uma resposta em até 24 horas.
                </p>
                <p className="text-[#0A1F44] font-bold">suporte@infinitytrabalhe.com.br</p>
              </div>
            </div>

            {/* Formulário de Contato */}
            <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#0A1F44] mb-6 text-center">
                Envie sua Mensagem
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Seu Nome" />
                  <Input placeholder="Seu E-mail" type="email" />
                </div>
                <Input placeholder="Assunto" />
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-md h-32 resize-none"
                  placeholder="Descreva sua dúvida ou problema..."
                ></textarea>
                <Button className="w-full bg-[#0A1F44] text-white hover:bg-blue-900">
                  Enviar Mensagem
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-4">
                Perguntas Frequentes
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <HelpCircle className="w-8 h-8 text-[#0A1F44] mb-4" />
                <h4 className="text-lg font-bold text-[#0A1F44] mb-2">
                  Como faço para me cadastrar?
                </h4>
                <p className="text-gray-600">
                  Clique em "Cadastrar" no topo da página, escolha se você é cliente ou prestador e preencha o formulário.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <HelpCircle className="w-8 h-8 text-[#0A1F44] mb-4" />
                <h4 className="text-lg font-bold text-[#0A1F44] mb-2">
                  A plataforma é gratuita?
                </h4>
                <p className="text-gray-600">
                  Sim! O cadastro e uso da plataforma são 100% gratuitos tanto para clientes quanto para prestadores.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <HelpCircle className="w-8 h-8 text-[#0A1F44] mb-4" />
                <h4 className="text-lg font-bold text-[#0A1F44] mb-2">
                  Como funciona o sistema de avaliações?
                </h4>
                <p className="text-gray-600">
                  Após a conclusão de um serviço, cliente e prestador podem se avaliar mutuamente de 1 a 5 estrelas.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <HelpCircle className="w-8 h-8 text-[#0A1F44] mb-4" />
                <h4 className="text-lg font-bold text-[#0A1F44] mb-2">
                  Posso atender fora do Maranhão?
                </h4>
                <p className="text-gray-600">
                  Nossa plataforma é focada no estado do Maranhão, valorizando e promovendo talentos locais.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Recursos */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-4">
                Recursos Úteis
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Book className="w-16 h-16 text-[#0A1F44] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#0A1F44] mb-4">Guia do Prestador</h3>
                <p className="text-gray-600 mb-4">
                  Aprenda como criar um perfil atrativo e conquistar mais clientes.
                </p>
                <Button variant="outline" className="border-[#0A1F44] text-[#0A1F44] hover:bg-[#0A1F44] hover:text-white">
                  Baixar Guia
                </Button>
              </div>

              <div className="text-center">
                <Users className="w-16 h-16 text-[#0A1F44] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#0A1F44] mb-4">Comunidade</h3>
                <p className="text-gray-600 mb-4">
                  Participe do nosso grupo no WhatsApp e troque experiências.
                </p>
                <Button variant="outline" className="border-[#0A1F44] text-[#0A1F44] hover:bg-[#0A1F44] hover:text-white">
                  Entrar no Grupo
                </Button>
              </div>

              <div className="text-center">
                <MessageCircle className="w-16 h-16 text-[#0A1F44] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#0A1F44] mb-4">Blog</h3>
                <p className="text-gray-600 mb-4">
                  Dicas, tutoriais e novidades sobre empreendedorismo local.
                </p>
                <Button variant="outline" className="border-[#0A1F44] text-[#0A1F44] hover:bg-[#0A1F44] hover:text-white">
                  Visitar Blog
                </Button>
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
