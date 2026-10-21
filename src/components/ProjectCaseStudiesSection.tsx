'use client';

import { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '@/lib/portfolio-data';
import { ExternalLink, Layers, Server, CheckCircle2, ChevronRight } from 'lucide-react';
import { GithubIcon } from '@/components/SocialIcons';

export default function ProjectCaseStudiesSection() {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(PORTFOLIO_DATA.projects[0].id);

  const selectedProject = PORTFOLIO_DATA.projects.find((p) => p.id === selectedProjectId) || PORTFOLIO_DATA.projects[0];

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-[#22262B]/60">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="font-mono-tech text-xs text-[#8891A6] uppercase tracking-widest">
              [03] TECHNICAL CASE STUDIES
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#E7E9EE] tracking-tight mt-1">
              Production Architecture & System Decisions
            </h2>
          </div>
          <p className="text-[#8891A6] text-xs font-mono-tech max-w-sm">
            Deep technical case studies documenting real architectural choices, Spring Boot REST layers, and PyTorch models.
          </p>
        </div>

        {/* Horizontal Project Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono-tech text-xs">
          {PORTFOLIO_DATA.projects.map((proj) => {
            const isSelected = proj.id === selectedProjectId;
            return (
              <button
                key={proj.id}
                onClick={() => setSelectedProjectId(proj.id)}
                className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between space-y-2 group ${
                  isSelected
                    ? 'bg-[#121518] border-[#0080FF] text-[#E7E9EE] shadow-lg shadow-[#0080FF]/10'
                    : 'bg-[#0A0C0D] border-[#22262B] text-[#8891A6] hover:border-[#333942] hover:text-[#E7E9EE]'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className={`text-[10px] px-2 py-0.5 rounded ${isSelected ? 'bg-[#0080FF] text-[#FFFFFF] font-bold' : 'bg-[#121518] text-[#8891A6]'}`}>
                    {proj.category}
                  </span>
                  {isSelected && <ChevronRight className="w-4 h-4 text-[#0080FF]" />}
                </div>
                <div>
                  <span className="font-bold text-sm block truncate group-hover:text-[#0080FF] transition-colors">{proj.title}</span>
                  <span className="text-[10px] opacity-70 block truncate">{proj.subtitle}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Project Full Case Study Card */}
        <div className="bg-[#121518] border border-[#22262B] rounded-2xl p-6 sm:p-10 space-y-8 relative overflow-hidden shadow-2xl transition-all duration-300">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0080FF]/5 rounded-full blur-3xl pointer-events-none" />

          {/* Case Study Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-[#22262B] pb-6">
            <div className="space-y-2">
              <div className="flex items-center space-x-3 font-mono-tech text-xs">
                <span className="px-2.5 py-1 rounded bg-[#0A0C0D] border border-[#22262B] text-[#0080FF]">
                  {selectedProject.category}
                </span>
                <span className="text-[#8891A6]">• {selectedProject.period}</span>
              </div>
              <h3 className="text-3xl font-extrabold text-[#E7E9EE] tracking-tight">
                {selectedProject.title}
              </h3>
              <p className="text-[#8891A6] text-sm">{selectedProject.subtitle}</p>
            </div>

            {/* Links & CLI Trigger */}
            <div className="flex items-center space-x-3 font-mono-tech text-xs shrink-0">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded bg-[#0A0C0D] border border-[#22262B] hover:border-[#333942] text-[#E7E9EE] hover:text-[#0080FF] transition-colors flex items-center space-x-2"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Repo</span>
              </a>

              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded bg-[#0080FF] hover:bg-[#0070E0] text-[#FFFFFF] font-semibold transition-colors flex items-center space-x-1.5 shadow-md shadow-[#0080FF]/20"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

          {/* Grid Layout: Problem & Approach (Col 6 each) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-[#0A0C0D] border border-[#22262B] space-y-3 group hover:border-[#EF4444]/40 transition-colors">
              <div className="flex items-center space-x-2 text-[#EF4444] font-mono-tech text-xs">
                <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
                <span>THE CORE PROBLEM</span>
              </div>
              <p className="text-[#E7E9EE] text-sm leading-relaxed">{selectedProject.problem}</p>
            </div>

            <div className="p-6 rounded-xl bg-[#0A0C0D] border border-[#22262B] space-y-3 group hover:border-[#10B981]/40 transition-colors">
              <div className="flex items-center space-x-2 text-[#10B981] font-mono-tech text-xs">
                <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                <span>THE ARCHITECTURAL APPROACH</span>
              </div>
              <p className="text-[#E7E9EE] text-sm leading-relaxed">{selectedProject.approach}</p>
            </div>
          </div>

          {/* Architecture Breakdown & Decisions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
            {/* System Architecture */}
            <div className="space-y-4">
              <h4 className="font-mono-tech text-xs text-[#0080FF] uppercase tracking-wider flex items-center space-x-2">
                <Layers className="w-4 h-4" />
                <span>System Architecture Highlights</span>
              </h4>
              <ul className="space-y-3 font-mono-tech text-xs">
                {selectedProject.architecture.map((item, idx) => (
                  <li key={idx} className="p-3 rounded-lg bg-[#0A0C0D]/80 border border-[#22262B]/60 text-[#8891A6] flex items-start space-x-2.5 hover:border-[#333942] transition-colors">
                    <span className="text-[#0080FF] font-bold mt-0.5">0{idx + 1}.</span>
                    <span className="text-[#E7E9EE]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Technical Decisions & Results */}
            <div className="space-y-4">
              <h4 className="font-mono-tech text-xs text-[#0080FF] uppercase tracking-wider flex items-center space-x-2">
                <Server className="w-4 h-4" />
                <span>Key Technical Trade-offs & Outcomes</span>
              </h4>
              <ul className="space-y-3 font-mono-tech text-xs">
                {selectedProject.techDecisions.map((item, idx) => (
                  <li key={idx} className="p-3 rounded-lg bg-[#0A0C0D]/80 border border-[#22262B]/60 text-[#8891A6] flex items-start space-x-2.5 hover:border-[#10B981]/40 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span className="text-[#E7E9EE]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="pt-6 border-t border-[#22262B] space-y-3">
            <span className="font-mono-tech text-xs text-[#8891A6]">COMPLETE TECH STACK:</span>
            <div className="flex flex-wrap gap-2">
              {selectedProject.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-[#0A0C0D] border border-[#22262B] font-mono-tech text-xs text-[#E7E9EE] hover:border-[#333942] transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
