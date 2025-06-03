
import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../integrations/supabase/client';
import { User, Session } from '@supabase/supabase-js';

interface UserProfile {
  id: string;
  name: string;
  email: string;
  type: 'cliente' | 'prestador';
  especialidade?: string;
  telefone?: string;
  cidade?: string;
}

interface AuthContextType {
  user: UserProfile | null;
  session: Session | null;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchUserProfile = async (userId: string): Promise<UserProfile | null> => {
    try {
      console.log('Buscando perfil para usuário:', userId);
      
      const { data: profile, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', userId)
        .single();

      if (error) {
        console.error('Erro ao buscar perfil:', error);
        return null;
      }

      if (!profile) {
        console.log('Perfil não encontrado');
        return null;
      }

      console.log('Perfil encontrado:', profile);
      return {
        id: profile.user_id,
        name: profile.name,
        email: profile.email,
        type: profile.type,
        especialidade: profile.especialidade,
        telefone: profile.telefone,
        cidade: profile.cidade,
      };
    } catch (error) {
      console.error('Erro ao buscar perfil:', error);
      return null;
    }
  };

  useEffect(() => {
    console.log('Configurando AuthContext...');
    
    // Verificar sessão inicial
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      console.log('Sessão inicial:', session);
      setSession(session);
      
      if (session?.user) {
        const profile = await fetchUserProfile(session.user.id);
        setUser(profile);
      }
      setLoading(false);
    });

    // Configurar listener de mudanças de autenticação
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('Evento de auth:', event, session?.user?.email);
        setSession(session);
        
        if (session?.user) {
          // Aguardar um pouco para o trigger criar o perfil
          setTimeout(async () => {
            const profile = await fetchUserProfile(session.user.id);
            setUser(profile);
            setLoading(false);
          }, 1000);
        } else {
          setUser(null);
          setLoading(false);
        }
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    try {
      console.log('Tentando fazer login com:', email);
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) {
        console.error('Erro no login:', error);
        
        // Tratar diferentes tipos de erro
        if (error.message.includes('Email not confirmed')) {
          return { 
            success: false, 
            error: 'Você precisa confirmar seu email antes de fazer login. Verifique sua caixa de entrada.' 
          };
        }
        
        if (error.message.includes('Invalid login credentials')) {
          return { 
            success: false, 
            error: 'Email ou senha incorretos. Verifique suas credenciais.' 
          };
        }
        
        return { 
          success: false, 
          error: error.message || 'Erro ao fazer login. Tente novamente.' 
        };
      }
      
      if (data.user) {
        console.log('Login realizado com sucesso:', data.user.email);
        return { success: true };
      }
      
      return { success: false, error: 'Erro inesperado no login.' };
    } catch (error) {
      console.error('Erro no login:', error);
      return { 
        success: false, 
        error: 'Erro de conexão. Verifique sua internet e tente novamente.' 
      };
    }
  };

  const logout = async () => {
    try {
      await supabase.auth.signOut();
      setUser(null);
      setSession(null);
    } catch (error) {
      console.error('Erro no logout:', error);
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      session,
      login,
      logout,
      isAuthenticated: !!user && !!session,
      loading
    }}>
      {children}
    </AuthContext.Provider>
  );
};
