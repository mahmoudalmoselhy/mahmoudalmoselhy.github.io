
import React from 'react';
import { ExternalLink } from 'lucide-react';

interface PortfolioItemProps {
  title: string;
  description: string;
  link: string;
  logo: string;
}

export const PortfolioItem = ({ title, description, link, logo }: PortfolioItemProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group light-glass rounded-xl md:rounded-2xl p-4 md:p-6 light-card-hover hover:scale-102 border border-border/50 hover:border-accent/70 bg-card/80 dark:bg-slate-800/50 dark:hover:bg-slate-700/60 dark:border-teal-500/30 dark:hover:border-amber-300/50"
    >
      <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 dark:bg-white rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 p-2 border border-border dark:border-transparent">
        <img
          src={logo}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>
      
      <h4 className="text-base md:text-lg font-semibold text-foreground dark:text-white mb-2 md:mb-3 group-hover:text-primary dark:group-hover:text-teal-300 transition-colors duration-300 line-clamp-2">
        {title}
      </h4>
      
      <p className="text-muted-foreground dark:text-slate-400 text-xs md:text-sm leading-relaxed mb-3 md:mb-4 line-clamp-3">
        {description}
      </p>
      
      <div className="flex items-center text-accent-foreground dark:text-teal-400 text-xs md:text-sm font-medium group-hover:text-primary dark:group-hover:text-amber-300 transition-colors duration-300">
        <span>View Work</span>
        <ExternalLink className="w-3 h-3 md:w-4 md:h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
      </div>
    </a>
  );
};
