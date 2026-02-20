'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import HeroIllustration from './HeroIllustration';

export default function Hero() {
  // ✅ letter-by-letter (but NO mid-word wrapping)
  const TITLE_WORDS = ['Shahriar', 'Rahman'];

  const titleContainer = {
    hidden: {},
    show: {},
  };

  // ✅ custom index-based delay so letters animate continuously across words
  const titleLetter = {
    hidden: { y: 22, opacity: 0, filter: 'blur(10px)' },
    show: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.6,
        delay: 0.12 + i * 0.04, // ✅ letter-by-letter timing
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  const plusPop = {
    hidden: { y: 22, opacity: 0, scale: 0.85, filter: 'blur(10px)' },
    show: (i: number) => ({
      y: 0,
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.7,
        delay: 0.12 + i * 0.04,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };


  const HERO_CTA_GLASS = [
    'group relative isolate inline-flex h-[44px] items-center gap-2 rounded-full px-5 text-[14px] font-bold',
    'text-white/90 bg-black/25 hover:bg-white/5 transition',
    'shadow-[inset_0_1px_0_rgba(255,255,255,0.10)]',
    "before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:p-[1.4px] before:content-['']",
    'before:mix-blend-screen',
    "before:bg-[radial-gradient(70%_140%_at_86%_-10%,rgba(255,255,255,1)_0%,rgba(255,255,255,0.92)_10%,rgba(255,255,255,0.26)_24%,rgba(255,255,255,0)_46%),radial-gradient(70%_140%_at_8%_112%,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.82)_12%,rgba(255,255,255,0.20)_26%,rgba(255,255,255,0)_50%),linear-gradient(rgba(255,255,255,0.018),rgba(255,255,255,0.018))]",
    'before:[-webkit-mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)]',
    'before:[-webkit-mask-composite:xor]',
    'before:[mask-composite:exclude]',
    "after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:content-['']",
    'after:mix-blend-screen',
    'after:shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_0_14px_rgba(255,255,255,0.10)]',
  ].join(' ');

  return (
    <section className="relative isolate overflow-hidden bg-black">
      {/* ===================== BACKGROUND ===================== */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* 1) Top strip (softer on mobile) */}
        <div className="absolute -top-28 inset-x-0 h-72 blur-3xl opacity-70 sm:opacity-90 bg-[linear-gradient(90deg,rgba(255,0,170,0.70)_0%,rgba(140,80,255,0.50)_45%,rgba(0,0,0,1)_100%)]" />

        {/* 2) Vertical lines (mobile shows ~3 lines AND visible) */}
        <div
          className="absolute inset-0 opacity-[0.42] sm:opacity-[0.55]
          [mask-image:radial-gradient(circle_at_50%_25%,#fff_0%,#fff_78%,transparent_100%)]
          [-webkit-mask-image:radial-gradient(circle_at_50%_25%,#fff_0%,#fff_78%,transparent_100%)]"
        >
          <div
            className="absolute inset-0
            bg-[repeating-linear-gradient(to_right,rgba(255,255,255,0.45)_0px,rgba(255,255,255,0.45)_0.6px,transparent_0.6px,transparent_150px)]
            sm:bg-[repeating-linear-gradient(to_right,rgba(255,255,255,0.60)_0px,rgba(255,255,255,0.60)_0.6px,transparent_0.6px,transparent_260px)]"
          />
        </div>

        {/* 3) Subtle animated sweep (softer on mobile) */}
        <motion.div
          className="absolute inset-y-0 -left-[45%] w-[55%] mix-blend-screen opacity-[0.10] sm:opacity-[0.15] blur-[1px]"
          style={{
            background:
              'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.08) 45%, rgba(255,255,255,0) 100%)',
          }}
          animate={{ x: ['0%', '200%'] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        />

        {/* 4) Vignette (lighter on mobile, darker on sm+) */}
        <div className="absolute inset-0 sm:hidden bg-[radial-gradient(circle_at_50%_35%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.65)_58%,rgba(0,0,0,1)_100%)]" />
        <div className="absolute inset-0 hidden sm:block bg-[radial-gradient(circle_at_50%_35%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.78)_58%,rgba(0,0,0,1)_100%)]" />

        {/* 5) Bottom fade (lighter on mobile, stronger on sm+) */}
        <div className="absolute inset-0 sm:hidden bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0.25)_55%,rgba(0,0,0,0.85)_88%,rgba(0,0,0,1)_100%)]" />
        <div className="absolute inset-0 hidden sm:block bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_55%,rgba(0,0,0,0.92)_88%,rgba(0,0,0,1)_100%)]" />
      </div>

      {/* ===================== CONTENT ===================== */}
      <div className="relative mx-auto w-full max-w-[1260px] px-4 pt-[calc(var(--nav-offset,96px)+24px)] md:pt-[calc(var(--nav-offset,96px)+16px)] pb-16">
        <div className="relative grid min-h-[calc(100svh-var(--nav-offset,96px)-24px)] md:min-h-[calc(100svh-var(--nav-offset,96px)-16px)] content-center gap-10 lg:items-center lg:grid-cols-[1.05fr_0.95fr]">
          {/* LEFT */}
          <div className="relative z-10">
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="mb-4 text-[13px] font-extrabold tracking-[0.22em] text-muted"
            >
              SOFTWARE ENGINEER
            </motion.p>

            {/* ✅ Letter-by-letter title animation (no mid-word wraps) */}
            <motion.h1
              variants={titleContainer}
              initial="hidden"
              animate="show"
              className="leading-[0.9] text-[64px] font-extrabold tracking-[-0.04em] sm:text-[86px] lg:text-[108px] [text-shadow:0_2px_0_rgba(0,0,0,0.35)]"
              aria-label="Shahriar Rahman+"
            >
              {(() => {
                let idx = 0;

                return TITLE_WORDS.map((word, wi) => {
                  const isLast = wi === TITLE_WORDS.length - 1;

                  return (
                    <span
                      key={word}
                      className={`inline-block whitespace-nowrap ${!isLast ? 'mr-[0.28em]' : ''}`}
                    >
                      {Array.from(word).map((ch, li) => {
                        const i = idx++;
                        return (
                          <motion.span
                            key={`${word}-${li}`}
                            custom={i}
                            variants={titleLetter}
                            className="inline-block"
                          >
                            {ch}
                          </motion.span>
                        );
                      })}

                      {/* ✅ keep + attached to the last word */}
                      {isLast && (
                        <motion.span
                          custom={idx++}
                          variants={plusPop}
                          className="inline-block align-top text-[#ff3b30]"
                        >
                          +
                        </motion.span>
                      )}
                    </span>
                  );
                });
              })()}
            </motion.h1>

            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: 0.18 }}
              className="mt-6 max-w-[520px] text-[14px] leading-6"
            >
              Call me Shahriar. I write code, train models, and build products people can actually use. I work across ML and full-stack — designing systems, building APIs, and getting things live. I like solving problems that matter.
            </motion.p>

            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: 0.26 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link href="/#contact" className={HERO_CTA_GLASS}>
                Contact me
                <ArrowUpRight className="h-[18px] w-[18px] opacity-95 transition-transform group-hover:translate-x-[1px] group-hover:-translate-y-[1px]" />
              </Link>

              <Link
                href="https://github.com/Anik246"
                target="_blank"
                className="inline-flex h-[44px] items-center gap-2 rounded-full border border-white/18 px-5 text-[14px] font-bold text-white/85 transition hover:text-white hover:border-white/28 hover:bg-white/[0.04]"
              >
                <Github className="h-5 w-5" />
                GitHub
              </Link>

            </motion.div>
          </div>

          {/* RIGHT - Neural Network Illustration */}
          <motion.div
            initial={{ y: 14, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.08 }}
            className="
              pointer-events-none
              absolute inset-0 z-0 flex items-center justify-center
              lg:pointer-events-auto
              lg:relative lg:inset-auto lg:z-auto lg:block
              lg:mx-auto lg:w-full lg:max-w-[560px] lg:ml-auto
            "
          >
            <div className="relative overflow-hidden">
              <div
                className="
                  aspect-[1.2/1]
                  w-[min(560px,92vw)] lg:w-full
                  opacity-25 brightness-90 contrast-75 saturate-90
                  lg:opacity-100 lg:brightness-100 lg:contrast-100 lg:saturate-100
                "
              >
                <HeroIllustration />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
