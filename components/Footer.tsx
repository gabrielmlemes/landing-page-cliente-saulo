"use client";

import { Zap, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-center md:text-left">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
              <Zap className="text-secondary w-8 h-8 fill-secondary" />
              <span className="text-xl font-bold tracking-tighter text-primary">
                SAULO<span className="text-secondary">LEÃO</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Especialista em engenharia elétrica com mais de 15 anos de experiência, focado em segurança, normas técnicas e eficiência energética.
            </p>
            
          </div>

          <div>
            <h4 className="font-bold text-primary mb-6">Navegação</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#home" className="hover:text-secondary transition-colors">Início</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Serviços</a></li>
              <li><a href="#how-it-works" className="hover:text-secondary transition-colors">Como Funciona</a></li>
              <li><a href="#testimonials" className="hover:text-secondary transition-colors">Depoimentos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-6">Serviços</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>Projetos Residenciais</li>
              <li>Projetos Comerciais</li>
              <li>Laudos Técnicos</li>
              <li>Regularização Elétrica</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-6">Contato</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex items-center justify-center md:justify-start gap-3"><Phone size={16} className="text-secondary" /> (61) 99421-1392</li>
              <li className="flex items-center justify-center md:justify-start gap-3"><Mail size={16} className="text-secondary" /> 2011saulo@gmail.com</li>
              <li className="flex items-center justify-center md:justify-start gap-3"><MapPin size={16} className="text-secondary" /> Brasília, DF</li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p className="text-center md:text-left">© {new Date().getFullYear()} Saulo Leão - Engenheiro Eletricista. Todos os direitos reservados.</p>
          <div className="text-center md:text-left">
            Desenvolvido com foco em conversão e performance por{' '}
            <Link href="https://gabrielmlemes.vercel.app" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
              Gabriel Lemes
            </Link>.
          </div>
        </div>
      </div>
    </footer>
  );
}
