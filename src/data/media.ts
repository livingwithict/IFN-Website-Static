// Simplified media entries - only require URL
export interface MediaItem {
  id: string;
  url: string;
  type: 'news' | 'youtube';
}

// All media items - news and YouTube
export const allMediaItems: MediaItem[] = [
  // News articles
  {
    id: 'news-001',
    url: 'https://www.technologykhabar.com/2026/04/25/237755/',
    type: 'news',
  },
  {
    id: 'news-002',
    url: 'https://www.sharesansar.com/newsdetail/iedi-selects-ict-foundation-nepal-to-run-startup-incubation-program-for-50-startups-2026-04-20',
    type: 'news',
  },
  // Add more news URLs here

  // YouTube videos
  {
    id: 'video-001',
    url: 'https://www.youtube.com/watch?v=P_zx9TtKRvE',
    type: 'youtube',
  },
  // Add more YouTube URLs here
];

export const newsItems = allMediaItems.filter(item => item.type === 'news');
export const youtubeItems = allMediaItems.filter(item => item.type === 'youtube');

// Helper function to extract YouTube video ID from URL
export function extractYouTubeId(url: string): string {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[7].length === 11 ? match[7] : '';
}
