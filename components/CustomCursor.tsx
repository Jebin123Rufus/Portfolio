'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export const CustomCursor: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (!cursorRef.current || !spotlightRef.current) return;

    // Apply custom SVG cursor to body as fallback
    document.body.style.cursor = 'none';

    const xTo = gsap.quickTo(cursorRef.current, 'x', { duration: 0.12, ease: 'power3.out' });
    const yTo = gsap.quickTo(cursorRef.current, 'y', { duration: 0.12, ease: 'power3.out' });

    const xSpotlightTo = gsap.quickTo(spotlightRef.current, 'x', { duration: 0.5, ease: 'power2.out' });
    const ySpotlightTo = gsap.quickTo(spotlightRef.current, 'y', { duration: 0.5, ease: 'power2.out' });

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);

      const { clientX, clientY } = e;

      xTo(clientX - 24);
      yTo(clientY - 24);

      xSpotlightTo(clientX - 250);
      ySpotlightTo(clientY - 250);

      const target = e.target as HTMLElement;
      if (target) {
        const interactive =
          target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') !== null ||
          target.closest('a') !== null ||
          target.getAttribute('role') === 'button' ||
          target.classList.contains('interactive');
        
        setIsHovered(!!interactive);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.body.style.cursor = 'auto';
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mounted, isVisible]);

  useEffect(() => {
    if (!cursorRef.current) return;

    if (isHovered) {
      gsap.to(cursorRef.current, {
        scale: 1.35,
        rotate: 45,
        duration: 0.25,
        ease: 'back.out(1.7)',
      });
    } else {
      gsap.to(cursorRef.current, {
        scale: 1,
        rotate: 0,
        duration: 0.25,
        ease: 'power2.out',
      });
    }
  }, [isHovered]);

  if (!mounted) return null;

  return (
    <>
      {/* Ambient Spotlight */}
      <div
        ref={spotlightRef}
        className={`pointer-events-none fixed top-0 left-0 w-[500px] h-[500px] rounded-full z-30 transition-opacity duration-700 hidden md:block ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: 'radial-gradient(circle, rgba(220, 38, 38, 0.08) 0%, transparent 70%)',
        }}
      />

      {/* User's Exact Custom SVG Scope Crosshair Cursor */}
      <div
        ref={cursorRef}
        className={`pointer-events-none fixed top-0 left-0 w-12 h-12 z-[9999] transition-opacity duration-200 hidden md:block ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          className="w-full h-full drop-shadow-[0_0_8px_rgba(220,38,38,0.8)]"
        >
          <g fill="none" stroke={isHovered ? "#ef4444" : "#ffffff"} strokeWidth="2">
            <circle cx="12" cy="12" r="8.5"></circle>
            <path d="M1 12h5M18 12h5M12 6V1.04M12 23v-4.96M11.95 11.95h.1v.1h-.1z"></path>
          </g>
        </svg>
      </div>
    </>
  );
};
