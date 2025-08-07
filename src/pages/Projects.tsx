import React, { useEffect, useMemo } from 'react';
import { PortfolioCard } from '@/components/portfolio/PortfolioCard';
import { portfolioSections } from '@/components/portfolio/portfolioData';

const isYouTubePlaylist = (link: string) =>
  link.includes('youtube.com/playlist') || link.includes('youtu.be/playlist');

const Projects = () => {
  const items = useMemo(() => {
    return portfolioSections
      .flatMap((section) => section.items)
      .filter((item) => !isYouTubePlaylist(item.link));
  }, []);

  useEffect(() => {
    const title = 'Projects | Full Portfolio';
    document.title = title;

    const desc = 'Explore all projects: thumbnails, titles, descriptions, and skills in a card layout.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', desc);

    const canonicalHref = `${window.location.origin}/projects`;
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalHref);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <section className="max-w-6xl mx-auto px-4 py-10 md:py-14">
        <header className="text-center mb-6 md:mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-2">Projects</h1>
          <p className="text-muted-foreground text-sm md:text-base">Browse all projects in one place.</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {items.map((item, idx) => (
            <PortfolioCard
              key={`${item.title}-${idx}`}
              title={item.title}
              description={item.description}
              link={item.link}
              logo={item.logo}
              // skills are optional and may not exist in data
              // @ts-expect-error optional field in some datasets
              skills={item.skills}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Projects;
