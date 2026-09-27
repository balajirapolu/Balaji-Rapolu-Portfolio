'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Terminal, Copy, Check } from 'lucide-react';

export default function ImmersiveHero() {
  const [copied, setCopied] = useState(false);

  const openCmdPalette = () => {
    window.dispatchEvent(new CustomEvent('open-cmd-palette'));
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('rapolubalaji248@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const cubicBezierEasing = [0.16, 1, 0.3, 1] as const;

  return (
    <section
      className="relative w-full min-h-[92vh] flex flex-col items-center justify-center overflow-hidden bg-[#0D1526] pt-24 pb-12 px-4 sm:px-8 select-none border-b border-[#28344C]/60"
    >
      {/* STAGGER 0.4s: BACKGROUND LAYER - Fitted "BALAJI RAPOLU" Typography */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.2, delay: 0.4, ease: cubicBezierEasing }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 w-full overflow-hidden px-4"
      >
        <h1 className="font-extrabold text-[8.2vw] sm:text-[8.5vw] lg:text-[8.8vw] leading-none tracking-tight text-[#E7E9EE]/[0.07] uppercase whitespace-nowrap font-mono-tech select-none w-full text-center">
          BALAJI RAPOLU
        </h1>
      </motion.div>

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#E8A33D]/5 blur-[150px] pointer-events-none z-0" />

      {/* MIDDLE LAYER (Z-Index 10): Portrait & Staggered Elements */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center my-auto space-y-6">
        
        {/* STAGGER 0.0s: CINEMATIC ANTIGRAVITY SCALE-DOWN HERO PORTRAIT */}
        <motion.div
          initial={{ scale: 1.5, opacity: 0, y: 100, filter: 'blur(10px)' }}
          animate={{ scale: 1, opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 2.5, delay: 0.1, ease: cubicBezierEasing }}
          className="relative w-72 sm:w-96 md:w-[440px] h-[360px] sm:h-[460px] md:h-[520px] flex items-center justify-center"
        >
          <Image
            src="/images/balaji-hero.png"
            alt="Balaji Rapolu"
            fill
            priority
            className="object-contain filter grayscale contrast-125 brightness-105 drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)] pointer-events-none"
          />

          {/* STAGGER 0.7s: Floating Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.7, ease: cubicBezierEasing }}
            className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#141F35]/95 border border-[#28344C] backdrop-blur-md font-mono-tech text-[11px] text-[#E8A33D] flex items-center space-x-2 shadow-2xl shrink-0 whitespace-nowrap"
          >
            <span className="w-2 h-2 rounded-full bg-[#E8A33D] animate-ping" />
            <span>FULL-STACK DEVELOPER • 9.20 GPA</span>
          </motion.div>
        </motion.div>

        {/* STAGGER 0.8s: Hero Bio Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 0.8, ease: cubicBezierEasing }}
          className="space-y-4 max-w-2xl px-4 pt-4"
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#E7E9EE]">
            Balaji Rapolu
          </h2>
          <p className="text-[#8891A6] text-xs sm:text-sm font-mono-tech leading-relaxed">
            Undergraduate Computer Science engineer at <strong className="text-[#E7E9EE]">SRM University AP</strong>. Specializing in full-stack architecture, Spring Boot REST microservices, and PyTorch AI computer vision systems.
          </p>

          {/* STAGGER 1.0s: Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 1.0, ease: cubicBezierEasing }}
            className="flex flex-wrap items-center justify-center gap-3 pt-2"
          >
            <a
              href="#projects"
              className="px-6 py-2.5 rounded-full bg-[#E8A33D] hover:bg-[#d49230] text-[#0D1526] font-semibold text-xs tracking-wider uppercase transition-all flex items-center space-x-2 shadow-lg shadow-[#E8A33D]/10"
            >
              <span>Explore Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              onClick={openCmdPalette}
              className="px-5 py-2.5 rounded-full bg-[#141F35] border border-[#28344C] hover:border-[#E8A33D] font-mono-tech text-xs text-[#E7E9EE] hover:text-[#E8A33D] transition-all flex items-center space-x-2"
            >
              <Terminal className="w-3.5 h-3.5 text-[#E8A33D]" />
              <span>Launch CLI (Cmd+K)</span>
            </button>

            <button
              onClick={copyEmail}
              className="px-5 py-2.5 rounded-full bg-[#141F35] border border-[#28344C] hover:border-[#E8A33D] font-mono-tech text-xs text-[#8891A6] hover:text-[#E7E9EE] transition-all flex items-center space-x-1.5"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#E8A33D]" /> : <Copy className="w-3.5 h-3.5 text-[#8891A6]" />}
              <span>{copied ? 'Copied Email' : 'Email Direct'}</span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
