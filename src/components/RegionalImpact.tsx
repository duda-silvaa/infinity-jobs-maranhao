
import React from 'react';
import { MapPin, Heart, Users } from 'lucide-react';

const RegionalImpact = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-4">
            Foco Regional com Impacto Social
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nosso foco é valorizar o profissional local e gerar impacto positivo nas comunidades maranhenses
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mapa ilustrativo */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#0A1F44] to-blue-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Maranhão em Destaque</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <MapPin className="text-white mb-2" size={24} />
                  <h4 className="font-semibold">São Luís</h4>
                  <p className="text-sm opacity-90">1.200+ Prestadores</p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <MapPin className="text-white mb-2" size={24} />
                  <h4 className="font-semibold">Imperatriz</h4>
                  <p className="text-sm opacity-90">800+ Prestadores</p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <MapPin className="text-white mb-2" size={24} />
                  <h4 className="font-semibold">Timon</h4>
                  <p className="text-sm opacity-90">450+ Prestadores</p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <MapPin className="text-white mb-2" size={24} />
                  <h4 className="font-semibold">Outras cidades</h4>
                  <p className="text-sm opacity-90">2.000+ Prestadores</p>
                </div>
              </div>
            </div>
          </div>

          {/* Impacto social */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-[#0A1F44] text-white p-3 rounded-lg">
                <Heart size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0A1F44] mb-2">
                  Programas Sociais
                </h3>
                <p className="text-gray-600">
                  Parcerias com ONGs e programas de capacitação profissional para incluir trabalhadores em situação de vulnerabilidade social.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-[#0A1F44] text-white p-3 rounded-lg">
                <Users size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0A1F44] mb-2">
                  Capacitação Local
                </h3>
                <p className="text-gray-600">
                  Oferecemos orientações sobre MEI, precificação, atendimento ao cliente e boas práticas profissionais.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-[#0A1F44] mb-3">Nossos Números</h4>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-[#0A1F44]">4.5K+</div>
                  <div className="text-sm text-gray-600">Prestadores</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#0A1F44]">12K+</div>
                  <div className="text-sm text-gray-600">Clientes</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#0A1F44]">35K+</div>
                  <div className="text-sm text-gray-600">Serviços</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegionalImpact;
