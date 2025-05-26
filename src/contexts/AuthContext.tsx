
import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  type: 'cliente' | 'prestador';
  especialidade?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
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
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Recuperar dados do usuário do localStorage
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (email: string, password: string): boolean => {
    // Simulação de login com usuários de teste
    if (email === 'cliente@teste.com' && password === '123456') {
      const userData = {
        id: '1',
        name: 'João Silva',
        email: 'cliente@teste.com',
        type: 'cliente' as const
      };
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      return true;
    } else if (email === 'prestador@teste.com' && password === '123456') {
      const userData = {
        id: '2',
        name: 'João Técnico Silva',
        email: 'prestador@teste.com',
        type: 'prestador' as const,
        especialidade: 'Serviços Elétricos'
      };
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      isAuthenticated: !!user
    }}>
      {children}
    </AuthContext.Provider>
  );
};
