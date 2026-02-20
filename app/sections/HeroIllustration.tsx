'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function HeroIllustration() {
  return (
    <div className="relative w-full h-[580px] overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ff3b30]/10 rounded-full blur-[150px]" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-violet-500/15 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-1/3 w-[250px] h-[250px] bg-cyan-500/10 rounded-full blur-[100px]" />

      {/* Main SVG */}
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 25px 60px rgba(255, 59, 48, 0.15))' }}
      >
        <defs>
          {/* Mesh Gradients */}
          <radialGradient id="blob1Gradient" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="rgba(255,59,48,0.85)" />
            <stop offset="50%" stopColor="rgba(255,59,48,0.4)" />
            <stop offset="100%" stopColor="rgba(255,59,48,0)" />
          </radialGradient>

          <radialGradient id="blob2Gradient" cx="70%" cy="40%" r="60%">
            <stop offset="0%" stopColor="rgba(139,92,246,0.8)" />
            <stop offset="50%" stopColor="rgba(139,92,246,0.35)" />
            <stop offset="100%" stopColor="rgba(139,92,246,0)" />
          </radialGradient>

          <radialGradient id="blob3Gradient" cx="50%" cy="70%" r="65%">
            <stop offset="0%" stopColor="rgba(6,182,212,0.75)" />
            <stop offset="50%" stopColor="rgba(6,182,212,0.3)" />
            <stop offset="100%" stopColor="rgba(6,182,212,0)" />
          </radialGradient>

          <radialGradient id="blob4Gradient" cx="40%" cy="50%" r="55%">
            <stop offset="0%" stopColor="rgba(236,72,153,0.7)" />
            <stop offset="50%" stopColor="rgba(236,72,153,0.25)" />
            <stop offset="100%" stopColor="rgba(236,72,153,0)" />
          </radialGradient>

          <linearGradient id="glassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.05)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
          </linearGradient>

          <linearGradient id="strokeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.1)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.2)" />
          </linearGradient>

          <linearGradient id="accentLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,59,48,0)" />
            <stop offset="50%" stopColor="rgba(255,59,48,0.8)" />
            <stop offset="100%" stopColor="rgba(255,59,48,0)" />
          </linearGradient>

          {/* Filters */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="softBlur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" />
          </filter>
        </defs>

        {/* ========== FLUID BLOBS ========== */}
        
        {/* Primary Red Blob */}
        <motion.path
          d="M250,150 
             C320,120 380,160 390,230 
             C400,300 350,360 280,370 
             C210,380 150,340 140,270 
             C130,200 180,180 250,150Z"
          fill="url(#blob1Gradient)"
          filter="url(#glow)"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: [1, 1.05, 0.98, 1.02, 1],
            opacity: 1,
            d: [
              "M250,150 C320,120 380,160 390,230 C400,300 350,360 280,370 C210,380 150,340 140,270 C130,200 180,180 250,150Z",
              "M260,145 C330,130 385,170 388,240 C391,310 340,365 275,368 C210,371 145,335 142,265 C139,195 190,160 260,145Z",
              "M245,155 C315,115 378,158 392,225 C406,292 355,358 285,372 C215,386 152,342 138,275 C124,208 175,195 245,155Z",
              "M255,148 C325,125 382,165 389,235 C396,305 345,362 278,369 C211,376 148,338 141,268 C134,198 185,171 255,148Z",
              "M250,150 C320,120 380,160 390,230 C400,300 350,360 280,370 C210,380 150,340 140,270 C130,200 180,180 250,150Z"
            ]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />

        {/* Violet Blob */}
        <motion.path
          d="M320,200 
             C380,180 420,220 410,280 
             C400,340 340,380 280,360 
             C220,340 200,280 230,230 
             C260,180 280,210 320,200Z"
          fill="url(#blob2Gradient)"
          filter="url(#glow)"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: [1, 0.97, 1.04, 0.99, 1],
            opacity: 1,
            d: [
              "M320,200 C380,180 420,220 410,280 C400,340 340,380 280,360 C220,340 200,280 230,230 C260,180 280,210 320,200Z",
              "M325,195 C388,178 425,225 412,288 C399,351 335,385 273,362 C211,339 195,275 228,223 C261,171 262,212 325,195Z",
              "M315,205 C372,182 418,218 408,275 C398,332 342,375 285,358 C228,341 205,285 232,238 C259,191 278,228 315,205Z",
              "M322,198 C385,185 422,222 411,282 C400,342 338,382 278,361 C218,340 198,278 229,228 C260,178 279,211 322,198Z",
              "M320,200 C380,180 420,220 410,280 C400,340 340,380 280,360 C220,340 200,280 230,230 C260,180 280,210 320,200Z"
            ]
          }}
          transition={{ 
            duration: 14, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 0.5
          }}
        />

        {/* Cyan Blob */}
        <motion.path
          d="M180,280 
             C220,240 280,250 300,300 
             C320,350 290,410 230,420 
             C170,430 110,390 100,330 
             C90,270 140,320 180,280Z"
          fill="url(#blob3Gradient)"
          filter="url(#glow)"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: [1, 1.03, 0.96, 1.01, 1],
            opacity: 1,
            d: [
              "M180,280 C220,240 280,250 300,300 C320,350 290,410 230,420 C170,430 110,390 100,330 C90,270 140,320 180,280Z",
              "M185,275 C228,238 285,252 308,305 C331,358 295,418 232,425 C169,432 105,388 98,325 C91,262 142,312 185,275Z",
              "M175,285 C212,242 275,248 295,295 C315,342 285,405 228,418 C171,431 115,392 102,335 C89,278 138,328 175,285Z",
              "M182,278 C225,240 282,251 302,302 C322,353 288,412 230,421 C172,430 108,389 99,328 C90,267 139,316 182,278Z",
              "M180,280 C220,240 280,250 300,300 C320,350 290,410 230,420 C170,430 110,390 100,330 C90,270 140,320 180,280Z"
            ]
          }}
          transition={{ 
            duration: 16, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* Small Pink Accent Blob */}
        <motion.path
          d="M380,320 
             C410,300 440,320 435,355 
             C430,390 395,410 365,395 
             C335,380 350,340 380,320Z"
          fill="url(#blob4Gradient)"
          filter="url(#glow)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [1, 1.1, 0.95, 1.05, 1],
            opacity: 0.8,
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1.5
          }}
        />

        {/* ========== GLASS MORPHISM ELEMENTS ========== */}

        {/* Glass Card 1 - Top Right */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.rect
            x="320"
            y="80"
            width="140"
            height="90"
            rx="16"
            fill="rgba(255,255,255,0.08)"
            stroke="url(#strokeGradient)"
            strokeWidth="1"
            animate={{ y: [80, 75, 80] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.g animate={{ y: [0, -5, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
            {/* Inner glow */}
            <rect x="322" y="82" width="136" height="40" rx="14" fill="rgba(255,255,255,0.03)" />
            {/* Content */}
            <circle cx="345" cy="108" r="12" fill="rgba(255,59,48,0.3)" stroke="rgba(255,59,48,0.5)" strokeWidth="1" />
            <text x="345" y="112" textAnchor="middle" fill="#ff3b30" fontSize="12" fontWeight="bold">✦</text>
            <text x="365" y="105" fill="rgba(255,255,255,0.5)" fontSize="10">Creative</text>
            <text x="365" y="120" fill="rgba(255,255,255,0.9)" fontSize="13" fontWeight="600">Solutions</text>
            <line x1="335" y1="140" x2="445" y2="140" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <text x="335" y="158" fill="rgba(255,255,255,0.4)" fontSize="9">Building the future</text>
          </motion.g>
        </motion.g>

        {/* Glass Card 2 - Bottom Left */}
        <motion.g
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.rect
            x="40"
            y="340"
            width="130"
            height="85"
            rx="16"
            fill="rgba(255,255,255,0.06)"
            stroke="url(#strokeGradient)"
            strokeWidth="1"
            animate={{ y: [340, 345, 340] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.g animate={{ y: [0, 5, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
            <rect x="42" y="342" width="126" height="35" rx="14" fill="rgba(255,255,255,0.02)" />
            <circle cx="65" cy="365" r="10" fill="rgba(6,182,212,0.3)" stroke="rgba(6,182,212,0.5)" strokeWidth="1" />
            <text x="65" y="369" textAnchor="middle" fill="#06b6d4" fontSize="11" fontWeight="bold">→</text>
            <text x="82" y="362" fill="rgba(255,255,255,0.5)" fontSize="9">Progress</text>
            <text x="82" y="375" fill="rgba(255,255,255,0.9)" fontSize="12" fontWeight="600">Driven</text>
            <line x1="55" y1="392" x2="155" y2="392" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
            <text x="55" y="410" fill="rgba(255,255,255,0.35)" fontSize="8">Step by step</text>
          </motion.g>
        </motion.g>

        {/* ========== FLOATING ORBS ========== */}

        {/* Large floating orb */}
        <motion.circle
          cx="420"
          cy="250"
          r="25"
          fill="url(#glassGradient)"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1"
          initial={{ scale: 0 }}
          animate={{ 
            scale: 1,
            y: [0, -15, 0],
            x: [0, 5, 0]
          }}
          transition={{ 
            scale: { delay: 0.8, type: "spring" },
            y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
        />

        {/* Medium floating orb */}
        <motion.circle
          cx="80"
          cy="180"
          r="18"
          fill="url(#glassGradient)"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="1"
          initial={{ scale: 0 }}
          animate={{ 
            scale: 1,
            y: [0, 10, 0],
            x: [0, -8, 0]
          }}
          transition={{ 
            scale: { delay: 1, type: "spring" },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
        />

        {/* Small floating orbs */}
        <motion.circle
          cx="450"
          cy="400"
          r="10"
          fill="rgba(255,59,48,0.2)"
          stroke="rgba(255,59,48,0.4)"
          strokeWidth="1"
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.circle
          cx="60"
          cy="280"
          r="8"
          fill="rgba(139,92,246,0.25)"
          stroke="rgba(139,92,246,0.4)"
          strokeWidth="1"
          animate={{ 
            y: [0, 15, 0],
            opacity: [0.5, 0.9, 0.5]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />

        <motion.circle
          cx="350"
          cy="450"
          r="6"
          fill="rgba(6,182,212,0.3)"
          stroke="rgba(6,182,212,0.5)"
          strokeWidth="1"
          animate={{ 
            y: [0, -12, 0],
            x: [0, 8, 0]
          }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* ========== ACCENT LINES ========== */}

        {/* Curved accent line 1 */}
        <motion.path
          d="M100,120 Q200,80 300,100"
          fill="none"
          stroke="url(#accentLine)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ delay: 1.8, duration: 1.5, ease: "easeOut" }}
        />

        {/* Curved accent line 2 */}
        <motion.path
          d="M400,380 Q350,420 280,440"
          fill="none"
          stroke="url(#accentLine)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ delay: 2, duration: 1.5, ease: "easeOut" }}
        />

        {/* ========== SPARKLES ========== */}
        {[
          { x: 200, y: 100, delay: 0 },
          { x: 420, y: 180, delay: 0.3 },
          { x: 150, y: 400, delay: 0.6 },
          { x: 380, y: 280, delay: 0.9 },
          { x: 100, y: 240, delay: 1.2 },
          { x: 320, y: 420, delay: 1.5 },
        ].map((sparkle, i) => (
          <motion.g key={i}>
            <motion.line
              x1={sparkle.x - 6}
              y1={sparkle.y}
              x2={sparkle.x + 6}
              y2={sparkle.y}
              stroke="rgba(255,255,255,0.8)"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5]
              }}
              transition={{ 
                delay: 2 + sparkle.delay, 
                duration: 2, 
                repeat: Infinity,
                repeatDelay: 3
              }}
            />
            <motion.line
              x1={sparkle.x}
              y1={sparkle.y - 6}
              x2={sparkle.x}
              y2={sparkle.y + 6}
              stroke="rgba(255,255,255,0.8)"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5]
              }}
              transition={{ 
                delay: 2 + sparkle.delay, 
                duration: 2, 
                repeat: Infinity,
                repeatDelay: 3
              }}
            />
          </motion.g>
        ))}

        {/* ========== FLOATING PARTICLES ========== */}
        {[...Array(15)].map((_, i) => (
          <motion.circle
            key={`particle-${i}`}
            cx={80 + Math.random() * 340}
            cy={100 + Math.random() * 350}
            r={1 + Math.random() * 2}
            fill={
              i % 4 === 0 
                ? 'rgba(255,59,48,0.7)' 
                : i % 4 === 1 
                ? 'rgba(139,92,246,0.7)' 
                : i % 4 === 2
                ? 'rgba(6,182,212,0.7)'
                : 'rgba(255,255,255,0.5)'
            }
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.8, 0],
              y: [0, -40 - Math.random() * 30],
              x: [0, (Math.random() - 0.5) * 30],
            }}
            transition={{
              delay: 1.5 + i * 0.2,
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              repeatDelay: Math.random() * 2,
            }}
          />
        ))}
      </svg>

      {/* ========== OUTER ROTATING RINGS ========== */}
      <motion.div
        className="absolute top-12 right-16 w-24 h-24 rounded-full border border-[#ff3b30]/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute top-16 right-20 w-16 h-16 rounded-full border border-violet-500/15"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-20 left-12 w-20 h-20 rounded-full border border-cyan-500/15"
        animate={{ rotate: 360 }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
      />

      {/* ========== CORNER ACCENTS ========== */}
      <motion.div
        className="absolute top-8 left-8 w-2 h-2 rounded-full bg-[#ff3b30]"
        animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-12 right-20 w-1.5 h-1.5 rounded-full bg-violet-500"
        animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.3, 1] }}
        transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
      />
    </div>
  );
}