import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Services', href: '#services' },
    { title: 'My Work', href: '#portfolio' },
    { title: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <a href="#" className="logo">
          <h1>RB.</h1>
        </a>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          {navLinks.map((link, index) => (
            <li key={index} className="nav-item">
              <a href={link.href} className="nav-link" onClick={() => setIsOpen(false)}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

