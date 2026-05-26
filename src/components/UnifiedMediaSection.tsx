'use client';
import React from 'react';
import MediaCard from './MediaCard';
import { allMediaItems } from '@/data/media';

export default function MediaSection() {
  const newsItems = allMediaItems.filter(item => item.type === 'news');
  const youtubeItems = allMediaItems.filter(item => item.type === 'youtube');

  return (
    <>
      {/* News Section */}
      {newsItems.length > 0 && (
        <section className="py-4">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-8 text-2xl font-semibold text-body-text">Latest News Coverage</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {newsItems.map(item => (
                <MediaCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Video Section */}
      {youtubeItems.length > 0 && (
        <section className="py-4">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-8 text-2xl font-semibold text-body-text">Video Media</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {youtubeItems.map(item => (
                <MediaCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
