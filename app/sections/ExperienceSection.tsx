'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {Briefcase} from 'lucide-react';

type ExperienceItem = {
    company: string;
    role: string;
    period: string;
    description: string;
};

type Props = {
    id?: string;
};

export default function ExperienceSection({ id = 'experience' }: Props) {
    const items: ExperienceItem[] = [
        {
            company: 'AVRANCECORP DEVELOPMENT, CANADA',
            role: 'Web Developer',
            period: '2025 - Present',
            description:
                'Building a crypto exchange platform with real-estate style asset flows—developing responsive UI, integrating backend APIs, and improving performance, security, and user experience across web and mobile.',
        },


    ];

    return (
        <section id={id} className="relative overflow-hidden bg-black py-24 sm:py-32">
            {/* subtle background (same system as your other sections) */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div
                    className="absolute inset-0 opacity-[0.18]
          [mask-image:radial-gradient(circle_at_50%_35%,#fff_0%,#fff_70%,transparent_100%)]
          [-webkit-mask-image:radial-gradient(circle_at_50%_35%,#fff_0%,#fff_70%,transparent_100%)]"
                >
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(to_right,rgba(255,255,255,0.30)_0px,rgba(255,255,255,0.30)_0.6px,transparent_0.6px,transparent_280px)]" />
                </div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.80)_60%,rgba(0,0,0,1)_100%)]" />
            </div>

            <div className="mx-auto w-full max-w-[1260px] px-4">
                <div className="grid gap-14 lg:gap-20 lg:grid-cols-[420px_1fr]">
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
                            <Briefcase />
                        </span>


                        <p className="absolute left-[7px] top-[28px] text-[14px] font-extrabold tracking-[0.22em] text-white/45 uppercase">
                            Work 
                        </p>
                    </div>

                    {/* Title: letter-by-letter animation */}
                    {(() => {
                        const WORDS = ['Experience'];
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



                    {/* RIGHT */}
                    <div className="max-w-[920px]">
                        {items.map((item, idx) => (
                            <motion.div
                                key={`${item.company}-${idx}`}
                                initial={{ y: 10, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true, margin: '-120px' }}
                                transition={{ duration: 0.5, ease: 'easeOut', delay: idx * 0.03 }}
                                className="py-10 sm:py-12"
                            >
                                <div className="flex items-start justify-between gap-6">
                                    <div className="min-w-0">
                                        <p className="text-[13px] font-extrabold tracking-[0.22em] text-white/45">
                                            {item.company}
                                        </p>

                                        <h3 className="mt-3 text-white font-extrabold tracking-[-0.02em] leading-[1.05] text-[32px] sm:text-[36px]">
                                            {item.role}
                                        </h3>

                                        <p className="mt-4 max-w-[720px] text-[15px] leading-[1.85] text-white/55">
                                            {item.description}
                                        </p>
                                    </div>

                                    <div className="shrink-0 text-right">
                                        <p className="text-[16px] sm:text-[18px] font-bold text-white/80">
                                            {item.period}
                                        </p>
                                    </div>
                                </div>

                                {/* divider */}
                                <div className="mt-10 h-px w-full bg-white/10" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
