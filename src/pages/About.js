import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import './about.css';
import ParticleBackground from './particles.js';
import {
  FaEnvelope, FaFacebook, FaInstagram, FaLinkedin,
  FaGithub, FaTwitter, FaPhoneAlt, FaYoutube,
  FaCrown, FaCoins, FaMedal,
  FaShieldAlt, FaCode, FaServer, FaCloud, FaCertificate
} from 'react-icons/fa';
import ousl from '../images/ousl_logo.jpg';
import kiu from '../images/kiu_logo.png';
import idm from '../images/idm_logo.jpg';
import rcg from '../images/rcg_logo.jpg';
import focsec from '../images/focsec.jpeg';

export default function About() {
  useEffect(() => {
    document.title = 'Hasaranga Dias | About';
  }, []);

  return (
    <div className="about-page-wrapper">
      <Navbar />
      <ParticleBackground />

      {/* 1 ── About / Bio ──────────────────────────────────────── */}
      <section className="about-section fade-in-up">
        <h1 className="section-title">A Glimpse Into My Journey</h1>
        <div className="bio-card">
          <p>
            Hi, I'm <strong className="highlight-text">Keshan Hasaranga Dias Gunawardhana</strong> a final-year Computer Networks &amp; Cyber Security
            undergraduate at KIU University, Sri Lanka. I have hands-on experience in network monitoring,
            vulnerability assessment, and threat simulation, built through dedicated security labs, a DevSecOps
            final year project, and a full-stack internship.
          </p>
          <p>
            Comfortable with Python and Bash scripting, network analysis using Nmap and Wireshark, and working
            across Linux and Windows Server / Active Directory environments. My background spans security tooling
            (Burp Suite, Metasploit, OWASP ZAP, Semgrep, Autopsy), cloud &amp; DevOps (AWS, Azure, Docker,
            GitLab CI/CD, Terraform), and digital forensics.
          </p>
          <p>
            Strong attention to detail, fast learner, and eager to bring a proactive approach to a collaborative
            security team.
          </p>
        </div>
      </section>

      {/* 2 ── Education ────────────────────────────────────────── */}
      <section className="education-section fade-in-up">
        <h1 className="section-title">My Educational Story</h1>

        <div className="edu-grid">
          <div className="edu-card">
            <div className="card-shine"></div>
            <a href="https://www.ou.ac.lk/" target="_blank" rel="noopener noreferrer" className="edu-logo-link">
              <img src={ousl} alt="OUSL Logo" className="edu-logo" />
            </a>
            <div className="edu-info">
              <strong className="edu-degree">Software Engineering (BSc)</strong>
              <span className="edu-institution">Open University of Sri Lanka (OUSL)</span>
              <span className="edu-year">Expected Graduation: 2026</span>
            </div>
          </div>

          <div className="edu-card">
            <div className="card-shine"></div>
            <a href="https://www.kiu.ac.lk/" target="_blank" rel="noopener noreferrer" className="edu-logo-link">
              <img src={kiu} alt="KIU Logo" className="edu-logo" />
            </a>
            <div className="edu-info">
              <strong className="edu-degree">Computer Networks &amp; Cybersecurity (BSc)</strong>
              <span className="edu-institution">KIU University, Sri Lanka</span>
              <span className="edu-year">Expected Graduation: 2026</span>
            </div>
          </div>

          <div className="edu-card">
            <div className="card-shine"></div>
            <a href="https://www.idm.edu/" target="_blank" rel="noopener noreferrer" className="edu-logo-link">
              <img src={idm} alt="IDM Logo" className="edu-logo" />
            </a>
            <div className="edu-info">
              <strong className="edu-degree">Diploma in Office Applications and Web</strong>
              <span className="edu-institution">IDM Southern Campus</span>
              <span className="edu-year">Completed: 2022</span>
            </div>
          </div>

          <div className="edu-card">
            <div className="card-shine"></div>
            <a href="https://www.richmondcollege.lk/" target="_blank" rel="noopener noreferrer" className="edu-logo-link">
              <img src={rcg} alt="Richmond College Logo" className="edu-logo" />
            </a>
            <div className="edu-info">
              <strong className="edu-degree">Advanced Level — Physical Science</strong>
              <span className="edu-institution">Richmond College, Galle, Sri Lanka</span>
              <span className="edu-year">Completed: 2020</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3 ── Technical Skills ─────────────────────────────────── */}
      <section className="skills-section fade-in-up">
        <h1 className="section-title">Technical Skills</h1>

        <div className="skills-grid">
          <div className="skill-category-card">
            <div className="card-shine"></div>
            <div className="skill-cat-header">
              <div className="skill-cat-icon"><FaShieldAlt /></div>
              <h3>Security &amp; Network Analysis</h3>
            </div>
            <div className="skill-badges">
              {['Nmap', 'Wireshark', 'Burp Suite', 'Metasploit', 'OWASP ZAP', 'Semgrep', 'Checkov', 'Autopsy'].map(skill => (
                <span key={skill} className="skill-pill">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-category-card">
            <div className="card-shine"></div>
            <div className="skill-cat-header">
              <div className="skill-cat-icon"><FaCode /></div>
              <h3>Scripting &amp; Programming</h3>
            </div>
            <div className="skill-badges">
              {['Python', 'Bash', 'PowerShell', 'SQL', 'Java', 'JavaScript'].map(skill => (
                <span key={skill} className="skill-pill">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-category-card">
            <div className="card-shine"></div>
            <div className="skill-cat-header">
              <div className="skill-cat-icon"><FaServer /></div>
              <h3>Systems &amp; Networking</h3>
            </div>
            <div className="skill-badges">
              {['Linux (Ubuntu, Kali)', 'Windows Server', 'Active Directory', 'DNS (BIND9)', 'SSH', 'Firewalls (UFW/iptables)', 'TCP/IP'].map(skill => (
                <span key={skill} className="skill-pill">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-category-card">
            <div className="card-shine"></div>
            <div className="skill-cat-header">
              <div className="skill-cat-icon"><FaCloud /></div>
              <h3>Cloud &amp; DevOps</h3>
            </div>
            <div className="skill-badges">
              {['AWS (EC2, S3, IAM, VPC, RDS)', 'Microsoft Azure', 'Docker', 'GitLab CI/CD', 'Terraform', 'Nginx', 'Gunicorn'].map(skill => (
                <span key={skill} className="skill-pill">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-category-card full-span">
            <div className="card-shine"></div>
            <div className="skill-cat-header">
              <div className="skill-cat-icon"><FaCertificate /></div>
              <h3>Certifications &amp; Achievements</h3>
            </div>
            <div className="skill-badges">
              {[
                'TryHackMe (14 Rooms — DevSecOps, OWASP Top 10, Network Security, Docker, IaC)',
                'AWS Educate (IAM, S3, EC2, VPC, RDS, Lambda, CloudWatch)',
                'HackerRank (Python, Linux Shell, Java, SQL)',
                'SoloLearn (10 Programming Certifications)'
              ].map(cert => (
                <span key={cert} className="skill-pill cert-pill">{cert}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4 ── Leadership ───────────────────────────────────────── */}
      <section className="leadership-section fade-in-up">
        <h1 className="section-title">🏆 Leadership &amp; Honors</h1>

        <div className="leadership-grid">
          <div className="leadership-card">
            <div className="card-shine"></div>
            <div className="leadership-icon-wrap leadership-logo-wrap">
              <img src={focsec} alt="FOCSEC Logo" className="leadership-img" />
            </div>
            <div className="leadership-details">
              <div className="leadership-header">
                <span className="leadership-role">President</span>
                <span className="leadership-tag">Executive</span>
              </div>
              <h3 className="leadership-org">Faculty of Computer Science &amp; Engineering Student Circle (FOCSEC)</h3>
              <p className="leadership-inst">KIU University, Sri Lanka</p>
            </div>
          </div>

          <div className="leadership-card">
            <div className="card-shine"></div>
            <div className="leadership-icon-wrap">
              <FaCoins className="leadership-icon" />
            </div>
            <div className="leadership-details">
              <div className="leadership-header">
                <span className="leadership-role">Treasurer</span>
                <span className="leadership-tag">Finance</span>
              </div>
              <h3 className="leadership-org">Young Inventors Club</h3>
              <p className="leadership-inst">KIU University, Sri Lanka</p>
            </div>
          </div>

          <div className="leadership-card">
            <div className="card-shine"></div>
            <div className="leadership-icon-wrap">
              <FaCoins className="leadership-icon" />
            </div>
            <div className="leadership-details">
              <div className="leadership-header">
                <span className="leadership-role">Treasurer</span>
                <span className="leadership-tag">Finance</span>
              </div>
              <h3 className="leadership-org">Richmond College Science Society</h3>
              <p className="leadership-inst">Richmond College, Galle, Sri Lanka</p>
            </div>
          </div>

          <div className="leadership-card">
            <div className="card-shine"></div>
            <div className="leadership-icon-wrap">
              <FaMedal className="leadership-icon" />
            </div>
            <div className="leadership-details">
              <div className="leadership-header">
                <span className="leadership-role">Colours Award</span>
                <span className="leadership-tag">Excellence</span>
              </div>
              <h3 className="leadership-org">Richmond College Colours Night</h3>
              <p className="leadership-inst">Richmond College, Galle, Sri Lanka</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5 ── Contact ──────────────────────────────────────────── */}
      <section className="contact-section fade-in-up">
        <h1 className="section-title">Reach Out to Me</h1>

        <div className="contact-grid">
          <a href="tel:+94768718183" className="contact-card">
            <div className="card-shine"></div>
            <div className="contact-icon-box"><FaPhoneAlt /></div>
            <div className="contact-info">
              <span className="contact-label">Phone</span>
              <span className="contact-value">+94 76 871 8183</span>
            </div>
          </a>

          <a href="mailto:hasarangadias@gmail.com" className="contact-card">
            <div className="card-shine"></div>
            <div className="contact-icon-box"><FaEnvelope /></div>
            <div className="contact-info">
              <span className="contact-label">Email</span>
              <span className="contact-value">hasarangadias@gmail.com</span>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/keshan-hasaranga-dias-gunawardhana-5bb195220" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="card-shine"></div>
            <div className="contact-icon-box"><FaLinkedin /></div>
            <div className="contact-info">
              <span className="contact-label">LinkedIn</span>
              <span className="contact-value">Keshan Hasaranga Dias</span>
            </div>
          </a>

          <a href="https://github.com/hasarangad" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="card-shine"></div>
            <div className="contact-icon-box"><FaGithub /></div>
            <div className="contact-info">
              <span className="contact-label">GitHub</span>
              <span className="contact-value">hasarangad</span>
            </div>
          </a>

          <a href="https://www.facebook.com/arrow.khdg" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="card-shine"></div>
            <div className="contact-icon-box"><FaFacebook /></div>
            <div className="contact-info">
              <span className="contact-label">Facebook</span>
              <span className="contact-value">Keshan Hasaranga Dias</span>
            </div>
          </a>

          <a href="https://www.instagram.com/k_h_d_g_00/?utm_medium=copy_link" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="card-shine"></div>
            <div className="contact-icon-box"><FaInstagram /></div>
            <div className="contact-info">
              <span className="contact-label">Instagram</span>
              <span className="contact-value">k_h_d_g_00</span>
            </div>
          </a>

          <a href="https://twitter.com/HasarangaDias?s=20" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="card-shine"></div>
            <div className="contact-icon-box"><FaTwitter /></div>
            <div className="contact-info">
              <span className="contact-label">Twitter</span>
              <span className="contact-value">@HasarangaDias</span>
            </div>
          </a>

          <a href="https://www.youtube.com/@HasaDevSecLK" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="card-shine"></div>
            <div className="contact-icon-box"><FaYoutube /></div>
            <div className="contact-info">
              <span className="contact-label">YouTube</span>
              <span className="contact-value">HasaDevSecLK</span>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
