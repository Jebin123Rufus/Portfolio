'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Menu, X, Sparkles } from 'lucide-react';
import { soundFX } from '@/lib/soundEffects';

const NAV_ITEMS = [
  { label: 'HERO', href: '#hero' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'CONTACT', href: '#contact' },
];

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAudio = () => {
    const nextState = !audioEnabled;
    setAudioEnabled(nextState);
    soundFX.setEnabled(nextState);
    if (nextState) soundFX.playClick();
  };

  const handleNavClick = (href: string) => {
    soundFX.playClick();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-400 ${
        isScrolled
          ? 'py-3 bg-[#000000]/90 backdrop-blur-xl border-b border-rose-900/30 shadow-[0_10px_30px_rgba(0,0,0,0.9)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Identity Logo - Clean Name Only */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#hero');
          }}
          className="flex items-center group cursor-pointer"
        >
          <span className="font-mono text-base sm:text-lg font-extrabold tracking-widest text-slate-100 group-hover:text-rose-400 transition-colors flex items-center gap-2">
            RUFUZZ
            <Sparkles className="w-4 h-4 text-rose-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-1 glass-panel px-5 py-1.5 rounded-full border border-rose-900/30 shadow-lg">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              onMouseEnter={() => soundFX.playHover()}
              className="font-mono text-xs font-semibold text-slate-300 hover:text-rose-400 px-3.5 py-1.5 rounded transition-colors relative group"
            >
              <span>{item.label}</span>
              <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-rose-700 to-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 shadow-[0_0_8px_rgba(225,29,72,0.8)]" />
            </a>
          ))}
        </nav>

        {/* Controls */}
        <div className="hidden sm:flex items-center space-x-3">
          {/* Audio FX Toggle */}
          <button
            onClick={toggleAudio}
            onMouseEnter={() => soundFX.playHover()}
            title={audioEnabled ? 'Mute Audio FX' : 'Enable Audio FX'}
            className="flex items-center space-x-2 font-mono text-xs px-3.5 py-1.5 rounded-xl border border-rose-900/30 bg-[#0a0304] hover:border-rose-500 text-slate-200 hover:text-rose-300 transition-all cursor-pointer shadow-md"
          >
            {audioEnabled ? (
              <>
                <Volume2 className="w-4 h-4 text-emerald-400 animate-pulse" />
                <span className="text-emerald-400 font-bold tracking-wider">AUDIO ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-slate-500" />
                <span className="text-slate-400 tracking-wider">AUDIO OFF</span>
              </>
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center space-x-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#0a0304] border border-rose-900/30 text-rose-400"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="sm:hidden bg-[#000000] border-b border-rose-900/30 px-6 py-6 font-mono space-y-4 shadow-2xl"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="block text-sm text-slate-200 hover:text-rose-400 py-2 border-b border-rose-900/20 font-semibold tracking-wider"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
