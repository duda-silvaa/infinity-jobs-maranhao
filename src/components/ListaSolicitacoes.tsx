
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Clock, MapPin, DollarSign, User, Star } from 'lucide-react';
import { servicoService, Solicitacao } from '../services/servicoService';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../hooks/use-toast';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface ListaSolicitacoesProps {
  tipo: 'cliente' | 'prestador';
  refresh?: boolean;
  onRefreshComplete?: () => void;
}

const ListaSolicitacoes = ({ tipo, refresh, onRefreshComplete }: ListaSolicitacoesProps) => {
  const [solicitacoes, setSolicitacoes] = useState<Solicitacao[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();

  // Função para carregar solicitações baseado no tipo de usuário
  const carregarSolicitacoes = async () => {
    try {
      setLoading(true);
      let data;
      
      if (tipo === 'cliente') {
        console.log('Carregando solicitações do cliente...');
        // Chama endpoint GET /api/solicitacoes/cliente
        // Retorna lista de solicitações feitas pelo cliente logado
        data = await servicoService.listarSolicitacoesCliente();
      } else {
        console.log('Carregando solicitações para prestador...');
        // Chama endpoint GET /api/solicitacoes/prestador
        // Retorna lista de solicitações disponíveis para a especialidade do prestador
        data = await servicoService.listarSolicitacoesPrestador();
      }
      
      setSolicitacoes(data);
      console.log(`${data.length} solicitações carregadas`);
    } catch (error: any) {
      console.error('Erro ao carregar solicitações:', error);
      
      let errorMessage = "Erro ao carregar solicitações. Tente novamente.";
      
      if (error.message.includes('401')) {
        errorMessage = "Sessão expirada. Faça login novamente.";
      } else if (error.message.includes('403')) {
        errorMessage = "Você não tem permissão para acessar estas solicitações.";
      } else if (error.message.includes('500')) {
        errorMessage = "Erro interno do servidor. Tente novamente mais tarde.";
      }
      
      toast({
        title: "Erro ao carregar solicitações",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
      if (onRefreshComplete) {
        onRefreshComplete();
      }
    }
  };

  useEffect(() => {
    carregarSolicitacoes();
  }, [tipo, user]);

  useEffect(() => {
    if (refresh) {
      carregarSolicitacoes();
    }
  }, [refresh]);

  // Função para prestador aceitar uma solicitação
  // Chama endpoint PUT /api/solicitacoes/{id}/aceitar
  const handleAceitarSolicitacao = async (id: string) => {
    try {
      console.log('Aceitando solicitação:', id);
      
      // Chama endpoint PUT /api/solicitacoes/{id}/aceitar
      // Espera receber: { message: string, solicitacao: Solicitacao }
      await servicoService.aceitarSolicitacao(id);
      
      toast({
        title: "Solicitação aceita!",
        description: "O cliente será notificado sobre sua aceitação.",
      });
      
      console.log('Solicitação aceita com sucesso');
      carregarSolicitacoes();
    } catch (error: any) {
      console.error('Erro ao aceitar solicitação:', error);
      
      let errorMessage = "Erro ao aceitar solicitação. Tente novamente.";
      
      if (error.message.includes('400')) {
        errorMessage = "Esta solicitação não pode ser aceita no momento.";
      } else if (error.message.includes('409')) {
        errorMessage = "Esta solicitação já foi aceita por outro prestador.";
      }
      
      toast({
        title: "Erro ao aceitar solicitação",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  // Função para prestador fazer proposta em uma solicitação
  // Chama endpoint PUT /api/solicitacoes/{id}/proposta
  const handleResponderSolicitacao = async (id: string) => {
    const proposta = prompt('Digite sua proposta de preço (R$):');
    if (proposta) {
      try {
        console.log('Enviando proposta para solicitação:', id);
        
        // Chama endpoint PUT /api/solicitacoes/{id}/proposta
        // Envia: { proposta_valor: number }
        // Espera receber: { message: string, solicitacao: Solicitacao }
        await servicoService.responderSolicitacao(id, proposta);
        
        toast({
          title: "Proposta enviada!",
          description: "O cliente receberá sua proposta.",
        });
        
        console.log('Proposta enviada com sucesso');
        carregarSolicitacoes();
      } catch (error: any) {
        console.error('Erro ao responder solicitação:', error);
        
        let errorMessage = "Erro ao enviar proposta. Tente novamente.";
        
        if (error.message.includes('400')) {
          errorMessage = "Valor da proposta inválido.";
        } else if (error.message.includes('409')) {
          errorMessage = "Você já fez uma proposta para esta solicitação.";
        }
        
        toast({
          title: "Erro ao enviar proposta",
          description: errorMessage,
          variant: "destructive",
        });
      }
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'nova': return 'bg-blue-100 text-blue-800';
      case 'respondida': return 'bg-yellow-100 text-yellow-800';
      case 'aceita': return 'bg-green-100 text-green-800';
      case 'em_andamento': return 'bg-purple-100 text-purple-800';
      case 'concluida': return 'bg-gray-100 text-gray-800';
      case 'cancelada': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'nova': return 'Nova';
      case 'respondida': return 'Respondida';
      case 'aceita': return 'Aceita';
      case 'em_andamento': return 'Em Andamento';
      case 'concluida': return 'Concluída';
      case 'cancelada': return 'Cancelada';
      default: return status;
    }
  };

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="animate-pulse">
            <CardHeader>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="h-3 bg-gray-200 rounded"></div>
                <div className="h-3 bg-gray-200 rounded w-5/6"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (solicitacoes.length === 0) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <p className="text-gray-500">
            {tipo === 'cliente' 
              ? 'Você ainda não fez nenhuma solicitação.'
              : 'Não há solicitações disponíveis para sua especialidade no momento.'
            }
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {solicitacoes.map((solicitacao) => (
        <Card key={solicitacao.id} className="hover:shadow-md transition-shadow">
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle className="text-lg">{solicitacao.servico}</CardTitle>
              <Badge className={getStatusColor(solicitacao.status)}>
                {getStatusText(solicitacao.status)}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">{solicitacao.descricao}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center text-gray-600">
                <MapPin size={16} className="mr-2" />
                {solicitacao.endereco}
              </div>
              
              <div className="flex items-center text-gray-600">
                <Clock size={16} className="mr-2" />
                {format(new Date(solicitacao.data_solicitada), 'dd/MM/yyyy', { locale: ptBR })} às {solicitacao.horario_solicitado}
              </div>
              
              {solicitacao.orcamento_maximo && (
                <div className="flex items-center text-gray-600">
                  <DollarSign size={16} className="mr-2" />
                  Orçamento: R$ {solicitacao.orcamento_maximo.toFixed(2)}
                </div>
              )}
              
              {(solicitacao.cliente_nome || solicitacao.prestador_nome) && (
                <div className="flex items-center text-gray-600">
                  <User size={16} className="mr-2" />
                  {tipo === 'cliente' ? 'Prestador: ' : 'Cliente: '}
                  {tipo === 'cliente' ? solicitacao.prestador_nome : solicitacao.cliente_nome}
                </div>
              )}
            </div>
            
            {solicitacao.proposta_prestador && (
              <div className="bg-yellow-50 p-3 rounded-lg">
                <p className="text-sm font-medium text-yellow-800">Proposta do Prestador:</p>
                <p className="text-yellow-700">R$ {solicitacao.proposta_prestador}</p>
              </div>
            )}
            
            {solicitacao.avaliacao && (
              <div className="bg-green-50 p-3 rounded-lg">
                <div className="flex items-center mb-2">
                  <Star size={16} className="text-yellow-500 mr-1" />
                  <span className="font-medium">{solicitacao.avaliacao}/5</span>
                </div>
                {solicitacao.comentario_avaliacao && (
                  <p className="text-green-700 text-sm">{solicitacao.comentario_avaliacao}</p>
                )}
              </div>
            )}
            
            {tipo === 'prestador' && solicitacao.status === 'nova' && (
              <div className="flex space-x-2">
                <Button 
                  onClick={() => handleResponderSolicitacao(solicitacao.id)}
                  variant="outline"
                  size="sm"
                >
                  Fazer Proposta
                </Button>
                <Button 
                  onClick={() => handleAceitarSolicitacao(solicitacao.id)}
                  className="bg-[#0A1F44] hover:bg-blue-900"
                  size="sm"
                >
                  Aceitar
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ListaSolicitacoes;
