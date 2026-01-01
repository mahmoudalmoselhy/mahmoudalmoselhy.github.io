import React from 'react';
import { PortfolioSection } from './portfolio/PortfolioSection';
import { SEOArchives } from './portfolio/SEOArchives';
import { FeaturedWorkStack } from './portfolio/FeaturedWorkStack';
import { TiyeSolutionsSection } from './portfolio/TiyeSolutionsSection';
import { portfolioSections, seoArchives } from './portfolio/portfolioData';

export const Portfolio = () => {
  // Define specific grid layouts for each section
  const sectionGridLayouts = [
    "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4", // Content Writing - 3arrafni.com: 4-column grid
    "grid-cols-2 sm:grid-cols-3 lg:grid-cols-3", // Android World Articles: 3-column grid (3x3 on desktop)
    "grid-cols-1 sm:grid-cols-2", // Script Writing: 2-column grid (1 col mobile, 2 larger screens)
    "grid-cols-1", // Social Media Campaigns: 1-column grid (for video embeds)
    "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4", // Social Media Work: 4-column grid
  ];

  // Color schemes for each section - diverse and vibrant
  const sectionColors = [
    { border: 'border-rose/40', accent: 'text-rose', bg: 'from-rose/5 to-transparent' },
    { border: 'border-blue/40', accent: 'text-blue', bg: 'from-blue/5 to-transparent' },
    { border: 'border-orange/40', accent: 'text-orange', bg: 'from-orange/5 to-transparent' },
    { border: 'border-violet/40', accent: 'text-violet', bg: 'from-violet/5 to-transparent' },
    { border: 'border-pink/40', accent: 'text-pink', bg: 'from-pink/5 to-transparent' },
  ];

  return (
    <div className="space-y-8 md:space-y-10">
      {/* Main Portfolio Header */}
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
          Top <span className="bg-gradient-to-r from-rose via-violet to-blue bg-clip-text text-transparent">Work</span>
        </h2>
        <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto px-4">
          A showcase of my diverse content creation work across multiple platforms and industries
        </p>
      </div>

      {/* Tiye Solutions Section - First */}
      <TiyeSolutionsSection />

      {/* Each section in its own frame with colorful borders */}
      {portfolioSections.map((section, sectionIndex) => {
        const colorScheme = sectionColors[sectionIndex % sectionColors.length];
        return (
          <section key={sectionIndex} className={`bg-gradient-to-br ${colorScheme.bg} bg-card rounded-3xl border-2 ${colorScheme.border} p-6 md:p-10 shadow-m3-1`}>
            <div className="relative z-10">
              {sectionIndex === 0 && (
                <div className="space-y-6 mb-8">
                  <div className="text-center px-4">
                    <h3 className={`text-xl md:text-2xl font-bold text-foreground mb-2`}>{section.title}</h3>
                    <p className="text-muted-foreground text-sm md:text-base">{section.description}</p>
                  </div>
                  <FeaturedWorkStack />
                </div>
              )}
              <PortfolioSection
                title={sectionIndex === 0 ? "" : section.title}
                description={sectionIndex === 0 ? "" : section.description}
                items={section.items}
                gridClassName={sectionGridLayouts[sectionIndex]}
              />
            </div>
          </section>
        );
      })}

      {/* SEO Archives in its own frame with amber accent */}
      <section className="bg-gradient-to-br from-amber/5 to-transparent bg-card rounded-3xl border-2 border-amber/40 p-6 md:p-10 shadow-m3-1">
        <SEOArchives archives={seoArchives} />
      </section>
    </div>
  );
};
