"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Layers, Zap } from "lucide-react";

const highlights = [
{
  icon: Code2,
  title: "Código Limpo",
  desc: "Desenvolvimento de soluções escaláveis e fáceis de manter, seguindo boas práticas modernas.",
},
{
  icon: Layers,
  title: "Full Stack",
  desc: "Da interface visual precisa ao desenvolvimento de APIs robustas e arquitetura de banco de dados.",
},
{
  icon: Zap,
  title: "Entrega Rápida",
  desc: "Abordagem ágil com iteração rápida e implantação contínua.",
},
];
export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left: Image + decorative */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm">
                <img
                  src="/fotopessoal.jpg"
                  alt="Developer"
                  className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-64 h-64 sm:w-72 sm:h-72 rounded-2xl border border-purple-500/20 -z-10" />
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <p className="text-sm font-medium text-purple-400 tracking-widest uppercase mb-3">
              Sobre Mim
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              Apaixonado por código
              <br />e soluções criativas
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Sou um desenvolvedor de software apaixonado por criar experiências
              digitais modernas, eficientes e visualmente impactantes. Minha
              jornada na tecnologia começou com a curiosidade de entender como
              as coisas funcionam na web, e evoluiu para um grande interesse em
              escrever código limpo e com propósito.
            </p>
            <p className="text-gray-500 leading-relaxed mb-10">
              Sou especializado em desenvolvimento full-stack, com forte foco na
              criação de interfaces intuitivas e sistemas backend confiáveis.
              Quando não estou programando, gosto de explorar novas tecnologias,
              contribuir com projetos open source e continuar aprendendo.
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
                >
                  <item.icon className="w-5 h-5 text-blue-400 mb-3" />
                  <h3 className="text-sm font-semibold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
