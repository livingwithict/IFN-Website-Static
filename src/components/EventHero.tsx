import { Event } from '@/data/events';
import Link from 'next/link';

interface EventHeroProps {
  event: Event;
}

export default function EventHero({ event }: EventHeroProps) {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0E2557] via-[#1a3a7a] to-[#0E2557] pt-24">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-20 text-center text-white">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center justify-center gap-2 text-sm">
          <Link href="/#initiatives" className="hover:text-primary transition-colors">
            Events
          </Link>
          <span>/</span>
          <span className="text-primary font-medium">{event.title}</span>
        </div>

        {/* Title */}
        <h1 className="mb-6 text-4xl font-bold leading-tight lg:text-5xl xl:text-6xl">
          {event.title}
        </h1>

        {/* Description */}
        <p className="mb-8 text-lg leading-relaxed text-gray-200 lg:text-xl">
          {event.description}
        </p>

        {/* Event Details */}
        <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {event.date && (
            <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
              <div className="flex items-center justify-center gap-2 mb-2">
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm font-medium text-gray-300">Date</span>
              </div>
              <p className="text-lg font-semibold">{event.date}</p>
            </div>
          )}

          {event.location && (
            <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
              <div className="flex items-center justify-center gap-2 mb-2">
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm font-medium text-gray-300">Location</span>
              </div>
              <p className="text-lg font-semibold">{event.location}</p>
            </div>
          )}
        </div>

        {/* CTA Button */}
        <button className="inline-block rounded-lg bg-primary px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-lg active:scale-95">
          Learn More
        </button>
      </div>

      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full" style={{ height: '120px' }}>
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.87,168.19-17.28,250.61-.39C823.78,31,906.4,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}
