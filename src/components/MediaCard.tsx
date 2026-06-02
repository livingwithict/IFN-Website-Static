'use client';
import React from 'react';
import { MediaItem, extractYouTubeId } from '@/data/media';
import { useMetadata } from '@/hooks/useMetadata';

interface MediaCardProps {
  item: MediaItem;
}

export default function MediaCard({ item }: MediaCardProps) {
  const { title, thumbnail, isLoading } = useMetadata(item.url);

  if (item.type === 'youtube') {
    const videoId = extractYouTubeId(item.url);
    return (
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="card-hover group flex flex-col overflow-hidden bg-white shadow-sm"
      >
        <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />
            </div>
          )}
          <img
            src={thumbnail}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
            }}
          />
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E33831] shadow-lg">
              <svg className="h-8 w-8 fill-white" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </a>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <h3 className="line-clamp-2 text-base font-semibold text-body-text">
            {title}
          </h3>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#E33831] transition-colors hover:text-primary"
          >
            Watch on YouTube
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M5 3l14.29 10.29a1 1 0 0 1 0 1.42L5 25V3z" />
            </svg>
          </a>
        </div>
      </a>
    );
  }

  // News card
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="card-hover group flex flex-col overflow-hidden bg-white shadow-sm"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />
          </div>
        )}
        <img
          src={thumbnail}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="line-clamp-2 text-base font-semibold text-body-text">
          {title}
        </h3>
        <div className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-semibold text-primary">
          Read More
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </div>
    </a>
  );
}
