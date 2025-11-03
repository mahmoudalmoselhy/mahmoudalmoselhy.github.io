import React from 'react';
import { Button } from '../ui/button';
import { ExternalLink } from 'lucide-react';
import { Facebook, Instagram } from 'lucide-react';

interface DualLinkImagePostProps {
  title: string;
  description: string;
  thumbnail: string;
  facebookLink: string;
  instagramLink: string;
  logo: string;
}

export const DualLinkImagePost = ({
  title,
  description,
  thumbnail,
  facebookLink,
  instagramLink,
  logo,
}: DualLinkImagePostProps) => {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card hover:shadow-xl transition-all duration-300">
      {/* Image Container */}
      <div className="relative w-full aspect-[3/4] overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Container */}
      <div className="p-4 md:p-5 space-y-3 bg-gradient-to-br from-card to-muted/20">
        {/* Logo and Title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center p-2 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex-shrink-0">
            <img
              src={logo}
              alt={title}
              className="w-full h-full object-contain"
            />
          </div>
          <h4 className="text-sm md:text-base font-semibold text-foreground line-clamp-2 flex-1">
            {title}
          </h4>
        </div>

        {/* Description */}
        <p className="text-xs md:text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {description}
        </p>

        {/* Link Buttons */}
        <div className="flex gap-2">
          <Button
            asChild
            variant="default"
            className="flex-1 group/btn"
          >
            <a
              href={facebookLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <Facebook className="w-4 h-4" />
              <span className="hidden sm:inline">Facebook</span>
            </a>
          </Button>
          <Button
            asChild
            variant="default"
            className="flex-1 group/btn"
          >
            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <Instagram className="w-4 h-4" />
              <span className="hidden sm:inline">Instagram</span>
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};
