'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function AnimatedSection({ children, className = '', id }: Props) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`py-20 md:py-24 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-6">{children}</div>
    </motion.section>
  );
}
