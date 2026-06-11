import { useState, useEffect } from 'react';
import { extractYouTubeId, getYouTubeThumbnail } from '@/data/media';

interface MetadataCache {
  title: string;
  thumbnail: string;
}

const metadataCache = new Map<string, MetadataCache>();

const DEFAULT_THUMBNAIL = '/public/images/thumbnail.jpg';

export function useMetadata(url: string, defaultTitle: string = 'Article') {
  const [metadata, setMetadata] = useState<MetadataCache>({
    title: defaultTitle,
    thumbnail: DEFAULT_THUMBNAIL,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!url) {
      setIsLoading(false);
      return;
    }

    if (metadataCache.has(url)) {
      setMetadata(metadataCache.get(url)!);
      setIsLoading(false);
      return;
    }

    const fetchMetadata = async () => {
      try {
        let finalTitle = defaultTitle;
        let finalThumbnail = DEFAULT_THUMBNAIL;

        // 1. YouTube — native oEmbed API for title, direct thumbnail URL
        if (url.includes('youtube.com') || url.includes('youtu.be')) {
          const videoId = extractYouTubeId(url);

          if (videoId) {
            try {
              const res = await fetch(`https://www.youtube.com/oembed?url=${encodeURIComponent(url)}&format=json`);
              if (res.ok) {
                const data = await res.json();
                finalTitle = data.title || defaultTitle;
              }
            } catch {
              // oEmbed failed — title stays as defaultTitle
            }
            finalThumbnail = getYouTubeThumbnail(videoId);
          }
        }
        // 2. Article links — native OpenGraph tags parsed client-side via CORS proxy
        else {
          const proxyUrl = `https://corsproxy.io/?url=${encodeURIComponent(url)}`;
          const response = await fetch(proxyUrl);
          if (response.ok) {
            const html = await response.text();
            const doc = new DOMParser().parseFromString(html, 'text/html');
            const ogTitle = doc.querySelector('meta[property="og:title"]')?.getAttribute('content');
            const ogImage = doc.querySelector('meta[property="og:image"]')?.getAttribute('content');
            finalTitle = ogTitle || defaultTitle;
            finalThumbnail = ogImage || DEFAULT_THUMBNAIL;
          }
        }

        const cached: MetadataCache = { title: finalTitle, thumbnail: finalThumbnail };
        metadataCache.set(url, cached);
        setMetadata(cached);

      } catch (error) {
        console.error('Error fetching metadata:', error);
        setMetadata({ title: defaultTitle, thumbnail: DEFAULT_THUMBNAIL });
      } finally {
        setIsLoading(false);
      }
    };

    fetchMetadata();
  }, [url, defaultTitle]);

  return { ...metadata, isLoading };
}
