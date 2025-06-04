
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Search, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SearchSection = () => {
  const [servico, setServico] = useState('');
  const [cidade, setCidade] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

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
  // Redireciona para área do cliente com parâmetros de busca
  const handleSearch = () => {
    const params = new URLSearchParams();
    if (servico) params.append('servico', servico);
    if (cidade) params.append('cidade', cidade);
    if (searchTerm) params.append('busca', searchTerm);
    
    console.log('Realizando busca com parâmetros:', { servico, cidade, searchTerm });
    navigate(`/area-cliente?${params.toString()}`);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-4">
            Encontre o Serviço Ideal
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Busque por categoria, localização ou digite o que você precisa
          </p>
        </div>

        {/* Formulário de busca */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-6 shadow-lg">
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de Serviço
                </label>
                <Select value={servico} onValueChange={setServico}>
                  <SelectTrigger>
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

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cidade
                </label>
                <Select value={cidade} onValueChange={setCidade}>
                  <SelectTrigger>
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

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Busca Livre
                </label>
                <Input
                  placeholder="Digite o que você procura..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
              </div>
            </div>

            <div className="text-center">
              <Button 
                onClick={handleSearch}
                size="lg" 
                className="bg-[#0A1F44] text-white hover:bg-blue-900 px-8 flex items-center space-x-2 mx-auto"
              >
                <Search size={20} />
                <span>Buscar Prestadores</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Sugestões rápidas */}
        <div className="max-w-4xl mx-auto mt-8">
          <p className="text-center text-gray-600 mb-4">Buscas populares:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Eletricista', 'Encanador', 'Pintor', 'Faxineira', 'Jardineiro', 'Designer'].map((item) => (
              <Button
                key={item}
                variant="outline"
                size="sm"
                onClick={() => {
                  setServico(item);
                  handleSearch();
                }}
                className="border-gray-300 text-gray-600 hover:border-[#0A1F44] hover:text-[#0A1F44]"
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
