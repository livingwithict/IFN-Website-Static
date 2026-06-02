'use client';

import { FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';
import AnimatedSection from './AnimatedSection';
import MediaCard from './MediaCard';
import { allMediaItems } from '@/data/media';

export default function NewsAndBlogsSection() {
  const firstFourMedia = allMediaItems.slice(0, 4);

  return (
    <AnimatedSection id="news-blogs">
      <div className="mx-auto mb-4 section-divider" />
      <h2 className="mb-4 text-center text-3xl font-bold text-primary md:text-[32px]">
        News & Blogs
      </h2>
      <p className="mx-auto mb-12 max-w-3xl text-center text-body-text/60">
        Stay updated with the latest news, articles, and insights about Nepal's digital transformation and our initiatives.
      </p>

      {/* News and Blogs Grid */}
      <div className="mb-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {firstFourMedia.map((item) => (
            <MediaCard key={item.id} item={item} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link href="/news-and-media" className="inline-flex items-center gap-2 rounded-lg gradient-primary px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-primary/20 transition-all hover:shadow-md hover:shadow-primary/25 hover:brightness-110">
            See More Blogs & Articles
            <FiArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
}
