// Simplified media entries - only require URL
export interface MediaItem {
  id: string;
  url: string;
  type: 'news' | 'youtube';
  title?: string;
  thumbnail?: string;
}

// After adding a new news entry with just { id, url, type }, run
// `node scripts/fetch-media-metadata.mjs` to auto-fill title/thumbnail from
// the article's og:title / og:image (scraped once, not at runtime, so page
// loads never hit an external unfurl API's daily limit).
export const allMediaItems: MediaItem[] = [
  // News articles
  {
    id: 'news-002',
    url: 'https://english.insurancekhabar.com/ict-foundation-nepal-opens-500-full-scholarships-for-google-career-certificate-2/',
    type: 'news',
    title: 'ICT Foundation Nepal Opens 500 Full Scholarships for Google Career Certificate',
    thumbnail: 'https://media.insurancekhabar.com/uploads/2026/04/Google-Career-Certificates-IFN.png',
  },
  {
    id: 'news-003',
    url: 'https://www.sharesansar.com/newsdetail/iedi-selects-ict-foundation-nepal-to-run-startup-incubation-program-for-50-startups-2026-04-20',
    type: 'news',
    title: 'IEDI Selects ICT Foundation Nepal to Run Startup Incubation Program for 50+ Startups',
    thumbnail: 'https://content.sharesansar.com/photos/001ranjana/april 13-19/Facebook Template (10).png',
  },
  {
    id: 'news-004',
    url: 'https://www.sharesansar.com/newsdetail/ict-gyan-reaches-all-seven-provinces-to-bridge-nepals-digital-divide-2025-06-18',
    type: 'news',
    title: 'ICT Gyan Reaches All Seven Provinces to Bridge Nepal’s Digital Divide',
    thumbnail: 'https://content.sharesansar.com/photos/ranjanaapr24/00or1111/0000INCEAT.jpg',
  },
  {
    id: 'news-005',
    url: 'https://ictsamachar.com/news/pre-budget-ict-discourse-2083--emphasis-on-policy/',
    type: 'news',
    title: 'प्रि-बजेट आईसीटी डिस्कोर्स २०८३ : नीतिगत स्पष्टता, बजेट वृद्धि र सहकार्यमा जोड',
    thumbnail: 'https://ictsamacharcdn.prixacdn.net/media/albums/ICT_disclourse_LKKDtUhIyz_Zf4C6yXAMy.jpg',
  },
  // {
  //   id: 'news-006',
  //   url: 'https://english.hamropatro.com/news/details/8521098159029999?ns=',
  //   type: 'news',
  // },
  {
    id: 'news-007',
    url: 'https://ictsamachar.com/news/government-private-sector-on-one-platform--ict-discourse/',
    type: 'news',
    title: 'सरकार-निजी क्षेत्र एउटै मञ्चमा : बजेटअघि आईसीटी डिस्कोर्स आयोजना हुँदै',
    thumbnail: 'https://ictsamacharcdn.prixacdn.net/media/albums/pre_budget_discourse_kBvdYHOi1g_58RQpxhq3s.jpg',
  },
  {
    id: 'news-008',
    url: 'https://ictsamachar.com/news/14-startups-from-bagmati-province-selected-for/',
    type: 'news',
    title: 'बागमती प्रदेशबाट १४ स्टार्टअप बीआइएस २०२६ मा छनोट',
    thumbnail: 'https://ictsamacharcdn.prixacdn.net/media/albums/bis_bagmati_rLZKxarI5y_wo84GDTLK6.jpg',
  },
  {
    id: 'news-009',
    url: 'https://ictsamachar.com/news/13-startups-from-koshi-region-selected-for/',
    type: 'news',
    title: 'कोशी प्रदेशबाट १३ स्टार्टअप बीआइएस २०२६ मा छनोट',
    thumbnail: 'https://ictsamacharcdn.prixacdn.net/media/albums/koshi_bis_9eHtCqFyYY_I32YmFgV3l.jpg',
  },
  {
    id: 'news-010',
    url: 'https://www.b360nepal.com/detail/25970/digital-nepal-conclave-2025',
    type: 'news',
    title: 'ICT Foundation Nepal to organise 4th Digital Nepal Conclave on Aug 15',
    thumbnail: 'https://www.b360nepal.com/uploads/posts/Digital-Nepal-Conclave-2025-1754458351.jpg',
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
