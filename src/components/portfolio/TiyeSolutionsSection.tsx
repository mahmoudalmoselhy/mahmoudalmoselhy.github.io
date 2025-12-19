import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ExternalLink, Search, FileText, Palette, Code, ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
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
export const TiyeSolutionsSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [bigCurrentIndex, setBigCurrentIndex] = useState(0);
  const [smallCurrentIndex, setSmallCurrentIndex] = useState(0);
  const navigateBig = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setBigCurrentIndex(prev => prev === 0 ? bigServicePageImages.length - 1 : prev - 1);
    } else {
      setBigCurrentIndex(prev => prev === bigServicePageImages.length - 1 ? 0 : prev + 1);
    }
  };
  const navigateSmall = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setSmallCurrentIndex(prev => prev === 0 ? smallServicePageImages.length - 1 : prev - 1);
    } else {
      setSmallCurrentIndex(prev => prev === smallServicePageImages.length - 1 ? 0 : prev + 1);
    }
  };
  const ImageGallery = ({
    images,
    currentIndex,
    onNavigate
  }: {
    images: string[];
    currentIndex: number;
    onNavigate: (direction: 'prev' | 'next') => void;
  }) => {
    const remainingImages = images.filter((_, i) => i !== currentIndex);
    return <div className="space-y-4">
        {/* Featured Large Image */}
        <div className="relative group">
          <Dialog>
            <DialogTrigger asChild>
              <button className="w-full relative aspect-video rounded-2xl overflow-hidden border-2 border-[#BE1522]/30 hover:border-[#BE1522] transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[#BE1522]/20">
                <img src={images[currentIndex]} alt={`Featured screenshot`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-white text-sm font-medium px-4 py-2 bg-[#BE1522] rounded-full">Click to view</span>
                </div>
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-5xl w-full p-2 bg-background/95 backdrop-blur-xl border-border">
              <img src={images[currentIndex]} alt={`Featured screenshot`} className="w-full h-auto rounded-lg" />
            </DialogContent>
          </Dialog>
          
          {/* Navigation Arrows */}
          <button onClick={() => onNavigate('prev')} className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#BE1522] text-white shadow-lg hover:scale-110 hover:shadow-[#BE1522]/50 transition-all duration-300">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={() => onNavigate('next')} className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#BE1522] text-white shadow-lg hover:scale-110 hover:shadow-[#BE1522]/50 transition-all duration-300">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-4 gap-2">
          {remainingImages.slice(0, 4).map((image, index) => {
          const originalIndex = images.indexOf(image);
          return <button key={index} onClick={() => onNavigate(originalIndex > currentIndex ? 'next' : 'prev')} className={`relative aspect-video rounded-lg overflow-hidden border transition-all duration-300 cursor-pointer ${originalIndex === currentIndex ? 'border-[#BE1522] ring-2 ring-[#BE1522]/50' : 'border-border/50 hover:border-[#BE1522]/50'}`}>
                <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" loading="lazy" />
              </button>;
        })}
        </div>

        {/* Image Counter */}
        <div className="flex justify-center gap-1.5">
          {images.map((_, index) => <button key={index} onClick={() => {
          const diff = index - currentIndex;
          if (diff > 0) {
            for (let i = 0; i < diff; i++) onNavigate('next');
          } else if (diff < 0) {
            for (let i = 0; i < Math.abs(diff); i++) onNavigate('prev');
          }
        }} className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-[#BE1522] w-6' : 'bg-muted-foreground/30 hover:bg-[#BE1522]/50'}`} />)}
        </div>
      </div>;
  };
  return <section className="bg-gradient-to-br from-card/50 via-card/30 to-[#BE1522]/5 backdrop-blur-lg rounded-3xl border p-8 md:p-12 relative overflow-hidden border-secondary">
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
                {services.map((service, index) => <li key={index} className={`flex items-center gap-3 p-3 rounded-xl ${service.bgColor} border border-border/50 hover:scale-105 transition-all duration-300 group cursor-default`}>
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${service.color} shadow-lg`}>
                      <service.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className={`text-sm font-medium ${service.textColor}`}>{service.label}</span>
                  </li>)}
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
              <TabsList className="w-full grid grid-cols-2 bg-background/50 border border-[#BE1522]/20 rounded-xl p-1">
                <TabsTrigger value="big-service" className="rounded-lg data-[state=active]:bg-[#BE1522] data-[state=active]:text-white data-[state=active]:shadow-lg">
                  Big Service Page
                </TabsTrigger>
                <TabsTrigger value="small-service" className="rounded-lg data-[state=active]:bg-[#BE1522] data-[state=active]:text-white data-[state=active]:shadow-lg">
                  Small Service Page
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="big-service" className="mt-4">
                <ImageGallery images={bigServicePageImages} currentIndex={bigCurrentIndex} onNavigate={navigateBig} />
              </TabsContent>

              <TabsContent value="small-service" className="mt-4">
                <ImageGallery images={smallServicePageImages} currentIndex={smallCurrentIndex} onNavigate={navigateSmall} />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>;
};