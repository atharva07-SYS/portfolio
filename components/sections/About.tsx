"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-40 px-6">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-20 items-center">
        <div className="md:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-5xl lg:text-6xl text-foreground font-light leading-[1.1] tracking-tight text-balance"
          >
            I craft digital products that combine <span className="text-foreground/30 italic">clean engineering</span> with a deep command of <span className="text-foreground/30">user psychology.</span>
          </motion.p>
        </div>
        
        <div className="md:col-span-5 space-y-10">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="h-px w-full bg-white/10" />
            <p className="text-sm md:text-base text-foreground/40 font-light leading-relaxed">
              Based in India, I'm a Full Stack Developer & UI/UX Designer currently studying at Sanjay Ghodawat University. My approach is rooted in the belief that software should be as intuitive as it is powerful.
            </p>
            <div className="flex items-center gap-12">
              <div>
                <p className="text-2xl font-medium text-foreground tracking-tighter">03+</p>
                <p className="text-[10px] tracking-[0.2em] text-foreground/20 uppercase">Years XP</p>
              </div>
              <div>
                <p className="text-2xl font-medium text-foreground tracking-tighter">10+</p>
                <p className="text-[10px] tracking-[0.2em] text-foreground/20 uppercase">Projects</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
