"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/atharva-padalghare-967814370",
  },
  { label: "GitHub", href: "https://github.com/atharva07-SYS" },
  { label: "Email", href: "mailto:the.real.atharva@gmail.com" },
];

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        const json = await res.json().catch(() => ({}));
        setErrorMsg(json.error || "Something went wrong.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error — please try again.");
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-transparent border-b border-white/[0.08] py-4 text-base font-light text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-foreground/30 transition-colors duration-300";
  const labelClass =
    "block text-[10px] font-medium tracking-[0.2em] text-foreground/30 uppercase mb-3";

  return (
    <section id="contact" className="py-24 md:py-32 px-6">
      <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[11px] font-medium tracking-[0.25em] text-foreground/30 uppercase mb-3"
        >
          Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl font-medium tracking-tighter text-foreground leading-none mb-20"
        >
          Let's build
          <br />
          <span className="text-foreground/25">something great.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-20">
          {/* Left sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-4 flex flex-col justify-between gap-12"
          >
            <div>
              <p className="text-sm text-foreground/40 font-light leading-[1.9] mb-10">
                Whether you have a project idea, want to collaborate, or just
                want to say hello — I'd love to hear from you.
              </p>

              <div className="space-y-5">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="flex items-center justify-between group"
                  >
                    <span className="text-sm font-light text-foreground/50 group-hover:text-foreground transition-colors duration-300">
                      {s.label}
                    </span>
                    <svg
                      className="w-3.5 h-3.5 text-foreground/20 group-hover:text-foreground/50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 17L17 7M17 7H7M17 7v10"
                      />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Subtle location badge */}
            <p className="text-[10px] tracking-[0.2em] text-foreground/20 uppercase">
              Based in India · Remote Available
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="md:col-span-8"
          >
            {status === "success" ? (
              <div className="flex flex-col items-start gap-4 py-12">
                <span className="text-4xl font-light text-foreground tracking-tighter">
                  Message received.
                </span>
                <p className="text-sm text-foreground/40 font-light">
                  I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 text-[11px] tracking-[0.2em] text-foreground/30 uppercase hover:text-foreground/50 transition-colors"
                >
                  Send another →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className={labelClass}>
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="Project Inquiry"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Error */}
                {status === "error" && (
                  <p className="text-sm text-red-400/70 font-light">
                    {errorMsg}
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group inline-flex items-center gap-3 px-7 py-3.5 bg-foreground text-background text-[12px] font-medium tracking-[0.15em] uppercase rounded-full hover:bg-foreground/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <svg
                        className="w-4 h-4 animate-spin"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg
                        className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
