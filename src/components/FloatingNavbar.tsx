'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import RBLogo from '@/components/RBLogo';
import { Terminal, Menu, X } from 'lucide-react';

export default function FloatingNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openCmdPalette = () => {
    window.dispatchEvent(new CustomEvent('open-cmd-palette'));
  };

  const leftNav = [
    { label: 'ABOUT', href: '#about' },
    { label: 'JOURNEY', href: '#journey' },
    { label: 'PROJECTS', href: '#projects' },
  ];

  const rightNav = [
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
    >
      <div
        className={`pointer-events-auto w-full max-w-5xl rounded-full bg-[#141F35]/90 border border-[#28344C] backdrop-blur-md px-6 py-2.5 flex items-center justify-between shadow-2xl transition-all duration-300 ${
          scrolled ? 'shadow-[#000000]/60 border-[#E8A33D]/40 bg-[#0D1526]/95' : 'bg-[#141F35]/85'
        }`}
      >
        {/* Left Links (Desktop) */}
        <nav className="hidden md:flex items-center space-x-6 font-mono-tech text-xs tracking-wider">
          {leftNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[#8891A6] hover:text-[#E8A33D] transition-colors py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Center Logo */}
        <a
          href="#"
          className="flex items-center space-x-2 text-[#E7E9EE] hover:text-[#E8A33D] transition-colors group"
          title="Balaji Rapolu — Home"
        >
          <RBLogo className="w-8 h-8 text-[#E8A33D] group-hover:scale-110 transition-transform" />
        </a>

        {/* Right Links & CLI Shell (Desktop) */}
        <div className="hidden md:flex items-center space-x-6 font-mono-tech text-xs tracking-wider">
          {rightNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[#8891A6] hover:text-[#E8A33D] transition-colors py-1"
            >
              {item.label}
            </a>
          ))}

          <button
            onClick={openCmdPalette}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-[#0D1526] border border-[#28344C] hover:border-[#E8A33D] text-[#E8A33D] transition-all"
            title="Open CLI Shell (Cmd+K)"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span className="text-[11px]">CLI</span>
            <kbd className="px-1 rounded bg-[#141F35] text-[9px] text-[#8891A6] border border-[#28344C]">
              ⌘K
            </kbd>
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-full bg-[#0D1526] border border-[#28344C] text-[#8891A6] hover:text-[#E7E9EE]"
        >
          {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="pointer-events-auto absolute top-16 left-4 right-4 bg-[#141F35] border border-[#28344C] rounded-2xl p-4 font-mono-tech text-xs space-y-3 shadow-2xl md:hidden">
          {[...leftNav, ...rightNav].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block text-[#8891A6] hover:text-[#E8A33D] py-2 border-b border-[#28344C]/50"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileOpen(false);
              openCmdPalette();
            }}
            className="w-full py-2.5 rounded-xl bg-[#0D1526] border border-[#28344C] text-[#E8A33D] flex items-center justify-center space-x-2"
          >
            <Terminal className="w-4 h-4" />
            <span>Launch CLI Shell (Cmd+K)</span>
          </button>
        </div>
      )}
    </motion.header>
  );
}
