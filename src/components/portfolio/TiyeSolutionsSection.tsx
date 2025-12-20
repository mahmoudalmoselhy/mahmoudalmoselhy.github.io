import React, { useState, useEffect, useCallback } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ExternalLink, Search, FileText, Palette, Code, ChevronLeft, ChevronRight, X } from 'lucide-react';

const services = [{
  icon: Search,
  label: 'SEO',
  color: 'from-red-500 to-red-600',
  bgColor: 'bg-red-500/10',
  textColor: 'text-red-500'
}, {
  icon: FileText,
  label: 'Content Creation',
  color: 'from-amber-500 to-orange-500',
  bgColor: 'bg-amber-500/10',
  textColor: 'text-amber-500'
}, {
  icon: Palette,
  label: 'UI/UX Design',
  color: 'from-purple-500 to-pink-500',
  bgColor: 'bg-purple-500/10',
  textColor: 'text-purple-500'
}, {
  icon: Code,
  label: 'Frontend Edits',
  color: 'from-emerald-500 to-teal-500',
  bgColor: 'bg-emerald-500/10',
  textColor: 'text-emerald-500'
}];

const bigServicePageImages = ['/lovable-uploads/tiye-service-1.png', '/lovable-uploads/tiye-service-2.png', '/lovable-uploads/tiye-service-3.png', '/lovable-uploads/tiye-service-4.png', '/lovable-uploads/tiye-service-5.png', '/lovable-uploads/tiye-service-6.png', '/lovable-uploads/tiye-service-7.png', '/lovable-uploads/tiye-service-8.png'];
const smallServicePageImages = ['/lovable-uploads/tiye-small-1.png', '/lovable-uploads/tiye-small-2.png', '/lovable-uploads/tiye-small-3.png', '/lovable-uploads/tiye-small-4.png'];
const allClientsPageImages = ['/lovable-uploads/tiye-clients-1.png', '/lovable-uploads/tiye-clients-2.png', '/lovable-uploads/tiye-clients-3.png', '/lovable-uploads/tiye-clients-4.png', '/lovable-uploads/tiye-clients-5.png', '/lovable-uploads/tiye-clients-6.png', '/lovable-uploads/tiye-clients-7.png', '/lovable-uploads/tiye-clients-8.png', '/lovable-uploads/tiye-clients-9.png', '/lovable-uploads/tiye-clients-10.png'];

// Fullscreen Lightbox Component
const Lightbox = ({ 
  images, 
  currentIndex, 
  onClose, 
  onNavigate 
}: { 
  images: string[]; 
  currentIndex: number; 
  onClose: () => void; 
  onNavigate: (index: number) => void;
}) => {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') onNavigate(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    if (e.key === 'ArrowRight') onNavigate(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  }, [currentIndex, images.length, onClose, onNavigate]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl animate-fade-in">
      {/* Close button */}
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all duration-300 z-10"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation arrows */}
      <button 
        onClick={() => onNavigate(currentIndex === 0 ? images.length - 1 : currentIndex - 1)}
        className="absolute left-4 p-3 rounded-full bg-[#BE1522] text-white shadow-lg hover:scale-110 hover:shadow-[#BE1522]/50 transition-all duration-300 z-10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button 
        onClick={() => onNavigate(currentIndex === images.length - 1 ? 0 : currentIndex + 1)}
        className="absolute right-4 p-3 rounded-full bg-[#BE1522] text-white shadow-lg hover:scale-110 hover:shadow-[#BE1522]/50 transition-all duration-300 z-10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Image container with slide animation */}
      <div className="relative w-full max-w-6xl mx-4 overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0 flex items-center justify-center px-4">
              <img 
                src={image} 
                alt={`Screenshot ${index + 1}`} 
                className="max-h-[85vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Image counter */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
        <span className="text-white/80 text-sm font-medium">
          {currentIndex + 1} / {images.length}
        </span>
        <div className="flex gap-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => onNavigate(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-[#BE1522] w-6' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Keyboard hint */}
      <div className="absolute bottom-6 right-6 text-white/40 text-xs hidden md:block">
        Use ← → keys to navigate • ESC to close
      </div>
    </div>
  );
};

export const TiyeSolutionsSection = () => {
  const [bigCurrentIndex, setBigCurrentIndex] = useState(0);
  const [smallCurrentIndex, setSmallCurrentIndex] = useState(0);
  const [clientsCurrentIndex, setClientsCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (images: string[], index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const navigateBig = (direction: 'prev' | 'next') => {
    setBigCurrentIndex(prev => {
      if (direction === 'prev') return prev === 0 ? bigServicePageImages.length - 1 : prev - 1;
      return prev === bigServicePageImages.length - 1 ? 0 : prev + 1;
    });
  };

  const navigateSmall = (direction: 'prev' | 'next') => {
    setSmallCurrentIndex(prev => {
      if (direction === 'prev') return prev === 0 ? smallServicePageImages.length - 1 : prev - 1;
      return prev === smallServicePageImages.length - 1 ? 0 : prev + 1;
    });
  };

  const navigateClients = (direction: 'prev' | 'next') => {
    setClientsCurrentIndex(prev => {
      if (direction === 'prev') return prev === 0 ? allClientsPageImages.length - 1 : prev - 1;
      return prev === allClientsPageImages.length - 1 ? 0 : prev + 1;
    });
  };

  const ImageGallery = ({
    images,
    currentIndex,
    setCurrentIndex,
    onNavigate
  }: {
    images: string[];
    currentIndex: number;
    setCurrentIndex: (index: number) => void;
    onNavigate: (direction: 'prev' | 'next') => void;
  }) => {
    return (
      <div className="space-y-4">
        {/* Featured Large Image with slide animation */}
        <div className="relative group overflow-hidden rounded-2xl border-2 border-[#BE1522]/30 hover:border-[#BE1522] transition-all duration-300 shadow-lg hover:shadow-[#BE1522]/20">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <button 
                key={index}
                onClick={() => openLightbox(images, currentIndex)}
                className="w-full flex-shrink-0 relative aspect-video cursor-pointer"
              >
                <img 
                  src={image} 
                  alt={`Screenshot ${index + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-white text-sm font-medium px-4 py-2 bg-[#BE1522] rounded-full">
                    Click to fullscreen
                  </span>
                </div>
              </button>
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={(e) => { e.stopPropagation(); onNavigate('prev'); }} 
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#BE1522] text-white shadow-lg hover:scale-110 hover:shadow-[#BE1522]/50 transition-all duration-300 z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); onNavigate('next'); }} 
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#BE1522] text-white shadow-lg hover:scale-110 hover:shadow-[#BE1522]/50 transition-all duration-300 z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-4 gap-2">
          {images.slice(0, 4).map((image, index) => (
            <button 
              key={index} 
              onClick={() => setCurrentIndex(index)} 
              className={`relative aspect-video rounded-lg overflow-hidden border transition-all duration-300 cursor-pointer ${
                index === currentIndex 
                  ? 'border-[#BE1522] ring-2 ring-[#BE1522]/50' 
                  : 'border-border/50 hover:border-[#BE1522]/50'
              }`}
            >
              <img 
                src={image} 
                alt={`Thumbnail ${index + 1}`} 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" 
                loading="lazy" 
              />
            </button>
          ))}
        </div>

        {/* Image Counter */}
        <div className="flex justify-center gap-1.5">
          {images.map((_, index) => (
            <button 
              key={index} 
              onClick={() => setCurrentIndex(index)} 
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-[#BE1522] w-6' 
                  : 'bg-muted-foreground/30 hover:bg-[#BE1522]/50'
              }`} 
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      {lightboxOpen && (
        <Lightbox 
          images={lightboxImages} 
          currentIndex={lightboxIndex} 
          onClose={() => setLightboxOpen(false)} 
          onNavigate={setLightboxIndex} 
        />
      )}
      <section className="bg-gradient-to-br from-card/50 via-card/30 to-[#BE1522]/5 backdrop-blur-lg rounded-3xl border p-8 md:p-12 relative overflow-hidden border-secondary">
        {/* Colorful geometric pattern background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 light-subtle-pattern"></div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 bg-secondary"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#BE1522]/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative z-10 space-y-8">
          {/* Section Title */}
          <div className="text-center">
            <h3 className="text-xl md:text-3xl font-bold text-foreground mb-2 md:mb-4">
              Tiye Solutions Website
            </h3>
            <p className="text-muted-foreground text-sm md:text-lg">
              WordPress website redesign and optimization project
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column: About & Services */}
            <div className="space-y-8">
              {/* About the Project */}
              <div className="space-y-4">
                <h4 className="text-lg md:text-xl font-semibold text-foreground flex items-center gap-2">
                  <span className="w-8 h-1 rounded-full bg-primary"></span>
                  About the Project
                </h4>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  Tiye Solutions website transformed from an old HTML website to a fully developed website using WordPress. In this website there was a challenge that the developer used a Pre-designed WordPress template for the website. Which wasn't the best solution for a creative agency. What I did is that I changed a lot of website designs to a new design entirely, Optimized frontend for both mobile and desktop environment, wrote content, and full SEO analysis and improvements.
                </p>
              </div>

              {/* Provided Services */}
              <div className="space-y-4">
                <h4 className="text-lg md:text-xl font-semibold text-foreground flex items-center gap-2">
                  <span className="w-8 h-1 rounded-full bg-primary"></span>
                  Provided Services
                </h4>
                <ul className="grid grid-cols-2 gap-3">
                  {services.map((service, index) => (
                    <li key={index} className={`flex items-center gap-3 p-3 rounded-xl ${service.bgColor} border border-border/50 hover:scale-105 transition-all duration-300 group cursor-default`}>
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${service.color} shadow-lg`}>
                        <service.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className={`text-sm font-medium ${service.textColor}`}>{service.label}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Link Button with #BE1522 and glow effect */}
              <Button asChild className="w-full sm:w-auto bg-[#BE1522] hover:bg-[#BE1522]/90 text-white shadow-lg shadow-[#BE1522]/25 hover:shadow-[#BE1522]/50 hover:scale-105 transition-all duration-300">
                <a href="https://tiyesolutions.com" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit Tiye Solutions
                </a>
              </Button>
            </div>

            {/* Right Column: Tabbed Gallery */}
            <div className="space-y-4">
              <Tabs defaultValue="big-service" className="w-full">
                <TabsList className="w-full flex flex-col sm:grid sm:grid-cols-3 gap-1 bg-background/50 border border-[#BE1522]/20 rounded-xl p-1 h-auto">
                  <TabsTrigger value="big-service" className="rounded-lg text-xs sm:text-sm py-2.5 sm:py-2 data-[state=active]:bg-[#BE1522] data-[state=active]:text-white data-[state=active]:shadow-lg">
                    Big Service Page
                  </TabsTrigger>
                  <TabsTrigger value="small-service" className="rounded-lg text-xs sm:text-sm py-2.5 sm:py-2 data-[state=active]:bg-[#BE1522] data-[state=active]:text-white data-[state=active]:shadow-lg">
                    Small Service Page
                  </TabsTrigger>
                  <TabsTrigger value="all-clients" className="rounded-lg text-xs sm:text-sm py-2.5 sm:py-2 data-[state=active]:bg-[#BE1522] data-[state=active]:text-white data-[state=active]:shadow-lg">
                    All Clients Page
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="big-service" className="mt-4">
                  <ImageGallery 
                    images={bigServicePageImages} 
                    currentIndex={bigCurrentIndex} 
                    setCurrentIndex={setBigCurrentIndex}
                    onNavigate={navigateBig} 
                  />
                </TabsContent>

                <TabsContent value="small-service" className="mt-4">
                  <ImageGallery 
                    images={smallServicePageImages} 
                    currentIndex={smallCurrentIndex} 
                    setCurrentIndex={setSmallCurrentIndex}
                    onNavigate={navigateSmall} 
                  />
                </TabsContent>

                <TabsContent value="all-clients" className="mt-4">
                  <ImageGallery 
                    images={allClientsPageImages} 
                    currentIndex={clientsCurrentIndex} 
                    setCurrentIndex={setClientsCurrentIndex}
                    onNavigate={navigateClients} 
                  />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};