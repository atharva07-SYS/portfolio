"use client";

import { motion } from "framer-motion";
import { Award, Users, Target } from "lucide-react";

const activities = [
  {
    role: "Core Club Member",
    organization: "University Club",
    description: "Collaborating on campus-wide initiatives, technical workshops, and community events to foster developer culture.",
    icon: Users,
    gridSpan: "md:col-span-4",
  },
  {
    role: "Design & Marketing Lead",
    organization: "University Club",
    description: "Directing the visual identity and promotional campaigns for major club events, driving student engagement and media outreach.",
    icon: Target,
    gridSpan: "md:col-span-8",
  },
  {
    role: "Event Organizer",
    organization: "University Level Competitions",
    description: "Coordinating logistics, sponsorship acquisition, scheduling, and judge panels for university-wide technical contests.",
    icon: Award,
    gridSpan: "md:col-span-12",
  },
];

export default function ExtraCurriculars() {
  return (
    <section id="extracurriculars" className="py-32 px-6 bg-white/[0.005]">
      <div className="w-full max-w-6xl mx-auto">
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-medium tracking-[0.3em] text-foreground/30 uppercase mb-4"
          >
            Leadership & Culture
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-medium tracking-tighter text-foreground"
          >
            Extra-Curriculars <span className="text-foreground/30">& Roles.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {activities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`${item.gridSpan} group relative p-10 bento-card min-h-[220px] flex flex-col justify-between`}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 rounded-full border border-white/[0.05] bg-white/[0.02] text-[9px] font-medium tracking-widest text-foreground/30 uppercase">
                    {item.organization}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-white/[0.05] flex items-center justify-center text-foreground/30 group-hover:text-foreground/80 transition-colors duration-300">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="mt-auto">
                  <h3 className="text-xl font-medium tracking-tight text-foreground mb-2 group-hover:translate-x-1 transition-transform duration-500">
                    {item.role}
                  </h3>
                  <p className="text-sm text-foreground/40 font-light leading-relaxed max-w-xl">
                    {item.description}
                  </p>
                </div>

                {/* Subtle Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
