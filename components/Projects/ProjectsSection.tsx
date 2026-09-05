'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROJECTS_DATA, ProjectItem } from '@/data/projectsData';
import { ProjectModal } from './ProjectModal';
import { soundFX } from '@/lib/soundEffects';
import { ArrowRight, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const projectCount = PROJECTS_DATA.length;
  const activeProject = PROJECTS_DATA[activeIndex];

  const nextProject = useCallback(() => {
    soundFX.playClick();
    setActiveIndex((prev) => (prev + 1) % projectCount);
  }, [projectCount]);

  const prevProject = useCallback(() => {
    soundFX.playClick();
    setActiveIndex((prev) => (prev - 1 + projectCount) % projectCount);
  }, [projectCount]);

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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextProject();
      else if (e.key === 'ArrowLeft') prevProject();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextProject, prevProject]);

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -40) nextProject();
    else if (info.offset.x > 40) prevProject();
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-24 relative bg-transparent border-t border-rose-900/30 cinematic-grid select-none overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-rose-950/20 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={headerRef} className="space-y-3 mb-12 text-center">
          <h2 className="text-4xl sm:text-6xl font-black font-mono text-white tracking-tight uppercase">
            FEATURED PROJECTS<span className="text-rose-600">.</span>
          </h2>
        </div>

        <div className="relative min-h-[560px] sm:min-h-[600px] flex items-center justify-center max-w-6xl mx-auto">
          {projectCount > 1 && (
            <button
              onClick={prevProject}
              aria-label="Previous Project"
              className="absolute left-1 sm:left-2 z-50 p-3.5 rounded-full bg-rose-950/50 border border-rose-800/50 text-rose-300 hover:text-white hover:border-rose-500 transition-all cursor-pointer shadow-2xl backdrop-blur-md"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {projectCount > 1 && (
            <button
              onClick={nextProject}
              aria-label="Next Project"
              className="absolute right-1 sm:right-2 z-50 p-3.5 rounded-full bg-rose-950/50 border border-rose-800/50 text-rose-300 hover:text-white hover:border-rose-500 transition-all cursor-pointer shadow-2xl backdrop-blur-md"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            className="relative w-full h-full flex items-center justify-center touch-pan-y"
            style={{ perspective: 1200, transformStyle: 'preserve-3d' }}
          >
            {PROJECTS_DATA.map((project, index) => {
              let offset = index - activeIndex;
              if (offset < -Math.floor(projectCount / 2)) offset += projectCount;
              if (offset > Math.floor(projectCount / 2)) offset -= projectCount;

              const absOffset = Math.abs(offset);
              const isActive = offset === 0;

              if (absOffset > 2) return null;

              const isMobile = typeof window !== 'undefined' ? window.innerWidth < 640 : false;
              const xPos = offset * (isMobile ? 180 : 330);
              const rotateY = offset * -28;
              const rotateZ = offset * 2;
              const zDepth = -absOffset * 100;
              const scale = 1 - absOffset * 0.14;
              const zIndex = 40 - absOffset * 10;
              const opacity = isActive ? 1 : Math.max(0.35, 0.65 - absOffset * 0.12);

              return (
                <motion.div
                  key={project.id}
                  onClick={() => {
                    soundFX.playClick();
                    if (isActive) setSelectedProject(project);
                    else setActiveIndex(index);
                  }}
                  onMouseEnter={() => soundFX.playHover()}
                  animate={{
                    x: xPos,
                    z: zDepth,
                    y: isActive ? [0, -6, 0] : 0,
                    rotateY,
                    rotateZ,
                    zIndex,
                    opacity,
                    scale,
                  }}
                  whileHover={{ y: isActive ? -6 : -2 }}
                  transition={{
                    y: isActive
                      ? { duration: 4, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }
                      : { duration: 0.05, ease: 'easeOut' },
                    x: { duration: 0.05, ease: 'easeOut' },
                    z: { duration: 0.05, ease: 'easeOut' },
                    rotateY: { duration: 0.05, ease: 'easeOut' },
                    rotateZ: { duration: 0.05, ease: 'easeOut' },
                    opacity: { duration: 0.05, ease: 'easeOut' },
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                  className={`absolute w-[300px] sm:w-[560px] p-5 sm:p-7 rounded-2xl cursor-pointer flex flex-col justify-between overflow-hidden transition-colors duration-100 ${
                    isActive
                      ? 'glass-panel tech-corner border-2 border-rose-500 shadow-[0_0_40px_rgba(225,29,72,0.35)] bg-[#120407]/95 opacity-100 z-40'
                      : 'glass-panel border border-rose-900/30 bg-[#080204]/85 opacity-60 hover:opacity-90 hover:border-rose-700/50'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      initial={{ x: '-100%' }}
                      animate={{ x: '200%' }}
                      transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 1.2, ease: 'easeInOut' }}
                      className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-rose-500/15 to-transparent skew-x-12 pointer-events-none"
                    />
                  )}

                  {isActive && (
                    <>
                      <span className="absolute top-2 left-2 text-rose-500/80 font-mono text-[10px] font-bold select-none">+</span>
                      <span className="absolute top-2 right-2 text-rose-500/80 font-mono text-[10px] font-bold select-none">+</span>
                      <span className="absolute bottom-2 left-2 text-rose-500/80 font-mono text-[10px] font-bold select-none">+</span>
                      <span className="absolute bottom-2 right-2 text-rose-500/80 font-mono text-[10px] font-bold select-none">+</span>
                    </>
                  )}

                  <div className="flex items-center justify-between font-mono text-xs mb-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-rose-400 font-bold text-sm sm:text-base tracking-wider">PROJ_{project.number}</span>
                      <span className="text-slate-500">•</span>
                      <span className="text-slate-300 font-bold text-xs sm:text-sm">{project.category}</span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-md bg-[#050102] border border-rose-900/30 text-rose-400 font-bold text-[10px] sm:text-xs">
                      ● {project.status}
                    </span>
                  </div>

                  <div className="relative h-44 sm:h-60 w-full rounded-xl overflow-hidden mb-4 border border-rose-900/40 transition-colors shadow-xl bg-[#040102]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={project.imageFit === 'contain' ? 'object-contain p-3' : 'object-cover'}
                      style={project.imageFit === 'contain' ? { objectPosition: 'center' } : { objectPosition: 'center 15%' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent opacity-80 pointer-events-none" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-xs">
                      <span className="px-2.5 py-1 rounded-lg bg-black/85 backdrop-blur-md text-rose-300 border border-rose-800/40 font-bold text-[10px] sm:text-xs tracking-wider">
                        {project.subtitle}
                      </span>
                      {isActive && (
                        <div className="flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-rose-700 text-white font-bold text-xs shadow-lg">
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span>INSPECT</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <h3 className={`font-mono font-bold tracking-tight mb-2 ${isActive ? 'text-2xl sm:text-3xl text-white' : 'text-lg sm:text-xl text-slate-200'}`}>
                    {project.title}
                  </h3>

                  {isActive && (
                    <>
                      <p className="text-slate-300 font-sans text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2 sm:line-clamp-none">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 sm:py-1 rounded-lg bg-[#060203] font-mono text-[10px] sm:text-xs text-slate-300 border border-rose-900/20 font-semibold"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="pt-3 border-t border-rose-900/20 flex items-center justify-between font-mono text-xs">
                        <div className="flex items-center space-x-4">
                          {project.metrics[0] && (
                            <span className="text-slate-300 text-[11px] sm:text-xs">
                              {project.metrics[0].label}: <strong className="text-rose-400 font-bold">{project.metrics[0].value}</strong>
                            </span>
                          )}
                        </div>
                        <div className="flex items-center space-x-1.5 text-rose-400 font-bold text-xs sm:text-sm">
                          <span>INSPECT SPECIFICATIONS</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {projectCount > 1 && (
          <div className="flex justify-center items-center space-x-2.5 mt-8">
            {PROJECTS_DATA.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  soundFX.playClick();
                  setActiveIndex(idx);
                }}
                aria-label={`Go to project ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  idx === activeIndex
                    ? 'w-10 bg-rose-600 shadow-[0_0_12px_rgba(190,18,60,0.8)]'
                    : 'w-2.5 bg-slate-800 hover:bg-slate-700'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
