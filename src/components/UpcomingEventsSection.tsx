'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

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
    description: 'NAIC 2026 is a flagship national conference designed to bring together policymakers, industry leaders, researchers, startups, investors, and global experts to advance Nepal\’s AI ecosystem.',
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
    <AnimatedSection id="upcoming-events" className="bg-surface">
      <div className="mx-auto mb-4 section-divider" />
      <h2 className="mb-4 text-center text-3xl font-bold text-primary md:text-[32px]">
        Upcoming Events
      </h2>
      <p className="mx-auto mb-12 max-w-3xl text-center text-body-text/60">
        Join us at our upcoming events and initiatives across Nepal. Each event brings together leaders, innovators, and stakeholders to drive Nepal's digital future.
      </p>

      {/* Event Card with Animation */}
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
          <div className="mb-4 grid gap-8 md:gap-10 items-center md:grid-cols-5">
            {/* Logo Placeholder */}
            <div className={`relative h-64 md:h-auto md:col-span-2 rounded-2xl overflow-hidden bg-white aspect-[3/2] flex items-center justify-center shadow-md p-8 border border-gray-100`}>
              <div className="text-center">
                <img src={currentEvent.thumbnail} alt={currentEvent.title} className="mx-auto h-full w-full object-cover" />
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-3">
              <div>
                <div className="mb-3 inline-flex rounded-full bg-primary/10 px-4 py-2">
                  <span className="text-sm font-semibold text-primary">{currentEvent.date}</span>
                </div>
                <h3 className="mb-4 text-2xl md:text-3xl font-bold text-body-text">
                  {currentEvent.title}
                </h3>
                <p className="mb-3 text-sm text-body-text/60 font-medium">
                  {/*  {currentEvent.location} */}
                </p>
                <p className="mb-8 text-base leading-relaxed text-body-text/70">
                  {currentEvent.description}
                </p>
              </div>

              <Link
                href={currentEvent.href}
                className="inline-flex items-center gap-2 rounded-lg gradient-primary px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-primary/20 transition-all hover:shadow-md hover:shadow-primary/25 hover:brightness-110 w-fit"
              >
                Learn More
                <FiArrowRight className="h-4 w-4" />
              </Link>
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
    </AnimatedSection>
  );
}
