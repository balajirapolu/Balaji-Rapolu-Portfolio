'use client';

import { PORTFOLIO_DATA } from '@/lib/portfolio-data';
import { Trophy, Briefcase, Award, CheckCircle, ArrowUpRight } from 'lucide-react';

export default function CredibilityAchievementsSection() {
  return (
    <section id="experience" className="py-16 md:py-24 border-t border-[#22262B]/60">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="font-mono-tech text-xs text-[#8891A6] uppercase tracking-widest">
              [04] EXPERIENCE & HACKATHONS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#E7E9EE] tracking-tight mt-1">
              Work Experience & Competitive Victories
            </h2>
          </div>
          <p className="text-[#8891A6] text-xs font-mono-tech max-w-sm">
            Proven track record in production engineering roles and national hackathons.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Work Experience Column (Col 7) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-mono-tech text-xs text-[#E7E9EE] uppercase tracking-wider flex items-center space-x-2">
              <Briefcase className="w-4 h-4 text-[#0080FF]" />
              <span>Production Work & Internship Experience</span>
            </h3>

            <div className="space-y-4">
              {PORTFOLIO_DATA.experience.map((exp) => (
                <div
                  key={exp.company}
                  className="bg-[#121518] border border-[#22262B] rounded-xl p-6 space-y-4 card-hover-effect"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#22262B] pb-3">
                    <div>
                      <h4 className="text-lg font-bold text-[#E7E9EE]">{exp.role}</h4>
                      <span className="text-xs text-[#0080FF] font-mono-tech">{exp.company}</span>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-[#0A0C0D] border border-[#22262B] font-mono-tech text-[10px] text-[#8891A6] self-start sm:self-auto">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 font-mono-tech text-xs text-[#8891A6]">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <span className="text-[#0080FF] font-bold shrink-0 mt-0.5">•</span>
                        <span className="text-[#E7E9EE]">{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2 flex flex-wrap gap-1.5 font-mono-tech text-[10px]">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-[#0A0C0D] border border-[#22262B] text-[#8891A6]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hackathons & Achievements Column (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-mono-tech text-xs text-[#E7E9EE] uppercase tracking-wider flex items-center space-x-2">
              <Trophy className="w-4 h-4 text-[#0080FF]" />
              <span>National Achievements & Awards</span>
            </h3>

            <div className="space-y-4">
              {PORTFOLIO_DATA.achievements.map((ach) => (
                <div
                  key={ach.title}
                  className="bg-[#121518] border border-[#22262B] rounded-xl p-6 space-y-3 relative overflow-hidden card-hover-effect"
                >
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded bg-[#0A0C0D] border border-[#0080FF]/30 font-mono-tech text-[10px] text-[#0080FF] font-bold">
                      {ach.badge}
                    </span>
                    <span className="font-mono-tech text-[10px] text-[#8891A6]">{ach.location}</span>
                  </div>

                  <h4 className="text-xl font-bold text-[#E7E9EE]">{ach.title}</h4>
                  <div className="font-mono-tech text-xs text-[#0080FF] font-semibold">{ach.event}</div>

                  <p className="text-[#8891A6] text-xs leading-relaxed">{ach.description}</p>
                </div>
              ))}

              {/* Quick Credibility Summary Card */}
              <div className="p-5 rounded-xl bg-[#0A0C0D] border border-[#22262B] space-y-2 font-mono-tech text-xs">
                <span className="text-[#0080FF] font-bold block">CREDIBILITY CHECK</span>
                <p className="text-[#8891A6]">
                  Every achievement and score listed is backed by official certificates and university transcripts from SRM AP, BITS Hyderabad, Oracle, and Infosys.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
