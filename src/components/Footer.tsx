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
    <footer className="w-full bg-[#0D1526] border-t border-[#28344C] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & System Status */}
          <div className="space-y-2 text-center md:text-left">
            <div className="font-mono-tech text-sm text-[#E7E9EE] flex items-center justify-center md:justify-start space-x-2">
              <span className="text-[#E8A33D] font-bold">balaji</span>
              <span className="text-[#8891A6]">@</span>
              <span>rapolu</span>
              <span className="text-[#8891A6]">:~$ exit 0</span>
            </div>
            <p className="text-[#8891A6] text-xs font-mono-tech">
              Designed & Built with Next.js, TypeScript, Ranade Fonts, and Tailored Ink-Navy aesthetics.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center space-x-4 font-mono-tech text-xs">
            <button
              onClick={openCmdPalette}
              className="px-3.5 py-2 rounded-full bg-[#141F35] border border-[#28344C] hover:border-[#E8A33D] text-[#8891A6] hover:text-[#E7E9EE] transition-colors flex items-center space-x-2"
            >
              <Terminal className="w-3.5 h-3.5 text-[#E8A33D]" />
              <span>Cmd+K Shell</span>
            </button>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#141F35] border border-[#28344C] hover:border-[#E8A33D] text-[#8891A6] hover:text-[#E8A33D] transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* CENTERED SIGNATURE IN WHITE TEXT */}
        <div className="flex flex-col items-center justify-center pt-4">
          <div className="relative w-56 sm:w-64 h-20 sm:h-24">
            <Image
              src="/images/balaji-signature.png"
              alt="Balaji Rapolu Signature"
              fill
              className="object-contain filter invert contrast-200 brightness-200 opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
          <span className="text-[10px] font-mono-tech text-[#8891A6] uppercase tracking-widest mt-1">
            Balaji Rapolu Signature
          </span>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 border-t border-[#28344C]/40 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono-tech text-[#8891A6] gap-2">
          <div>© {new Date().getFullYear()} Balaji Rapolu. All rights reserved.</div>
          <div className="flex items-center space-x-4">
            <a href={PORTFOLIO_DATA.profile.github} target="_blank" rel="noreferrer" className="hover:text-[#E8A33D]">
              GitHub
            </a>
            <a href={PORTFOLIO_DATA.profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#E8A33D]">
              LinkedIn
            </a>
            <a href={`mailto:${PORTFOLIO_DATA.profile.email}`} className="hover:text-[#E8A33D]">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
