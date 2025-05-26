
import React, { useState } from 'react';
import { Menu, X, User } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-[#0A1F44]">
              Infinity TrabalheJá
            </h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-[#0A1F44] transition-colors">
              Início
            </a>
            <a href="#sobre" className="text-gray-700 hover:text-[#0A1F44] transition-colors">
              Sobre o Projeto
            </a>
            <a href="#cliente" className="text-gray-700 hover:text-[#0A1F44] transition-colors">
              Área do Cliente
            </a>
            <a href="#prestador" className="text-gray-700 hover:text-[#0A1F44] transition-colors">
              Área do Prestador
            </a>
            <a href="#suporte" className="text-gray-700 hover:text-[#0A1F44] transition-colors">
              Suporte
            </a>
          </nav>

          {/* Login Button */}
          <div className="hidden md:flex items-center">
            <button className="flex items-center space-x-2 bg-[#0A1F44] text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors">
              <User size={20} />
              <span>Login</span>
            </button>
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
              <a href="#inicio" className="text-gray-700 hover:text-[#0A1F44] transition-colors">
                Início
              </a>
              <a href="#sobre" className="text-gray-700 hover:text-[#0A1F44] transition-colors">
                Sobre o Projeto
              </a>
              <a href="#cliente" className="text-gray-700 hover:text-[#0A1F44] transition-colors">
                Área do Cliente
              </a>
              <a href="#prestador" className="text-gray-700 hover:text-[#0A1F44] transition-colors">
                Área do Prestador
              </a>
              <a href="#suporte" className="text-gray-700 hover:text-[#0A1F44] transition-colors">
                Suporte
              </a>
              <button className="flex items-center space-x-2 bg-[#0A1F44] text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors w-fit">
                <User size={20} />
                <span>Login</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
