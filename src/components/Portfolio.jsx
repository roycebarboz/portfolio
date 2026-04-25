import React, { useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Portfolio.css';

const Portfolio = () => {
  const baseUrl = import.meta.env.BASE_URL;
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: 'Financial RAG Analyst',
      description: 'Multi-agent workflow (financial, risk, compliance) using structured function-calling, with SEC-filing document caching that cut redundant embedding calls by 90% and query latency from 30s+ to under 2s.',
      image: `${baseUrl}images/work-1.jpg`,
      link: 'https://github.com/sarthakk-3107/rag_analyst'
    },
    {
      title: 'IGSCF Website',
      description: 'Production React/Vite web app for a nonprofit with Firebase Auth + Firestore RBAC, CI/CD via GitHub Actions, and Lighthouse-optimized performance — driving a 20% lift in user engagement.',
      image: `${baseUrl}images/IGSCF.jpg`,
      link: 'https://igscf.netlify.app/'
    },
    {
      title: 'Internal Notes Generator',
      description: 'Full-stack automation tool built with Claude Code that parsed Coursedog CSV exports, applied 15+ scheduling logic cases, and submitted formatted event notes via authenticated REST APIs — cutting a multi-hour weekly process to minutes.',
      image: `${baseUrl}images/coursedog.png`,
      link: 'https://github.com/roycebarboz/Internal_notes_Automation'
    },
    {
      title: 'Inspectify',
      description: 'Scalable Node.js ETL pipeline processing 289K+ CSV rows into structured MongoDB documents, grouping inspection records by CAMIS and extracting latest health grades for NYC restaurants.',
      image: `${baseUrl}images/work-2.jpg`,
      link: 'https://github.com/roycebarboz/NYC-Restaurant-Health-Inspector-Dashboard'
    }
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h1 className="sub-title">My Work</h1>
        <div className="work-list">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={index}
              className="work"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={project.image} alt={project.title} />
              <div className="layer">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        <button className="btn see-more-btn" onClick={() => setShowAll(prev => !prev)}>
          {showAll ? 'See Less' : 'See More'}
        </button>
      </div>
    </section>
  );
};

export default Portfolio;

