'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/portfolio-data';
import { GithubIcon, LinkedinIcon } from '@/components/SocialIcons';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [responseMsg, setResponseMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setResponseMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setResponseMsg(data.message);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setResponseMsg(data.error || 'Failed to send message. Please try again.');
      }
    } catch {
      setStatus('error');
      setResponseMsg('Network error. Please try again or email directly.');
    }
  };

  const openCmdPalette = () => {
    window.dispatchEvent(new CustomEvent('open-cmd-palette'));
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-[#28344C]/60">
      <div className="space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="font-mono-tech text-xs text-[#E8A33D] uppercase tracking-widest">
              [05] GET IN TOUCH
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#E7E9EE] tracking-tight mt-1">
              Let's Build Something High-Impact
            </h2>
          </div>
          <p className="text-[#8891A6] text-xs font-mono-tech max-w-sm">
            Open for Full Stack Java, Backend Engineering, and AI Development roles or technical discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Direct Details & Terminal Shortcuts (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#141F35] border border-[#28344C] rounded-xl p-6 sm:p-8 space-y-6">
              <h3 className="font-mono-tech text-xs text-[#E8A33D] uppercase tracking-wider">
                Direct Channels
              </h3>

              <div className="space-y-4 font-mono-tech text-xs">
                <a
                  href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                  className="p-3 rounded-lg bg-[#0D1526] border border-[#28344C] hover:border-[#E8A33D] flex items-center space-x-3 text-[#E7E9EE] hover:text-[#E8A33D] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#E8A33D] shrink-0" />
                  <span className="truncate">{PORTFOLIO_DATA.profile.email}</span>
                </a>

                <a
                  href={`tel:${PORTFOLIO_DATA.profile.phone}`}
                  className="p-3 rounded-lg bg-[#0D1526] border border-[#28344C] hover:border-[#E8A33D] flex items-center space-x-3 text-[#E7E9EE] hover:text-[#E8A33D] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#E8A33D] shrink-0" />
                  <span>{PORTFOLIO_DATA.profile.phone}</span>
                </a>

                <div className="p-3 rounded-lg bg-[#0D1526] border border-[#28344C] flex items-center space-x-3 text-[#8891A6]">
                  <MapPin className="w-4 h-4 text-[#E8A33D] shrink-0" />
                  <span>{PORTFOLIO_DATA.profile.location}</span>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="pt-4 border-t border-[#28344C] flex items-center space-x-3 font-mono-tech text-xs">
                <a
                  href={PORTFOLIO_DATA.profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 rounded bg-[#0D1526] border border-[#28344C] hover:border-[#E8A33D] text-center text-[#E7E9EE] hover:text-[#E8A33D] transition-colors flex items-center justify-center space-x-1.5"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PORTFOLIO_DATA.profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 rounded bg-[#0D1526] border border-[#28344C] hover:border-[#E8A33D] text-center text-[#E7E9EE] hover:text-[#E8A33D] transition-colors flex items-center justify-center space-x-1.5"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>

              {/* CLI Launcher Button */}
              <button
                onClick={openCmdPalette}
                className="w-full py-3 rounded-xl bg-[#0D1526] border border-[#28344C] hover:border-[#E8A33D] text-[#E8A33D] font-mono-tech text-xs flex items-center justify-center space-x-2 transition-all shadow-md"
              >
                <Terminal className="w-4 h-4" />
                <span>Launch CLI Shell (Cmd+K)</span>
              </button>
            </div>
          </div>

          {/* Interactive Form (Col 7) */}
          <div className="lg:col-span-7">
            <div className="bg-[#141F35] border border-[#28344C] rounded-xl p-6 sm:p-8 space-y-6">
              <h3 className="font-mono-tech text-xs text-[#E8A33D] uppercase tracking-wider">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 font-mono-tech text-xs">
                    <label className="text-[#8891A6] block">YOUR NAME *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Mercer"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0D1526] border border-[#28344C] focus:border-[#E8A33D] text-[#E7E9EE] placeholder-[#8891A6]/40 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5 font-mono-tech text-xs">
                    <label className="text-[#8891A6] block">YOUR EMAIL *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0D1526] border border-[#28344C] focus:border-[#E8A33D] text-[#E7E9EE] placeholder-[#8891A6]/40 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 font-mono-tech text-xs">
                  <label className="text-[#8891A6] block">MESSAGE *</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Balaji, we'd like to discuss a Full Stack Java role..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0D1526] border border-[#28344C] focus:border-[#E8A33D] text-[#E7E9EE] placeholder-[#8891A6]/40 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {status === 'success' && (
                  <div className="p-3 rounded-lg bg-[#10B981]/10 border border-[#10B981]/40 text-[#10B981] font-mono-tech text-xs flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>{responseMsg}</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-3 rounded-lg bg-[#EF4444]/10 border border-[#EF4444]/40 text-[#EF4444] font-mono-tech text-xs flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{responseMsg}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-3 rounded-lg bg-[#E8A33D] hover:bg-[#d49230] disabled:opacity-50 text-[#0D1526] font-semibold text-xs tracking-wider uppercase transition-all flex items-center justify-center space-x-2 shadow-lg shadow-[#E8A33D]/10"
                >
                  <Send className="w-4 h-4" />
                  <span>{status === 'submitting' ? 'Transmitting Message...' : 'Send Direct Message'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
