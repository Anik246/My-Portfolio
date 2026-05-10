'use client';

import React from 'react';
import { motion } from 'framer-motion';

const LAYERS = [
  { x: 80,  ys: [108, 172, 236, 300, 364], label: 'INPUT' },
  { x: 210, ys: [134, 198, 262, 326],       label: 'HIDDEN' },
  { x: 340, ys: [162, 236, 310],             label: 'HIDDEN' },
  { x: 450, ys: [206, 266],                  label: 'OUTPUT' },
];

const ACTIVE_EDGES: [number, number, number, number][] = [
  [0,2, 1,1], [1,1, 2,1], [2,1, 3,0],
  [0,3, 1,2], [1,2, 2,2], [2,2, 3,1],
];
const ACTIVE_NODES: [number, number][] = [
  [0,2],[1,1],[2,1],[3,0],
  [0,3],[1,2],[2,2],[3,1],
];

function isActiveEdge(li: number, ni: number, lj: number, nj: number) {
  return ACTIVE_EDGES.some(([a,b,c,d]) => a===li && b===ni && c===lj && d===nj);
}
function isActiveNode(li: number, ni: number) {
  return ACTIVE_NODES.some(([a,b]) => a===li && b===ni);
}

function bezier(x1: number, y1: number, x2: number, y2: number) {
  const mx = (x1 + x2) / 2;
  return `M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`;
}

export default function HeroIllustration() {
  return (
    <div className="relative w-full h-[460px] select-none">
      <svg viewBox="0 0 530 460" className="w-full h-full overflow-visible">
        <defs>
          <filter id="glow2" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow2-line" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="activeGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(99,102,241,0.15)" />
            <stop offset="50%" stopColor="rgba(99,102,241,0.55)" />
            <stop offset="100%" stopColor="rgba(99,102,241,0.15)" />
          </linearGradient>
          <linearGradient id="dimGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.02)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.07)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
          </linearGradient>
        </defs>

        {LAYERS.slice(0, -1).map((layerA, li) =>
          layerA.ys.flatMap((y1, ni) =>
            LAYERS[li + 1].ys.map((y2, nj) => {
              const active = isActiveEdge(li, ni, li + 1, nj);
              const d = bezier(layerA.x, y1, LAYERS[li + 1].x, y2);
              return (
                <motion.path
                  key={`e-${li}-${ni}-${nj}`}
                  d={d}
                  fill="none"
                  stroke={active ? 'url(#activeGrad2)' : 'url(#dimGrad2)'}
                  strokeWidth={active ? 1.4 : 0.8}
                  filter={active ? 'url(#glow2-line)' : undefined}
                  initial={{ opacity: 0, pathLength: 0 }}
                  animate={{ opacity: 1, pathLength: 1 }}
                  transition={{ delay: 0.3 + li * 0.2, duration: 0.9, ease: 'easeOut' }}
                />
              );
            })
          )
        )}

        {LAYERS.map((layer, li) =>
          layer.ys.map((y, ni) => {
            const active = isActiveNode(li, ni);
            return (
              <g key={`n-${li}-${ni}`}>
                {active && (
                  <motion.circle
                    cx={layer.x} cy={y} r={15}
                    fill="none"
                    stroke="rgba(99,102,241,0.18)"
                    strokeWidth="1"
                    animate={{ r: [15, 22, 15], opacity: [0.4, 0, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: li * 0.4 + ni * 0.15 }}
                  />
                )}
                <motion.circle
                  cx={layer.x} cy={y}
                  r={active ? 8.5 : 6}
                  fill="rgba(11,15,20,0.8)"
                  stroke={active ? 'rgba(99,102,241,0.75)' : 'rgba(255,255,255,0.15)'}
                  strokeWidth={active ? 1.5 : 1}
                  filter={active ? 'url(#glow2)' : undefined}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1 + li * 0.14 + ni * 0.05, type: 'spring', stiffness: 200, damping: 16 }}
                />
                <motion.circle
                  cx={layer.x} cy={y}
                  r={active ? 3.5 : 2.5}
                  fill={active ? 'rgba(99,102,241,0.9)' : 'rgba(255,255,255,0.35)'}
                  filter={active ? 'url(#glow2)' : undefined}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 + li * 0.14 + ni * 0.05, type: 'spring', stiffness: 260 }}
                />
              </g>
            );
          })
        )}

        {LAYERS.map((layer, li) => (
          <motion.text
            key={`lbl-${li}`}
            x={layer.x} y={410}
            textAnchor="middle"
            fill="rgba(255,255,255,0.15)"
            fontSize="9"
            fontFamily="ui-monospace, monospace"
            letterSpacing="0.14em"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 + li * 0.1, duration: 0.6 }}
          >
            {layer.label}
          </motion.text>
        ))}

        <motion.text
          x="265" y="438"
          textAnchor="middle"
          fill="rgba(255,255,255,0.08)"
          fontSize="8.5"
          fontFamily="ui-monospace, monospace"
          letterSpacing="0.1em"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          FEEDFORWARD NEURAL NETWORK — 5 × 4 × 3 × 2
        </motion.text>
      </svg>
    </div>
  );
}
