'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { soundFX } from '@/lib/soundEffects';

const SECTIONS = [
  { id: 'hero', label: '01 // HERO' },
  { id: 'skills', label: '02 // SKILL MATRIX' },
  { id: 'projects', label: '03 // PROJECTS' },
  { id: 'terminal', label: '04 // KALI LAB' },
  { id: 'contact', label: '05 // TRANSMISSION' },
];

export const ScrollytellerNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      const sectionElements = SECTIONS.map((sec) => ({
        id: sec.id,
        el: document.getElementById(sec.id),
      }));

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { id, el } = sectionElements[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    soundFX.playClick();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end space-y-4 select-none font-mono">
      {/* Scroll Progress Bar Track */}
      <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-red-950/40 rounded-full -z-10">
        <motion.div
          className="w-full bg-gradient-to-b from-red-600 via-rose-500 to-red-400 rounded-full shadow-[0_0_10px_rgba(220,38,38,0.8)]"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>

      {/* Chapter Nodes */}
      {SECTIONS.map((sec) => {
        const isActive = activeSection === sec.id;
        return (
          <button
            key={sec.id}
            onClick={() => scrollToSection(sec.id)}
            onMouseEnter={() => soundFX.playHover()}
            className="flex items-center space-x-3 group cursor-pointer text-right pr-4"
          >
            <span
              className={`text-[10px] tracking-widest transition-all duration-300 ${
                isActive
                  ? 'text-red-400 font-extrabold translate-x-0 opacity-100 drop-shadow-[0_0_8px_rgba(220,38,38,0.6)]'
                  : 'text-slate-500 font-semibold opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2'
              }`}
            >
              {sec.label}
            </span>
            <div
              className={`rounded-full transition-all duration-300 ${
                isActive
                  ? 'w-3.5 h-3.5 bg-red-600 border-2 border-white shadow-[0_0_12px_rgba(220,38,38,0.9)] scale-125'
                  : 'w-2 h-2 bg-slate-700 group-hover:bg-red-400'
              }`}
            />
          </button>
        );
      })}
    </div>
  );
};
