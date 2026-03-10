"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "App de Tarefas baseado em jogos RPG.",
    desc: "Um aplicativo de gerenciamento de tarefas inspirado em jogos de RPG, com mecânicas de progressão e recompensas.",
    image:
      "leveluplife.png",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
  },
  {
    title: "Task Management App",
    desc: "Collaborative project management tool with Kanban boards and team workflows.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    tags: ["TypeScript", "Next.js", "Prisma", "Tailwind"],
  },
  {
    title: "AI Chat Interface",
    desc: "Conversational AI platform with natural language processing and smart responses.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    tags: ["Python", "FastAPI", "OpenAI", "React"],
  },
  {
    title: "Finance Dashboard",
    desc: "Real-time financial analytics with interactive charts and automated reporting.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["Vue.js", "D3.js", "Firebase", "Charts"],
  },
  {
    title: "Social Media App",
    desc: "Mobile-first social platform with real-time messaging and content sharing.",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    tags: ["React Native", "GraphQL", "MongoDB", "Socket.io"],
  },
  {
    title: "Portfolio Generator",
    desc: "Drag-and-drop website builder for creating developer portfolios in minutes.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    tags: ["JavaScript", "CSS", "HTML", "API"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-blue-400 tracking-widest uppercase mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Meus Projetos
          </h2>
          <p className="mt-4 text-gray-500 max-w-lg mx-auto">
            Uma seleção de projetos que demonstram minhas habilidades em design,
            desenvolvimento e resolução de problemas.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden hover:border-white/10 transition-all duration-500"
            >
              <div className="relative h-20 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/40 backdrop-blur-sm">
                  <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-all duration-200 backdrop-blur-md">
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </button>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-white/5 text-gray-400 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
