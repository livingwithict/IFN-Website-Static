'use client';

import React from 'react';
import { useMetadata } from '@/hooks/useMetadata';
import { extractYouTubeId } from '@/data/media';

interface YouTubeCardProps {
  url: string;
  className?: string;
}

const DEFAULT_THUMBNAIL =
  '';

export default function YouTubeCard({ url, className = '' }: YouTubeCardProps) {
  const { title, thumbnail, isLoading } = useMetadata(url, 'YouTube Video');
  const videoId = extractYouTubeId(url);
  const fallbackThumbnail = videoId
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : DEFAULT_THUMBNAIL;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`card-hover group flex flex-col overflow-hidden bg-white shadow-sm ${className}`}
    >
      <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />
          </div>
        )}
        <img
          src={thumbnail || fallbackThumbnail}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(event) => {
            event.currentTarget.src = fallbackThumbnail;
          }}
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="line-clamp-2 text-base font-semibold text-body-text">
          {title}
        </h3>
        <div className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-semibold text-primary">
          Watch on YouTube
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </a>
  );
}
