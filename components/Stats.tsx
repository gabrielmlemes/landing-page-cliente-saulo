"use client";

import { motion } from "framer-motion";
import { Users, Building2, FileCheck, Award } from "lucide-react";

export default function Stats() {
  const stats = [
    { label: "+15 anos", description: "De experiência no mercado", icon: Award },
    { label: "+500", description: "Projetos realizados", icon: FileCheck },
    { label: "100+", description: "Empresas atendidas", icon: Building2 },
    { label: "100%", description: "Satisfação dos clientes", icon: Users },
  ];

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="text-secondary w-10 h-10" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">
                {stat.label}
              </h3>
              <p className="text-blue-200 text-sm font-medium uppercase tracking-wider">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
