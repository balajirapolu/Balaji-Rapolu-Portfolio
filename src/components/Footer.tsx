'use client';

import Image from 'next/image';
import { Terminal, ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/portfolio-data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openCmdPalette = () => {
    window.dispatchEvent(new CustomEvent('open-cmd-palette'));
  };

  return (
    <footer className="w-full bg-[#0A0C0D] border-t border-[#22262B] py-12">
      <div className="w-[90vw] max-w-[90vw] mx-auto px-2 sm:px-4 space-y-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & System Status */}
          <div className="space-y-2 text-center md:text-left">
            <div className="font-mono-tech text-sm text-[#E7E9EE] flex items-center justify-center md:justify-start space-x-2">
              <span className="text-[#0080FF] font-bold">balaji</span>
              <span className="text-[#8891A6]">@</span>
              <span>rapolu</span>
              <span className="text-[#8891A6]">:~$ exit 0</span>
            </div>
            <p className="text-[#8891A6] text-xs font-mono-tech">
              Designed & Built with Next.js, TypeScript, Ranade Fonts, and Tailored Space Black aesthetics.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center space-x-4 font-mono-tech text-xs">
            <button
              onClick={openCmdPalette}
              className="px-3.5 py-2 rounded-full bg-[#121518] border border-[#22262B] hover:border-[#0080FF] text-[#8891A6] hover:text-[#E7E9EE] transition-colors flex items-center space-x-2"
            >
              <Terminal className="w-3.5 h-3.5 text-[#0080FF]" />
              <span>Cmd+K Shell</span>
            </button>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#121518] border border-[#22262B] hover:border-[#0080FF] text-[#8891A6] hover:text-[#0080FF] transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
        {/* Bottom copyright line */}
        <div className="pt-6 border-t border-[#22262B]/40 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono-tech text-[#8891A6] gap-2">
          <div>© {new Date().getFullYear()} Balaji Rapolu. All rights reserved.</div>
          <div className="flex items-center space-x-4">
            <a href={PORTFOLIO_DATA.profile.github} target="_blank" rel="noreferrer" className="hover:text-[#0080FF]">
              GitHub
            </a>
            <a href={PORTFOLIO_DATA.profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#0080FF]">
              LinkedIn
            </a>
            <a href={`mailto:${PORTFOLIO_DATA.profile.email}`} className="hover:text-[#0080FF]">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
