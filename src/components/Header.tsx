import React from 'react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Badge } from '@/components/ui/badge';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4">
      <nav className="max-w-6xl mx-auto flex items-center justify-between glass-nav rounded-2xl px-6 py-3">
        {/* Profile Info */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src="/lovable-uploads/504d32e0-6560-4ee8-938f-660d9a49b785.png"
              alt="Mahmoud AlMoselhy"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="font-semibold text-foreground">Mahmoud AlMoselhy</h1>
            <p className="text-sm text-muted-foreground">Content Team Leader & SEO Specialist</p>
          </div>
        </div>

        {/* Status and Theme */}
        <div className="flex items-center gap-3">
          <Badge className="status-badge">
            Available for work
          </Badge>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};