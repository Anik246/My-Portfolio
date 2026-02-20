'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, FileText, BookOpenText } from 'lucide-react';
import { motion } from 'framer-motion';

import certificate from '../public/images/certificate.jpeg';

const AUTHORS = ['Akter, T.', 'Rahman, S.', 'Billah, A.', 'Haque, A.', 'Rahman, R.'];
const TAGS = ['Deep Learning', 'Computer Vision', 'LNNS Vol. 1510'];

/* ── glass card — same recipe as projects.tsx ── */
const GLASS_RIM_CARD = [
    'relative overflow-hidden rounded-[24px]',
    'bg-black/25',
    'shadow-[inset_0_1px_0_rgba(255,255,255,0.10)]',
    'backdrop-blur-[14px]',
    "before:pointer-events-none before:absolute before:inset-0 before:rounded-[24px] before:p-[1.4px] before:content-['']",
    'before:mix-blend-screen',
    "before:bg-[radial-gradient(70%_140%_at_86%_-10%,rgba(255,255,255,1)_0%,rgba(255,255,255,0.92)_10%,rgba(255,255,255,0.26)_24%,rgba(255,255,255,0)_46%),radial-gradient(70%_140%_at_8%_112%,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.82)_12%,rgba(255,255,255,0.20)_26%,rgba(255,255,255,0)_50%),linear-gradient(rgba(255,255,255,0.018),rgba(255,255,255,0.018))]",
    'before:[-webkit-mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)]',
    'before:[-webkit-mask-composite:xor]',
    'before:[mask-composite:exclude]',
    "after:pointer-events-none after:absolute after:inset-0 after:rounded-[24px] after:content-['']",
    'after:mix-blend-screen',
    'after:shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_0_24px_rgba(255,255,255,0.06)]',
].join(' ');

export default function PublicationsSection() {
    return (
        <section id="publications" className="relative overflow-hidden bg-black py-20 md:py-28">
            <div className="relative z-10 mx-auto w-full max-w-[1260px] px-4">

                {/* ── HEADER — unchanged, matches all other sections ── */}
                <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: '-120px' }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                    className="mb-12 md:mb-16"
                >
                    <div className="relative h-[64px]">
                        <span className="absolute -left-3 -top-2 select-none text-[#ff3b30] text-[55px] leading-none font-extrabold">
                            <BookOpenText />
                        </span>
                        <p className="absolute left-[7px] top-[28px] text-[14px] font-extrabold tracking-[0.22em] text-white/45 uppercase">
                            Achievement and Certifications
                        </p>
                    </div>

                    {(() => {
                        const WORDS = ['Publications'];
                        const container = { hidden: {}, show: {} };
                        const letter = {
                            hidden: { y: 18, opacity: 0, filter: 'blur(10px)' },
                            show: (i: number) => ({
                                y: 0, opacity: 1, filter: 'blur(0px)',
                                transition: { duration: 0.55, delay: 0.10 + i * 0.035, ease: [0.16, 1, 0.3, 1] },
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
                                aria-label="Publications"
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
                                <span className="inline-block align-top ml-1 text-[#ff3b30]">+</span>
                            </motion.h2>
                        );
                    })()}
                </motion.div>

                {/* ── PUBLICATION CARD ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className={['grid grid-cols-1 lg:grid-cols-[300px_1fr]', 'bg-[#0a0a0a]', GLASS_RIM_CARD].join(' ')}
                >
                    {/* ── LEFT: certificate image ── */}
                    <div className="relative lg:h-full bg-[#0a0a0a]">
                        <div className="relative h-[280px] sm:h-[320px] lg:h-full min-h-[360px] flex items-center justify-center px-8 py-14">
                            <div className="relative w-full h-full">
                                <Image
                                    src={certificate}
                                    alt="Publication Certificate"
                                    fill
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 300px"
                                    className="object-contain drop-shadow-2xl"
                                />
                            </div>

                            {/* subtle edge vignette */}
                            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.4)_0%,transparent_30%,transparent_70%,rgba(0,0,0,0.6)_100%)]" />
                            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.3)_0%,transparent_25%,transparent_75%,rgba(0,0,0,0.3)_100%)]" />
                        </div>

                        {/* publisher + year badges */}
                        <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between">
                            <span className="rounded-md bg-white/10 backdrop-blur-sm border border-white/15 px-2.5 py-1 text-[10px] font-extrabold tracking-[0.14em] text-white uppercase">
                                Springer
                            </span>
                            <span className="rounded-md bg-[#ff3b30]/20 backdrop-blur-sm border border-[#ff3b30]/30 px-2.5 py-1 text-[10px] font-extrabold tracking-[0.14em] text-[#ff3b30] uppercase">
                                2026
                            </span>
                        </div>
                    </div>

                    {/* ── RIGHT: content ── */}
                    <div className="relative p-6 lg:border-l lg:border-white/[0.08] lg:p-8">

                        {/* venue row */}
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-5">
                            <span className="text-[11px] font-extrabold tracking-[0.18em] text-white/30 uppercase">
                                Conference Paper
                            </span>
                            <span className="text-white/15">·</span>
                            <span className="text-[11px] font-extrabold tracking-[0.18em] text-[#ff3b30] uppercase">
                                ICTIS 2025
                            </span>
                            <span className="text-white/15">·</span>
                            <span className="text-[11px] font-extrabold tracking-[0.18em] text-white/30 uppercase">
                                Singapore
                            </span>
                        </div>

                        {/* title */}
                        <h3 className="text-white font-bold tracking-[-0.015em] leading-[1.16] text-[20px] md:text-[24px] lg:text-[26px] mb-1.5">
                            A Deep Learning Approach for Indoor Plant Health Monitoring
                        </h3>
                        <p className="text-[14px] lg:text-[15px] text-white/40 font-semibold leading-snug mb-5">
                            Classification of Healthy, Unhealthy, and Dead Plants
                        </p>

                        {/* authors */}
                        <div className="flex flex-wrap items-center gap-x-1 gap-y-1 mb-6">
                            {AUTHORS.map((a, i) => (
                                <React.Fragment key={a}>
                                    <span className={`text-[13px] font-mono ${a === 'Rahman, S.' ? 'text-white/70 font-bold' : 'text-white/35'}`}>
                                        {a}
                                    </span>
                                    {i < AUTHORS.length - 1 && (
                                        <span className="text-white/15 text-[13px] mx-1.5">·</span>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>

                        {/* description */}
                        <p className="max-w-[600px] text-[14px] leading-[1.78] text-white/50 lg:text-[15px] mb-6">
                            In:{' '}
                            <span className="italic text-white/60">ICT for Intelligent Systems — ICTIS 2025</span>
                            {' '}(Eds: Choudrie, J., Mahalle, P.N., Perumal, T., Joshi, A.).
                            Lecture Notes in Networks and Systems, vol&nbsp;1510. Springer, Singapore.
                        </p>

                        {/* divider */}
                        <div className="w-full h-px bg-white/[0.06] mb-5" />

                        {/* tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {TAGS.map(tag => (
                                <span
                                    key={tag}
                                    className="text-[11px] font-bold tracking-[0.1em] text-white/30 uppercase bg-white/[0.04] border border-white/[0.07] rounded-full px-3 py-1"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* ── CTAs ── */}
                        <div className="flex flex-wrap gap-3">
                            <a
                                href="/api/paper"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    group/btn inline-flex items-center gap-2
                                    rounded-xl bg-white/[0.06] border border-white/[0.12]
                                    px-4 py-2.5
                                    text-[13px] font-semibold text-white/80
                                    transition-all duration-200
                                    hover:bg-white/[0.10] hover:border-white/[0.24] hover:text-white
                                "
                            >
                                <FileText className="h-4 w-4 text-white/45 group-hover/btn:text-white/75 transition-colors" />
                                View PDF
                            </a>

                            <a
                                href="https://doi.org/10.1007/978-981-96-9275-0_14"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    group/btn inline-flex items-center gap-2
                                    rounded-xl border border-white/[0.07] bg-transparent
                                    px-4 py-2.5
                                    text-[13px] font-semibold text-white/40
                                    transition-all duration-200
                                    hover:border-white/[0.16] hover:text-white/65
                                "
                            >
                                Read on Springer
                                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-[1px] group-hover/btn:-translate-y-[1px]" />
                            </a>
                        </div>
                    </div>

                    {/* bottom-left rim highlight — same as project cards */}
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
                </motion.div>

            </div>
        </section>
    );
}
