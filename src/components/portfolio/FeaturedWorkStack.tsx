import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

interface FeaturedWork {
  title: string;
  image: string;
  link: string;
}

interface FeaturedWorkStackProps {
  works: FeaturedWork[];
}

export const FeaturedWorkStack = ({ works }: FeaturedWorkStackProps) => {
  return (
    <div className="w-full">
      <ScrollArea className="w-full h-[400px] md:h-[500px]">
        <div className="space-y-4 p-2">
          {works.map((work, index) => (
            <a
              key={index}
              href={work.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <Card className="liquid-glass liquid-glass-hover transform transition-all duration-500 group-hover:scale-[1.02] overflow-hidden">
                <CardContent className="p-0 relative">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-48 md:h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Floating title overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <h4 className="text-white font-semibold text-sm md:text-base mb-2 line-clamp-2">
                        {work.title}
                      </h4>
                      <div className="flex items-center text-white/80 text-xs md:text-sm">
                        <span>Read Article</span>
                        <ExternalLink className="w-3 h-3 md:w-4 md:h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};