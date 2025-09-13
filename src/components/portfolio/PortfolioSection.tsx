
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
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
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={"auto"}
          pagination={{ clickable: true }}
          className="!pb-12"
        >
          {facebookEmbeds.map((item, itemIndex) => (
            <SwiperSlide key={`fb-${itemIndex}-${item.title}`} className="!w-[300px]">
              <FacebookVideoEmbed
                title={item.title}
                description={item.description}
                videoUrl={item.link}
                logo={item.logo}
                responsibilities={item.responsibilities}
              />
            </SwiperSlide>
          ))}

          {visibleContentItems.map((item, itemIndex) => (
            <SwiperSlide key={`card-${itemIndex}-${item.title}`} className="!w-[280px]">
              {title === 'Android World Articles' ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <article className="group relative overflow-hidden rounded-xl bg-card border border-border transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                    <div className="aspect-square relative overflow-hidden bg-muted">
                      <img
                        src={item.thumbnail || item.logo}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {(item.skills || []).map((badge, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-secondary text-secondary-foreground"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                      <h4 className="text-base md:text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground text-xs md:text-sm leading-relaxed line-clamp-3">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </a>
              ) : (
                <PortfolioCard
                  title={item.title}
                  description={item.description}
                  link={item.link}
                  logo={item.logo}
                  thumbnail={item.thumbnail}
                  client={item.client}
                  date={item.date}
                  skills={item.skills}
                />
              )}
            </SwiperSlide>
          ))}

          {playlistItems.map((item, itemIndex) => (
            <SwiperSlide key={`yt-${itemIndex}-${item.title}`} className="!w-[300px]">
              <YouTubePlaylistEmbed
                title={item.title}
                description={item.description}
                playlistUrl={item.link}
                logo={item.logo}
              />
            </SwiperSlide>
          ))}
        </Swiper>

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
