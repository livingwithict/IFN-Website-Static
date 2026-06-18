 'use client';

import React from 'react';
import Image from 'next/image';
import { FaExternalLinkAlt, FaGlobe } from 'react-icons/fa';
import AnimatedSection from './AnimatedSection';

const initiatives = [
  {
    title: 'Digital Nepal Conclave (2022–2025)',
    description:
      "Nepal's largest annual digital conference unites ministers, government officials, IT professionals, entrepreneurs, and academics to advance the Digital Nepal Framework. Each edition focuses on a forward-looking theme, bringing together 15+ international keynote speakers alongside hundreds of national delegates.",
    website: 'digitalconclave.org',
    href: '/digital-nepal-conclave',
    logo: 'dnc-logo.png',
    accent: 'from-blue-500 to-blue-700',
    type: 'event',
  },
  {
    title: 'AI Summit',
    description:
      'Recognition program celebrating excellence in ICT innovation, implementation, and digital transformation in Nepal. Honoring innovators, entrepreneurs, organizations, and projects that demonstrate outstanding contributions to Nepal\'s digital future.',
    website: 'nepal-ai-summit',
    href: '/nepal-ai-summit',
    logo: 'naic.png',
    accent: 'from-cyan-500 to-cyan-700',
    type: 'event',
  },
  {
    title: 'Digital Karnali Conclave (2024–2025)',
    description:
      'Organized in collaboration with the Karnali Province Government to align local digital policies with national strategies. The 2025 edition in Birendranagar, Surkhet drew 500+ attendees and 50+ expert speakers.',
    website: 'digitalkarnali.org',
    href: '/digital-karnali-conclave',
    logo: 'dkc-logo.png',
    accent: 'from-teal-500 to-teal-700',
    type: 'event',
  },
  {
    title: 'Digital Madhesh Conclave (2025)',
    description:
      'The inaugural edition, held in Bardibas, Mahottari, marked a significant step toward advancing Madhesh Province\'s digital agenda. Co-organized with the Ministry of Home Affairs, Communication & Law.',
    website: 'madhesh.digital',
    href: '/digital-madhesh-conclave',
    logo: 'dmc-logo.png',
    accent: 'from-orange-500 to-orange-700',
    type: 'event',
  },
  {
    title: 'ICT Gyan',
    description:
      'A digital literacy program that promotes technology education in native languages across Nepal, empowering students, local communities, and government representatives. 15 sessions conducted nationwide to date.',
    website: 'ict-gyan',
    href: '/ict-gyan',
    logo: 'ict-gyan-logo.png',
    accent: 'from-emerald-500 to-emerald-700',
    type: 'initiative',
  },
  {
    title: 'Digital Samvad (1.0–4.0)',
    description:
      'A multi-edition dialogue series aligning stakeholders with the Digital Nepal vision. Beginning as a virtual initiative during Nepal\'s first lockdown, it grew into province-level physical gatherings — Digital Pradesh Samvad — across all seven provinces.',
    website: 'digitalsamvad.org',
    href: '/digital-samvad',
    logo: 'digital-samvad.jpg',
    accent: 'from-purple-500 to-purple-700',
    type: 'initiative',
  },
  {
    title: 'Startup & Idea Fest (2019–Present)',
    description:
      'An annual, province-wide startup showcase that has grown from a regional pilot to a national movement spanning all seven provinces. Shortlisted startups compete in Kathmandu finals featuring bootcamps, mentoring, exhibitions, and the coveted ICT Award.',
    website: 'startupnepal.org',
    href: '/ideafest',
    logo: 'snif.png',
    accent: 'from-red-500 to-red-700',
    stats: '15,000+ attendees · 100+ startups showcased',
    type: 'initiative',
  },
  {
    title: 'Digital Leadership Dialogue 1.0 & 2.0',
    description:
      'Two physical and seven virtual sessions organized ahead of the 2082 elections, engaging key stakeholders in conversations on digital policy and leadership.',
    website: 'digital-leadership-dialogue',
    href: '/digital-leadership-dialogue',
    logo: 'dld-logo.png',
    accent: 'from-indigo-500 to-indigo-700',
    type: 'initiative',
  },
];

const initiativeLogos = initiatives.map((item) => ({
  title: item.title,
  href: item.href,
  initials: item.title
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase(),
  color: item.accent,
  external: item.website !== undefined,
  logo: (item as any).logo,
}));

export default function InitiativesSection() {
  // Duplicate logos and use a CSS marquee that translates by 50% (one copy)
  const doubled = initiativeLogos.concat(initiativeLogos);

  const durationSeconds = Math.max(12, initiativeLogos.length * 6);

  return (
    <AnimatedSection id="initiatives" className="bg-surface">
      <div className="mx-auto mb-4 section-divider" />
      <h2 className="mb-4 text-center text-3xl font-bold text-primary md:text-[32px]">
        Programs & Initiatives
      </h2>
      <p className="mx-auto mb-12 max-w-3xl text-center text-body-text/60">
        From digital literacy campaigns to Nepal&apos;s biggest digital conference,
        our initiatives span every province driving inclusive digital transformation across the nation.
      </p>

      <div className="space-y-16">
        {/* Events */}
        <div>
          <h3 className="mb-8 text-2xl font-bold text-body-text">Our Flagship Events</h3>
          <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
            {initiatives.filter(init => init.type === 'event').map((init, i) => (
              <a
                key={init.title}
                href={init.href}
                target={init.website ? '_blank' : undefined}
                rel={init.website ? 'noopener noreferrer' : undefined}
                aria-label={init.title}
                className="card-hover group flex items-center justify-center overflow-hidden rounded-2xl bg-white shadow-sm p-6"
              >
                {init.logo ? (
                  <div className="h-30 w-full flex items-center justify-center">
                    <div className={
                      init.title === 'ICT Gyan'
                        ? 'w-38'
                        : init.title === 'Digital Nepal Conclave (2022–2025)'
                        ? 'w-52'
                        : init.title === 'AI Summit'
                        ? 'w-56'
                        : init.title === 'Digital Madhesh Conclave (2025)'
                        ? 'w-64'
                        : init.title === 'Digital Leadership Dialogue 1.0 & 2.0'
                        ? 'w-64'
                        : ''
                    }>
                      <Image
                        src={`/images/${init.logo}`}
                        alt={init.title}
                        width={200}
                        height={100}
                        className="object-contain w-full"
                      />
                    </div>
                  </div>
                ) : (
                  <div className={`h-20 w-20 rounded-2xl bg-gradient-to-br ${init.accent} flex items-center justify-center text-2xl font-bold text-white`}>
                    {String(initiatives.indexOf(init) + 1)}
                  </div>
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Initiatives */}
        <div>
          <h3 className="mb-8 text-2xl font-bold text-body-text">Our Initiatives</h3>
          <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
            {initiatives.filter(init => init.type === 'initiative').map((init, i) => (
              <a
                key={init.title}
                href={init.href}
                target={init.website ? '_blank' : undefined}
                rel={init.website ? 'noopener noreferrer' : undefined}
                aria-label={init.title}
                className="card-hover group flex items-center justify-center overflow-hidden rounded-2xl bg-white shadow-sm p-6"
              >
                {init.logo ? (
                  <div className="h-30 w-full flex items-center justify-center">
                    <div className={
                      init.title === 'ICT Gyan'
                        ? 'w-38'
                        : init.title === 'Digital Nepal Conclave (2022–2025)'
                        ? 'w-52'
                        : init.title === 'AI Summit'
                        ? 'w-56'
                        : init.title === 'Digital Madhesh Conclave (2025)'
                        ? 'w-64'
                        : init.title === 'Digital Leadership Dialogue 1.0 & 2.0'
                        ? 'w-64'
                        : ''
                    }>
                      <Image
                        src={`/images/${init.logo}`}
                        alt={init.title}
                        width={200}
                        height={100}
                        className="object-contain w-full"
                      />
                    </div>
                  </div>
                ) : (
                  <div className={`h-20 w-20 rounded-2xl bg-gradient-to-br ${init.accent} flex items-center justify-center text-2xl font-bold text-white`}>
                    {String(initiatives.indexOf(init) + 1)}
                  </div>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
