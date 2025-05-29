
import { apiCall } from '../config/api';

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
}

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    type: 'cliente' | 'prestador';
    especialidade?: string;
  };
}

export const authService = {
  login: async (data: LoginRequest): Promise<AuthResponse> => {
    return await apiCall('/auth/login', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  register: async (data: RegisterRequest): Promise<AuthResponse> => {
    return await apiCall('/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  logout: async (): Promise<void> => {
    await apiCall('/auth/logout', {
      method: 'POST',
    });
  },

  getCurrentUser: async () => {
    return await apiCall('/auth/me');
  },
};
