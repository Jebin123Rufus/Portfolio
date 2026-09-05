'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Film, CheckCircle2, Shield, Cpu, SkipForward, Sparkles } from 'lucide-react';
import { soundFX } from '@/lib/soundEffects';

interface BootSequenceProps {
  onComplete: () => void;
}

const BOOT_STEPS = [
  { text: 'Initialising Cinematic Studio Engine...', delay: 200, icon: Film },
  { text: 'Loading High-DPI Shading Pipeline ..... OK', delay: 500, icon: Cpu },
  { text: 'Calibrating Audio & Visual Telemetry .... OK', delay: 850, icon: Shield },
  { text: 'Establishing Zero-Trust Portfolios ...... OK', delay: 1200, icon: Sparkles },
  { text: 'STUDIO EXPERIENCE READY', delay: 1550, icon: CheckCircle2, isFinal: true },
];

export const BootSequence: React.FC<BootSequenceProps> = ({ onComplete }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(-1);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    soundFX.playBootSuccess();

    const timers: NodeJS.Timeout[] = [];
    BOOT_STEPS.forEach((step, idx) => {
      const timer = setTimeout(() => {
        setCurrentStepIndex(idx);
        soundFX.playClick();
        if (step.isFinal) {
          const finalTimer = setTimeout(() => {
            setIsFinished(true);
            setTimeout(onComplete, 400);
          }, 600);
          timers.push(finalTimer);
        }
      }, step.delay);
      timers.push(timer);
    });

    return () => timers.forEach((t) => clearTimeout(t));
  }, [onComplete]);

  const handleSkip = () => {
    setIsFinished(true);
    setTimeout(onComplete, 200);
  };

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#000000] cinematic-grid text-slate-200 select-none px-4"
        >
          {/* Filmic Ambient Vignette & Blood Red Glow */}
          <div className="absolute w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

          {/* Cinematic Container */}
          <motion.div
            initial={{ scale: 0.94, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="w-full max-w-lg glass-panel tech-corner p-6 md:p-8 rounded-2xl shadow-2xl relative border border-red-500/30"
          >
            {/* Header bar */}
            <div className="flex items-center justify-between border-b border-red-500/20 pb-4 mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-red-300/30" />
                <span className="ml-2 font-mono text-xs text-red-200/80 tracking-[0.2em] uppercase font-medium">
                  CINEMATIC STUDIO ENGINE
                </span>
              </div>
              <button
                onClick={handleSkip}
                className="flex items-center space-x-1 font-mono text-xs text-red-300/80 hover:text-red-300 hover:border-red-500/60 transition-all px-3 py-1 rounded-md bg-red-950/40 border border-red-500/30 cursor-pointer"
              >
                <span>SKIP</span>
                <SkipForward className="w-3 h-3 ml-1" />
              </button>
            </div>

            {/* Logs */}
            <div className="space-y-3.5 font-mono text-xs sm:text-sm min-h-[170px]">
              {BOOT_STEPS.map((step, idx) => {
                const IconComponent = step.icon;
                const isVisible = idx <= currentStepIndex;
                const isCurrent = idx === currentStepIndex;

                if (!isVisible) return null;

                return (
                  <motion.div
                    key={step.text}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25 }}
                    className={`flex items-center space-x-3 ${
                      step.isFinal
                        ? 'text-red-400 font-bold text-base pt-2'
                        : isCurrent
                        ? 'text-red-200'
                        : 'text-slate-400'
                    }`}
                  >
                    <IconComponent
                      className={`w-4 h-4 shrink-0 ${
                        step.isFinal ? 'text-red-400' : 'text-red-500/80'
                      }`}
                    />
                    <span className="tracking-wide">{step.text}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* Loading Bar */}
            <div className="mt-6 pt-4 border-t border-slate-800/80">
              <div className="flex justify-between items-center text-xs font-mono text-slate-400 mb-2">
                <span className="tracking-wider">STUDIO ENGINE INITIALIZING</span>
                <span className="text-red-400 font-bold">
                  {Math.min(100, Math.round(((currentStepIndex + 1) / BOOT_STEPS.length) * 100))}%
                </span>
              </div>
              <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800/80">
                <motion.div
                  className="h-full bg-gradient-to-r from-red-700 via-red-500 to-rose-400 shadow-[0_0_12px_rgba(239,68,68,0.7)]"
                  initial={{ width: '0%' }}
                  animate={{
                    width: `${((currentStepIndex + 1) / BOOT_STEPS.length) * 100}%`,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
