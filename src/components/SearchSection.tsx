
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Search, Sparkles, TrendingUp, Star, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const SearchSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  // Serviços disponíveis na home - mesmos do MainServices
  const servicosDisponiveis = [
    'Reparos Gerais',
    'Limpeza Residencial', 
    'Serviços Elétricos',
    'Pintura',
    'Jardinagem',
    'Mecânica Automotiva',
    'Design Gráfico',
    'Desenvolvimento Web',
    'Consultoria',
    'Fotografia'
  ];

  // Função para realizar busca
  const handleSearch = () => {
    console.log('Realizando busca com termo:', searchTerm);
    
    if (searchTerm.trim()) {
      // Busca por correspondência parcial nos serviços disponíveis
      const servicoEncontrado = servicosDisponiveis.find(servico => 
        servico.toLowerCase().includes(searchTerm.toLowerCase()) ||
        searchTerm.toLowerCase().includes(servico.toLowerCase().split(' ')[0]) // busca pela primeira palavra
      );

      console.log('Serviço encontrado:', servicoEncontrado);

      if (isAuthenticated) {
        navigate('/cliente-panel', { 
          state: { 
            searchParams: { 
              servico: servicoEncontrado || searchTerm,
              cidade: ''
            } 
          } 
        });
      } else {
        const params = new URLSearchParams();
        params.append('servico', servicoEncontrado || searchTerm);
        navigate(`/area-cliente?${params.toString()}`);
      }
    }
  };

  // Função para busca rápida por categoria
  const handleQuickSearch = (categoria: string) => {
    console.log('Busca rápida por:', categoria);
    setSearchTerm(categoria);
    
    setTimeout(() => {
      if (isAuthenticated) {
        navigate('/cliente-panel', { 
          state: { 
            searchParams: { 
              servico: categoria,
              cidade: ''
            } 
          } 
        });
      } else {
        const params = new URLSearchParams();
        params.append('servico', categoria);
        navigate(`/area-cliente?${params.toString()}`);
      }
    }, 100);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-white relative overflow-hidden">
      {/* Elementos decorativos animados */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 bg-opacity-10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-400 bg-opacity-10 rounded-full animate-pulse delay-500"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="text-yellow-500 mr-2 animate-pulse" size={32} />
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44]">
              Encontre o Serviço Ideal
            </h2>
            <Sparkles className="text-yellow-500 ml-2 animate-pulse" size={32} />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Digite o que você precisa e encontre profissionais qualificados
          </p>
        </div>

        {/* Grid com busca e estatísticas */}
        <div className="max-w-6xl mx-auto animate-fade-in delay-200">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            
            {/* Estatísticas à esquerda */}
            <div className="bg-gradient-to-br from-[#0A1F44] to-blue-600 text-white rounded-xl p-6 space-y-4">
              <h3 className="text-lg font-bold mb-4">🔥 Em destaque hoje</h3>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                  <TrendingUp size={20} className="text-[#0A1F44]" />
                </div>
                <div>
                  <div className="font-semibold">Limpeza Residencial</div>
                  <div className="text-blue-100 text-sm">+45% buscas hoje</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center">
                  <Users size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold">500+ Profissionais</div>
                  <div className="text-blue-100 text-sm">Ativos no Maranhão</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Star size={20} className="text-[#0A1F44]" />
                </div>
                <div>
                  <div className="font-semibold">4.8/5 Avaliação</div>
                  <div className="text-blue-100 text-sm">Média geral</div>
                </div>
              </div>
            </div>

            {/* Formulário de busca centralizado */}
            <div className="bg-white rounded-xl p-8 shadow-2xl border border-gray-100 hover:shadow-3xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-[#0A1F44] mb-2">Buscar Serviços</h3>
                <p className="text-gray-600 text-sm">O que você precisa hoje?</p>
              </div>

              <div className="space-y-4">
                <div className="relative">
                  <Input
                    placeholder="Ex: Eletricista, Pintor, Limpeza..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                    className="pl-12 h-12 text-lg border-2 hover:border-[#0A1F44] focus:border-[#0A1F44] transition-colors"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                </div>

                <Button 
                  onClick={handleSearch}
                  size="lg" 
                  className="w-full bg-gradient-to-r from-[#0A1F44] to-blue-600 text-white hover:from-blue-900 hover:to-blue-700 h-12 text-lg font-semibold hover-scale transition-all duration-300"
                  disabled={!searchTerm.trim()}
                >
                  <Search size={20} className="mr-2" />
                  Buscar Agora
                </Button>
              </div>
            </div>

            {/* Serviços populares à direita */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A1F44] mb-4">⚡ Serviços Populares</h3>
              <div className="space-y-3">
                {['Reparos Gerais', 'Limpeza Residencial', 'Serviços Elétricos', 'Pintura'].map((servico, index) => (
                  <button
                    key={servico}
                    onClick={() => handleQuickSearch(servico)}
                    className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-[#0A1F44] hover:bg-blue-50 transition-all duration-200 group"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700 group-hover:text-[#0A1F44]">{servico}</span>
                      <span className="text-xs text-gray-500 group-hover:text-blue-600">#{index + 1}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sugestões rápidas */}
        <div className="max-w-4xl mx-auto mt-8 animate-fade-in delay-400">
          <p className="text-center text-gray-600 mb-4">🔍 Ou escolha uma categoria:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Design Gráfico', 'Jardinagem', 'Mecânica Automotiva', 'Fotografia', 'Consultoria', 'Desenvolvimento Web'].map((item, index) => (
              <Button
                key={item}
                variant="outline"
                size="sm"
                onClick={() => handleQuickSearch(item)}
                className="border-gray-300 text-gray-600 hover:border-[#0A1F44] hover:text-[#0A1F44] hover:bg-blue-50 transition-all duration-300 hover-scale"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
