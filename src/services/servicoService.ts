
import { apiCall } from '../config/api';

export interface SolicitacaoServico {
  servico: string;
  descricao: string;
  endereco: string;
  data: string;
  horario: string;
  orcamento?: string;
}

export interface Solicitacao {
  id: number;
  cliente: string;
  servico: string;
  categoria: string;
  data: string;
  valor: string;
  status: string;
  urgencia: string;
  prestadorId?: number;
}

export const servicoService = {
  criarSolicitacao: async (data: SolicitacaoServico) => {
    return await apiCall('/servicos/solicitacoes', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  listarSolicitacoesCliente: async () => {
    return await apiCall('/servicos/cliente/solicitacoes');
  },

  listarSolicitacoesPrestador: async () => {
    return await apiCall('/servicos/prestador/solicitacoes');
  },

  aceitarSolicitacao: async (id: number) => {
    return await apiCall(`/servicos/solicitacoes/${id}/aceitar`, {
      method: 'PUT',
    });
  },

  responderSolicitacao: async (id: number, proposta: string) => {
    return await apiCall(`/servicos/solicitacoes/${id}/responder`, {
      method: 'PUT',
      body: JSON.stringify({ proposta }),
    });
  },

  avaliarServico: async (id: number, avaliacao: number, comentario: string) => {
    return await apiCall(`/servicos/solicitacoes/${id}/avaliar`, {
      method: 'PUT',
      body: JSON.stringify({ avaliacao, comentario }),
    });
  },
};
