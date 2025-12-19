import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ExternalLink, Search, FileText, Palette, Code } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';

const services = [
  { icon: Search, label: 'SEO' },
  { icon: FileText, label: 'Content Creation' },
  { icon: Palette, label: 'UI/UX Design' },
  { icon: Code, label: 'Frontend Edits' },
];

const bigServicePageImages = [
  '/lovable-uploads/tiye-service-1.png',
  '/lovable-uploads/tiye-service-2.png',
  '/lovable-uploads/tiye-service-3.png',
  '/lovable-uploads/tiye-service-4.png',
  '/lovable-uploads/tiye-service-5.png',
  '/lovable-uploads/tiye-service-6.png',
  '/lovable-uploads/tiye-service-7.png',
  '/lovable-uploads/tiye-service-8.png',
];

export const TiyeSolutionsSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="bg-card/30 backdrop-blur-lg rounded-3xl border border-border p-8 md:p-12 relative overflow-hidden">
      {/* Subtle geometric pattern background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0 light-subtle-pattern"></div>
      </div>
      
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
                <span className="w-8 h-1 bg-gradient-to-r from-gradient-start to-gradient-end rounded-full"></span>
                About the Project
              </h4>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                Tiye Solutions website transformed from an old HTML website to a fully developed website using WordPress. In this website there was a challenge that the developer used a Pre-designed WordPress template for the website. Which wasn't the best solution for a creative agency. What I did is that I changed a lot of website designs to a new design entirely, Optimized frontend for both mobile and desktop environment, wrote content, and full SEO analysis and improvements.
              </p>
            </div>

            {/* Provided Services */}
            <div className="space-y-4">
              <h4 className="text-lg md:text-xl font-semibold text-foreground flex items-center gap-2">
                <span className="w-8 h-1 bg-gradient-to-r from-gradient-start to-gradient-end rounded-full"></span>
                Provided Services
              </h4>
              <ul className="grid grid-cols-2 gap-3">
                {services.map((service, index) => (
                  <li 
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-xl bg-background/50 border border-border/50 hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="p-2 rounded-lg bg-gradient-to-br from-gradient-start/20 to-gradient-end/20">
                      <service.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{service.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Link Button */}
            <Button 
              asChild 
              className="w-full sm:w-auto bg-gradient-to-r from-gradient-start to-gradient-end hover:opacity-90 transition-opacity"
            >
              <a href="https://tiyesolutions.com" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Visit Tiye Solutions
              </a>
            </Button>
          </div>

          {/* Right Column: Tabbed Gallery */}
          <div className="space-y-4">
            <Tabs defaultValue="big-service" className="w-full">
              <TabsList className="w-full grid grid-cols-1 bg-background/50 border border-border/50 rounded-xl p-1">
                <TabsTrigger 
                  value="big-service" 
                  className="rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-gradient-start data-[state=active]:to-gradient-end data-[state=active]:text-white"
                >
                  Big Service Page
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="big-service" className="mt-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {bigServicePageImages.map((image, index) => (
                    <Dialog key={index}>
                      <DialogTrigger asChild>
                        <button
                          className="relative aspect-video rounded-xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 group cursor-pointer"
                          onClick={() => setSelectedImage(image)}
                        >
                          <img
                            src={image}
                            alt={`Tiye Solutions screenshot ${index + 1}`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2">
                            <span className="text-white text-xs font-medium">View</span>
                          </div>
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl w-full p-2 bg-background/95 backdrop-blur-xl border-border">
                        <img
                          src={image}
                          alt={`Tiye Solutions screenshot ${index + 1}`}
                          className="w-full h-auto rounded-lg"
                        />
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};
