'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const ongoingActivities = [
  {
    id: 1,
    title: 'Business Incubation Service',
    description: 'Comprehensive incubation program providing mentorship, funding support, infrastructure, and resources to nurture ICT startups from ideation to successful market launch.',
    status: 'Ongoing',
    thumbnail: '/images/events/Incubation.jpg',
    href: '/incubation',
    color: 'from-green-600 to-green-800',
  },
  {
    id: 2,
    title: 'Google Career Certificates Scholarship',
    description: 'Up to 500 fully funded scholarship seats for the Google Career Certificates program in collaboration with Mero Job Limited & Google LLC.',
    status: 'Ongoing',
    thumbnail: '/images/events/Google.jpg',
    href: '/google-career-certificates',
    color: 'from-red-600 to-red-800',
  },
  {
    id: 2,
    title: 'ICT Gyan',
    description: 'Knowledge-sharing platform providing ICT training and professional development with ICT related contents',
    status: 'Ongoing',
    thumbnail: '/images/events/ICT-Gyan.jpg',
    href: '/ict-gyan',
    color: 'from-blue-600 to-blue-800',
  },
];

const upcomingEvents = [
  {
    id: 1,
    title: 'Digital Nepal Conclave 2026',
    description: 'The Digital Nepal Conclave is the country\'s leading digital conference, uniting government officials, private sector stakeholders, IT professionals, entrepreneurs, and academics to champion the vision of a Digital Nepal.',
    date: 'July, 2026',
    location: '',
    thumbnail: '/images/dnc-logo.png',
    href: '/digital-nepal-conclave',
    color: 'from-blue-600 to-blue-800',
  },
  {
    id: 2,
    title: 'Nepal AI Summit',
    description: 'NAIC 2026 is a flagship national conference designed to bring together policymakers, industry leaders, researchers, startups, investors, and global experts to advance Nepal\'s AI ecosystem.',
    date: 'September, 2026',
    location: 'The Plaza, Pulchowk, Lalitpur',
    thumbnail: '/images/naic.png',
    href: '/nepal-ai-summit',
    color: 'from-blue-600 to-blue-800',
  },
  {
    id: 3,
    title: 'ICT Award 2026 ',
    description: 'The ICT Award is a prestigious award in Nepal, which is given to individuals, innovation and organizations for outstanding achievements and excellence in the field of Information and Communications Technology (ICT).',
    date: 'December, 2026',
    location: 'Kathmandu, Nepal',
    thumbnail: '/images/ict-award.png',
    href: '/ict-award',
    color: 'from-teal-600 to-teal-800',
  },
];

export default function UpcomingEventsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const currentEvent = upcomingEvents[currentIndex];

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % upcomingEvents.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const handleNext = () => {
    setIsAutoPlay(false);
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % upcomingEvents.length);
    setIsAutoPlay(true);
  };

  const handlePrev = () => {
    setIsAutoPlay(false);
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + upcomingEvents.length) % upcomingEvents.length);
    setIsAutoPlay(true);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlay(false);
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setIsAutoPlay(true);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <AnimatedSection id="upcoming-events">
      
      <div className="mx-auto mb-4 section-divider" />
      {/* Ongoing Activities Section */}
      <div className="mb-20">
        <h2 className="mb-4 text-center text-3xl font-bold text-primary md:text-[32px]">
          Ongoing Activities
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-body-text/60">
          Explore our continuous initiatives and programs supporting Nepal's digital ecosystem.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {ongoingActivities.map((activity) => (
            <Link
              key={activity.id}
              href={activity.href}
              className="card-hover group overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-md transition-all"
            >
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <Image
                  src={activity.thumbnail}
                  alt={activity.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              </div>
              <div className="p-6">
                <div className="mb-3 inline-flex rounded-full bg-green-100 px-3 py-1">
                  <span className="text-xs font-semibold text-green-700">{activity.status}</span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-body-text group-hover:text-primary transition-colors">
                  {activity.title}
                </h3>
                <p className="text-sm text-body-text/70 line-clamp-2">
                  {activity.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mx-auto mb-4 section-divider" />    
      {/* Upcoming Events Section */}
      <div>
        <h2 className="mb-4 text-center text-3xl font-bold text-primary md:text-[32px]">
          Upcoming Major Events
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-body-text/60">
          Join us at our upcoming events and initiatives across Nepal. Each event brings together leaders, innovators, and stakeholders to drive Nepal's digital future.
        </p>

        {/* Event Cards Grid */}
        <div className="mb-12 relative overflow-hidden">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
            }}
          >
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-md transition-all border border-gray-100">
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 p-6 md:p-10">
                {/* Logo - 1 Column */}
                <div className="flex-shrink-0 w-full md:w-1/4 flex items-center justify-center">
                  <div className="relative h-40 w-40 md:h-56 md:w-56 flex items-center justify-center">
                    <img
                      src={currentEvent.thumbnail}
                      alt={currentEvent.title}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>

                {/* Content - 3 Columns */}
                <div className="flex-1 text-center md:text-left">
                  <div className="mb-3 inline-flex rounded-full bg-primary/10 px-4 py-2">
                    <span className="text-sm font-semibold text-primary">{currentEvent.date}</span>
                  </div>
                  <h3 className="mb-4 text-2xl md:text-3xl font-bold text-body-text">
                    {currentEvent.title}
                  </h3>
                  <p className="mb-8 text-base leading-relaxed text-body-text/70">
                    {currentEvent.description}
                  </p>
                  <Link
                    href={currentEvent.href}
                    className="inline-flex items-center gap-2 rounded-lg gradient-primary px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-primary/20 transition-all hover:shadow-md hover:shadow-primary/25 hover:brightness-110"
                  >
                    Learn More
                    <FiArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handlePrev}
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary text-primary transition-all hover:bg-primary hover:text-white active:scale-95"
            aria-label="Previous event"
          >
            <FiArrowLeft className="h-5 w-5" />
          </button>

          {/* Indicators with animation */}
          <div className="flex gap-2">
            {upcomingEvents.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-primary'
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
                animate={{
                  width: index === currentIndex ? 32 : 8,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                aria-label={`Go to event ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary text-primary transition-all hover:bg-primary hover:text-white active:scale-95"
            aria-label="Next event"
          >
            <FiArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </AnimatedSection>
  );
}
