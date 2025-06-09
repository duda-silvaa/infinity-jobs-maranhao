
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { useToast } from '../hooks/use-toast';
import { 
  MessageCircle, 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  HelpCircle,
  Send,
  CheckCircle,
  Users,
  Headphones,
  Shield
} from 'lucide-react';

const Suporte = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nome || !formData.email || !formData.assunto || !formData.mensagem) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      console.log('Enviando mensagem de suporte...');
      
      // Simulação da chamada API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Nossa equipe entrará em contato em breve.",
      });
      
      console.log('Mensagem de suporte enviada');
      
      // Reset form
      setFormData({
        nome: '',
        email: '',
        assunto: '',
        mensagem: ''
      });
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente ou entre em contato por telefone.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const faqItems = [
    {
      pergunta: "Como funciona o Infinity TrabalheJá?",
      resposta: "O Infinity TrabalheJá conecta clientes que precisam de serviços com prestadores qualificados em todo o Maranhão. Clientes fazem solicitações e prestadores enviam propostas."
    },
    {
      pergunta: "Como me cadastrar como prestador?",
      resposta: "Clique em 'Cadastrar', selecione 'Prestador', preencha seus dados e sua especialidade. Depois é só aguardar a aprovação e começar a receber solicitações."
    },
    {
      pergunta: "É seguro contratar pelo app?",
      resposta: "Sim! Todos os prestadores passam por verificação. Além disso, você pode ver avaliações de outros clientes antes de contratar."
    },
    {
      pergunta: "Como funciona o pagamento?",
      resposta: "O pagamento é combinado diretamente entre cliente e prestador. Recomendamos sempre combinar os valores antes de iniciar o serviço."
    }
  ];

  const supportFeatures = [
    {
      icon: <Headphones className="w-12 h-12 text-[#0A1F44]" />,
      title: "Suporte 24/7",
      description: "Nossa equipe está sempre disponível para ajudar você"
    },
    {
      icon: <Users className="w-12 h-12 text-[#0A1F44]" />,
      title: "Equipe Especializada",
      description: "Profissionais treinados para resolver suas dúvidas"
    },
    {
      icon: <Shield className="w-12 h-12 text-[#0A1F44]" />,
      title: "Ambiente Seguro",
      description: "Seus dados estão protegidos e seguros conosco"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16 pb-16">
        {/* Hero Section melhorada */}
        <section className="bg-gradient-to-br from-[#0A1F44] via-blue-700 to-blue-800 text-white py-20 relative overflow-hidden">
          {/* Elementos decorativos */}
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-400 bg-opacity-20 rounded-full animate-float"></div>
            <div className="absolute bottom-20 left-10 w-24 h-24 bg-white bg-opacity-10 rounded-full animate-bounce delay-300"></div>
          </div>
          
          <div className="relative container mx-auto px-4 text-center">
            <div className="mb-8">
              <img 
                src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Equipe de suporte"
                className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-yellow-400 animate-fade-in"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in delay-200">
              Como Podemos <span className="text-yellow-300">Ajudar</span>?
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto animate-fade-in delay-400">
              Nossa equipe está pronta para esclarecer suas dúvidas e ajudar você a aproveitar ao máximo o Infinity TrabalheJá
            </p>
          </div>
        </section>

        {/* Features do suporte */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {supportFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-[#0A1F44] mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Formulário de contato melhorado */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl border-0">
                <CardHeader className="bg-gradient-to-r from-[#0A1F44] to-blue-600 text-white rounded-t-lg">
                  <CardTitle className="flex items-center space-x-2 text-xl">
                    <MessageCircle size={24} />
                    <span>Envie sua Mensagem</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="nome" className="text-[#0A1F44] font-medium">Nome Completo</Label>
                        <Input
                          id="nome"
                          type="text"
                          placeholder="Seu nome"
                          value={formData.nome}
                          onChange={handleInputChange}
                          required
                          className="border-2 border-gray-200 focus:border-[#0A1F44] transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-[#0A1F44] font-medium">E-mail</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="seu@email.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="border-2 border-gray-200 focus:border-[#0A1F44] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="assunto" className="text-[#0A1F44] font-medium">Assunto</Label>
                      <Input
                        id="assunto"
                        type="text"
                        placeholder="Resumo da sua dúvida ou problema"
                        value={formData.assunto}
                        onChange={handleInputChange}
                        required
                        className="border-2 border-gray-200 focus:border-[#0A1F44] transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mensagem" className="text-[#0A1F44] font-medium">Mensagem</Label>
                      <Textarea
                        id="mensagem"
                        placeholder="Descreva detalhadamente sua dúvida ou problema..."
                        value={formData.mensagem}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="border-2 border-gray-200 focus:border-[#0A1F44] transition-colors resize-none"
                      />
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-[#0A1F44] text-white hover:bg-blue-900 flex items-center justify-center space-x-2 py-3 text-lg hover-scale"
                      disabled={loading}
                    >
                      {loading ? (
                        <span>Enviando...</span>
                      ) : (
                        <>
                          <Send size={20} />
                          <span>Enviar Mensagem</span>
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar com informações */}
            <div className="space-y-6">
              {/* Contatos */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-[#0A1F44] flex items-center space-x-2">
                    <Phone size={20} />
                    <span>Outros Contatos</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
                    <Mail className="text-[#0A1F44] mt-1" size={20} />
                    <div>
                      <div className="font-medium text-[#0A1F44]">E-mail</div>
                      <div className="text-gray-600">suporte@infinitytrabalhe.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
                    <Phone className="text-[#0A1F44] mt-1" size={20} />
                    <div>
                      <div className="font-medium text-[#0A1F44]">Telefone</div>
                      <div className="text-gray-600">(98) 3333-4444</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-yellow-50 rounded-lg">
                    <MapPin className="text-[#0A1F44] mt-1" size={20} />
                    <div>
                      <div className="font-medium text-[#0A1F44]">Endereço</div>
                      <div className="text-gray-600">São Luís, MA</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg">
                    <Clock className="text-[#0A1F44] mt-1" size={20} />
                    <div>
                      <div className="font-medium text-[#0A1F44]">Horário</div>
                      <div className="text-gray-600">Seg-Sex: 8h às 18h</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ melhorada */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-[#0A1F44]">
                    <HelpCircle size={24} />
                    <span>Perguntas Frequentes</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {faqItems.map((item, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="font-medium text-[#0A1F44] mb-3 flex items-start space-x-2">
                        <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                        <span>{item.pergunta}</span>
                      </div>
                      <div className="text-gray-600 text-sm pl-6">
                        {item.resposta}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Suporte;
