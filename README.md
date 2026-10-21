# Balaji Rapolu — Production Portfolio & Engineering Platform

[![Next.js](https://img.shields.io/badge/Next.js-16.3.6-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.0-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Lenis Scroll](https://img.shields.io/badge/Lenis_Smooth_Scroll-1.1-E8A33D?style=for-the-badge)](https://lenis.darkroom.engineering/)

A high-performance, production-grade portfolio and technical engine designed for **Balaji Rapolu** (Full-Stack Developer, B.Tech CSE @ SRM University AP, 9.20 GPA). Built with Next.js 14+ App Router, TypeScript, custom REST micro-backends, Ranade typography, and an interactive CLI terminal command engine.

---

## 🌟 Key Architecture Highlights

- **Cinematic Antigravity Hero Entrance**: Staggered scale-down opening sequence with custom cubic-bezier cushioning (`cubic-bezier(0.16, 1, 0.3, 1)`), depth blur settling, and full-width background typography.
- **Floating Pill Navbar**: Detached glassmorphism capsule header featuring a custom stylized **RB** monogram logo component and direct navigation links.
- **Signature CLI Command Engine**: Embedded interactive terminal shell supporting real-time commands (`whoami`, `projects`, `journey`, `gpa`, `certs`, `contact`, `sudo`) synced with a global `Cmd+K` / `Ctrl+K` modal overlay.
- **Asymmetric Bento Overview**: Dynamic credit tiles showcasing 9.20 GPA academic credentials, verified Oracle & MongoDB certifications, active learning stack, and live GitHub API integration.
- **Architectural Journey Timeline**: Interactive step-by-step narrative documenting the shift from MERN web stack to enterprise Java Spring Boot REST APIs and PyTorch computer vision systems.
- **Technical Case Studies**: Deep-dive breakdowns for **JobPulse**, **PROPEx**, **VisionExtract**, **NoteXchange**, and **LaunchPad** covering Problem Statement → Architectural Decisions → Outcomes.

---

## 🛠️ Tech Stack & Systems

| Layer | Technology / Library | Purpose |
| :--- | :--- | :--- |
| **Framework** | Next.js 16+ (App Router) | Server-side rendering, API routes & static generation |
| **Language** | TypeScript 5.0 | Strict type contracts and interface definitions |
| **Styling** | Tailwind CSS + Custom Tokens | Dark Ink-Navy palette (`#0D1526`), hairline borders, CSS variables |
| **Typography** | Ranade (Fontshare) + Geist Mono | Premium geometric sans for headings/body & monospace for CLI |
| **Motion** | Framer Motion + Lenis Scroll | Antigravity scale entrance, smooth wheel scrolling & reveal triggers |
| **Icons & Assets** | Lucide React + Inline SVG | Production-safe SVG vectors and brand icons |
| **Backend Routes** | Next.js Server Actions & API | CLI parser, GitHub activity caching, contact validation |

---

## 📁 Repository Directory Structure

```text
Balaji-Rapolu-Porfolio/
├── PORTFOLIO_SPEC.md        # Master architectural blueprint & resume dataset
├── public/
│   ├── images/              # Optimized cutout portrait & signature assets
│   └── videos/              # High-contrast signature intro media
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── cli/         # POST /api/cli terminal parser endpoint
│   │   │   ├── contact/     # POST /api/contact form handler & validation
│   │   │   ├── github/      # GET /api/github live activity endpoint
│   │   │   └── stats/       # GET /api/stats metrics endpoint
│   │   ├── globals.css      # Core design tokens, Ranade font & CSS utilities
│   │   ├── layout.tsx       # Root layout, fonts, FloatingNavbar & providers
│   │   └── page.tsx         # Main entry assembling hero, bento & case studies
│   ├── components/
│   │   ├── ImmersiveHero.tsx                 # Cinematic Antigravity 3D Hero
│   │   ├── FloatingNavbar.tsx                # Floating capsule top navbar
│   │   ├── RBLogo.tsx                        # Custom RB monogram logo SVG
│   │   ├── BentoAboutSection.tsx             # Asymmetric credibility grid
│   │   ├── JourneyTimelineSection.tsx        # MERN -> Spring Boot -> AI evolution
│   │   ├── ProjectCaseStudiesSection.tsx     # Full technical case study cards
│   │   ├── CredibilityAchievementsSection.tsx# SIH Top 45 & BITS Hyderabad wins
│   │   ├── ContactSection.tsx                # Interactive contact form
│   │   ├── CommandPaletteModal.tsx           # Cmd+K global CLI shell modal
│   │   ├── CustomCursor.tsx                  # Context-aware dot cursor
│   │   ├── SmoothScroll.tsx                  # Lenis smooth scroll provider
│   │   └── Footer.tsx                        # Bottom footer with white signature
│   └── lib/
│       ├── cli-engine.ts    # CLI command parser logic
│       └── portfolio-data.ts# Single source of truth typed dataset
└── tsconfig.json            # Strict TypeScript configuration with @/* aliases
```

---

## ⚡ Getting Started Locally

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Installation & Execution

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/balajirapolu/Balaji-Rapolu-Porfolio.git
   cd Balaji-Rapolu-Porfolio
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for Production**:
   ```bash
   npm run build
   npm run start
   ```

---

## 🔌 API Endpoint Reference

### 1. Terminal Command API (`POST /api/cli`)
- **Request Body**: `{ "command": "whoami" }`
- **Response**: `{ "command": "whoami", "type": "text", "content": "...", "timestamp": "12:00:00 PM" }`

### 2. Contact Form API (`POST /api/contact`)
- **Request Body**: `{ "name": "Alex", "email": "alex@company.com", "message": "..." }`
- **Response**: `{ "success": true, "message": "Thank you, Alex!...", "timestamp": "..." }`

### 3. GitHub Activity API (`GET /api/github`)
- **Response**: Live repository counts, user stats, and fallback metrics.

---

## 👤 Author & Contact

**Balaji Rapolu**  
Full-Stack Developer | B.Tech CSE @ SRM University AP (GPA: 9.20/10.0)

- **Email**: [rapolubalaji248@gmail.com](mailto:rapolubalaji248@gmail.com)
- **GitHub**: [@balajirapolu](https://github.com/balajirapolu)
- **LinkedIn**: [Balaji Rapolu](https://linkedin.com/in/balajirapolu)

---

© 2026 Balaji Rapolu. Released under the MIT License.
