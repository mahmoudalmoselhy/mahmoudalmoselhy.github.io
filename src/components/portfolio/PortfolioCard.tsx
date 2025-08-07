
import React from 'react';
import { AspectRatio } from '../ui/aspect-ratio';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';

interface PortfolioCardProps {
  title: string;
  description: string;
  link: string;
  logo: string; // legacy brand/logo
  thumbnail?: string; // preferred thumbnail image
  client?: string; // client/brand owner
  date?: string; // ISO date for age calculation
  skills?: string[];
}

export const PortfolioCard = ({ title, description, link, logo, thumbnail, client, date, skills = [] }: PortfolioCardProps) => {
  const imageSrc = thumbnail || logo

  const formatAge = (iso?: string) => {
    if (!iso) return null
    const start = new Date(iso)
    if (isNaN(start.getTime())) return null
    const now = new Date()
    let months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth())
    if (now.getDate() < start.getDate()) months -= 1
    const years = Math.floor(months / 12)
    const remMonths = months % 12
    if (years > 0 && remMonths > 0) return `${years}y ${remMonths}m`
    if (years > 0) return `${years}y`
    return `${Math.max(remMonths, 0)}m`
  }

  const age = formatAge(date)

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
          <AspectRatio ratio={2}>
            <img
              src={imageSrc}
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

            {(client || age) && (
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] md:text-xs text-muted-foreground mb-2 md:mb-3">
                {client && <span className="font-medium">{client}</span>}
                {client && age && <span aria-hidden="true">•</span>}
                {age && <span>Age: {age}</span>}
              </div>
            )}

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
