
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { UserCheck, Camera, MessageCircle, Star, TrendingUp, DollarSign, Award, Users, Shield, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';

const AreaPrestador = () => {
  const benefits = [
    {
      icon: <MessageCircle className="w-16 h-16 text-[#0A1F44] mx-auto mb-4" />,
      title: "Receba Solicitações",
      description: "Clientes interessados entram em contato diretamente com você para solicitar orçamentos.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Camera className="w-16 h-16 text-[#0A1F44] mx-auto mb-4" />,
      title: "Mostre seu Trabalho",
      description: "Crie um portfólio com fotos e vídeos dos seus serviços para conquistar mais clientes.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Star className="w-16 h-16 text-[#0A1F44] mx-auto mb-4" />,
      title: "Sistema de Gamificação",
      description: "Ganhe pontos, badges e apareça nos rankings regionais para se destacar da concorrência.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <TrendingUp className="w-16 h-16 text-[#0A1F44] mx-auto mb-4" />,
      title: "Cresça seu Negócio",
      description: "Receba orientações sobre como precificar serviços, atendimento ao cliente e gestão de MEI.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <DollarSign className="w-16 h-16 text-[#0A1F44] mx-auto mb-4" />,
      title: "Sem Taxas Abusivas",
      description: "Plataforma gratuita para cadastro e uso. Você fica com 100% do valor dos seus serviços.",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: <UserCheck className="w-16 h-16 text-[#0A1F44] mx-auto mb-4" />,
      title: "Perfil Verificado",
      description: "Tenha um perfil verificado que gera confiança e credibilidade junto aos clientes.",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const achievements = [
    { icon: Star, title: "5 Estrelas", description: "Mantenha alta avaliação", color: "bg-yellow-500" },
    { icon: UserCheck, title: "Confiável", description: "Prestador verificado", color: "bg-blue-500" },
    { icon: TrendingUp, title: "Top Regional", description: "Destaque na sua região", color: "bg-green-500" },
    { icon: Award, title: "Expert", description: "100+ serviços realizados", color: "bg-purple-500" }
  ];

  const quickStats = [
    { icon: Users, text: "Mais de 500 prestadores" },
    { icon: DollarSign, text: "0% de taxa da plataforma" },
    { icon: Shield, text: "Perfil 100% seguro" },
    { icon: Clock, text: "Suporte 24/7" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#0A1F44] via-blue-700 to-blue-800 text-white py-24 overflow-hidden">
          {/* Elementos decorativos */}
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-40 h-40 bg-yellow-400 bg-opacity-20 rounded-full animate-float"></div>
            <div className="absolute bottom-20 left-10 w-32 h-32 bg-white bg-opacity-10 rounded-full animate-bounce delay-500"></div>
            <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-blue-300 bg-opacity-30 rounded-full animate-pulse delay-1000"></div>
          </div>
          
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")'
            }}
          ></div>
          
          <div className="relative container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                  Área do <span className="text-yellow-300">Prestador</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in delay-200">
                  Transforme seu talento em oportunidades de negócio
                </p>
                
                {/* Benefícios rápidos */}
                <div className="grid grid-cols-2 gap-3 mb-8 animate-fade-in delay-400">
                  {quickStats.map((stat, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <stat.icon className="text-yellow-400 flex-shrink-0" size={18} />
                      <span className="text-blue-100 text-sm">{stat.text}</span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-4 animate-fade-in delay-600">
                  <Button className="bg-yellow-400 text-[#0A1F44] px-8 py-4 text-lg font-semibold hover:bg-yellow-300 hover-scale w-full sm:w-auto">
                    Cadastre-se Gratuitamente
                  </Button>
                  <p className="text-lg text-blue-200">
                    <strong className="text-yellow-300">100% Gratuito</strong> • Orientações sobre MEI e precificação
                  </p>
                </div>
              </div>
              
              {/* Imagem com cards flutuantes */}
              <div className="relative animate-fade-in delay-800">
                <img 
                  src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Prestador trabalhando" 
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                />
                
                {/* Cards de destaque */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-white p-4 rounded-xl shadow-lg animate-bounce">
                  <div className="text-xl font-bold">R$ 2.500</div>
                  <div className="text-sm">Média mensal</div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-yellow-400 text-[#0A1F44] p-4 rounded-xl shadow-lg animate-pulse">
                  <div className="text-lg font-bold">Sem taxas</div>
                  <div className="text-sm">100% seu</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefícios melhorados */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-4">
                Por que Escolher Nossa Plataforma?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tudo que você precisa para fazer seu negócio crescer
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="group bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in relative overflow-hidden"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  <div className="relative z-10">
                    {benefit.icon}
                    <h3 className="text-xl font-bold text-[#0A1F44] mb-4 group-hover:text-blue-600 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gamificação melhorada */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-4">
                Sistema de Conquistas
              </h2>
              <p className="text-xl text-gray-600">
                Ganhe reconhecimento e destaque-se na plataforma
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="group bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`${achievement.color} text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <achievement.icon size={32} />
                  </div>
                  <h4 className="font-bold text-[#0A1F44] mb-2 text-lg group-hover:text-blue-600 transition-colors">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {achievement.description}
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
                <div className="text-blue-100">Prestadores Ativos</div>
              </div>
              <div className="animate-fade-in delay-200">
                <div className="text-4xl font-bold text-yellow-400 mb-2">R$ 2.5k</div>
                <div className="text-blue-100">Média Mensal</div>
              </div>
              <div className="animate-fade-in delay-400">
                <div className="text-4xl font-bold text-yellow-400 mb-2">0%</div>
                <div className="text-blue-100">Taxa da Plataforma</div>
              </div>
              <div className="animate-fade-in delay-600">
                <div className="text-4xl font-bold text-yellow-400 mb-2">4.9</div>
                <div className="text-blue-100">Avaliação Média</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section melhorada */}
        <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-6">
                Pronto para Começar?
              </h2>
              <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
                Cadastre-se gratuitamente e comece a receber solicitações de clientes hoje mesmo.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#0A1F44] text-white px-8 py-4 text-lg font-semibold hover:bg-blue-900 hover-scale">
                  Criar Conta de Prestador
                </Button>
                <Button variant="outline" className="border-[#0A1F44] text-[#0A1F44] px-8 py-4 text-lg font-semibold hover:bg-[#0A1F44] hover:text-white">
                  Ver Como Funciona
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

export default AreaPrestador;
