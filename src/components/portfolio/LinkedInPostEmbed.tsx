import React from 'react';

interface LinkedInPostEmbedProps {
  title: string;
  iframeUrl: string;
  logo: string;
  tag: string;
  height: number;
  width: number;
}

export const LinkedInPostEmbed = ({ title, iframeUrl, logo, tag, height, width }: LinkedInPostEmbedProps) => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[540px] rounded-xl overflow-hidden border border-border bg-card">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full flex items-center justify-center p-2 border border-border">
              <img
                src={logo}
                alt={title}
                className="w-full h-full object-contain"
              />
            </div>
            <h4 className="text-sm font-semibold text-foreground">{title}</h4>
          </div>
          <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full font-medium">
            {tag}
          </span>
        </div>
        
        <div className="w-full flex justify-center">
          <iframe
            src={iframeUrl}
            className="w-full"
            width={width}
            height={height}
            style={{ border: 'none', overflow: 'hidden' }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            title={title}
          />
        </div>
      </div>
    </div>
  );
};
