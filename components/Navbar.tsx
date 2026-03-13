"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap, Phone, Instagram, Linkedin, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloqueia o scroll quando o menu mobile está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Início", href: "#home" },
    { name: "Serviços", href: "#services" },
    { name: "Como Funciona", href: "#how-it-works" },
    { name: "Depoimentos", href: "#testimonials" },
  ];

  const menuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: { 
      opacity: 1, 
      x: 0,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Zap className="text-secondary w-8 h-8 fill-secondary" />
            <span className="text-xl font-bold tracking-tighter text-primary">
              SAULO<span className="text-secondary">LEÃO</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-primary/80 hover:text-secondary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/5561994211392?text=Ol%C3%A1!%20Vim%20pelo%20site%20Saulo%20Le%C3%A3o%20e%20gostaria%20de%20um%20or%C3%A7amento."
              className="bg-secondary text-secondary-foreground px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform flex items-center gap-2"
            >
              <MessageCircle size={16} />
              Falar no WhatsApp
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-primary"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={32} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Movido para fora da tag <nav> para garantir posicionamento absoluto real */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-primary z-[100] flex flex-col md:hidden overflow-y-auto"
          >
            {/* Header within Mobile Menu */}
            <div className="flex justify-between items-center p-6 border-b border-white/10 shrink-0">
              <div className="flex items-center gap-2">
                <Zap className="text-secondary w-8 h-8 fill-secondary" />
                <span className="text-xl font-bold tracking-tighter text-white">
                  SAULO<span className="text-secondary">LEÃO</span>
                </span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white p-2">
                <X size={32} />
              </button>
            </div>

            {/* Links Content */}
            <div className="flex flex-col px-8 pt-12 pb-8 gap-8">
              {navLinks.map((link) => (
                <motion.a
                  variants={itemVariants}
                  key={link.name}
                  href={link.href}
                  className="text-3xl font-bold text-white hover:text-secondary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              
              <motion.div variants={itemVariants} className="pt-4">
                <a
                  href="https://wa.me/5561994211392?text=Ol%C3%A1!%20Vim%20pelo%20site%20Saulo%20Le%C3%A3o%20e%20gostaria%20de%20um%20or%C3%A7amento."
                  className="bg-secondary text-secondary-foreground w-full py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 shadow-xl shadow-secondary/20"
                  onClick={() => setIsOpen(false)}
                >
                  <MessageCircle size={24} />
                  Solicitar Orçamento
                </a>
              </motion.div>
            </div>

            {/* Footer Mobile Menu */}
            <div className="mt-auto p-8 bg-white/5 space-y-6 shrink-0 text-center">
              <div className="flex flex-col items-center justify-center gap-3">
                <p className="text-white/50 text-xs uppercase tracking-widest font-bold">Contato Direto</p>
                <a href="tel:+5561994211392" className="flex items-center gap-3 text-white font-medium">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone size={18} className="text-secondary" />
                  </div>
                  (61) 99421-1392
                </a>
              </div>
              
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
