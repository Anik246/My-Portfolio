'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

type GalleryImage = { src: string; caption: string };

type Props = {
  images: GalleryImage[];
  variant?: 'landscape' | 'portrait';
};

export default function ImageGallery({ images, variant = 'landscape' }: Props) {
  const [active, setActive] = useState<GalleryImage | null>(null);

  const isPortrait = variant === 'portrait';

  return (
    <>
      <div className={`grid gap-4 ${isPortrait ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4' : 'grid-cols-1 sm:grid-cols-2'}`}>
        {images.map((img) => (
          <button
            key={img.src}
            onClick={() => setActive(img)}
            className="group relative rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:border-white/25 transition-colors text-left"
          >
            <div className={`relative w-full ${isPortrait ? 'aspect-[9/16]' : 'aspect-video'}`}>
              <Image
                src={img.src}
                alt={img.caption}
                fill
                sizes={isPortrait ? '(max-width: 640px) 50vw, 25vw' : '(max-width: 640px) 100vw, 50vw'}
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <p className="px-3 py-2.5 text-xs text-white/60 group-hover:text-white/80 transition-colors leading-snug">
              {img.caption}
            </p>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setActive(null)}
        >
          <button
            onClick={() => setActive(null)}
            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className={`relative ${isPortrait ? 'max-w-xs w-full' : 'max-w-5xl w-full'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`relative w-full ${isPortrait ? 'aspect-[9/16]' : 'aspect-video'} rounded-xl overflow-hidden border border-white/10`}>
              <Image
                src={active.src}
                alt={active.caption}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
            <p className="mt-3 text-center text-sm text-white/60">{active.caption}</p>
          </div>
        </div>
      )}
    </>
  );
}
