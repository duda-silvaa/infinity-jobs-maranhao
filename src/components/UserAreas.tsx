
import React from 'react';
import { User, UserCheck, MessageCircle, Star, FileText, Camera } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const UserAreas = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-4">
            Áreas Exclusivas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experiências personalizadas para clientes e prestadores
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Área do Cliente */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-6">
              <div className="bg-[#0A1F44] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <User size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#0A1F44] mb-2">
                Área do Cliente
              </h3>
              <p className="text-gray-600">
                Encontre e contrate os melhores profissionais
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Star className="text-[#0A1F44] mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-800">Favoritos</h4>
                  <p className="text-gray-600 text-sm">Salve seus prestadores preferidos</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MessageCircle className="text-[#0A1F44] mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-800">Orçamentos Rápidos</h4>
                  <p className="text-gray-600 text-sm">Solicite orçamentos em poucos cliques</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <FileText className="text-[#0A1F44] mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-800">Histórico</h4>
                  <p className="text-gray-600 text-sm">Acompanhe todos os seus serviços</p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => navigate('/cadastro')}
              className="w-full mt-6 bg-[#0A1F44] text-white py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors"
            >
              Cadastrar como Cliente
            </button>
          </div>

          {/* Área do Prestador */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-6">
              <div className="bg-[#0A1F44] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserCheck size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#0A1F44] mb-2">
                Área do Prestador
              </h3>
              <p className="text-gray-600">
                Gerencie seu negócio e conquiste mais clientes
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MessageCircle className="text-[#0A1F44] mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-800">Solicitações</h4>
                  <p className="text-gray-600 text-sm">Receba e responda pedidos de orçamento</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Camera className="text-[#0A1F44] mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-800">Portfólio</h4>
                  <p className="text-gray-600 text-sm">Mostre seus trabalhos com fotos e vídeos</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Star className="text-[#0A1F44] mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-800">Gamificação</h4>
                  <p className="text-gray-600 text-sm">Ganhe pontos, badges e rankings</p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => navigate('/cadastro')}
              className="w-full mt-6 bg-[#0A1F44] text-white py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors"
            >
              Cadastrar como Prestador
            </button>

            <div className="mt-4 text-center">
              <p className="text-sm text-gray-500">
                <strong>Cadastro 100% gratuito</strong> • Orientações sobre MEI e precificação
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserAreas;
