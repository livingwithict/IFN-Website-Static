import { useState, useEffect } from 'react';

interface MetadataCache {
  title: string;
  thumbnail: string;
}

const metadataCache = new Map<string, MetadataCache>();

export function useMetadata(url: string, defaultTitle: string = 'Article') {
  const [metadata, setMetadata] = useState<MetadataCache>({
    title: defaultTitle,
    thumbnail: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&q=80',
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
        const response = await fetch(`/api/extract-thumbnail?url=${encodeURIComponent(url)}`);
        if (response.ok) {
          const data = await response.json();
          const cached: MetadataCache = {
            title: data.title || defaultTitle,
            thumbnail: data.thumbnail || 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&q=80',
          };
          metadataCache.set(url, cached);
          setMetadata(cached);
        } else {
          setMetadata({
            title: defaultTitle,
            thumbnail: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&q=80',
          });
        }
      } catch (error) {
        console.error('Error fetching metadata:', error);
        setMetadata({
          title: defaultTitle,
          thumbnail: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&q=80',
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchMetadata();
  }, [url, defaultTitle]);

  return { ...metadata, isLoading };
}
