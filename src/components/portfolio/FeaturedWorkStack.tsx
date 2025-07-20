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
    image: "/lovable-uploads/008c94ff-1759-4406-a93f-ab223c517956.png"
  },
  {
    title: "Honey Scam explained",
    link: "https://www.3arrafni.com/honey-scam-explained/",
    image: "/lovable-uploads/ab0fcb59-5c9a-40ef-ac14-6738317199d0.png"
  },
  {
    title: "Samsung Galaxy Buds FE Review",
    link: "https://www.3arrafni.com/samsung-galaxy-buds-fe-review/",
    image: "/lovable-uploads/8f31c28a-f551-44b9-9cc6-a8aed95e6fe4.png"
  },
  {
    title: "UGREEN Nexode 65W GaN Charging Station",
    link: "https://www.3arrafni.com/ugreen-nexode-65w-gan-charging-station/",
    image: "/lovable-uploads/8d0694e8-3941-4769-8e2d-5f1c6e79bb8a.png"
  },
  {
    title: "Black Myth Wukong Review",
    link: "https://www.3arrafni.com/black-myth-wukong-review/",
    image: "/lovable-uploads/94b22508-0c53-4890-827a-00a270c929ef.png"
  }
];

export const FeaturedWorkStack = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollProgress = (scrollPosition % (windowHeight * 0.5)) / (windowHeight * 0.5);
      const newIndex = Math.floor(scrollProgress * featuredWorks.length);
      setCurrentIndex(Math.min(newIndex, featuredWorks.length - 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-[400px] md:h-[500px] flex items-center justify-center mb-12">
      <div className="relative w-full max-w-md">
        {featuredWorks.map((work, index) => (
          <a
            key={index}
            href={work.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`absolute inset-0 transition-all duration-500 ease-out cursor-pointer group ${
              index === currentIndex 
                ? 'z-20 transform-none opacity-100 scale-100' 
                : index < currentIndex
                ? 'z-10 transform translate-x-[-20px] translate-y-[-20px] opacity-60 scale-95'
                : 'z-0 transform translate-x-[20px] translate-y-[20px] opacity-30 scale-90'
            }`}
          >
            <div className="relative h-full w-full rounded-xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300">
              <img 
                src={work.image} 
                alt={work.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-bold text-lg md:text-xl mb-2 transform group-hover:translate-y-[-4px] transition-transform duration-300">
                  {work.title}
                </h3>
                <div className="w-12 h-1 bg-gradient-to-r from-gradient-start to-gradient-end rounded-full transform group-hover:w-20 transition-all duration-300" />
              </div>
            </div>
          </a>
        ))}
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2">
        {featuredWorks.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-8 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-gradient-to-b from-gradient-start to-gradient-end' 
                : 'bg-muted-foreground/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};