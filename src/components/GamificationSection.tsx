
import React from 'react';
import { Trophy, Star, Medal, Target } from 'lucide-react';

const GamificationSection = () => {
  const topProfessionals = [
    { name: "Maria Santos", profession: "Faxineira", city: "São Luís", points: 2850, position: 1 },
    { name: "Carlos Lima", profession: "Pintor", city: "Imperatriz", points: 2720, position: 2 },
    { name: "Ana Costa", profession: "Jardineira", city: "Timon", points: 2640, position: 3 }
  ];

  const achievements = [
    { icon: Star, title: "5 Estrelas", description: "Mantenha avaliação 5.0" },
    { icon: Trophy, title: "Top da Cidade", description: "Entre os 5 melhores" },
    { icon: Medal, title: "100 Serviços", description: "Centena de qualidade" },
    { icon: Target, title: "Pontual", description: "Sempre no horário" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-4">
            Sistema de Gamificação
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reconhecimento e motivação para nossos prestadores de excelência
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Ranking */}
          <div className="bg-gradient-to-br from-[#0A1F44] to-blue-600 rounded-lg p-6 text-white">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Trophy className="mr-3" size={28} />
              Top Prestadores do Mês
            </h3>
            <div className="space-y-4">
              {topProfessionals.map((professional) => (
                <div
                  key={professional.position}
                  className="bg-white bg-opacity-20 rounded-lg p-4 flex items-center justify-between"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-yellow-400 text-[#0A1F44] rounded-full flex items-center justify-center font-bold">
                      {professional.position}
                    </div>
                    <div>
                      <h4 className="font-semibold">{professional.name}</h4>
                      <p className="text-sm opacity-90">
                        {professional.profession} • {professional.city}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-yellow-300">{professional.points}</div>
                    <div className="text-xs opacity-75">pontos</div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 bg-white text-[#0A1F44] py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Ver Ranking Completo
            </button>
          </div>

          {/* Conquistas */}
          <div>
            <h3 className="text-2xl font-bold text-[#0A1F44] mb-6">
              Selos e Conquistas
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="bg-[#0A1F44] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <achievement.icon size={24} />
                  </div>
                  <h4 className="font-semibold text-[#0A1F44] mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h4 className="font-semibold text-[#0A1F44] mb-3">
                Como Funciona o Sistema de Pontos?
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>+50 pontos</strong> por serviço concluído</li>
                <li>• <strong>+20 pontos</strong> por avaliação 5 estrelas</li>
                <li>• <strong>+100 pontos</strong> por indicação de cliente</li>
                <li>• <strong>Bônus</strong> por pontualidade e qualidade</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamificationSection;
