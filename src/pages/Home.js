import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import pp from '../images/pp.png';
import './home.css';
import ParticleBackground from './particles.js';
import cv from '../cv/Hasaranga Dias.pdf';

const ROLES = [
  {
    title: 'Software Engineer',
    description: 'Crafting Innovative Solutions',
    details:
      'As a passionate Software Engineer, I specialize in developing scalable and efficient software solutions. With experience in full-stack development, I am adept at both frontend and backend technologies. My projects include building web applications, optimizing performance, and implementing modern software practices.',
  },
  {
    title: 'Cybersecurity Analyst',
    description: 'Protecting Digital Landscapes',
    details:
      'As a dedicated Cybersecurity Enthusiast, I am committed to safeguarding digital environments from emerging threats. My focus includes ethical hacking, threat detection, and malware analysis. I am continuously expanding my knowledge through practical experience and specialized courses.',
  },
];

function RoleRotator() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setRoleIndex((prev) => (prev === 0 ? 1 : 0));
        setIsFading(false);
      }, 400);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const current = ROLES[roleIndex];

  return (
    <div className={`transition-content ${isFading ? 'fading' : ''}`}>
      <h1>{current.title}</h1>
      <p className="role-subhead">{current.description}</p>
      <p className="role-details">{current.details}</p>
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    document.title = 'Hasaranga Dias | Home';
  }, []);

  return (
    <div className="home-page-wrapper">
      <Navbar />
      <ParticleBackground />

      <main className="container">
        <div className="content">
          <div>
            <p>I'm</p>
            <h1 className="name">Keshan Hasaranga Dias Gunawardhana</h1>
          </div>

          <RoleRotator />

          <a
            href={cv}
            download="Hasaranga_Dias_CV.pdf"
            className="download-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </div>
        <div className="profile-container">
          <img className="profile-photo" src={pp} alt="Profile of Hasaranga Dias" />
        </div>
      </main>
    </div>
  );
}
