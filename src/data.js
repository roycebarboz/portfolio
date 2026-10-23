// Every figure below is taken from public/images/Royce_AI_Engineer.pdf.
export const profile = {
  name: 'Royce Barboz',
  title: 'AI engineer',
  claim: 'I build LLM systems and measure whether they got better.',
  credential: 'M.S. Computer Science, Stevens Institute of Technology, May 2026',
  email: 'roycebarboz@gmail.com',
  linkedin: 'https://www.linkedin.com/in/royce-barboz',
  github: 'https://github.com/roycebarboz',
};

// Hero plot: Verity, each trace runs from its baseline to the tuned system. Recall@5 is a fraction of 1, plotted on the same 0 to 100 scale.
export const heroPlot = {
  name: 'Verity',
  axis: 'Score, 0 to 100',
  peak: { gain: '+13', unit: 'pts', label: 'Pipeline pass rate, 71% to 84%' },
  caption: 'Verity on a 31-ticket evaluation set, before and after adding a Qwen3 reranker and fair-merge multi-query retrieval. Recall@5 is a fraction of 1, drawn on the same 0 to 100 scale.',
  traces: [
    { id: 'recall', label: 'Retrieval recall@5', from: 72, to: 84, fromText: '0.72', toText: '0.84', gainText: '+0.12' },
    { id: 'pass', label: 'Pipeline pass rate', from: 71, to: 84, fromText: '71%', toText: '84%', gainText: '+13 pts' },
  ],
};

export const runs = [
  {
    id: 'verity',
    name: 'Verity',
    stack: 'LangGraph, LiteLLM, Chroma, AWS ECS Fargate, Terraform, Datadog',
    summary:
      'Support-ticket answering where every customer-facing claim is grounded in a retrieved knowledge-base chunk, with faithfulness and citation coverage enforced as pass/fail gates in CI.',
    href: 'https://github.com/roycebarboz/Verity',
    caption: '31-ticket evaluation set. Gain from a Qwen3 reranker and fair-merge multi-query retrieval.',
    rows: [
      { metric: 'Retrieval recall@5', unit: '', from: 0.72, to: 0.84, note: 'ChromaDB' },
      { metric: 'Pipeline pass rate', unit: '%', from: 71, to: 84, note: 'of 31 tickets' },
    ],
    readout: [
      ['Cost per ticket', '$0.0042'],
      ['Latency p95', '2.4 s'],
      ['Runs on', 'ECS Fargate'],
    ],
    notes: [
      'Prompt injection is blocked by layered regex and LLM detection, with a hard exit to human escalation.',
      'PII is redacted before any DynamoDB or log write. Deployed behind an ALB with IAM least-privilege roles.',
    ],
  },
  {
    id: 'ledgerqa',
    name: 'LedgerQA',
    stack: 'Python, XBRL extraction, agentic tool-calling, pgvector, Redis',
    summary:
      'Answers financial questions over 84 10-K, 10-Q and 8-K filings from 32 companies, citing every answer to its accession number, item and page.',
    href: 'https://github.com/roycebarboz/LedgerQA',
    caption: 'FinanceBench 150-question set, 40 full evaluation passes.',
    rows: [
      { metric: 'FinanceBench score', unit: '%', from: 24, to: 68, note: 'vs text-RAG baseline' },
      { metric: 'Numeric accuracy', unit: '%', from: 50, to: 72, note: 'figures read from XBRL tags' },
      { metric: 'Computed answers', unit: '%', from: 60, to: 90, note: 'ratios run in a code sandbox' },
    ],
    readout: [
      ['Filings', '84'],
      ['Companies', '32'],
      ['Latency p95', '12 s'],
      ['Cost per question', '$0.02'],
    ],
    notes: [
      'Document-type routing between XBRL and layout-aware parsing recovered 10 pre-2020 filings.',
      'Agents capped at 6 tool calls and a 30 s timeout. Facts are versioned so restatements and 10-K/A amendments stay correct.',
    ],
  },
  {
    id: 'procureiq',
    name: 'ProcureIQ',
    stack: 'LangGraph, FastAPI, GPT-4o, Azure AI Search, Terraform, Dynatrace, React',
    summary:
      'A four-agent vendor-risk pipeline that retrieves policy clauses and returns citation-backed Approve, Escalate or Reject briefs with 1 to 10 risk scores, routing dual hard-fails to human review.',
    href: 'https://github.com/roycebarboz/ProcureIQ',
    caption: 'No baseline run: these are measured results, not a before and after.',
    rows: [
      { metric: 'Fabricated risk scores', unit: '', value: '0', note: '12 partial-data test cases' },
      { metric: 'Vendor scenarios validated', unit: '', value: '8', note: 'end to end' },
      { metric: 'Agents in the pipeline', unit: '', value: '4', note: 'ending in human review' },
    ],
    readout: [
      ['Score cap', '6 / 10'],
      ['Live updates', 'FastAPI SSE'],
      ['Tracing', 'OpenTelemetry'],
    ],
    notes: [
      'Confidence decays as sources go missing and incomplete assessments are hard-capped at 6 or below.',
      'Per-call token use and cost stream to a React dashboard over SSE.',
    ],
  },
];

export const log = [
  {
    dates: 'Feb 2026 to Apr 2026',
    place: 'IGSCF, freelance full-stack developer',
    href: 'https://github.com/IGSCF/IGSCF_website',
    result: 'Shipped a production site for a nonprofit as its only technical contact.',
    detail:
      'Firebase Auth with role-based access control and Firestore rules (public reads, authenticated writes) behind a 5-content-type admin portal.',
  },
  {
    dates: 'May 2025 to May 2026',
    place: 'Stevens Institute of Technology, technology support',
    href: 'https://github.com/roycebarboz/coursedog-internal_notes_generator',
    result: 'Cut a multi-hour weekly scheduling workflow to minutes.',
    detail:
      'A Next.js tool parses Coursedog CSV exports across 15+ scheduling cases and submits event notes through authenticated REST APIs. Setup scripts for 10+ environments cut setup time by about 80%.',
  },
];

export const skills = [
  { group: 'Generative AI', items: 'OpenAI, Claude Code, RAG, vector search (Chroma, Azure AI Search, pgvector), embeddings, multi-agent systems, LangGraph, Pydantic' },
  { group: 'Languages', items: 'Python, TypeScript, JavaScript, SQL, Bash' },
  { group: 'Frameworks', items: 'FastAPI, React, Next.js, REST APIs' },
  { group: 'Cloud and DevOps', items: 'AWS (ECS, Fargate, IAM, Secrets Manager), Azure, Terraform, Docker, GitHub Actions' },
  { group: 'Observability and testing', items: 'Datadog (LLM Observability, APM), OpenTelemetry, pytest' },
  { group: 'Data', items: 'PostgreSQL, DynamoDB, Redis' },
];

export const credentials = [
  { when: 'May 2026', what: 'M.S. Computer Science, Stevens Institute of Technology', extra: 'GPA 3.5 / 4.0' },
  { when: 'Jun 2024', what: 'B.E. Information Technology, St. Francis Institute of Technology', extra: 'GPA 7.98 / 10' },
  {
    when: 'AWS',
    what: 'Certified Solutions Architect, Associate (SAA-C03)',
    href: 'https://www.credly.com/badges/36e17d58-6f32-47d9-83c9-a8f0e65834a6/public_url',
  },
];
