
import React from 'react';
import { PortfolioSection } from './portfolio/PortfolioSection';
import { SEOArchives } from './portfolio/SEOArchives';
import { FeaturedWorkStack } from './portfolio/FeaturedWorkStack';
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

  return (
    <section className="relative overflow-hidden">
      {/* Main portfolio content */}
      <div className="py-12 md:py-20 px-4 md:px-6 relative">
        {/* Subtle geometric pattern background */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div className="absolute inset-0 light-subtle-pattern"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
              Top <span className="bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end bg-clip-text text-transparent animate-gradient">Work</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg max-w-3xl mx-auto px-4">
              A showcase of my diverse content creation work across multiple platforms and industries
            </p>
          </div>

          <div className="space-y-12 md:space-y-16">
            {portfolioSections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                {sectionIndex === 0 && (
                  <div className="space-y-6 md:space-y-8">
                    <div className="text-center px-4">
                      <h3 className="text-xl md:text-3xl font-bold text-foreground mb-2 md:mb-4">{section.title}</h3>
                      <p className="text-muted-foreground text-sm md:text-lg">{section.description}</p>
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
            ))}

            <SEOArchives archives={seoArchives} />
          </div>
        </div>
      </div>
    </section>
  );
};
