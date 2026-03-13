"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
         <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
           <path d="M0 50 Q 25 25, 50 50 T 100 50" stroke="white" strokeWidth="0.5" fill="none" />
           <path d="M0 70 Q 25 45, 50 70 T 100 70" stroke="white" strokeWidth="0.5" fill="none" />
         </svg>
      </div>

      <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Precisa de um projeto elétrico <span className="text-secondary underline underline-offset-8">seguro?</span>
          </h2>
          <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto font-medium">
            Não arrisque seu investimento. Fale agora mesmo com um engenheiro especialista e garanta conformidade e segurança.
          </p>
          
          <motion.a
            href="https://wa.me/61994211392?text=Ol%C3%A1!%20Vim%20pelo%20site%20Saulo%20Le%C3%A3o%20e%20gostaria%20de%20um%20or%C3%A7amento."
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="inline-flex items-center gap-3 bg-secondary text-secondary-foreground px-12 py-6 rounded-full font-bold text-2xl shadow-2xl shadow-secondary/40 hover:scale-110 transition-transform"
          >
            <MessageCircle size={32} />
            Falar no WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
