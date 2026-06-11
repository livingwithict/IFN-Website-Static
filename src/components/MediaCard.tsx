'use client';

import { MediaItem } from '@/data/media';
import YouTubeCard from './YouTubeCard';
import ArticleCard from './ArticleCard';

export default function MediaCard({ item }: { item: MediaItem }) {
  if (item.type === 'youtube') return <YouTubeCard url={item.url} />;
  return <ArticleCard url={item.url} />;
}
