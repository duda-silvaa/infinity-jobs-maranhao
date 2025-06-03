
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { User, UserCheck, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../integrations/supabase/client';
import { useToast } from '../hooks/use-toast';
import { useAuth } from '../contexts/AuthContext';

const Cadastro = () => {
  const [userType, setUserType] = useState<'cliente' | 'prestador'>('cliente');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    cidade: 'São Luís',
    servico: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  
  const navigate = useNavigate();
  const { toast } = useToast();
  const { isAuthenticated, user } = useAuth();

  // Redirecionar se já estiver logado
  useEffect(() => {
    if (isAuthenticated && user) {
      if (user.type === 'cliente') {
        navigate('/cliente-panel');
      } else {
        navigate('/prestador-panel');
      }
    }
  }, [isAuthenticated, user, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!acceptedTerms) {
      toast({
        title: "Erro",
        description: "Você deve aceitar os termos de uso.",
        variant: "destructive",
      });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Erro",
        description: "As senhas não coincidem.",
        variant: "destructive",
      });
      return;
    }

    if (formData.password.length < 6) {
      toast({
        title: "Erro",
        description: "A senha deve ter pelo menos 6 caracteres.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      // Registrar usuário no Supabase Auth
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            name: formData.nome,
            type: userType,
            especialidade: userType === 'prestador' ? formData.servico : null,
            telefone: formData.telefone,
            cidade: formData.cidade
          }
        }
      });

      if (error) {
        console.error('Signup error:', error);
        
        let errorMessage = "Erro ao criar conta. Tente novamente.";
        if (error.message.includes('already registered')) {
          errorMessage = "Este e-mail já está cadastrado.";
        } else if (error.message.includes('invalid')) {
          errorMessage = "E-mail inválido.";
        } else if (error.message.includes('weak')) {
          errorMessage = "Senha muito fraca. Use uma senha mais forte.";
        }
        
        toast({
          title: "Erro no cadastro",
          description: errorMessage,
          variant: "destructive",
        });
        return;
      }

      if (data.user) {
        toast({
          title: "Cadastro realizado com sucesso!",
          description: "Você pode fazer login agora.",
        });
        
        // Redirecionar para login
        navigate('/login');
      }
    } catch (error) {
      console.error('Signup error:', error);
      toast({
        title: "Erro no cadastro",
        description: "Ocorreu um erro. Tente novamente.",
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
                Criar Conta
              </h1>
              <p className="text-gray-600">
                Junte-se à nossa comunidade maranhense
              </p>
            </div>

            {/* Seletor de Tipo de Usuário */}
            <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
              <button
                type="button"
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
                type="button"
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

            {/* Formulário de Cadastro */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="nome">Nome Completo</Label>
                <Input
                  id="nome"
                  type="text"
                  placeholder="Seu nome completo"
                  className="mt-1"
                  value={formData.nome}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  className="mt-1"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="telefone">Telefone</Label>
                  <Input
                    id="telefone"
                    type="tel"
                    placeholder="(98) 99999-9999"
                    className="mt-1"
                    value={formData.telefone}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="cidade">Cidade</Label>
                  <Input
                    id="cidade"
                    type="text"
                    placeholder="São Luís"
                    className="mt-1"
                    value={formData.cidade}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {userType === 'prestador' && (
                <div>
                  <Label htmlFor="servico">Serviço Principal</Label>
                  <Input
                    id="servico"
                    type="text"
                    placeholder="Ex: Eletricista, Pedreiro, Designer..."
                    className="mt-1"
                    value={formData.servico}
                    onChange={handleInputChange}
                    required={userType === 'prestador'}
                  />
                </div>
              )}

              <div>
                <Label htmlFor="password">Senha</Label>
                <div className="relative mt-1">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Crie uma senha segura"
                    className="pr-10"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    minLength={6}
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

              <div>
                <Label htmlFor="confirmPassword">Confirmar Senha</Label>
                <div className="relative mt-1">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Digite a senha novamente"
                    className="pr-10"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="flex items-start">
                <input 
                  type="checkbox" 
                  className="mr-2 mt-1" 
                  checked={acceptedTerms}
                  onChange={(e) => setAcceptedTerms(e.target.checked)}
                  required
                />
                <span className="text-sm text-gray-600">
                  Concordo com os{' '}
                  <a href="#" className="text-[#0A1F44] hover:underline">
                    Termos de Uso
                  </a>{' '}
                  e{' '}
                  <a href="#" className="text-[#0A1F44] hover:underline">
                    Política de Privacidade
                  </a>
                </span>
              </div>

              <Button 
                type="submit"
                className="w-full bg-[#0A1F44] text-white hover:bg-blue-900"
                disabled={loading}
              >
                {loading ? 'Criando conta...' : 'Criar Conta'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Já tem uma conta?{' '}
                <a href="/login" className="text-[#0A1F44] font-semibold hover:underline">
                  Faça login aqui
                </a>
              </p>
            </div>

            {/* Cadastro Social */}
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Ou cadastre-se com</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <Button variant="outline" className="w-full" type="button">
                  Google
                </Button>
                <Button variant="outline" className="w-full" type="button">
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

export default Cadastro;
