
import { supabase } from '../integrations/supabase/client';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  type: 'cliente' | 'prestador';
  especialidade?: string;
  telefone?: string;
}

export interface AuthResponse {
  user: {
    id: string;
    name: string;
    email: string;
    type: 'cliente' | 'prestador';
    especialidade?: string;
  };
}

export const authService = {
  login: async (data: LoginRequest): Promise<AuthResponse | null> => {
    const { data: authData, error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });

    if (error) {
      console.error('Login error:', error);
      throw error;
    }

    if (authData.user) {
      // Buscar perfil do usuário
      const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', authData.user.id)
        .single();

      if (profile) {
        return {
          user: {
            id: profile.user_id,
            name: profile.name,
            email: profile.email,
            type: profile.type,
            especialidade: profile.especialidade,
          }
        };
      }
    }

    return null;
  },

  register: async (data: RegisterRequest): Promise<AuthResponse | null> => {
    const { data: authData, error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: {
          name: data.name,
          type: data.type,
          especialidade: data.especialidade,
          telefone: data.telefone,
        },
        emailRedirectTo: `${window.location.origin}/`,
      },
    });

    if (error) {
      console.error('Register error:', error);
      throw error;
    }

    if (authData.user) {
      return {
        user: {
          id: authData.user.id,
          name: data.name,
          email: data.email,
          type: data.type,
          especialidade: data.especialidade,
        }
      };
    }

    return null;
  },

  logout: async (): Promise<void> => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Logout error:', error);
      throw error;
    }
  },

  getCurrentUser: async () => {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (user) {
      const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (profile) {
        return {
          id: profile.user_id,
          name: profile.name,
          email: profile.email,
          type: profile.type,
          especialidade: profile.especialidade,
        };
      }
    }
    
    return null;
  },
};
