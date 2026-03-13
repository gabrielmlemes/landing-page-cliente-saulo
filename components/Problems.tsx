"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Flame, FileX, ZapOff, ShieldX } from "lucide-react";

export default function Problems() {
  const problems = [
    { text: "Alto risco de incêndios por curto-circuito", icon: Flame },
    { text: "Instalações elétricas irregulares ou perigosas", icon: AlertTriangle },
    { text: "Reprovação em vistorias de segurança", icon: FileX },
    { text: "Sobrecargas elétricas frequentes e queima de aparelhos", icon: ZapOff },
    { text: "Falta de segurança e tranquilidade para sua família ou empresa", icon: ShieldX },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">Atenção</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-primary mb-8">Não coloque seu patrimônio e sua vida em risco!</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Instalações elétricas mal planejadas ou sem a supervisão de um profissional qualificado são as principais causas de acidentes e gastos inesperados.
            </p>
            
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-red-50 p-4 rounded-2xl border border-red-100"
                >
                  <problem.icon className="text-red-500 w-6 h-6 shrink-0" />
                  <span className="text-gray-800 font-medium">{problem.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="relative"
          >
             <div className="bg-primary/5 p-12 rounded-[40px] border-2 border-dashed border-primary/20 flex flex-col items-center text-center">
                <AlertTriangle size={100} className="text-destructive mb-8" />
                <h4 className="text-2xl font-bold text-primary mb-4">Evite Problemas Graves</h4>
                <p className="text-gray-600 max-w-sm mb-8">Investir em um projeto elétrico certificado é a forma mais barata de garantir a longevidade do seu imóvel.</p>
                <a
                  href="https://wa.me/61994211392?text=Ol%C3%A1!%20Vim%20pelo%20site%20Saulo%20Le%C3%A3o%20e%20gostaria%20de%20um%20or%C3%A7amento."
                  className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform"
                >
                  Garantir Minha Segurança
                </a>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
