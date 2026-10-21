'use client';

import { useEffect, useState } from 'react';
import { GitBranch, ExternalLink, GraduationCap, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/portfolio-data';
import VaporType from '@/components/ui/vapor-type';
import AccordionGallery from '@/components/ui/AccordionGallery';
import Folder from '@/components/ui/Folder';

interface GithubData {
  username: string;
  publicRepos: number;
  followers: number;
  status: string;
}

export default function BentoAboutSection() {
  const [ghData, setGhData] = useState<GithubData | null>(null);

  useEffect(() => {
    fetch('/api/github')
      .then((res) => res.json())
      .then((data) => setGhData(data))
      .catch(() => {
        setGhData({
          username: 'balajirapolu',
          publicRepos: 18,
          followers: 25,
          status: 'cached',
        });
      });
  }, []);

  const vaporPhrases = [
    'WEB DEVELOPER',
    'FULL STACK JAVA',
    'AI & BACKEND ENGINEER',
    'SYSTEM ARCHITECT',
    'ADAPTABLE BUILDER',
  ];

  // Paper order: [0] Left = Class 10th, [1] Right = Class 12th, [2] Center Top = Undergraduate
  const folderPapers = [
    <div key="1" className="flex flex-col justify-between h-full p-4 font-mono-tech bg-[#121518] text-[#E7E9EE] rounded-xl border border-[#22262B]">
      <div className="text-[11px] text-[#0080FF] font-bold uppercase tracking-wider">CLASS 10TH BOARD</div>
      <div className="my-auto space-y-1">
        <div className="text-2xl font-black text-[#E7E9EE]">10.0 <span className="text-xs font-normal text-[#8891A6]">GPA</span></div>
        <div className="text-xs font-semibold text-[#E7E9EE]">Narayana School</div>
      </div>
      <div className="text-[10px] text-[#8891A6]">SSC Board • Perfect 10 CGPA</div>
    </div>,

    <div key="2" className="flex flex-col justify-between h-full p-4 font-mono-tech bg-[#1A1E23] text-[#E7E9EE] rounded-xl border border-[#22262B]">
      <div className="text-[11px] text-[#0080FF] font-bold uppercase tracking-wider">CLASS 12TH BOARD</div>
      <div className="my-auto space-y-1">
        <div className="text-2xl font-black text-[#E7E9EE]">967 <span className="text-xs font-normal text-[#8891A6]">/ 1000</span></div>
        <div className="text-xs font-semibold text-[#E7E9EE]">VIT Junior College</div>
      </div>
      <div className="text-[10px] text-[#8891A6]">Intermediate • MPC Stream (96.7%)</div>
    </div>,

    <div key="3" className="flex flex-col justify-between h-full p-4 font-mono-tech bg-[#1E232A] text-[#E7E9EE] rounded-xl border border-[#0080FF]/50 shadow-2xl">
      <div className="text-[11px] text-[#0080FF] font-bold uppercase tracking-wider flex items-center justify-between">
        <span>UNDERGRADUATE</span>
        <span className="w-2 h-2 rounded-full bg-[#0080FF] animate-pulse" />
      </div>
      <div className="my-auto space-y-1">
        <div className="text-3xl font-black text-[#FFFFFF]">9.20 <span className="text-xs font-normal text-[#8891A6]">/ 10.0</span></div>
        <div className="text-xs font-semibold text-[#FFFFFF]">B.Tech Computer Science</div>
      </div>
      <div className="text-[10px] font-semibold text-[#0080FF]">SRM University AP • 2023–Present</div>
    </div>,
  ];

  return (
    <section id="about" className="py-16 md:py-24 border-t border-[#22262B]/60 space-y-16">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="font-mono-tech text-xs text-[#8891A6] uppercase tracking-widest">
            [01] OVERVIEW & CREDIBILITY
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#E7E9EE] tracking-tight mt-1">
            Engineered with Curiosity & Consistency
          </h2>
        </div>
        <p className="text-[#8891A6] text-xs font-mono-tech max-w-sm">
          Core technical mindset, verified professional certifications, academic dossier, and GitHub stats.
        </p>
      </div>

      {/* 1. Vapor Type: Centered directly in the middle of the section */}
      <div className="w-full flex flex-col items-center justify-center py-10 px-4 border border-[#22262B] rounded-2xl bg-[#0A0C0D] shadow-2xl relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-48 bg-[#0080FF]/10 blur-[100px] pointer-events-none rounded-full" />
        <div className="font-mono-tech text-xs text-[#0080FF] uppercase tracking-[0.3em] mb-2 z-10">
          Core Technical Identity & Philosophy
        </div>
        <VaporType
          words={vaporPhrases}
          textColor="#FFFFFF"
          vaporColor="#0080FF"
          fontSize={76}
          holdDuration={2200}
          className="w-full max-w-5xl z-10"
        />
      </div>

      {/* 2. Certifications Accordion Gallery: Full Width Professional Layout */}
      <div className="w-full space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-1">
          <div className="flex items-center space-x-2 text-[#E7E9EE] font-mono-tech text-xs">
            <ShieldCheck className="w-4 h-4 text-[#0080FF]" />
            <span>VERIFIED PROFESSIONAL CERTIFICATIONS</span>
          </div>
          <div className="text-xs font-mono-tech text-[#8891A6]">
            Hover panel to inspect certificate details • Click to verify online
          </div>
        </div>

        <div className="w-full">
          <AccordionGallery
            height={500}
            gap={12}
            expandRatio={0.52}
            trigger="hover"
            grayscale={true}
            accentColor="#0080FF"
            overlayColor="#0A0C0D"
            textColor="#E7E9EE"
          />
        </div>
      </div>

      {/* 3. Academic Excellence (Folder in Middle) & GitHub Activity (Restored) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Academic Excellence Section (Col 7) */}
        <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 bg-[#121518] border border-[#22262B] rounded-xl">
          <div className="flex items-center justify-between pb-4 border-b border-[#22262B]">
            <div className="flex items-center space-x-2 text-[#E7E9EE] font-mono-tech text-xs">
              <GraduationCap className="w-4 h-4 text-[#0080FF]" />
              <span className="font-bold tracking-wider">ACADEMIC EXCELLENCE</span>
            </div>
            <span className="text-[11px] font-mono-tech text-[#8891A6]">
              SRM University AP • 9.20 GPA
            </span>
          </div>

          {/* Centered Folder Component */}
          <div className="flex flex-col items-center justify-center my-auto py-10 min-h-[320px] relative">
            <Folder color="#0080FF" size={1.0} items={folderPapers} />
            <div className="text-[11px] font-mono-tech text-[#8891A6] mt-10 text-center">
              Click folder to unfold academic record cards (Undergraduate at Center)
            </div>
          </div>
        </div>

        {/* GitHub Activity (Col 5 - Restored) */}
        <div className="lg:col-span-5 bg-[#121518] border border-[#22262B] rounded-xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-[#E7E9EE] font-mono-tech text-xs">
              <GitBranch className="w-4 h-4 text-[#0080FF]" />
              <span className="font-bold tracking-wider">GITHUB ACTIVITY</span>
            </div>
            <a
              href={PORTFOLIO_DATA.profile.github}
              target="_blank"
              rel="noreferrer"
              className="text-[#8891A6] hover:text-[#0080FF] transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="space-y-4 font-mono-tech">
            <div className="flex items-baseline justify-between p-4 rounded-lg bg-[#0A0C0D] border border-[#22262B]">
              <span className="text-xs text-[#8891A6]">Public Repositories</span>
              <span className="text-3xl font-extrabold text-[#E7E9EE]">{ghData ? ghData.publicRepos : '18+'}</span>
            </div>
            <div className="flex items-baseline justify-between p-4 rounded-lg bg-[#0A0C0D] border border-[#22262B]">
              <span className="text-xs text-[#8891A6]">GitHub Handle</span>
              <span className="text-sm font-semibold text-[#0080FF]">@balajirapolu</span>
            </div>
          </div>

          <a
            href={PORTFOLIO_DATA.profile.github}
            target="_blank"
            rel="noreferrer"
            className="w-full py-3 rounded-lg bg-[#0A0C0D] border border-[#22262B] hover:border-[#0080FF] text-center font-mono-tech text-xs text-[#E7E9EE] hover:text-[#0080FF] transition-all shadow-sm block"
          >
            Visit @balajirapolu on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
