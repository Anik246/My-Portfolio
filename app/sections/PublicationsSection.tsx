'use client';

import React from 'react';
import Image from 'next/image';
import { Play, ArrowUpRight, ArrowRight, BookOpenText } from 'lucide-react';
import { motion } from 'framer-motion';

import certificate from '../public/images/certificate.jpeg';

const WORDS = ['Publications'];

const titleContainer = { hidden: {}, show: {} };
const titleLetter = {
    hidden: { y: 18, opacity: 0, filter: 'blur(10px)' },
    show: (i: number) => ({
        y: 0,
        opacity: 1,
        filter: 'blur(0px)',
        transition: {
            duration: 0.55,
            delay: 0.12 + i * 0.035,
            ease: [0.16, 1, 0.3, 1],
        },
    }),
};

const certCard = {
    rest: { rotate: -8, y: 0 },
    hover: { rotate: -2, y: -4 },
};

// ✅ circular glass icon button (matches your saved HERO_CTA_GLASS vibe)
const HERO_ICON_GLASS = [
    'group/icon relative isolate inline-flex h-12 w-12 items-center justify-center rounded-full',
    'bg-black/25 hover:bg-white/5 transition',
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

export default function PublicationsSection() {
    let idx = 0;

    return (
        <section id="publications" className="relative overflow-hidden bg-black py-20 md:py-28">
            {/* ✅ no background / no ring */}

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
                            <BookOpenText />
                        </span>


                        <p className="absolute left-[7px] top-[28px] text-[14px] font-extrabold tracking-[0.22em] text-white/45 uppercase">
                            Achievement and certifiacations
                        </p>
                    </div>

                    {/* Title: letter-by-letter animation */}
                    {(() => {
                        const WORDS = ['Publications'];
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


                {/* ✅ CARD */}
<motion.a
  href="/api/paper"
  target="_blank"
  rel="noopener noreferrer"
  initial="rest"
  animate="rest"
  whileHover="hover"
  className="
    group relative block w-full overflow-visible
    rounded-[20px] border-2 border-[#ff3b30]
    bg-black/55 backdrop-blur-[12px]
    transition-all duration-300
    hover:border-2 hover:border-white
    hover:shadow-[0_0_0_1px_rgba(255,255,255,0.35),0_0_22px_rgba(255,255,255,0.10)]
  "
>



                    {/* ✅ right arrow button (glass + moved a bit upper) */}
                    <div className="pointer-events-auto absolute right-6 top-[20%] z-50 -translate-y-1/2">
                        <div className={HERO_ICON_GLASS}>
                            <ArrowUpRight className="h-[18px] w-[18px] text-white/85 transition-transform group-hover/icon:translate-x-[1px] group-hover/icon:-translate-y-[1px]" />
                        </div>
                    </div>

                    {/* layout */}
                    <div className="relative z-10 flex flex-col gap-10 px-6 py-8 md:flex-row md:items-center md:gap-12 md:px-10 md:py-10">
                        {/* LEFT VISUAL (structure unchanged, but certificate replaces membership) */}
                        <div className="relative flex-shrink-0 w-full md:w-[320px] h-[220px] overflow-visible">
                            {/* Dark card behind */}
                            <div
                                className="absolute bottom-0 left-10 h-[86px] w-[170px] rounded-xl z-0"
                                style={{ background: 'linear-gradient(145deg, #1a1a1a 0%, #111 100%)' }}
                            />



                            {/* Framer icon */}
                            <div className="absolute -top-[58px] right-24 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-black shadow-lg">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
                                    <path d="M4 0h16v8h-8v8H4V0zm0 16h8l8 8H4v-8z" />
                                </svg>
                            </div>

                            {/* Figma icon */}
                            <div className="absolute top-24 left-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-[#1a1a1a]">
                                <svg width="16" height="24" viewBox="0 0 38 57" fill="none">
                                    <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
                                    <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
                                    <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
                                    <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
                                    <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
                                </svg>
                            </div>

                            {/* ✅ Certificate card (tilted) */}
                            <motion.div
                                variants={certCard}
                                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                                className="absolute -top-[92px] left-10 z-20 h-[270px] w-[175px] origin-bottom rounded-2xl shadow-2xl overflow-hidden ring-1 ring-white/20 bg-white/5"
                            >
                                <div className="relative h-full w-full">
                                    <Image src={certificate} alt="Publication Certificate" fill priority className="object-contain" />
                                </div>
                            </motion.div>
                        </div>

                        {/* RIGHT CONTENT (updated info + font style) */}
                        <div className="flex-1 pr-10 md:pr-20">
                            <p className="text-[12px] font-extrabold tracking-[0.18em] text-white/45 uppercase mb-3">
                                PUBLICATION • ICITS 2024 • THAILAND
                            </p>

                            <h3 className="text-white font-extrabold tracking-[-0.02em] leading-[1.12] text-[28px] sm:text-[30px] lg:text-[34px] mb-4">
                                Plant Health Detection — CNN + YOLOv8/v9/v11 (Majority Voting)
                            </h3>

                            <p className="text-[15px] leading-[1.75] text-white/45 max-w-[70ch] mb-5">
                                Ensemble of a compact CNN and YOLO variants with majority voting for leaf-disease detection. In this study,
                                YOLOv11 produced the strongest results.
                                <br />
                                <span className="inline-block mt-3">
                                    Presented at ICITS 2024, Thailand (International Conference on Information Technology and Systems).
                                </span>
                            </p>

                            <div className="text-[15px] font-semibold inline-flex items-center gap-2 text-white/80 transition-colors duration-300 group-hover:text-[#ff3b30]">
                                View details
                                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </div>
                        </div>
                    </div>
                </motion.a>
            </div>
        </section>
    );
}
