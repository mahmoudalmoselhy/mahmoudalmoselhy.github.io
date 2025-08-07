import React from 'react';

interface FacebookVideoEmbedProps {
  title: string;
  description: string;
  videoUrl: string;
  logo: string;
  responsibilities?: string[];
}

export const FacebookVideoEmbed = ({ title, description, videoUrl, logo, responsibilities = [] }: FacebookVideoEmbedProps) => {
  const embedUrl = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(videoUrl)}&show_text=false&width=1280&height=720`;

  return (
    <div className="group liquid-glass liquid-glass-hover rounded-3xl p-6 md:p-8 transform">
      <div className="flex items-center mb-3 md:mb-4">
        <div className="w-8 h-8 md:w-10 md:h-10 liquid-button rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-500 p-1.5">
          <img src={logo} alt={`${title} logo`} className="w-full h-full object-contain" />
        </div>
        <h4 className="text-sm md:text-base font-semibold text-foreground group-hover:text-primary transition-all duration-500 line-clamp-1">
          {title}
        </h4>
      </div>

      <div className="aspect-video rounded-2xl overflow-hidden mb-4 md:mb-6 bg-background/50">
        <iframe
          src={embedUrl}
          title={title}
          className="w-full h-full border-0"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

      <div className="space-y-3">
        <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
          {description}
        </p>

        {responsibilities.length > 0 && (
          <div>
            <h5 className="text-foreground text-xs md:text-sm font-semibold mb-1">Responsibilities</h5>
            <ul className="list-disc list-inside text-muted-foreground text-xs md:text-sm space-y-1">
              {responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
