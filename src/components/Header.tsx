
import React, { useState } from 'react';
import { Menu, X, User, UserPlus, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout, isAuthenticated } = useAuth();

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMenuOpen(false);
  };

  const handleDashboardNavigation = () => {
    if (user?.type === 'cliente') {
      navigate('/cliente-panel');
    } else if (user?.type === 'prestador') {
      navigate('/prestador-panel');
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => handleNavigation('/')}>
            <h1 className="text-2xl font-bold text-[#0A1F44]">
              Infinity TrabalheJá
            </h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => handleNavigation('/')}
              className="text-gray-700 hover:text-[#0A1F44] transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => handleNavigation('/sobre')}
              className="text-gray-700 hover:text-[#0A1F44] transition-colors"
            >
              Sobre o Projeto
            </button>
            <button 
              onClick={() => handleNavigation('/area-cliente')}
              className="text-gray-700 hover:text-[#0A1F44] transition-colors"
            >
              Área do Cliente
            </button>
            <button 
              onClick={() => handleNavigation('/area-prestador')}
              className="text-gray-700 hover:text-[#0A1F44] transition-colors"
            >
              Área do Prestador
            </button>
            <button 
              onClick={() => handleNavigation('/suporte')}
              className="text-gray-700 hover:text-[#0A1F44] transition-colors"
            >
              Suporte
            </button>
          </nav>

          {/* User Area */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleDashboardNavigation}
                  className="flex items-center space-x-2 text-[#0A1F44] hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors"
                >
                  <User size={20} />
                  <span className="font-medium">Olá, {user?.name.split(' ')[0]}</span>
                </button>
                <button 
                  onClick={handleLogout}
                  className="flex items-center space-x-2 border border-red-500 text-red-500 px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white transition-colors"
                >
                  <LogOut size={20} />
                  <span>Sair</span>
                </button>
              </div>
            ) : (
              <>
                <button 
                  onClick={() => handleNavigation('/cadastro')}
                  className="flex items-center space-x-2 border border-[#0A1F44] text-[#0A1F44] px-4 py-2 rounded-lg hover:bg-[#0A1F44] hover:text-white transition-colors"
                >
                  <UserPlus size={20} />
                  <span>Cadastrar</span>
                </button>
                <button 
                  onClick={() => handleNavigation('/login')}
                  className="flex items-center space-x-2 bg-[#0A1F44] text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors"
                >
                  <User size={20} />
                  <span>Login</span>
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => handleNavigation('/')}
                className="text-gray-700 hover:text-[#0A1F44] transition-colors text-left"
              >
                Início
              </button>
              <button 
                onClick={() => handleNavigation('/sobre')}
                className="text-gray-700 hover:text-[#0A1F44] transition-colors text-left"
              >
                Sobre o Projeto
              </button>
              <button 
                onClick={() => handleNavigation('/area-cliente')}
                className="text-gray-700 hover:text-[#0A1F44] transition-colors text-left"
              >
                Área do Cliente
              </button>
              <button 
                onClick={() => handleNavigation('/area-prestador')}
                className="text-gray-700 hover:text-[#0A1F44] transition-colors text-left"
              >
                Área do Prestador
              </button>
              <button 
                onClick={() => handleNavigation('/suporte')}
                className="text-gray-700 hover:text-[#0A1F44] transition-colors text-left"
              >
                Suporte
              </button>
              
              <div className="flex flex-col space-y-2 pt-4 border-t">
                {isAuthenticated ? (
                  <>
                    <button
                      onClick={handleDashboardNavigation}
                      className="flex items-center space-x-2 text-[#0A1F44] hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors w-fit"
                    >
                      <User size={20} />
                      <span>Olá, {user?.name.split(' ')[0]}</span>
                    </button>
                    <button 
                      onClick={handleLogout}
                      className="flex items-center space-x-2 border border-red-500 text-red-500 px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white transition-colors w-fit"
                    >
                      <LogOut size={20} />
                      <span>Sair</span>
                    </button>
                  </>
                ) : (
                  <>
                    <button 
                      onClick={() => handleNavigation('/cadastro')}
                      className="flex items-center space-x-2 border border-[#0A1F44] text-[#0A1F44] px-4 py-2 rounded-lg hover:bg-[#0A1F44] hover:text-white transition-colors w-fit"
                    >
                      <UserPlus size={20} />
                      <span>Cadastrar</span>
                    </button>
                    <button 
                      onClick={() => handleNavigation('/login')}
                      className="flex items-center space-x-2 bg-[#0A1F44] text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors w-fit"
                    >
                      <User size={20} />
                      <span>Login</span>
                    </button>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
