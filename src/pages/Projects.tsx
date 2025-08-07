import React, { useEffect, useMemo } from 'react';
import { PortfolioCard } from '@/components/portfolio/PortfolioCard';
import { portfolioSections } from '@/components/portfolio/portfolioData';

const isYouTubePlaylist = (link: string) =>
  link.includes('youtube.com/playlist') || link.includes('youtu.be/playlist');

const Projects = () => {
  const grouped = useMemo(() => {
    const all = portfolioSections
      .flatMap((section) => section.items.map((item) => ({ ...item, __section: section.title })))
      .filter((item) => !isYouTubePlaylist(item.link))
      .map((item: any) => {
        const sectionTitle = String(item.__section || '')
        let clientName: string | undefined = item.client

        if (!clientName) {
          try {
            const url = new URL(item.link)
            const host = url.hostname.replace(/^www\./, '')
            if (host === '3arrafni.com') clientName = '3arrafni'
            else if (host === 'androidworld9.com') clientName = 'Android World'
            else if (host === 'facebook.com') {
              const lowerLink = item.link.toLowerCase()
              const lowerSection = sectionTitle.toLowerCase()
              if (lowerLink.includes('menusbee') || lowerSection.includes('menusbee')) {
                clientName = 'Menus Bee (From facebook)'
              } else {
                clientName = 'Lecce (From facebook)'
              }
            } else {
              clientName = host.split('.')[0]
            }
          } catch {
            clientName = 'Other'
          }
        }

        const { __section, ...rest } = item
        return {
          ...rest,
          client: clientName || 'Other',
          // do not force thumbnails to logos; PortfolioCard will generate screenshots when missing
        }
      })

    return all.reduce<Record<string, any[]>>((acc, item) => {
      const key = item.client || 'Other'
      if (!acc[key]) acc[key] = []
      acc[key].push(item)
      return acc
    }, {})
  }, [])

  useEffect(() => {
    const title = 'Projects | Full Portfolio'
    document.title = title

    const desc = 'Explore all projects grouped by client with thumbnails and ages.'
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', desc)

    const canonicalHref = `${window.location.origin}/projects`
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', canonicalHref)
  }, [])

  const clients = useMemo(() => Object.keys(grouped).sort((a, b) => a.localeCompare(b)), [grouped])

  return (
    <main className="min-h-screen bg-background">
      <section className="max-w-6xl mx-auto px-4 py-10 md:py-14">
        <header className="text-center mb-6 md:mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-2">Projects</h1>
          <p className="text-muted-foreground text-sm md:text-base">Browse all projects grouped by client.</p>
        </header>

        <div className="space-y-10 md:space-y-14">
          {clients.map((client) => (
            <div key={client} aria-labelledby={`client-${client}`}>
              <h2 id={`client-${client}`} className="text-xl md:text-2xl font-semibold text-foreground mb-4 md:mb-6">
                {client}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {grouped[client].map((item, idx) => (
                  <PortfolioCard
                    key={`${client}-${idx}-${item.title}`}
                    title={item.title}
                    description={item.description}
                    link={item.link}
                    logo={item.logo}
                    thumbnail={item.thumbnail}
                    client={item.client}
                    date={item.date}
                    skills={item.skills}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Projects;
