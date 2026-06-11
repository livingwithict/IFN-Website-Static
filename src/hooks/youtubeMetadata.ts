import { useState, useEffect } from 'react';
import { extractYouTubeId, getYouTubeThumbnail } from '@/data/media';

interface MetadataCache {
  title: string;
  thumbnail: string;
}

const metadataCache = new Map<string, MetadataCache>();

const DEFAULT_THUMBNAIL = '/public/images/thumbnail.jpg';

export function useYouTubeMetadata(url: string, defaultTitle: string = 'Video') {
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

        const videoId = extractYouTubeId(url);
        if (videoId) {
          // Try oEmbed first (works on localhost)
          try {
            const res = await fetch(`https://www.youtube.com/oembed?url=${encodeURIComponent(url)}&format=json`);
            if (res.ok) {
              const data = await res.json();
              finalTitle = data.title || defaultTitle;
            }
          } catch (error) {
            console.warn('oEmbed failed, trying CORS proxy...');
            
            // Fallback to CORS proxy for production servers
            try {
              const proxyUrl = `https://corsproxy.io/?url=${encodeURIComponent(`https://www.youtube.com/oembed?url=${encodeURIComponent(url)}&format=json`)}`;
              const res = await fetch(proxyUrl);
              if (res.ok) {
                const data = await res.json();
                finalTitle = data.title || defaultTitle;
              }
            } catch (proxyError) {
              console.error('CORS proxy also failed:', proxyError);
              // Title stays as defaultTitle
            }
          }
          
          finalThumbnail = getYouTubeThumbnail(videoId);
        }

        const cached: MetadataCache = { title: finalTitle, thumbnail: finalThumbnail };
        metadataCache.set(url, cached);
        setMetadata(cached);

      } catch (error) {
        console.error('Error fetching YouTube metadata:', error);
        setMetadata({ title: defaultTitle, thumbnail: DEFAULT_THUMBNAIL });
      } finally {
        setIsLoading(false);
      }
    };

    fetchMetadata();
  }, [url, defaultTitle]);

  return { ...metadata, isLoading };
}