import React from 'react';
import { Home, User, Briefcase, Award, Users, Mail, Menu, X, Code, Trophy } from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Home', href: '#home' },
  { icon: User, label: 'About', href: '#about' },
  { icon: Code, label: 'Experience', href: '#experience' },
  { icon: Award, label: 'Skills', href: '#skills' },
  { icon: Briefcase, label: 'Portfolio', href: '#portfolio' },
  { icon: Trophy, label: 'Awards', href: '#awards' },
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
    setIsOpen(false);
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-6 top-6 z-50 flex items-center justify-center w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-xl hover:scale-110 transition-all duration-300 hover:shadow-2xl"
        aria-label="Toggle Navigation Menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Navigation Menu */}
      <nav
        className={`fixed left-6 top-24 z-40 transition-all duration-500 ease-out ${
          isOpen
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 -translate-x-8 pointer-events-none'
        }`}
      >
        <div className="bg-card/95 backdrop-blur-xl border-2 border-border rounded-2xl p-4 shadow-2xl">
          <ul className="flex flex-col gap-3">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <li
                  key={item.href}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className={`group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                      isActive
                        ? 'bg-primary text-primary-foreground scale-105 shadow-md'
                        : 'hover:bg-muted hover:scale-102'
                    }`}
                  >
                    <item.icon className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm font-medium whitespace-nowrap">
                      {item.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 animate-fade-in"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};
