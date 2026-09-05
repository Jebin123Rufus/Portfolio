'use client';

import React, { useEffect, useRef } from 'react';

const STAR_COLOR = '#ffffff';
const STAR_SIZE = 2.5;
const STAR_MIN_SCALE = 0.2;
const OVERFLOW_THRESHOLD = 50;

interface Star {
  x: number;
  y: number;
  z: number;
}

export const StarfieldBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    let scale = 1;
    let width = 0;
    let height = 0;
    let stars: Star[] = [];
    let pointerX: number | null = null;
    let pointerY: number | null = null;
    let velocity = { x: 0, y: 0, tx: 0, ty: 0, z: 0.0006 };
    let touchInput = false;
    let animationFrameId: number;

    function generate() {
      const starCount = Math.floor((window.innerWidth + window.innerHeight) / 6);
      stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: 0,
          y: 0,
          z: STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE),
        });
      }
    }

    function placeStar(star: Star) {
      star.x = Math.random() * width;
      star.y = Math.random() * height;
    }

    function recycleStar(star: Star) {
      let direction = 'z';
      let vx = Math.abs(velocity.x);
      let vy = Math.abs(velocity.y);

      if (vx > 1 || vy > 1) {
        let axis = vx > vy ? (Math.random() < vx / (vx + vy) ? 'h' : 'v') : (Math.random() < vy / (vx + vy) ? 'v' : 'h');
        if (axis === 'h') {
          direction = velocity.x > 0 ? 'l' : 'r';
        } else {
          direction = velocity.y > 0 ? 't' : 'b';
        }
      }

      star.z = STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE);

      if (direction === 'z') {
        star.z = 0.1;
        star.x = Math.random() * width;
        star.y = Math.random() * height;
      } else if (direction === 'l') {
        star.x = -OVERFLOW_THRESHOLD;
        star.y = height * Math.random();
      } else if (direction === 'r') {
        star.x = width + OVERFLOW_THRESHOLD;
        star.y = height * Math.random();
      } else if (direction === 't') {
        star.x = width * Math.random();
        star.y = -OVERFLOW_THRESHOLD;
      } else if (direction === 'b') {
        star.x = width * Math.random();
        star.y = height + OVERFLOW_THRESHOLD;
      }
    }

    function resize() {
      scale = window.devicePixelRatio || 1;
      width = window.innerWidth * scale;
      height = window.innerHeight * scale;

      if (!canvas) return;
      canvas.width = width;
      canvas.height = height;

      stars.forEach(placeStar);
    }

    function movePointer(x: number, y: number) {
      if (typeof pointerX === 'number' && typeof pointerY === 'number') {
        let ox = x - pointerX;
        let oy = y - pointerY;

        velocity.tx = velocity.tx + ((ox / 8) * scale) * (touchInput ? 1 : -1);
        velocity.ty = velocity.ty + ((oy / 8) * scale) * (touchInput ? 1 : -1);
      }

      pointerX = x;
      pointerY = y;
    }

    function onMouseMove(event: MouseEvent) {
      touchInput = false;
      movePointer(event.clientX, event.clientY);
    }

    function onTouchMove(event: TouchEvent) {
      touchInput = true;
      if (event.touches.length > 0) {
        movePointer(event.touches[0].clientX, event.touches[0].clientY);
      }
    }

    function onMouseLeave() {
      pointerX = null;
      pointerY = null;
    }

    function update() {
      velocity.tx *= 0.95;
      velocity.ty *= 0.95;

      velocity.x += (velocity.tx - velocity.x) * 0.7;
      velocity.y += (velocity.ty - velocity.y) * 0.7;

      stars.forEach((star) => {
        star.x += velocity.x * star.z;
        star.y += velocity.y * star.z;

        star.x += (star.x - width / 2) * velocity.z * star.z;
        star.y += (star.y - height / 2) * velocity.z * star.z;
        star.z += velocity.z;

        if (
          star.x < -OVERFLOW_THRESHOLD ||
          star.x > width + OVERFLOW_THRESHOLD ||
          star.y < -OVERFLOW_THRESHOLD ||
          star.y > height + OVERFLOW_THRESHOLD
        ) {
          recycleStar(star);
        }
      });
    }

    function render() {
      if (!context) return;
      
      // Fill canvas background with pure black
      context.fillStyle = '#000000';
      context.fillRect(0, 0, width, height);

      stars.forEach((star) => {
        context.beginPath();
        context.lineCap = 'round';
        context.lineWidth = STAR_SIZE * star.z * scale;
        context.globalAlpha = 0.6 + 0.4 * Math.random();
        context.strokeStyle = '#ffffff';
        context.fillStyle = '#ffffff';

        let tailX = velocity.x * 2.5;
        let tailY = velocity.y * 2.5;

        if (Math.abs(tailX) < 0.1) tailX = 0.6;
        if (Math.abs(tailY) < 0.1) tailY = 0.6;

        context.moveTo(star.x, star.y);
        context.lineTo(star.x + tailX, star.y + tailY);
        context.stroke();
      });
    }

    function step() {
      if (!context) return;
      update();
      render();
      animationFrameId = requestAnimationFrame(step);
    }

    generate();
    resize();
    step();

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('mouseleave', onMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 w-full h-full z-0 bg-[#000000]"
    />
  );
};
