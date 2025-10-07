import React, { useEffect } from 'react';

interface InstagramPostEmbedProps {
  title: string;
  postUrl: string;
  logo: string;
  tag: string;
}

export const InstagramPostEmbed = ({ title, postUrl, logo, tag }: InstagramPostEmbedProps) => {
  useEffect(() => {
    // Remove any existing Instagram script
    const existingScripts = document.querySelectorAll('script[src*="instagram.com/embed.js"]');
    existingScripts.forEach(script => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    });

    // Load fresh Instagram embed script
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    script.onload = () => {
      // Process embeds after script loads
      if ((window as any).instgrm && typeof (window as any).instgrm.Embeds?.process === 'function') {
        (window as any).instgrm.Embeds.process();
      }
    };
    document.body.appendChild(script);

    // Retry processing every second for up to 5 seconds
    let attempts = 0;
    const maxAttempts = 5;
    const retryInterval = setInterval(() => {
      attempts++;
      if ((window as any).instgrm && typeof (window as any).instgrm.Embeds?.process === 'function') {
        (window as any).instgrm.Embeds.process();
        clearInterval(retryInterval);
      } else if (attempts >= maxAttempts) {
        clearInterval(retryInterval);
      }
    }, 1000);

    return () => {
      clearInterval(retryInterval);
    };
  }, [postUrl]);

  return (
    <div className="group liquid-glass liquid-glass-hover rounded-3xl p-6 overflow-hidden border border-border/10 shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 liquid-button rounded-full flex items-center justify-center p-2 shadow-sm">
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
      
      <div className="w-full flex justify-center rounded-2xl overflow-hidden bg-background/5">
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
            width: 'calc(100% - 2px)',
          }}
        />
      </div>
    </div>
  );
};
