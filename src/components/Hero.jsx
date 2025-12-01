import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="subtitle">Software Developer</p>
          <h1>
            Hi, I'm <span className="highlight">Royce Barboz</span>
            <br />
            Welcome to my Portfolio
          </h1>
          <p className="description">
            Building scalable web applications and cloud solutions.
          </p>
          <div className="cta-buttons">
             <a href="#portfolio" className="btn">View My Work</a>
             <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

