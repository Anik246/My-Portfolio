'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const ROWS = [
  {
    institution: 'United International University',
    location: 'Dhaka, Bangladesh',
    program: 'B.Sc. Computer Science & Engineering',
    year: '2025',
    note: 'CGPA 3.46 / 4.00',
    tone: 'emerald' as const,
  },
  {
    institution: 'Govt. Syed Hatem Ali College',
    location: 'Barishal, Bangladesh',
    program: 'Higher Secondary Certificate — Science',
    year: '2019',
    note: 'GPA 4.42 / 5.00',
    tone: 'sky' as const,
  },
  {
    institution: 'Collegiate High School',
    location: 'Barishal, Bangladesh',
    program: 'Secondary School Certificate — Science',
    year: '2017',
    note: 'GPA 5.00 / 5.00',
    tone: 'violet' as const,
  },
];

const toneClass = {
  emerald: 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20',
  sky: 'bg-sky-500/10 text-sky-300 border border-sky-500/20',
  violet: 'bg-violet-500/10 text-violet-300 border border-violet-500/20',
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const, delay },
});

export default function EducationSection({ id = 'education' }: { id?: string }) {
  return (
    <section id={id} className="py-16 md:py-20">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">

        {/* Section header */}
        <motion.div {...fadeUp(0)} className="mb-8">
          <h2 className="flex items-center gap-2.5 text-3xl sm:text-4xl font-bold text-white tracking-tight">
            <GraduationCap className="h-6 w-6 text-zinc-400" />
            Education
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {ROWS.map((r, i) => (
            <motion.div
              key={r.institution}
              {...fadeUp(0.05 + i * 0.05)}
              className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-4 sm:p-6 hover:border-white/[0.15] transition-colors"
            >
              <p className="text-sm text-zinc-500 mb-1">{r.location} · {r.year}</p>
              <h3 className="text-base font-semibold text-white mb-2 leading-snug">{r.institution}</h3>
              <p className="text-sm text-zinc-400 mb-4 leading-relaxed">{r.program}</p>
              <span className={`inline-flex items-center rounded-lg px-3 py-1.5 text-xs font-semibold ${toneClass[r.tone]}`}>
                {r.note}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
