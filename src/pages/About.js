import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import './about.css';
import ParticleBackground from './particles.js';
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaTwitter, FaPhoneAlt, FaYoutube } from 'react-icons/fa';


export default function About() {
  const [isInView, setIsInView] = useState({
    about: true,
    contact: true,
    education: false,
    techSkills: false
  });

  useEffect(() => {
    document.title = "Hasaranga Dias | About";
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const about = document.querySelector('.about');
      const contact = document.querySelector('.contact');
      const education = document.querySelector('.education');
      const techSkills = document.querySelector('.techSkills');

      // Check if each section is in the viewport
      setIsInView({
        about: isInViewPort(about),
        contact: isInViewPort(contact),
        education: isInViewPort(education),
        techSkills: isInViewPort(techSkills)
      });
    };

    // Helper function to check if the element is in the viewport
    const isInViewPort = (el) => {
      const rect = el.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <ParticleBackground />
      
      <div className={`about ${isInView.about ? 'in-view' : 'out-of-view'}`}>
        <h1>A Glimpse Into My Journey</h1>
        <p>
          Hi, I'm Keshan Hasaranga Dias Gunawardhana, a passionate Software Engineer and Cybersecurity Enthusiast. 
          With a strong foundation in full-stack development and a growing expertise in cybersecurity, 
          I am driven by the challenge of solving complex problems and building scalable solutions. 
          My approach focuses on creating innovative systems that combine technical proficiency with user-centric design.
        </p>
        <p>
          I specialize in software development, security protocols, ethical hacking, threat detection, 
          and much more. I strive to stay on top of the latest trends in technology and continuously seek 
          opportunities to learn and grow professionally.
        </p>
      </div>

      <div className={`contact ${isInView.contact ? 'in-view' : 'out-of-view'}`}>
        <h1>Reach Out to Me</h1>
        
        {/* Contact Number */}
        <p><FaPhoneAlt /> Phone: <a href="tel:+94123456789">+94768718183</a></p>

        {/* Email */}
        <p><FaEnvelope /> <a href="mailto:hasaranga.dias@example.com">hasarangadias@gmail.com</a></p>
        
        {/* LinkedIn */}
        <p><FaLinkedin /> LinkedIn: <a href="https://www.linkedin.com/in/keshan-hasaranga-dias-gunawardhana-5bb195220" target="_blank" rel="noopener noreferrer">Keshan Hasaranga Dias Gunawardhana</a></p>

        {/* GitHub */}
        <p><FaGithub /> GitHub: <a href="https://github.com/hasarangad" target="_blank" rel="noopener noreferrer">Hasaranga Dias</a></p>

        {/* Social Media */}
        <p>
          <FaFacebook /> Facebook: <a href="https://www.facebook.com/arrow.khdg" target="_blank" rel="noopener noreferrer">Keshan Hasaranga Dias</a>
        </p>
        <p>
          <FaInstagram /> Instagram: <a href="https://www.instagram.com/k_h_d_g_00/?utm_medium=copy_link" target="_blank" rel="noopener noreferrer">k_h_d_g_00</a>
        </p>
        <p>
          <FaTwitter /> Twitter: <a href="https://twitter.com/HasarangaDias?s=20" target="_blank" rel="noopener noreferrer">Hasaranga Dias</a>
        </p>
        <p>
          <FaYoutube /> YouTube: <a href="https://www.youtube.com/channel/UClnlVlMfLLXus9BTUgls-vg" target="_blank" rel="noopener noreferrer">Mr.H__D</a>
        </p>
      </div>

      <div className={`education ${isInView.education ? 'in-view' : 'out-of-view'}`}>
        <h1>My Educational Story</h1>
        <p>
          <strong>Software Engineering (BSc)</strong><br />
          Open University of Sri Lanka (OUSL) | Expected Graduation: 2025
        </p>
        <p>
          <strong>Computer Networks and Cybersecurity (BSc)</strong><br />
          KIU (KIU University) | Expected Graduation: 2025
        </p>
      </div>

      <div className={`techSkills ${isInView.techSkills ? 'in-view' : 'out-of-view'}`}>
        <h1>Skills That Drive Me</h1>
        <ul>
          <li>Programming Languages: JavaScript, Python, Java, C++</li>
          <li>Web Development: React.js, Node.js, HTML, CSS, Tailwind CSS, Express.js</li>
          <li>Cybersecurity: Ethical Hacking, Malware Analysis, Network Security, OSINT</li>
          <li>Databases: MySQL, MongoDB, PostgreSQL</li>
          <li>Tools: Git, Docker, Nmap, Kali Linux, Burp Suite, Wireshark</li>
          <li>Cloud: AWS, Azure</li>
          <li>Operating Systems: Linux, Windows, macOS</li>
        </ul>
      </div>
    </div>
  );
}
