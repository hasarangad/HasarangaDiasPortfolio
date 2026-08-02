import React, { useRef, useEffect, useState } from 'react';
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

/*
 * useFadeIn — robust IntersectionObserver hook
 *
 * Key fixes vs. previous version:
 *  1. threshold: 0  → fires the instant ANY pixel of the element enters
 *     the viewport. threshold: 0.1 / 0.15 silently fails when the element
 *     is taller than the viewport (max intersection ratio < threshold).
 *  2. rootMargin: '0px 0px -60px 0px' → triggers 60 px *before* the
 *     element's top reaches the very bottom of the screen, giving a
 *     smoother feel on all sizes.
 *  3. initialVisible prop → sections already on screen at page-load start
 *     as visible immediately, skipping the invisible-first-frame flash.
 */
function useFadeIn(initialVisible = false) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(initialVisible);

  useEffect(() => {
    // Already visible — no need to observe
    if (initialVisible) return;

    const el = ref.current;
    if (!el) return;

    // Check if the element is already in the viewport right now
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setVisible(true);
      return; // Already on screen, no need to set up observer
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // trigger once, stay visible forever
        }
      },
      {
        threshold: 0,                    // fire on first pixel
        rootMargin: '0px 0px -60px 0px' // trigger 60px before bottom edge
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once on mount

  return [ref, visible];
}

export default function About() {
  useEffect(() => {
    document.title = 'Hasaranga Dias | About';
  }, []);

  /*
   * The first section (about) is always on screen when the page loads,
   * so we pass initialVisible=true — it renders visible immediately.
   * All other sections start hidden and fade in on scroll.
   */
  const [aboutRef,      aboutVisible]      = useFadeIn(true);
  const [contactRef,    contactVisible]    = useFadeIn(false);
  const [skillsRef,     skillsVisible]     = useFadeIn(false);
  const [leaderRef,     leaderVisible]     = useFadeIn(false);
  const [eduRef,        eduVisible]        = useFadeIn(false);

  return (
    <div>
      <Navbar />
      <ParticleBackground />

      {/* 1 ── About / Bio ──────────────────────────────────────── */}
      <div ref={aboutRef} className={`about ${aboutVisible ? 'in-view' : 'out-of-view'}`}>
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
      <div ref={eduRef} className={`education ${eduVisible ? 'in-view' : 'out-of-view'}`}>
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
      <div ref={skillsRef}
           className={`skills ${skillsVisible ? 'in-view' : 'out-of-view'}`}
           style={{ marginBottom: '2rem' }}>
        <h1>Technical Skills</h1>

        <p><strong>🔍 Security &amp; Network Analysis:</strong> Nmap, Wireshark, Burp Suite, Metasploit, OWASP ZAP, Semgrep, Checkov</p>
        <p><strong>💻 Scripting &amp; Programming:</strong> Python, Bash, PowerShell, SQL</p>
        <p><strong>🌐 Systems &amp; Networking:</strong> Linux (Ubuntu, Kali Linux), Windows Server, Active Directory, DNS (BIND9), SSH, Firewalls (UFW/iptables), TCP/IP fundamentals</p>
        <p><strong>☁️ Cloud &amp; DevOps:</strong> AWS (EC2, S3, IAM, VPC), Microsoft Azure, Docker, GitLab CI/CD, Terraform</p>
        <p><strong>🎓 Certifications:</strong> TryHackMe (14 rooms — DevSecOps, OWASP Top 10, Network Security, Automation, OWASP ZAP, Docker, IaC), AWS Educate (IAM, S3, EC2, VPC, RDS, Lambda, CloudWatch), HackerRank (Python, Linux Shell, Java, SQL), SoloLearn (10 programming certifications)</p>
      </div>

      {/* 4 ── Leadership ───────────────────────────────────────── */}
      <div ref={leaderRef}
           className={`leadership-section ${leaderVisible ? 'in-view' : 'out-of-view'}`}
           style={{ marginBottom: '3rem' }}>
        <h1>🏆 Leadership &amp; Honors</h1>

        <div className="leadership-grid">
          <div className="leadership-card">
            <div className="leadership-shine"></div>
            <div className="leadership-icon-wrap">
              <FaCrown className="leadership-icon" />
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
      <div ref={contactRef} className={`contact ${contactVisible ? 'in-view' : 'out-of-view'}`}>
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

      <div style={{ height: '60px' }} />
    </div>
  );
}
