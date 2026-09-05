'use client';

import React from 'react';
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons';
import { soundFX } from '@/lib/soundEffects';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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

      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 relative bg-transparent border-t border-rose-900/30 cinematic-grid select-none overflow-hidden"
    >
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-t from-rose-950/20 via-red-950/5 to-transparent rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={headerRef} className="space-y-3 mb-12 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl sm:text-6xl font-black font-mono text-white tracking-tight uppercase">
            CONTACT &amp; CONNECT<span className="text-rose-600">.</span>
          </h2>
          <p className="text-slate-300 font-sans text-base sm:text-lg">
            Interested in collaborating on software engineering, cybersecurity research, or network systems? Get in touch via the channels below.
          </p>
        </div>

        <div ref={contentRef} className="max-w-xl mx-auto space-y-6">
          <div className="space-y-3.5 font-mono">
            <a
              href="https://github.com/Jebin123Rufus"
              target="_blank"
              rel="noreferrer noopener"
              onClick={() => soundFX.playClick()}
              onMouseEnter={() => soundFX.playHover()}
              className="w-full p-4.5 rounded-2xl glass-panel glass-panel-hover border border-rose-900/30 text-slate-100 hover:text-rose-300 flex items-center justify-between group transition-all shadow-md bg-[#0a0203]"
            >
              <div className="flex items-center space-x-3.5">
                <GithubIcon className="w-5 h-5 text-rose-400" />
                <span className="font-bold text-sm tracking-wider">GitHub // @Jebin123Rufus</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-rose-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            <a
              href="https://www.linkedin.com/in/jebinrufus"
              target="_blank"
              rel="noreferrer noopener"
              onClick={() => soundFX.playClick()}
              onMouseEnter={() => soundFX.playHover()}
              className="w-full p-4.5 rounded-2xl glass-panel glass-panel-hover border border-rose-900/30 text-slate-100 hover:text-rose-300 flex items-center justify-between group transition-all shadow-md bg-[#0a0203]"
            >
              <div className="flex items-center space-x-3.5">
                <LinkedinIcon className="w-5 h-5 text-rose-400" />
                <span className="font-bold text-sm tracking-wider">LinkedIn // jebinrufus</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-rose-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            <a
              href="mailto:jebinrufuz@gmail.com"
              onClick={() => soundFX.playClick()}
              onMouseEnter={() => soundFX.playHover()}
              className="w-full p-4.5 rounded-2xl glass-panel glass-panel-hover border border-rose-900/30 text-slate-100 hover:text-rose-300 flex items-center justify-between group transition-all shadow-md bg-[#0a0203]"
            >
              <div className="flex items-center space-x-3.5">
                <Mail className="w-5 h-5 text-rose-400 shrink-0" />
                <span className="font-bold text-sm tracking-wider font-mono">Email // jebinrufuz@gmail.com</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-rose-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          <div className="p-6 rounded-2xl bg-[#080203] border border-rose-900/20 font-mono text-xs space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-rose-900/20 pb-3 text-slate-400">
              <span className="tracking-wider flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>AVAILABILITY STATUS</span>
              </span>
              <span className="text-rose-400 font-bold">OPEN FOR COLLABORATION</span>
            </div>
            <div className="grid grid-cols-2 gap-3.5 text-slate-300">
              <div>ROLE: <span className="text-rose-300 font-bold">Software Engineer</span></div>
              <div>LOCATION: <span className="text-rose-300 font-bold">Remote / On-Site</span></div>
              <div>RESPONSE: <span className="text-rose-400 font-bold">&lt; 24 Hours</span></div>
              <div>SECURITY: <span className="text-rose-400 font-bold">Encrypted Channels</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
