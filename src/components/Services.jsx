import React from 'react';
import { FaCode, FaConnectdevelop, FaCloud } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <FaCode />,
      title: 'Full Stack Development',
      description: 'Building responsive, high-performance applications using React.js, Next.js, Node.js, Express.js, and TypeScript.'
    },
    {
      icon: <FaConnectdevelop />,
      title: 'Generative AI & LLMs',
      description: 'Developing AI agents and RAG pipelines using OpenAI, Embeddings, and Multi-Agent Systems for complex workflows.'
    },
    {
      icon: <FaCloud />,
      title: 'Cloud & DevOps',
      description: 'Implementing observability and CI/CD on AWS (EKS, ECS) and Kubernetes using Docker, GitHub Actions, and Datadog.'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h1 className="sub-title">My Services</h1>
        <div className="services-list">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="service-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="icon">{service.icon}</div>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <a href="#">Learn more</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

