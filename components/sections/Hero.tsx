"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2, delay },
  });

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Interactive Spotlight */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 opacity-50"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.06), transparent 80%)`
        }}
      />

      {/* Ambient background glow */}
      <motion.div
        style={{ 
          y: y1, 
          opacity,
          background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 70%)"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] pointer-events-none"
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center pt-20">
        <motion.div {...fadeUp(0.1)} className="mb-12">
          <span className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/[0.05] bg-white/[0.02] text-[10px] font-medium tracking-[0.3em] text-foreground/40 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 animate-pulse" />
            Digital Craftsman © 2026
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.3)}
          className="text-[clamp(4rem,15vw,10rem)] font-medium tracking-[-0.04em] text-foreground leading-[0.85] uppercase mb-10"
        >
          Atharva
          <br />
          <span className="text-foreground/20">Padalghare</span>
        </motion.h1>

        <motion.div {...fadeUp(0.5)} className="flex items-center gap-4 mb-16">
          <div className="h-px w-12 bg-white/10" />
          <p className="text-[13px] font-medium tracking-[0.35em] text-foreground/40 uppercase">
            Engineering Precision · Visual Elegance
          </p>
          <div className="h-px w-12 bg-white/10" />
        </motion.div>

        <motion.p
          {...fadeUp(0.65)}
          className="text-lg md:text-2xl text-foreground/40 font-light leading-relaxed max-w-2xl mb-20 text-balance"
        >
          I build complete digital products — from robust backend systems to interfaces that feel effortless.
        </motion.p>

        <motion.div {...fadeUp(0.8)} className="flex flex-col md:flex-row items-center gap-8">
          <Link
            href="#projects"
            className="group relative inline-flex items-center gap-4 px-10 py-5 bg-foreground text-background text-[11px] font-semibold tracking-[0.2em] uppercase rounded-full hover:scale-105 transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10">Explore Work</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
          </Link>
          <Link
            href="#contact"
            className="text-[11px] font-medium tracking-[0.2em] uppercase text-foreground/30 hover:text-foreground transition-colors duration-500 underline-offset-8 hover:underline"
          >
            Get in touch
          </Link>
        </motion.div>
      </div>

      {/* Side Label */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 2 }}
        className="absolute left-10 bottom-10 hidden lg:block"
      >
        <p className="text-[9px] tracking-[0.5em] text-foreground/10 uppercase vertical-text">
          Atharva Padalghare — Portfolio v3.0
        </p>
      </motion.div>
    </section>
  );
}
