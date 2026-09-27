'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function SignatureIntro() {
  const [phase, setPhase] = useState<'signature' | 'done'>('signature');
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Phase 1: Pure white signature drawing animation (0s -> 1.8s)
    const t1 = setTimeout(() => {
      setPhase('done');
    }, 1800);

    // Phase 2: Unmount preloader overlay
    const t2 = setTimeout(() => {
      setHidden(true);
    }, 2500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#0D1526] flex flex-col items-center justify-center transition-all duration-700 ${
        phase === 'done' ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
    >
      {/* Signature Container Spanning Viewport Width */}
      <div className="relative w-[85vw] max-w-4xl h-40 sm:h-60 md:h-72 flex items-center justify-center">
        <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
          {/* Pure White Signature Image on Dark Background (No Yellow Glow) */}
          <Image
            src="/images/balaji-signature.png"
            alt="Balaji Rapolu Signature"
            fill
            priority
            className="object-contain filter invert contrast-200 brightness-200"
          />
          {/* Mask sweep revealing signature cleanly from left to right */}
          <div className="absolute inset-0 bg-[#0D1526] animate-[#0D1526] animate-signatureSweep" />
        </div>
      </div>

      {/* Clean White Monospace Subtext */}
      <div className="font-mono-tech text-xs text-[#E7E9EE] tracking-[0.25em] uppercase mt-6 font-semibold">
        BALAJI RAPOLU
      </div>

      {/* Pure CSS Sweep Animation */}
      <style jsx>{`
        @keyframes signatureSweep {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-signatureSweep {
          animation: signatureSweep 1.6s cubic-bezier(0.65, 0, 0.35, 1) forwards;
        }
      `}</style>
    </div>
  );
}
