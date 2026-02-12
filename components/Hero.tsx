"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-[70vh] max-w-5xl flex-col items-start justify-center gap-8 px-4 pt-10 md:min-h-[80vh] md:px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="space-y-4"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 shadow-soft">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Aspiring Cybersecurity Analyst
        </span>

        <h1 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
          Hi, I&apos;m <span className="text-emerald-400">Sakshi Singh</span>.
          <br />
          I document my hands-on cybersecurity learning.
        </h1>

        <p className="max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
          I&apos;m transitioning into cybersecurity with a strong software
          engineering foundation. This portfolio showcases my practical
          projects, labs, and real network traffic analysis as I grow towards a
          SOC-focused role.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <motion.a
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="#projects"
            className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-soft transition hover:bg-emerald-400"
          >
            View Projects
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm font-semibold text-slate-100 shadow-soft transition hover:border-emerald-400/70 hover:text-emerald-200"
          >
            View GitHub
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        className="mt-6 grid w-full gap-4 text-xs text-slate-300 sm:grid-cols-3"
      >
        <div className="gradient-border rounded-xl border border-slate-800/60 bg-slate-900/40 p-4">
          <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
            Focus
          </p>
          <p className="mt-2 text-sm font-medium text-slate-100">
            Network security, log analysis & web vulnerabilities
          </p>
        </div>
        <div className="gradient-border rounded-xl border border-slate-800/60 bg-slate-900/40 p-4">
          <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
            Background
          </p>
          <p className="mt-2 text-sm font-medium text-slate-100">
            Java &amp; Python backend with growing SOC mindset
          </p>
        </div>
        <div className="gradient-border rounded-xl border border-slate-800/60 bg-slate-900/40 p-4">
          <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
            Approach
          </p>
          <p className="mt-2 text-sm font-medium text-slate-100">
            Learn by doing, documenting, and breaking down real-world attacks.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

