'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { soundFX } from '@/lib/soundEffects';
import { CyberTerminal } from '@/components/Terminal/CyberTerminal';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const terminalWrapperRef = useRef<HTMLDivElement>(null);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, 120]);
  const opacityParallax = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      setMousePos({
        x: (e.clientX / innerWidth - 0.5) * 20,
        y: (e.clientY / innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.fromTo(
        titleRef.current,
        { y: 60, opacity: 0, filter: 'blur(10px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.1, delay: 0.2 }
      )
        .fromTo(subtitleRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.6')
        .fromTo(ctaRef.current, { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.4')
        .fromTo(
          terminalWrapperRef.current,
          { scale: 0.9, opacity: 0, rotateY: 15 },
          { scale: 1, opacity: 1, rotateY: 0, duration: 1 },
          '-=0.8'
        );

      gsap.to(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
        scale: 0.96,
        opacity: 0.6,
        filter: 'blur(4px)',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleScrollToSection = (id: string) => {
    soundFX.playClick();
    const target = document.querySelector(id);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden cinematic-grid select-none bg-transparent"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: mousePos.x * 0.8, y: mousePos.y * 0.8 }}
          transition={{ type: 'spring', damping: 30, stiffness: 100 }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#800000]/20 via-[#990000]/10 to-transparent rounded-full blur-[180px]"
        />
      </div>

      <motion.div
        style={{ y: yParallax, opacity: opacityParallax }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center my-auto"
      >
        <div className="lg:col-span-6 space-y-6 text-left">
          <div className="space-y-3">
            <h1
              ref={titleRef}
              className="text-5xl sm:text-7xl lg:text-8xl font-black font-mono tracking-tight text-white uppercase drop-shadow-[0_0_40px_rgba(220,38,38,0.5)] leading-none"
            >
              JEBIN RUFUS R<span className="text-[#dc2626]">.</span>
            </h1>
            <div
              ref={subtitleRef}
              className="flex items-center space-x-3 text-lg sm:text-2xl font-mono text-red-gradient font-bold tracking-wider"
            >
              <span className="text-[#dc2626]">SOFTWARE ENGINEER</span>
              <span className="text-[#990000]">•</span>
              <span className="text-[#dc2626]">CYBERSECURITY</span>
            </div>
          </div>

          <p className="text-slate-300 font-sans text-base sm:text-lg max-w-xl leading-relaxed">
            Software engineering student focused on cybersecurity, penetration testing, and web application security — deconstructing systems to build stronger defenses, full-stack platforms, and AI-driven security tools.
          </p>
        </div>

        <div ref={terminalWrapperRef} className="lg:col-span-6 flex items-center justify-center">
          <div className="w-full">
            <CyberTerminal isHeroEmbedded />
          </div>
        </div>
      </motion.div>

      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 cursor-pointer z-20"
        onClick={() => handleScrollToSection('#skills')}
      >
        <span className="font-mono text-[10px] text-red-400/80 tracking-widest uppercase">SCROLL FOR STORY</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ArrowDown className="w-4 h-4 text-[#dc2626]" />
        </motion.div>
      </div>
    </section>
  );
};
