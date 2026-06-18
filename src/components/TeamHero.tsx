'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const slides = [
  {
    id: 'hero-bg',
    src: '/images/hero/hero-1.jpg',
    alt: 'ICT Foundation Nepal event',
    caption: 'Building across communities',
  },
];

export default function TeamHero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = slides[activeSlide];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-slate-100 to-white px-6 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(227,56,49,0.15),_transparent_30%)] pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              Our Leadership
            </span>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: 'easeOut' }} className="space-y-6">
              <h1 className="text-4xl font-extrabold text-[#0E2557] sm:text-5xl">
                Meet the team powering Nepal’s digital future.
              </h1>
              <p className="max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                A diverse group of strategists, program leaders, communicators and technologists collaborating to shape an inclusive digital Nepal.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#team"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:bg-primary-dark"
                >
                  View team
                </a>
                <a
                  href="#patrons"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                >
                  Our patrons
                </a>
              </div>
            </motion.div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />
            <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white/80 shadow-2xl shadow-slate-200/50">
              <div className="relative h-[420px] w-full">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={slide.id}
                    src={slide.src}
                    alt={slide.alt}
                    className="absolute inset-0 h-full w-full object-cover"
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                  />
                </AnimatePresence>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent p-6 text-white">
                  {/* <p className="text-sm uppercase tracking-[0.25em] text-slate-200">Team slideshow</p> */}
                  <p className="mt-2 text-xl font-semibold">{slide.caption}</p>
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-center gap-3">
              {slides.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  aria-label={`Show slide ${index + 1}`}
                  onClick={() => setActiveSlide(index)}
                  className={`h-2.5 w-10 rounded-full transition ${index === activeSlide ? 'bg-primary' : 'bg-slate-300 hover:bg-slate-400'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
