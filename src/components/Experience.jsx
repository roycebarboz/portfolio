import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'Stevens Institute of Technology',
      role: 'Technology Support',
      location: 'Hoboken, NJ, USA',
      dates: 'May 2025 – Present',
      link: 'https://github.com/roycebarboz/internal-notes-generator',
      bullets: [
        'Built a full-stack automation tool with Claude Code that parsed Coursedog CSV exports, applied 15+ scheduling logic cases, and submitted formatted event notes via authenticated REST APIs in Python — cutting a multi-hour weekly process to minutes.',
        'Automated workspace initialization with Python and PowerShell scripts that launched directories, tools, and 10+ preconfigured browser sessions, reducing setup time by ~80%.',
        'Collaborated in an Agile environment (daily stand-ups, sprint planning, retrospectives) and authored documentation that cut onboarding time for new team members by ~70%.',
      ],
    },
    {
      company: 'IGSCF',
      role: 'Full-Stack Developer (Freelance)',
      location: 'Hoboken, NJ, USA',
      dates: 'Feb 2026 – Present',
      link: 'https://www.igscf.org',
      bullets: [
        'Translated stakeholder input into shipped features for a nonprofit React/Vite web app, driving a 20% lift in user engagement.',
        'Owned the auth architecture end-to-end: Firebase Auth + Firestore with RBAC and security rules (public reads, authenticated writes).',
        'Shipped CI/CD via GitHub Actions with asset optimization, automated testing, and deploys — hitting Lighthouse performance targets pre-launch.',
      ],
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h1 className="sub-title">Experience</h1>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="experience-header">
                <h2>
                  <a href={exp.link} target="_blank" rel="noopener noreferrer">
                    {exp.company}
                    <FaExternalLinkAlt className="experience-link-icon" />
                  </a>
                </h2>
                <span className="experience-dates">{exp.dates}</span>
              </div>
              <p className="experience-meta">
                {exp.role} · {exp.location}
              </p>
              <ul className="experience-bullets">
                {exp.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
