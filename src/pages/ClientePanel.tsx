
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Calendar, MapPin, Star, MessageCircle, Clock, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '../components/ui/button';

const ClientePanel = () => {
  const [activeTab, setActiveTab] = useState('solicitacoes');

  const solicitacoes = [
    {
      id: 1,
      servico: 'Limpeza Residencial',
      prestador: 'Maria Silva Santos',
      data: '2025-01-15',
      horario: '14:00',
      endereco: 'Rua das Flores, 123 - Centro, São Luís',
      status: 'confirmado',
      preco: 'R$ 120,00',
      foto: 'https://images.unsplash.com/photo-1494790108755-2616b332c634?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 2,
      servico: 'Reparo Elétrico',
      prestador: 'João Carlos Oliveira',
      data: '2025-01-18',
      horario: '09:00',
      endereco: 'Av. dos Holandeses, 456 - Calhau, São Luís',
      status: 'pendente',
      preco: 'R$ 180,00',
      foto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 3,
      servico: 'Pintura de Quarto',
      prestador: 'Ana Paula Costa',
      data: '2025-01-12',
      horario: '08:00',
      endereco: 'Residencial Vinhais, 789 - Vinhais, São Luís',
      status: 'concluido',
      preco: 'R$ 350,00',
      foto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmado': return 'text-green-600 bg-green-100';
      case 'pendente': return 'text-yellow-600 bg-yellow-100';
      case 'concluido': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmado': return <CheckCircle size={16} />;
      case 'pendente': return <Clock size={16} />;
      case 'concluido': return <CheckCircle size={16} />;
      default: return <XCircle size={16} />;
    }
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
                  Bem-vindo, João!
                </h1>
                <p className="text-gray-600">
                  Gerencie seus serviços e acompanhe suas solicitações
                </p>
              </div>
              <Button className="bg-[#0A1F44] text-white">
                Solicitar Novo Serviço
              </Button>
            </div>
          </div>

          {/* Estatísticas Rápidas */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Calendar className="w-12 h-12 text-[#0A1F44] mx-auto mb-2" />
              <h3 className="text-2xl font-bold text-[#0A1F44]">3</h3>
              <p className="text-gray-600">Serviços Agendados</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-2" />
              <h3 className="text-2xl font-bold text-[#0A1F44]">12</h3>
              <p className="text-gray-600">Serviços Concluídos</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Star className="w-12 h-12 text-yellow-500 mx-auto mb-2" />
              <h3 className="text-2xl font-bold text-[#0A1F44]">4.8</h3>
              <p className="text-gray-600">Avaliação Média</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <MessageCircle className="w-12 h-12 text-blue-600 mx-auto mb-2" />
              <h3 className="text-2xl font-bold text-[#0A1F44]">2</h3>
              <p className="text-gray-600">Mensagens Novas</p>
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
                <div className="space-y-6">
                  {solicitacoes.map((solicitacao) => (
                    <div key={solicitacao.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4">
                          <img
                            src={solicitacao.foto}
                            alt={solicitacao.prestador}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <h3 className="font-bold text-[#0A1F44] text-lg mb-1">
                              {solicitacao.servico}
                            </h3>
                            <p className="text-gray-600 mb-2">
                              com {solicitacao.prestador}
                            </p>
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <div className="flex items-center space-x-1">
                                <Calendar size={16} />
                                <span>{solicitacao.data}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock size={16} />
                                <span>{solicitacao.horario}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MapPin size={16} />
                                <span>{solicitacao.endereco}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(solicitacao.status)}`}>
                            {getStatusIcon(solicitacao.status)}
                            <span className="capitalize">{solicitacao.status}</span>
                          </div>
                          <p className="text-lg font-bold text-[#0A1F44] mt-2">
                            {solicitacao.preco}
                          </p>
                          <div className="flex space-x-2 mt-3">
                            <Button size="sm" variant="outline">
                              <MessageCircle size={16} className="mr-1" />
                              Chat
                            </Button>
                            {solicitacao.status === 'concluido' && (
                              <Button size="sm" className="bg-[#0A1F44]">
                                <Star size={16} className="mr-1" />
                                Avaliar
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'favoritos' && (
                <div className="text-center py-12">
                  <Star className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-600 mb-2">
                    Nenhum prestador favoritado ainda
                  </h3>
                  <p className="text-gray-500">
                    Favorite prestadores para acessá-los rapidamente
                  </p>
                </div>
              )}

              {activeTab === 'historico' && (
                <div className="text-center py-12">
                  <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-600 mb-2">
                    Histórico de Serviços
                  </h3>
                  <p className="text-gray-500">
                    Aqui você verá todos os serviços já realizados
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
