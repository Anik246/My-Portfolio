'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, FileText, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

import certificate from '../public/images/certificate.jpeg';

const AUTHORS = ['Akter, T.', 'Rahman, S.', 'Billah, A.', 'Haque, A.', 'Rahman, R.'];
const TAGS = ['Deep Learning', 'Computer Vision', 'LNNS Vol. 1510'];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const, delay },
});

export default function PublicationsSection({ id = 'publications' }: { id?: string }) {
  return (
    <section id={id} className="py-16 md:py-20">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">

        {/* Section header */}
        <motion.div {...fadeUp(0)} className="mb-8">
          <h2 className="flex items-center gap-2.5 text-3xl sm:text-4xl font-bold text-white tracking-tight">
            <BookOpen className="h-6 w-6 text-zinc-400" />
            Publications
          </h2>
        </motion.div>

        {/* Publication card */}
        <motion.div
          {...fadeUp(0.08)}
          className="rounded-2xl bg-white/[0.03] border border-white/[0.08] overflow-hidden flex flex-col lg:flex-row hover:border-white/[0.15] transition-colors"
        >
          {/* Certificate image */}
          <div className="relative h-48 sm:h-56 lg:h-auto lg:w-72 shrink-0 overflow-hidden bg-white/[0.02]">
            <Image
              src={certificate}
              alt="Publication Certificate"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 288px"
              className="object-contain p-8"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <span className="rounded-md bg-white/10 backdrop-blur-sm border border-white/10 px-2.5 py-1 text-[10px] font-semibold tracking-wider text-zinc-300 uppercase">
                Springer
              </span>
              <span className="rounded-md bg-indigo-500/15 border border-indigo-500/25 px-2.5 py-1 text-[10px] font-semibold tracking-wider text-indigo-400 uppercase">
                2026
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col p-4 sm:p-6 lg:border-l lg:border-white/[0.06] flex-1">

            {/* Venue row */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-4">
              <span className="text-xs font-medium text-zinc-600 uppercase tracking-widest">Conference Paper</span>
              <span className="text-zinc-700">·</span>
              <span className="text-xs font-semibold text-indigo-400 uppercase tracking-widest">ICTIS 2025</span>
              <span className="text-zinc-700">·</span>
              <span className="text-xs font-medium text-zinc-600 uppercase tracking-widest">Singapore</span>
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-semibold text-white leading-snug tracking-tight mb-1">
              A Deep Learning Approach for Indoor Plant Health Monitoring
            </h3>
            <p className="text-base text-zinc-400 mb-4">
              Classification of Healthy, Unhealthy, and Dead Plants
            </p>

            {/* Authors */}
            <div className="flex flex-wrap items-center gap-x-1 gap-y-1 mb-4">
              {AUTHORS.map((a, i) => (
                <React.Fragment key={a}>
                  <span className={`text-xs font-mono ${a === 'Rahman, S.' ? 'text-zinc-200 font-bold' : 'text-zinc-600'}`}>
                    {a}
                  </span>
                  {i < AUTHORS.length - 1 && <span className="text-zinc-700 text-xs mx-1">·</span>}
                </React.Fragment>
              ))}
            </div>

            {/* Description */}
            <p className="text-base text-zinc-300 leading-relaxed mb-4">
              In:{' '}
              <span className="italic text-zinc-300">ICT for Intelligent Systems — ICTIS 2025</span>.
              Lecture Notes in Networks and Systems, vol 1510. Springer, Singapore.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-5">
              {TAGS.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg bg-white/[0.04] border border-white/[0.07] px-3 py-1 text-xs text-zinc-500"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mt-auto">
              <a
                href="/api/paper"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white/[0.06] border border-white/[0.10] hover:bg-white/[0.10] hover:border-white/20 px-4 py-2 text-sm font-medium text-zinc-300 transition"
              >
                <FileText className="h-4 w-4" />
                View PDF
              </a>
              <a
                href="https://doi.org/10.1007/978-981-96-9275-0_14"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white/[0.03] border border-white/[0.07] hover:bg-white/[0.07] hover:border-white/15 px-4 py-2 text-sm font-medium text-zinc-400 transition"
              >
                Read on Springer
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
