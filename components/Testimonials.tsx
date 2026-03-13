"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Carlos Alberto",
      city: "Brasília, DF",
      text: "O projeto elétrico da minha fábrica foi entregue com extrema agilidade e precisão técnica. Aprovamos tudo de primeira na vistoria. Recomendo fortemente.",
    },
    {
      name: "Mariana Silva",
      city: "Brasília, DF",
      text: "Contratei para o laudo técnico do meu condomínio. Profissionalismo impecável e conhecimento profundo das normas. Nos trouxe muita segurança.",
    },
    {
      name: "Ricardo Mendes",
      city: "Brasília, DF",
      text: "Fez a regularização da parte elétrica do meu comércio. Tudo agora está dentro das normas e as quedas de energia pararam. Excelente serviço.",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">Depoimentos</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">O que os clientes dizem</h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial: { name: string; city: string; text: string }, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-10 rounded-[40px] relative border border-gray-100"
            >
              <Quote className="absolute top-8 right-8 text-primary/10 w-12 h-12" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-8 leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div>
                <h4 className="font-bold text-primary text-lg">{testimonial.name}</h4>
                <p className="text-gray-500 text-sm">{testimonial.city}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
