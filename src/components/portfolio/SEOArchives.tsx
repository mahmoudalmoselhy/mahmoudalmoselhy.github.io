
import React from 'react';
import { ExternalLink } from 'lucide-react';

interface SEOArchiveItem {
  title: string;
  description: string;
  link: string;
  logo: string;
}

interface SEOArchivesProps {
  archives: SEOArchiveItem[];
}

export const SEOArchives = ({ archives }: SEOArchivesProps) => {
  return (
    <div className="space-y-6 md:space-y-8">
      <div className="text-center px-4">
        <h3 className="text-xl md:text-3xl font-bold text-foreground mb-2 md:mb-4">SEO Archives</h3>
        <p className="text-muted-foreground text-sm md:text-lg">Complete collections of published articles and content</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
        {archives.map((archive, archiveIndex) => (
          <a
            key={archiveIndex}
            href={archive.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group liquid-glass liquid-glass-hover rounded-3xl p-6 md:p-8 cursor-pointer transform"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 liquid-button rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-500 p-3 mx-auto">
              <img
                src={archive.logo}
                alt={archive.title}
                className="w-full h-full object-contain"
              />
            </div>
            
            <h4 className="text-lg md:text-xl font-semibold text-foreground mb-3 md:mb-4 group-hover:text-primary transition-all duration-500 text-center">
              {archive.title}
            </h4>
            
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4 md:mb-6 text-center transition-colors duration-500">
              {archive.description}
            </p>
            
            <div className="flex items-center justify-center text-accent-foreground text-sm md:text-base font-medium group-hover:text-primary transition-all duration-500">
              <span>View Archive</span>
              <ExternalLink className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-500" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
