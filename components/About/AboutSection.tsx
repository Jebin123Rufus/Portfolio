'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Network, Terminal, Cpu, Binary, Crosshair } from 'lucide-react';
import { soundFX } from '@/lib/soundEffects';
import { Tilt3DCard } from '@/components/ui/Tilt3DCard';

const PILLARS = [
  {
    icon: ShieldCheck,
    title: 'Offensive & Defensive Security',
    subtitle: 'Vulnerability Analysis & Threat Vectors',
    description: 'Deconstructing web, network, and binary vulnerabilities with zero-trust posture.',
    accent: 'cyan',
  },
  {
    icon: Network,
    title: 'Low-Level Networking & Protocols',
    subtitle: 'OSI Architecture & Packet Capture',
    description: 'Parsing raw TCP/UDP sockets, Wireshark PCAPs, routing tables, and TLS frames.',
    accent: 'emerald',
  },
  {
    icon: Terminal,
    title: 'Linux Kernel & System Hardening',
    subtitle: 'POSIX Administration & Isolation',
    description: 'Hardened Linux distros, automated shell scripts, systemd, and cgroups isolation.',
    accent: 'cyan',
  },
  {
    icon: Cpu,
    title: 'Security Tooling & CLI Automation',
    subtitle: 'Python / Scapy / Bash / Linux',
    description: 'Engineering raw 802.11 packet sniffers (Deauth-Defense), pentest scripts, and system-wide Linux CLI utilities.',
    accent: 'emerald',
  },
  {
    icon: Binary,
    title: 'Threat Intelligence & Full-Stack',
    subtitle: 'React / Node.js / GROQ Llama 3.3 / NVD',
    description: 'Architecting stateless intelligence platforms (CitadelDB) integrating real-time CVE feeds, MITRE ATT&CK STIX, and AI triage.',
    accent: 'cyan',
  },
  {
    icon: Crosshair,
    title: 'Strategic Chess Thinking',
    subtitle: 'Multi-Move Calculation & Patterns',
    description: 'Applying grandmaster tactics—pattern recognition and attack graphs—to security.',
    accent: 'emerald',
  },
];

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-[#06070a] border-t border-slate-800/60 scanlines">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-3 mb-16 text-center"
        >
          <div className="inline-flex items-center space-x-2 font-mono text-xs text-cyan-400">
            <span className="text-emerald-400">[ 01 ]</span>
            <span>IDENT_PROFILE // VISUAL PILLARS</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black font-mono text-white tracking-tight uppercase">
            SKILL PILLARS &amp; ARCHITECTURE<span className="text-cyan-400">.</span>
          </h2>
          <p className="text-slate-400 font-sans max-w-xl mx-auto text-sm sm:text-base">
            Visual breakdown of core engineering capabilities and tactical focus areas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PILLARS.map((pillar, index) => {
            const Icon = pillar.icon;
            const isCyan = pillar.accent === 'cyan';

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Tilt3DCard
                  onMouseEnter={() => soundFX.playHover()}
                  className="glass-panel tech-corner p-6 rounded-2xl border border-cyan-500/20 shadow-[0_0_30px_rgba(0,240,255,0.1)] h-full flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all ${
                          isCyan
                            ? 'bg-cyan-500/10 border-cyan-500/40 text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                            : 'bg-emerald-500/10 border-emerald-500/40 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs text-slate-400 font-bold">0{index + 1}</span>
                    </div>

                    <h3 className="font-mono font-bold text-lg text-slate-100 mb-1">{pillar.title}</h3>
                    <p className="font-mono text-xs text-cyan-400 mb-3 tracking-wide font-medium">{pillar.subtitle}</p>
                    <p className="text-slate-300 font-sans text-xs sm:text-sm leading-relaxed">{pillar.description}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between font-mono text-[11px]">
                    <span className="text-slate-500">TELEMETRY:</span>
                    <span className={isCyan ? 'text-cyan-400 font-bold' : 'text-emerald-400 font-bold'}>
                      ACTIVE_READY
                    </span>
                  </div>
                </Tilt3DCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
