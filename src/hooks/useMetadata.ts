import { useState, useEffect } from 'react';

interface MetadataCache {
  title: string;
  thumbnail: string;
}

const metadataCache = new Map<string, MetadataCache>();

// Extracted the default image to a constant to keep the code clean
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

    // Check cache first
    if (metadataCache.has(url)) {
      setMetadata(metadataCache.get(url)!);
      setIsLoading(false);
      return;
    }

    const fetchMetadata = async () => {
      try {
        let finalTitle = defaultTitle;
        let finalThumbnail = DEFAULT_THUMBNAIL;

        // 1. YouTube Fast-Path
        if (url.includes('youtube.com') || url.includes('youtu.be')) {
          const ytRegex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
          const match = url.match(ytRegex);
          const videoId = match && match[2].length === 11 ? match[2] : null;

          if (videoId) {
            try {
              // YouTube oEmbed allows client-side fetching
              const res = await fetch(`https://www.youtube.com/oembed?url=${encodeURIComponent(url)}&format=json`);
              if (res.ok) {
                const data = await res.json();
                finalTitle = data.title || defaultTitle;
              }
              // We can construct the high-res thumbnail URL directly from the ID
              finalThumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
            } catch (e) {
              // Fallback to just the image if oEmbed fails
              finalThumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
            }
          }
        } 
        // 2. General URLs via Microlink API (Bypasses CORS)
        else {
          const response = await fetch(`https://api.microlink.io?url=${encodeURIComponent(url)}`);
          if (response.ok) {
            const { data } = await response.json();
            finalTitle = data.title || defaultTitle;
            finalThumbnail = data.image?.url || data.logo?.url || DEFAULT_THUMBNAIL;
          }
        }

        const cached: MetadataCache = {
          title: finalTitle,
          thumbnail: finalThumbnail,
        };
        
        metadataCache.set(url, cached);
        setMetadata(cached);

      } catch (error) {
        console.error('Error fetching metadata:', error);
        setMetadata({
          title: defaultTitle,
          thumbnail: DEFAULT_THUMBNAIL,
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchMetadata();
  }, [url, defaultTitle]);

  return { ...metadata, isLoading };
}