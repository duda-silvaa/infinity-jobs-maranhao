
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Search, MapPin, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const SearchSection = () => {
  const [servico, setServico] = useState('');
  const [cidade, setCidade] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const servicos = [
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

  const cidades = [
    'São Luís',
    'Imperatriz',
    'Timon',
    'Caxias',
    'Codó',
    'Açailândia',
    'Bacabal',
    'Balsas',
    'Barra do Corda',
    'Santa Inês'
  ];

  // Função para realizar busca
  const handleSearch = () => {
    console.log('Realizando busca com parâmetros:', { servico, cidade, searchTerm });
    
    // Se o usuário digitou algo na busca livre, usar isso como serviço
    const servicoBusca = searchTerm || servico;
    
    if (isAuthenticated) {
      // Se já estiver logado, vai para o painel do cliente
      navigate('/cliente-panel', { 
        state: { 
          searchParams: { 
            servico: servicoBusca, 
            cidade: cidade 
          } 
        } 
      });
    } else {
      // Se não estiver logado, vai para área do cliente para fazer login
      const params = new URLSearchParams();
      if (servicoBusca) params.append('servico', servicoBusca);
      if (cidade) params.append('cidade', cidade);
      
      navigate(`/area-cliente?${params.toString()}`);
    }
  };

  // Função para busca rápida por categoria
  const handleQuickSearch = (categoria: string) => {
    console.log('Busca rápida por:', categoria);
    setServico(categoria);
    setSearchTerm('');
    
    // Executa a busca automaticamente
    setTimeout(() => {
      if (isAuthenticated) {
        navigate('/cliente-panel', { 
          state: { 
            searchParams: { 
              servico: categoria, 
              cidade: cidade 
            } 
          } 
        });
      } else {
        const params = new URLSearchParams();
        params.append('servico', categoria);
        if (cidade) params.append('cidade', cidade);
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
            Busque por categoria, localização ou digite o que você precisa
          </p>
        </div>

        {/* Formulário de busca */}
        <div className="max-w-4xl mx-auto animate-fade-in delay-200">
          <div className="bg-white rounded-lg p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Tipo de Serviço
                </label>
                <Select value={servico} onValueChange={setServico}>
                  <SelectTrigger className="hover:border-[#0A1F44] transition-colors">
                    <SelectValue placeholder="Selecione o serviço" />
                  </SelectTrigger>
                  <SelectContent>
                    {servicos.map((s) => (
                      <SelectItem key={s} value={s}>
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  <MapPin className="inline mr-1" size={16} />
                  Cidade
                </label>
                <Select value={cidade} onValueChange={setCidade}>
                  <SelectTrigger className="hover:border-[#0A1F44] transition-colors">
                    <SelectValue placeholder="Selecione a cidade" />
                  </SelectTrigger>
                  <SelectContent>
                    {cidades.map((c) => (
                      <SelectItem key={c} value={c}>
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Busca Livre
                </label>
                <Input
                  placeholder="Digite o que você procura..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  className="hover:border-[#0A1F44] transition-colors"
                />
              </div>
            </div>

            <div className="text-center">
              <Button 
                onClick={handleSearch}
                size="lg" 
                className="bg-gradient-to-r from-[#0A1F44] to-blue-600 text-white hover:from-blue-900 hover:to-blue-700 px-8 flex items-center space-x-2 mx-auto hover-scale transition-all duration-300"
              >
                <Search size={20} />
                <span>Buscar Prestadores</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Sugestões rápidas com animação */}
        <div className="max-w-4xl mx-auto mt-8 animate-fade-in delay-400">
          <p className="text-center text-gray-600 mb-4">🔥 Buscas populares:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Eletricista', 'Encanador', 'Pintor', 'Faxineira', 'Jardineiro', 'Designer'].map((item, index) => (
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
