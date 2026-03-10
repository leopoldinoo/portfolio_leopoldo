"use client"; // Necessário para animações no Next.js App Router
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Componente de efeito de digitação
const TypingText = ({ text, delay = 0, onComplete }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 50 + delay); // Velocidade de digitação rápida

      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, delay, onComplete]);

  return displayText;
};

export default function HeroSection() {
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 overflow-hidden">

      {/* Círculo de brilho suave no fundo para profundidade */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -z-10" />

      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-400 to-blue-200 mb-6"
      >
        <TypingText
          text="Olá, Eu Sou o Otávio Leopoldino"
          onComplete={() => setIsTypingComplete(true)}
        />
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: isTypingComplete ? 0.2 : 1.5,
          duration: 0.5,
          ease: "easeOut"
        }}
        className="text-lg md:text-xl max-w-2xl text-gray-300 leading-relaxed"
      >
        Transformando ideias complexas em <span className="text-blue-400 font-mono">aplicações completas</span> e escaláveis.
      </motion.p>

      {/* Botão de Call to Action (CTA) - Essencial para um portfólio */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: isTypingComplete ? 0.4 : 1.7,
          duration: 0.5,
          ease: "easeOut"
        }}
        className="mt-10"
      >
        <a href="#projetos" className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-blue-400 transition-colors hover:scale-105">
          Ver Projetos
        </a>
      </motion.div>

    </section>
  );
}
