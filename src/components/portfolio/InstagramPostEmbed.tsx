import React, { useEffect } from 'react';

interface InstagramPostEmbedProps {
  postUrl: string;
}

export const InstagramPostEmbed = ({ postUrl }: InstagramPostEmbedProps) => {
  useEffect(() => {
    // Load Instagram embed script if not already loaded
    if (!(window as any).instgrm) {
      const script = document.createElement('script');
      script.src = '//www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    } else {
      // If script already loaded, process embeds
      (window as any).instgrm.Embeds.process();
    }
  }, [postUrl]);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={postUrl}
      data-instgrm-version="14"
    />
  );
};
