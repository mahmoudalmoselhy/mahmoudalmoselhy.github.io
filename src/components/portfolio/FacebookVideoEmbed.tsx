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
    <article className="group liquid-glass liquid-glass-hover rounded-3xl p-6 md:p-8 transform col-span-full md:col-span-full">
      <div className="grid grid-cols-5 gap-4 md:gap-6 items-start">
        {/* Left: Video */}
        <div className="col-span-3 md:col-span-3">
          <div className="rounded-xl md:rounded-2xl overflow-hidden bg-background/50">
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
        <aside className="col-span-2 md:col-span-2">
          <div className="flex items-center mb-3 md:mb-4">
            <div className="w-8 h-8 md:w-10 md:h-10 liquid-button rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-500 p-1.5">
              <img src={logo} alt={`${title} logo`} className="w-full h-full object-contain" />
            </div>
            <h4 className="text-base md:text-lg font-semibold text-foreground group-hover:text-primary transition-all duration-500 line-clamp-1 leading-tight">
              {title}
            </h4>
          </div>

          <div className="space-y-4 md:space-y-5">
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