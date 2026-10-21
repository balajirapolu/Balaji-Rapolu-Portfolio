export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'MERN Full Stack' | 'AI/ML System' | 'Full-Stack' | 'AI Agent System';
  period: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  problem: string;
  approach: string;
  architecture: string[];
  techDecisions: string[];
  results: string[];
  techStack: string[];
  imagePlaceholder?: string;
}

export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  highlights: string[];
  techStack: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  score: string;
  highlights?: string;
}

export interface Achievement {
  title: string;
  event: string;
  location: string;
  badge: string;
  description: string;
}

export interface Certification {
  name: string;
  issuer: string;
  verified: boolean;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Balaji Rapolu',
    tagline: 'Full-Stack Developer & Technical Builder',
    bio: 'Undergraduate Computer Science engineer at SRM University AP (GPA 9.20/10.0). Driven by technical depth across the stack—from MERN web systems and production Spring Boot backends to PyTorch computer vision models.',
    email: 'rapolubalaji248@gmail.com',
    phone: '+91 7569732863',
    github: 'https://github.com/balajirapolu',
    linkedin: 'https://linkedin.com/in/balajirapolu',
    location: 'Andhra Pradesh, India',
    currentFocus: 'LangGraph multi-agent systems, Spring Boot REST microservices & PyTorch computer vision',
  },

  academics: [
    {
      institution: 'SRM University AP',
      degree: 'B.Tech in Computer Science & Engineering',
      period: '2023 - Present',
      score: '9.20 / 10.0 GPA',
      highlights: 'Consistently top-tier academic performance with hands-on research & system building.',
    },
    {
      institution: 'VIT Junior College (BIEAP)',
      degree: 'Class 12th Board Examinations',
      period: '2021 - 2023',
      score: '967 / 1000',
      highlights: 'Strong foundation in Mathematics, Physics, and Computer Science fundamentals.',
    },
    {
      institution: 'Narayana School',
      degree: 'Class 10th Board Examinations',
      period: '2021',
      score: '10.0 / 10.0 GPA',
      highlights: 'Perfect academic score with distinctions in Science and Mathematics.',
    },
  ] as Education[],

  experience: [
    {
      company: 'Bizplus4U',
      role: 'Freelance Full-Stack Developer',
      period: 'Nov 2025 – Jan 2026',
      highlights: [
        'Enhanced an LMS Portal by optimizing REST API architecture, refactoring frontend state management, and delivering a functional React Native mobile application.',
        'Migrated legacy SMS Portal codebase from unmaintainable EJS templates to strict TypeScript, eliminating critical runtime errors and improving system stability.',
      ],
      techStack: ['React Native', 'React.js', 'Node.js', 'TypeScript', 'REST APIs', 'EJS'],
    },
    {
      company: 'Infosys Springboard 6.0 (Batch 13)',
      role: 'AIML Intern',
      period: 'Feb 2026 – Apr 2026',
      highlights: [
        'Engineered an AI-powered image segmentation solution using PyTorch trained on the COCO 2017 dataset with automated evaluation metrics.',
        'Constructed a real-time Streamlit dashboard supporting live subject isolation and instant background replacement workflows.',
      ],
      techStack: ['Python', 'PyTorch', 'COCO 2017', 'OpenCV', 'Streamlit', 'ResNet34-UNet'],
    },
  ] as WorkExperience[],

  projects: [
    {
      id: 'jobpulse',
      title: 'JobPulse',
      subtitle: 'AI-Powered Multi-Agent Job Recommender System',
      category: 'AI Agent System',
      period: '2026',
      githubUrl: 'https://github.com/balajirapolu/JobPulse-AI-Powered-Multi-Agent-Job-Recommender',
      featured: true,
      problem: 'Job seekers face high friction with brittle keyword-scraping boards, opaque ranking rubrics, and token-heavy LLM re-ranking loops that introduce latency and cost.',
      approach: 'Constructed an end-to-end multi-agent intelligence pipeline orchestrated with LangGraph, Groq LLMs (Llama 3.3 & Qwen), asynchronous SQLite checkpointing, and real-time SSE streaming.',
      architecture: [
        '12-Node LangGraph StateGraph with AsyncSqliteSaver checkpoints & human-in-the-loop interrupts',
        'Parallel live API fan-out querying Adzuna, OpenWeb Ninja JSearch, Remotive, Arbeitnow, and Greenhouse ATS',
        'Multi-stage candidate ingestion funnel (Fetched → Normalized → Deduped → Filtered → Scored → Shown)',
        'FastAPI async backend streaming SSE telemetry to a Vite React UI behind unbuffered Nginx reverse proxy',
      ],
      techDecisions: [
        'Leveraged ultra-low latency Groq Cloud inference (Llama-3.3-70b / Qwen-27b) to eliminate LLM scoring timeouts',
        'Engineered deterministic Python rule filtering for staleness (>30d), HTTP liveness, and multi-currency normalization to enable 0-token instant re-ranking',
        'Integrated LangGraph interrupt checkpoints allowing candidates to review and adjust skills and queries prior to live fetching',
      ],
      results: [
        'Seamlessly coordinated 5 live job API adapters in parallel with isolated 25s timeout budgets and audit telemetry badges',
        'Delivered complete containerized deployment with multi-stage Docker Compose, health checks, and persistent volumes',
      ],
      techStack: ['Python', 'LangGraph', 'LangChain', 'Groq LLM', 'FastAPI', 'React.js', 'Docker Compose', 'SQLite', 'Tailwind CSS'],
    },
    {
      id: 'propex',
      title: 'PROPEx',
      subtitle: 'Real Estate Property Management Platform',
      category: 'MERN Full Stack',
      period: '2024',
      githubUrl: 'https://github.com/balajirapolu/propex',
      liveUrl: 'https://propex-demo.vercel.app',
      featured: true,
      problem: 'Property buyers and sellers needed a streamlined web platform to search, list, and manage real estate with secure authentication.',
      approach: 'Engineered a MERN stack application featuring MongoDB spatial querying, Express REST endpoints, and JWT authorization.',
      architecture: [
        'Express.js & Node.js backend with Mongoose ODM schemas',
        'React frontend state management with custom HTTP hook architecture',
        'MongoDB Atlas database integration',
      ],
      techDecisions: [
        'Designed decoupled REST APIs to isolate property CRUD logic from user auth channels',
        'Implemented image upload handling and responsive grid preview components',
      ],
      results: [
        'Successfully delivered property listing management with sub-100ms API response times',
      ],
      techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'REST APIs'],
    },
    {
      id: 'visionextract',
      title: 'VisionExtract',
      subtitle: 'AI-Powered Subject Isolation System',
      category: 'AI/ML System',
      period: '2026',
      githubUrl: 'https://github.com/balajirapolu/visionextract',
      featured: true,
      problem: 'Generic background removal tools fail on fine object contours and lack real-time parameter tuning for custom datasets.',
      approach: 'Trained a ResNet34-UNet segmentation neural network for over 110+ epochs using PyTorch, OpenCV, and Albumentations.',
      architecture: [
        'Encoder-Decoder UNet architecture with ResNet34 backbone pretrained on ImageNet',
        'Pre-processing pipeline utilizing Albumentations for rotation, scaling, and color jittering',
        'Streamlit interactive web runtime for instantaneous model evaluation',
      ],
      techDecisions: [
        'Selected ResNet34 encoder to balance feature extraction accuracy with real-time inference speed',
        'Used Albumentations data augmentation pipeline to prevent model overfitting on subject edges',
      ],
      results: [
        'Achieved crisp subject edge extraction after 110+ training epochs',
        'Built an interactive dashboard allowing live background swapping in seconds',
      ],
      techStack: ['Python', 'PyTorch', 'ResNet34-UNet', 'OpenCV', 'Albumentations', 'Streamlit'],
    },
    {
      id: 'notexchange',
      title: 'NoteXchange',
      subtitle: 'Student Academic Notes Sharing & Rating Platform',
      category: 'Full-Stack',
      period: '2025',
      githubUrl: 'https://github.com/balajirapolu/notexchange',
      featured: true,
      problem: 'Students struggled to access, filter, and rate verified academic study material across courses without centralized role-based authentication.',
      approach: 'Built a decoupled Java Spring Boot REST backend with JWT authentication paired with a responsive React client.',
      architecture: [
        'Spring Boot Layered Architecture (Controller -> Service -> Repository -> Database)',
        'Spring Data JPA with Custom JPQL queries for optimized data retrieval',
        'Global Exception Handler & DTO Pattern to prevent internal entity leaks',
        'Docker containerization for reproducible multi-environment deployment',
      ],
      techDecisions: [
        'Selected Spring Data JPA Server-Side Pagination (Pageable) to eliminate high payload transfers over HTTP',
        'Implemented JWT with HTTP-only cookies and role-based route guards for secure user sessions',
      ],
      results: [
        'Reduced query payload size and response latency for large search requests',
        'Containerized full backend setup into isolated Docker images for seamless deployment',
      ],
      techStack: ['Java', 'Spring Boot', 'Spring Data JPA', 'React.js', 'MySQL', 'JWT', 'Docker'],
    },
    {
      id: 'launchpad',
      title: 'LaunchPad',
      subtitle: 'Hiring & Technical Interview Preparation Dashboard',
      category: 'Full-Stack',
      period: '2025',
      githubUrl: 'https://github.com/balajirapolu/launchpad',
      featured: true,
      problem: 'Tracking technical preparation topics, recruitment stages, and coding goals was fragmented across spreadsheets.',
      approach: 'Created an all-in-one preparation dashboard with targeted REST endpoints and optimistic UI updates for real-time progress adjustments.',
      architecture: [
        'Spring Boot RESTful micro-architecture with MySQL relational schema',
        'Targeted PATCH endpoints for granular preparation status updates',
        'Docker Compose orchestrating MySQL database and Spring Boot backend',
      ],
      techDecisions: [
        'Used optimistic UI state updates in React to provide instant visual feedback during topic slider movements',
        'Applied DTO mappings to strictly define API contract inputs and outputs',
      ],
      results: [
        'Streamlined interview prep tracking into a unified single-pane interface',
        'Zero UI latency on state updates thanks to optimistic rendering paired with PATCH endpoints',
      ],
      techStack: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'Tailwind CSS', 'Docker Compose'],
    },
  ] as Project[],

  achievements: [
    {
      title: 'Shortlisted Top 45 Teams',
      event: 'Smart India Hackathon (SIH)',
      location: 'SRM University AP',
      badge: 'National Hackathon',
      description: 'Selected among top 45 teams for developing high-impact solution addressing complex engineering problem statement.',
    },
    {
      title: '1st Place Winner',
      event: 'Building with Generative AI (No Coding) Hackathon',
      location: 'BITS Hyderabad',
      badge: 'Hackathon Champion',
      description: 'Secured 1st rank by designing and prototyping an innovative AI workflow leveraging LLM agentic prompt pipelines.',
    },
  ] as Achievement[],

  certifications: [
    {
      name: 'Oracle Certified Professional: Java SE 17 Developer Certification',
      issuer: 'Oracle',
      verified: true,
    },
    {
      name: 'MongoDB Associate Developer Certification',
      issuer: 'MongoDB Inc.',
      verified: true,
    },
    {
      name: 'Software Testing Certification',
      issuer: 'NPTEL / Skill India',
      verified: true,
    },
    {
      name: 'Prompt Design in Vertex AI',
      issuer: 'Google Cloud Skills Boost',
      verified: true,
    },
  ] as Certification[],

  skills: {
    languages: ['Java (SE 17)', 'C++', 'SQL', 'JavaScript', 'TypeScript', 'Python'],
    backend: ['Spring Boot', 'REST APIs', 'FastAPI', 'Spring Data JPA', 'JWT', 'Express.js', 'Node.js'],
    frontend: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'React Native'],
    databases: ['MySQL', 'MongoDB', 'SQLite'],
    tools: ['Git', 'GitHub', 'Docker', 'Docker Compose', 'LangGraph', 'LangChain', 'Postman', 'Streamlit', 'PyTorch'],
    coreCompetencies: ['Software Development Life Cycle (SDLC)', 'Multi-Agent Architectures', 'Object-Oriented Programming (OOP)', 'RESTful Architecture', 'Layered Application Design'],
  },

  journey: [
    {
      phase: '01',
      title: 'Web & MERN Foundations',
      subtitle: 'Building raw JavaScript & Full-Stack fundamentals',
      description: 'Started by mastering core web standards, React component lifecycles, Express REST APIs, and MongoDB schemas through projects like PROPEx.',
      tech: ['JavaScript', 'React.js', 'Node.js', 'MongoDB', 'Express.js'],
    },
    {
      phase: '02',
      title: 'Transition to Java & Enterprise Backends',
      subtitle: 'Delving into static typing, OOP & system design',
      description: 'Recognized the importance of strict enterprise patterns, concurrency, and OOP principles. Mastered Java SE 17 and earned Oracle Certified Professional credentials.',
      tech: ['Java SE 17', 'OOP Principles', 'Data Structures', 'C++'],
    },
    {
      phase: '03',
      title: 'Spring Boot & Production Architecture',
      subtitle: 'Building containerized, scalable micro-backends',
      description: 'Architected robust backend systems with Spring Data JPA, DTO patterns, server-side pagination, JWT security, and Docker containerization (NoteXchange, LaunchPad).',
      tech: ['Spring Boot', 'Spring Data JPA', 'MySQL', 'JWT', 'Docker'],
    },
    {
      phase: '04',
      title: 'AI Engineering & Agentic Systems',
      subtitle: 'PyTorch vision models & LangGraph multi-agent pipelines',
      description: 'Expanded expertise into deep learning image segmentation (Infosys Springboard intern), PyTorch ResNet34-UNet architectures, and autonomous multi-agent pipelines with LangGraph and Groq LLMs (JobPulse).',
      tech: ['Python', 'LangGraph', 'PyTorch', 'Groq LLMs', 'FastAPI', 'Streamlit', 'Docker'],
    },
  ],

  terminalHelp: [
    { command: 'whoami', desc: 'Display Balaji Rapolu profile overview' },
    { command: 'journey', desc: 'View evolution: MERN -> Java -> Spring Boot -> AI' },
    { command: 'projects', desc: 'List all major full-stack & AI agent case studies' },
    { command: 'project <id>', desc: 'View deep technical breakdown (e.g. project jobpulse)' },
    { command: 'skills', desc: 'Display technical skills & core competencies' },
    { command: 'gpa', desc: 'Show academic credentials (9.20 GPA @ SRM AP)' },
    { command: 'certs', desc: 'List verified professional certifications' },
    { command: 'achievements', desc: 'View hackathon awards (SIH, BITS Hyderabad)' },
    { command: 'experience', desc: 'List work experience & internship details' },
    { command: 'contact', desc: 'Get direct contact email, phone, and links' },
    { command: 'clear', desc: 'Clear the terminal output' },
    { command: 'help', desc: 'Show available CLI commands' },
  ],
};
