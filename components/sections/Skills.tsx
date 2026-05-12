"use client";

import { motion } from "framer-motion";

const stack = [
  { name: "React", category: "Frontend", level: "Expert" },
  { name: "Next.js", category: "Frontend", level: "Expert" },
  { name: "Tailwind", category: "Design", level: "Expert" },
  { name: "Node.js", category: "Backend", level: "Advanced" },
  { name: "Python", category: "Backend", level: "Advanced" },
  { name: "MongoDB", category: "Database", level: "Expert" },
  { name: "Supabase", category: "Backend", level: "Expert" },
  { name: "UI/UX", category: "Design", level: "Advanced" },
  { name: "Flask", category: "Backend", level: "Advanced" },
  { name: "C++", category: "Languages", level: "Advanced" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 bg-white/[0.01]">
      <div className="w-full max-w-6xl mx-auto">
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-medium tracking-[0.3em] text-foreground/30 uppercase mb-4"
          >
            Capabilities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-medium tracking-tighter text-foreground"
          >
            Technical <span className="text-foreground/30">Arsenal.</span>
          </motion.h2>
        </div>

        <div className="flex flex-wrap gap-3">
          {stack.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="px-8 py-6 rounded-2xl border border-white/[0.05] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-300 flex flex-col gap-1 min-w-[160px]"
            >
              <span className="text-[9px] tracking-widest text-foreground/30 uppercase font-medium">
                {item.category}
              </span>
              <span className="text-lg font-medium text-foreground">
                {item.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
