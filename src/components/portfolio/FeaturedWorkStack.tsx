import React, { useState, useEffect } from 'react';

interface FeaturedWork {
  title: string;
  link: string;
  image: string;
}

const featuredWorks: FeaturedWork[] = [
  {
    title: "Samsung Galaxy Watch 4 Review",
    link: "https://www.3arrafni.com/samsung-galaxy-watch-4-review/",
    image: "/lovable-uploads/cc0ed4c2-86a5-4d8e-8065-cac902b8bc16.png"
  },
  {
    title: "Honey Scam explained",
    link: "https://www.3arrafni.com/honey-scam-explained/",
    image: "/lovable-uploads/8ef3ab80-42b8-4ce4-b280-e4a0c812617b.png"
  },
  {
    title: "Samsung Galaxy Buds FE Review",
    link: "https://www.3arrafni.com/samsung-galaxy-buds-fe-review/",
    image: "/lovable-uploads/50a63b2f-f4a6-4af1-b9fa-180df9e12233.png"
  },
  {
    title: "UGREEN Nexode 65W GaN Charging Station",
    link: "https://www.3arrafni.com/ugreen-nexode-65w-gan-charging-station/",
    image: "/lovable-uploads/c35b2cfe-9a8a-4ec2-830c-214900066582.png"
  },
  {
    title: "Black Myth Wukong Review",
    link: "https://www.3arrafni.com/black-myth-wukong-review/",
    image: "/lovable-uploads/6134c47d-6131-4d1f-ba02-e6aa71b2d036.png"
  }
];

export const FeaturedWorkStack = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const stackElement = document.getElementById('featured-stack');
      if (!stackElement) return;
      
      const rect = stackElement.getBoundingClientRect();
      const elementTop = rect.top;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate progress when element is in viewport
      if (elementTop <= windowHeight && elementTop >= -elementHeight) {
        const scrollProgress = Math.max(0, (windowHeight - elementTop) / (windowHeight + elementHeight));
        const newIndex = Math.floor(scrollProgress * featuredWorks.length);
        setCurrentIndex(Math.min(newIndex, featuredWorks.length - 1));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="featured-stack" className="relative h-[500px] md:h-[600px] flex items-center justify-center mb-12 w-full">
      <div className="relative w-full h-full">
        {featuredWorks.map((work, index) => (
          <a
            key={index}
            href={work.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`absolute inset-0 transition-all duration-700 ease-out cursor-pointer group ${
              index === currentIndex 
                ? 'z-20 transform-none opacity-100 scale-100' 
                : index < currentIndex
                ? 'z-10 transform translate-y-[-30px] opacity-40 scale-98'
                : 'z-0 transform translate-y-[30px] opacity-20 scale-95'
            }`}
          >
            <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
              <img 
                src={work.image} 
                alt={work.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-white font-bold text-xl md:text-3xl mb-4 transform group-hover:translate-y-[-8px] transition-transform duration-500">
                  {work.title}
                </h3>
                <div className="w-16 h-1.5 bg-gradient-to-r from-gradient-start to-gradient-end rounded-full transform group-hover:w-32 transition-all duration-500" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};