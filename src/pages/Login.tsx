
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../hooks/use-toast';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login, isAuthenticated, user } = useAuth();
  const { toast } = useToast();

  // Redirecionar se já estiver logado
  useEffect(() => {
    if (isAuthenticated && user) {
      console.log('Usuário já logado, redirecionando para:', user.type);
      if (user.type === 'cliente') {
        navigate('/cliente-panel');
      } else {
        navigate('/prestador-panel');
      }
    }
  }, [isAuthenticated, user, navigate]);

  // Função para fazer login
  // Chama useAuth.login que envia dados para POST /api/auth/login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha email e senha.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    
    try {
      console.log('Iniciando processo de login...');
      const result = await login(email, password);
      
      if (result.success) {
        toast({
          title: "Login realizado com sucesso!",
          description: "Redirecionando para seu painel...",
        });
        // O redirecionamento será feito pelo useEffect quando o user for atualizado
      } else {
        toast({
          title: "Erro no login",
          description: result.error || "Credenciais inválidas. Verifique seus dados.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Erro inesperado:', error);
      toast({
        title: "Erro no login",
        description: "Ocorreu um erro inesperado. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-8 mt-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-[#0A1F44] mb-2">
                Fazer Login
              </h1>
              <p className="text-gray-600">
                Acesse sua conta no Infinity TrabalheJá
              </p>
            </div>

            {/* Formulário de Login */}
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  className="mt-1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="password">Senha</Label>
                <div className="relative mt-1">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Digite sua senha"
                    className="pr-10"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm text-gray-600">Lembrar de mim</span>
                </label>
                <a href="#" className="text-sm text-[#0A1F44] hover:underline">
                  Esqueci minha senha
                </a>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-[#0A1F44] text-white hover:bg-blue-900"
                disabled={loading}
              >
                {loading ? 'Entrando...' : 'Entrar'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Ainda não tem uma conta?{' '}
                <a href="/cadastro" className="text-[#0A1F44] font-semibold hover:underline">
                  Cadastre-se aqui
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
