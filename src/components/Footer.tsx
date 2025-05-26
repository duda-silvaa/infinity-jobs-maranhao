
import React from 'react';
import { MapPin, Mail, Phone, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0A1F44] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Logo e descrição */}
          <div>
            <h3 className="text-xl font-bold mb-3">Infinity TrabalheJá</h3>
            <p className="text-gray-300 text-sm mb-3 leading-relaxed">
              Conectando talentos locais maranhenses com oportunidades reais.
            </p>
            <div className="flex items-center space-x-2 text-gray-300 text-sm">
              <MapPin size={14} />
              <span>Maranhão, Brasil</span>
            </div>
          </div>

          {/* Links úteis */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Links Úteis</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/sobre" className="text-gray-300 hover:text-white transition-colors">
                  Sobre o Projeto
                </a>
              </li>
              <li>
                <a href="/area-cliente" className="text-gray-300 hover:text-white transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="/suporte" className="text-gray-300 hover:text-white transition-colors">
                  Suporte
                </a>
              </li>
              <li>
                <a href="#termos" className="text-gray-300 hover:text-white transition-colors">
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>

          {/* Contato e redes sociais */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Contato</h4>
            <div className="space-y-2 text-sm mb-4">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail size={14} />
                <span>contato@infinitytrabalhe.ja</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone size={14} />
                <span>(98) 9 9999-9999</span>
              </div>
            </div>

            {/* Redes sociais */}
            <div className="flex space-x-3">
              <a
                href="#"
                className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-colors"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-white border-opacity-20 mt-6 pt-4">
          <div className="text-center text-sm">
            <p className="text-gray-300">
              © 2025 Infinity TrabalheJá • Feito com orgulho no Maranhão
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
