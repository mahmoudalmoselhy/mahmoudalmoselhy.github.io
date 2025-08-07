
import React from 'react';
import { AspectRatio } from '../ui/aspect-ratio';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';

interface PortfolioCardProps {
  title: string;
  description: string;
  link: string;
  logo: string; // used as thumbnail image
  skills?: string[];
}

export const PortfolioCard = ({ title, description, link, logo, skills = [] }: PortfolioCardProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
      aria-label={`${title} — view project`}
    >
      <article className="liquid-glass liquid-glass-hover rounded-3xl overflow-hidden transition-shadow duration-300">
        <div className="w-full">
          <AspectRatio ratio={16 / 9}>
            <img
              src={logo}
              alt={`${title} thumbnail`}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </AspectRatio>
        </div>

        <Card className="rounded-none border-0 shadow-none bg-transparent">
          <CardContent className="p-4 md:p-6">
            <h4 className="text-base md:text-lg font-semibold text-foreground mb-2 md:mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
              {title}
            </h4>

            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-3 md:mb-4 line-clamp-3">
              {description}
            </p>

            {skills.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, idx) => (
                  <Badge key={idx} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </article>
    </a>
  );
};
