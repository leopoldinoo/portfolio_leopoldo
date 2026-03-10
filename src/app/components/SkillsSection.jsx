"use client";
import React from "react";
import { color, motion } from "framer-motion";

const skills = [
  {name: "HTML", level: 95, color: "from-orange-500 to-orange-400"},
  {name: "CSS", level: 95, color: "from-blue-500 to-blue-400"},
  {name: "JavaScript", level: 75, color: "from-yellow-500 to-yellow-400"},
  {name: "React", level: 50, color: "from-cyan-500 to-cyan-400" },
  {name: "Node.js", level: 60, color: "from-emerald-500 to-emerald-400" },
  {name: "Tailwind", level: 80, color: "from-teal-500 to-teal-400" },
  {name: "PHP", level: 30, color: "from-gray-500 to-gray-400" },
  {name: "SQL", level: 60, color: "from-purple-500 to-purple-400" },
  {name: "Git e GitHub", level: 80, color: "from-pink-500 to-pink-400" },
];
export default function SkillsSection() {
return (
  <section id="skills" className="relative py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40}}
        whileInView={{ opacity: 1, y: 0}}
        viewport={{ once: true, margin: "-100px"}}
        transition={{ duration: 0.7}}
        className="text-center mb-16">
          <p className="text-sm font-medium text-purple-400 tracking-widest uppercase">Níveis de Linguagem</p>
          <h2 className="text-3xl mt-2 sm:text-4xl font-bold text-white">Habilidades e Tecnologias</h2>
          <p className="text-sm mt-4 text-zinc-500 max-w-lg mx-auto">Tecnologias que utilizo para dar vida às minhas ideias — aprendendo e evoluindo constantemente.</p>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, i ) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20}}
            whileInView={{ opacity: 1, y: 0}}
            viewport={{ once: true}}
            transition={{ delay: i * 0.05, duration: 0.4}}
            className="group p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-white">
                  {skill.name}
                </span>
                <span className="text-xs text-zinc-500 font-medium">
                  {skill.level}%
                </span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.10 + 0.8, duration: 0.8, ease: "easeOut" }}
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                />
              </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)};