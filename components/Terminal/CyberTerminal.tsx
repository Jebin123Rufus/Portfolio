'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft } from 'lucide-react';
import { soundFX } from '@/lib/soundEffects';

interface TerminalLog {
  id: string;
  command?: string;
  output: React.ReactNode;
  type: 'input' | 'output' | 'system';
}

export const CyberTerminal: React.FC<{ isHeroEmbedded?: boolean }> = ({ isHeroEmbedded = false }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [logs, setLogs] = useState<TerminalLog[]>([]);

  const consoleContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (consoleContainerRef.current) {
      consoleContainerRef.current.scrollTop = consoleContainerRef.current.scrollHeight;
    }
  }, [logs]);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const cmd = inputVal.trim();
    if (!cmd) return;

    soundFX.playClick();
    const logId = `log-${Date.now()}`;
    setHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    const cleanCmd = cmd.toLowerCase();
    let responseOutput: React.ReactNode = null;

    switch (cleanCmd) {
      case 'help':
        responseOutput = (
          <div className="space-y-2 text-slate-200 font-mono text-xs">
            <div className="text-[#dc2626] font-bold flex items-center gap-2 border-b border-red-900/30 pb-1">
              <span>KALI LINUX SHELL COMMANDS:</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              <div><span className="text-sky-300 font-bold">whoami</span> — Current user identity</div>
              <div><span className="text-sky-300 font-bold">uname -a</span> — Kernel system information</div>
              <div><span className="text-[#dc2626] font-bold">ls</span> — List directory files</div>
              <div><span className="text-emerald-300 font-bold">cat &lt;file&gt;</span> — Read file contents</div>
              <div><span className="text-rose-500 font-bold">rufuzz</span> — Deauth-Defense CLI tool</div>
              <div><span className="text-amber-300 font-bold">chess</span> — Chess.com ELO stats</div>
              <div><span className="text-rose-400 font-bold">thm</span> — TryHackMe global &amp; India rank</div>
              <div><span className="text-slate-400 font-bold">clear</span> — Clear terminal output</div>
            </div>
          </div>
        );
        break;

      case 'whoami':
        responseOutput = (
          <div className="font-mono text-xs space-y-2 py-1 leading-relaxed">
            <div className="text-rose-400 font-bold border-b border-red-900/30 pb-1 flex items-center justify-between">
              <span>👤 IDENTITY // JEBIN RUFUS R [RUFUZZ]</span>
              <span className="text-sky-400 text-[10px]">0x01_AUTH</span>
            </div>
            <p className="text-slate-200">
              I&apos;m a <span className="text-[#dc2626] font-bold">software engineering student</span> focused on <span className="text-rose-400 font-bold">cybersecurity</span>, with a growing passion for <span className="text-sky-300 font-semibold">penetration testing</span> and <span className="text-sky-400 font-semibold">web application security</span>.
            </p>
            <p className="text-slate-300">
              I enjoy <span className="text-emerald-300 font-medium">understanding how systems work</span>, <span className="text-amber-300 font-medium">finding where they can be broken</span>, and <span className="text-emerald-400 font-bold">building tools that make them more secure</span>.
            </p>
            <p className="text-slate-300">
              Alongside cybersecurity, I work with <span className="text-sky-300 font-medium">full-stack development</span>, <span className="text-purple-300 font-medium">AI-integrated applications</span>, <span className="text-rose-300 font-medium">vulnerability research</span>, <span className="text-cyan-300 font-medium">threat intelligence</span>, and <span className="text-emerald-300 font-medium">Linux-based environments</span>, constantly learning through hands-on projects and practical security challenges.
            </p>
          </div>
        );
        break;

      case 'uname':
      case 'uname -a':
        responseOutput = (
          <div className="text-sky-300 font-mono text-xs">
            Linux kali 6.8.0-kali1-amd64 #1 SMP PREEMPT_DYNAMIC Kali 6.8.0-1 (2026) x86_64 GNU/Linux
          </div>
        );
        break;

      case 'ls':
      case 'ls -l':
      case 'ls -la':
        responseOutput = (
          <div className="text-slate-300 font-mono text-xs space-y-1">
            <div className="text-slate-500">total 32</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <span className="text-emerald-400 font-semibold">skills.txt</span>
              <span className="text-[#dc2626] font-semibold">projects.txt</span>
              <span className="text-amber-400 font-semibold">chess.txt</span>
              <span className="text-rose-400 font-semibold">thm.txt</span>
              <span className="text-slate-400 font-bold">contact.sh*</span>
            </div>
          </div>
        );
        break;

      case 'cat skills.txt':
        responseOutput = (
          <div className="text-slate-200 font-mono text-xs space-y-1">
            <div><strong className="text-[#dc2626]">Programming:</strong> Python, Java, JavaScript, TypeScript, Bash</div>
            <div><strong className="text-sky-400">Security &amp; Pentest:</strong> Nmap, Wireshark, Burp Suite, Metasploit, John the Ripper, Scapy, SIEM (Splunk, Elastic)</div>
            <div><strong className="text-emerald-400">Web &amp; AI:</strong> React.js, Node.js, Express.js, MongoDB, REST APIs, AI/LLM Security &amp; Integration</div>
            <div><strong className="text-amber-400">Systems &amp; Networks:</strong> Linux Administration, Virtual Networking, Packet Inspection, System Isolation</div>
          </div>
        );
        break;

      case 'cat projects.txt':
      case 'projects':
        responseOutput = (
          <div className="text-slate-200 font-mono text-xs space-y-1.5">
            <div className="text-rose-400 font-bold border-b border-red-900/30 pb-1">FEATURED SECURITY PROJECTS:</div>
            <div>01. <strong className="text-rose-400">CitadelDB</strong> — Stateless Cybersecurity Threat Intelligence Platform</div>
            <div>02. <strong className="text-sky-400">Deauth-Defense</strong> — Linux 802.11 Deauth/Disassociation Wi-Fi Defense CLI (`rufuzz`)</div>
          </div>
        );
        break;

      case 'rufuzz':
      case './rufuzz':
      case 'rufuzz --help':
      case 'deauth':
      case 'deauth-defense':
        responseOutput = (
          <div className="text-slate-200 font-mono text-xs space-y-1 py-1">
            <div className="text-emerald-400 font-bold flex items-center justify-between border-b border-red-900/30 pb-1">
              <span>🛡️ DEAUTH-DEFENSE [RUFUZZ CLI ENGINE]</span>
              <span className="text-sky-400">v1.0.0</span>
            </div>
            <div className="text-slate-300">usage: <span className="text-rose-400 font-bold">rufuzz</span> [--mode &#123;monitor|managed&#125;] [--interface IFACE]</div>
            <div className="text-slate-400 text-[11px] pt-1">
              • Monitor Mode: Direct 802.11 raw packet capture &amp; deauth frame detection<br />
              • Managed Mode: Connectivity disconnect anomaly monitoring fallback<br />
              • Incident Logging: logs/attacks.log | Defense action triggers
            </div>
            <div className="text-sky-300 text-[11px] pt-0.5">
              GitHub: <a href="https://github.com/Jebin123Rufus/Deauth-Defense" target="_blank" rel="noreferrer noopener" className="underline text-rose-400 hover:text-rose-300">github.com/Jebin123Rufus/Deauth-Defense</a>
            </div>
          </div>
        );
        break;

      case 'chess':
      case 'cat chess.txt':
      case 'elo':
        responseOutput = (
          <div className="text-slate-200 font-mono text-xs space-y-1 py-1">
            <div className="text-[#dc2626] font-bold border-b border-red-900/30 pb-1 flex items-center justify-between">
              <span>♟ CHESS.COM RATING TELEMETRY</span>
              <span className="text-slate-400">ID: RUFUZZ_123</span>
            </div>
            <div>Rapid Rating: <span className="text-amber-400 font-bold">1600+ ELO</span></div>
            <div>Blitz Rating: <span className="text-sky-400 font-bold">1200+ ELO</span></div>
          </div>
        );
        break;

      case 'thm':
      case 'cat thm.txt':
      case 'rank':
        responseOutput = (
          <div className="text-slate-200 font-mono text-xs space-y-1 py-1">
            <div className="text-[#dc2626] font-bold border-b border-red-900/30 pb-1 flex items-center justify-between">
              <span>🚩 TRYHACKME SECURITY RANKING</span>
              <span className="text-emerald-400 font-bold">0xD -&gt; LEGEND</span>
            </div>
            <div>Handle ID: <span className="text-amber-400 font-bold">jebinrufuz</span></div>
            <div>Global Rank: <span className="text-emerald-400 font-bold">Top 1%</span> (~19,000 Global)</div>
            <div>Regional Rank: <span className="text-sky-400 font-bold">India Top 2,600</span></div>
          </div>
        );
        break;

      case 'cat contact.sh':
      case './contact.sh':
        responseOutput = (
          <div className="text-slate-200 font-mono text-xs">
            Direct transmission endpoint ready. Scroll down to <span className="text-[#dc2626] font-bold">#contact</span> or email <span className="text-sky-400 font-bold">jebinrufuz@gmail.com</span> (GitHub: <span className="text-rose-400 font-bold">@Jebin123Rufus</span>).
          </div>
        );
        break;

      case 'cat':
        responseOutput = (
          <div className="text-rose-400 font-mono text-xs">
            cat: missing argument. Usage: cat &lt;file&gt;
          </div>
        );
        break;

      case 'uptime':
        responseOutput = (
          <div className="text-slate-300 font-mono text-xs">
            18:06:09 up 42 days, 14:22, 1 user, load average: 0.12, 0.08, 0.04
          </div>
        );
        break;

      case 'clear':
        setLogs([]);
        setInputVal('');
        return;

      default:
        responseOutput = (
          <div className="text-rose-400 font-mono text-xs">
            zsh: command not found: {cmd}. Type <span className="text-[#dc2626] underline cursor-pointer font-bold" onClick={() => setInputVal('help')}>help</span> or <span className="text-sky-400 underline cursor-pointer font-bold" onClick={() => setInputVal('ls')}>ls</span> for commands.
          </div>
        );
        break;
    }

    setLogs((prev) => [
      ...prev,
      { id: logId, type: 'input', command: cmd, output: responseOutput },
    ]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length === 0) return;
      const nextIdx = historyIndex + 1;
      if (nextIdx < history.length) {
        setHistoryIndex(nextIdx);
        setInputVal(history[history.length - 1 - nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(history[history.length - 1 - nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    }
  };

  return (
    <div className={`w-full glass-panel tech-corner rounded-2xl border border-red-900/40 shadow-[0_0_50px_rgba(185,28,28,0.2)] overflow-hidden select-text ${isHeroEmbedded ? '' : 'max-w-5xl mx-auto'}`}>
      <div className="flex items-center justify-between px-4 py-3 bg-[#0a0203]/95 border-b border-red-900/30 font-mono text-xs">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-600/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-slate-200 flex items-center space-x-2 font-bold">
            <TerminalIcon className="w-4 h-4 text-[#dc2626]" />
            <span className="text-sky-400">root@kali</span>
            <span className="text-slate-500">:</span>
            <span className="text-[#dc2626]">~/rufuzz</span>
          </span>
        </div>
        <div className="text-[10px] text-[#dc2626] flex items-center space-x-1.5 font-bold tracking-wider">
          <span className="w-2 h-2 rounded-full bg-[#dc2626] animate-ping" />
          <span>KALI ZSH</span>
        </div>
      </div>

      <div
        ref={consoleContainerRef}
        onClick={() => inputRef.current?.focus()}
        className={`p-4 sm:p-5 font-mono text-xs sm:text-sm overflow-y-auto space-y-3 bg-[#040102]/95 ${isHeroEmbedded ? 'h-[280px] sm:h-[340px]' : 'h-[380px] sm:h-[450px]'}`}
      >
        {logs.map((log) => (
          <div key={log.id} className="space-y-1">
            {log.type === 'input' && log.command && (
              <div className="space-y-0.5">
                <div className="text-sky-400 font-bold flex items-center gap-1">
                  <span>┌──(</span>
                  <span className="text-[#dc2626]">root㉿kali</span>
                  <span>)-[</span>
                  <span className="text-white">~/rufuzz</span>
                  <span>]</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-200 pl-1">
                  <span className="text-sky-400 font-bold">└─#</span>
                  <span className="font-bold text-[#dc2626]">{log.command}</span>
                </div>
              </div>
            )}
            <div className="pl-3 border-l-2 border-red-900/40 text-slate-200">
              {log.output}
            </div>
          </div>
        ))}

        <form onSubmit={handleCommandSubmit} className="space-y-0.5 pt-1">
          <div className="text-sky-400 font-bold flex items-center gap-1 text-xs sm:text-sm">
            <span>┌──(</span>
            <span className="text-[#dc2626]">root㉿kali</span>
            <span>)-[</span>
            <span className="text-white">~/rufuzz</span>
            <span>]</span>
          </div>
          <div className="flex items-center space-x-2 pl-1">
            <span className="text-sky-400 font-bold text-xs sm:text-sm shrink-0">└─#</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="type 'help' or 'ls'..."
              className="flex-1 bg-transparent text-red-200 focus:outline-none font-mono text-xs sm:text-sm placeholder:text-slate-600 font-semibold"
              aria-label="Terminal input"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck={false}
            />
            <button type="submit" className="text-slate-500 hover:text-[#dc2626] cursor-pointer" aria-label="Submit command">
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
