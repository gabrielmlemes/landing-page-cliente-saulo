"use client";

import { motion } from "framer-motion";
import { MessageSquare, Search, Code, CheckCircle } from "lucide-react";

export default function Process() {
  const steps = [
    {
      title: "Contato pelo WhatsApp",
      description: "Você me relata a sua necessidade e agendamos uma conversa inicial rápida.",
      icon: MessageSquare,
    },
    {
      title: "Análise do Projeto",
      description: "Avalio as especificidades técnicas e as normas que precisam ser atendidas.",
      icon: Search,
    },
    {
      title: "Desenvolvimento Técnico",
      description: "Crio todo o projeto elétrico detalhado, plantas e diagramas necessários.",
      icon: Code,
    },
    {
      title: "Entrega e Suporte",
      description: "Entrego a documentação completa e damos todo o suporte para a execução.",
      icon: CheckCircle,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">Metodologia</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-primary">Como funciona o atendimento</h3>
        </div>

        <div className="relative">
          {/* Horizontal Line for Desktop */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-primary/10 -translate-y-1/2 hidden lg:block" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative bg-white p-8 rounded-[32px] shadow-lg shadow-gray-200/50 z-10 text-center"
              >
                <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/20">
                  <step.icon size={32} />
                </div>
                <div className="absolute -top-4 -right-2 w-10 h-10 bg-secondary text-primary font-bold rounded-full flex items-center justify-center shadow-md">
                   {index + 1}
                </div>
                <h4 className="text-xl font-bold text-primary mb-4">{step.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
