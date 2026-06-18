import Link from 'next/link';
import Image from 'next/image';
import {
  FaUsers,
  FaRocket,
  FaHandshake,
  FaLandmark,
  FaCity,
  FaTasks,
  FaMapMarkerAlt,
  FaAward,
} from 'react-icons/fa';
import AnimatedSection from './AnimatedSection';
import SlideshowHero from './SlideshowHero';
import { LuBookOpenCheck, LuMap } from 'react-icons/lu';

const stats = [
  { value: '10+', label: 'Programs Successfully Conducted', icon: FaTasks },
  { value: '7', label: 'Provinces Actively Covered', icon: FaMapMarkerAlt },
  { value: '15+', label: 'Municipalities (Palikas) Reached', icon: FaCity },
  { value: '3+', label: 'Research Studies Completed', icon: LuBookOpenCheck },
];

const initiatives = [
  { name: 'Digital Nepal Conclave', href: '#initiatives', color: 'from-blue-600 to-blue-800' },
  { name: 'Startup & Idea Fest', href: '#initiatives', color: 'from-red-500 to-red-700' },
  { name: 'Digital Karnali Conclave', href: '#initiatives', color: 'from-teal-500 to-teal-700' },
  { name: 'Digital Madhesh Conclave', href: '#initiatives', color: 'from-orange-500 to-orange-700' },
  { name: 'Digital Samvad', href: '#initiatives', color: 'from-purple-500 to-purple-700' },
  { name: 'ICT Award', href: '#initiatives', color: 'from-amber-500 to-amber-700' },
  { name: 'Digital Leadership Dialogue', href: '#initiatives', color: 'from-indigo-500 to-indigo-700' },
  { name: 'ICT Gyan', href: '#initiatives', color: 'from-emerald-500 to-emerald-700' },
];

const collaborators = [
  'MoCIT', 'DOIT', 'NTA', 'NITC', 'FNCCI', 'NAST', 'NAS-IT',
  'The Asia Foundation', 'Huawei', 'Nepal Rastra Bank', 'upGrad', 'InDrive',
];

const slides = [
  {
    id: 'hero-1',
    src: '/images/hero/hero-1.jpg',
    alt: '',
  },
  {
    id: 'hero-3',
    src: '/images/hero/hero-3.jpg',
    alt: '',
  },
  {
    id: 'hero-4',
    src: '/images/hero/hero-4.jpg',
    alt: '',
  },
  {
    id: 'hero-5',
    src: '/images/hero/hero-5.jpg',
    alt: '',
  },
  {
    id: 'hero-2',
    src: '/images/hero/hero-2.jpg',
    alt: '',
  },
];

export default function HeroSection() {
  return (
    <>
      <SlideshowHero
        label="ICT Foundation Nepal"
        title="Driving Nepal’s Digital Transformation"
        description="Elevating Nepal: Pioneering Digital Progress Together"
        slides={slides}
        actions={[
          { label: 'Explore Our Initiatives', href: '/#initiatives', variant: 'primary' },
          { label: 'Contact Us', href: '/#contact', variant: 'secondary' },
        ]}
      />

      {/* Introduction Block */}
      <div className="gradient-primary relative overflow-hidden py-14">
        <div className="absolute inset-0 bg-dots opacity-20" aria-hidden="true" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="text-lg leading-relaxed font-light text-white/95">
            <b>ICT Foundation Nepal</b>, a non-profit organization aiming to push forward the country’s digital transformation mission through policy-level planning, discussions and ICT initiatives execution in collaboration with central government bodies at local, provincial, and national levels.
          </p>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="relative border-b border-gray-100 bg-white py-14">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="group text-center">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/5 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/25">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="text-3xl font-bold text-primary md:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm font-medium text-body-text/60">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Achievement Highlight Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-amber-50 via-orange-50 to-red-50 py-12 md:py-16">
        <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-amber-200/20 blur-3xl" aria-hidden="true" />
        <div className="absolute -left-20 -bottom-20 h-40 w-40 rounded-full bg-orange-200/20 blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto max-w-5xl px-6">
          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
            {/* WSIS Logo Placeholder */}
            <div className="flex-shrink-0">
              <div className="relative h-32 w-32 md:h-40 md:w-40">
                <Image
                  src="/images/wsis.png"
                  alt="World Summit on the Information Society"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="mb-4 flex flex-col items-center gap-3 md:flex-row md:items-baseline">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-200 px-3 py-1.5 text-lg font-bold uppercase tracking-wider text-amber-800">
                  <FaAward className="h-5 w-5" />
                  Global Nominee - WSIS Prizes
                </div>
              </div>
              <p className="text-center text-base leading-relaxed text-body-text md:text-left md:text-lg">
                ICT Foundation Nepal is among the <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Top 360 global nominees</span> selected from over 1,500 entries for the prestigious <span className="font-extrabold text-amber-900">World Summit on the Information Society (WSIS) Prizes</span> under Category AL C1 for promoting ICTs for development.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Initiatives */}
      {/* <AnimatedSection className="bg-surface" id="initiatives">
        <div className="mx-auto mb-4 section-divider" />
        <h2 className="mb-4 text-center text-3xl font-bold text-primary md:text-[32px]">
          Featured Initiatives
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-body-text/60">
          From grassroots digital literacy campaigns to Nepal&apos;s largest technology conference
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {initiatives.map((init) => (
            <Link
              key={init.name}
              href={init.href}
              className="card-hover group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm"
            >
              <div className={`relative h-32 bg-gradient-to-br ${init.color} p-5 flex items-end`}>
                <div className="absolute top-4 right-4 h-16 w-16 rounded-full bg-white/10" aria-hidden="true" />
                <div className="absolute -bottom-3 -right-3 h-24 w-24 rounded-full bg-white/5" aria-hidden="true" />
                <h3 className="relative text-lg font-bold leading-snug text-white">
                  {init.name}
                </h3>
              </div>
              <div className="flex flex-1 items-center p-5">
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary/50 transition-colors group-hover:text-primary">
                  Learn more
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </AnimatedSection> */}
    </>
  );
}
