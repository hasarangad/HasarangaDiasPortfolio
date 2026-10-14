import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ParticleBackground from './particles.js';
import {
  FaCertificate,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaCalendarAlt,
  FaUniversity,
  FaLayerGroup,
  FaBook,
  FaIdCard
} from 'react-icons/fa';
import {
  SiTryhackme,
  SiAmazonwebservices,
  SiHackerrank,
  SiSololearn
} from 'react-icons/si';
import './certificates.css';

const CERTIFICATES_DATA = [
  {
    id: 'thm-devsecops',
    title: 'TryHackMe: DevSecOps Pathway Certificate',
    issuer: 'TryHackMe',
    category: 'Cybersecurity & DevSecOps',
    categoryFilter: 'cybersecurity',
    credentialId: 'THM-MKDXHZRW3L',
    icon: <SiTryhackme />,
    badgeText: 'Verified Pathway Certificate',
    date: 'TryHackMe Certified',
    description: 'Officially verified completion of the TryHackMe DevSecOps career pathway, covering continuous security, pipeline automation, SAST, DAST, and container isolation.',
    tags: ['DevSecOps', 'CI/CD Security', 'SAST (Semgrep)', 'DAST (OWASP ZAP)', 'Checkov (IaC)', 'Docker Security'],
    keyHighlights: [
      'Threat Modelling and Secure Software Development Lifecycle (SSDLC)',
      'Static Application Security Testing (SAST) and code scanning in GitLab CI/CD',
      'Dynamic Application Security Testing (DAST) using automated OWASP ZAP',
      'Software Composition Analysis (SCA) and open-source dependency mitigation',
      'Infrastructure as Code (IaC) security scanning and configuration checks',
      'Container hardening, Docker security practices, and secret management'
    ],
    detailedOverview: 'Awarded the official TryHackMe DevSecOps Pathway Certificate (Credential ID: THM-MKDXHZRW3L). This career pathway validates practical expertise in integrating security into modern DevOps workflows, designing automated CI/CD security gates, performing static and dynamic vulnerability analysis, and securing containerized cloud-native environments.',
    credentialUrl: 'https://tryhackme.com/certificate/THM-MKDXHZRW3L',
    credentialLabel: 'Verify DevSecOps Certificate'
  },
  {
    id: 'thm-soc-l1',
    title: 'TryHackMe: SOC Level 1 Pathway Certificate',
    issuer: 'TryHackMe',
    category: 'Cybersecurity & DevSecOps',
    categoryFilter: 'cybersecurity',
    credentialId: 'THM-3H8I1UKAX7',
    icon: <SiTryhackme />,
    badgeText: 'Verified Pathway Certificate',
    date: 'TryHackMe Certified',
    description: 'Officially verified completion of the TryHackMe SOC Level 1 pathway, covering cyber defense operations, SIEM log analysis, traffic inspection, and incident response.',
    tags: ['SOC Level 1', 'SIEM & Splunk', 'Traffic Analysis', 'Endpoint Forensics', 'Incident Response', 'MITRE ATT&CK'],
    keyHighlights: [
      'Cyber defense frameworks: Pyramid of Pain, Cyber Kill Chain, and MITRE ATT&CK',
      'Cyber Threat Intelligence and Indicator of Compromise (IOC) investigation',
      'Network Security and Packet Inspection using Wireshark, Snort, and tcpdump',
      'Endpoint Security and Live Forensics with Windows Event Viewer and Sysinternals',
      'SIEM Operations, alert triage, and log investigation using Splunk and ELK',
      'Phishing Analysis, malware artifacts extraction, and practical incident handling'
    ],
    detailedOverview: 'Awarded the official TryHackMe SOC Level 1 Pathway Certificate (Credential ID: THM-3H8I1UKAX7). This extensive security operations curriculum validates hands-on proficiency in detecting, analyzing, and responding to cyber threats within a 24/7 Security Operations Center (SOC) environment.',
    credentialUrl: 'https://tryhackme.com/certificate/THM-3H8I1UKAX7',
    credentialLabel: 'Verify SOC L1 Certificate'
  },
  {
    id: 'aws-educate',
    title: 'AWS Educate: Cloud Computing & Architecture',
    issuer: 'Amazon Web Services (AWS)',
    category: 'Cloud Computing',
    categoryFilter: 'cloud',
    credentialId: 'AWS-EDUCATE-CLOUD',
    icon: <SiAmazonwebservices />,
    badgeText: 'Cloud Architecture Essentials',
    date: 'Completed Training',
    description: 'Foundational training in AWS core architecture, compute provisioning, secure identity management, and distributed databases.',
    tags: ['AWS IAM', 'Amazon EC2', 'Amazon S3', 'Amazon VPC', 'RDS', 'Lambda', 'CloudWatch'],
    keyHighlights: [
      'Identity and Access Management (IAM): Role-based access and least privilege policies',
      'Amazon EC2: Elastic compute instance deployment and security group configuration',
      'Amazon S3: Scalable object storage, bucket access policies, and lifecycle management',
      'Amazon VPC: Virtual private cloud networking, subnets, route tables, and gateways',
      'Amazon RDS: Managed relational database provisioning and high availability',
      'AWS Lambda & CloudWatch: Serverless execution and infrastructure observability'
    ],
    detailedOverview: 'In-depth learning pathway through AWS Educate covering enterprise cloud architecture design, security baselines, and operational management of core AWS cloud services. Strengthened expertise in building scalable, secure, and resilient cloud infrastructures.',
    credentialUrl: 'https://aws.amazon.com/education/awseducate/',
    credentialLabel: 'AWS Educate Platform'
  },
  {
    id: 'hackerrank',
    title: 'HackerRank: Software Engineering & Problem Solving',
    issuer: 'HackerRank',
    category: 'Programming & Software',
    categoryFilter: 'programming',
    credentialId: 'hasarangadias',
    icon: <SiHackerrank />,
    badgeText: 'Verified Badges & Certificates',
    date: 'HackerRank Profile',
    description: 'Verified profile showcasing all problem solving badges, stars, and skill certifications in Python, Linux Shell, Java, and SQL.',
    tags: ['Python', 'Linux Shell', 'SQL', 'Java', 'Problem Solving', 'Verified Badges'],
    keyHighlights: [
      'Official HackerRank Profile: @hasarangadias',
      'Showcases all earned skill badges, star ratings, and domain achievements',
      'Python: Data structures, string manipulation, and algorithmic efficiency',
      'Linux Shell: Command-line utilities, text processing (awk/sed/grep), and Bash scripting',
      'SQL: Complex joins, relational schemas, aggregations, and query optimization',
      'Java: Object-oriented programming, standard collections, and control flow'
    ],
    detailedOverview: 'All earned skill badges, domain stars, and verified benchmark certificates are published on the official HackerRank profile (@hasarangadias). Demonstrates practical competence in algorithmic problem solving, clean code architecture, Unix shell automation, and relational database querying.',
    credentialUrl: 'https://www.hackerrank.com/profile/hasarangadias',
    credentialLabel: 'View HackerRank Profile & Badges'
  },
  {
    id: 'sololearn',
    title: 'SoloLearn: 10 Software Engineering Certifications',
    issuer: 'SoloLearn',
    category: 'Programming & Software',
    categoryFilter: 'programming',
    credentialId: '24436916',
    icon: <SiSololearn />,
    badgeText: '10 Verified Certifications',
    date: 'SoloLearn Profile',
    description: 'Earned 10 individual software development certifications spanning backend programming, database design, and modern web technologies.',
    tags: ['Python Core', 'SQL Database', 'Java', 'Web Development', 'OOP Principles'],
    keyHighlights: [
      'Official SoloLearn Profile: @24436916',
      'Earned 10 verified curriculum course certifications and milestones',
      'Python Core and Advanced Data Concepts',
      'SQL & Relational Database Engineering',
      'Java Object-Oriented Software Construction',
      'Web Development: Responsive HTML5, CSS3, JavaScript',
      'Algorithms, Flow Control, and Modular Code Architecture'
    ],
    detailedOverview: 'Completed a comprehensive collection of 10 curriculum certifications across programming language syntax, database design, and full-stack development on SoloLearn. All certificates and learning milestones are verified on the official profile (ID: 24436916).',
    credentialUrl: 'https://www.sololearn.com/en/profile/24436916',
    credentialLabel: 'View SoloLearn Profile & Certifications'
  },
  {
    id: 'idm-diploma',
    title: 'Diploma in Office Applications & Web Development',
    issuer: 'IDM Southern Campus',
    category: 'Programming & Software',
    categoryFilter: 'programming',
    credentialId: 'IDM-DIPLOMA-2022',
    icon: <FaUniversity />,
    badgeText: 'Completed: 2022',
    date: 'Completed in 2022',
    description: 'Comprehensive curriculum covering web application creation with Adobe Dreamweaver, graphic design with Adobe Photoshop, and full Microsoft Office suite applications.',
    tags: ['Adobe Dreamweaver', 'Adobe Photoshop', 'MS Office Suite', 'Web Creation', 'Graphic Design'],
    keyHighlights: [
      'Web application creation, visual page layout, and site architecture with Adobe Dreamweaver',
      'Graphic design, digital image editing, and visual asset production in Adobe Photoshop',
      'Comprehensive Microsoft Office software mastery: MS Word, MS Excel, MS PowerPoint, and MS Access',
      'Relational database management, data entry, and structured business documentation workflows',
      'Foundations of HTML, CSS, frontend styling, and responsive digital media design'
    ],
    detailedOverview: 'Awarded the Diploma in Office Applications and Web Development from IDM Southern Campus in 2022. The curriculum provided intensive, practical training in designing and building web applications using Adobe Dreamweaver, crafting professional digital graphics with Adobe Photoshop, and leveraging the complete Microsoft Office suite (Word, Excel, PowerPoint, Access) for enterprise productivity, data management, and business operations.',
    credentialUrl: 'https://www.idm.edu/',
    credentialLabel: 'Visit IDM Campus'
  }
];

const FILTER_OPTIONS = [
  { key: 'all', label: 'All Credentials', icon: <FaLayerGroup /> },
  { key: 'cybersecurity', label: 'Cybersecurity & DevSecOps', icon: <FaCertificate /> },
  { key: 'cloud', label: 'Cloud Computing', icon: <SiAmazonwebservices /> },
  { key: 'programming', label: 'Programming & Software', icon: <FaBook /> }
];

export default function Certificates() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    document.title = 'Hasaranga Dias | Certificates & Credentials';
  }, []);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredCerts = activeFilter === 'all'
    ? CERTIFICATES_DATA
    : CERTIFICATES_DATA.filter(item => item.categoryFilter === activeFilter);

  return (
    <div className="certificates-wrapper">
      <ParticleBackground />
      <Navbar />

      <header className="certificates-header">
        <h1 className="certificates-title">Certificates &amp; Credentials</h1>
        <p className="certificates-subtitle">
          Validated certifications, hands-on cybersecurity labs, cloud computing foundations, and software engineering credentials.
        </p>

        {/* Filter Bar */}
        <div className="cert-filters" role="tablist">
          {FILTER_OPTIONS.map((filter) => (
            <button
              key={filter.key}
              role="tab"
              aria-selected={activeFilter === filter.key}
              className={`cert-filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              <span>{filter.icon}</span>
              <span>{filter.label}</span>
            </button>
          ))}
        </div>
      </header>

      {/* Grid of Certificates */}
      <main className="certificates-grid">
        {filteredCerts.map((cert) => (
          <article
            key={cert.id}
            className="cert-card"
            onClick={() => setSelectedCert(cert)}
            tabIndex={0}
            role="button"
            aria-label={`View details for ${cert.title}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setSelectedCert(cert);
              }
            }}
          >
            <div>
              <div className="cert-card-top">
                <span className="cert-category-badge">{cert.category}</span>
                <div className="cert-issuer-icon" aria-hidden="true">
                  {cert.icon}
                </div>
              </div>

              <div className="cert-card-body">
                <h3 className="cert-title">{cert.title}</h3>
                <div className="cert-issuer-name">
                  <span>{cert.issuer}</span>
                </div>
                <p className="cert-description">{cert.description}</p>
                <div className="cert-tags">
                  {cert.tags.map((tag, idx) => (
                    <span key={idx} className="cert-tag-pill">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="cert-card-footer">
              <span className="cert-status-badge">
                <FaCheckCircle /> {cert.badgeText}
              </span>
              {cert.credentialUrl ? (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-card-verify-btn"
                  onClick={(e) => e.stopPropagation()}
                  title={cert.credentialLabel || 'View Credential'}
                >
                  <FaExternalLinkAlt size={11} /> {cert.credentialUrl.includes('profile') ? 'View Profile' : 'Verify'}
                </a>
              ) : (
                <span className="cert-click-hint">Click for details &rarr;</span>
              )}
            </div>
          </article>
        ))}
      </main>

      {/* Detail Modal */}
      {selectedCert && (
        <div
          className="cert-modal-overlay"
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="cert-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="cert-modal-close-btn"
              onClick={() => setSelectedCert(null)}
              aria-label="Close modal"
            >
              Close
            </button>

            <div className="cert-modal-header">
              <div className="cert-modal-badge-row">
                <span className="cert-category-badge">{selectedCert.category}</span>
                <span className="cert-status-badge">
                  <FaCheckCircle /> {selectedCert.badgeText}
                </span>
              </div>
              <h2 className="cert-modal-title">{selectedCert.title}</h2>
              <div className="cert-modal-meta">
                <span>
                  <FaUniversity /> {selectedCert.issuer}
                </span>
                <span>
                  <FaCalendarAlt /> {selectedCert.date}
                </span>
                {selectedCert.credentialId && (
                  <span className="cert-credential-id">
                    <FaIdCard /> ID: {selectedCert.credentialId}
                  </span>
                )}
              </div>
            </div>

            <div className="cert-modal-extended-info">
              {selectedCert.detailedOverview}
            </div>

            <h4 className="cert-modal-section-title">
              <FaCertificate /> Key Curriculum &amp; Competencies:
            </h4>
            <ul className="cert-modal-list">
              {selectedCert.keyHighlights.map((highlight, index) => (
                <li key={index}>
                  <FaCheckCircle className="cert-modal-check" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            {selectedCert.credentialUrl && (
              <div className="cert-modal-actions">
                <a
                  href={selectedCert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-verify-btn"
                >
                  <FaExternalLinkAlt /> {selectedCert.credentialLabel || 'Verify Certificate'}
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
