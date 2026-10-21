'use client';

import { useState, useEffect } from 'react';
import { Terminal, Menu, X, Command } from 'lucide-react';
import RBLogo from '@/components/RBLogo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openCmdPalette = () => {
    window.dispatchEvent(new CustomEvent('open-cmd-palette'));
  };

  const navItems = [
    { label: 'About', href: '#about', index: '01' },
    { label: 'Journey', href: '#journey', index: '02' },
    { label: 'Projects', href: '#projects', index: '03' },
    { label: 'Experience', href: '#experience', index: '04' },
    { label: 'Contact', href: '#contact', index: '05' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0C0D]/90 backdrop-blur-md border-b border-[#22262B] shadow-lg'
          : 'bg-transparent border-b border-[#22262B]/40'
      }`}
    >
      <div className="w-[90vw] max-w-[90vw] mx-auto px-2 sm:px-4">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo Emblem Navlink */}
          <div className="flex items-center space-x-3">
            <RBLogo className="w-9 h-9" size={28} />
            <a
              href="#"
              className="hidden sm:flex items-center space-x-1.5 font-mono-tech text-sm tracking-tight text-[#E7E9EE] hover:text-[#0080FF] transition-colors"
            >
              <span className="text-[#0080FF] font-bold">balaji</span>
              <span className="text-[#8891A6]">@</span>
              <span>rapolu</span>
              <span className="text-[#8891A6]">:~$</span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs tracking-wider uppercase flex items-center space-x-1.5 text-[#8891A6] hover:text-[#E7E9EE] transition-colors py-1 group"
              >
                <span className="font-mono-tech text-[10px] text-[#8891A6] opacity-70 group-hover:opacity-100">
                  {item.index}.
                </span>
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          {/* CLI Palette Trigger & Mobile Toggle */}
          <div className="flex items-center space-x-3">
            <button
              onClick={openCmdPalette}
              className="flex items-center space-x-2 px-3 py-1.5 rounded bg-[#121518] border border-[#22262B] hover:border-[#333942] text-xs font-mono-tech text-[#8891A6] hover:text-[#E7E9EE] transition-all group shadow-sm"
              title="Open Terminal Palette (Cmd+K)"
            >
              <Terminal className="w-3.5 h-3.5 text-[#0080FF]" />
              <span className="hidden sm:inline">CLI Shell</span>
              <kbd className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded bg-[#0A0C0D] border border-[#22262B] text-[10px] text-[#8891A6] group-hover:text-[#0080FF]">
                <Command className="w-2.5 h-2.5 mr-0.5 inline" />K
              </kbd>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded bg-[#121518] border border-[#22262B] text-[#8891A6] hover:text-[#E7E9EE]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#121518] border-b border-[#22262B] px-4 pt-2 pb-6 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-mono-tech text-sm text-[#8891A6] hover:text-[#E7E9EE] py-2 border-b border-[#22262B]/40 flex items-center justify-between"
            >
              <span>{item.label}</span>
              <span className="text-xs text-[#0080FF]">{item.index}</span>
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
