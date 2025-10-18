import React from 'react';

interface FacebookPostEmbedProps {
  title: string;
  iframeUrl: string;
  logo: string;
  tag: string;
}

export const FacebookPostEmbed = ({ title, iframeUrl, logo, tag }: FacebookPostEmbedProps) => {
  return (
    <div className="group flex justify-center">
      <div className="w-full max-w-[400px] rounded-2xl overflow-hidden border border-border/50 bg-gradient-to-br from-background to-muted/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div className="flex items-center justify-between p-5 border-b border-border/50 bg-card/50 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center p-2 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 shadow-sm">
              <img
                src={logo}
                alt={title}
                className="w-full h-full object-contain"
              />
            </div>
            <h4 className="text-sm font-semibold text-foreground tracking-tight">{title}</h4>
          </div>
          <span className="text-xs px-3 py-1.5 bg-primary/15 text-primary rounded-full font-medium border border-primary/30 shadow-sm">
            {tag}
          </span>
        </div>
        
        <div className="w-full flex justify-center p-4 bg-muted/10">
          <iframe
            src={iframeUrl}
            className="w-full rounded-lg"
            width="400"
            height="600"
            style={{ border: 'none', overflow: 'hidden' }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
        </div>
      </div>
    </div>
  );
};
