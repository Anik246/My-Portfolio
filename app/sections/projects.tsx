'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, FolderKanban } from 'lucide-react';
import Image, { type StaticImageData } from 'next/image';

import jobsPage from '../public/images/scraping.png';
import intrusion from '../public/images/intrusion.png';
import plant from '../public/images/plant.png';
import crypto from '../public/images/crypto.png';


/* ------------------------------ Decorative Ring ------------------------------ */
/**
 * ✅ Matches the screenshot vibe:
 * - pushed further outside the right edge (only part of ring visible)
 * - centered around the cards area (not the header)
 * - very bright ring + strong glow
 */
function DecorativeRing() {
    return (
        <div
            className="
        pointer-events-none absolute right-0
        top-[10%] md:top-[50%] lg:top-[23%]
        -translate-y-1/2 translate-x-[14%]
        w-[140px] h-[140px]
        md:w-[460px] md:h-[460px]
        lg:w-[230px] lg:h-[260px]
        opacity-100
      "
        >
            {/* subtle dark aura behind the ring (helps the glow feel stronger) */}
            <div
                className="
          absolute -inset-16 rounded-full blur-3xl opacity-70
          bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_22%,rgba(0,0,0,0.55)_58%,rgba(0,0,0,0.9)_100%)]
        "
            />

            <svg viewBox="0 0 200 200" className="relative h-full w-full mix-blend-screen">
                <defs>


                    {/* soft outer haze */}
                    <filter id="ringHaze" x="-80%" y="-80%" width="260%" height="260%">
                        <feGaussianBlur stdDeviation="6" />
                    </filter>
                </defs>

                {/* haze layer */}
                <circle
                    cx="100"
                    cy="100"
                    r="84"
                    fill="none"
                    stroke="rgba(255,255,255,0.22)"
                    strokeWidth="34"
                    filter="url(#ringHaze)"
                />

                {/* main bright ring */}
                <circle
                    cx="100"
                    cy="100"
                    r="84"
                    fill="none"
                    stroke="rgba(255,255,255,0.98)"
                    strokeWidth="16"
                    filter="url(#ringGlow)"
                />
            </svg>
        </div>
    );
}

/* ------------------------------ Glass Styles ------------------------------ */
// ✅ EXACT same “glass rim” recipe as your Let’s connect button,
// just adapted for a card radius + card padding.
const GLASS_RIM_CARD = [
    'relative overflow-hidden rounded-[24px]',
    'bg-black/25 hover:bg-white/5 transition-colors',
    'shadow-[inset_0_1px_0_rgba(255,255,255,0.10)]',
    'backdrop-blur-[14px]',

    // rim highlight (same as CTA)
    "before:pointer-events-none before:absolute before:inset-0 before:rounded-[24px] before:p-[1.4px] before:content-['']",
    'before:mix-blend-screen',
    "before:bg-[radial-gradient(70%_140%_at_86%_-10%,rgba(255,255,255,1)_0%,rgba(255,255,255,0.92)_10%,rgba(255,255,255,0.26)_24%,rgba(255,255,255,0)_46%),radial-gradient(70%_140%_at_8%_112%,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.82)_12%,rgba(255,255,255,0.20)_26%,rgba(255,255,255,0)_50%),linear-gradient(rgba(255,255,255,0.018),rgba(255,255,255,0.018))]",
    'before:[-webkit-mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)]',
    'before:[-webkit-mask-composite:xor]',
    'before:[mask-composite:exclude]',

    // subtle outer glow (same vibe as CTA)
    "after:pointer-events-none after:absolute after:inset-0 after:rounded-[24px] after:content-['']",
    'after:mix-blend-screen',
    'after:shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_0_24px_rgba(255,255,255,0.06)]',
].join(' ');

const GLASS_ICON_BTN = [
    'relative isolate inline-flex h-10 w-10 items-center justify-center rounded-full',
    'bg-black/30 backdrop-blur-[14px]',
    'shadow-[inset_0_1px_0_rgba(255,255,255,0.10)]',
    'transition-all duration-300',
    'group-hover:bg-white/5',
    // rim
    "before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:p-[1.2px] before:content-['']",
    'before:mix-blend-screen',
    "before:bg-[radial-gradient(70%_140%_at_86%_-10%,rgba(255,255,255,1)_0%,rgba(255,255,255,0.92)_10%,rgba(255,255,255,0.26)_24%,rgba(255,255,255,0)_46%),radial-gradient(70%_140%_at_8%_112%,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.82)_12%,rgba(255,255,255,0.20)_26%,rgba(255,255,255,0)_50%),linear-gradient(rgba(255,255,255,0.018),rgba(255,255,255,0.018))]",
    'before:[-webkit-mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)]',
    'before:[-webkit-mask-composite:xor]',
    'before:[mask-composite:exclude]',
    // glow
    "after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:content-['']",
    'after:mix-blend-screen',
    'after:shadow-[0_0_0_1px_rgba(255,255,255,0.10),0_0_14px_rgba(255,255,255,0.08)]',
].join(' ');

/* ------------------------------ Types ------------------------------ */
// ✅ accept StaticImageData OR string
type ProjectImage = StaticImageData | string;

type ProjectCardProps = {
    title: string;
    description: string;
    featured?: boolean;
    image: ProjectImage;
    href?: string;
    delay?: number;
};

/* ------------------------------ Card ------------------------------ */
function ProjectCard({
    title,
    description,
    featured = false,
    image,
    href = '#',
    delay = 0,
}: ProjectCardProps) {
    return (
        <motion.a
            href={href}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay, ease: 'easeOut' }}
            className={[
                'group relative overflow-hidden',
                'grid grid-cols-1 lg:grid-cols-[320px_1fr]',
                'transition-transform duration-300 hover:-translate-y-1',
                GLASS_RIM_CARD,
            ].join(' ')}
        >
            {/* LEFT: Poster */}
            <div className="relative lg:row-span-1 lg:h-full">
                {featured && (
                    <div className="absolute left-6 top-6 z-20 rounded-md border border-white/[0.06] bg-black/60 px-3 py-1.5 backdrop-blur-md">
                        <span className="text-[10px] font-bold tracking-[0.12em] text-white/90">FEATURED</span>
                    </div>
                )}

                <div className="relative h-[220px] sm:h-[260px] lg:h-full">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        priority={featured}
                        sizes="(max-width: 1024px) 100vw, 320px"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_110%_at_30%_0%,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.05)_34%,transparent_70%)]" />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_44%,rgba(0,0,0,0.35)_62%,rgba(0,0,0,0.78)_82%,rgba(0,0,0,0.96)_100%)]" />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.35)_0%,rgba(0,0,0,0)_60%)]" />
                </div>
            </div>

            {/* RIGHT: Content */}
            <div className="relative p-6 lg:border-l lg:border-white/10 lg:p-7">
                <div className="flex items-start justify-between gap-4">
                    <h3 className="text-[20px] font-bold tracking-[-0.01em] text-white md:text-[24px] lg:text-[26px]">
                        {title}
                    </h3>

                    <div className={GLASS_ICON_BTN}>
                        <ArrowUpRight className="h-[18px] w-[18px] text-white/40 transition-colors duration-300 group-hover:text-white/85" />
                    </div>
                </div>

                <p className="mt-3 max-w-[620px] text-[14px] leading-[1.75] text-white/50 lg:text-[15px]">
                    {description}
                </p>

                <div className="mt-6 inline-flex items-center gap-2 text-[14px] font-medium text-white/60 transition-colors duration-300 group-hover:text-white">
                    See details
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
            </div>

            {/* bottom-left rim highlight (soft) */}
            <div
                className="
          pointer-events-none absolute inset-0 z-30 rounded-[24px] p-[1.4px]
          mix-blend-screen opacity-60
          [background:radial-gradient(120%_180%_at_10%_108%,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0.22)_22%,rgba(255,255,255,0)_60%)]
          [-webkit-mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)]
          [-webkit-mask-composite:xor]
          [mask-composite:exclude]
        "
            />
        </motion.a>
    );
}

/* ------------------------------ Page ------------------------------ */
export default function ProjectPage() {
const projects: ProjectCardProps[] = [
  {
    title: 'Crypto Exchange Platform',
    description:
      'Building a crypto exchange platform with real-estate style asset flows—focused on a clean, responsive UI, smooth API integration, secure transaction handling, and reliable performance across key user flows like onboarding, trading, and portfolio tracking.',
    featured: true,
    image: crypto,
    href: '/projects/crypto-exchange',
  },
  {
    title: 'Job Scraping & Recommendation System',
    description:
      'An automated job scraping and recommendation system that collects postings from multiple sources, cleans and structures the data, and provides fast search, filtering, and alerts—helping users discover relevant roles with less manual effort.',
    featured: true,
    image: jobsPage,
    href: '/projects/job-scraping', // ✅ fixed
  },
  {
    title: 'Network Intrusion Detection',
    description:
      'A machine learning–based intrusion detection project trained on the UNSW-NB15 dataset to classify malicious vs. normal network traffic, with a clear preprocessing pipeline, feature engineering, and evaluation focused on precision, recall, and overall detection reliability.',
    featured: false,
    image: intrusion,
    href: '/projects/network', // ✅ fixed
  },
  {
    title: 'Plant Health Detection — ICITS 2024',
    description:
      'A deep learning system to classify plant conditions (healthy, unhealthy, dead) using CNN models and YOLOv8/YOLOv9/YOLOv11, combined with majority voting for stronger predictions—presented at ICITS 2024 and evaluated across accuracy, precision, recall, and F1-score.',
    featured: false,
    image: plant,
    href: '/projects/plant', // ✅ fixed
  },
];


    return (
        <section id="projects" className="relative overflow-hidden bg-black py-20 md:py-28">
            <DecorativeRing />

            <div className="relative z-10 mx-auto w-full max-w-[1260px] px-4">
                {/* ✅ HEADER ( */}
                <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: '-120px' }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                    className="mb-12 md:mb-16"
                >
                    {/* Diagonal: + (top-left) and label (down-right) */}
                    <div className="relative h-[64px]">
                        <span className="absolute -left-3 -top-2 select-none text-[#ff3b30] text-[55px] leading-none font-extrabold">
                            <FolderKanban />
                        </span>


                        <p className="absolute left-[7px] top-[28px] text-[14px] font-extrabold tracking-[0.22em] text-white/45 uppercase">
                            Work History
                        </p>
                    </div>

                    {/* Title: letter-by-letter animation */}
                    {(() => {
                        const WORDS = ['Projects'];
                        const container = { hidden: {}, show: {} };

                        const letter = {
                            hidden: { y: 18, opacity: 0, filter: 'blur(10px)' },
                            show: (i: number) => ({
                                y: 0,
                                opacity: 1,
                                filter: 'blur(0px)',
                                transition: {
                                    duration: 0.55,
                                    delay: 0.10 + i * 0.035,
                                    ease: [0.16, 1, 0.3, 1],
                                },
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
                                aria-label="Projects"
                            >
                                {WORDS.map((w, wi) => (
                                    <span key={w} className={`inline-block whitespace-nowrap ${wi ? 'mr-[0.22em]' : ''}`}>
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

                                {/* compact trailing plus */}
                                <span className="inline-block align-top ml-1 text-[#ff3b30]"></span>
                            </motion.h2>
                        );
                    })()}
                </motion.div>


                {/* Cards */}
                <div className="flex flex-col gap-4">
                    {projects.map((p, index) => (
                        <ProjectCard key={p.title} {...p} delay={index * 0.15} />
                    ))}
                </div>
            </div>
        </section>
    );
}
