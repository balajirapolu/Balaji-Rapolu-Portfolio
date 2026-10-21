'use client';

import React, { useEffect, useRef, useState } from 'react';

export interface VaporTypeProps {
  words?: string[];
  className?: string;
  textColor?: string;
  vaporColor?: string;
  fontSize?: number;
  holdDuration?: number;
}

export function VaporType({
  words = [
    'WEB DEVELOPER',
    'FULL STACK ',
    'AI ENTHUSIAST',
    'CURIOUS',
    'ADAPTABLE BUILDER',
  ],
  className = '',
  textColor = '#FFFFFF',
  vaporColor = '#0080FF',
  fontSize = 64,
  holdDuration = 2200,
}: VaporTypeProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let isCancelled = false;

    // High DPI Canvas Scaling
    const updateCanvasSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    interface Particle {
      x: number;
      y: number;
      startX: number;
      startY: number;
      targetX: number;
      targetY: number;
      size: number;
      baseSize: number;
      alpha: number;
      maxAlpha: number;
      driftSpeedX: number;
      driftSpeedY: number;
      swayFreq: number;
    }

    let particles: Particle[] = [];
    let state: 'condense' | 'hold' | 'vaporize' = 'condense';
    let stateStartTime = performance.now();

    const currentWord = words[currentWordIndex];

    // Offscreen Canvas Point Sampler for sharp high-res particle placement
    const sampleTextPoints = (word: string, width: number, height: number): { x: number; y: number }[] => {
      const offCanvas = document.createElement('canvas');
      offCanvas.width = width;
      offCanvas.height = height;
      const offCtx = offCanvas.getContext('2d');
      if (!offCtx) return [];

      // Responsive Font Size logic
      let calculatedFontSize = fontSize;
      if (width < 640) {
        calculatedFontSize = Math.min(fontSize, Math.max(28, width * 0.08));
      } else if (width < 1024) {
        calculatedFontSize = Math.min(fontSize, Math.max(40, width * 0.075));
      } else {
        calculatedFontSize = Math.min(fontSize, width * 0.065);
      }

      offCtx.font = `900 ${calculatedFontSize}px Inter, system-ui, -apple-system, sans-serif`;
      offCtx.textAlign = 'center';
      offCtx.textBaseline = 'middle';
      offCtx.fillStyle = '#FFFFFF';
      offCtx.fillText(word, width / 2, height / 2);

      const imageData = offCtx.getImageData(0, 0, width, height);
      const data = imageData.data;
      const points: { x: number; y: number }[] = [];

      // Dynamic sampling step based on screen size for rich, voluminous particles
      const step = width < 640 ? 3 : 4;

      for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
          const index = (y * width + x) * 4;
          const alpha = data[index + 3];
          if (alpha > 128) {
            points.push({ x, y });
          }
        }
      }
      return points;
    };

    const initParticles = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      if (w === 0 || h === 0) return;

      const points = sampleTextPoints(currentWord, w, h);
      particles = points.map((p) => {
        // Dispersed start positions around text for condensation swirl
        const angle = Math.random() * Math.PI * 2;
        const dist = 50 + Math.random() * 120;
        const startX = p.x + Math.cos(angle) * dist;
        const startY = p.y + Math.sin(angle) * dist + 20;
        const baseSize = 2.0 + Math.random() * 2.2;

        return {
          x: startX,
          y: startY,
          startX,
          startY,
          targetX: p.x,
          targetY: p.y,
          size: baseSize,
          baseSize,
          alpha: 0,
          maxAlpha: 0.75 + Math.random() * 0.25,
          driftSpeedX: (Math.random() - 0.5) * 1.2,
          driftSpeedY: -1.2 - Math.random() * 1.8,
          swayFreq: 0.05 + Math.random() * 0.1,
        };
      });

      state = 'condense';
      stateStartTime = performance.now();
    };

    initParticles();

    const render = (now: number) => {
      if (isCancelled) return;
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      ctx.clearRect(0, 0, w, h);

      const elapsed = now - stateStartTime;

      if (state === 'condense') {
        const duration = 900; // ms
        const progress = Math.min(1, elapsed / duration);
        // Exponential ease out for satisfying vapor condensation
        const ease = 1 - Math.pow(1 - progress, 3);

        ctx.shadowBlur = 8;
        ctx.shadowColor = vaporColor;

        particles.forEach((p) => {
          p.x = p.startX + (p.targetX - p.startX) * ease;
          p.y = p.startY + (p.targetY - p.startY) * ease;
          p.alpha = ease * p.maxAlpha;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = textColor;
          ctx.globalAlpha = p.alpha;
          ctx.fill();
        });

        if (progress >= 1) {
          state = 'hold';
          stateStartTime = now;
        }
      } else if (state === 'hold') {
        // Hold state with subtle glowing pulse
        const pulse = 1 + Math.sin(now / 300) * 0.05;
        ctx.shadowBlur = 12;
        ctx.shadowColor = vaporColor;

        particles.forEach((p) => {
          ctx.beginPath();
          ctx.arc(p.targetX, p.targetY, p.size * pulse, 0, Math.PI * 2);
          ctx.fillStyle = textColor;
          ctx.globalAlpha = p.maxAlpha;
          ctx.fill();
        });

        if (elapsed >= holdDuration) {
          state = 'vaporize';
          stateStartTime = now;
        }
      } else if (state === 'vaporize') {
        const duration = 1200; // ms
        const progress = Math.min(1, elapsed / duration);

        ctx.shadowBlur = 16;
        ctx.shadowColor = vaporColor;

        particles.forEach((p, idx) => {
          p.x += p.driftSpeedX + Math.sin(now * 0.003 + idx) * 0.6;
          p.y += p.driftSpeedY;
          p.alpha = Math.max(0, p.maxAlpha * (1 - progress));
          p.size = p.baseSize * (1 + progress * 1.5); // Smoke expands as it drifts

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = vaporColor;
          ctx.globalAlpha = p.alpha;
          ctx.fill();
        });

        if (progress >= 1) {
          if (!isCancelled) {
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
          return;
        }
      }

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      isCancelled = true;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, [currentWordIndex, words, textColor, vaporColor, fontSize, holdDuration]);

  return (
    <div className={`relative w-full h-56 sm:h-72 md:h-80 flex items-center justify-center overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
      />
    </div>
  );
}

export default VaporType;

