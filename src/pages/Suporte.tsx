
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
  Send
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

  // Função para enviar mensagem de suporte
  // Envia dados para o backend no endpoint POST /api/suporte/contato
  // Espera receber: { message: string, ticket_id: string }
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
      
      // Simulação da chamada API - substituir pela chamada real
      // const response = await fetch('/api/suporte/contato', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      
      // Simulação de sucesso
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

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="text-center mb-12">
            <img 
              src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Equipe de suporte"
              className="w-full max-w-2xl mx-auto h-64 object-cover rounded-lg mb-8"
            />
            <h1 className="text-4xl md:text-5xl font-bold text-[#0A1F44] mb-4">
              Como Podemos Ajudar?
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossa equipe está pronta para esclarecer suas dúvidas e ajudar você a aproveitar ao máximo o Infinity TrabalheJá
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Formulário de contato */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-[#0A1F44]">
                    <MessageCircle size={24} />
                    <span>Envie sua Mensagem</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="nome">Nome Completo</Label>
                        <Input
                          id="nome"
                          type="text"
                          placeholder="Seu nome"
                          value={formData.nome}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">E-mail</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="seu@email.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="assunto">Assunto</Label>
                      <Input
                        id="assunto"
                        type="text"
                        placeholder="Resumo da sua dúvida ou problema"
                        value={formData.assunto}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="mensagem">Mensagem</Label>
                      <Textarea
                        id="mensagem"
                        placeholder="Descreva detalhadamente sua dúvida ou problema..."
                        value={formData.mensagem}
                        onChange={handleInputChange}
                        required
                        rows={5}
                      />
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-[#0A1F44] text-white hover:bg-blue-900 flex items-center justify-center space-x-2"
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

            {/* Informações de contato */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#0A1F44]">Outros Contatos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="text-[#0A1F44]" size={20} />
                    <div>
                      <div className="font-medium">E-mail</div>
                      <div className="text-gray-600">suporte@infinitytrabalhe.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="text-[#0A1F44]" size={20} />
                    <div>
                      <div className="font-medium">Telefone</div>
                      <div className="text-gray-600">(98) 3333-4444</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <MapPin className="text-[#0A1F44]" size={20} />
                    <div>
                      <div className="font-medium">Endereço</div>
                      <div className="text-gray-600">São Luís, MA</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="text-[#0A1F44]" size={20} />
                    <div>
                      <div className="font-medium">Horário</div>
                      <div className="text-gray-600">Seg-Sex: 8h às 18h</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-[#0A1F44]">
                    <HelpCircle size={24} />
                    <span>Perguntas Frequentes</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {faqItems.map((item, index) => (
                    <div key={index} className="border-b border-gray-200 pb-3 last:border-b-0">
                      <div className="font-medium text-[#0A1F44] mb-2">
                        {item.pergunta}
                      </div>
                      <div className="text-gray-600 text-sm">
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
