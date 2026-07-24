import { useState, useEffect } from 'react';

interface MetadataCache {
  title: string;
  thumbnail: string;
}

const metadataCache = new Map<string, MetadataCache>();

const DEFAULT_THUMBNAIL = '/images/thumbnail.jpg';

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
        let finalThumbnail = '';

        // Try free unfurling APIs in order, first good result wins.
        const apis = [
          {
            url: `https://api.microlink.io/?url=${encodeURIComponent(url)}`,
            parse: (data: any) => ({
              title: data.data?.title,
              image: data.data?.image?.url || data.data?.logo?.url,
            }),
          },
          {
            url: `https://noembed.com/embed?url=${encodeURIComponent(url)}`,
            parse: (data: any) => ({
              title: data.title,
              image: data.thumbnail_url,
            }),
          },
        ];

        for (const api of apis) {
          try {
            const response = await fetch(api.url);
            if (!response.ok) continue;
            const data = await response.json();
            const parsed = api.parse(data);
            if (parsed.title || parsed.image) {
              finalTitle = parsed.title || defaultTitle;
              finalThumbnail = parsed.image || '';
              break;
            }
          } catch {
            continue;
          }
        }

        if (!finalThumbnail) {
          finalThumbnail = DEFAULT_THUMBNAIL;
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