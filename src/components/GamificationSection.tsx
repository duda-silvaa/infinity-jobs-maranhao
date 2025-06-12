import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { 
  Trophy, 
  Star, 
  Award, 
  Target, 
  TrendingUp,
  Users,
  ArrowRight
} from 'lucide-react';

const GamificationSection = () => {
  const achievements = [
    {
      icon: <Star className="text-yellow-500" size={24} />,
      title: "Primeira Estrela",
      description: "Receba sua primeira avaliação 5 estrelas",
      progress: 1,
      total: 1,
      unlocked: true
    },
    {
      icon: <Users className="text-blue-500" size={24} />,
      title: "Bem Conectado",
      description: "Complete 10 serviços com sucesso",
      progress: 7,
      total: 10,
      unlocked: false
    },
    {
      icon: <Trophy className="text-purple-500" size={24} />,
      title: "Especialista",
      description: "Mantenha nota média acima de 4.5",
      progress: 4.8,
      total: 5,
      unlocked: true
    },
    {
      icon: <Target className="text-green-500" size={24} />,
      title: "Pontualidade",
      description: "Complete 5 serviços no prazo",
      progress: 3,
      total: 5,
      unlocked: false
    }
  ];

  const leaderboard = [
    {
      position: 1,
      name: "Maria Santos",
      profession: "Faxineira",
      points: 2850,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      position: 2,
      name: "João Silva",
      profession: "Eletricista",
      points: 2750,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      position: 3,
      name: "Ana Costa",
      profession: "Designer",
      points: 2650,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-4">
            Sistema de Conquistas e Recompensas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ganhe pontos, desbloqueie conquistas e suba no ranking de melhores prestadores
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Conquistas */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-[#0A1F44]">
                  <Award size={24} />
                  <span>Suas Conquistas</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        achievement.unlocked
                          ? 'border-green-200 bg-green-50'
                          : 'border-gray-200 bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          {achievement.icon}
                          <div>
                            <div className="font-semibold text-gray-800">
                              {achievement.title}
                            </div>
                            {achievement.unlocked && (
                              <Badge className="bg-green-100 text-green-800 text-xs">
                                Desbloqueado
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">
                        {achievement.description}
                      </p>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all ${
                            achievement.unlocked ? 'bg-green-500' : 'bg-blue-500'
                          }`}
                          style={{
                            width: `${(achievement.progress / achievement.total) * 100}%`
                          }}
                        />
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {achievement.progress}/{achievement.total}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <Link to="/area-prestador">
                    <Button className="bg-[#0A1F44] text-white hover:bg-blue-900">
                      Ver Todas as Conquistas
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Ranking */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-[#0A1F44]">
                  <TrendingUp size={24} />
                  <span>Top Prestadores</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leaderboard.map((user, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex-shrink-0">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                            user.position === 1
                              ? 'bg-yellow-500'
                              : user.position === 2
                              ? 'bg-gray-400'
                              : 'bg-orange-500'
                          }`}
                        >
                          {user.position}
                        </div>
                      </div>
                      
                      <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-gray-800 truncate">
                          {user.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {user.profession}
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="font-bold text-[#0A1F44]">
                          {user.points}
                        </div>
                        <div className="text-xs text-gray-500">pts</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <Link to="/area-prestador">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#0A1F44] text-[#0A1F44] hover:bg-[#0A1F44] hover:text-white"
                    >
                      Ver Ranking Completo
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Próxima recompensa */}
            <Card className="mt-6">
              <CardContent className="p-6">
                <div className="text-center">
                  <Trophy className="text-yellow-500 mx-auto mb-3" size={32} />
                  <h3 className="font-semibold text-[#0A1F44] mb-2">
                    Próxima Recompensa
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Complete mais 3 serviços para ganhar o badge "Bem Conectado"
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                    <div className="w-2/3 h-2 bg-blue-500 rounded-full" />
                  </div>
                  <div className="text-xs text-gray-500">7/10 serviços</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamificationSection;
