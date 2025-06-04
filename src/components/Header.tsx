
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { useAuth } from '../contexts/AuthContext';
import { Infinity } from 'lucide-react';

const Header = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  // Função para fazer logout
  // Chama useAuth.logout que notifica o backend e limpa dados locais
  const handleLogout = async () => {
    console.log('Fazendo logout do usuário:', user?.name);
    await logout();
    navigate('/');
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Infinity size={32} className="text-[#0A1F44]" />
            <h1 className="text-2xl font-bold text-[#0A1F44]">Infinity TrabalheJá</h1>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-[#0A1F44] transition-colors">
              Início
            </Link>
            <Link to="/sobre" className="text-gray-600 hover:text-[#0A1F44] transition-colors">
              Sobre
            </Link>
            <Link to="/area-cliente" className="text-gray-600 hover:text-[#0A1F44] transition-colors">
              Área do Cliente
            </Link>
            <Link to="/area-prestador" className="text-gray-600 hover:text-[#0A1F44] transition-colors">
              Área do Prestador
            </Link>
            <Link to="/suporte" className="text-gray-600 hover:text-[#0A1F44] transition-colors">
              Suporte
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            {isAuthenticated && user ? (
              <div className="flex items-center space-x-4">
                {/* Mostra nome do usuário logado */}
                <span className="text-gray-600">
                  Olá, {user.name}!
                </span>
                <Button 
                  onClick={handleLogout}
                  variant="outline" 
                  className="border-[#0A1F44] text-[#0A1F44] hover:bg-[#0A1F44] hover:text-white"
                >
                  Sair
                </Button>
              </div>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline" className="border-[#0A1F44] text-[#0A1F44] hover:bg-[#0A1F44] hover:text-white">
                    Login
                  </Button>
                </Link>
                <Link to="/cadastro">
                  <Button className="bg-[#0A1F44] text-white hover:bg-blue-900">
                    Cadastrar
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
