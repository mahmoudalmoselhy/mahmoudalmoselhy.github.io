import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface FacebookVideoEmbedProps {
  title: string;
  description: string;
  videoUrl: string;
  logo: string;
  responsibilities?: string[];
}

export const FacebookVideoEmbed = ({ title, description, videoUrl, logo, responsibilities = [] }: FacebookVideoEmbedProps) => {
  const embedUrl = videoUrl.includes('facebook.com/plugins/video.php')
    ? videoUrl
    : `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(videoUrl)}&show_text=false&width=1280&height=720`;

  // Use standard 16:9 aspect ratio for video embeds
  const aspect = 16 / 9;

  return (
    <article className="group liquid-glass liquid-glass-hover rounded-3xl p-6 md:p-8 transform col-span-full md:col-span-full">
      <div className="grid gap-4 md:gap-6 md:grid-cols-5 items-start">
        {/* Left: Video */}
        <div className="md:col-span-3">
          <div className="rounded-xl md:rounded-2xl overflow-hidden bg-background/50">
            {/* Mobile: vertical (9:16) with safe max height */}
            <div className="md:hidden max-h-[calc(100svh-120px)]">
              <AspectRatio ratio={aspect}>
                <iframe
                  src={embedUrl}
                  title={title}
                  className="w-full h-full border-0"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </AspectRatio>
            </div>
            {/* Desktop: 16:9 */}
            <div className="hidden md:block">
              <AspectRatio ratio={aspect}>
                <iframe
                  src={embedUrl}
                  title={title}
                  className="w-full h-full border-0"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </AspectRatio>
            </div>
          </div>
        </div>

        {/* Right: Text content */}
        <aside className="md:col-span-2 mt-4 md:mt-0">
          <div className="flex items-center mb-3 md:mb-4">
            <div className="w-8 h-8 md:w-10 md:h-10 liquid-button rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-500 p-1.5">
              <img src={logo} alt={`${title} logo`} loading="lazy" width={40} height={40} className="w-full h-full object-contain" />
            </div>
            <h4 className="text-base md:text-lg font-semibold text-foreground group-hover:text-primary transition-all duration-500 line-clamp-1 leading-tight">
              {title}
            </h4>
          </div>

          <div className="grid grid-cols-2 gap-3 md:block">
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              {description}
            </p>

            {responsibilities.length > 0 && (
              <section aria-label="Responsibilities">
                <h5 className="text-foreground text-sm md:text-base font-semibold mb-2">Responsibilities</h5>
                <ul className="list-disc pl-4 text-muted-foreground text-sm md:text-base space-y-1.5">
                  {responsibilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </aside>
      </div>
    </article>
  );
};