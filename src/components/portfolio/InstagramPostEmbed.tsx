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
    <div className="group flex justify-center">
      <div className="w-full max-w-[540px] rounded-2xl overflow-hidden border border-border/50 bg-gradient-to-br from-background to-muted/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
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
          <blockquote
            className="instagram-media"
            data-instgrm-permalink={postUrl}
            data-instgrm-version="14"
            style={{
              background: '#FFF',
              border: 0,
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              margin: '0',
              maxWidth: '540px',
              minWidth: '326px',
              padding: 0,
              width: '100%',
            }}
          />
        </div>
      </div>
    </div>
  );
};
