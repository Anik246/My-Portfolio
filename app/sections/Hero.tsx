'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, FileText, BookOpen, MapPin, Cpu, Telescope } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const, delay },
});

export default function Hero() {
  return (
    <section className="pt-16 pb-8 md:pt-20 md:pb-12">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start">

          {/* ── LEFT: Name, bio, CTAs ── */}
          <motion.div {...fadeUp(0)}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold tracking-tight text-white leading-[1.0] mb-6">
              Shahriar<br />Rahman
            </h1>
            <p className="text-lg text-zinc-300 leading-relaxed mb-8 max-w-lg">
              A builder, designer, and published researcher with a{' '}
              <span className="text-white font-semibold">published deep learning paper (ICTIS 2025, Springer LNNS)</span>{' '}
              and hands-on experience building ML-integrated systems in production. Skilled in computer vision,
              human-computer interaction, and full-stack AI application development.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-white text-[#0b0f14] hover:bg-zinc-200 px-5 py-2.5 text-sm font-semibold transition"
              >
                Get in touch
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href="/api/resume"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white/[0.05] border border-white/[0.10] hover:bg-white/[0.09] px-5 py-2.5 text-sm font-semibold text-zinc-200 transition"
              >
                <FileText className="h-4 w-4" />
                View CV
              </a>
              <a
                href="https://github.com/Anik246"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white/[0.05] border border-white/[0.10] hover:bg-white/[0.09] px-5 py-2.5 text-sm font-semibold text-zinc-400 transition"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>

            {/* Location */}
            <div className="flex flex-wrap gap-2">
              {[
                { flag: '🇨🇦', city: 'Scarborough, Ontario' },
                { flag: '🇧🇩', city: 'Dhaka, Bangladesh' },
              ].map(({ flag, city }) => (
                <div
                  key={city}
                  className="inline-flex items-center gap-2 rounded-lg bg-white/[0.04] border border-white/[0.07] px-3 py-1.5 text-sm text-zinc-400"
                >
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-zinc-600" />
                  <span>{flag} {city}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: Bento stat cards ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

            {/* Publication — wide */}
            <motion.div
              {...fadeUp(0.08)}
              className="sm:col-span-2 rounded-2xl bg-white/[0.03] border border-white/[0.08] p-4 sm:p-5 flex items-center justify-between gap-4 hover:border-white/[0.15] transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="h-11 w-11 shrink-0 rounded-xl bg-indigo-500/10 border border-indigo-500/20 grid place-items-center">
                  <BookOpen className="h-5 w-5 text-indigo-400" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 mb-0.5">Peer-reviewed Publication</p>
                  <p className="text-base font-semibold text-white leading-snug">ICTIS 2025 — Springer LNNS</p>
                </div>
              </div>
              <span className="shrink-0 rounded-md bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 text-xs font-semibold text-indigo-400">
                Published
              </span>
            </motion.div>

            {/* Open to opportunities */}
            <motion.div
              {...fadeUp(0.12)}
              className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-4 sm:p-5 hover:border-white/[0.15] transition-colors"
            >
              <div className="h-9 w-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 grid place-items-center mb-4">
                <Telescope className="h-4 w-4 text-emerald-400" />
              </div>
              <p className="text-xs text-zinc-500 mb-2">Currently Seeking</p>
              <p className="text-base font-semibold text-white leading-snug mb-1">Graduate Research</p>
              <p className="text-sm text-zinc-400">MSc opportunities in AI & ML</p>
            </motion.div>

            {/* Research focus */}
            <motion.div
              {...fadeUp(0.16)}
              className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-4 sm:p-5 hover:border-white/[0.15] transition-colors"
            >
              <div className="h-9 w-9 rounded-xl bg-violet-500/10 border border-violet-500/20 grid place-items-center mb-4">
                <Cpu className="h-4 w-4 text-violet-400" />
              </div>
              <p className="text-xs text-zinc-500 mb-3">Research Focus</p>
              <div className="flex flex-col gap-1.5">
                {['Machine Learning', 'Artificial Intelligence', 'Human-Computer Interaction'].map((t) => (
                  <span key={t} className="text-sm font-medium text-zinc-300">{t}</span>
                ))}
              </div>
            </motion.div>

            {/* Core tech — wide */}
            <motion.div
              {...fadeUp(0.2)}
              className="sm:col-span-2 rounded-2xl bg-white/[0.03] border border-white/[0.08] p-4 sm:p-5 hover:border-white/[0.15] transition-colors"
            >
              <p className="text-xs font-medium tracking-widest text-zinc-500 uppercase mb-3">Core Technologies</p>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Machine Learning', 'Computer Vision', 'YOLO', 'React / Next.js', 'Node.js', 'Docker', 'PostgreSQL'].map((s) => (
                  <span
                    key={s}
                    className="rounded-lg bg-white/[0.04] border border-white/[0.07] px-3 py-1.5 text-sm text-zinc-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
