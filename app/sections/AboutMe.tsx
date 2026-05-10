'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

type Props = { id?: string };

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const, delay },
});

const SKILLS = ['Python', 'JavaScript', 'TypeScript', 'C/C++', 'React', 'Next.js', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL', 'REST APIs', 'Git', 'Docker', 'Computer Vision', 'PyTorch', 'Scikit-learn'];

const FOCUS = [
  { label: 'AI Research', body: 'Building and evaluating deep learning models for real-world perception tasks.' },
  { label: 'Machine Learning', body: 'Designing reproducible experiments with clean pipelines and rigorous evaluation.' },
  { label: 'Human-Computer Interaction', body: 'Creating accessible, user-centered systems that are intuitive and well-designed.' },
];

const CAPABILITIES = [
  'Can design and train deep learning models for computer vision tasks.',
  'Can build reproducible ML pipelines with rigorous evaluation.',
  'Can develop full-stack web applications from API to UI.',
  'Can collaborate across research and engineering disciplines.',
  'Can write clearly about technical work for academic audiences.',
];

export default function AboutMeSection({ id = 'about' }: Props) {
  return (
    <section id={id} className="py-16 md:py-20">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">

        {/* Section header */}
        <motion.div {...fadeUp(0)} className="mb-8">
          <h2 className="flex items-center gap-2.5 text-3xl sm:text-4xl font-bold text-white tracking-tight">
            <User className="h-6 w-6 text-zinc-400" />
            About me
          </h2>
        </motion.div>

        {/* 2-col layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          {/* Left: bio + skills */}
          <motion.div {...fadeUp(0.05)} className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-4 sm:p-6 flex flex-col gap-6">
            <p className="text-base text-zinc-300 leading-relaxed">
              My work sits at the intersection of{' '}
              <span className="text-zinc-200 font-medium">machine learning</span> and{' '}
              <span className="text-zinc-200 font-medium">software engineering</span>.
              During my undergraduate research I designed and evaluated a deep learning pipeline for computer vision,
              leading to a{' '}
              <span className="text-zinc-200 font-medium">peer-reviewed publication</span> at ICTIS 2025 (Springer LNNS).
              I care about clean experimental design, rigorous evaluation, and systems that hold up in practice.
            </p>
            <p className="text-base text-zinc-300 leading-relaxed">
              Outside research I keep active with{' '}
              <span className="text-zinc-200 font-medium">sports</span>, read{' '}
              <span className="text-zinc-200 font-medium">books</span>, and follow developments in{' '}
              <span className="text-zinc-200 font-medium">AI research</span>. These habits keep me curious and help me
              approach problems with both analytical rigour and a fresh perspective.
            </p>

            <div>
              <p className="text-xs font-medium tracking-widest text-zinc-500 uppercase mb-3">Skills</p>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((s) => (
                  <span
                    key={s}
                    className="rounded-lg bg-white/[0.04] border border-white/[0.07] px-3 py-1.5 text-sm text-zinc-300 hover:text-zinc-200 hover:border-white/[0.15] transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: focus + capabilities */}
          <motion.div {...fadeUp(0.08)} className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-4 sm:p-6 flex flex-col gap-6">
            {/* Focus cards */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-medium text-zinc-300">Focus</p>
                <span className="text-xs text-zinc-600">Research + Engineering</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {FOCUS.map((f) => (
                  <div
                    key={f.label}
                    className="rounded-xl bg-white/[0.03] border border-white/[0.07] p-3"
                  >
                    <p className="text-sm text-zinc-400 mb-1.5">{f.label}</p>
                    <p className="text-sm font-medium text-zinc-200 leading-snug">{f.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Capabilities */}
            <div className="flex flex-col gap-2.5">
              {CAPABILITIES.map((c) => (
                <div key={c} className="flex items-start gap-2.5">
                  <span className="mt-0.5 shrink-0 text-[10px] font-bold text-zinc-600 font-mono">&lt;/&gt;</span>
                  <p className="text-base text-zinc-300 leading-snug">{c}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
