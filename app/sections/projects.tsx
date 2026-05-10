'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ArrowUpRight } from 'lucide-react';
import Image, { type StaticImageData } from 'next/image';

import jobsPage from '../public/images/job-scraping.png';
import intrusion from '../public/images/network-intrusion.png';
import plant from '../public/images/plant-health.png';
import crypto from '../public/images/trading-engine.png';

type Project = {
  title: string;
  description: string;
  image: StaticImageData | string;
  href?: string;
  tags: string[];
  metrics: string[];
};

const PROJECTS: Project[] = [
  {
    title: 'TradeREA — Real Estate Token Exchange',
    description: 'A regulated blockchain-powered platform for trading tokenized real estate. Built fractional ownership flows, KYC/AML verification, portfolio analytics, and multi-asset management interface.',
    image: crypto,
    href: '/projects/crypto-exchange',
    tags: ['Fintech', 'Web3'],
    metrics: ['Tokenized assets', 'Real-time trading'],
  },
  {
    title: 'Job Scraping & Recommendation',
    description: 'Automated job scraping system that collects, cleans, and structures postings with fast search and filtering.',
    image: jobsPage,
    href: '/projects/job-scraping',
    tags: ['Automation', 'ML'],
    metrics: ['Multi-source', 'Smart alerts'],
  },
  {
    title: 'Network Intrusion Detection',
    description: 'ML-based intrusion detection trained on UNSW-NB15 dataset to classify malicious vs. normal network traffic.',
    image: intrusion,
    href: '/projects/network',
    tags: ['Security', 'ML'],
    metrics: ['UNSW-NB15', 'High precision'],
  },
  {
    title: 'Plant Health Detection',
    description: 'Deep learning system classifying plant conditions using CNN and YOLO models with majority voting — published at ICTIS 2025.',
    image: plant,
    href: '/projects/plant',
    tags: ['CV', 'Research'],
    metrics: ['ICTIS 2025', 'Springer LNNS'],
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const, delay },
});

export default function ProjectsSection({ id = 'projects' }: { id?: string }) {
  return (
    <section id={id} className="py-16 md:py-20">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">

        {/* Section header */}
        <motion.div {...fadeUp(0)} className="flex items-center justify-between mb-8">
          <h2 className="flex items-center gap-2.5 text-3xl sm:text-4xl font-bold text-white tracking-tight">
            <Briefcase className="h-6 w-6 text-zinc-400" />
            Projects
          </h2>
        </motion.div>

        {/* 2x2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PROJECTS.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.href ?? '#'}
              {...fadeUp(0.05 + i * 0.05)}
              whileHover={{ y: -2 }}
              className="group rounded-2xl bg-white/[0.03] border border-white/[0.08] overflow-hidden hover:border-white/[0.15] transition-all flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 flex gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-black/60 backdrop-blur-sm border border-white/10 px-2 py-0.5 text-[10px] font-medium text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-4 sm:p-5 border-t border-white/[0.06]">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-base font-semibold text-white leading-snug">{p.title}</h3>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-zinc-600 group-hover:text-zinc-300 transition-colors" />
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed flex-1">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.metrics.map((m) => (
                    <span key={m} className="rounded-md bg-white/[0.04] border border-white/[0.07] px-2.5 py-1 text-xs text-zinc-500">{m}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
