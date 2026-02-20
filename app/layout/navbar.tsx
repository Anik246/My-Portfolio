'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

type NavItem = { label: string; id: string; href: string };

const BRAND = { name: 'Shahriar', plusColorClass: 'text-[#ff3b30]' };

const CTA = { label: 'Get Resume', href: '/api/resume' };


/* ------------------------------ Styles ------------------------------ */
// ✅ Navbar pill border (NO glow, just rim)
const GLASS_BORDER = [
  'relative isolate',
  "before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:p-[1.6px] before:content-['']",
  'before:mix-blend-screen',
  "before:bg-[radial-gradient(70%_140%_at_14%_-10%,rgba(255,255,255,1)_0%,rgba(255,255,255,0.92)_10%,rgba(255,255,255,0.28)_24%,rgba(255,255,255,0)_46%),radial-gradient(70%_140%_at_92%_112%,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.82)_12%,rgba(255,255,255,0.22)_26%,rgba(255,255,255,0)_50%),linear-gradient(rgba(255,255,255,0.045),rgba(255,255,255,0.045))]",
  'before:[-webkit-mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)]',
  'before:[-webkit-mask-composite:xor]',
  'before:[mask-composite:exclude]',
  "after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:content-['']",
  'after:mix-blend-screen',
  'after:shadow-[0_0_0_1px_rgba(255,255,255,0.14)]',
].join(' ');

// ✅ Mobile dropdown border
const GLASS_BORDER_PANEL = [
  'relative isolate',
  "before:pointer-events-none before:absolute before:inset-0 before:rounded-[28px] before:p-[1.6px] before:content-['']",
  'before:mix-blend-screen',
  "before:bg-[radial-gradient(70%_140%_at_14%_-10%,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.90)_10%,rgba(255,255,255,0.26)_24%,rgba(255,255,255,0)_46%),radial-gradient(70%_140%_at_92%_112%,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.78)_12%,rgba(255,255,255,0.20)_26%,rgba(255,255,255,0)_50%),linear-gradient(rgba(255,255,255,0.042),rgba(255,255,255,0.042))]",
  'before:[-webkit-mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)]',
  'before:[-webkit-mask-composite:xor]',
  'before:[mask-composite:exclude]',
  "after:pointer-events-none after:absolute after:inset-0 after:rounded-[28px] after:content-['']",
  'after:mix-blend-screen',
  'after:shadow-[0_0_0_1px_rgba(255,255,255,0.16),0_0_22px_rgba(255,255,255,0.12),0_20px_56px_rgba(255,255,255,0.055)]',
].join(' ');

// ✅ CTA glass (desktop + mobile)
const CTA_GLASS = [
  'relative isolate inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium',
  'bg-black/25 text-white/90 hover:bg-white/5 transition',
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
const CTA_GLASS_MOBILE = CTA_GLASS.replace('px-5 py-2', 'px-6 py-3');

// ✅ links
const NAV_LINK =
  'text-[13px] font-semibold uppercase tracking-[0.22em] text-white/88 transition-colors duration-200 hover:text-[#ff3b30]';
const NAV_LINK_MOBILE =
  'text-[14px] font-semibold uppercase tracking-[0.25em] text-white/90 transition-colors duration-200 hover:text-[#ff3b30]';

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const isProjectDetail = pathname?.startsWith('/projects/');
  const [open, setOpen] = useState(false);

  // ✅ measure navbar height → CSS var
  const headerBoxRef = useRef<HTMLDivElement | null>(null);

  // ✅ NAV organized by your actual section order
  const NAV: NavItem[] = useMemo(
    () => [
      { label: 'ABOUT', id: 'about', href: '/#about' },
      { label: 'EXPERIENCE', id: 'experience', href: '/#experience' },
      { label: 'PROJECTS', id: 'projects', href: '/#projects' },
      { label: 'EDUCATION', id: 'education', href: '/#education' },
      { label: 'PUBLICATIONS', id: 'publications', href: '/#publications' },
      { label: 'CONTACT', id: 'contact', href: '/#contact' },
    ],
    []
  );

  const smoothJump = useCallback(
    (e: React.MouseEvent, id: string) => {
      if (!isHome) return;
      e.preventDefault();
      const el = document.getElementById(id);
      if (!el) return;
      setOpen(false);
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },
    [isHome]
  );

  useEffect(() => {
    // Skip measuring if navbar is hidden
    if (isProjectDetail) return;
    
    const measure = () => {
      const el = headerBoxRef.current;
      if (!el) return;
      const h = Math.ceil(el.getBoundingClientRect().height);
      document.documentElement.style.setProperty('--nav-offset', `${h}px`);
    };

    measure();

    const ro = new ResizeObserver(measure);
    if (headerBoxRef.current) ro.observe(headerBoxRef.current);
    window.addEventListener('resize', measure);

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [isProjectDetail]);

  // ✅ Hide navbar on project detail pages (after all hooks)
  if (isProjectDetail) return null;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div ref={headerBoxRef} className="mx-auto max-w-[1400px] px-4 sm:px-6 pt-6">
        <div className="relative">
          {/* ✅ shadow ONLY under navbar */}
          <div className="pointer-events-none absolute left-1/2 top-[calc(100%+6px)] h-16 w-[120%] -translate-x-1/2 rounded-full bg-black/90 blur-3xl opacity-90 -z-10" />

          <div
            className={[
              'rounded-full bg-black/30 backdrop-blur-xl shadow-[0_32px_70px_-40px_rgba(0,0,0,0.95)]',
              GLASS_BORDER,
            ].join(' ')}
          >
            {/* ✅ increased height + responsive padding */}
            <div className="relative z-10 h-16 px-5 sm:px-6 flex items-center justify-between">
              <div className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.10)]" />

              {/* Left */}
              <div className="w-[180px] sm:w-[220px] flex items-center">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="text-white font-semibold text-xl tracking-tight"
                  aria-label="Go home"
                >
                  <span className={BRAND.plusColorClass}>SR</span>
                </Link>
              </div>

              {/* Center nav (desktop) */}
              <nav className="hidden lg:flex flex-1 items-center justify-center gap-7 xl:gap-10">
                {NAV.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={(e) => smoothJump(e, item.id)}
                    className={NAV_LINK}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Right CTA (desktop) */}
              <div className="hidden lg:flex w-[200px] sm:w-[240px] items-center justify-end">
                {/* ✅ Auto-download resume */}
                <a href={CTA.href} className={CTA_GLASS}>
                  {CTA.label} <ArrowUpRight className="h-4 w-4" />
                </a>

              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setOpen((v) => !v)}
                className="lg:hidden inline-flex items-center justify-center rounded-full border border-white/15 bg-black/25 px-6 py-2 text-sm font-medium text-white/90 hover:bg-white/5 transition shadow-[inset_0_1px_0_rgba(255,255,255,0.10)]"
                aria-label={open ? 'Close menu' : 'Open menu'}
              >
                {open ? 'Close' : 'Menu'}
              </button>
            </div>
          </div>

          {/* Mobile dropdown */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.18 }}
                className="lg:hidden absolute left-0 right-0 top-full mt-3 z-50"
              >
                <div
                  className={[
                    'overflow-hidden rounded-[28px] bg-black/35 backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,0.70)]',
                    GLASS_BORDER_PANEL,
                  ].join(' ')}
                >
                  <div className="pointer-events-none absolute inset-0 rounded-[28px] shadow-[inset_0_1px_0_rgba(255,255,255,0.10)]" />

                  <div className="relative z-10 py-10 flex flex-col items-center justify-center gap-7">
                    {NAV.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={(e) => smoothJump(e, item.id)}
                        className={NAV_LINK_MOBILE}
                      >
                        {item.label}
                      </Link>
                    ))}

                    {/* ✅ Auto-download resume (mobile) */}
                    <a href={CTA.href} className={CTA_GLASS_MOBILE}>
                      {CTA.label} <ArrowUpRight className="h-4 w-4" />
                    </a>

                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}