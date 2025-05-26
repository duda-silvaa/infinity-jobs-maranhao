
import React, { useState } from 'react';
import { Search, MapPin, DollarSign, Star } from 'lucide-react';

const SearchSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [rating, setRating] = useState('');

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-4">
            Encontre o Profissional Ideal
          </h2>
          <p className="text-xl text-gray-600">
            Busca inteligente com filtros personalizados
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Busca por serviço */}
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Que serviço você precisa?"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A1F44] focus:border-transparent"
              />
            </div>

            {/* Localização */}
            <div className="relative">
              <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A1F44] focus:border-transparent appearance-none"
              >
                <option value="">Escolha a cidade</option>
                <option value="sao-luis">São Luís</option>
                <option value="imperatriz">Imperatriz</option>
                <option value="timon">Timon</option>
                <option value="caxias">Caxias</option>
                <option value="codó">Codó</option>
                <option value="açailândia">Açailândia</option>
              </select>
            </div>

            {/* Faixa de preço */}
            <div className="relative">
              <DollarSign className="absolute left-3 top-3 text-gray-400" size={20} />
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A1F44] focus:border-transparent appearance-none"
              >
                <option value="">Faixa de preço</option>
                <option value="0-50">Até R$ 50</option>
                <option value="51-100">R$ 51 - R$ 100</option>
                <option value="101-200">R$ 101 - R$ 200</option>
                <option value="201+">Acima de R$ 200</option>
              </select>
            </div>

            {/* Avaliação */}
            <div className="relative">
              <Star className="absolute left-3 top-3 text-gray-400" size={20} />
              <select
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A1F44] focus:border-transparent appearance-none"
              >
                <option value="">Avaliação mínima</option>
                <option value="5">5 estrelas</option>
                <option value="4">4+ estrelas</option>
                <option value="3">3+ estrelas</option>
              </select>
            </div>
          </div>

          <button className="w-full bg-[#0A1F44] text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-900 transition-colors">
            Buscar Profissionais
          </button>
        </div>

        {/* Sugestões de serviços populares */}
        <div className="max-w-4xl mx-auto mt-8">
          <p className="text-center text-gray-600 mb-4">Serviços populares:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['Eletricista', 'Encanador', 'Pintor', 'Pedreiro', 'Jardineiro', 'Faxineira', 'Marceneiro', 'Mecânico'].map((service) => (
              <button
                key={service}
                className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-full hover:bg-[#0A1F44] hover:text-white transition-colors"
              >
                {service}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
