
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Star, MessageCircle, Calendar, DollarSign, TrendingUp, Award, Camera, Bell } from 'lucide-react';
import { Button } from '../components/ui/button';

const PrestadorPanel = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const solicitacoes = [
    {
      id: 1,
      cliente: 'Maria Santos',
      servico: 'Limpeza Residencial',
      data: '2025-01-16',
      valor: 'R$ 120,00',
      status: 'nova',
      urgencia: 'normal'
    },
    {
      id: 2,
      cliente: 'Carlos Oliveira',
      servico: 'Reparo de Torneira',
      data: '2025-01-15',
      valor: 'R$ 80,00',
      status: 'respondida',
      urgencia: 'urgente'
    },
    {
      id: 3,
      cliente: 'Ana Costa',
      servico: 'Pintura de Sala',
      data: '2025-01-18',
      valor: 'R$ 300,00',
      status: 'aceita',
      urgencia: 'normal'
    }
  ];

  const conquistas = [
    { nome: '5 Estrelas', descricao: 'Mantenha avaliação máxima', progresso: 100, cor: 'yellow' },
    { nome: 'Confiável', descricao: 'Complete 10 serviços', progresso: 80, cor: 'blue' },
    { nome: 'Expert', descricao: 'Realize 50 serviços', progresso: 45, cor: 'purple' },
    { nome: 'Top Regional', descricao: 'Entre no top 10 da região', progresso: 65, cor: 'green' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-16 pb-16">
        <div className="container mx-auto px-4">
          {/* Header do Painel */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                  alt="Perfil"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h1 className="text-3xl font-bold text-[#0A1F44] mb-1">
                    João Técnico Silva
                  </h1>
                  <p className="text-gray-600">Eletricista • São Luís, MA</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">4.9 (127 avaliações)</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <Button className="bg-[#0A1F44] text-white mb-2">
                  <Camera size={16} className="mr-2" />
                  Atualizar Portfólio
                </Button>
                <p className="text-sm text-gray-600">
                  Perfil verificado ✓
                </p>
              </div>
            </div>
          </div>

          {/* Estatísticas Rápidas */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Bell className="w-12 h-12 text-[#0A1F44] mx-auto mb-2" />
              <h3 className="text-2xl font-bold text-[#0A1F44]">3</h3>
              <p className="text-gray-600">Novas Solicitações</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Calendar className="w-12 h-12 text-green-600 mx-auto mb-2" />
              <h3 className="text-2xl font-bold text-[#0A1F44]">5</h3>
              <p className="text-gray-600">Serviços esta Semana</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <DollarSign className="w-12 h-12 text-blue-600 mx-auto mb-2" />
              <h3 className="text-2xl font-bold text-[#0A1F44]">R$ 1.250</h3>
              <p className="text-gray-600">Ganhos este Mês</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <TrendingUp className="w-12 h-12 text-purple-600 mx-auto mb-2" />
              <h3 className="text-2xl font-bold text-[#0A1F44]">#5</h3>
              <p className="text-gray-600">Ranking Regional</p>
            </div>
          </div>

          {/* Tabs de Navegação */}
          <div className="bg-white rounded-lg shadow-lg">
            <div className="border-b border-gray-200">
              <nav className="flex">
                <button
                  onClick={() => setActiveTab('dashboard')}
                  className={`px-6 py-4 font-medium ${
                    activeTab === 'dashboard'
                      ? 'text-[#0A1F44] border-b-2 border-[#0A1F44]'
                      : 'text-gray-500 hover:text-[#0A1F44]'
                  }`}
                >
                  Dashboard
                </button>
                <button
                  onClick={() => setActiveTab('solicitacoes')}
                  className={`px-6 py-4 font-medium relative ${
                    activeTab === 'solicitacoes'
                      ? 'text-[#0A1F44] border-b-2 border-[#0A1F44]'
                      : 'text-gray-500 hover:text-[#0A1F44]'
                  }`}
                >
                  Solicitações
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    3
                  </span>
                </button>
                <button
                  onClick={() => setActiveTab('conquistas')}
                  className={`px-6 py-4 font-medium ${
                    activeTab === 'conquistas'
                      ? 'text-[#0A1F44] border-b-2 border-[#0A1F44]'
                      : 'text-gray-500 hover:text-[#0A1F44]'
                  }`}
                >
                  Conquistas
                </button>
                <button
                  onClick={() => setActiveTab('portfolio')}
                  className={`px-6 py-4 font-medium ${
                    activeTab === 'portfolio'
                      ? 'text-[#0A1F44] border-b-2 border-[#0A1F44]'
                      : 'text-gray-500 hover:text-[#0A1F44]'
                  }`}
                >
                  Portfólio
                </button>
              </nav>
            </div>

            <div className="p-6">
              {activeTab === 'dashboard' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-r from-[#0A1F44] to-blue-800 text-white p-6 rounded-lg">
                      <h3 className="text-xl font-bold mb-4">Próximos Serviços</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span>Limpeza - Maria Santos</span>
                          <span className="text-sm">Hoje, 14:00</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Reparo - Carlos Oliveira</span>
                          <span className="text-sm">Amanhã, 09:00</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-green-800 mb-4">Meta do Mês</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-green-700">Serviços Realizados</span>
                          <span className="font-bold text-green-800">18/25</span>
                        </div>
                        <div className="w-full bg-green-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{ width: '72%' }}></div>
                        </div>
                        <p className="text-sm text-green-600">Faltam apenas 7 serviços!</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'solicitacoes' && (
                <div className="space-y-4">
                  {solicitacoes.map((solicitacao) => (
                    <div key={solicitacao.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-bold text-[#0A1F44] text-lg">
                              {solicitacao.servico}
                            </h3>
                            {solicitacao.urgencia === 'urgente' && (
                              <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                                Urgente
                              </span>
                            )}
                          </div>
                          <p className="text-gray-600 mb-2">Cliente: {solicitacao.cliente}</p>
                          <p className="text-sm text-gray-500">Data solicitada: {solicitacao.data}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-[#0A1F44] mb-2">
                            {solicitacao.valor}
                          </p>
                          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                            solicitacao.status === 'nova' ? 'bg-blue-100 text-blue-800' :
                            solicitacao.status === 'respondida' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {solicitacao.status === 'nova' ? 'Nova' :
                             solicitacao.status === 'respondida' ? 'Respondida' : 'Aceita'}
                          </span>
                          <div className="flex space-x-2 mt-3">
                            <Button size="sm" variant="outline">
                              <MessageCircle size={16} className="mr-1" />
                              Responder
                            </Button>
                            {solicitacao.status === 'nova' && (
                              <Button size="sm" className="bg-[#0A1F44]">
                                Aceitar
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'conquistas' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {conquistas.map((conquista, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                          conquista.cor === 'yellow' ? 'bg-yellow-100' :
                          conquista.cor === 'blue' ? 'bg-blue-100' :
                          conquista.cor === 'purple' ? 'bg-purple-100' : 'bg-green-100'
                        }`}>
                          <Award className={`w-8 h-8 ${
                            conquista.cor === 'yellow' ? 'text-yellow-600' :
                            conquista.cor === 'blue' ? 'text-blue-600' :
                            conquista.cor === 'purple' ? 'text-purple-600' : 'text-green-600'
                          }`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-[#0A1F44] text-lg">{conquista.nome}</h3>
                          <p className="text-gray-600 text-sm">{conquista.descricao}</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progresso</span>
                          <span>{conquista.progresso}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              conquista.cor === 'yellow' ? 'bg-yellow-500' :
                              conquista.cor === 'blue' ? 'bg-blue-500' :
                              conquista.cor === 'purple' ? 'bg-purple-500' : 'bg-green-500'
                            }`}
                            style={{ width: `${conquista.progresso}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'portfolio' && (
                <div>
                  <div className="mb-6 flex justify-between items-center">
                    <h3 className="text-xl font-bold text-[#0A1F44]">Meu Portfólio</h3>
                    <Button className="bg-[#0A1F44]">
                      <Camera size={16} className="mr-2" />
                      Adicionar Foto
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      'https://images.unsplash.com/photo-1621905252472-e8b3191aa262?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
                      'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
                      'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
                    ].map((foto, index) => (
                      <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src={foto} alt={`Trabalho ${index + 1}`} className="w-full h-48 object-cover" />
                        <div className="p-4">
                          <h4 className="font-bold text-[#0A1F44] mb-2">Instalação Elétrica</h4>
                          <p className="text-gray-600 text-sm">Cliente muito satisfeito com o resultado!</p>
                        </div>
                      </div>
                    ))}
                  </div>
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

export default PrestadorPanel;
