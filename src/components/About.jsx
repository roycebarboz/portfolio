import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const tabData = {
    skills: [
      { title: 'Programming', content: 'Python, JavaScript, TypeScript, HTML, CSS' },
      { title: 'Frameworks & Libraries', content: 'React.js, Node.js, Express.js, Next.js' },
      { title: 'Cloud & DevOps', content: 'AWS (EKS, ECS), Datadog, Docker, Github Actions, Kubernetes' },
      { title: 'Databases', content: 'PostgreSQL, MySQL, Azure SQL' },
      { title: 'Tools', content: 'Git, Linux/SSH, Agile (Scrum, Kanban)' },
      { title: 'AI/ML', content: 'RAG, Embeddings, LLM Pipelines' },
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
          <img src={`${import.meta.env.BASE_URL}images/potrait.png`} alt="Royce Barboz" />
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
            I specialize in building scalable full-stack applications and AI-driven solutions.
            My technical expertise spans across Cloud Computing (AWS, Kubernetes), DevOps (Datadog, Docker), and Generative AI (RAG, Multi-Agent Systems).
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

