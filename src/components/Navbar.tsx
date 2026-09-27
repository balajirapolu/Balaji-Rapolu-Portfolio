'use client';

import { useState, useEffect } from 'react';
import { Terminal, Menu, X, Command } from 'lucide-react';

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
          ? 'bg-[#0D1526]/90 backdrop-blur-md border-b border-[#28344C] shadow-lg'
          : 'bg-transparent border-b border-[#28344C]/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center space-x-2 font-mono-tech text-sm tracking-tight text-[#E7E9EE] hover:text-[#E8A33D] transition-colors"
          >
            <span className="text-[#E8A33D] font-bold">balaji</span>
            <span className="text-[#8891A6]">@</span>
            <span>rapolu</span>
            <span className="text-[#8891A6]">:~$</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs tracking-wider uppercase flex items-center space-x-1.5 text-[#8891A6] hover:text-[#E7E9EE] transition-colors py-1 group"
              >
                <span className="font-mono-tech text-[10px] text-[#E8A33D] opacity-70 group-hover:opacity-100">
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
              className="flex items-center space-x-2 px-3 py-1.5 rounded bg-[#141F35] border border-[#28344C] hover:border-[#E8A33D] text-xs font-mono-tech text-[#8891A6] hover:text-[#E7E9EE] transition-all group shadow-sm"
              title="Open Terminal Palette (Cmd+K)"
            >
              <Terminal className="w-3.5 h-3.5 text-[#E8A33D]" />
              <span className="hidden sm:inline">CLI Shell</span>
              <kbd className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded bg-[#0D1526] border border-[#28344C] text-[10px] text-[#8891A6] group-hover:text-[#E8A33D]">
                <Command className="w-2.5 h-2.5 mr-0.5 inline" />K
              </kbd>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded bg-[#141F35] border border-[#28344C] text-[#8891A6] hover:text-[#E7E9EE]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#141F35] border-b border-[#28344C] px-4 pt-2 pb-6 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-mono-tech text-sm text-[#8891A6] hover:text-[#E8A33D] py-2 border-b border-[#28344C]/40 flex items-center justify-between"
            >
              <span>{item.label}</span>
              <span className="text-xs text-[#E8A33D]">{item.index}</span>
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
