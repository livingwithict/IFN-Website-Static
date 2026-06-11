import { useState, useEffect } from 'react';

interface MetadataCache {
  title: string;
  thumbnail: string;
}

const metadataCache = new Map<string, MetadataCache>();

const DEFAULT_THUMBNAIL = '/public/images/thumbnail.jpg';

export function useArticleMetadata(url: string, defaultTitle: string = 'Article') {
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

        const backendUrl = `/api/fetch-og.php?url=${encodeURIComponent(url)}`;
        const response = await fetch(backendUrl);
        
        if (response.ok) {
          const data = await response.json();
          
          if (!data.error) {
            finalTitle = data.title || defaultTitle;
            finalThumbnail = data.image || DEFAULT_THUMBNAIL;
          }
        }

        const cached: MetadataCache = { title: finalTitle, thumbnail: finalThumbnail };
        metadataCache.set(url, cached);
        setMetadata(cached);

      } catch (error) {
        console.error('Error fetching article metadata:', error);
        setMetadata({ title: defaultTitle, thumbnail: DEFAULT_THUMBNAIL });
      } finally {
        setIsLoading(false);
      }
    };

    fetchMetadata();
  }, [url, defaultTitle]);

  return { ...metadata, isLoading };
}