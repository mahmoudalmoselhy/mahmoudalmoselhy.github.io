import React from 'react';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { Awards } from '@/components/Awards';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CV = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-background/20 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Button variant="tonal-violet" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Portfolio
              </Button>
            </Link>
            <h1 className="text-2xl font-bold">Curriculum Vitae</h1>
            <div className="w-[120px]" /> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      {/* CV Content */}
      <main>
        <Experience />
        <Skills />
        <Awards />
      </main>
    </div>
  );
};

export default CV;