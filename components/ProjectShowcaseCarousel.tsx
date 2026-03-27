"use client";

import { useState } from "react";
import Image from "next/image";

type MediaItem = {
  src: string;
  alt: string;
  poster?: string; // optional (useful for mp4)
};

type ProjectShowcaseCarouselProps = {
  images: MediaItem[]; // keep prop name to avoid changing your pages
};

function isMp4(src: string) {
  return /\.mp4(\?.*)?$/i.test(src);
}

export default function ProjectShowcaseCarousel({ images }: ProjectShowcaseCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const total = images.length;
  const current = images[currentIndex];

  const goPrev = () => setCurrentIndex((idx) => (idx - 1 + total) % total);
  const goNext = () => setCurrentIndex((idx) => (idx + 1) % total);

  if (total === 0) return null;

  const videoMode = current?.src ? isMp4(current.src) : false;

  return (
    <section className="mx-auto flex w-full max-w-5xl flex-col items-center gap-4">
      <div className="relative w-full overflow-hidden rounded-2xl border border-white/15 bg-black/40 p-2 backdrop-blur-sm">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
          {videoMode ? (
            <video
              key={current.src}
              src={current.src}
              poster={current.poster}
              controls
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 h-full w-full object-contain"
            />
          ) : (
            <Image
              src={current.src}
              alt={current.alt}
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-contain"
              priority
            />
          )}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={goPrev}
          className="rounded-md border border-white/20 px-3 py-1 text-sm text-white/80 transition hover:bg-white/10 backdrop-blur-sm"
          aria-label="Previous image"
        >
          Prev
        </button>

        <span className="text-xs tracking-wide text-white/60">
          {currentIndex + 1} / {total}
        </span>

        <button
          type="button"
          onClick={goNext}
          className="rounded-md border border-white/20 px-3 py-1 text-sm text-white/80 transition hover:bg-white/10 backdrop-blur-sm"
          aria-label="Next image"
        >
          Next
        </button>
      </div>
    </section>
  );
}