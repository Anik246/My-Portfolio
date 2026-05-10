'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

const NAV = [
  { label: 'About',        id: 'about',        href: '/#about' },
  { label: 'Experience',   id: 'experience',   href: '/#experience' },
  { label: 'Projects',     id: 'projects',     href: '/#projects' },
  { label: 'Publications', id: 'publications', href: '/#publications' },
  { label: 'Contact',      id: 'contact',      href: '/#contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const isProjectDetail = pathname?.startsWith('/projects/');
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const smoothJump = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (pathname !== '/') return;
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    setOpen(false);
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [pathname]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  if (isProjectDetail) return null;

  return (
    <header
      ref={ref}
      className="sticky top-0 z-40 backdrop-blur-xl bg-[#0b0f14]/80 border-b border-white/[0.06]"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 h-14 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <div className="h-8 w-8 rounded-md bg-white/5 ring-1 ring-white/10 grid place-items-center text-sm font-semibold text-white" style={{ letterSpacing: '-0.02em' }}>
            SR
          </div>
          <span className="text-sm font-semibold text-zinc-200 hidden sm:block" style={{ letterSpacing: '-0.02em' }}>
            Shahriar Rahman
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={(e) => smoothJump(e, item.id)}
              className="px-3 py-1.5 text-sm text-zinc-300 hover:text-white rounded-md hover:bg-white/5 transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right: CV button + mobile menu */}
        <div className="flex items-center gap-2">
          <a
            href="/api/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/20 px-3 py-1.5 text-sm font-medium text-zinc-300 transition"
          >
            View CV
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden rounded-md bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-sm font-medium text-zinc-300 hover:bg-white/10 transition"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="lg:hidden border-t border-white/[0.06] bg-[#0b0f14]/95 backdrop-blur-xl">
          <div className="mx-auto max-w-5xl px-4 py-4 flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => smoothJump(e, item.id)}
                className="px-3 py-2 text-sm text-zinc-400 hover:text-white rounded-md hover:bg-white/5 transition"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="/api/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-3 py-2 text-sm font-medium text-zinc-300 rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition"
            >
              View CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
