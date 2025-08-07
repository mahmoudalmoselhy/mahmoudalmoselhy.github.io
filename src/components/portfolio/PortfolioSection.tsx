
import React, { useState } from 'react';
import { YouTubePlaylistEmbed } from './YouTubePlaylistEmbed';
import { PortfolioCard } from './PortfolioCard';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

interface PortfolioSectionItem {
  title: string;
  description: string;
  link: string;
  logo: string;
  skills?: string[]; // optional skills for badges
  thumbnail?: string;
  client?: string;
  date?: string; // ISO date for age
}

interface PortfolioSectionProps {
  title: string;
  description: string;
  items: PortfolioSectionItem[];
  gridClassName?: string;
}

export const PortfolioSection = ({ title, description, items, gridClassName = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" }: PortfolioSectionProps) => {
  const [showAll, setShowAll] = useState(false)
  const limit = 4

  const isYouTubePlaylist = (link: string) =>
    link.includes('youtube.com/playlist') || link.includes('youtu.be/playlist')

  const nonPlaylistItems = items.filter((item) => !isYouTubePlaylist(item.link))
  const playlistItems = items.filter((item) => isYouTubePlaylist(item.link))
  const visibleContentItems = showAll ? nonPlaylistItems : nonPlaylistItems.slice(0, limit)

  return (
    <section className="space-y-6 md:space-y-8">
      <header className="text-center px-4">
        <h3 className="text-xl md:text-3xl font-bold text-foreground mb-2 md:mb-4">{title}</h3>
        <p className="text-muted-foreground text-sm md:text-lg">{description}</p>
      </header>
      
      <div className="w-full max-w-none">
        <div className={`grid ${title.includes('Script Writing') ? 'grid-cols-1 lg:grid-cols-2' : gridClassName} gap-4 md:gap-6`}>
          {visibleContentItems.map((item, itemIndex) => (
            <PortfolioCard
              key={`card-${itemIndex}-${item.title}`}
              title={item.title}
              description={item.description}
              link={item.link}
              logo={item.logo}
              thumbnail={item.thumbnail}
              client={item.client}
              date={item.date}
              skills={item.skills}
            />
          ))}

          {playlistItems.map((item, itemIndex) => (
            <YouTubePlaylistEmbed
              key={`yt-${itemIndex}-${item.title}`}
              title={item.title}
              description={item.description}
              playlistUrl={item.link}
              logo={item.logo}
            />
          ))}
        </div>

        {nonPlaylistItems.length > limit && (
          <div className="mt-4 md:mt-6 flex justify-center">
            <Button asChild variant="secondary" aria-label="Show all projects">
              <Link to="/projects">Show All</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
