import React from 'react';

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

  return (
    <article className="group liquid-glass liquid-glass-hover rounded-3xl p-6 md:p-8 transform md:col-span-full">
      <div className="grid gap-4 md:gap-6 md:grid-cols-5 items-start">
        {/* Left: Video */}
        <div className="md:col-span-2">
          <div className="rounded-2xl overflow-hidden bg-background/50">
            <div className="aspect-video">
              <iframe
                src={embedUrl}
                title={title}
                className="w-full h-full border-0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Right: Text content */}
        <aside className="md:col-span-3">
          <header className="mb-3 md:mb-4">
            <h3 className="text-base md:text-xl lg:text-2xl font-semibold text-foreground group-hover:text-primary transition-all duration-500 line-clamp-2">
              {title}
            </h3>
          </header>

          <div className="space-y-4">
            <p className="text-foreground/90 text-sm md:text-base lg:text-lg leading-relaxed">
              {description}
            </p>

            {responsibilities.length > 0 && (
              <section aria-label="Responsibilities" className="space-y-2">
                <h4 className="text-foreground text-sm md:text-base lg:text-lg font-semibold">Responsibilities</h4>
                <ul className="list-disc list-inside text-muted-foreground text-sm md:text-base lg:text-lg space-y-1.5">
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