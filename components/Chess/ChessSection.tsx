'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Chess } from 'chess.js';
import { CHESS_PUZZLES, CHESS_PARALLELS } from '@/data/chessPuzzles';
import { soundFX } from '@/lib/soundEffects';
import { Shield, Brain, RefreshCw, HelpCircle } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const ChessSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const [activePuzzleIndex, setActivePuzzleIndex] = useState<number>(0);
  const currentPuzzle = CHESS_PUZZLES[activePuzzleIndex];
  const [game, setGame] = useState(() => new Chess(currentPuzzle.fen));
  const [selectedSquare, setSelectedSquare] = useState<string | null>(null);
  const [puzzleSolved, setPuzzleSolved] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string>('Select a piece to make your tactical move.');
  const [showHint, setShowHint] = useState<boolean>(false);

  // GSAP ScrollTrigger Entrance
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

  const resetPuzzle = (index = activePuzzleIndex) => {
    soundFX.playClick();
    const p = CHESS_PUZZLES[index];
    setActivePuzzleIndex(index);
    setGame(new Chess(p.fen));
    setSelectedSquare(null);
    setPuzzleSolved(false);
    setShowHint(false);
    setStatusMessage('Puzzle reset. Make your move!');
  };

  const handleSquareClick = (square: string) => {
    soundFX.playClick();

    if (puzzleSolved) return;

    if (!selectedSquare) {
      const piece = game.get(square as any);
      if (piece && piece.color === currentPuzzle.turn) {
        setSelectedSquare(square);
        setStatusMessage(`Selected ${square.toUpperCase()}. Choose destination square.`);
      } else {
        setStatusMessage('Select your own piece.');
      }
    } else {
      try {
        const move = game.move({
          from: selectedSquare,
          to: square,
          promotion: 'q',
        });

        if (move) {
          const isCorrect =
            selectedSquare === currentPuzzle.solutionMove.from &&
            square === currentPuzzle.solutionMove.to;

          if (isCorrect) {
            setPuzzleSolved(true);
            setStatusMessage('CORRECT MOVE! Tactical objective achieved.');
            soundFX.playBootSuccess();
          } else {
            setStatusMessage('Incorrect tactical line. Resetting puzzle state...');
            setTimeout(() => {
              setGame(new Chess(currentPuzzle.fen));
              setSelectedSquare(null);
            }, 1200);
          }
        }
      } catch {
        setStatusMessage('Invalid chess move.');
      }
      setSelectedSquare(null);
    }
  };

  const boardRepresentation = game.board();

  return (
    <section
      ref={sectionRef}
      id="chess"
      className="py-24 relative bg-[#050608] border-t border-amber-500/20 cinematic-grid select-none overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-amber-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="space-y-3 mb-16 text-left">
          <div className="inline-flex items-center space-x-2 font-mono text-xs text-amber-300">
            <span className="text-amber-400 font-bold">[ 05 ]</span>
            <span className="tracking-widest uppercase font-semibold">TACTICS // CHESS & SYSTEMS STRATEGY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-mono text-white tracking-tight uppercase">
            CHESS & SECURITY PARALLELS<span className="text-amber-400">.</span>
          </h2>
          <p className="text-slate-400 font-sans max-w-2xl text-base">
            Grandmaster chess and software security share identical core principles: multi-move calculation, pattern recognition, defense-in-depth, and decisive threat execution.
          </p>
        </div>

        {/* Top Puzzle Selector */}
        <div className="flex flex-wrap gap-3 mb-8 font-mono text-xs">
          {CHESS_PUZZLES.map((puzzle, idx) => (
            <button
              key={puzzle.id}
              onClick={() => resetPuzzle(idx)}
              className={`px-4 py-2.5 rounded-xl transition-all cursor-pointer shadow-md ${
                activePuzzleIndex === idx
                  ? 'bg-amber-500/25 border border-amber-400 text-amber-300 font-bold shadow-[0_0_20px_rgba(245,158,11,0.3)]'
                  : 'bg-[#0a0c12] border border-amber-500/20 text-slate-400 hover:text-slate-200 hover:border-amber-500/40'
              }`}
            >
              {puzzle.title}
            </button>
          ))}
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Chess Board */}
          <div className="lg:col-span-6 glass-panel tech-corner p-6 rounded-2xl border border-amber-500/30 shadow-[0_0_40px_rgba(245,158,11,0.15)] bg-[#0c0e17]/95">
            <div className="flex items-center justify-between font-mono text-xs border-b border-amber-500/20 pb-3 mb-4">
              <span className="text-amber-300 font-bold flex items-center space-x-2">
                <Brain className="w-4 h-4 text-amber-400" />
                <span>{currentPuzzle.title}</span>
              </span>
              <span className="text-slate-400 font-bold">TURN: WHITE TO MOVE</span>
            </div>

            {/* Chess Board 8x8 */}
            <div className="aspect-square w-full max-w-[420px] mx-auto grid grid-cols-8 grid-rows-8 border-2 border-amber-500/30 rounded-xl overflow-hidden shadow-2xl mb-4">
              {boardRepresentation.map((row, rIdx) =>
                row.map((square, cIdx) => {
                  const file = String.fromCharCode(97 + cIdx);
                  const rank = 8 - rIdx;
                  const sqName = `${file}${rank}`;
                  const isDark = (rIdx + cIdx) % 2 === 1;
                  const isSelected = selectedSquare === sqName;

                  const pieceSymbol = square
                    ? {
                        p: '♟',
                        r: '♜',
                        n: '♞',
                        b: '♝',
                        q: '♛',
                        k: '♚',
                        P: '♙',
                        R: '♖',
                        N: '♘',
                        B: '♗',
                        Q: '♕',
                        K: '♔',
                      }[square.type.toUpperCase() === square.type ? square.type.toUpperCase() : square.type] || ''
                    : '';

                  return (
                    <button
                      key={sqName}
                      onClick={() => handleSquareClick(sqName)}
                      className={`relative flex items-center justify-center font-bold text-2xl sm:text-3xl transition-colors cursor-pointer ${
                        isSelected
                          ? 'bg-amber-500/50 shadow-inner'
                          : isDark
                          ? 'bg-[#080910] text-slate-100 hover:bg-[#121422]'
                          : 'bg-[#181b2a] text-slate-200 hover:bg-[#202538]'
                      }`}
                    >
                      <span className={square?.color === 'w' ? 'text-amber-300 drop-shadow-[0_0_8px_rgba(245,158,11,0.7)]' : 'text-slate-400'}>
                        {pieceSymbol}
                      </span>

                      {cIdx === 0 && (
                        <span className="absolute top-0.5 left-1 text-[9px] font-mono opacity-40">
                          {rank}
                        </span>
                      )}
                      {rIdx === 7 && (
                        <span className="absolute bottom-0.5 right-1 text-[9px] font-mono opacity-40">
                          {file}
                        </span>
                      )}
                    </button>
                  );
                })
              )}
            </div>

            {/* Tactical Feedback */}
            <div className="space-y-3 font-mono text-xs">
              <div
                className={`p-3 rounded-xl border text-center font-bold transition-all ${
                  puzzleSolved
                    ? 'bg-amber-500/25 border-amber-400 text-amber-200 shadow-[0_0_20px_rgba(245,158,11,0.4)]'
                    : 'bg-[#06070b] border-amber-500/20 text-slate-300'
                }`}
              >
                {statusMessage}
              </div>

              <div className="flex items-center justify-between">
                <button
                  onClick={() => setShowHint(!showHint)}
                  className="flex items-center space-x-1 text-amber-400 hover:underline"
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>{showHint ? 'HIDE HINT' : 'TACTICAL HINT'}</span>
                </button>

                <button
                  onClick={() => resetPuzzle()}
                  className="flex items-center space-x-1 text-slate-400 hover:text-amber-300 transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>RESET</span>
                </button>
              </div>

              {showHint && (
                <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-500/30 text-amber-300 text-[11px] leading-relaxed">
                  💡 {currentPuzzle.hint}
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Strategic Parallels */}
          <div className="lg:col-span-6 space-y-4">
            {CHESS_PARALLELS.map((parallel) => (
              <div
                key={parallel.title}
                className="glass-panel tech-corner p-5 rounded-2xl border border-amber-500/20 hover:border-amber-500/40 transition-all space-y-2.5 bg-[#090b12]/90"
              >
                <h4 className="font-mono font-bold text-base text-amber-300 flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-amber-400" />
                  <span>{parallel.title}</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
                  <div className="p-3 rounded-xl bg-[#06070c] border border-amber-500/15">
                    <span className="font-mono text-[10px] text-slate-400 block uppercase font-semibold">CHESS MOTIF</span>
                    <p className="text-slate-300 font-sans mt-0.5">{parallel.chessConcept}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-[#06070c] border border-amber-500/30">
                    <span className="font-mono text-[10px] text-amber-400 block uppercase font-semibold">SYSTEMS & SECURITY</span>
                    <p className="text-slate-300 font-sans mt-0.5">{parallel.systemsConcept}</p>
                  </div>
                </div>
                <blockquote className="font-mono text-[11px] text-amber-300/90 italic pt-1 border-t border-amber-500/15">
                  "{parallel.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
