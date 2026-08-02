import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import './about.css';
import ParticleBackground from './particles.js';
import {
  FaEnvelope, FaFacebook, FaInstagram, FaLinkedin,
  FaGithub, FaTwitter, FaPhoneAlt, FaYoutube,
  FaCrown, FaCoins, FaMedal
} from 'react-icons/fa';
import ousl from '../images/ousl_logo.jpg';
import kiu  from '../images/kiu_logo.png';
import idm  from '../images/idm_logo.jpg';
import rcg  from '../images/rcg_logo.jpg';
import focsec from '../images/focsec.jpeg';

export default function About() {
  useEffect(() => {
    document.title = 'Hasaranga Dias | About';
  }, []);

  return (
    <div>
      <Navbar />
      <ParticleBackground />

      {/* 1 ── About / Bio ──────────────────────────────────────── */}
      <div className="about">
        <h1>A Glimpse Into My Journey</h1>
        <p>
          Hi, I'm Keshan Hasaranga Dias Gunawardhana — a final-year Computer Networks &amp; Cyber Security
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

      {/* 2 ── Education ────────────────────────────────────────── */}
      <div className="education">
        <h1>My Educational Story</h1>

        <div className="edu-card">
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

      {/* 3 ── Technical Skills ─────────────────────────────────── */}
      <div className="skills" style={{ marginBottom: '2rem' }}>
        <h1>Technical Skills</h1>

        <p><strong>🔍 Security &amp; Network Analysis:</strong> Nmap, Wireshark, Burp Suite, Metasploit, OWASP ZAP, Semgrep, Checkov</p>
        <p><strong>💻 Scripting &amp; Programming:</strong> Python, Bash, PowerShell, SQL</p>
        <p><strong>🌐 Systems &amp; Networking:</strong> Linux (Ubuntu, Kali Linux), Windows Server, Active Directory, DNS (BIND9), SSH, Firewalls (UFW/iptables), TCP/IP fundamentals</p>
        <p><strong>☁️ Cloud &amp; DevOps:</strong> AWS (EC2, S3, IAM, VPC), Microsoft Azure, Docker, GitLab CI/CD, Terraform</p>
        <p><strong>🎓 Certifications:</strong> TryHackMe (14 rooms — DevSecOps, OWASP Top 10, Network Security, Automation, OWASP ZAP, Docker, IaC), AWS Educate (IAM, S3, EC2, VPC, RDS, Lambda, CloudWatch), HackerRank (Python, Linux Shell, Java, SQL), SoloLearn (10 programming certifications)</p>
      </div>

      {/* 4 ── Leadership ───────────────────────────────────────── */}
      <div className="leadership-section" style={{ marginBottom: '3rem' }}>
        <h1>🏆 Leadership &amp; Honors</h1>

        <div className="leadership-grid">
          <div className="leadership-card">
            <div className="leadership-shine"></div>
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
            <div className="leadership-shine"></div>
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
            <div className="leadership-shine"></div>
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
            <div className="leadership-shine"></div>
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
      </div>

      {/* 5 ── Contact ──────────────────────────────────────────── */}
      <div className="contact">
        <h1>Reach Out to Me</h1>

        <p><FaPhoneAlt /> Phone: <a href="tel:+94768718183">+94 76 871 8183</a></p>
        <p><FaEnvelope /> <a href="mailto:hasarangadias@gmail.com">hasarangadias@gmail.com</a></p>
        <p>
          <FaLinkedin /> LinkedIn:{' '}
          <a href="https://www.linkedin.com/in/keshan-hasaranga-dias-gunawardhana-5bb195220"
             target="_blank" rel="noopener noreferrer">
            Keshan Hasaranga Dias
          </a>
        </p>
        <p>
          <FaGithub /> GitHub:{' '}
          <a href="https://github.com/hasarangad" target="_blank" rel="noopener noreferrer">
            Hasaranga Dias
          </a>
        </p>
        <p>
          <FaFacebook /> Facebook:{' '}
          <a href="https://www.facebook.com/arrow.khdg" target="_blank" rel="noopener noreferrer">
            Keshan Hasaranga Dias
          </a>
        </p>
        <p>
          <FaInstagram /> Instagram:{' '}
          <a href="https://www.instagram.com/k_h_d_g_00/?utm_medium=copy_link"
             target="_blank" rel="noopener noreferrer">
            k_h_d_g_00
          </a>
        </p>
        <p>
          <FaTwitter /> Twitter:{' '}
          <a href="https://twitter.com/HasarangaDias?s=20" target="_blank" rel="noopener noreferrer">
            Hasaranga Dias
          </a>
        </p>
        <p>
          <FaYoutube /> YouTube:{' '}
          <a href="https://www.youtube.com/@HasaDevSecLK" target="_blank" rel="noopener noreferrer">
            HasaDevSecLK
          </a>
        </p>
      </div>
    </div>
  );
}
