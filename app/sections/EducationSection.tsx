'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

type EduRow = {
  institution: string;
  location: string;
  program: string;
  year: string;
  pills: { text: string; tone: 'green' | 'blue' | 'purple' | 'gray' }[];
};

const rows: EduRow[] = [
  {
    institution: 'United International University',
    location: 'Dhaka, Bangladesh',
    program: 'B.Sc. in Computer Science & Engineering',
    year: '2025',
    pills: [{ text: 'CGPA 3.46 / 4.00 (≈ 86%)', tone: 'green' }],
  },
  {
    institution: 'Govt. Syed Hatem Ali College',
    location: 'Barishal, Bangladesh',
    program: 'Higher Secondary Certificate — Science',
    year: '2019',
    pills: [{ text: 'GPA 4.42 / 5.00', tone: 'blue' }],
  },
  {
    institution: 'Collegiate High School',
    location: 'Barishal, Bangladesh',
    program: 'Secondary School Certificate — Science',
    year: '2017',
    pills: [{ text: 'GPA 5.00 / 5.00', tone: 'purple' }],
  },
];

const pillTone: Record<EduRow['pills'][number]['tone'], string> = {
  green: 'bg-emerald-500/10 text-emerald-200 ring-1 ring-emerald-400/25',
  blue: 'bg-sky-500/10 text-sky-200 ring-1 ring-sky-400/25',
  purple: 'bg-violet-500/10 text-violet-200 ring-1 ring-violet-400/25',
  gray: 'bg-white/6 text-white/70 ring-1 ring-white/10',
};

function Pill({ text, tone }: { text: string; tone: EduRow['pills'][number]['tone'] }) {
  return (
    <span
      className={[
        'inline-flex items-center rounded-full px-3 py-1 text-[13px] font-semibold',
        'backdrop-blur-md',
        pillTone[tone],
      ].join(' ')}
    >
      {text}
    </span>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 14, filter: 'blur(10px)' },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.55, delay: 0.08 + i * 0.06, ease: [0.16, 1, 0.3, 1] },
  }),
};

function MobileEduCard({ r, i }: { r: EduRow; i: number }) {
  return (
    <motion.div
      custom={i}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.99 }}
      className="
        relative overflow-hidden rounded-[20px]
        bg-white/[0.035] backdrop-blur-[16px]
        ring-1 ring-white/10
        shadow-[0_18px_55px_rgba(0,0,0,0.55)]
        p-5
      "
    >
      {/* subtle glow inside card */}
      <div className="pointer-events-none absolute inset-0 opacity-80 [background:radial-gradient(120%_80%_at_30%_0%,rgba(120,150,255,0.16)_0%,rgba(0,0,0,0)_60%)]" />

      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[11px] font-extrabold tracking-[0.18em] text-white/45 uppercase">
            {r.location} • {r.year}
          </p>
          <h3 className="mt-2 text-[18px] font-extrabold text-white tracking-[-0.01em] leading-[1.15]">
            {r.institution}
          </h3>
        </div>

        
      </div>

      <p className="mt-3 text-[14px] leading-[1.7] text-white/60">
        <span className="text-white/85 font-semibold">{r.program}</span>
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        {r.pills.map((p) => (
          <Pill key={p.text} text={p.text} tone={p.tone} />
        ))}
      </div>

      {/* bottom shimmer line */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[1px] opacity-70 [background:linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)]" />
    </motion.div>
  );
}

export default function EducationSectionTable() {
  return (
    <section id="education" className="relative bg-black py-20 md:py-28 overflow-hidden">
     

      <div className="relative mx-auto w-full max-w-[1260px] px-4">
        {/* ✅ HEADER (your design) */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="mb-10 md:mb-16"
        >
          <div className="relative h-[64px]">
            <span className="absolute -left-3 -top-2 select-none text-[#ff3b30] text-[55px] leading-none font-extrabold">
              <GraduationCap />
            </span>

            <p className="absolute left-[7px] top-[28px] text-[14px] font-extrabold tracking-[0.22em] text-white/45 uppercase">
              Academics career
            </p>
          </div>

          {(() => {
            const WORDS = ['Education'];
            const container = { hidden: {}, show: {} };

            const letter = {
              hidden: { y: 18, opacity: 0, filter: 'blur(10px)' },
              show: (i: number) => ({
                y: 0,
                opacity: 1,
                filter: 'blur(0px)',
                transition: { duration: 0.55, delay: 0.1 + i * 0.035, ease: [0.16, 1, 0.3, 1] },
              }),
            };

            let idx = 0;

            return (
              <motion.h2
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-120px' }}
                className="mt-1 text-white font-extrabold tracking-[-0.04em] leading-[0.95] text-[44px] sm:text-[54px] lg:text-[62px]"
              >
                {WORDS.map((w) => (
                  <span key={w} className="inline-block whitespace-nowrap">
                    {Array.from(w).map((ch, ci) => {
                      const i = idx++;
                      return (
                        <motion.span key={`${w}-${ci}`} custom={i} variants={letter} className="inline-block">
                          {ch}
                        </motion.span>
                      );
                    })}
                  </span>
                ))}
              </motion.h2>
            );
          })()}
        </motion.div>

        {/* ✅ MOBILE: compact stacked cards */}
        <div className="md:hidden flex flex-col gap-3">
          {rows.map((r, i) => (
            <MobileEduCard key={r.institution} r={r} i={i} />
          ))}
        </div>

        {/* ✅ DESKTOP: the table style (original look) */}
        <div
          className="
            hidden md:block
            relative overflow-hidden rounded-[26px]
            bg-white/[0.03] backdrop-blur-[16px]
            ring-1 ring-white/10
            shadow-[0_30px_120px_rgba(0,0,0,0.55)]
          "
        >
          {/* top glow */}
          <div className="pointer-events-none absolute inset-0 [background:radial-gradient(120%_60%_at_50%_0%,rgba(120,150,255,0.18)_0%,rgba(0,0,0,0)_55%)]" />

          {/* header row */}
          <div className="grid grid-cols-[1.2fr_1.3fr_0.5fr] px-7 py-4 text-[14px] font-semibold text-white/55 border-b border-white/10">
            <div>Institution • Location</div>
            <div>Program • Notes</div>
            <div className="text-right">Year</div>
          </div>

          {/* rows */}
          <div className="divide-y divide-white/10">
            {rows.map((r, i) => (
              <motion.div
                key={r.institution}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
                className="grid grid-cols-[1.2fr_1.3fr_0.5fr] px-7 py-7"
              >
                <div>
                  <div className="text-[22px] font-extrabold text-white tracking-[-0.01em]">{r.institution}</div>
                  <div className="mt-1 text-[16px] text-white/55">{r.location}</div>
                </div>

                <div>
                  <div className="text-[22px] font-extrabold text-white tracking-[-0.01em]">{r.program}</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {r.pills.map((p) => (
                      <Pill key={p.text} text={p.text} tone={p.tone} />
                    ))}
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-[20px] font-semibold text-white/60">{r.year}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
