'use client';

import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export type Slide = {
  id: string;
  src: string;
  alt: string;
  caption?: string;
};

type Action = {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary';
};

type Breadcrumb = {
  href: string;
  label: string;
};

type Props = {
  label?: string;
  title: string;
  description: string;
  slides: Slide[];
  actions?: Action[];
  breadcrumbs?: Breadcrumb[];
};

export default function SlideshowHero({
  label,
  title,
  description,
  slides,
  actions = [],
  breadcrumbs = [],
}: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  const isSingleSlide = slides.length === 1;

  useEffect(() => {
    if (isSingleSlide) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, [slides.length, isSingleSlide]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeSlide.id}
            src={activeSlide.src}
            alt={activeSlide.alt}
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/90 to-transparent" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center sm:px-10 lg:px-14">
        <div className="mx-auto w-full max-w-6xl">
          {breadcrumbs.length > 0 && (
            <div className="mb-6 flex flex-wrap justify-center items-center gap-2 text-sm text-gray-200">
              {breadcrumbs.map((crumb, index) => (
                <span key={crumb.href} className="inline-flex items-center gap-2">
                  <Link href={crumb.href} className="transition hover:text-white/90">
                    {crumb.label}
                  </Link>
                  {index < breadcrumbs.length - 1 && <span className="text-gray-400">/</span>}
                </span>
              ))}
            </div>
          )}

          {label && (
            <span className="mb-6 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-white/80 backdrop-blur-sm">
              {label}
            </span>
          )}

          <div className="mx-auto max-w-3xl space-y-6">
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
              {description}
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-3">
              {actions.map((action) => (
                <Link
                  key={action.label}
                  href={action.href}
                  className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${
                    action.variant === 'secondary'
                      ? 'border border-white/30 bg-white/10 text-white hover:bg-white/15'
                      : 'bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary-dark'
                  }`}
                >
                  {action.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center items-center gap-3">
          {!isSingleSlide && slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              aria-label={`Show slide ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'w-12 bg-white' : 'w-4 bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
