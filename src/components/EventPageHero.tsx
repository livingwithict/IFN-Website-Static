'use client';

import Image from 'next/image';

interface EventPageHeroProps {
  title: string;
  description: string;
  imageSrc: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function EventPageHero({
  title,
  description,
  imageSrc,
  buttonText,
  buttonLink,
}: EventPageHeroProps) {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:py-32 text-center">
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            {title}
          </h1>
          <p className="max-w-3xl text-base sm:text-lg text-gray-200">
            {description}
          </p>

          {buttonLink && (
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href={buttonLink}
                className="rounded-md bg-primary px-6 py-3 font-semibold text-white hover:opacity-95 transition-opacity"
              >
                {buttonText || 'Learn More'}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
