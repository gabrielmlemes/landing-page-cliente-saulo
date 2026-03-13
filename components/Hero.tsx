"use client";

import { motion } from "framer-motion";
import { ChevronRight, ShieldCheck, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-primary/5 hidden lg:block" />
      <div className="absolute top-[-10%] right-[-5%] -z-10 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <ShieldCheck size={18} />
            Engenheiro com +15 anos de experiência
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-primary mb-6">
            Projetos Elétricos <span className="text-secondary">Seguros</span> e Certificados
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            Evite riscos, garanta segurança e tenha seu projeto elétrico aprovado com rapidez por quem entende do assunto.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/61994211392?text=Ol%C3%A1!%20Vim%20pelo%20site%20Saulo%20Le%C3%A3o%20e%20gostaria%20de%20um%20or%C3%A7amento."
              className="bg-secondary text-secondary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-lg shadow-secondary/20"
            >
              Solicitar Orçamento <ChevronRight size={20} />
            </a>
            <a
              href="https://wa.me/61994211392?text=Ol%C3%A1!%20Vim%20pelo%20site%20Saulo%20Le%C3%A3o%20e%20gostaria%20de%20um%20or%C3%A7amento."
              className="bg-white border-2 border-primary/20 text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/5 transition-colors flex items-center justify-center gap-2"
            >
              Falar no WhatsApp
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-10"
        >
          <div className="relative z-10 w-full aspect-square max-w-[500px] mx-auto bg-gradient-to-br from-primary to-blue-600 rounded-3xl shadow-2xl flex items-center justify-center p-8 group">
             {/* Abstract Circuit Pattern */}
             <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden rounded-3xl">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0 20 H30 V0 M30 20 V40 H60 V20 M60 40 V60 H100 M60 60 V100" stroke="white" strokeWidth="0.5" fill="none" />
                  <path d="M10 10 H20 V30 H0" stroke="white" strokeWidth="0.5" fill="none" />
                  <circle cx="30" cy="20" r="1" fill="white" />
                  <circle cx="60" cy="40" r="1" fill="white" />
                  <circle cx="100" cy="60" r="1" fill="white" />
                </svg>
             </div>
             
             <div className="relative text-white text-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="inline-block p-6 bg-white/10 rounded-full backdrop-blur-sm mb-6"
                >
                  <Zap size={80} className="fill-secondary text-secondary" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-2">Conformidade Total</h3>
                <p className="opacity-80">Projetos rigorosamente dentro das normas técnicas vigentes.</p>
             </div>

             {/* Floating badge */}
             <div className="absolute -bottom-2 -left-6 bg-white p-6 rounded-2xl shadow-2xl z-20 border border-gray-100 hidden sm:block">
                <p className="text-primary font-bold text-4xl mb-1">15+</p>
                <p className="text-gray-500 text-sm font-medium">Anos de Mercado</p>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
