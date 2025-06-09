
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Search, Star, MessageCircle, FileText, Shield, Clock, CheckCircle, Users, TrendingUp } from 'lucide-react';
import { Button } from '../components/ui/button';

const AreaCliente = () => {
  const features = [
    {
      icon: <Search className="w-16 h-16 text-[#0A1F44] mx-auto mb-4" />,
      title: "Busque Profissionais",
      description: "Use nossa busca inteligente para encontrar o profissional ideal por serviço, localização e avaliação.",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: <MessageCircle className="w-16 h-16 text-[#0A1F44] mx-auto mb-4" />,
      title: "Solicite Orçamentos",
      description: "Entre em contato direto com prestadores e receba orçamentos personalizados rapidamente.",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: <Star className="w-16 h-16 text-[#0A1F44] mx-auto mb-4" />,
      title: "Avalie Serviços",
      description: "Compartilhe sua experiência e ajude outros clientes a encontrar os melhores profissionais.",
      gradient: "from-yellow-500 to-yellow-600"
    },
    {
      icon: <FileText className="w-16 h-16 text-[#0A1F44] mx-auto mb-4" />,
      title: "Histórico Completo",
      description: "Acompanhe todos os seus serviços, orçamentos e avaliações em um só lugar.",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: <Shield className="w-16 h-16 text-[#0A1F44] mx-auto mb-4" />,
      title: "Segurança Total",
      description: "Todos os prestadores são verificados e avaliados pela nossa comunidade.",
      gradient: "from-red-500 to-red-600"
    },
    {
      icon: <Clock className="w-16 h-16 text-[#0A1F44] mx-auto mb-4" />,
      title: "Atendimento Rápido",
      description: "Conecte-se com profissionais disponíveis e resolva suas necessidades com agilidade.",
      gradient: "from-indigo-500 to-indigo-600"
    }
  ];

  const benefits = [
    { icon: CheckCircle, text: "Cadastro 100% gratuito" },
    { icon: Users, text: "Mais de 500 profissionais" },
    { icon: Star, text: "Avaliações verificadas" },
    { icon: Shield, text: "Prestadores confiáveis" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#0A1F44] via-blue-700 to-blue-800 text-white py-24 overflow-hidden">
          {/* Elementos decorativos animados */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400 bg-opacity-20 rounded-full animate-bounce delay-300"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-white bg-opacity-10 rounded-full animate-pulse delay-700"></div>
            <div className="absolute bottom-20 left-1/3 w-16 h-16 bg-blue-300 bg-opacity-30 rounded-full animate-float"></div>
          </div>
          
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")'
            }}
          ></div>
          
          <div className="relative container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                  Área do <span className="text-yellow-300">Cliente</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in delay-200">
                  Encontre os melhores profissionais do Maranhão
                </p>
                
                {/* Benefícios em linha */}
                <div className="grid grid-cols-2 gap-4 mb-8 animate-fade-in delay-400">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <benefit.icon className="text-yellow-400 flex-shrink-0" size={20} />
                      <span className="text-blue-100 text-sm">{benefit.text}</span>
                    </div>
                  ))}
                </div>
                
                <Button className="bg-yellow-400 text-[#0A1F44] px-8 py-4 text-lg font-semibold hover:bg-yellow-300 hover-scale animate-fade-in delay-600">
                  Cadastre-se Gratuitamente
                </Button>
              </div>
              
              {/* Imagem com estatísticas flutuantes */}
              <div className="relative animate-fade-in delay-800">
                <img 
                  src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Cliente satisfeito" 
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                />
                
                {/* Cards flutuantes */}
                <div className="absolute -top-4 -right-4 bg-white text-[#0A1F44] p-4 rounded-xl shadow-lg animate-bounce">
                  <div className="text-2xl font-bold">4.9</div>
                  <div className="text-sm text-gray-600">Avaliação média</div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-green-500 text-white p-4 rounded-xl shadow-lg animate-pulse">
                  <div className="text-xl font-bold">24h</div>
                  <div className="text-sm">Resposta média</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Funcionalidades melhoradas */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-4">
                Como Funciona para Você
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Um processo simples e seguro para encontrar o profissional ideal
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="group bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in border-t-4 border-transparent hover:border-[#0A1F44]"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative">
                    {feature.icon}
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-full transition-opacity duration-300`}></div>
                  </div>
                  <h3 className="text-xl font-bold text-[#0A1F44] mb-4 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seção de estatísticas */}
        <section className="py-16 bg-[#0A1F44] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-[#0A1F44]"></div>
          <div className="relative container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="animate-fade-in">
                <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
                <div className="text-blue-100">Profissionais</div>
              </div>
              <div className="animate-fade-in delay-200">
                <div className="text-4xl font-bold text-yellow-400 mb-2">1000+</div>
                <div className="text-blue-100">Serviços Realizados</div>
              </div>
              <div className="animate-fade-in delay-400">
                <div className="text-4xl font-bold text-yellow-400 mb-2">4.9</div>
                <div className="text-blue-100">Avaliação Média</div>
              </div>
              <div className="animate-fade-in delay-600">
                <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-blue-100">Suporte</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section melhorada */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-6">
                Pronto para Encontrar o Profissional Ideal?
              </h2>
              <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
                Cadastre-se gratuitamente e tenha acesso aos melhores prestadores de serviço do Maranhão.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#0A1F44] text-white px-8 py-4 text-lg font-semibold hover:bg-blue-900 hover-scale">
                  Criar Conta de Cliente
                </Button>
                <Button variant="outline" className="border-[#0A1F44] text-[#0A1F44] px-8 py-4 text-lg font-semibold hover:bg-[#0A1F44] hover:text-white">
                  Ver Demonstração
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

export default AreaCliente;
