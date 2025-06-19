
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
        <h3 className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-4">SEO Archives</h3>
        <p className="text-slate-400 text-sm md:text-lg">Complete collections of published articles and content</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
        {archives.map((archive, archiveIndex) => (
          <a
            key={archiveIndex}
            href={archive.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-slate-800/50 backdrop-blur-lg rounded-xl md:rounded-2xl p-6 md:p-8 hover:bg-slate-700/60 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-cyan-500/20 hover:border-cyan-400/40"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 p-3 mx-auto">
              <img
                src={archive.logo}
                alt={archive.title}
                className="w-full h-full object-contain"
              />
            </div>
            
            <h4 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4 group-hover:text-cyan-400 transition-colors duration-300 text-center">
              {archive.title}
            </h4>
            
            <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-4 md:mb-6 text-center">
              {archive.description}
            </p>
            
            <div className="flex items-center justify-center text-blue-400 text-sm md:text-base font-medium group-hover:text-blue-300 transition-colors duration-300">
              <span>View Archive</span>
              <ExternalLink className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
