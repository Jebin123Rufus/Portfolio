'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, PanInfo } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SKILLS_DATA } from '@/data/skillsData';
import { soundFX } from '@/lib/soundEffects';
import {
  ChevronLeft,
  ChevronRight,
  Network,
  Route,
  Server,
  Terminal,
  Code,
  ShieldAlert,
  Crosshair,
  Lock,
  Key,
  FileCode,
  Globe,
  ShieldCheck,
  Binary,
  Layers,
  Database,
  BrainCircuit,
  Bug,
  Radar,
  ScanSearch,
  MonitorDot,
  TerminalSquare,
  Link,
  Bot,
  ServerCog,
} from 'lucide-react';
import {
  GithubIcon,
  PythonIcon,
  JavaIcon,
  JavaScriptIcon,
  ReactIcon,
  Html5Icon,
  Css3Icon,
  MongoDbIcon,
  GitIcon,
  ExpressIcon,
  WiresharkIcon,
  NmapIcon,
  BurpSuiteIcon,
  MetasploitIcon,
  ElasticIcon,
  SplunkIcon,
  JohnTheRipperIcon,
} from '@/components/ui/BrandIcons';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  // Lucide icons
  Network,
  Route,
  Server,
  Terminal,
  Code,
  ShieldAlert,
  Crosshair,
  Lock,
  Key,
  FileCode,
  Globe,
  ShieldCheck,
  Binary,
  Layers,
  Database,
  BrainCircuit,
  Bug,
  Radar,
  ScanSearch,
  MonitorDot,
  TerminalSquare,
  Link,
  Bot,
  ServerCog,
  // Brand icons
  GithubIcon,
  PythonIcon,
  JavaIcon,
  JavaScriptIcon,
  ReactIcon,
  Html5Icon,
  Css3Icon,
  MongoDbIcon,
  GitIcon,
  ExpressIcon,
  WiresharkIcon,
  NmapIcon,
  BurpSuiteIcon,
  MetasploitIcon,
  ElasticIcon,
  SplunkIcon,
  JohnTheRipperIcon,
};

const CATEGORIES = [
  'ALL',
  'NETWORKING',
  'LINUX',
  'CYBERSECURITY',
  'PROGRAMMING',
  'WEB DEVELOPMENT',
  'SYSTEMS',
  'TOOLS & VERSION CONTROL',
] as const;

export const SkillMatrixSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const filteredSkills = SKILLS_DATA.filter(
    (skill) => selectedCategory === 'ALL' || skill.category === selectedCategory
  );

  const skillCount = filteredSkills.length;

  const nextCard = useCallback(() => {
    soundFX.playClick();
    setActiveIndex((prev) => (prev + 1) % skillCount);
  }, [skillCount]);

  const prevCard = useCallback(() => {
    soundFX.playClick();
    setActiveIndex((prev) => (prev - 1 + skillCount) % skillCount);
  }, [skillCount]);

  // GSAP ScrollTrigger Entrance Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        nextCard();
      } else if (e.key === 'ArrowLeft') {
        prevCard();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextCard, prevCard]);

  const handleCategorySelect = (cat: string) => {
    soundFX.playClick();
    setSelectedCategory(cat);
    setActiveIndex(0);
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -40) {
      nextCard();
    } else if (info.offset.x > 40) {
      prevCard();
    }
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-24 relative bg-transparent border-t border-rose-900/30 cinematic-grid select-none overflow-hidden"
    >
      {/* Background ambient crimson lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-rose-950/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="space-y-3 mb-12 text-center">
          <h2 className="text-4xl sm:text-6xl font-black font-mono text-white tracking-tight uppercase">
            SKILL MATRIX<span className="text-rose-600">.</span>
          </h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12 font-mono text-xs">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => handleCategorySelect(cat)}
                className={`px-4 py-2 rounded-xl transition-all flex items-center space-x-2 cursor-pointer shadow-md ${
                  isActive
                    ? 'bg-rose-950/70 border border-rose-600 text-rose-200 shadow-[0_0_20px_rgba(190,18,60,0.4)] font-bold'
                    : 'bg-[#0a0304] border border-rose-900/30 text-slate-400 hover:text-slate-200 hover:border-rose-700/40'
                }`}
              >
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* 3D Stacked Coverflow Carousel */}
        <div className="relative h-[360px] sm:h-[400px] flex items-center justify-center max-w-5xl mx-auto">
          {/* Navigation Controls */}
          <button
            onClick={prevCard}
            aria-label="Previous Skill"
            className="absolute left-2 sm:left-6 z-40 p-3 rounded-full bg-rose-950/50 border border-rose-800/50 text-rose-300 hover:text-white hover:border-rose-500 transition-all cursor-pointer shadow-2xl backdrop-blur-md"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextCard}
            aria-label="Next Skill"
            className="absolute right-2 sm:right-6 z-40 p-3 rounded-full bg-rose-950/50 border border-rose-800/50 text-rose-300 hover:text-white hover:border-rose-500 transition-all cursor-pointer shadow-2xl backdrop-blur-md"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Cards Container with Drag gesture */}
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            className="relative w-full h-full flex items-center justify-center touch-pan-y"
            style={{ perspective: 1200, transformStyle: 'preserve-3d' }}
          >
            {filteredSkills.map((skill, index) => {
              const IconComponent = ICON_MAP[skill.iconName] || Layers;

              let offset = index - activeIndex;
              if (offset < -Math.floor(skillCount / 2)) offset += skillCount;
              if (offset > Math.floor(skillCount / 2)) offset -= skillCount;

              const absOffset = Math.abs(offset);
              const isActive = offset === 0;

              if (absOffset > 3) return null;

              const isMobile = typeof window !== 'undefined' ? window.innerWidth < 640 : false;
              const xPos = offset * (isMobile ? 130 : 190);
              const rotateY = offset * -32;
              const rotateZ = offset * 2.5;
              const zDepth = -absOffset * 85;
              const scale = 1 - absOffset * 0.12;
              const zIndex = 40 - absOffset * 10;
              const opacity = isActive ? 1 : Math.max(0.35, 0.65 - absOffset * 0.12);

              return (
                <motion.div
                  key={skill.id}
                  onClick={() => {
                    soundFX.playClick();
                    setActiveIndex(index);
                  }}
                  onMouseEnter={() => soundFX.playHover()}
                  animate={{
                    x: xPos,
                    z: zDepth,
                    y: isActive ? [0, -8, 0] : 0,
                    scale: isActive ? 1.15 : scale,
                    rotateY,
                    rotateZ,
                    zIndex,
                    opacity,
                  }}
                  whileHover={{
                    scale: isActive ? 1.18 : scale * 1.04,
                    y: isActive ? -12 : -4,
                  }}
                  whileTap={{ scale: 0.96 }}
                  transition={{
                    y: isActive
                      ? { duration: 3.5, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }
                      : { duration: 0.05, ease: 'easeOut' },
                    x: { duration: 0.05, ease: 'easeOut' },
                    z: { duration: 0.05, ease: 'easeOut' },
                    scale: { duration: 0.05, ease: 'easeOut' },
                    rotateY: { duration: 0.05, ease: 'easeOut' },
                    rotateZ: { duration: 0.05, ease: 'easeOut' },
                    opacity: { duration: 0.05, ease: 'easeOut' },
                  }}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                  className={`absolute w-56 sm:w-72 h-64 sm:h-80 p-6 rounded-2xl cursor-pointer flex flex-col items-center justify-center text-center overflow-hidden transition-colors duration-100 ${
                    isActive
                      ? 'glass-panel border-2 border-rose-500 shadow-[0_0_40px_rgba(225,29,72,0.35)] bg-[#120407]/95 opacity-100 z-40'
                      : 'glass-panel border border-rose-900/30 bg-[#080204]/85 opacity-60 hover:opacity-90 hover:border-rose-700/50'
                  }`}
                >
                  {/* Holographic Specular Scan Beam for Active Card */}
                  {isActive && (
                    <motion.div
                      initial={{ x: '-100%' }}
                      animate={{ x: '200%' }}
                      transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 1.2, ease: 'easeInOut' }}
                      className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-rose-500/15 to-transparent skew-x-12 pointer-events-none"
                    />
                  )}

                  {/* High-Tech Corner Reticles for Active Card */}
                  {isActive && (
                    <>
                      <span className="absolute top-2 left-2 text-rose-500/80 font-mono text-[10px] font-bold select-none">+</span>
                      <span className="absolute top-2 right-2 text-rose-500/80 font-mono text-[10px] font-bold select-none">+</span>
                      <span className="absolute bottom-2 left-2 text-rose-500/80 font-mono text-[10px] font-bold select-none">+</span>
                      <span className="absolute bottom-2 right-2 text-rose-500/80 font-mono text-[10px] font-bold select-none">+</span>
                    </>
                  )}

                  {/* Category Pill (Displayed only on Focused Card) */}
                  {isActive && (
                    <motion.span
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="font-mono text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full border mb-6 text-rose-300 bg-rose-950/80 border-rose-700/50 shadow-[0_0_12px_rgba(225,29,72,0.3)]"
                    >
                      {skill.category}
                    </motion.span>
                  )}

                  {/* Icon */}
                  <div
                    className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-br from-rose-900/50 to-red-950/40 border-2 border-rose-500 text-rose-200 shadow-[0_0_30px_rgba(225,29,72,0.5)] scale-105 mb-6'
                        : 'bg-[#0a0305] border border-rose-900/30 text-rose-400/90 shadow-lg'
                    }`}
                  >
                    <IconComponent className={`w-10 h-10 sm:w-12 sm:h-12 transition-transform duration-300 ${isActive ? 'scale-110 text-rose-300' : 'scale-100 text-slate-200'}`} />
                  </div>

                  {/* Skill Name (Displayed only on Focused Card) */}
                  {isActive && (
                    <motion.h3
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="font-mono font-bold text-base sm:text-lg tracking-wide text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                    >
                      {skill.name}
                    </motion.h3>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex justify-center items-center space-x-2.5 mt-8">
          {filteredSkills.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                soundFX.playClick();
                setActiveIndex(idx);
              }}
              aria-label={`Go to skill ${idx + 1}`}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                idx === activeIndex
                  ? 'w-8 bg-rose-600 shadow-[0_0_12px_rgba(190,18,60,0.8)]'
                  : 'w-2 bg-slate-800 hover:bg-slate-700'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
