'use client';

import { useEffect, useState } from 'react';
import { Award, BookOpen, GitBranch, Cpu, CheckCircle2, ExternalLink, GraduationCap, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/portfolio-data';

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

  return (
    <section id="about" className="py-16 md:py-24 border-t border-[#28344C]/60">
      <div className="space-y-12">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="font-mono-tech text-xs text-[#E8A33D] uppercase tracking-widest">
              [01] OVERVIEW & CREDIBILITY
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#E7E9EE] tracking-tight mt-1">
              Engineered with Curiosity & Consistency
            </h2>
          </div>
          <p className="text-[#8891A6] text-xs font-mono-tech max-w-sm">
            Asymmetric Bento grid detailing academics, certifications, active focus, and developer stats.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Tile 1: Main Narrative (Col 7) */}
          <div className="md:col-span-7 bg-[#141F35] border border-[#28344C] rounded-xl p-6 sm:p-8 flex flex-col justify-between space-y-6 card-hover-effect">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-[#E8A33D] font-mono-tech text-xs">
                <BookOpen className="w-4 h-4" />
                <span>BUILDER MINDSET & PHILOSOPHY</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#E7E9EE] leading-snug">
                I don't just study frameworks—I trace their mechanics down to the backend layer.
              </h3>
              <p className="text-[#8891A6] text-sm leading-relaxed">
                My journey started with building interactive web apps in JavaScript and MERN. As my curiosity grew around enterprise scalability, type safety, and relational concurrency, I transitioned to Java SE 17 and Spring Boot micro-services. Today, I bridge robust backend REST APIs with computer vision models in PyTorch.
              </p>
            </div>

            <div className="pt-4 border-t border-[#28344C] flex flex-wrap gap-2">
              {['Java SE 17', 'Spring Boot', 'REST APIs', 'MySQL', 'MongoDB', 'Docker', 'PyTorch', 'React.js'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-[#0D1526] border border-[#28344C] font-mono-tech text-[11px] text-[#E8A33D]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Tile 2: GPA & Academics (Col 5) */}
          <div className="md:col-span-5 bg-[#141F35] border border-[#28344C] rounded-xl p-6 flex flex-col justify-between space-y-6 card-hover-effect">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-[#E8A33D] font-mono-tech text-xs">
                  <GraduationCap className="w-4 h-4" />
                  <span>ACADEMIC EXCELLENCE</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-[#0D1526] border border-[#28344C] font-mono-tech text-[10px] text-[#E8A33D]">
                  SRM University AP
                </span>
              </div>

              <div>
                <div className="text-4xl font-extrabold text-[#E7E9EE] font-mono-tech tracking-tight">
                  9.20 <span className="text-sm font-normal text-[#8891A6]">/ 10.0 GPA</span>
                </div>
                <p className="text-[#8891A6] text-xs mt-1">B.Tech Computer Science & Engineering (2023–Present)</p>
              </div>

              {/* Sub Academic Highlights */}
              <div className="space-y-2 pt-2 border-t border-[#28344C]/60 font-mono-tech text-xs">
                <div className="flex items-center justify-between p-2 rounded bg-[#0D1526]/60 border border-[#28344C]/40">
                  <span className="text-[#8891A6]">Class 12th (VIT Jr College)</span>
                  <span className="text-[#E7E9EE] font-bold">967 / 1000</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-[#0D1526]/60 border border-[#28344C]/40">
                  <span className="text-[#8891A6]">Class 10th (Narayana School)</span>
                  <span className="text-[#E8A33D] font-bold">10.0 / 10.0 GPA</span>
                </div>
              </div>
            </div>

            <p className="text-[#8891A6] text-[11px] font-mono-tech">
              Proof of sustained discipline, analytical rigor, and core computer science fundamentals.
            </p>
          </div>

          {/* Tile 3: Certifications Ticker Strip (Col 8) */}
          <div className="md:col-span-8 bg-[#141F35] border border-[#28344C] rounded-xl p-6 space-y-4 card-hover-effect">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-[#E8A33D] font-mono-tech text-xs">
                <ShieldCheck className="w-4 h-4" />
                <span>VERIFIED PROFESSIONAL CERTIFICATIONS</span>
              </div>
              <span className="text-[10px] font-mono-tech text-[#8891A6]">4 Verified Credentials</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 font-mono-tech text-xs">
              {PORTFOLIO_DATA.certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="p-3 rounded bg-[#0D1526] border border-[#28344C] flex items-start space-x-2 hover:border-[#E8A33D] transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#E8A33D] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#E7E9EE] font-medium block text-xs leading-tight">{cert.name}</span>
                    <span className="text-[#8891A6] text-[10px]">Issuer: {cert.issuer}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tile 4: GitHub Stats Widget (Col 4) */}
          <div className="md:col-span-4 bg-[#141F35] border border-[#28344C] rounded-xl p-6 flex flex-col justify-between space-y-4 card-hover-effect">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-[#E8A33D] font-mono-tech text-xs">
                <GitBranch className="w-4 h-4" />
                <span>GITHUB ACTIVITY</span>
              </div>
              <a
                href={PORTFOLIO_DATA.profile.github}
                target="_blank"
                rel="noreferrer"
                className="text-[#8891A6] hover:text-[#E8A33D]"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="space-y-3 font-mono-tech">
              <div className="flex items-baseline justify-between">
                <span className="text-xs text-[#8891A6]">Public Repositories</span>
                <span className="text-2xl font-bold text-[#E7E9EE]">{ghData ? ghData.publicRepos : '18+'}</span>
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-xs text-[#8891A6]">GitHub Handle</span>
                <span className="text-xs text-[#E8A33D]">@balajirapolu</span>
              </div>
              <div className="p-2.5 rounded bg-[#0D1526] border border-[#28344C] text-[10px] text-[#8891A6] flex items-center justify-between">
                <span>API Status:</span>
                <span className="text-[#10B981] font-semibold uppercase">{ghData?.status || 'Active'}</span>
              </div>
            </div>

            <a
              href={PORTFOLIO_DATA.profile.github}
              target="_blank"
              rel="noreferrer"
              className="w-full py-2 rounded bg-[#0D1526] border border-[#28344C] hover:border-[#E8A33D] text-center font-mono-tech text-xs text-[#E7E9EE] hover:text-[#E8A33D] transition-colors block"
            >
              Visit @balajirapolu on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
