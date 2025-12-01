import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Portfolio.css';

const Portfolio = () => {
  const baseUrl = import.meta.env.BASE_URL;
  
  const projects = [
    {
      title: 'Financial RAG Analyst',
      description: 'Multi-agent workflow with financial agents using structured function calling. Refactored embedding pipeline to OpenAI text-embedding-3-small.',
      image: `${baseUrl}images/work-1.jpg`,
      link: 'https://github.com/sarthakk-3107/rag_analyst'
    },
    {
      title: 'Inspectify',
      description: 'NYC Restaurant Health Inspector Dashboard. Scalable ETL pipeline in Node.js processing 289K+ CSV rows into MongoDB.',
      image: `${baseUrl}images/work-2.jpg`,
      link: 'https://github.com/roycebarboz/NYC-Restaurant-Health-Inspector-Dashboard'
    },
    {
      title: 'F1 Telemetry Dashboard',
      description: 'End-to-end observability using Datadog APM, RUM, and custom metrics across Flask backend and React frontend.',
      image: `${baseUrl}images/work-3.jpg`,
      link: 'https://github.com/keval-som/f1-vision-dashboard'
    }
  ];

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h1 className="sub-title">My Work</h1>
        <div className="work-list">
          {projects.map((project, index) => (
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
        <a href="#" className="btn see-more-btn">See More</a>
      </div>
    </section>
  );
};

export default Portfolio;

