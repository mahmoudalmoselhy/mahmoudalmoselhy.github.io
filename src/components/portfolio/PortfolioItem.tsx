
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
      className="group bg-card rounded-3xl p-4 md:p-6 cursor-pointer transform border border-border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-primary/30 hover:bg-gradient-to-br hover:from-card hover:to-primary/10"
    >
      <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 p-2">
        <img
          src={logo}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>
      
      <h4 className="text-base md:text-lg font-semibold text-foreground mb-2 md:mb-3 group-hover:text-primary transition-all duration-500 line-clamp-2">
        {title}
      </h4>
      
      <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-3 md:mb-4 line-clamp-3 transition-colors duration-500">
        {description}
      </p>
      
      <div className="flex items-center text-accent-foreground text-xs md:text-sm font-medium group-hover:text-primary transition-all duration-500">
        <span>View Work</span>
        <ExternalLink className="w-3 h-3 md:w-4 md:h-4 ml-2 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-500" />
      </div>
    </a>
  );
};
