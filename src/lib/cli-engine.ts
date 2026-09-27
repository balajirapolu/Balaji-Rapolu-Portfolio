import { PORTFOLIO_DATA } from './portfolio-data';

export interface CliOutput {
  command: string;
  type: 'text' | 'json' | 'list' | 'error' | 'clear' | 'project';
  content: any;
  timestamp: string;
}

export function executeCliCommand(rawCommand: string): CliOutput {
  const trimmed = rawCommand.trim();
  const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const parts = trimmed.split(/\s+/);
  const mainCmd = parts[0]?.toLowerCase() || '';
  const arg = parts[1]?.toLowerCase() || '';

  if (!trimmed) {
    return {
      command: rawCommand,
      type: 'text',
      content: '',
      timestamp,
    };
  }

  if (mainCmd === 'clear' || mainCmd === 'cls') {
    return {
      command: rawCommand,
      type: 'clear',
      content: 'Terminal screen cleared.',
      timestamp,
    };
  }

  if (mainCmd === 'help' || mainCmd === '?') {
    return {
      command: rawCommand,
      type: 'list',
      content: PORTFOLIO_DATA.terminalHelp.map(h => `${h.command.padEnd(16, ' ')} : ${h.desc}`),
      timestamp,
    };
  }

  if (mainCmd === 'whoami' || mainCmd === 'bio' || mainCmd === 'about') {
    const p = PORTFOLIO_DATA.profile;
    return {
      command: rawCommand,
      type: 'text',
      content: [
        `NAME        : ${p.name}`,
        `TAGLINE     : ${p.tagline}`,
        `GPA         : 9.20 / 10.0 (SRM University AP)`,
        `FOCUS       : ${p.currentFocus}`,
        `EMAIL       : ${p.email}`,
        `LOCATION    : ${p.location}`,
        ``,
        `BIO:`,
        `${p.bio}`,
      ].join('\n'),
      timestamp,
    };
  }

  if (mainCmd === 'journey' || mainCmd === 'timeline') {
    const lines = PORTFOLIO_DATA.journey.map(j => 
      `[Phase ${j.phase}] ${j.title.toUpperCase()}\n  ${j.subtitle}\n  Tech: ${j.tech.join(', ')}\n  Summary: ${j.description}\n`
    );
    return {
      command: rawCommand,
      type: 'text',
      content: lines.join('\n'),
      timestamp,
    };
  }

  if (mainCmd === 'projects' || mainCmd === 'ls') {
    const projList = PORTFOLIO_DATA.projects.map(p => 
      `• [${p.id}] ${p.title} (${p.category}) - ${p.subtitle}`
    );
    return {
      command: rawCommand,
      type: 'text',
      content: `AVAILABLE CASE STUDIES:\n\n${projList.join('\n')}\n\nTip: Type 'project <id>' or 'cat <id>' to inspect full technical decisions & architecture.`,
      timestamp,
    };
  }

  if (mainCmd === 'project' || mainCmd === 'cat') {
    if (!arg) {
      return {
        command: rawCommand,
        type: 'error',
        content: `Error: Please specify a project ID. Example: 'project notexchange' or 'cat launchpad'. Available: ${PORTFOLIO_DATA.projects.map(p => p.id).join(', ')}`,
        timestamp,
      };
    }

    const project = PORTFOLIO_DATA.projects.find(p => p.id.toLowerCase() === arg || p.title.toLowerCase() === arg);
    if (!project) {
      return {
        command: rawCommand,
        type: 'error',
        content: `Error: Project '${arg}' not found. Available IDs: ${PORTFOLIO_DATA.projects.map(p => p.id).join(', ')}`,
        timestamp,
      };
    }

    return {
      command: rawCommand,
      type: 'project',
      content: project,
      timestamp,
    };
  }

  if (mainCmd === 'skills') {
    const s = PORTFOLIO_DATA.skills;
    return {
      command: rawCommand,
      type: 'text',
      content: [
        `LANGUAGES    : ${s.languages.join(', ')}`,
        `BACKEND      : ${s.backend.join(', ')}`,
        `FRONTEND     : ${s.frontend.join(', ')}`,
        `DATABASES    : ${s.databases.join(', ')}`,
        `TOOLS        : ${s.tools.join(', ')}`,
        `COMPETENCIES : ${s.coreCompetencies.join(', ')}`,
      ].join('\n'),
      timestamp,
    };
  }

  if (mainCmd === 'gpa' || mainCmd === 'academics' || mainCmd === 'education') {
    const lines = PORTFOLIO_DATA.academics.map(a => 
      `• ${a.institution}\n  Degree: ${a.degree} (${a.period})\n  Score:  ${a.score}\n  Note:   ${a.highlights}`
    );
    return {
      command: rawCommand,
      type: 'text',
      content: `ACADEMIC CREDENTIALS:\n\n${lines.join('\n\n')}`,
      timestamp,
    };
  }

  if (mainCmd === 'certs' || mainCmd === 'certifications') {
    const lines = PORTFOLIO_DATA.certifications.map(c => `[VERIFIED] ${c.name} — Issuer: ${c.issuer}`);
    return {
      command: rawCommand,
      type: 'text',
      content: `PROFESSIONAL CERTIFICATIONS:\n\n${lines.join('\n')}`,
      timestamp,
    };
  }

  if (mainCmd === 'achievements' || mainCmd === 'awards' || mainCmd === 'hackathons') {
    const lines = PORTFOLIO_DATA.achievements.map(a => `🏆 ${a.title} @ ${a.event} (${a.location})\n   ${a.description}`);
    return {
      command: rawCommand,
      type: 'text',
      content: `HACKATHONS & ACHIEVEMENTS:\n\n${lines.join('\n\n')}`,
      timestamp,
    };
  }

  if (mainCmd === 'experience' || mainCmd === 'exp' || mainCmd === 'work') {
    const lines = PORTFOLIO_DATA.experience.map(e => 
      `💼 ${e.role} — ${e.company} (${e.period})\n   Stack: ${e.techStack.join(', ')}\n   Highlights:\n   - ${e.highlights.join('\n   - ')}`
    );
    return {
      command: rawCommand,
      type: 'text',
      content: `WORK EXPERIENCE:\n\n${lines.join('\n\n')}`,
      timestamp,
    };
  }

  if (mainCmd === 'contact' || mainCmd === 'socials') {
    const p = PORTFOLIO_DATA.profile;
    return {
      command: rawCommand,
      type: 'text',
      content: [
        `EMAIL    : ${p.email}`,
        `PHONE    : ${p.phone}`,
        `GITHUB   : ${p.github}`,
        `LINKEDIN : ${p.linkedin}`,
        `LOCATION : ${p.location}`,
        ``,
        `Feel free to reach out for Full Stack Java / AI engineering roles or technical collaborations!`,
      ].join('\n'),
      timestamp,
    };
  }

  if (mainCmd === 'sudo') {
    return {
      command: rawCommand,
      type: 'text',
      content: `[PERMISSION GRANTED]: Balaji Rapolu is authenticated. Accessing high-performance engineering mode... ⚡\nHint: Try commands 'projects', 'journey', or 'gpa'.`,
      timestamp,
    };
  }

  // Handle direct project name shortcut like 'notexchange'
  const matchedProject = PORTFOLIO_DATA.projects.find(p => p.id.toLowerCase() === mainCmd);
  if (matchedProject) {
    return {
      command: rawCommand,
      type: 'project',
      content: matchedProject,
      timestamp,
    };
  }

  return {
    command: rawCommand,
    type: 'error',
    content: `Command '${trimmed}' not recognized. Type 'help' to see available commands or 'ls' for projects.`,
    timestamp,
  };
}
