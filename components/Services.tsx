"use client";

import { motion } from "framer-motion";
import { Home, Building, ClipboardList, ShieldAlert, CheckSquare, Lightbulb } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Projeto Elétrico Residencial",
      description: "Planejamento completo para sua casa, garantindo segurança e economia de energia.",
      icon: Home,
    },
    {
      title: "Projeto Elétrico Comercial",
      description: "Soluções robustas para comércios e empresas, focadas em alta performance e normas.",
      icon: Building,
    },
    {
      title: "Laudos Técnicos",
      description: "Emissão de laudos periciais e vistorias para garantir a conformidade da instalação.",
      icon: ClipboardList,
    },
    {
      title: "Regularização Elétrica",
      description: "Adequação de instalações antigas ou irregulares perante os órgãos competentes.",
      icon: CheckSquare,
    },
    {
      title: "Adequação às Normas",
      description: "Atualização de sistemas elétricos conforme NBR 5410 e outras normas vigentes.",
      icon: ShieldAlert,
    },
    {
      title: "Consultoria Especializada",
      description: "Suporte técnico estratégico para novos projetos ou resolução de problemas complexos.",
      icon: Lightbulb,
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">O que entrego</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">Serviços Especializados</h3>
          <p className="text-gray-600">Ofereço soluções completas em engenharia elétrica, sempre focando na segurança, eficiência e total conformidade técnica.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 transition-all group"
            >
              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <service.icon className="text-primary w-8 h-8 group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-4">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
