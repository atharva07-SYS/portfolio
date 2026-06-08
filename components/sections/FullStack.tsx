"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Database, Server, Code } from "lucide-react";

const projects = [
  {
    title: "She Can Connect",
    description: "A comprehensive MERN stack platform empowering women in tech through mentorship, community engagement, and resource sharing.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Vercel", "Render"],
    liveUrl: "https://shecan-fi3i.onrender.com/", // Placeholder, will let user know to update
    gridSpan: "md:col-span-12",
    bg: "bg-gradient-to-br from-purple-500/[0.05] to-pink-500/[0.05]",
  }
];

export default function FullStack() {
  return (
    <section id="fullstack" className="py-24 px-6 bg-black/20">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <Database className="w-4 h-4 text-purple-400" />
              <Server className="w-4 h-4 text-pink-400" />
              <Code className="w-4 h-4 text-blue-400" />
              <p className="text-[10px] font-medium tracking-[0.3em] text-foreground/50 uppercase ml-2">
                Full Stack Architecture
              </p>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-medium tracking-tighter text-foreground"
            >
              End-to-End <br />
              <span className="text-foreground/30">Engineering.</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <p className="text-sm text-foreground/40 font-light text-right max-w-xs">
              Complex data structures and scalable backend systems seamlessly integrated with modern frontend interfaces.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`${project.gridSpan} group relative min-h-[400px] rounded-3xl border border-white/[0.05] overflow-hidden ${project.bg}`}
            >
              <Link href={project.liveUrl} target="_blank" className="flex flex-col h-full p-12">
                <div className="flex items-start justify-between mb-12">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.03] text-[10px] font-medium tracking-widest text-foreground/60 uppercase shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-4 group-hover:translate-y-0 shadow-lg">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                <div className="mt-auto max-w-3xl">
                  <h3 className="text-4xl font-medium tracking-tight text-white mb-4 group-hover:translate-x-2 transition-transform duration-500">
                    {project.title}
                  </h3>
                  <p className="text-lg text-foreground/60 font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Subtle Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
