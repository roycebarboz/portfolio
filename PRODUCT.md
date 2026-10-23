# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Recruiters and hiring managers evaluating Royce Barboz for full-time software engineering / AI roles after an MS in Computer Science (Stevens Institute of Technology, May 2026). They skim quickly; success is an interview request or an opened CV.

## Product Purpose
A personal portfolio site for Royce Barboz, Software Developer. It presents skills, education, experience, selected projects, and contact details so a recruiter can judge fit fast and reach out.

## Positioning
Measurable impact, taken from the resume (public/images/Royce_AI_Engineer.pdf). Projects are framed by outcomes, not tech lists. Breadth (Generative AI, full-stack, cloud/DevOps) supports the impact claims rather than leading. Source-of-truth metrics:
- LedgerQA: 68% on FinanceBench's 150-question set vs 24% for a text-RAG baseline; numeric accuracy 50% to 72% via XBRL extraction; computed-answer accuracy 60% to 90% via code-interpreter sandbox; 84 filings from 32 companies; 12s p95 latency and $0.02/question.
- Verity: retrieval recall@5 0.72 to 0.84; pipeline pass rate 71% to 84% on a 31-ticket eval set; $0.0042 per ticket at 2.4s p95 on AWS ECS Fargate.
- ProcureIQ: four-agent LangGraph vendor-risk pipeline; no fabricated risk scores across 12 partial-data cases; validated on 8 vendor scenarios.
- Stevens (Technology Support): multi-hour weekly workflow cut to minutes (15+ scheduling cases); environment setup time down ~80%.
- IGSCF (freelance): sole technical contact; Firebase Auth RBAC with Firestore rules; 5-content-type admin CRUD portal.

## Operating Context
Visited on desktop and mobile, often from a resume link or application. Deployed as a static site on GitHub Pages (base path via import.meta.env.BASE_URL). CV available as a PDF.

## Capabilities and Constraints
- Existing stack: React 19, Vite, framer-motion, react-icons; GitHub Actions deploy to GitHub Pages.
- Sections today: Hero, About (skills/education/certifications tabs), Experience, My Work (4 projects, 3 shown by default), Services, Contact.
- No hard constraints: the user is open to restructuring sections and content.

## Evidence on Hand
The resume (public/images/Royce_AI_Engineer.pdf) is the authoritative source for the CV link, projects (LedgerQA, Verity, ProcureIQ), experience, education (MS CS Stevens, GPA 3.5/4.0), skills and certification (AWS Certified Solutions Architect – Associate). The old my-cv.pdf is superseded. The site's current project cards (Financial RAG Analyst, Inspectify, etc.) predate it and may be stale versus the resume. Also on hand: portrait photo, existing project images, contact email, LinkedIn and GitHub. The phone number is deliberately not shown on the site. Do not fabricate testimonials, employers, or metrics beyond what exists in the source.

## Product Principles
- Lead with outcomes and numbers; a recruiter should see the impact within seconds.
- Make the next step (CV, contact) always easy to find.
- Every claim traces to real work; no invented proof.
- Scannable first, detailed on demand.
