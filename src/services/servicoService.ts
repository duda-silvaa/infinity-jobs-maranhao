
import { apiCall } from '../config/api';

// Interface para dados de solicitação de serviço
export interface SolicitacaoData {
  servico: string;
  descricao: string;
  endereco: string;
  data: string; // formato: YYYY-MM-DD
  horario: string; // formato: HH:MM
  orcamento?: string;
}

// Interface para solicitação completa retornada pelo backend
export interface Solicitacao {
  id: string;
  servico: string;
  descricao: string;
  endereco: string;
  data_solicitada: string;
  horario_solicitado: string;
  orcamento_maximo?: number;
  status: 'nova' | 'respondida' | 'aceita' | 'em_andamento' | 'concluida' | 'cancelada';
  proposta_prestador?: string;
  avaliacao?: number;
  comentario_avaliacao?: string;
  cliente_id: string;
  prestador_id?: string;
  cliente_nome?: string;
  prestador_nome?: string;
  created_at: string;
  updated_at: string;
}

export const servicoService = {
  // Função para criar nova solicitação de serviço (CLIENTE)
  // Envia dados da solicitação para o backend no endpoint POST /api/solicitacoes
  // Espera receber: { message: string, solicitacao: Solicitacao }
  criarSolicitacao: async (dados: SolicitacaoData): Promise<Solicitacao> => {
    const response = await apiCall('/solicitacoes', {
      method: 'POST',
      body: JSON.stringify({
        tipo_servico: dados.servico,
        descricao: dados.descricao,
        endereco: dados.endereco,
        data_solicitada: dados.data,
        horario_solicitado: dados.horario,
        orcamento_maximo: dados.orcamento ? parseFloat(dados.orcamento) : null
      }),
    });
    
    return response.solicitacao;
  },

  // Função para listar solicitações do cliente logado
  // Chama endpoint GET /api/solicitacoes/cliente
  // Espera receber: Array<Solicitacao>
  listarSolicitacoesCliente: async (): Promise<Solicitacao[]> => {
    const response = await apiCall('/solicitacoes/cliente');
    return response.solicitacoes || response;
  },

  // Função para listar solicitações disponíveis para prestador
  // Chama endpoint GET /api/solicitacoes/prestador
  // Filtra por especialidade do prestador logado
  // Espera receber: Array<Solicitacao>
  listarSolicitacoesPrestador: async (): Promise<Solicitacao[]> => {
    const response = await apiCall('/solicitacoes/prestador');
    return response.solicitacoes || response;
  },

  // Função para prestador aceitar uma solicitação
  // Chama endpoint PUT /api/solicitacoes/{id}/aceitar
  // Espera receber: { message: string, solicitacao: Solicitacao }
  aceitarSolicitacao: async (solicitacaoId: string): Promise<Solicitacao> => {
    const response = await apiCall(`/solicitacoes/${solicitacaoId}/aceitar`, {
      method: 'PUT',
    });
    
    return response.solicitacao;
  },

  // Função para prestador fazer proposta em uma solicitação
  // Chama endpoint PUT /api/solicitacoes/{id}/proposta
  // Espera receber: { message: string, solicitacao: Solicitacao }
  responderSolicitacao: async (solicitacaoId: string, proposta: string): Promise<Solicitacao> => {
    const response = await apiCall(`/solicitacoes/${solicitacaoId}/proposta`, {
      method: 'PUT',
      body: JSON.stringify({
        proposta_valor: parseFloat(proposta)
      }),
    });
    
    return response.solicitacao;
  },

  // Função para cliente avaliar um serviço concluído
  // Chama endpoint PUT /api/solicitacoes/{id}/avaliar
  // Espera receber: { message: string, solicitacao: Solicitacao }
  avaliarServico: async (solicitacaoId: string, avaliacao: number, comentario?: string): Promise<Solicitacao> => {
    const response = await apiCall(`/solicitacoes/${solicitacaoId}/avaliar`, {
      method: 'PUT',
      body: JSON.stringify({
        avaliacao,
        comentario_avaliacao: comentario
      }),
    });
    
    return response.solicitacao;
  },

  // Função para atualizar status de uma solicitação
  // Chama endpoint PUT /api/solicitacoes/{id}/status
  // Espera receber: { message: string, solicitacao: Solicitacao }
  atualizarStatus: async (solicitacaoId: string, novoStatus: string): Promise<Solicitacao> => {
    const response = await apiCall(`/solicitacoes/${solicitacaoId}/status`, {
      method: 'PUT',
      body: JSON.stringify({
        status: novoStatus
      }),
    });
    
    return response.solicitacao;
  }
};
