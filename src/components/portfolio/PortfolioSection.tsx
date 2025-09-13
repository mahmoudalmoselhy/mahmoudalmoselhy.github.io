
import React, { useState } from 'react';
import { YouTubePlaylistEmbed } from './YouTubePlaylistEmbed';
import { FacebookVideoEmbed } from './FacebookVideoEmbed';
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
  embed?: string;
  responsibilities?: string[];
}

interface PortfolioSectionProps {
  title: string;
  description: string;
  items: PortfolioSectionItem[];
  gridClassName?: string;
}

export const PortfolioSection = ({ title, description, items, gridClassName = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" }: PortfolioSectionProps) => {
  const [showAll, setShowAll] = useState(false)
  const limit = 4

  const isYouTubePlaylist = (link: string) =>
    link.includes('youtube.com/playlist') || link.includes('youtu.be/playlist')

  const getDefaultTags = (link: string, sectionTitle: string): string[] => {
    try {
      const host = new URL(link).hostname.replace(/^www\./, '')
      if (host === '3arrafni.com') return ['Web Design', 'Branding', 'Marketing']
      if (host === 'androidworld9.com') return ['Web Design', 'Branding', 'Marketing']
      if (host === 'facebook.com') {
        const lower = (sectionTitle + ' ' + link).toLowerCase()
        if (lower.includes('menusbee')) return ['Web Design', 'Branding', 'Marketing']
        return ['Web Design', 'Branding', 'Marketing']
      }
      return ['Web Design', 'Branding', 'Marketing']
    } catch {
      return ['Web Design', 'Branding', 'Marketing']
    }
  }

const nonPlaylistItems = items
  .filter((item) => !isYouTubePlaylist(item.link) && item.embed !== 'facebook-video')
  .map((item) => ({
    ...item,
    thumbnail: item.thumbnail || undefined, // PortfolioCard will auto-screenshot when missing
    skills: item.skills && item.skills.length ? item.skills : getDefaultTags(item.link, title)
  }))

const playlistItems = items.filter((item) => isYouTubePlaylist(item.link))
const facebookEmbeds = items.filter((item) => item.embed === 'facebook-video')
const visibleContentItems = showAll ? nonPlaylistItems : nonPlaylistItems.slice(0, limit)

  return (
    <section className="space-y-6 md:space-y-8">
      <header className="text-center px-4">
        <h3 className="text-xl md:text-3xl font-bold text-foreground mb-2 md:mb-4">{title}</h3>
        <p className="text-muted-foreground text-sm md:text-lg">{description}</p>
      </header>
      
      <div className="w-full max-w-none">
<div className={`grid ${title.includes('Script Writing') ? 'grid-cols-1 lg:grid-cols-2' : gridClassName} gap-4 md:gap-6`}>
          {title === 'Android World Articles' ? (
            <>
              {visibleContentItems.map((item, itemIndex) => (
                <a
                  key={`awa-${itemIndex}-${item.title}`}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-2xl border border-border bg-card hover:shadow-md transition-shadow duration-300"
                >
                  <div className="relative w-full aspect-[16/9] overflow-hidden">
                    <img
                      src={item.thumbnail || item.logo}
                      alt={`${item.title} thumbnail`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {(item.skills || []).map((tag, i) => (
                        <span
                          key={i}
                          className="text-[10px] md:text-xs px-2 py-1 bg-muted text-muted-foreground rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-sm md:text-base font-semibold mb-1 text-foreground line-clamp-2">{item.title}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground line-clamp-3">{item.description}</p>
                  </div>
                </a>
              ))}
            </>
          ) : (
            <>
              {facebookEmbeds.map((item, itemIndex) => (
                <FacebookVideoEmbed
                  key={`fb-${itemIndex}-${item.title}`}
                  title={item.title}
                  description={item.description}
                  videoUrl={item.link}
                  logo={item.logo}
                  responsibilities={item.responsibilities}
                />
              ))}

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
            </>
          )}
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
