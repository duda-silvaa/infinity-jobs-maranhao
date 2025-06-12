import React from 'react';
import { Star, Award } from 'lucide-react';

const ProfileShowcase = () => {
  const sampleProfile = {
    name: "João Silva",
    profession: "Eletricista",
    rating: 4.9,
    reviews: 127,
    city: "São Luís",
    bio: "Há 15 anos transformando lares com serviços elétricos de qualidade. Meu sonho é levar segurança e conforto para cada família através do Infinity TrabalheJá.",
    badges: ["Confiável", "Pontual", "5 Estrelas"],
    completedJobs: 156,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-4">
            Currículo e Portfólio Humanizado
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada prestador tem um perfil completo com sua história, experiências e sonhos no Infinity TrabalheJá
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Header do perfil */}
            <div className="bg-gradient-to-r from-[#0A1F44] to-blue-600 text-white p-6">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white border-opacity-30">
                  <img 
                    src={sampleProfile.avatar} 
                    alt={sampleProfile.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold">{sampleProfile.name}</h3>
                  <p className="text-lg opacity-90">{sampleProfile.profession}</p>
                  <p className="opacity-75">{sampleProfile.city}, MA</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center justify-end space-x-1 mb-1">
                    <Star className="text-yellow-300 fill-current" size={20} />
                    <span className="text-lg font-semibold">{sampleProfile.rating}</span>
                  </div>
                  <p className="text-sm opacity-75">({sampleProfile.reviews} avaliações)</p>
                </div>
              </div>
            </div>

            {/* Badges e conquistas */}
            <div className="p-6 border-b border-gray-200">
              <h4 className="font-semibold text-[#0A1F44] mb-3">Badges e Conquistas</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {sampleProfile.badges.map((badge, index) => (
                  <span
                    key={index}
                    className="bg-[#0A1F44] text-white px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Award size={20} />
                <span>{sampleProfile.completedJobs} serviços concluídos</span>
              </div>
            </div>

            {/* Mini-biografia */}
            <div className="p-6 border-b border-gray-200">
              <h4 className="font-semibold text-[#0A1F44] mb-3">Minha História</h4>
              <p className="text-gray-700 leading-relaxed">{sampleProfile.bio}</p>
            </div>

            {/* Galeria de trabalhos com imagens mais profissionais */}
            <div className="p-6">
              <h4 className="font-semibold text-[#0A1F44] mb-3">Meu Portfólio</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
                  'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
                  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
                  'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
                ].map((image, index) => (
                  <div
                    key={index}
                    className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    <img 
                      src={image} 
                      alt={`Trabalho ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <button className="mt-4 text-[#0A1F44] font-semibold hover:underline">
                Ver todos os trabalhos
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileShowcase;
