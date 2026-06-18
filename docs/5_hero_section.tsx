// components/HeroSection.tsx
import Image from 'next/image';
import Link from 'next/link';

interface HeroProps {
  tagline: string;
  ctaText: string;
  backgroundImage: string;
}

export default function HeroSection({ tagline, ctaText, backgroundImage }: HeroProps) {
  return (
    <section
      id="home"
      className="relative flex h-screen min-h-[600px] items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt="ICT Foundation Nepal background"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark Overlay – gradient from black/30 to black/20 */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/20"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl font-[Poppins]">
          {tagline}
        </h1>

        {/* Call to Action Button – matches original red, Chivo font */}
        <Link
          href="#contact"
          className="mt-8 inline-block rounded-md bg-[#E33730] px-8 py-4 text-lg font-semibold text-white transition-colors duration-300 hover:bg-[#c22e28] font-[Chivo] tracking-wide"
        >
          {ctaText}
        </Link>
      </div>
    </section>
  );
}