import React from 'react';

interface FacebookPostEmbedProps {
  title: string;
  iframeUrl: string;
  logo: string;
  tag: string;
}

export const FacebookPostEmbed = ({ title, iframeUrl, logo, tag }: FacebookPostEmbedProps) => {
  return (
    <div className="group rounded-2xl p-6 overflow-hidden border-2 border-border transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full flex items-center justify-center p-2 border border-border">
            <img
              src={logo}
              alt={title}
              className="w-full h-full object-contain"
            />
          </div>
          <h4 className="text-lg font-semibold text-foreground">{title}</h4>
        </div>
        <span className="text-xs px-3 py-1.5 bg-primary/10 text-primary rounded-full font-medium border border-primary/20">
          {tag}
        </span>
      </div>
      
      <div className="w-full flex justify-center rounded-xl overflow-hidden">
        <iframe
          src={iframeUrl}
          className="w-full max-w-lg"
          height="700"
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
