
import { apiCall } from '../config/api';

// Interface para dados do usuário retornados pelo backend
export interface UserData {
  id: string;
  name: string;
  email: string;
  type: 'cliente' | 'prestador';
  especialidade?: string;
  telefone?: string;
  cidade?: string;
}

// Interface para resposta do login do backend
export interface LoginResponse {
  token: string;
  user: UserData;
  expiresIn: number; // tempo de expiração em segundos
}

// Interface para dados de cadastro enviados ao backend
export interface RegisterData {
  name: string;
  email: string;
  password: string;
  type: 'cliente' | 'prestador';
  telefone?: string;
  cidade?: string;
  especialidade?: string; // obrigatório se type = 'prestador'
}

export const authService = {
  // Função para fazer login
  // Envia email e senha para o backend no endpoint POST /api/auth/login
  // Espera receber: { token: string, user: UserData, expiresIn: number }
  login: async (email: string, password: string): Promise<LoginResponse> => {
    const response = await apiCall('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    
    // Salva token e dados do usuário no localStorage
    localStorage.setItem('authToken', response.token);
    localStorage.setItem('userData', JSON.stringify(response.user));
    
    return response;
  },

  // Função para fazer cadastro de novo usuário
  // Envia dados completos para o backend no endpoint POST /api/auth/register
  // Espera receber: { message: string, user: UserData }
  register: async (userData: RegisterData): Promise<{ message: string; user: UserData }> => {
    const response = await apiCall('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
    
    return response;
  },

  // Função para fazer logout
  // Chama endpoint POST /api/auth/logout (opcional) e limpa dados locais
  logout: async (): Promise<void> => {
    try {
      // Opcional: notificar backend sobre logout
      await apiCall('/auth/logout', {
        method: 'POST',
      });
    } catch (error) {
      console.log('Erro ao notificar logout no backend:', error);
    } finally {
      // Sempre limpa dados locais independente da resposta do backend
      localStorage.removeItem('authToken');
      localStorage.removeItem('userData');
    }
  },

  // Função para verificar se token ainda é válido
  // Chama endpoint GET /api/auth/verify para validar token
  verifyToken: async (): Promise<UserData | null> => {
    try {
      const response = await apiCall('/auth/verify');
      return response.user;
    } catch (error) {
      // Se token inválido, limpa dados locais
      localStorage.removeItem('authToken');
      localStorage.removeItem('userData');
      return null;
    }
  },

  // Função para atualizar perfil do usuário
  // Envia dados atualizados para o backend no endpoint PUT /api/user/profile
  // Espera receber: { message: string, user: UserData }
  updateProfile: async (userData: Partial<UserData>): Promise<UserData> => {
    const response = await apiCall('/user/profile', {
      method: 'PUT',
      body: JSON.stringify(userData),
    });
    
    // Atualiza dados do usuário no localStorage
    localStorage.setItem('userData', JSON.stringify(response.user));
    
    return response.user;
  },

  // Função utilitária para recuperar dados do usuário do localStorage
  getCurrentUser: (): UserData | null => {
    const userData = localStorage.getItem('userData');
    return userData ? JSON.parse(userData) : null;
  },

  // Função utilitária para verificar se usuário está logado
  isAuthenticated: (): boolean => {
    return !!localStorage.getItem('authToken') && !!localStorage.getItem('userData');
  }
};
