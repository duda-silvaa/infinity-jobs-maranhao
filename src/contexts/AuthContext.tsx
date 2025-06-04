
import React, { createContext, useContext, useState, useEffect } from 'react';
import { authService, UserData } from '../services/authService';

interface AuthContextType {
  user: UserData | null;
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
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Configurando AuthContext...');
    
    const initializeAuth = async () => {
      try {
        // Verifica se existe token salvo no localStorage
        const savedUser = authService.getCurrentUser();
        
        if (savedUser && authService.isAuthenticated()) {
          console.log('Usuário encontrado no localStorage:', savedUser.name);
          
          // Verifica se token ainda é válido no backend
          // Chama endpoint GET /api/auth/verify
          const verifiedUser = await authService.verifyToken();
          
          if (verifiedUser) {
            setUser(verifiedUser);
            console.log('Token válido, usuário autenticado:', verifiedUser.name);
          } else {
            console.log('Token inválido, fazendo logout...');
            setUser(null);
          }
        }
      } catch (error) {
        console.error('Erro ao verificar autenticação:', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  // Função para fazer login
  // Chama authService.login que envia dados para POST /api/auth/login
  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    try {
      console.log('Tentando fazer login com:', email);
      
      const response = await authService.login(email, password);
      
      // Se login bem-sucedido, atualiza estado do usuário
      setUser(response.user);
      console.log('Login realizado com sucesso:', response.user.name);
      
      return { success: true };
    } catch (error: any) {
      console.error('Erro no login:', error);
      
      // Trata diferentes tipos de erro baseados na resposta do backend
      let errorMessage = 'Erro ao fazer login. Tente novamente.';
      
      if (error.message.includes('401')) {
        errorMessage = 'Email ou senha incorretos. Verifique suas credenciais.';
      } else if (error.message.includes('404')) {
        errorMessage = 'Usuário não encontrado. Verifique seu email.';
      } else if (error.message.includes('403')) {
        errorMessage = 'Conta bloqueada ou inativa. Entre em contato com o suporte.';
      } else if (error.message.includes('500')) {
        errorMessage = 'Erro interno do servidor. Tente novamente mais tarde.';
      }
      
      return { success: false, error: errorMessage };
    }
  };

  // Função para fazer logout
  // Chama authService.logout que notifica o backend e limpa dados locais
  const logout = async () => {
    try {
      console.log('Fazendo logout...');
      await authService.logout();
      setUser(null);
      console.log('Logout realizado com sucesso');
    } catch (error) {
      console.error('Erro no logout:', error);
      // Mesmo com erro, limpa dados locais
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      isAuthenticated: !!user,
      loading
    }}>
      {children}
    </AuthContext.Provider>
  );
};
