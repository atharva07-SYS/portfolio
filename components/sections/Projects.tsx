"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Agency Website",
    description: "Premium digital experience for a modern creative agency.",
    tags: ["Next.js", "Framer"],
    liveUrl: "https://demoagency.vercel.app/",
    gridSpan: "md:col-span-4",
    bg: "bg-white/[0.01]",
  },
  {
    title: "Backend Core",
    description: "Robust architecture for high-scale apps.",
    tags: ["Node", "Supabase"],
    liveUrl: "#",
    gridSpan: "md:col-span-4",
    bg: "bg-white/[0.01]",
  },
  {
    title: "UI System",
    description: "Modular design language for scalable products.",
    tags: ["Design", "React"],
    liveUrl: "#",
    gridSpan: "md:col-span-4",
    bg: "bg-white/[0.01]",
  },
  {
    title: "AI Integration",
    description: "Next-gen automation tools with LLM precision.",
    tags: ["OpenAI", "Python"],
    liveUrl: "#",
    gridSpan: "md:col-span-8",
    bg: "bg-white/[0.03]",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10px] font-medium tracking-[0.3em] text-foreground/30 uppercase mb-4"
            >
              Selected Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-medium tracking-tighter text-foreground"
            >
              Building digital <br />
              <span className="text-foreground/30">excellence.</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <p className="text-sm text-foreground/40 font-light text-right max-w-xs">
              A curated collection of projects where engineering meets artistry.
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
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`${project.gridSpan} group relative min-h-[360px] bento-card`}
            >
              <Link href={project.liveUrl} target="_blank" className="flex flex-col h-full p-10">
                <div className="flex items-start justify-between mb-8">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full border border-white/[0.05] bg-white/[0.02] text-[9px] font-medium tracking-widest text-foreground/30 uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/[0.1] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight className="w-4 h-4 text-foreground/60" />
                  </div>
                </div>

                <div className="mt-auto">
                  <h3 className="text-2xl font-medium tracking-tight text-foreground mb-3 group-hover:translate-x-2 transition-transform duration-500">
                    {project.title}
                  </h3>
                  <p className="text-sm text-foreground/40 font-light leading-relaxed max-w-sm">
                    {project.description}
                  </p>
                </div>

                {/* Subtle Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
