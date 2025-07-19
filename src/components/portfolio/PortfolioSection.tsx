
import React from 'react';
import { PortfolioItem } from './PortfolioItem';

interface PortfolioSectionItem {
  title: string;
  description: string;
  link: string;
  logo: string;
}

interface PortfolioSectionProps {
  title: string;
  description: string;
  items: PortfolioSectionItem[];
  gridClassName?: string;
}

export const PortfolioSection = ({ title, description, items, gridClassName = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" }: PortfolioSectionProps) => {
  return (
    <div className="space-y-6 md:space-y-8">
      <div className="text-center px-4">
        <h3 className="text-xl md:text-3xl font-bold text-foreground mb-2 md:mb-4">{title}</h3>
        <p className="text-muted-foreground text-sm md:text-lg">{description}</p>
      </div>
      
      <div className={`grid ${gridClassName} gap-4 md:gap-6`}>
        {items.map((item, itemIndex) => (
          <PortfolioItem
            key={itemIndex}
            title={item.title}
            description={item.description}
            link={item.link}
            logo={item.logo}
          />
        ))}
      </div>
    </div>
  );
};
