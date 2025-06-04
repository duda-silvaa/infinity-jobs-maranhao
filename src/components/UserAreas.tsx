
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { User, UserCheck, ArrowRight } from 'lucide-react';

const UserAreas = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-4">
            Escolha Como Participar
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Seja você um cliente procurando serviços ou um prestador oferecendo suas habilidades
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Área do Cliente */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative h-48">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Cliente satisfeito com serviço"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#0A1F44] bg-opacity-60 flex items-center justify-center">
                <User size={64} className="text-white" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#0A1F44] mb-4">Área do Cliente</h3>
              <p className="text-gray-600 mb-6">
                Encontre os melhores prestadores de serviço para suas necessidades. 
                Solicite orçamentos, compare preços e avalie profissionais.
              </p>
              <ul className="space-y-2 mb-6 text-gray-600">
                <li>✓ Solicite serviços facilmente</li>
                <li>✓ Compare propostas</li>
                <li>✓ Avalie prestadores</li>
                <li>✓ Histórico de serviços</li>
              </ul>
              <Link to="/area-cliente">
                <Button className="w-full bg-[#0A1F44] text-white hover:bg-blue-900 flex items-center justify-center space-x-2">
                  <span>Acessar Área do Cliente</span>
                  <ArrowRight size={20} />
                </Button>
              </Link>
            </div>
          </div>

          {/* Área do Prestador */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative h-48">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Prestador de serviço trabalhando"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#0A1F44] bg-opacity-60 flex items-center justify-center">
                <UserCheck size={64} className="text-white" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#0A1F44] mb-4">Área do Prestador</h3>
              <p className="text-gray-600 mb-6">
                Ofereça seus serviços e encontre clientes em sua região. 
                Monte seu portfólio e construa sua reputação.
              </p>
              <ul className="space-y-2 mb-6 text-gray-600">
                <li>✓ Receba solicitações</li>
                <li>✓ Monte seu portfólio</li>
                <li>✓ Defina seus preços</li>
                <li>✓ Construa sua reputação</li>
              </ul>
              <Link to="/area-prestador">
                <Button className="w-full bg-yellow-400 text-[#0A1F44] hover:bg-yellow-300 flex items-center justify-center space-x-2">
                  <span>Acessar Área do Prestador</span>
                  <ArrowRight size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Botão de suporte */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Precisa de ajuda para começar?</p>
          <Link to="/suporte">
            <Button variant="outline" className="border-[#0A1F44] text-[#0A1F44] hover:bg-[#0A1F44] hover:text-white">
              Falar com Suporte
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UserAreas;
