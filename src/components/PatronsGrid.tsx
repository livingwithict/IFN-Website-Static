'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { patrons } from '@/data/patrons';

export default function PatronsGrid() {
  return (
    <section id="patrons" className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-10 text-center">
        <h2 className="mb-4 text-3xl font-bold text-[#0E2557]">Our Patrons</h2>
        <p className="mx-auto max-w-2xl text-sm text-gray-600">
          The people who champion IFN and make digital transformation possible.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 [&>*]:w-[calc(50%-0.5rem)] sm:[&>*]:w-[calc(50%-0.75rem)] md:[&>*]:w-[calc(33.333%-1rem)] lg:[&>*]:w-[calc(25%-1.125rem)]">
        {patrons.map((p) => (
          <motion.article
            key={p.id}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="rounded-xl border border-gray-100 bg-white p-4 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-6"
          >
            <div className="relative mx-auto mb-4 aspect-square w-full max-w-[200px] rounded-full overflow-hidden">
              <Image
                src={p.photo}
                alt={p.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-[#0E2557]">{p.name}</h3>
            <p className="mb-3 text-sm text-primary-light">{p.role}</p>
            <p className="mb-4 text-sm text-gray-600">{p.bio}</p>
            {p.url ? (
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-dark"
              >
                View profile
              </a>
            ) : null}
          </motion.article>
        ))}
      </div>
    </section>
  );
}
