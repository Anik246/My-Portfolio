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

const GLASS_RIM_PANEL = [
  'relative overflow-hidden rounded-[26px]',
  'bg-white/[0.03] backdrop-blur-[18px]',
  'ring-1 ring-white/10',
  'shadow-[0_26px_120px_rgba(0,0,0,0.65)]',
  "before:pointer-events-none before:absolute before:inset-0 before:rounded-[26px] before:p-[1.4px] before:content-['']",
  'before:mix-blend-screen',
  "before:bg-[radial-gradient(70%_140%_at_86%_-10%,rgba(255,255,255,1)_0%,rgba(255,255,255,0.92)_10%,rgba(255,255,255,0.20)_24%,rgba(255,255,255,0)_46%),radial-gradient(70%_140%_at_8%_112%,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.82)_12%,rgba(255,255,255,0.18)_26%,rgba(255,255,255,0)_50%),linear-gradient(rgba(255,255,255,0.014),rgba(255,255,255,0.014))]",
  'before:[-webkit-mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)]',
  'before:[-webkit-mask-composite:xor]',
  'before:[mask-composite:exclude]',
].join(' ');

const GLASS_PILL = [
  'group relative flex items-center justify-between gap-4 w-full',
  'rounded-[18px] px-6 py-5',
  'bg-black/25 hover:bg-white/[0.05] transition',
  'ring-1 ring-white/10 hover:ring-white/20',
  'backdrop-blur-[16px]',
  'shadow-[inset_0_1px_0_rgba(255,255,255,0.10)]',
].join(' ');

const GLASS_ICON = [
  'grid h-12 w-12 place-items-center rounded-[16px]',
  'bg-black/30',
  'ring-1 ring-white/10',
  'shadow-[inset_0_1px_0_rgba(255,255,255,0.10)]',
].join(' ');

const GLASS_ICON_BTN = [
  'relative isolate inline-flex h-10 w-10 items-center justify-center rounded-full',
  'bg-black/30 backdrop-blur-[14px]',
  'shadow-[inset_0_1px_0_rgba(255,255,255,0.10)]',
  'transition-all duration-300 hover:bg-white/5',
  "before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:p-[1.2px] before:content-['']",
  'before:mix-blend-screen',
  "before:bg-[radial-gradient(70%_140%_at_86%_-10%,rgba(255,255,255,1)_0%,rgba(255,255,255,0.92)_10%,rgba(255,255,255,0.26)_24%,rgba(255,255,255,0)_46%),radial-gradient(70%_140%_at_8%_112%,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.82)_12%,rgba(255,255,255,0.20)_26%,rgba(255,255,255,0)_50%),linear-gradient(rgba(255,255,255,0.018),rgba(255,255,255,0.018))]",
  'before:[-webkit-mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)]',
  'before:[-webkit-mask-composite:xor]',
  'before:[mask-composite:exclude]',
  "after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:content-['']",
  'after:mix-blend-screen',
  'after:shadow-[0_0_0_1px_rgba(255,255,255,0.10),0_0_14px_rgba(255,255,255,0.08)]',
].join(' ');

function ContactPill({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  const external = href.startsWith('http');

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={GLASS_PILL}
    >
      <div className="flex items-center gap-4">
        <div className={GLASS_ICON}>{icon}</div>
        <div>
          <p className="text-[18px] font-extrabold tracking-[-0.01em] text-white/90">{label}</p>
          <p className="mt-1 text-[13px] font-semibold text-white/40">
            {href.startsWith('mailto:') || href.startsWith('tel:') ? 'Open' : 'View'}
          </p>
        </div>
      </div>

      <div className={GLASS_ICON_BTN}>
        <ArrowUpRight className="h-[18px] w-[18px] text-white/40 group-hover:text-white/85 transition-colors duration-300" />
      </div>
    </a>
  );
}

export default function ContactSection({
  id = 'contact',
  email = 'shahriarr246@gmail.com',
  githubUrl = 'https://github.com/Anik246',
  phone = '+1 438 451 6151',
}: Props) {
  const currentYear = new Date().getFullYear();

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

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <section
      id={id}
      className="
        relative overflow-hidden bg-black
        min-h-screen flex flex-col
        pt-12 md:pt-52 pb-0
      "
    >
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-28 left-1/2 h-[420px] w-[980px] -translate-x-1/2 blur-3xl opacity-70
          [background:radial-gradient(circle_at_center,rgba(120,150,255,0.18)_0%,rgba(255,59,48,0.10)_22%,rgba(0,0,0,0)_70%)]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.82)_58%,rgba(0,0,0,1)_100%)]" />
      </div>

      {/* ✅ Make the main wrapper flex-col so footer can sit at bottom */}
      <div className="relative mx-auto w-full max-w-[1260px] px-4 flex-1 flex flex-col">
        {/* Header */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="mb-12 md:mb-16"
        >
          <div className="relative h-[64px]">
            <span className="absolute -left-3 -top-2 select-none text-[#ff3b30] text-[55px] leading-none font-extrabold">
              <Send />
            </span>

            <p className="absolute left-[7px] top-[28px] text-[14px] font-extrabold tracking-[0.22em] text-white/45 uppercase">
              contact me
            </p>
          </div>

          <motion.h2
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-120px' }}
            className="mt-1 text-white font-extrabold tracking-[-0.04em] leading-[0.95] text-[44px] sm:text-[54px] lg:text-[62px]"
            aria-label="Get in touch"
          >
            <span className="inline-block whitespace-nowrap">
              {'Get in touch'.split(' ').map((word, wi, arr) => (
                <span
                  key={`${word}-${wi}`}
                  className={`inline-block whitespace-nowrap ${wi !== arr.length - 1 ? 'mr-[0.22em]' : ''}`}
                >
                  {Array.from(word).map((ch, ci) => {
                    const i = idx++;
                    return (
                      <motion.span key={`${wi}-${ci}`} custom={i} variants={letter} className="inline-block">
                        {ch}
                      </motion.span>
                    );
                  })}
                </span>
              ))}
            </span>
          </motion.h2>
        </motion.div>

        {/* Panel */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className={`${GLASS_RIM_PANEL} p-5 md:p-6`}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-70
            [background:radial-gradient(120%_70%_at_50%_0%,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0)_60%)]"
          />

          <div className="relative grid grid-cols-1 gap-4 md:grid-cols-3">
            <ContactPill href={`mailto:${email}`} label="Email Me" icon={<Mail className="h-6 w-6 text-white/75" />} />
            <ContactPill href={githubUrl} label="GitHub" icon={<Github className="h-6 w-6 text-white/75" />} />
            <ContactPill
              href={`tel:${phone.replace(/\s/g, '')}`}
              label="Call Me"
              icon={<Phone className="h-6 w-6 text-white/75" />}
            />
          </div>
          
        </motion.div>
           {/* ✅ Back to top aligned with footer right side */}
            <button
  type="button"
  onClick={scrollToTop}
  className={`${GLASS_ICON_BTN} ml-auto mt-12 hover:scale-[1.03] active:scale-[0.98]`}
  aria-label="Back to top"
  title="Back to top"
>
  <ArrowUp className="h-[18px] w-[18px] text-white/65" />
</button>


        {/* ✅ Footer sits at bottom */}
        <footer className="mt-auto border-t border-white/10 mt-16">
          <div className="px-2 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-white/40 text-sm">© {currentYear} Shahriar Rahman. All rights reserved.</p>

              {/* right side */}
              <div className="flex items-center gap-6">
                <Link href="/#projects" className="text-white/40 hover:text-white/70 text-sm transition-colors">
                  Projects
                </Link>
                <Link href="/#contact" className="text-white/40 hover:text-white/70 text-sm transition-colors">
                  Contact
                </Link>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white/70 text-sm transition-colors"
                >
                  GitHub
                </a>

             
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
