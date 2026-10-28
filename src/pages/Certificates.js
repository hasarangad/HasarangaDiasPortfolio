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
  FaIdCard,
  FaAward,
  FaShieldAlt,
  FaGraduationCap,
  FaFilePdf
} from 'react-icons/fa';
import {
  SiTryhackme,
  SiAmazonwebservices,
  SiHackerrank,
  SiSololearn,
  SiCredly
} from 'react-icons/si';
import './certificates.css';

const CERTIFICATES_DATA = [
  // ── 1. Industry Valid & Professional Certifications ──────────
  {
    id: 'thm-sal1',
    tier: 'industry',
    tierLabel: 'Industry-Valid Certification',
    title: 'TryHackMe: Security Analyst Level 1 (SAL1)',
    issuer: 'TryHackMe',
    category: 'Cybersecurity & DevSecOps',
    categoryFilter: 'cybersecurity',
    credentialId: '6ad71bc15d8ac44bf495f77f',
    credlyBadgeId: '78d13846-d2cc-4bdd-9821-2c2b21b76f6e',
    icon: <SiTryhackme />,
    badgeImage: 'https://images.credly.com/images/fc0df734-6716-45ba-8563-9fd0eba18373/linkedin_thumb_blob',
    badgeText: 'Industry Certified (No Expiration)',
    date: 'Issued Oct 21, 2026',
    description: 'Officially certified Security Analyst Level 1 (SAL1). Validates real-world Tier 1 SOC competencies through a rigorous proctored exam featuring simulated enterprise alert triage, log investigation, and threat reporting.',
    tags: ['SAL1 Certified', 'SOC Level 1', 'Industry Exam', 'SIEM & Splunk', 'Incident Response', 'Alert Triage', 'Log Forensics', 'MITRE ATT&CK'],
    keyHighlights: [
      'Enterprise SOC Simulator: Real-time alert triage, incident containment, and evidence gathering within live SOC simulator',
      'SIEM Operations & Log Forensics: Querying, event correlation, and anomaly detection using Splunk and SIEM platforms',
      'Phishing & Malware Analysis: Email header inspection, attachment analysis, malicious URL extraction, and IoC hunting',
      'Threat Intelligence & Frameworks: Tactical application of the Cyber Kill Chain, Diamond Model, and MITRE ATT&CK matrix',
      'Actionable Incident Documentation: Crafting structured SOC incident tickets, escalation briefs, and remediation reports',
      'Proctored Practical Assessment: Timed practical examination proving hands-on analyst capability beyond theoretical knowledge'
    ],
    detailedOverview: 'Awarded the official TryHackMe Security Analyst Level 1 (SAL1) certification. This industry-recognized, practical credential validates readiness for live Security Operations Center (SOC) environments. Unlike standard multiple-choice tests, the SAL1 examination requires candidates to resolve complex, realistic cyber incidents in a simulated enterprise SOC—triaging alerts, extracting forensic evidence, identifying threat vectors, and delivering actionable incident reports under timed operational constraints.',
    credentialUrl: 'https://www.credly.com/badges/78d13846-d2cc-4bdd-9821-2c2b21b76f6e',
    credentialLabel: 'Verify on Credly',
    pdfUrl: 'https://assets.tryhackme.com/certification-certificate/6ad71bc15d8ac44bf495f77f.pdf',
    pdfLabel: 'View Certificate (PDF)'
  },
  {
    id: 'idm-diploma',
    tier: 'industry',
    tierLabel: 'Accredited Academic Qualification',
    title: 'Diploma in Office Applications & Web Development',
    issuer: 'IDM Southern Campus',
    category: 'Programming & Software',
    categoryFilter: 'programming',
    credentialId: 'IDM-DIPLOMA-2022',
    icon: <FaUniversity />,
    badgeText: 'Accredited Diploma (2022)',
    date: 'Completed in 2022',
    description: 'Accredited institutional diploma covering web application creation with Adobe Dreamweaver, graphic design with Adobe Photoshop, and full Microsoft Office enterprise suite applications.',
    tags: ['Adobe Dreamweaver', 'Adobe Photoshop', 'MS Office Suite', 'Web Creation', 'Graphic Design', 'Accredited Diploma'],
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
  },

  // ── 2. Learning Pathways, Free Tracks & Verified Badges ───────
  {
    id: 'thm-devsecops',
    tier: 'learning',
    tierLabel: 'Learning Pathway Certificate',
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
    tier: 'learning',
    tierLabel: 'Learning Pathway Certificate',
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
    id: 'aws-educate-cloud-101',
    tier: 'learning',
    tierLabel: 'AWS Educate Training Badge',
    title: 'AWS Educate: Introduction to Cloud 101',
    issuer: 'Amazon Web Services Training & Certification',
    category: 'Cloud Computing',
    categoryFilter: 'cloud',
    credentialId: 'f02d5ca0-244e-4569-bbab-9b2a5db79b21',
    credlyBadgeId: 'f02d5ca0-244e-4569-bbab-9b2a5db79b21',
    icon: <SiAmazonwebservices />,
    badgeImage: 'https://images.credly.com/images/e51a8579-188d-4363-8ed1-12ad164ef57b/linkedin_thumb_blob',
    badgeText: 'Verified AWS Training Badge',
    date: 'Issued Jun 10, 2025',
    description: 'Earners of this badge have completed the Cloud Computing 101 training and achieved required scores on the post-course assessment. Demonstrates practical ability to create cloud applications in a virtual lab environment and core understanding of AWS cloud services.',
    tags: ['AWS Cloud 101', 'Cloud Architecture', 'Amazon EC2', 'Amazon S3', 'AWS IAM', 'Cloud Fundamentals'],
    keyHighlights: [
      'Fundamental understanding of AWS cloud architecture, value proposition, and global infrastructure',
      'Compute, storage, and networking: Amazon EC2 instances, S3 buckets, and virtual private clouds',
      'Security baselines: Identity and Access Management (IAM), access policies, and shared responsibility model',
      'Hands-on virtual lab execution: Building and testing functional cloud environments',
      'Verified digital credential issued directly by Amazon Web Services Training and Certification on Credly'
    ],
    detailedOverview: 'Awarded the official AWS Educate Introduction to Cloud 101 Training Badge (Credential ID: f02d5ca0-244e-4569-bbab-9b2a5db79b21). Earners of this badge have completed the Cloud Computing 101 training and achieved the required scores on the post-course assessment, demonstrating the ability to create simple cloud applications in virtual lab environments and a solid grasp of AWS core services.',
    credentialUrl: 'https://www.credly.com/badges/f02d5ca0-244e-4569-bbab-9b2a5db79b21/public_url',
    credentialLabel: 'Verify on Credly'
  },
  {
    id: 'aws-educate-databases',
    tier: 'learning',
    tierLabel: 'AWS Educate Training Badge',
    title: 'AWS Educate: Getting Started with Databases',
    issuer: 'Amazon Web Services Training & Certification',
    category: 'Cloud Computing',
    categoryFilter: 'cloud',
    credentialId: 'b11b2add-dec6-40a8-84c7-d38bccc7f832',
    credlyBadgeId: 'b11b2add-dec6-40a8-84c7-d38bccc7f832',
    icon: <SiAmazonwebservices />,
    badgeImage: 'https://images.credly.com/images/a08cf90b-9838-4f6c-82bd-8db85fb89dd5/linkedin_thumb_blob',
    badgeText: 'Verified AWS Training Badge',
    date: 'Issued Jun 22, 2025',
    description: 'Earners of this badge have completed the Getting Started with Databases training and achieved required scores on the post-course assessment. Demonstrates practical ability to set up an Amazon RDS instance and use SQL commands to read and write to the database.',
    tags: ['AWS Databases', 'Amazon RDS', 'Relational Databases', 'SQL Queries', 'Cloud Data'],
    keyHighlights: [
      'Amazon Relational Database Service (RDS): Provisioning, deploying, and configuring database engines',
      'Database operations: Using SQL commands to create relational schemas, insert records, and execute analytical queries',
      'Cloud database access: Managing database security groups, public/private access, and credential security',
      'High availability and backups: Automated backups, multi-AZ considerations, and database maintenance',
      'Verified digital credential issued directly by Amazon Web Services Training and Certification on Credly'
    ],
    detailedOverview: 'Awarded the official AWS Educate Getting Started with Databases Training Badge (Credential ID: b11b2add-dec6-40a8-84c7-d38bccc7f832). Earners have successfully completed the specialized database curriculum and assessments, demonstrating hands-on proficiency in provisioning Amazon RDS instances and performing structured SQL read/write operations.',
    credentialUrl: 'https://www.credly.com/badges/b11b2add-dec6-40a8-84c7-d38bccc7f832/public_url',
    credentialLabel: 'Verify on Credly'
  },
  {
    id: 'hackerrank',
    tier: 'learning',
    tierLabel: 'Domain Skill Badges',
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
    tier: 'learning',
    tierLabel: 'Modular Course Certificates',
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
  }
];

const TIER_FILTERS = [
  { key: 'all', label: 'All Credentials', icon: <FaLayerGroup /> },
  { key: 'industry', label: 'Industry-Valid Certifications', icon: <FaAward />, highlight: true },
  { key: 'learning', label: 'Learning Pathways & Badges', icon: <FaGraduationCap /> }
];

const CATEGORY_FILTERS = [
  { key: 'all', label: 'All Domains', icon: <FaLayerGroup /> },
  { key: 'cybersecurity', label: 'Cybersecurity & DevSecOps', icon: <FaShieldAlt /> },
  { key: 'cloud', label: 'Cloud Computing', icon: <SiAmazonwebservices /> },
  { key: 'programming', label: 'Programming & Software', icon: <FaBook /> }
];

export default function Certificates() {
  const [activeTier, setActiveTier] = useState('all');
  const [activeCategory, setActiveCategory] = useState('all');
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

  // Filter logic
  const industryCerts = CERTIFICATES_DATA.filter(
    (item) => item.tier === 'industry' && (activeCategory === 'all' || item.categoryFilter === activeCategory)
  );

  const learningCerts = CERTIFICATES_DATA.filter(
    (item) => item.tier === 'learning' && (activeCategory === 'all' || item.categoryFilter === activeCategory)
  );

  // Counts for tabs
  const totalIndustryCount = CERTIFICATES_DATA.filter((i) => i.tier === 'industry').length;
  const totalLearningCount = CERTIFICATES_DATA.filter((i) => i.tier === 'learning').length;
  const totalAllCount = CERTIFICATES_DATA.length;

  const renderCard = (cert) => {
    const isIndustry = cert.tier === 'industry';
    const isCredly = cert.credentialUrl && cert.credentialUrl.includes('credly');

    return (
      <article
        key={cert.id}
        className={`cert-card ${isIndustry ? 'tier-industry' : 'tier-learning'}`}
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
            <div className="cert-card-top-left">
              <span className={`cert-tier-badge ${cert.tier}`}>
                {isIndustry ? <FaAward /> : <FaBook />}
                {isIndustry ? 'Industry Valid' : 'Learning Pathway'}
              </span>
              <span className="cert-category-badge">{cert.category}</span>
            </div>
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
          <span className={`cert-status-badge ${cert.tier}`}>
            <FaCheckCircle /> {cert.badgeText}
          </span>
          <div className="cert-card-actions-group">
            {cert.pdfUrl && (
              <a
                href={cert.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-card-pdf-btn"
                onClick={(e) => e.stopPropagation()}
                title="View Official Certificate PDF"
              >
                <FaFilePdf size={12} /> PDF
              </a>
            )}
            {cert.credentialUrl ? (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`cert-card-verify-btn ${isCredly ? 'credly-btn' : ''}`}
                onClick={(e) => e.stopPropagation()}
                title={cert.credentialLabel || 'View Credential'}
              >
                {isCredly ? <SiCredly size={13} /> : <FaExternalLinkAlt size={11} />}
                {isCredly ? 'Credly' : cert.credentialUrl.includes('profile') ? 'Profile' : 'Verify'}
              </a>
            ) : (
              <span className="cert-click-hint">Click for details &rarr;</span>
            )}
          </div>
        </div>
      </article>
    );
  };

  return (
    <div className="certificates-wrapper">
      <ParticleBackground />
      <Navbar />

      <header className="certificates-header">
        <h1 className="certificates-title">Certificates &amp; Credentials</h1>
        <p className="certificates-subtitle">
          Distinguished industry-valid certifications, accredited academic qualifications, verified cybersecurity learning pathways, and cloud problem-solving badges.
        </p>

        {/* Official Credly Profile Link */}
        <div className="credly-profile-banner">
          <a
            href="https://www.credly.com/users/keshan-hasaranga"
            target="_blank"
            rel="noopener noreferrer"
            className="credly-profile-btn"
            title="View Keshan Hasaranga's Credly Profile with 3 Verified Badges"
          >
            <SiCredly className="credly-icon-accent" />
            <span>Official Credly Profile: <strong>3 Verified Digital Badges</strong></span>
            <FaExternalLinkAlt size={11} />
          </a>
        </div>

        {/* Primary Filter: Tier Selector (Industry Valid vs Learning Pathways) */}
        <div className="cert-tier-nav" role="tablist" aria-label="Credential validity level">
          {TIER_FILTERS.map((tier) => {
            const count =
              tier.key === 'all'
                ? totalAllCount
                : tier.key === 'industry'
                ? totalIndustryCount
                : totalLearningCount;

            return (
              <button
                key={tier.key}
                role="tab"
                aria-selected={activeTier === tier.key}
                className={`cert-tier-tab ${tier.highlight ? 'tier-tab-industry' : ''} ${activeTier === tier.key ? 'active' : ''}`}
                onClick={() => setActiveTier(tier.key)}
              >
                <span className="cert-tier-tab-icon">{tier.icon}</span>
                <span className="cert-tier-tab-label">{tier.label}</span>
                <span className="cert-tier-tab-count">{count}</span>
              </button>
            );
          })}
        </div>

        {/* Secondary Filter: Domain Pills */}
        <div className="cert-filters" role="tablist" aria-label="Filter by domain">
          {CATEGORY_FILTERS.map((cat) => (
            <button
              key={cat.key}
              role="tab"
              aria-selected={activeCategory === cat.key}
              className={`cert-filter-btn ${activeCategory === cat.key ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.key)}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>
      </header>

      {/* ── Section 1: Industry-Valid & Accredited Certifications ────────── */}
      {(activeTier === 'all' || activeTier === 'industry') && (
        <section className="cert-tier-section" aria-labelledby="industry-certs-heading">
          <div className="cert-section-header">
            <span className="cert-section-tag industry">
              <FaAward /> Industry Validated &amp; Formal Credentials
            </span>
            <h2 id="industry-certs-heading" className="cert-section-title">
              Industry Valid Certifications
            </h2>
            <p className="cert-section-desc">
              Rigorous, proctored examinations and formally accredited institutional qualifications with verified industry standing.
            </p>
          </div>

          {industryCerts.length > 0 ? (
            <main className="certificates-grid">
              {industryCerts.map(renderCard)}
            </main>
          ) : (
            <div className="cert-empty-state">
              <p>No industry valid certifications found for the selected domain.</p>
            </div>
          )}
        </section>
      )}

      {/* ── Section 2: Continuous Learning Pathways & Badges ────────────── */}
      {(activeTier === 'all' || activeTier === 'learning') && (
        <section className="cert-tier-section" aria-labelledby="learning-certs-heading">
          <div className="cert-section-header">
            <span className="cert-section-tag learning">
              <FaGraduationCap /> Continuous Learning &amp; Skill Badges
            </span>
            <h2 id="learning-certs-heading" className="cert-section-title">
              Learning Pathways &amp; Domain Badges
            </h2>
            <p className="cert-section-desc">
              Completed hands-on cybersecurity career tracks, cloud foundations, and verified algorithmic problem-solving milestones.
            </p>
          </div>

          {learningCerts.length > 0 ? (
            <main className="certificates-grid">
              {learningCerts.map(renderCard)}
            </main>
          ) : (
            <div className="cert-empty-state">
              <p>No learning pathways found for the selected domain.</p>
            </div>
          )}
        </section>
      )}

      {/* ── Detail Modal ────────────────────────────────────────────────── */}
      {selectedCert && (
        <div
          className="cert-modal-overlay"
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className={`cert-modal-content ${selectedCert.tier === 'industry' ? 'modal-industry' : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="cert-modal-close-btn"
              onClick={() => setSelectedCert(null)}
              aria-label="Close modal"
            >
              Close
            </button>

            <div className="cert-modal-header-container">
              {selectedCert.badgeImage && (
                <div className="cert-modal-badge-image-box">
                  <img
                    src={selectedCert.badgeImage}
                    alt={`${selectedCert.title} Credly Badge`}
                    className="cert-modal-badge-img"
                  />
                  <span className="cert-modal-badge-verified-tag">
                    <SiCredly /> Credly Verified
                  </span>
                </div>
              )}

              <div className="cert-modal-header">
                <div className="cert-modal-badge-row">
                  <span className={`cert-tier-badge ${selectedCert.tier}`}>
                    {selectedCert.tier === 'industry' ? <FaAward /> : <FaBook />}
                    {selectedCert.tier === 'industry' ? 'Industry Valid Credential' : 'Learning Pathway / Badges'}
                  </span>
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
                      <FaIdCard /> Cert ID: {selectedCert.credentialId}
                    </span>
                  )}
                  {selectedCert.credlyBadgeId && (
                    <span className="cert-credential-id credly-meta-id">
                      <SiCredly /> Credly ID: {selectedCert.credlyBadgeId.slice(0, 8)}...
                    </span>
                  )}
                </div>
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

            <div className="cert-modal-actions">
              {selectedCert.credentialUrl && (
                <a
                  href={selectedCert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`cert-verify-btn ${selectedCert.credentialUrl.includes('credly') ? 'credly-verify-btn' : ''}`}
                >
                  {selectedCert.credentialUrl.includes('credly') ? <SiCredly size={18} /> : <FaExternalLinkAlt />}
                  {selectedCert.credentialLabel || 'Verify Certificate'}
                </a>
              )}
              {selectedCert.pdfUrl && (
                <a
                  href={selectedCert.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-pdf-btn"
                >
                  <FaFilePdf size={16} /> {selectedCert.pdfLabel || 'View Official Certificate (PDF)'}
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
