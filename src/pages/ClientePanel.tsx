
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SolicitarServicoModal from '../components/SolicitarServicoModal';
import ListaSolicitacoes from '../components/ListaSolicitacoes';
import { Calendar, MapPin, Star, MessageCircle, Clock, CheckCircle, XCircle, Plus } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../hooks/use-toast';

const ClientePanel = () => {
  const [activeTab, setActiveTab] = useState('solicitacoes');
  const [refreshSolicitacoes, setRefreshSolicitacoes] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();

  // Função para atualizar lista de solicitações após criar nova
  const handleSolicitacaoCreated = () => {
    console.log('Nova solicitação criada, atualizando lista...');
    setRefreshSolicitacoes(true);
  };

  const handleRefreshComplete = () => {
    setRefreshSolicitacoes(false);
  };

  // Dados estáticos para quando não há solicitações reais
  const prestadoresFavoritos = [
    {
      id: 1,
      nome: 'Maria Silva Santos',
      servico: 'Limpeza Residencial',
      avaliacao: 4.9,
      foto: 'https://images.unsplash.com/photo-1494790108755-2616b332c634?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 2,
      nome: 'João Carlos Oliveira',
      servico: 'Serviços Elétricos',
      avaliacao: 4.8,
      foto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    }
  ];

  const handleChat = (prestadorId: number) => {
    toast({
      title: "Chat iniciado!",
      description: "Funcionalidade de chat será implementada em breve.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-16 pb-16">
        <div className="container mx-auto px-4">
          {/* Header do Painel */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-[#0A1F44] mb-2">
                  Bem-vindo, {user?.name.split(' ')[0]}!
                </h1>
                <p className="text-gray-600">
                  Gerencie seus serviços e acompanhe suas solicitações
                </p>
              </div>
              <SolicitarServicoModal onSolicitacaoCreated={handleSolicitacaoCreated}>
                <Button className="bg-[#0A1F44] text-white hover:bg-blue-900 flex items-center space-x-2">
                  <Plus size={20} />
                  <span>Solicitar Novo Serviço</span>
                </Button>
              </SolicitarServicoModal>
            </div>
          </div>

          {/* Estatísticas Zeradas - Serão atualizadas quando houver dados reais */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Calendar className="w-12 h-12 text-[#0A1F44] mx-auto mb-2" />
              <h3 className="text-2xl font-bold text-[#0A1F44]">0</h3>
              <p className="text-gray-600">Serviços Agendados</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-2" />
              <h3 className="text-2xl font-bold text-[#0A1F44]">0</h3>
              <p className="text-gray-600">Serviços Concluídos</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Star className="w-12 h-12 text-yellow-500 mx-auto mb-2" />
              <h3 className="text-2xl font-bold text-[#0A1F44]">0</h3>
              <p className="text-gray-600">Avaliações Dadas</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <MessageCircle className="w-12 h-12 text-blue-600 mx-auto mb-2" />
              <h3 className="text-2xl font-bold text-[#0A1F44]">0</h3>
              <p className="text-gray-600">Mensagens</p>
            </div>
          </div>

          {/* Tabs de Navegação */}
          <div className="bg-white rounded-lg shadow-lg">
            <div className="border-b border-gray-200">
              <nav className="flex">
                <button
                  onClick={() => setActiveTab('solicitacoes')}
                  className={`px-6 py-4 font-medium ${
                    activeTab === 'solicitacoes'
                      ? 'text-[#0A1F44] border-b-2 border-[#0A1F44]'
                      : 'text-gray-500 hover:text-[#0A1F44]'
                  }`}
                >
                  Minhas Solicitações
                </button>
                <button
                  onClick={() => setActiveTab('favoritos')}
                  className={`px-6 py-4 font-medium ${
                    activeTab === 'favoritos'
                      ? 'text-[#0A1F44] border-b-2 border-[#0A1F44]'
                      : 'text-gray-500 hover:text-[#0A1F44]'
                  }`}
                >
                  Prestadores Favoritos
                </button>
                <button
                  onClick={() => setActiveTab('historico')}
                  className={`px-6 py-4 font-medium ${
                    activeTab === 'historico'
                      ? 'text-[#0A1F44] border-b-2 border-[#0A1F44]'
                      : 'text-gray-500 hover:text-[#0A1F44]'
                  }`}
                >
                  Histórico
                </button>
              </nav>
            </div>

            <div className="p-6">
              {activeTab === 'solicitacoes' && (
                <div>
                  <ListaSolicitacoes 
                    tipo="cliente" 
                    refresh={refreshSolicitacoes}
                    onRefreshComplete={handleRefreshComplete}
                  />
                </div>
              )}

              {activeTab === 'favoritos' && (
                <div className="space-y-4">
                  {prestadoresFavoritos.length === 0 ? (
                    <div className="text-center py-12">
                      <Star className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-600 mb-2">
                        Nenhum prestador favoritado
                      </h3>
                      <p className="text-gray-500">
                        Quando você encontrar prestadores de sua preferência, eles aparecerão aqui
                      </p>
                    </div>
                  ) : (
                    prestadoresFavoritos.map((prestador) => (
                      <div key={prestador.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <img
                              src={prestador.foto}
                              alt={prestador.nome}
                              className="w-16 h-16 rounded-full object-cover"
                            />
                            <div>
                              <h3 className="font-bold text-[#0A1F44] text-lg">
                                {prestador.nome}
                              </h3>
                              <p className="text-gray-600 mb-1">{prestador.servico}</p>
                              <div className="flex items-center">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <Star 
                                    key={star} 
                                    size={16} 
                                    className={`${star <= prestador.avaliacao ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                                  />
                                ))}
                                <span className="ml-2 text-sm text-gray-600">{prestador.avaliacao}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" onClick={() => handleChat(prestador.id)}>
                              <MessageCircle size={16} className="mr-1" />
                              Contatar
                            </Button>
                            <SolicitarServicoModal onSolicitacaoCreated={handleSolicitacaoCreated}>
                              <Button className="bg-[#0A1F44]">
                                Solicitar Serviço
                              </Button>
                            </SolicitarServicoModal>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}

              {activeTab === 'historico' && (
                <div className="text-center py-12">
                  <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-600 mb-2">
                    Nenhum histórico encontrado
                  </h3>
                  <p className="text-gray-500">
                    Quando você utilizar nossos serviços, o histórico aparecerá aqui
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ClientePanel;
