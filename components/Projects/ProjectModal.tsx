'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/ui/BrandIcons';
import { ProjectItem } from '@/data/projectsData';
import { soundFX } from '@/lib/soundEffects';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            soundFX.playClick();
            onClose();
          }}
          className="fixed inset-0 bg-[#050103]/92 backdrop-blur-md overflow-hidden cursor-pointer"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-rose-950/25 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full border border-rose-900/15 pointer-events-none flex items-center justify-center">
            <div className="w-[380px] h-[380px] rounded-full border border-dashed border-rose-800/20" />
            <div className="absolute top-0 bottom-0 w-[1px] bg-rose-900/10" />
            <div className="absolute left-0 right-0 h-[1px] bg-rose-900/10" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl glass-panel tech-corner rounded-2xl border border-rose-900/40 p-6 sm:p-8 shadow-[0_0_60px_rgba(190,18,60,0.25)] z-10 my-auto text-slate-200 overflow-hidden"
        >
          <div className="flex items-center justify-between border-b border-rose-900/20 pb-4 mb-6">
            <div className="flex items-center space-x-3 font-mono text-xs text-rose-300">
              <span className="text-rose-400 font-bold">PROJ_{project.number}</span>
              <span>// ARCHITECTURE_INSPECTION</span>
            </div>
            <button
              onClick={() => {
                soundFX.playClick();
                onClose();
              }}
              aria-label="Close modal"
              className="p-2 rounded-lg bg-[#0e0305] border border-rose-900/30 text-slate-400 hover:text-rose-400 hover:border-rose-500 transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-6">
            <div className="relative h-48 sm:h-64 w-full rounded-xl overflow-hidden border border-rose-900/30 bg-[#040102]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className={project.imageFit === 'contain' ? 'object-contain p-4' : 'object-cover'}
                style={project.imageFit === 'contain' ? { objectPosition: 'center' } : { objectPosition: 'center 15%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent opacity-85 pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block font-mono text-xs text-rose-300 mb-1 px-3 py-1 rounded-md bg-rose-950/90 border border-rose-800/40 font-bold tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-2xl sm:text-4xl font-mono font-bold text-white tracking-wide">
                  {project.title}
                </h3>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-slate-300 font-sans text-xs sm:text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-[#080203] font-mono text-[11px] sm:text-xs text-slate-300 border border-rose-900/30 font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <span className="font-mono text-xs text-rose-200/70 uppercase tracking-widest block font-semibold">
                SYSTEM SPECIFICATIONS:
              </span>
              <ul className="space-y-2 font-mono text-xs sm:text-sm text-slate-300">
                {project.architectureDetails.map((detail, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5">
                    <span className="text-rose-400 font-bold">›</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-3 gap-3 font-mono text-xs">
              {project.metrics.map((m) => (
                <div key={m.label} className="p-3 rounded-xl bg-[#080203] border border-rose-900/20">
                  <span className="text-slate-400 block text-[10px] uppercase tracking-wider">{m.label}</span>
                  <span className="text-rose-300 font-bold text-sm sm:text-base">{m.value}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-end space-x-4 pt-4 border-t border-rose-900/20 font-mono text-xs">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="px-5 py-2.5 rounded-xl glass-panel border border-rose-900/30 hover:border-rose-500 text-slate-200 hover:text-rose-300 flex items-center space-x-2 transition-all font-bold tracking-wider"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GITHUB REPO</span>
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  onClick={(e) => {
                    if (project.demoUrl === '#') e.preventDefault();
                  }}
                  className="px-5 py-2.5 rounded-xl bg-rose-700 hover:bg-rose-600 text-white font-bold flex items-center space-x-2 transition-all shadow-[0_0_20px_rgba(190,18,60,0.5)] tracking-wider"
                >
                  <span>LIVE DEMO</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
