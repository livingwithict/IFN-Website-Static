'use client';

import React from 'react';
import { useArticleMetadata } from '@/hooks/articleMetadata';

interface ArticleCardProps {
  url: string;
}

export default function ArticleCard({ url }: ArticleCardProps) {
  const { title, thumbnail, isLoading } = useArticleMetadata(url);

  return (
    <a
      href={url}
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
