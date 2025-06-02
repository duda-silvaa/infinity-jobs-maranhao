
import { supabase } from '../integrations/supabase/client';

export interface SolicitacaoServico {
  servico: string;
  descricao: string;
  endereco: string;
  data: string;
  horario: string;
  orcamento?: string;
}

export interface Solicitacao {
  id: string;
  cliente_id: string;
  prestador_id?: string;
  servico: string;
  categoria: string;
  descricao: string;
  endereco: string;
  data_solicitada: string;
  horario_solicitado: string;
  orcamento_maximo?: number;
  valor_acordado?: number;
  status: string;
  urgencia: string;
  proposta_prestador?: string;
  avaliacao?: number;
  comentario_avaliacao?: string;
  created_at: string;
  profiles?: {
    name: string;
    email: string;
    telefone?: string;
  };
}

const mapServicoToCategoria = (servico: string): string => {
  const mapeamento: { [key: string]: string } = {
    'Reparos Gerais': 'Reparos Gerais',
    'Limpeza Residencial': 'Limpeza Residencial',
    'Serviços Elétricos': 'Serviços Elétricos',
    'Pintura': 'Pintura',
    'Jardinagem': 'Jardinagem',
    'Mecânica Automotiva': 'Mecânica Automotiva'
  };
  return mapeamento[servico] || servico;
};

export const servicoService = {
  criarSolicitacao: async (data: SolicitacaoServico) => {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      throw new Error('Usuário não autenticado');
    }

    const { data: result, error } = await supabase
      .from('solicitacoes')
      .insert({
        cliente_id: user.id,
        servico: data.servico,
        categoria: mapServicoToCategoria(data.servico),
        descricao: data.descricao,
        endereco: data.endereco,
        data_solicitada: data.data,
        horario_solicitado: data.horario,
        orcamento_maximo: data.orcamento ? parseFloat(data.orcamento) : null,
        status: 'nova',
        urgencia: 'normal'
      })
      .select()
      .single();

    if (error) {
      console.error('Erro ao criar solicitação:', error);
      throw error;
    }

    return result;
  },

  listarSolicitacoesCliente: async () => {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      throw new Error('Usuário não autenticado');
    }

    const { data, error } = await supabase
      .from('solicitacoes')
      .select(`
        *,
        profiles:prestador_id (
          name,
          email,
          telefone
        )
      `)
      .eq('cliente_id', user.id)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Erro ao listar solicitações:', error);
      throw error;
    }

    return data || [];
  },

  listarSolicitacoesPrestador: async () => {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      throw new Error('Usuário não autenticado');
    }

    // Primeiro, buscar a especialidade do prestador
    const { data: profile } = await supabase
      .from('profiles')
      .select('especialidade')
      .eq('user_id', user.id)
      .single();

    if (!profile?.especialidade) {
      return [];
    }

    const { data, error } = await supabase
      .from('solicitacoes')
      .select(`
        *,
        profiles:cliente_id (
          name,
          email,
          telefone
        )
      `)
      .eq('categoria', profile.especialidade)
      .in('status', ['nova', 'respondida'])
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Erro ao listar solicitações:', error);
      throw error;
    }

    return data || [];
  },

  aceitarSolicitacao: async (id: string) => {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      throw new Error('Usuário não autenticado');
    }

    const { data, error } = await supabase
      .from('solicitacoes')
      .update({
        prestador_id: user.id,
        status: 'aceita'
      })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Erro ao aceitar solicitação:', error);
      throw error;
    }

    return data;
  },

  responderSolicitacao: async (id: string, proposta: string) => {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      throw new Error('Usuário não autenticado');
    }

    const { data, error } = await supabase
      .from('solicitacoes')
      .update({
        prestador_id: user.id,
        proposta_prestador: proposta,
        status: 'respondida'
      })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Erro ao responder solicitação:', error);
      throw error;
    }

    return data;
  },

  avaliarServico: async (id: string, avaliacao: number, comentario: string) => {
    const { data, error } = await supabase
      .from('solicitacoes')
      .update({
        avaliacao,
        comentario_avaliacao: comentario,
        status: 'concluida'
      })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Erro ao avaliar serviço:', error);
      throw error;
    }

    return data;
  },
};
