# Master Portfolio Specification: Balaji Rapolu

## 1. Executive Summary & Core Identity
- **Owner**: Balaji Rapolu
- **Tagline**: Full-Stack Java Developer & Technical Builder
- **Core Narrative**: A curious, adaptable engineer who learns by building real systems. Journey spans from MERN/Web Development to Java & Spring Boot backend engineering, extending into modern AI/ML development.
- **Design Philosophy**: Premium, restrained, authentic product engineering aesthetic. Dark ink-navy visual identity, IBM Plex typography, crisp hairline borders, warm amber accents, and a signature interactive CLI/Terminal command palette interface.

---

## 2. Personal & Academic Profile

### Education
- **SRM University AP**: Undergraduate (CSE), 2023 – Present
  - **GPA**: 9.20 / 10.0
- **VIT Junior College (BIEAP)**: Class 12th (2023)
  - **Score**: 967 / 1000
- **Narayana School**: Class 10th (2021)
  - **GPA**: 10.0 / 10.0

### Work Experience
1. **Freelance Full Stack Developer — Bizplus4U** (Nov 2025 – Jan 2026)
   - Rebuilt an unstable LMS Portal: optimized backend REST architecture, integrated APIs, and shipped a functional mobile app using React Native.
   - Overhauled legacy SMS Portal: migrated codebase from EJS templates to TypeScript, improving maintainability and performance.
2. **AIML Intern — Infosys Springboard 6.0 (Batch 13)** (Feb 2026 – Apr 2026)
   - Developed AI image segmentation model using PyTorch & COCO 2017 dataset.
   - Built an interactive Streamlit application for real-time subject isolation and background replacement.

### Achievements & Hackathons
- **Smart India Hackathon (SIH)**: Shortlisted among Top 45 teams at SRM University AP.
- **BITS Hyderabad Hackathon**: 1st Place in "Building with Generative AI (No Coding)" competition.

### Professional Certifications
- **Oracle Certified Professional**: Java SE 17 Developer Certification
- **MongoDB Associate Developer Certification**
- **NPTEL / Skill India**: Software Testing Certification
- **Google Cloud Skills Boost**: Prompt Design in Vertex AI

### Technical Skills
- **Languages**: Java, C++, SQL, JavaScript, TypeScript, Python
- **Frontend**: React.js, Next.js, HTML5, CSS3, Tailwind CSS
- **Backend**: Spring Boot, REST APIs, JWT, Express.js, Node.js
- **Databases**: MySQL, MongoDB
- **Tools & Platforms**: Git, GitHub, Docker, Postman, Streamlit, PyTorch
- **Core Competencies**: SDLC, OOP, Software Architecture, RESTful Services

---

## 3. Projects Portfolio (Case Studies)

### 1. NoteXchange — Student Notes Sharing Platform
- **Category**: Java Full Stack
- **Tech Stack**: Spring Boot, React, MySQL, JWT, Docker, Spring Data JPA
- **Problem**: Academic note-sharing was fragmented, inefficient, and lacked role-based search and rating.
- **Architecture & Decisions**:
  - Layered architecture with Spring Data JPA & DTO patterns for strict data encapsulation.
  - Server-side pagination (`Pageable`) and custom JPQL queries to reduce payload sizes and response latency.
  - Containerized deployment using Docker.

### 2. LaunchPad — Hiring & Interview Preparation Dashboard
- **Category**: Java Full Stack
- **Tech Stack**: Spring Boot, React, MySQL, Tailwind CSS, Docker Compose
- **Problem**: Interview prep materials and application tracking are dispersed across multiple tools.
- **Architecture & Decisions**:
  - Unified dashboard tracking study goals, recruitment pipelines, and topic readiness.
  - RESTful APIs with targeted PATCH endpoints and optimistic UI updates for real-time slider updates.
  - Full-stack containerization with Docker Compose.

### 3. VisionExtract — AI-Powered Subject Isolation System
- **Category**: AI/ML System
- **Tech Stack**: Python, PyTorch, ResNet34-UNet, OpenCV, Albumentations, Streamlit
- **Problem**: Automated subject background extraction often fails on fine border details without custom model tuning.
- **Architecture & Decisions**:
  - Trained ResNet34-UNet for 110+ epochs on custom dataset with OpenCV image augmentations.
  - Real-time Streamlit dashboard supporting live image upload, subject isolation, and background replacement.

### 4. PROPEx — Real Estate Management Website
- **Category**: MERN Full Stack
- **Tech Stack**: MongoDB, Express.js, React.js, Node.js, JWT
- **Problem**: Real estate browsing requires seamless listing management, filtering, and role-based access.
- **Architecture & Decisions**:
  - Modular MERN stack with secure JWT auth, CRUD API endpoints, and responsive UI.

---

## 4. Design & Aesthetic Specifications

### Color System
- **Base Background**: `#0D1526` (Ink-Navy)
- **Elevated Surface / Cards**: `#141F35` (Navy Lift)
- **Hairline Borders**: `#28344C` (Engineered Hairline)
- **Primary Text**: `#E7E9EE` (Off-white / Cool White)
- **Muted Text**: `#8891A6` (Slate Grey)
- **Accent Color**: `#E8A33D` (Warm Amber - used strictly for interactive focus, terminal prompts, and active CTAs)

### Typography
- **Primary Body & Headings**: IBM Plex Sans (Google Fonts)
- **Code & CLI / Metadata**: IBM Plex Mono (Google Fonts)

### Signature Interaction
- **CLI Terminal Shell**: Interactive embedded terminal in Hero section with standard commands (`whoami`, `journey`, `projects`, `skills`, `gpa`, `contact`, `clear`, `help`).
- **Command Palette (`Cmd+K` / `Ctrl+K`)**: Global command modal syncing with CLI terminal logic for quick navigation.

---

## 5. Architecture & Tech Stack

### Tech Stack Selection
- **Framework**: Next.js 14+ (App Router, TypeScript)
- **Styling**: Tailwind CSS + Custom Design Tokens (globals.css)
- **State & Animation**: Framer Motion
- **Icons**: Lucide React
- **Backend API Routes**:
  - `/api/cli`: Terminal command parser and executor.
  - `/api/github`: Dynamic GitHub stats and repo info.
  - `/api/stats`: Academic & coding statistics.
  - `/api/contact`: Form submission handling, input validation, rate-limiting, and email dispatch.

---

## 6. Development Workflow Plan
1. **Backend Layer**: Build Next.js API routes (`/api/cli`, `/api/github`, `/api/stats`, `/api/contact`) with validation, typed contracts, and fallback data.
2. **Frontend Foundation**: Global styles, typography imports, color tokens, layout shell.
3. **Hero & Terminal CLI Component**: Interactive shell and keyboard palette (`Cmd+K`).
4. **Bento About Grid**: Academic tiles (GPA 9.20), certs ticker, learning focus, live GitHub widget.
5. **Interactive Journey Timeline**: MERN → Full Stack → Java/Spring Boot → AI/ML.
6. **Case Study Projects Section**: Expanded project cards with deep technical breakdowns.
7. **Credibility & Achievements Strip**: Hackathons, certifications, work experience.
8. **Contact Section & Verification**: Integrated form submit, terminal shortcuts, and end-to-end testing.
