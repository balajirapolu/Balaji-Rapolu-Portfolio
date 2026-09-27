'use client';

import { useState, useEffect, useRef } from 'react';
import { Terminal, Search, X, Command, ArrowRight, CornerDownLeft } from 'lucide-react';
import { executeCliCommand, CliOutput } from '@/lib/cli-engine';

export default function CommandPaletteModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<CliOutput | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    const handleCustomOpen = () => setIsOpen(true);

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('open-cmd-palette', handleCustomOpen);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('open-cmd-palette', handleCustomOpen);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setResult(null);
    }
  }, [isOpen]);

  const quickShortcuts = [
    { cmd: 'whoami', desc: 'Profile & Developer Bio' },
    { cmd: 'projects', desc: 'List Case Studies' },
    { cmd: 'journey', desc: 'MERN -> Spring Boot -> AI' },
    { cmd: 'gpa', desc: 'Academic Transcripts (9.20 GPA)' },
    { cmd: 'certs', desc: 'Oracle & MongoDB Certifications' },
    { cmd: 'contact', desc: 'Email & LinkedIn details' },
  ];

  const handleRun = (commandStr: string) => {
    if (!commandStr.trim()) return;

    if (commandStr.trim().startsWith('#')) {
      const el = document.querySelector(commandStr.trim());
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
        return;
      }
    }

    const res = executeCliCommand(commandStr);
    setResult(res);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleRun(query);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-[#0D1526]/80 backdrop-blur-sm animate-fadeIn">
      <div
        className="w-full max-w-2xl bg-[#141F35] border border-[#28344C] rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Search Input */}
        <form onSubmit={handleSubmit} className="p-4 border-b border-[#28344C] flex items-center space-x-3 bg-[#0D1526]">
          <Terminal className="w-5 h-5 text-[#E8A33D] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a CLI command or search (whoami, projects, gpa, certs, contact)..."
            className="flex-1 bg-transparent font-mono-tech text-sm text-[#E7E9EE] focus:outline-none placeholder-[#8891A6]"
          />
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="p-1 rounded text-[#8891A6] hover:text-[#E7E9EE] hover:bg-[#141F35]"
          >
            <X className="w-5 h-5" />
          </button>
        </form>

        {/* Content Body */}
        <div className="p-4 overflow-y-auto space-y-4 font-mono-tech text-xs">
          {result ? (
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#28344C]">
                <span className="text-[#E8A33D]">Result for: "{result.command}"</span>
                <button
                  onClick={() => setResult(null)}
                  className="text-[#8891A6] hover:text-[#E7E9EE] text-[10px] uppercase"
                >
                  Clear Result
                </button>
              </div>

              {result.type === 'project' ? (
                <div className="p-4 rounded bg-[#0D1526] border border-[#28344C] space-y-2">
                  <h4 className="text-sm font-bold text-[#E8A33D]">{result.content.title}</h4>
                  <p className="text-[#8891A6]">{result.content.subtitle}</p>
                  <p className="text-[#E7E9EE]"><strong className="text-[#E8A33D]">Problem:</strong> {result.content.problem}</p>
                  <p className="text-[#E7E9EE]"><strong className="text-[#E8A33D]">Tech Stack:</strong> {result.content.techStack.join(', ')}</p>
                </div>
              ) : (
                <pre className="p-4 rounded bg-[#0D1526] border border-[#28344C] text-[#8891A6] whitespace-pre-wrap leading-relaxed">
                  {typeof result.content === 'string' ? result.content : JSON.stringify(result.content, null, 2)}
                </pre>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              <div className="text-[#8891A6] text-[11px] uppercase tracking-wider">Suggested CLI Shortcuts</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {quickShortcuts.map((item) => (
                  <button
                    key={item.cmd}
                    onClick={() => {
                      setQuery(item.cmd);
                      handleRun(item.cmd);
                    }}
                    className="p-3 rounded bg-[#0D1526] border border-[#28344C] hover:border-[#E8A33D] text-left flex items-center justify-between group transition-all"
                  >
                    <div>
                      <span className="text-[#E8A33D] font-bold block">{item.cmd}</span>
                      <span className="text-[#8891A6] text-[10px]">{item.desc}</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-[#8891A6] group-hover:text-[#E8A33D] transition-transform group-hover:translate-x-1" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-[#0D1526] border-t border-[#28344C] flex items-center justify-between font-mono-tech text-[10px] text-[#8891A6]">
          <div className="flex items-center space-x-2">
            <kbd className="px-1.5 py-0.5 rounded bg-[#141F35] border border-[#28344C] text-[#E8A33D]">ESC</kbd>
            <span>to close</span>
          </div>
          <div className="flex items-center space-x-2">
            <kbd className="px-1.5 py-0.5 rounded bg-[#141F35] border border-[#28344C] text-[#E8A33D]">ENTER</kbd>
            <span>to run command</span>
          </div>
        </div>
      </div>
    </div>
  );
}
