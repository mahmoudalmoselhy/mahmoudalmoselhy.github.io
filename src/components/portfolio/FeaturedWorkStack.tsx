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
      const windowHeight = window.innerHeight;
      
      // Calculate if stack is in viewport
      const stackTop = rect.top;
      const stackBottom = rect.bottom;
      const isInViewport = stackTop < windowHeight && stackBottom > 0;
      
      if (isInViewport) {
        // Calculate scroll progress through the stack area
        const viewportCenter = windowHeight / 2;
        const stackCenter = stackTop + rect.height / 2;
        const distanceFromCenter = Math.abs(stackCenter - viewportCenter);
        const maxDistance = windowHeight / 2 + rect.height / 2;
        
        // When stack is near center, calculate card index based on relative position
        if (distanceFromCenter < maxDistance) {
          const progressThroughStack = Math.max(0, Math.min(1, 
            (viewportCenter - stackTop) / rect.height
          ));
          
          // Map progress to card index
          const newIndex = Math.floor(progressThroughStack * featuredWorks.length);
          const clampedIndex = Math.max(0, Math.min(featuredWorks.length - 1, newIndex));
          
          if (clampedIndex !== currentIndex) {
            setCurrentIndex(clampedIndex);
          }
        }
      }
    };

    // Use requestAnimationFrame for smoother updates
    let ticking = false;
    const smoothHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', smoothHandleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', smoothHandleScroll);
    };
  }, [currentIndex]);

  return (
    <div 
      id="featured-stack" 
      className="relative h-[500px] md:h-[600px] flex items-center justify-center mb-12 w-full"
      style={{ perspective: '1000px' }}
    >
      <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
        {featuredWorks.map((work, index) => {
          const isActive = index === currentIndex;
          const isPrev = index < currentIndex;
          const offset = index - currentIndex;
          const absOffset = Math.abs(offset);
          
          return (
            <a
              key={index}
              href={work.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 transition-all duration-1000 ease-out cursor-pointer group"
              style={{
                zIndex: isActive ? 30 : 20 - absOffset,
                transform: isActive 
                  ? 'translateZ(0px) rotateY(0deg) scale(1)' 
                  : isPrev
                  ? `translateZ(-${absOffset * 60}px) translateY(-${absOffset * 25}px) translateX(-${absOffset * 35}px) rotateY(${absOffset * 4}deg) rotateX(${absOffset * 3}deg) scale(${1 - absOffset * 0.12})`
                  : `translateZ(-${absOffset * 60}px) translateY(${absOffset * 25}px) translateX(${absOffset * 35}px) rotateY(-${absOffset * 4}deg) rotateX(-${absOffset * 3}deg) scale(${1 - absOffset * 0.12})`,
                opacity: isActive ? 1 : Math.max(0.2, 1 - absOffset * 0.25),
                filter: isActive ? 'blur(0px) brightness(1)' : `blur(${absOffset * 2.5}px) brightness(${1 - absOffset * 0.2})`,
                transformStyle: 'preserve-3d'
              }}
            >
              <div 
                className="relative h-full w-full rounded-3xl overflow-hidden transition-all duration-1000 group-hover:scale-105"
                style={{
                  boxShadow: isActive 
                    ? '0 30px 100px -25px rgba(0,0,0,0.5), 0 15px 50px -15px rgba(0,0,0,0.4), 0 5px 20px -5px rgba(0,0,0,0.3)' 
                    : `0 ${15 + absOffset * 8}px ${30 + absOffset * 15}px -${8 + absOffset * 3}px rgba(0,0,0,${0.3 + absOffset * 0.15})`,
                  transform: isActive ? 'rotateX(0deg)' : `rotateX(${absOffset * 2}deg)`
                }}
              >
                <img 
                  src={work.image} 
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div 
                  className="absolute inset-0 transition-all duration-1000"
                  style={{
                    background: isActive 
                      ? 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.25) 40%, transparent 100%)'
                      : `linear-gradient(to top, rgba(0,0,0,${0.7 + absOffset * 0.1}) 0%, rgba(0,0,0,${0.4 + absOffset * 0.1}) 60%, transparent 100%)`
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 
                    className="text-white font-bold text-lg md:text-2xl lg:text-3xl mb-3 md:mb-4 transition-all duration-1000 group-hover:translate-y-[-8px]"
                    style={{
                      opacity: isActive ? 1 : Math.max(0.6, 1 - absOffset * 0.3),
                      transform: isActive ? 'translateY(0)' : `translateY(${absOffset * 8}px)`
                    }}
                  >
                    {work.title}
                  </h3>
                  <div 
                    className="bg-gradient-to-r from-gradient-start to-gradient-end rounded-full transition-all duration-1000 group-hover:w-32"
                    style={{
                      width: isActive ? '64px' : `${Math.max(24, 64 - absOffset * 12)}px`,
                      height: isActive ? '6px' : `${Math.max(2, 6 - absOffset * 1.5)}px`,
                      opacity: isActive ? 1 : Math.max(0.4, 1 - absOffset * 0.25)
                    }}
                  />
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};