
// Configuração da API Spring Boot
export const API_CONFIG = {
  BASE_URL: process.env.NODE_ENV === 'production' 
    ? 'https://sua-api-springboot.herokuapp.com/api' 
    : 'http://localhost:8080/api',
  HEADERS: {
    'Content-Type': 'application/json',
  },
};

// Função para fazer chamadas autenticadas à API
// Adiciona automaticamente o token JWT no header Authorization
export const apiCall = async (endpoint: string, options: RequestInit = {}) => {
  // Recupera o token do localStorage para autenticação
  const token = localStorage.getItem('authToken');
  
  const config: RequestInit = {
    ...options,
    headers: {
      ...API_CONFIG.HEADERS,
      // Se existe token, adiciona no header Authorization: Bearer {token}
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
  };

  try {
    const response = await fetch(`${API_CONFIG.BASE_URL}${endpoint}`, config);
    
    // Se token expirou (401), limpa dados do usuário e redireciona para login
    if (response.status === 401) {
      localStorage.removeItem('authToken');
      localStorage.removeItem('userData');
      window.location.href = '/login';
      throw new Error('Token expirado');
    }
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return response.json();
  } catch (error) {
    console.error('Erro na chamada da API:', error);
    throw error;
  }
};
