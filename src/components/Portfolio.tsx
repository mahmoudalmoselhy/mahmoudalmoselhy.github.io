
import React from 'react';
import { PortfolioSection } from './portfolio/PortfolioSection';
import { SEOArchives } from './portfolio/SEOArchives';
import { portfolioSections, seoArchives } from './portfolio/portfolioData';

export const Portfolio = () => {
  // Define specific grid layouts for each section
  const sectionGridLayouts = [
    "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4", // Content Writing - 3arrafni.com: 4x4 grid
    "grid-cols-1 sm:grid-cols-2", // Script Writing: 2x1 grid
    "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4", // Social Media Campaigns - Menusbee: 4x3 grid
    "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5", // Lecce Social Media Content: 5x1 grid
  ];

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-slate-900/40">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
            Top <span className="bg-gradient-to-r from-amber-200 via-teal-400 to-cyan-600 bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-slate-300 text-sm md:text-lg max-w-3xl mx-auto px-4">
            A showcase of my diverse content creation work across multiple platforms and industries
          </p>
        </div>

        <div className="space-y-12 md:space-y-16">
          {portfolioSections.map((section, sectionIndex) => (
            <PortfolioSection
              key={sectionIndex}
              title={section.title}
              description={section.description}
              items={section.items}
              gridClassName={sectionGridLayouts[sectionIndex]}
            />
          ))}

          <SEOArchives archives={seoArchives} />
        </div>
      </div>
    </section>
  );
};
