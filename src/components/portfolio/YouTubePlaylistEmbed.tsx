import React from 'react';

interface YouTubePlaylistEmbedProps {
  title: string;
  description: string;
  playlistUrl: string;
  logo: string;
}

export const YouTubePlaylistEmbed = ({ title, description, playlistUrl, logo }: YouTubePlaylistEmbedProps) => {
  // Extract playlist ID from YouTube URL
  const getPlaylistId = (url: string) => {
    const match = url.match(/[?&]list=([^&]+)/);
    return match ? match[1] : null;
  };

  const playlistId = getPlaylistId(playlistUrl);

  if (!playlistId) {
    return (
      <div className="bg-card/30 backdrop-blur-lg border border-border rounded-3xl p-4 md:p-6">
        <p className="text-muted-foreground">Invalid playlist URL</p>
      </div>
    );
  }

  const embedUrl = `https://www.youtube.com/embed/videoseries?list=${playlistId}&rel=0&showinfo=0&modestbranding=1`;

  return (
    <div className="group bg-card/30 backdrop-blur-lg border border-border hover:border-accent rounded-3xl p-6 md:p-8 transform hover:scale-[1.02] transition-all duration-300">
      <div className="flex items-center mb-3 md:mb-4">
        <div className="w-8 h-8 md:w-10 md:h-10 liquid-button rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-500 p-1.5">
          <img
            src={logo}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <h4 className="text-sm md:text-base font-semibold text-foreground group-hover:text-primary transition-all duration-500 line-clamp-1">
            {title}
          </h4>
        </div>
      </div>

      <div className="aspect-video rounded-2xl overflow-hidden mb-4 md:mb-6 bg-background/50">
        <iframe
          src={embedUrl}
          title={title}
          className="w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

      <p className="text-muted-foreground text-xs md:text-sm leading-relaxed transition-colors duration-500">
        {description}
      </p>
    </div>
  );
};