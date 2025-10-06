import React from 'react';

interface FacebookPostEmbedProps {
  title: string;
  iframeUrl: string;
  logo: string;
  tag: string;
}

export const FacebookPostEmbed = ({ title, iframeUrl, logo, tag }: FacebookPostEmbedProps) => {
  return (
    <div className="group liquid-glass liquid-glass-hover rounded-3xl p-4 md:p-6 overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 md:w-12 md:h-12 liquid-button rounded-full flex items-center justify-center p-2">
            <img
              src={logo}
              alt={title}
              className="w-full h-full object-contain"
            />
          </div>
          <h4 className="text-base md:text-lg font-semibold text-foreground">{title}</h4>
        </div>
        <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
          {tag}
        </span>
      </div>
      
      <div className="w-full flex justify-center">
        <iframe
          src={iframeUrl}
          className="w-full max-w-md"
          height="600"
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        />
      </div>
    </div>
  );
};
