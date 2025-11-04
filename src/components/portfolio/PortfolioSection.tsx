import React, { useState } from 'react';
import { YouTubePlaylistEmbed } from './YouTubePlaylistEmbed';
import { FacebookVideoEmbed } from './FacebookVideoEmbed';
import { FacebookPostEmbed } from './FacebookPostEmbed';
import { InstagramPostEmbed } from './InstagramPostEmbed';
import { LinkedInPostEmbed } from './LinkedInPostEmbed';
import { ImagePostEmbed } from './ImagePostEmbed';
import { DualLinkImagePost } from './DualLinkImagePost';
import { TripleLinkImagePost } from './TripleLinkImagePost';
import { PortfolioCard } from './PortfolioCard';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs';
interface PortfolioSectionItem {
  title: string;
  description: string;
  link?: string;
  logo: string;
  skills?: string[]; // optional skills for badges
  thumbnail?: string;
  client?: string;
  date?: string; // ISO date for age
  embed?: string;
  responsibilities?: string[];
  tag?: string;
  embedHeight?: number;
  embedWidth?: number;
  facebookLink?: string;
  instagramLink?: string;
  linkedinLink?: string;
}
interface PortfolioSectionProps {
  title: string;
  description: string;
  items: PortfolioSectionItem[];
  gridClassName?: string;
}
export const PortfolioSection = ({
  title,
  description,
  items,
  gridClassName = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
}: PortfolioSectionProps) => {
  const [activeTab, setActiveTab] = useState('');
  const isYouTubePlaylist = (link?: string) => link?.includes('youtube.com/playlist') || link?.includes('youtu.be/playlist');
  const getDefaultTags = (link: string, sectionTitle: string): string[] => {
    try {
      const host = new URL(link).hostname.replace(/^www\./, '');
      if (host === '3arrafni.com') return ['Web Design', 'Branding', 'Marketing'];
      if (host === 'androidworld9.com') return ['Web Design', 'Branding', 'Marketing'];
      if (host === 'facebook.com') {
        const lower = (sectionTitle + ' ' + link).toLowerCase();
        if (lower.includes('menusbee')) return ['Web Design', 'Branding', 'Marketing'];
        return ['Web Design', 'Branding', 'Marketing'];
      }
      return ['Web Design', 'Branding', 'Marketing'];
    } catch {
      return ['Web Design', 'Branding', 'Marketing'];
    }
  };

  // Map logos to client names
  const getClientName = (logo: string): string => {
    const logoMap: {
      [key: string]: string;
    } = {
      '/lovable-uploads/693924e3-2bc0-456b-8afe-d100ef0390f8.png': '3arrafni.com',
      '/lovable-uploads/e1d8ea68-6c79-4ca8-8729-ca7d400d103a.png': 'Android World',
      '/lovable-uploads/106b69a1-42a2-4bf5-9caa-e9f4a854f21a.png': 'ExVar',
      '/lovable-uploads/b53bf9e1-ad4a-433a-984c-7c8fb6a6187d.png': 'Revieology',
      '/lovable-uploads/c8892c9f-d780-4825-a3b1-b1e017d5bd62.png': 'Menusbee',
      '/lovable-uploads/684b33f4-7836-42a3-810a-395f2e74a0da.png': 'Lecce',
      '/lovable-uploads/evolveclinic.jpg': 'Evolve',
      '/lovable-uploads/Intellijoy.jpg': 'Intellijoy',
      '/lovable-uploads/DrAzzaIbrahim.jpg': 'Dr Azza Ibrahim',
      '/lovable-uploads/TBA.jpg': 'TBA',
      '/lovable-uploads/insta.jpg': 'Insta',
      '/lovable-uploads/66dec386-84b2-43af-b57b-a9919a4a9926.png': 'CMG',
      '/lovable-uploads/tiyeacademy.jpg': 'Tiye Academy',
      '/lovable-uploads/8cd0ad5b-d116-4da8-a678-fabadb04760b.png': 'Mega Kitchens',
      '/lovable-uploads/8d0694e8-3941-4769-8e2d-5f1c6e79bb8a.png': 'Cocobolo',
      '/lovable-uploads/8f31c28a-f551-44b9-9cc6-a8aed95e6fe4.png': 'Various Hub'
    };
    return logoMap[logo] || 'Other';
  };

  // Group items by client
  const groupItemsByClient = () => {
    const grouped: {
      [key: string]: PortfolioSectionItem[];
    } = {};
    items.forEach(item => {
      const clientName = getClientName(item.logo);
      if (!grouped[clientName]) {
        grouped[clientName] = [];
      }
      grouped[clientName].push({
        ...item,
        thumbnail: item.thumbnail || undefined,
        skills: item.skills && item.skills.length ? item.skills : getDefaultTags(item.link, title)
      });
    });
    return grouped;
  };
  const clientGroups = groupItemsByClient();
  const clientNames = Object.keys(clientGroups);

  // Set default active tab to first client
  React.useEffect(() => {
    if (clientNames.length > 0 && !activeTab) {
      setActiveTab(clientNames[0]);
    }
  }, [clientNames, activeTab]);
  // re-process Instagram embeds when tab changes
React.useEffect(() => {
  if ((window as any).instgrm && typeof (window as any).instgrm.Embeds?.process === "function") {
    (window as any).instgrm.Embeds.process();
  }
}, [activeTab]);

  const nonPlaylistItems = items.filter(item => !isYouTubePlaylist(item.link) && item.embed !== 'facebook-video' && item.embed !== 'facebook-post' && item.embed !== 'instagram-post' && item.embed !== 'linkedin-post' && item.embed !== 'image-post' && item.embed !== 'dual-link-post').map(item => ({
    ...item,
    thumbnail: item.thumbnail || undefined,
    // PortfolioCard will auto-screenshot when missing
    skills: item.skills && item.skills.length ? item.skills : getDefaultTags(item.link, title)
  }));
  const playlistItems = items.filter(item => isYouTubePlaylist(item.link));
  const facebookEmbeds = items.filter(item => item.embed === 'facebook-video');
  const facebookPosts = items.filter(item => item.embed === 'facebook-post');
  const instagramPosts = items.filter(item => item.embed === 'instagram-post');
  const linkedInPosts = items.filter(item => item.embed === 'linkedin-post');
  const imagePosts = items.filter(item => item.embed === 'image-post');
  const dualLinkPosts = items.filter(item => item.embed === 'dual-link-post');
  const gridCols = title.includes('Script Writing') ? 'grid-cols-1 lg:grid-cols-2' : gridClassName;
  return <section className="space-y-6 md:space-y-8 mb-16 md:mb-24 pb-8 md:pb-12 border-b border-border/20 last:border-b-0 last:mb-0 last:pb-0">
      <header className="text-center px-4">
        <h3 className="text-xl md:text-3xl font-bold text-foreground mb-2 md:mb-4">{title}</h3>
        <p className="text-muted-foreground text-sm md:text-lg">{description}</p>
      </header>
      
      <div className="w-full max-w-none">
        {title === 'Social Media Work' && clientNames.length > 1 ? <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="w-full mb-8">
              <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 bg-transparent p-0 w-full h-auto">
                {clientNames.map(clientName => <TabsTrigger key={clientName} value={clientName} className="text-xs sm:text-sm md:text-base font-medium px-4 md:px-6 py-2.5 md:py-3 rounded-xl bg-muted/50 border border-border/20 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg hover:bg-muted/70 transition-all duration-200 whitespace-nowrap text-center">
                    {clientName}
                  </TabsTrigger>)}
              </TabsList>
            </div>

            {clientNames.map(clientName => {
          const clientItems = clientGroups[clientName];
          const clientNonPlaylistItems = clientItems.filter(item => !isYouTubePlaylist(item.link) && item.embed !== 'facebook-video' && item.embed !== 'facebook-post' && item.embed !== 'instagram-post' && item.embed !== 'linkedin-post' && item.embed !== 'image-post' && item.embed !== 'dual-link-post' && item.embed !== 'triple-link-post');
          const clientPlaylistItems = clientItems.filter(item => isYouTubePlaylist(item.link));
          const clientFacebookEmbeds = clientItems.filter(item => item.embed === 'facebook-video');
          const clientFacebookPosts = clientItems.filter(item => item.embed === 'facebook-post');
          const clientInstagramPosts = clientItems.filter(item => item.embed === 'instagram-post');
          const clientLinkedInPosts = clientItems.filter(item => item.embed === 'linkedin-post');
          const clientImagePosts = clientItems.filter(item => item.embed === 'image-post');
          const clientDualLinkPosts = clientItems.filter(item => item.embed === 'dual-link-post');
          const clientTripleLinkPosts = clientItems.filter(item => item.embed === 'triple-link-post');
          return <TabsContent key={clientName} value={clientName}>
                  <div className={`grid ${gridCols} gap-4 md:gap-6`}>
                    {clientImagePosts.map((item, itemIndex) => <ImagePostEmbed key={`img-${itemIndex}-${item.title}`} title={item.title} description={item.description} thumbnail={item.thumbnail!} link={item.link!} logo={item.logo} />)}

                    {clientDualLinkPosts.map((item, itemIndex) => <DualLinkImagePost key={`dual-${itemIndex}-${item.title}`} title={item.title} description={item.description} thumbnail={item.thumbnail!} facebookLink={item.facebookLink!} instagramLink={item.instagramLink!} logo={item.logo} />)}

                    {clientTripleLinkPosts.map((item, itemIndex) => <TripleLinkImagePost key={`triple-${itemIndex}-${item.title}`} title={item.title} description={item.description} thumbnail={item.thumbnail!} facebookLink={item.facebookLink!} instagramLink={item.instagramLink!} linkedinLink={item.linkedinLink!} logo={item.logo} />)}

                    {clientLinkedInPosts.map((item, itemIndex) => <LinkedInPostEmbed key={`li-${itemIndex}-${item.title}`} title={item.title} iframeUrl={item.link!} logo={item.logo} tag={item.tag || 'LinkedIn'} height={item.embedHeight || 600} width={item.embedWidth || 504} />)}

                    {clientFacebookEmbeds.map((item, itemIndex) => <FacebookVideoEmbed key={`fb-${itemIndex}-${item.title}`} title={item.title} description={item.description} videoUrl={item.link!} logo={item.logo} responsibilities={item.responsibilities} />)}

                    {clientFacebookPosts.map((item, itemIndex) => <FacebookPostEmbed key={`fbpost-${itemIndex}-${item.title}`} title={item.title} iframeUrl={item.link!} logo={item.logo} tag={item.tag || 'Post'} />)}

                    {clientInstagramPosts.map((item, itemIndex) => <InstagramPostEmbed key={`igpost-${itemIndex}-${item.title}`} title={item.title} postUrl={item.link!} logo={item.logo} tag={item.tag || 'Post'} />)}

                    {clientNonPlaylistItems.map((item, itemIndex) => <PortfolioCard key={`card-${itemIndex}-${item.title}`} title={item.title} description={item.description} link={item.link!} logo={item.logo} thumbnail={item.thumbnail} client={item.client} date={item.date} skills={item.skills} />)}

                    {clientPlaylistItems.map((item, itemIndex) => <YouTubePlaylistEmbed key={`yt-${itemIndex}-${item.title}`} title={item.title} description={item.description} playlistUrl={item.link!} logo={item.logo} />)}
                  </div>
                </TabsContent>;
        })}
          </Tabs> : <div className={`grid ${gridCols} gap-4 md:gap-6`}>
            {title === 'Android World Articles' ? <>
                {nonPlaylistItems.map((item, itemIndex) => <a key={`awa-${itemIndex}-${item.title}`} href={item.link} target="_blank" rel="noopener noreferrer" className="group block overflow-hidden rounded-2xl border border-border bg-card hover:shadow-md transition-shadow duration-300">
                    <div className="relative w-full aspect-[16/9] overflow-hidden">
                      <img src={item.thumbnail || item.logo} alt={`${item.title} thumbnail`} loading="lazy" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
                    </div>
                    <div className="p-4">
                      <div className="flex flex-wrap gap-2 mb-2">
                        {(item.skills || []).map((tag, i) => <span key={i} className="text-[10px] md:text-xs px-2 py-1 bg-muted text-muted-foreground rounded-full">
                            {tag}
                          </span>)}
                      </div>
                      <h3 className="text-sm md:text-base font-semibold mb-1 text-foreground line-clamp-2">{item.title}</h3>
                      <p className="text-xs md:text-sm text-muted-foreground line-clamp-3">{item.description}</p>
                    </div>
                  </a>)}
              </> : <>
                {imagePosts.map((item, itemIndex) => <ImagePostEmbed key={`img-${itemIndex}-${item.title}`} title={item.title} description={item.description} thumbnail={item.thumbnail!} link={item.link!} logo={item.logo} />)}

                {dualLinkPosts.map((item, itemIndex) => <DualLinkImagePost key={`dual-${itemIndex}-${item.title}`} title={item.title} description={item.description} thumbnail={item.thumbnail!} facebookLink={item.facebookLink!} instagramLink={item.instagramLink!} logo={item.logo} />)}

                {facebookEmbeds.map((item, itemIndex) => <FacebookVideoEmbed key={`fb-${itemIndex}-${item.title}`} title={item.title} description={item.description} videoUrl={item.link!} logo={item.logo} responsibilities={item.responsibilities} />)}

                {linkedInPosts.map((item, itemIndex) => <LinkedInPostEmbed key={`li-${itemIndex}-${item.title}`} title={item.title} iframeUrl={item.link!} logo={item.logo} tag={item.tag || 'LinkedIn'} height={item.embedHeight || 600} width={item.embedWidth || 504} />)}

                {facebookPosts.map((item, itemIndex) => <FacebookPostEmbed key={`fbpost-${itemIndex}-${item.title}`} title={item.title} iframeUrl={item.link!} logo={item.logo} tag={item.tag || 'Post'} />)}

                {instagramPosts.map((item, itemIndex) => <InstagramPostEmbed key={`igpost-${itemIndex}-${item.title}`} title={item.title} postUrl={item.link!} logo={item.logo} tag={item.tag || 'Post'} />)}

                {nonPlaylistItems.map((item, itemIndex) => <PortfolioCard key={`card-${itemIndex}-${item.title}`} title={item.title} description={item.description} link={item.link!} logo={item.logo} thumbnail={item.thumbnail} client={item.client} date={item.date} skills={item.skills} />)}

                {playlistItems.map((item, itemIndex) => <YouTubePlaylistEmbed key={`yt-${itemIndex}-${item.title}`} title={item.title} description={item.description} playlistUrl={item.link!} logo={item.logo} />)}
              </>}
          </div>}
      </div>
    </section>;
};
