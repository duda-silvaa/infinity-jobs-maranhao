
import React from 'react';
import { MapPin, Mail, Phone, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0A1F44] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Infinity TrabalheJá</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Conectando talentos locais maranhenses com oportunidades reais. 
              Transformando vidas através do trabalho digno e valorizado.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <MapPin size={16} />
              <span>Maranhão, Brasil</span>
            </div>
          </div>

          {/* Links úteis */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-2">
              <li>
                <a href="#sobre" className="text-gray-300 hover:text-white transition-colors">
                  Sobre o Projeto
                </a>
              </li>
              <li>
                <a href="#cliente" className="text-gray-300 hover:text-white transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#suporte" className="text-gray-300 hover:text-white transition-colors">
                  Suporte
                </a>
              </li>
              <li>
                <a href="#termos" className="text-gray-300 hover:text-white transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#privacidade" className="text-gray-300 hover:text-white transition-colors">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-gray-300">contato@infinitytrabalhe.ja</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="text-gray-300">(98) 9 9999-9999</span>
              </div>
            </div>

            {/* Redes sociais */}
            <div className="mt-6">
              <h5 className="font-semibold mb-3">Siga-nos</h5>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-colors"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-white border-opacity-20 mt-8 pt-8">
          <div className="text-center">
            <p className="text-gray-300">
              Feito com orgulho no Maranhão • © 2025 Infinity TrabalheJá
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Transformando talentos locais em oportunidades reais
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
