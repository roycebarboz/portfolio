import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const tabData = {
    skills: [
      { title: 'Generative AI', content: 'OpenAI, Claude Code, RAG, Embeddings, Multi-agent Systems, n8n, LangGraph, Prompt Engineering' },
      { title: 'Programming Languages', content: 'JavaScript, Python, TypeScript, SQL, Bash, Golang' },
      { title: 'Frameworks & Libraries', content: 'React.js, Node.js, Express.js, Next.js, FastAPI, REST APIs' },
      { title: 'Cloud & DevOps', content: 'AWS (EKS, ECS), Docker, GitHub Actions, Kubernetes, Azure, GCP' },
      { title: 'Databases', content: 'PostgreSQL, MySQL, MongoDB, Supabase' },
      { title: 'Tools', content: 'Git, Linux/SSH, Agile (Scrum, Kanban), Postman, Microsoft Office, Google Workspace' },
    ],
    education: [
      { title: 'May 2026', content: 'Stevens Institute of Technology - MS in Computer Science\nCourses: Algorithms, DBMS, Concurrent Programming' },
      { title: 'Jun 2024', content: 'St. Francis Institute of Technology - BE in Information Technology\nCourses: Cloud Computing, Data structure, Web programming' },
    ],
    certifications: [
      { title: 'Aug 2024', content: 'Oracle Cloud Infrastructure Generative AI Professional' },
    ],
  };

  return (
    <section id="about" className="about">
      <div className="container about-container">
        <div className="about-col-1">
          <img src={`${import.meta.env.BASE_URL}images/potrait.jpg`} alt="Royce Barboz" />
        </div>
        <div className="about-col-2">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="sub-title"
          >
            About Me
          </motion.h1>
          <p className="about-text">
            Hi, I'm Royce Barboz, a Master's student in Computer Science at Stevens Institute of Technology.
            I build scalable full-stack applications and AI-driven automation.
            My stack spans Generative AI (RAG, multi-agent systems, LangGraph), full-stack web (React, Next.js, Node.js, FastAPI), and cloud/DevOps (AWS, Kubernetes, Docker, GitHub Actions).
          </p>

          <div className="tab-titles">
            {Object.keys(tabData).map((tab) => (
              <p
                key={tab}
                className={`tab-links ${activeTab === tab ? 'active-link' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </p>
            ))}
          </div>

          <div className="tab-contents active-tab">
            <ul>
              {tabData[activeTab].map((item, index) => (
                <li key={index}>
                  <span>{item.title}</span>
                  <br />
                  {item.content.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < item.content.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

