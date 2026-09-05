'use client';

import React, { useState, useEffect } from 'react';
import { BootSequence } from '@/components/BootSequence';
import { CustomCursor } from '@/components/CustomCursor';
import { Navigation } from '@/components/Navigation';
import { ScrollytellerNav } from '@/components/ScrollytellerNav';
import { HeroSection } from '@/components/Hero/HeroSection';
import { SkillMatrixSection } from '@/components/Skills/SkillMatrixSection';
import { ProjectsSection } from '@/components/Projects/ProjectsSection';
import { ContactSection } from '@/components/Contact/ContactSection';
import { StarfieldBackground } from '@/components/StarfieldBackground';

export default function Home() {
  const [bootCompleted, setBootCompleted] = useState(false);

  useEffect(() => {
    const hasBooted = sessionStorage.getItem('rufuzz_boot_completed');
    if (hasBooted) setBootCompleted(true);
  }, []);

  const handleBootComplete = () => {
    sessionStorage.setItem('rufuzz_boot_completed', 'true');
    setBootCompleted(true);
  };

  return (
    <main className="min-h-screen bg-transparent text-slate-100 relative overflow-hidden select-none">
      <StarfieldBackground />
      <div className="film-grain" />
      <div className="cinematic-vignette" />

      {!bootCompleted && <BootSequence onComplete={handleBootComplete} />}

      <CustomCursor />
      <Navigation />
      <ScrollytellerNav />

      <HeroSection />
      <SkillMatrixSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
