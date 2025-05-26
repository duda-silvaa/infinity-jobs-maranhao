
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { User, UserCheck, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../hooks/use-toast';

const Login = () => {
  const [userType, setUserType] = useState<'cliente' | 'prestador'>('cliente');
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    const success = login(email, password);
    
    if (success) {
      toast({
        title: "Login realizado com sucesso!",
        description: "Redirecionando para seu painel...",
      });
      
      // Redirecionar baseado no tipo de usuário
      if (email === 'cliente@teste.com') {
        navigate('/cliente-panel');
      } else if (email === 'prestador@teste.com') {
        navigate('/prestador-panel');
      }
    } else {
      toast({
        title: "Erro no login",
        description: "Credenciais inválidas. Use as credenciais de teste.",
        variant: "destructive",
      });
    }
  };

  const fillTestCredentials = (type: 'cliente' | 'prestador') => {
    if (type === 'cliente') {
      setEmail('cliente@teste.com');
      setPassword('123456');
      setUserType('cliente');
    } else {
      setEmail('prestador@teste.com');
      setPassword('123456');
      setUserType('prestador');
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
                Acesse sua conta e conecte-se à nossa comunidade
              </p>
            </div>

            {/* Login de Teste */}
            <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h3 className="font-bold text-yellow-800 mb-2">🧪 Login de Teste</h3>
              <p className="text-sm text-yellow-700 mb-3">
                Use as credenciais abaixo para testar os painéis:
              </p>
              <div className="space-y-2">
                <button
                  onClick={() => fillTestCredentials('cliente')}
                  className="w-full text-left p-2 bg-white border border-yellow-300 rounded text-sm hover:bg-yellow-50"
                >
                  <strong>Cliente:</strong> cliente@teste.com / 123456
                </button>
                <button
                  onClick={() => fillTestCredentials('prestador')}
                  className="w-full text-left p-2 bg-white border border-yellow-300 rounded text-sm hover:bg-yellow-50"
                >
                  <strong>Prestador:</strong> prestador@teste.com / 123456
                </button>
              </div>
            </div>

            {/* Seletor de Tipo de Usuário */}
            <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setUserType('cliente')}
                className={`flex-1 flex items-center justify-center py-2 px-4 rounded-md transition-colors ${
                  userType === 'cliente'
                    ? 'bg-[#0A1F44] text-white'
                    : 'text-gray-600 hover:text-[#0A1F44]'
                }`}
              >
                <User size={20} className="mr-2" />
                Cliente
              </button>
              <button
                onClick={() => setUserType('prestador')}
                className={`flex-1 flex items-center justify-center py-2 px-4 rounded-md transition-colors ${
                  userType === 'prestador'
                    ? 'bg-[#0A1F44] text-white'
                    : 'text-gray-600 hover:text-[#0A1F44]'
                }`}
              >
                <UserCheck size={20} className="mr-2" />
                Prestador
              </button>
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

              <Button type="submit" className="w-full bg-[#0A1F44] text-white hover:bg-blue-900">
                Entrar
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

            {/* Login Social */}
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Ou continue com</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <Button variant="outline" className="w-full">
                  Google
                </Button>
                <Button variant="outline" className="w-full">
                  Facebook
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
