import React from 'react';
import { Home, User, Briefcase, Users, Mail, Menu, X } from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Home', href: '#home' },
  { icon: User, label: 'About', href: '#about' },
  { icon: Briefcase, label: 'Portfolio', href: '#portfolio' },
  { icon: Users, label: 'Clients', href: '#clients' },
  { icon: Mail, label: 'Contact', href: '#contact' },
];

export const FloatingNav = () => {
  const [activeSection, setActiveSection] = React.useState('home');
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (ticking) return;
      
      ticking = true;
      requestAnimationFrame(() => {
        const sections = navItems.map(item => item.href.substring(1));
        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section);
              break;
            }
          }
        }
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed left-4 top-4 z-50 hidden lg:block">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-card border border-border rounded-2xl p-3 shadow-m3-2 hover:shadow-m3-3 transition-all duration-200 ease-m3-standard state-layer"
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <X className="w-5 h-5 text-foreground" /> : <Menu className="w-5 h-5 text-foreground" />}
      </button>

      {/* Menu Items */}
      <div 
        className={`absolute left-0 top-14 transition-all duration-300 ease-m3-emphasized origin-top ${
          isOpen 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="bg-card border border-border rounded-2xl p-2 shadow-m3-3">
          <ul className="flex flex-col gap-1">
            {navItems.map((item, idx) => {
              const isActive = activeSection === item.href.substring(1);
              const activeColors = [
                'bg-rose text-white',
                'bg-blue text-white',
                'bg-violet text-white',
                'bg-emerald text-white',
                'bg-orange text-white',
              ];
              const hoverColors = [
                'hover:bg-rose/15 hover:text-rose',
                'hover:bg-blue/15 hover:text-blue',
                'hover:bg-violet/15 hover:text-violet',
                'hover:bg-emerald/15 hover:text-emerald',
                'hover:bg-orange/15 hover:text-orange',
              ];
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      handleClick(e, item.href);
                      setIsOpen(false);
                    }}
                    className={`group relative flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-300 ease-m3-standard ${
                      isActive
                        ? activeColors[idx % activeColors.length]
                        : `text-foreground ${hoverColors[idx % hoverColors.length]}`
                    }`}
                    title={item.label}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="absolute left-full ml-3 px-3 py-1.5 bg-card border border-border rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-m3-2">
                      {item.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
