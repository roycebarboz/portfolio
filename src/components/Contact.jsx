import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { profile } from '../data';
import './Contact.css';

export default function Contact() {
  return (
    <footer className="contact wrap" id="contact" aria-labelledby="contact-title">
      <img
        className="contact__photo"
        src={`${import.meta.env.BASE_URL}images/potrait.jpg`}
        alt="Royce Barboz"
        width="320"
        height="400"
        loading="lazy"
      />
      <div className="contact__body">
        <h2 id="contact-title" className="contact__title">
          Send me a problem to measure.
        </h2>
        <p className="contact__lede">Open to full-time AI and software engineering roles.</p>
        <ul className="contact__list">
          <li>
            <a href={`mailto:${profile.email}`}>
              <FaEnvelope aria-hidden="true" /> {profile.email}
            </a>
          </li>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin aria-hidden="true" /> LinkedIn
            </a>
          </li>
          <li>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <FaGithub aria-hidden="true" /> GitHub
            </a>
          </li>
        </ul>
        <a
          className="btn btn--solid"
          href={`${import.meta.env.BASE_URL}images/Royce_AI_Engineer.pdf`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV
        </a>
        <p className="contact__fine">&copy; {new Date().getFullYear()} Royce Barboz</p>
      </div>
    </footer>
  );
}
