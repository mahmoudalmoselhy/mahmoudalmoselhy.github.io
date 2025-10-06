import React, { useEffect, useRef } from 'react';

interface InstagramPostEmbedProps {
  postUrl: string;
}

export const InstagramPostEmbed = ({ postUrl }: InstagramPostEmbedProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadInstagramEmbed = () => {
      if ((window as any).instgrm) {
        (window as any).instgrm.Embeds.process();
      }
    };

    if (!(window as any).instgrm) {
      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      script.onload = loadInstagramEmbed;
      document.body.appendChild(script);
    } else {
      loadInstagramEmbed();
    }
  }, [postUrl]);

  return (
    <div ref={containerRef} className="w-full flex justify-center">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={postUrl}
        data-instgrm-version="14"
        style={{
          background: '#fff',
          border: 0,
          margin: '0.5rem auto',
          maxWidth: '100%',
          minWidth: '280px',
          width: '100%',
        }}
      />
    </div>
  );
};
