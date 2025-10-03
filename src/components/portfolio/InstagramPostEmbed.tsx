import React, { useEffect } from 'react';

interface InstagramPostEmbedProps {
  title: string;
  postUrl: string;
  logo: string;
  tag: string;
}

export const InstagramPostEmbed = ({ title, postUrl, logo, tag }: InstagramPostEmbedProps) => {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Process embeds when script loads
    if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    }

    return () => {
      document.body.removeChild(script);
    };
  }, [postUrl]);

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
        <blockquote
          className="instagram-media"
          data-instgrm-permalink={postUrl}
          data-instgrm-version="14"
          style={{
            background: '#FFF',
            border: 0,
            borderRadius: '3px',
            boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
            margin: '1px',
            maxWidth: '540px',
            minWidth: '326px',
            padding: 0,
            width: 'calc(100% - 2px)'
          }}
        />
      </div>
    </div>
  );
};
