'use client';

import { useState } from 'react';
import { PORTFOLIO_DATA } from '@/lib/portfolio-data';
import { ArrowRight, Code, Database, Server, Cpu } from 'lucide-react';

export default function JourneyTimelineSection() {
  const [activePhase, setActivePhase] = useState(0);

  const phaseIcons = [Code, Server, Database, Cpu];

  return (
    <section id="journey" className="py-16 md:py-24 border-t border-[#22262B]/60">
      <div className="space-y-12">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="font-mono-tech text-xs text-[#8891A6] uppercase tracking-widest">
              [02] ARCHITECTURAL EVOLUTION
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#E7E9EE] tracking-tight mt-1">
              From Web Scripts to Enterprise Java & AI
            </h2>
          </div>
          <p className="text-[#8891A6] text-xs font-mono-tech max-w-md">
            Adaptability isn't a buzzword—it's my recorded timeline of following curiosity deeper into the software stack.
          </p>
        </div>

        {/* Interactive Timeline Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Timeline Navigation Steps (Col 4) */}
          <div className="lg:col-span-4 space-y-3">
            {PORTFOLIO_DATA.journey.map((item, idx) => {
              const IconComp = phaseIcons[idx] || Code;
              const isActive = activePhase === idx;

              return (
                <button
                  key={item.phase}
                  onClick={() => setActivePhase(idx)}
                  className={`w-full p-4 rounded-xl border text-left font-mono-tech transition-all flex items-start space-x-3 ${
                    isActive
                      ? 'bg-[#121518] border-[#0080FF] shadow-lg shadow-[#0080FF]/10'
                      : 'bg-[#0A0C0D] border-[#22262B] hover:border-[#333942]'
                  }`}
                >
                  <span
                    className={`px-2 py-1 rounded text-xs font-bold ${
                      isActive ? 'bg-[#0080FF] text-[#FFFFFF]' : 'bg-[#121518] text-[#8891A6]'
                    }`}
                  >
                    {item.phase}
                  </span>
                  <div className="flex-1 min-w-0">
                    <span className={`text-sm font-bold block truncate ${isActive ? 'text-[#E7E9EE]' : 'text-[#8891A6]'}`}>
                      {item.title}
                    </span>
                    <span className="text-[11px] text-[#8891A6] block truncate">{item.subtitle}</span>
                  </div>
                  <IconComp className={`w-4 h-4 shrink-0 mt-1 ${isActive ? 'text-[#0080FF]' : 'text-[#8891A6]'}`} />
                </button>
              );
            })}
          </div>

          {/* Active Phase Deep Dive Card (Col 8) */}
          <div className="lg:col-span-8 bg-[#121518] border border-[#22262B] rounded-xl p-6 sm:p-8 space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#0080FF]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between border-b border-[#22262B] pb-4">
              <div>
                <span className="font-mono-tech text-xs text-[#0080FF] uppercase">
                  PHASE {PORTFOLIO_DATA.journey[activePhase].phase} OF 04
                </span>
                <h3 className="text-2xl font-bold text-[#E7E9EE] mt-0.5">
                  {PORTFOLIO_DATA.journey[activePhase].title}
                </h3>
              </div>
              <span className="font-mono-tech text-xs text-[#8891A6] hidden sm:block">
                {PORTFOLIO_DATA.journey[activePhase].subtitle}
              </span>
            </div>

            <p className="text-[#8891A6] text-sm sm:text-base leading-relaxed">
              {PORTFOLIO_DATA.journey[activePhase].description}
            </p>

            {/* Stack Tags */}
            <div className="space-y-3 pt-2">
              <span className="font-mono-tech text-xs text-[#8891A6] block">KEY TECHNOLOGIES MASTERED IN THIS PHASE:</span>
              <div className="flex flex-wrap gap-2">
                {PORTFOLIO_DATA.journey[activePhase].tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-md bg-[#0A0C0D] border border-[#22262B] font-mono-tech text-xs text-[#E7E9EE]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Progress Controls */}
            <div className="pt-6 border-t border-[#22262B] flex items-center justify-between font-mono-tech text-xs">
              <button
                disabled={activePhase === 0}
                onClick={() => setActivePhase((prev) => Math.max(0, prev - 1))}
                className="px-3 py-1.5 rounded bg-[#0A0C0D] border border-[#22262B] disabled:opacity-30 disabled:cursor-not-allowed hover:border-[#333942] text-[#8891A6] hover:text-[#E7E9EE]"
              >
                ← Previous Phase
              </button>

              <span className="text-[#8891A6]">
                {activePhase + 1} / {PORTFOLIO_DATA.journey.length}
              </span>

              <button
                disabled={activePhase === PORTFOLIO_DATA.journey.length - 1}
                onClick={() => setActivePhase((prev) => Math.min(PORTFOLIO_DATA.journey.length - 1, prev + 1))}
                className="px-3 py-1.5 rounded bg-[#0A0C0D] border border-[#22262B] disabled:opacity-30 disabled:cursor-not-allowed hover:border-[#333942] text-[#8891A6] hover:text-[#E7E9EE] flex items-center space-x-1"
              >
                <span>Next Phase</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
