"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    year: "2026",
    title: "SIH College Round — 2nd Rank",
    desc: "Engineered a full-stack solution under pressure, securing top recognition.",
  },
  {
    year: "2025",
    title: "NASA Space Apps — Global Participant",
    desc: "Collaborated with international developers to solve space-data challenges.",
  },
  {
    year: "2024",
    title: "OpenAI × NxtWave Program",
    desc: "Explored generative AI integration and advanced development paradigms.",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-32 px-6">
      <div className="w-full max-w-4xl mx-auto">
        <div className="mb-24 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] font-medium tracking-[0.4em] text-foreground/30 uppercase mb-6"
          >
            Chronology
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-medium tracking-tighter text-foreground"
          >
            Milestones.
          </motion.h2>
        </div>

        <div className="flex flex-col gap-1">
          {milestones.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-t border-white/[0.05] hover:bg-white/[0.01] transition-colors px-6 rounded-xl"
            >
              <div className="md:col-span-2">
                <span className="text-sm font-medium text-foreground/20 group-hover:text-foreground/60 transition-colors">
                  {item.year}
                </span>
              </div>
              <div className="md:col-span-10">
                <h3 className="text-xl md:text-2xl font-medium text-foreground mb-4 group-hover:translate-x-2 transition-transform duration-500">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-foreground/40 font-light leading-relaxed max-w-xl">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-white/[0.05]" />
        </div>
      </div>
    </section>
  );
}
