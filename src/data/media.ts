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
    id: 'news-002',
    url: 'https://english.insurancekhabar.com/ict-foundation-nepal-opens-500-full-scholarships-for-google-career-certificate-2/',
    type: 'news',
  },
  {
    id: 'news-003',
    url: 'https://www.sharesansar.com/newsdetail/iedi-selects-ict-foundation-nepal-to-run-startup-incubation-program-for-50-startups-2026-04-20',
    type: 'news',
  },
  {
    id: 'news-004',
    url: 'https://www.sharesansar.com/newsdetail/ict-gyan-reaches-all-seven-provinces-to-bridge-nepals-digital-divide-2025-06-18',
    type: 'news',
  },
  {
    id: 'news-005',
    url: 'https://ictsamachar.com/news/pre-budget-ict-discourse-2083--emphasis-on-policy/',
    type: 'news',
  },
  {
    id: 'news-006',
    url: 'https://english.hamropatro.com/news/details/8521098159029999?ns=',
    type: 'news',
  },
  {
    id: 'news-007',
    url: 'https://ictsamachar.com/news/government-private-sector-on-one-platform--ict-discourse/',
    type: 'news',
  },
  {
    id: 'news-008',
    url: 'https://ictsamachar.com/news/14-startups-from-bagmati-province-selected-for/',
    type: 'news',
  },
  {
    id: 'news-009',
    url: 'https://ictsamachar.com/news/13-startups-from-koshi-region-selected-for/',
    type: 'news',
  },
  {
    id: 'news-010',
    url: 'https://www.b360nepal.com/detail/25970/digital-nepal-conclave-2025',
    type: 'news',
  },

  
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

export function getYouTubeThumbnail(videoId: string): string {
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}
