'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';

const ITEMS = [
  {
    icon: '◎',
    role: 'Full-Stack Developer — TradeREA (Avrancecorp Development)',
    location: 'Canada',
    period: 'Dec 2025 – Present',
    badge: 'Fintech',
    bullets: [
      'Designing and developing TradeREA, a real estate tokenization platform, owning the full stack across an investor portal, admin panel, live trading interface, and KYC/compliance workflows from design to deployment.',
      'Developing the TradeREA mobile application for Android and iOS using Flutter, translating the web platform\'s design system into a seamless mobile experience.',
      'Designing the full UI/UX for web and mobile interfaces, transforming complex financial data including real-time order books, portfolio analytics, and dividend tracking into clear and intuitive experiences for non-technical investors.',
    ],
  },
  {
    icon: '◎',
    role: 'Teaching Assistant — United International University',
    location: 'Dhaka, Bangladesh',
    period: 'Jan 2024 – Dec 2024',
    badge: 'Teaching',
    bullets: [
      'Assisted undergraduate students in learning UI/UX design principles and frontend development.',
      'Conducted hands-on lab sessions covering Figma, responsive design, and modern CSS frameworks.',
      'Provided one-on-one mentoring to help students complete design and development projects.',
      'Reviewed student work and delivered constructive feedback to improve design quality.',
    ],
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const, delay },
});

export default function ExperienceSection({ id = 'experience' }: { id?: string }) {
  return (
    <section id={id} className="py-16 md:py-20">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">

        {/* Section header */}
        <motion.div {...fadeUp(0)} className="mb-8">
          <h2 className="flex items-center gap-2.5 text-3xl sm:text-4xl font-bold text-white tracking-tight">
            <Layers className="h-6 w-6 text-zinc-400" />
            Experience
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.role}
              {...fadeUp(0.05 + i * 0.05)}
              className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-4 sm:p-6"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-zinc-500 text-base">{item.icon}</span>
                  <p className="text-base font-semibold text-white leading-snug break-words">{item.role}</p>
                </div>
                <span className="shrink-0 rounded-md bg-white/[0.05] border border-white/[0.08] px-2.5 py-1 text-xs font-medium text-zinc-400">
                  {item.badge}
                </span>
              </div>
              <p className="text-sm text-zinc-500 mb-4">{item.location} • {item.period}</p>
              <ul className="space-y-2 list-disc list-outside pl-5">
                {item.bullets.map((b) => (
                  <li key={b} className="text-base text-zinc-300 leading-relaxed marker:text-zinc-600">
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
