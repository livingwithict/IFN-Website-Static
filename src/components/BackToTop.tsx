'use client';

import { useState, useEffect } from 'react';
import { FaChevronUp } from 'react-icons/fa';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={`fixed right-6 bottom-6 z-40 flex h-12 w-12 items-center justify-center rounded-xl gradient-primary text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:brightness-110 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'
      }`}
    >
      <FaChevronUp className="h-4 w-4" />
    </button>
  );
}
