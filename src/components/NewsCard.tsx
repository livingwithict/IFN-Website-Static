'use client'; // 1. Tell Next.js this runs in the browser

import { useState, useEffect } from 'react';
import { NewsArticle } from '@/data/types';

// The NewsCard component remains exactly the same
function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <article className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <a href={article.url} target="_blank" rel="noreferrer" className="block">
        {article.thumbnail ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={article.thumbnail} alt={article.title} className="h-48 w-full object-cover" />
        ) : null}
        <div className="p-5">
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">{article.source}</p>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{article.title}</h3>
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">{article.date}</p>
        </div>
      </a>
    </article>
  );
}

// 2. Remove 'async' from the main component
export default function NewsFeed({ initialArticles }: { initialArticles?: NewsArticle[] } = {}) {
  const [articles, setArticles] = useState<NewsArticle[]>(initialArticles || []);
  const [isLoading, setIsLoading] = useState(!initialArticles);
  const [hasError, setHasError] = useState(false);

  // 3. Fetch data dynamically when the component mounts in the user's browser
  useEffect(() => {
    if (initialArticles) return; // Skip fetch if we already have data

    const fetchNews = async () => {
      try {
        const res = await fetch('https://saurav.tech/NewsAPI/top-headlines/category/technology/us.json');
        if (!res.ok) throw new Error('Failed to fetch automated news stream');

        const data = await res.json();
        
        const formattedArticles = data.articles.slice(0, 6).map((article: any, index: number) => ({
          id: `${index}-${article.publishedAt}`,
          title: article.title,
          thumbnail: article.urlToImage,
          source: article.source.name,
          url: article.url,
          date: new Date(article.publishedAt).toLocaleDateString(), // Optional: format the date nicely
        }));

        setArticles(formattedArticles);
      } catch (error) {
        console.error("Automation error:", error);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, [initialArticles]);

  if (isLoading) {
    return (
      <div className="text-center py-12 text-gray-500">
        Loading latest tech news...
      </div>
    );
  }

  if (hasError || articles.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        Unable to load automated feed at this time.
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h2 className="mb-8 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        Automated Tech Stream
      </h2>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}