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
    const handleScroll = () => {
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
    };

    window.addEventListener('scroll', handleScroll);
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
    <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-card/80 backdrop-blur-lg border-2 border-border rounded-full p-3 shadow-xl hover:scale-105 transition-all duration-300 hover:bg-card"
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Menu Items */}
      <div 
        className={`absolute left-0 top-16 transition-all duration-300 origin-top ${
          isOpen 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="bg-card/80 backdrop-blur-lg border-2 border-border rounded-3xl p-3 shadow-xl">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      handleClick(e, item.href);
                      setIsOpen(false);
                    }}
                    className={`group relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                      isActive
                        ? 'bg-primary text-primary-foreground scale-110'
                        : 'hover:bg-muted hover:scale-105'
                    }`}
                    title={item.label}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="absolute left-full ml-4 px-3 py-1.5 bg-card border border-border rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
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
