'use client';

import { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles, ArrowUpRight, Copy, Check } from 'lucide-react';
import { executeCliCommand, CliOutput } from '@/lib/cli-engine';

export default function TerminalHero() {
  const [inputVal, setInputVal] = useState('');
  const [logs, setLogs] = useState<CliOutput[]>([
    {
      command: 'whoami',
      type: 'text',
      content: `NAME        : Balaji Rapolu\nROLE        : Full-Stack Java Developer & Technical Builder\nEDUCATION   : B.Tech CSE @ SRM University AP (GPA: 9.20/10.0)\nFOCUS       : Spring Boot, Microservices, Docker & PyTorch Vision Systems\nSTATUS      : Available for High-Impact Full-Stack Engineering Roles`,
      timestamp: 'SYSTEM BOOT',
    },
  ]);
  const [copied, setCopied] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const presetCommands = [
    { label: '$ whoami', cmd: 'whoami' },
    { label: '$ journey', cmd: 'journey' },
    { label: '$ projects', cmd: 'projects' },
    { label: '$ gpa', cmd: 'gpa' },
    { label: '$ certs', cmd: 'certs' },
    { label: '$ contact', cmd: 'contact' },
  ];

  const handleRunCommand = async (cmdStr: string) => {
    if (!cmdStr.trim()) return;

    if (cmdStr.trim().toLowerCase() === 'clear' || cmdStr.trim().toLowerCase() === 'cls') {
      setLogs([]);
      setInputVal('');
      return;
    }

    // Process locally or via backend /api/cli
    try {
      const res = await fetch('/api/cli', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ command: cmdStr }),
      });

      if (res.ok) {
        const data = await res.json();
        setLogs((prev) => [...prev, data]);
      } else {
        const localResult = executeCliCommand(cmdStr);
        setLogs((prev) => [...prev, localResult]);
      }
    } catch {
      const localResult = executeCliCommand(cmdStr);
      setLogs((prev) => [...prev, localResult]);
    }

    setInputVal('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleRunCommand(inputVal);
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const copyEmail = () => {
    navigator.clipboard.writeText('rapolubalaji248@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative py-8 md:py-16 overflow-hidden">
      {/* Background Subtle Mesh Gradient */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#0080FF]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Editorial Header */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#121518] border border-[#22262B] text-xs font-mono-tech text-[#0080FF]">
            <span className="w-2 h-2 rounded-full bg-[#0080FF] animate-ping" />
            <span>JAVA FULL STACK & AI DEVELOPER</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#E7E9EE] leading-tight">
              Balaji <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E7E9EE] via-[#E7E9EE] to-[#0080FF]">
                Rapolu
              </span>
            </h1>
            <p className="text-[#8891A6] text-sm sm:text-base leading-relaxed max-w-xl">
              Undergraduate Computer Science engineer at <strong className="text-[#E7E9EE]">SRM University AP (GPA 9.20/10.0)</strong>. Driven by technical depth, system architecture, and building production-grade solutions from Spring Boot micro-backends to PyTorch computer vision models.
            </p>
          </div>

          {/* Key Signals Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono-tech text-xs pt-2">
            <div className="p-2.5 rounded bg-[#121518] border border-[#22262B]">
              <span className="block text-[10px] text-[#8891A6]">ACADEMIC GPA</span>
              <span className="text-[#0080FF] font-bold text-sm">9.20 / 10.0</span>
            </div>
            <div className="p-2.5 rounded bg-[#121518] border border-[#22262B]">
              <span className="block text-[10px] text-[#8891A6]">JAVA CERTIFIED</span>
              <span className="text-[#E7E9EE] font-bold text-sm">Oracle SE 17</span>
            </div>
            <div className="p-2.5 rounded bg-[#121518] border border-[#22262B] col-span-2 sm:col-span-1">
              <span className="block text-[10px] text-[#8891A6]">HACKATHONS</span>
              <span className="text-[#E7E9EE] font-bold text-sm">SIH Top 45 & BITS 1st</span>
            </div>
          </div>

          {/* Quick CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="px-5 py-2.5 rounded bg-[#0080FF] hover:bg-[#0066CC] text-white font-semibold text-xs tracking-wider uppercase transition-all flex items-center space-x-2 shadow-lg shadow-[#0080FF]/20"
            >
              <span>Explore Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              onClick={copyEmail}
              className="px-5 py-2.5 rounded bg-[#121518] border border-[#22262B] hover:border-[#0080FF] text-[#E7E9EE] text-xs font-mono-tech transition-all flex items-center space-x-2"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#0080FF]" /> : <Copy className="w-3.5 h-3.5 text-[#8891A6]" />}
              <span>{copied ? 'Copied Email!' : 'Copy Email'}</span>
            </button>
          </div>
        </div>

        {/* Right Interactive CLI Terminal Shell */}
        <div className="lg:col-span-6">
          <div className="rounded-lg bg-[#121518] border border-[#22262B] shadow-2xl overflow-hidden flex flex-col h-[460px] relative">
            {/* Terminal Window Header Bar */}
            <div className="bg-[#0A0C0D] px-4 py-3 border-b border-[#22262B] flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-[#EF4444]/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#F59E0B]/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#10B981]/80 inline-block" />
              </div>
              <div className="flex items-center space-x-2 font-mono-tech text-xs text-[#8891A6]">
                <TerminalIcon className="w-3.5 h-3.5 text-[#0080FF]" />
                <span>balaji-cli -- v1.0.4</span>
              </div>
              <button
                onClick={() => setLogs([])}
                className="text-[10px] font-mono-tech text-[#8891A6] hover:text-[#0080FF] uppercase"
              >
                Clear
              </button>
            </div>

            {/* Quick Command Pills Bar */}
            <div className="bg-[#0A0C0D]/50 px-4 py-2 border-b border-[#22262B]/60 flex items-center space-x-2 overflow-x-auto no-scrollbar">
              <span className="text-[10px] font-mono-tech text-[#8891A6] shrink-0">Quick Run:</span>
              {presetCommands.map((p) => (
                <button
                  key={p.cmd}
                  onClick={() => handleRunCommand(p.cmd)}
                  className="px-2.5 py-1 rounded bg-[#121518] border border-[#22262B] hover:border-[#0080FF] text-[11px] font-mono-tech text-[#0080FF] hover:text-[#E7E9EE] shrink-0 transition-colors"
                >
                  {p.label}
                </button>
              ))}
            </div>

            {/* Terminal Output Area */}
            <div
              className="flex-1 p-4 font-mono-tech text-xs space-y-4 overflow-y-auto bg-[#0A0C0D]/90 text-[#E7E9EE] leading-relaxed cursor-text"
              onClick={() => inputRef.current?.focus()}
            >
              {logs.map((log, index) => (
                <div key={index} className="space-y-1.5 animate-fadeIn">
                  {/* Command Input Prompt Line */}
                  <div className="flex items-center space-x-2 text-[#8891A6]">
                    <span className="text-[#0080FF]">balaji@rapolu</span>
                    <span>:~$</span>
                    <span className="text-[#E7E9EE] font-semibold">{log.command}</span>
                    <span className="text-[10px] text-[#8891A6]/60 ml-auto">{log.timestamp}</span>
                  </div>

                  {/* Output Rendering */}
                  {log.type === 'project' ? (
                    <div className="p-3 rounded bg-[#121518] border border-[#22262B] space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-[#0080FF]">{log.content.title}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-[#0A0C0D] text-[#8891A6] border border-[#22262B]">
                          {log.content.category}
                        </span>
                      </div>
                      <p className="text-[#8891A6] text-xs">{log.content.subtitle}</p>
                      <div className="text-[#E7E9EE] space-y-1 pt-1">
                        <p><strong className="text-[#0080FF]">Problem:</strong> {log.content.problem}</p>
                        <p><strong className="text-[#0080FF]">Tech Stack:</strong> {log.content.techStack.join(', ')}</p>
                      </div>
                      <a
                        href={log.content.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center space-x-1 text-[#0080FF] hover:underline text-xs pt-1"
                      >
                        <span>View Repository</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  ) : (
                    <pre className={`whitespace-pre-wrap ${log.type === 'error' ? 'text-red-400' : 'text-[#8891A6]'}`}>
                      {typeof log.content === 'string' ? log.content : JSON.stringify(log.content, null, 2)}
                    </pre>
                  )}
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            {/* Interactive Command Input Field */}
            <form onSubmit={handleSubmit} className="p-3 bg-[#0A0C0D] border-t border-[#22262B] flex items-center space-x-2">
              <span className="font-mono-tech text-xs text-[#0080FF]">balaji@rapolu:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="type 'help', 'projects', 'gpa'..."
                className="flex-1 bg-transparent font-mono-tech text-xs text-[#E7E9EE] focus:outline-none placeholder-[#8891A6]/50"
              />
              <button
                type="submit"
                className="p-1.5 rounded bg-[#121518] border border-[#22262B] hover:border-[#0080FF] text-[#0080FF]"
              >
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
