

'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Languages, User, Bot, BarChart3, Blocks } from 'lucide-react';

type Props = {
    id?: string;
};


export default function AboutMeSection({ id = 'about' }: Props) {
    // ===================== TITLE (letter-by-letter, no mid-word wraps) =====================
    const TITLE_LINES = [
        ['A', 'little', 'bit', 'more'],
        ['about', 'me'],
    ];

    const titleContainer = { hidden: {}, show: {} };

    const titleLetter = {
        hidden: { y: 22, opacity: 0, filter: 'blur(10px)' },
        show: (i: number) => ({
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            transition: {
                duration: 0.6,
                delay: 0.12 + i * 0.04,
                ease: [0.16, 1, 0.3, 1],
            },
        }),
    };

    // ===================== BUTTON (same vibe as hero CTA) =====================
    const CTA_GLASS = [
        'group relative isolate inline-flex h-[46px] items-center gap-2 rounded-full px-6 text-[14px] font-bold',
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

    // ===================== SKILLS =====================
    const SKILLS = [
        { title: 'Languages', items: ['Python', 'JavaScript', 'C/C++', 'Java'] },
        { title: 'Frontend & UI', items: ['React', 'Next.js', 'Tailwind', 'Figma', 'UI/UX Design'] },
        { title: 'Backend & Data', items: ['Node.js', 'Express.js', 'PostgreSQL'] },
        { title: 'Tools & Techonologies', items: ['Docker', 'Kubernetes', 'Blockchain'] },
        { title: 'AI / ML', items: ['Computer Vision', 'YOLO', 'Model Evaluation', 'Datasets', 'MLOps Basics'] },
    ];

    // Helper to render letter-animated heading with fixed line breaks
    const AnimatedHeading = () => {
        let idx = 0;

        return (
            <motion.h2
                variants={titleContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-120px' }}
                className="mt-6 text-white font-extrabold tracking-[-0.04em] leading-[0.95] text-[50px] sm:text-[68px] lg:text-[66px]"
                aria-label="A little bit more about me"
            >
                {TITLE_LINES.map((lineWords, lineIdx) => (
                    <span key={lineIdx} className="block">
                        {lineWords.map((word, wi) => {
                            const isLastWord = wi === lineWords.length - 1;

                            return (
                                <span
                                    key={`${lineIdx}-${word}`}
                                    className={`inline-block whitespace-nowrap ${!isLastWord ? 'mr-[0.22em]' : ''}`}
                                >
                                    {Array.from(word).map((ch, ci) => {
                                        const i = idx++;
                                        return (
                                            <motion.span
                                                key={`${lineIdx}-${wi}-${ci}`}
                                                custom={i}
                                                variants={titleLetter}
                                                className="inline-block"
                                            >
                                                {ch}
                                            </motion.span>
                                        );
                                    })}
                                </span>
                            );
                        })}
                    </span>
                ))}
            </motion.h2>
        );
    };

    return (
        <section id={id} className="relative overflow-hidden bg-black py-24 sm:py-32">
            {/* ===================== BACKGROUND ===================== */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -top-28 inset-x-0 h-64 blur-3xl opacity-70 bg-[linear-gradient(90deg,rgba(255,0,170,0.28)_0%,rgba(140,80,255,0.18)_45%,rgba(0,0,0,1)_100%)]" />

                <div
                    className="absolute inset-0 opacity-[0.25]
          [mask-image:radial-gradient(circle_at_50%_35%,#fff_0%,#fff_72%,transparent_100%)]
          [-webkit-mask-image:radial-gradient(circle_at_50%_35%,#fff_0%,#fff_72%,transparent_100%)]"
                >
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(to_right,rgba(255,255,255,0.30)_0px,rgba(255,255,255,0.30)_0.6px,transparent_0.6px,transparent_260px)]" />
                </div>

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.78)_60%,rgba(0,0,0,1)_100%)]" />
            </div>

            <div className="mx-auto w-full max-w-[1260px] px-4">
                {/* ===================== TOP ROW (like screenshot) ===================== */}
                <div className="grid gap-14 lg:gap-20 lg:grid-cols-[440px_1fr]">
                    {/* LEFT */}
                    <div className="relative">
                        <div className="relative h-[78px]">
                            <span className="absolute left- top-4 select-none text-[#ff3b30] text-[66px] leading-none font-extrabold">
                                <User />
                            </span>

                            <p className="absolute left-[15px] top-[60px] text-[18px] font-extrabold tracking-[0.22em] text-white/45">
                                STORY BEHIND
                            </p>
                        </div>

                        <AnimatedHeading />

                        <motion.div
                            initial={{ y: 10, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, margin: '-120px' }}
                            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.05 }}
                            className="mt-14"
                        >
                            <Link href="/#contact" className={CTA_GLASS}>
                                Let&apos;s connect
                                <ArrowUpRight className="h-[18px] w-[18px] opacity-95 transition-transform group-hover:translate-x-[1px] group-hover:-translate-y-[1px]" />
                            </Link>
                        </motion.div>
                    </div>

                    {/* RIGHT (ONLY paragraphs now) */}
                    <div className="max-w-[900px]">
                        <motion.div
                            initial={{ y: 10, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, margin: '-120px' }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                            className="relative"
                        >
                            {/* red accent bar */}

                            <p className="text-[18px] leading-[1.85] text-white/55">
                                I like turning <span className="text-white/75 font-semibold">data</span> into clear, useful products.
                                Over the past few years, I have built things with{' '}
                                <span className="text-white/75 font-semibold">full-stack tools</span> and{' '}
                                <span className="text-white/75 font-semibold">cloud services</span> so people can find answers quickly.
                                I care about neat structure, plain language, and solutions that are easy to look after.
                            </p>


                            <p className="mt-10 text-[18px] leading-[1.85] text-white/55">
                                When I am not coding, I keep active with{' '}
                                <span className="text-white/75 font-semibold">sports</span>, read{' '}
                                <span className="text-white/75 font-semibold">books</span>, and watch{' '}
                                <span className="text-white/75 font-semibold">movies</span>. These habits help me stay curious and bring
                                simple, practical ideas into my work.
                            </p>
                        </motion.div>
                    </div>
                </div>


                {/* ===================== SKILLS (subsection inside About) ===================== */}
                <motion.div
                    initial={{ y: 12, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: '-140px' }}
                    transition={{ duration: 0.55, ease: 'easeOut' }}
                    className="mt-16 sm:mt-20"
                >
                    {/* soft divider */}
                    <div className="h-px w-full bg-gradient-to-r from-white/0 via-white/12 to-white/0" />

                    {/* glow background for skills area (subtle, no borders) */}
                    <div className="relative mt-8">
                        <div className="pointer-events-none absolute -top-14 left-1/2 h-[220px] w-[820px] -translate-x-1/2 blur-3xl opacity-60
      [background:radial-gradient(circle_at_center,rgba(255,59,48,0.10)_0%,rgba(120,150,255,0.10)_28%,rgba(0,0,0,0)_70%)]
    " />

                        {/* Heading (like Focus style) */}
                        <div className="relative h-[64px] sm:h-[70px]">
                            {/* icon */}
                            <span className="absolute left-0 top-0 select-none font-extrabold leading-none text-[#ff3b30] text-[20px] sm:text-[24px]">
                                {'</>'}
                            </span>

                            {/* title */}
                            <h3 className="absolute left-[44px] top-[18px] text-white font-extrabold tracking-[-0.04em] leading-[0.95] text-[30px] sm:text-[34px]">
                                Skills
                            </h3>

                            {/* subtitle */}
                            <p className="absolute left-[46px] top-[52px] text-[12px] font-extrabold tracking-[0.22em] text-white/45 uppercase">
                                My tech stack
                            </p>
                        </div>

                        {/* skills */}
                        <div className="mt-8 space-y-8">
                            {SKILLS.map((group, i) => (
                                <motion.div
                                    key={group.title}
                                    initial={{ opacity: 0, y: 12, filter: 'blur(10px)' }}
                                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                    viewport={{ once: true, margin: '-80px' }}
                                    transition={{ duration: 0.55, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                                    className="
        grid grid-cols-1
        sm:grid-cols-[minmax(240px,360px)_1fr]
        lg:grid-cols-[420px_1fr]
        gap-y-2 sm:gap-y-0 sm:gap-x-12
        sm:items-baseline
      "
                                >
                                    {/* label */}
                                    <div className="font-extrabold text-white text-[26px] sm:text-[30px] whitespace-nowrap">
                                        {group.title}:
                                    </div>

                                    {/* values */}
                                    <div className="text-white/70 text-[22px] sm:text-[26px] leading-snug">
                                        {group.items.join(', ')}
                                    </div>
                                </motion.div>
                            ))}
                        </div>




                    </div>
                </motion.div>


                {/* ===================== FOCUS ===================== */}
                {(() => {
                    
                    const GLASS_ICON_BADGE = [
                        'relative grid h-14 w-14 place-items-center rounded-[18px]',
                        'bg-black/30 backdrop-blur-[14px]',
                        'shadow-[inset_0_1px_0_rgba(255,255,255,0.10)]',

                        // glass rim
                        "before:pointer-events-none before:absolute before:inset-0 before:rounded-[18px] before:p-[1.4px] before:content-['']",
                        'before:mix-blend-screen',
                        "before:bg-[radial-gradient(70%_140%_at_86%_-10%,rgba(255,255,255,1)_0%,rgba(255,255,255,0.92)_10%,rgba(255,255,255,0.26)_24%,rgba(255,255,255,0)_46%),radial-gradient(70%_140%_at_8%_112%,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.82)_12%,rgba(255,255,255,0.20)_26%,rgba(255,255,255,0)_50%),linear-gradient(rgba(255,255,255,0.018),rgba(255,255,255,0.018))]",
                        'before:[-webkit-mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)]',
                        'before:[-webkit-mask-composite:xor]',
                        'before:[mask-composite:exclude]',

                        // wide + strong white bloom (no blue)
                        "after:pointer-events-none after:absolute after:-inset-14 after:rounded-[28px] after:content-['']",
                        'after:blur-3xl after:opacity-100',
                        'after:bg-[radial-gradient(circle,rgba(255,255,255,0.34)_0%,rgba(255,255,255,0.16)_38%,rgba(0,0,0,0)_74%)]',
                    ].join(' ');

                    // ✅ Card base: less border, more glow
                    const FOCUS_CARD = `
    group relative overflow-hidden rounded-[22px]
    bg-white/[0.02] backdrop-blur-[16px]
    ring-1 ring-white/10
    shadow-[0_18px_70px_rgba(0,0,0,0.55)]
    p-7
    transition-transform
  `;

                    return (
                        <motion.div
                            initial={{ y: 12, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, margin: '-140px' }}
                            transition={{ duration: 0.55, ease: 'easeOut' }}
                            className="mt-16 sm:mt-20"
                        >
                            <div className="h-px w-full bg-gradient-to-r from-white/0 via-white/12 to-white/0" />

                            <div className="relative mt-8">
                                {/* subtle ambient glow */}
                                <div
                                    className="
            pointer-events-none absolute -top-16 left-1/2
            h-[260px] w-[860px] -translate-x-1/2 blur-3xl opacity-50
            [background:radial-gradient(circle_at_center,rgba(255,59,48,0.10)_0%,rgba(255,255,255,0.08)_28%,rgba(0,0,0,0)_70%)]
          "
                                />

                                {/* Heading */}
                                <div className="relative h-[64px] sm:h-[70px]">
                                    <span className="absolute left-0 top-0 select-none font-extrabold leading-none text-[#ff3b30] text-[30px] sm:text-[34px]">
                                        {'✦'}
                                    </span>

                                    <h3 className="absolute left-[44px] top-[18px] text-white font-extrabold tracking-[-0.04em] leading-[0.95] text-[30px] sm:text-[34px]">
                                        Focus
                                    </h3>

                                    <p className="absolute left-[46px] top-[52px] text-[12px] font-extrabold tracking-[0.22em] text-white/45 uppercase">
                                        What I work on most
                                    </p>
                                </div>

                                {/* Cards */}
                                <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                    {/* AI */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 14, filter: 'blur(10px)' }}
                                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                        viewport={{ once: true, margin: '-80px' }}
                                        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                                        whileHover={{ y: -4 }}
                                        className={FOCUS_CARD}
                                    >
                                        <div className="pointer-events-none absolute inset-0 opacity-80 [background:radial-gradient(120%_70%_at_50%_0%,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0)_60%)]" />
                                        <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(60%_80%_at_0%_0%,rgba(255,59,48,0.18)_0%,rgba(0,0,0,0)_60%)]" />

                                        {/* ✅ glass rim + strong glow */}
                                        <div className={GLASS_ICON_BADGE}>
                                            <Bot className="relative h-6 w-6 text-white" />
                                        </div>

                                        <h4 className="relative mt-7 text-[34px] font-extrabold tracking-[-0.02em] text-white">AI</h4>

                                        <p className="relative mt-5 text-[17px] leading-[1.85] text-white/55">
                                            I build small AI helpers that turn messy text into something usable—key points, short summaries, and clear action items.
                                        </p>

                                        <p className="relative mt-6 text-[16px] font-semibold text-white/35">
                                            Extraction • Summaries • Automation • Agents
                                        </p>
                                    </motion.div>

                                    {/* ML */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 14, filter: 'blur(10px)' }}
                                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                        viewport={{ once: true, margin: '-80px' }}
                                        transition={{ duration: 0.55, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
                                        whileHover={{ y: -4 }}
                                        className={FOCUS_CARD}
                                    >
                                        <div className="pointer-events-none absolute inset-0 opacity-80 [background:radial-gradient(120%_70%_at_50%_0%,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0)_60%)]" />
                                        <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(60%_80%_at_0%_0%,rgba(255,255,255,0.10)_0%,rgba(0,0,0,0)_60%)]" />

                                        {/* ✅ glass rim + strong glow */}
                                        <div className={GLASS_ICON_BADGE}>
                                            <BarChart3 className="relative h-6 w-6 text-white" />
                                        </div>

                                        <h4 className="relative mt-7 text-[34px] font-extrabold tracking-[-0.02em] text-white">ML</h4>

                                        <p className="relative mt-5 text-[17px] leading-[1.85] text-white/55">
                                            I care about reliable results—clean preprocessing, strong evaluation, and monitoring so performance doesn’t drift.
                                        </p>

                                        <p className="relative mt-6 text-[16px] font-semibold text-white/35">
                                            Evaluation • Preprocessing • Monitoring
                                        </p>
                                    </motion.div>

                                    {/* Software Development */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 14, filter: 'blur(10px)' }}
                                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                        viewport={{ once: true, margin: '-80px' }}
                                        transition={{ duration: 0.55, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                                        whileHover={{ y: -4 }}
                                        className={FOCUS_CARD}
                                    >
                                        <div className="pointer-events-none absolute inset-0 opacity-80 [background:radial-gradient(120%_70%_at_50%_0%,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0)_60%)]" />
                                        <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(60%_80%_at_0%_0%,rgba(255,59,48,0.14)_0%,rgba(0,0,0,0)_60%)]" />

                                        {/* ✅ glass rim + strong glow */}
                                        <div className={GLASS_ICON_BADGE}>
                                            <Blocks className="relative h-6 w-6 text-white" />
                                        </div>

                                        <h4 className="relative mt-7 text-[30px] sm:text-[32px] font-extrabold tracking-[-0.02em] text-white">
                                            Software Development
                                        </h4>

                                        <p className="relative mt-5 text-[17px] leading-[1.85] text-white/55">
                                            I ship end-to-end features: readable APIs, clean UI, useful tests, and deployments that stay stable over time.
                                        </p>

                                        <p className="relative mt-6 text-[16px] font-semibold text-white/35">
                                            Full-stack • Testing • Cloud deployment
                                        </p>
                                    </motion.div>
                                </div>

                                <div className="mt-14 h-px w-full bg-gradient-to-r from-white/0 via-white/10 to-white/0" />
                            </div>
                        </motion.div>
                    );
                })()}



            </div>
        </section>
    );
}
