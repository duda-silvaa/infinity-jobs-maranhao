
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { User, UserCheck, Eye, EyeOff } from 'lucide-react';

const Cadastro = () => {
  const [userType, setUserType] = useState<'cliente' | 'prestador'>('cliente');
  const [showPassword, setShowPassword] = useState(false);

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

            {/* Formulário de Cadastro */}
            <form className="space-y-4">
              <div>
                <Label htmlFor="nome">Nome Completo</Label>
                <Input
                  id="nome"
                  type="text"
                  placeholder="Seu nome completo"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  className="mt-1"
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
                  />
                </div>
                <div>
                  <Label htmlFor="cidade">Cidade</Label>
                  <Input
                    id="cidade"
                    type="text"
                    placeholder="São Luís"
                    className="mt-1"
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
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Digite a senha novamente"
                  className="mt-1"
                />
              </div>

              <div className="flex items-start">
                <input type="checkbox" className="mr-2 mt-1" />
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

              <Button className="w-full bg-[#0A1F44] text-white hover:bg-blue-900">
                Criar Conta
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
      <Footer />    </div>
  );
};

export default Cadastro;
