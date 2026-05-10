'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Send, Mail, Github, Phone, ArrowUpRight, ArrowUp } from 'lucide-react';

type Props = {
  id?: string;
  email?: string;
  githubUrl?: string;
  phone?: string;
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const, delay },
});

export default function ContactSection({
  id = 'contact',
  email = 'shahriarr246@gmail.com',
  githubUrl = 'https://github.com/Anik246',
  phone = '+1 (438) 408-2088',
}: Props) {
  const currentYear = new Date().getFullYear();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const CONTACTS = [
    {
      href: `mailto:${email}`,
      label: 'Email Me',
      icon: <Mail className="h-4 w-4 text-zinc-400" />,
    },
    {
      href: githubUrl,
      label: 'GitHub',
      icon: <Github className="h-4 w-4 text-zinc-400" />,
    },
    {
      href: `tel:${phone.replace(/\s/g, '')}`,
      label: 'Call Me',
      icon: <Phone className="h-4 w-4 text-zinc-400" />,
    },
  ];

  return (
    <section id={id} className="py-16 md:py-20">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">

        {/* Section header */}
        <motion.div {...fadeUp(0)} className="mb-8">
          <h2 className="flex items-center gap-2.5 text-3xl sm:text-4xl font-bold text-white tracking-tight">
            <Send className="h-6 w-6 text-zinc-400" />
            Get in touch
          </h2>
        </motion.div>

        {/* Contact row */}
        <motion.div
          {...fadeUp(0.05)}
          className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-3"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {CONTACTS.map((c) => {
              const external = c.href.startsWith('http');
              return (
                <a
                  key={c.label}
                  href={c.href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="group flex items-center justify-between rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.12] transition px-5 py-4"
                >
                  <div className="flex items-center gap-3">
                    {c.icon}
                    <span className="text-base font-medium text-zinc-200">{c.label}</span>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-zinc-700 group-hover:text-zinc-400 transition-colors" />
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          {...fadeUp(0.1)}
          className="mt-10 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-zinc-400">© {currentYear} Shahriar Rahman. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link href="/#projects" className="text-sm text-zinc-400 hover:text-zinc-400 transition-colors">Projects</Link>
            <Link href="/#contact" className="text-sm text-zinc-400 hover:text-zinc-400 transition-colors">Contact</Link>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-zinc-400 transition-colors">GitHub</a>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="inline-flex items-center gap-2 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] px-3 py-2 text-xs font-medium text-zinc-500 hover:text-zinc-300 transition"
            >
              <ArrowUp className="h-3.5 w-3.5" />
              Back to top
            </button>
          </div>
        </motion.footer>

      </div>
    </section>
  );
}
