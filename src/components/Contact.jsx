import React from 'react';
import { FaPaperPlane, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container contact-container">
        <div className="contact-left">
          <h1 className="sub-title">Contact Me</h1>
          <p><FaPaperPlane className="contact-icon" /> roycebarboz@gmail.com</p>
          <p><FaPhone className="contact-icon" /> +1 (201) 918-9773</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/royce-barboz/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/roycebarboz" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          </div>
          <a href={`${import.meta.env.BASE_URL}images/my-cv.pdf`} target="_blank" rel="noopener noreferrer" className="btn btn2">View CV</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;