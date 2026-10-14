import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ParticleBackground from './particles.js';
import './projects.css';

export default function Projects() {
  useEffect(() => {
    document.title = "Hasaranga Dias | Projects";
  }, []);

  const [selectedProject, setSelectedProject] = useState(null);

  const projectDetails = {
    "TRIGUARDOPS (DEVSECOPS PLATFORM)": {
      description: "Unified security scanning pipeline integrating SAST, DAST, and IaC scanning. Final Year Project, KIU University.",
      category: "🔒 Cybersecurity · Featured",
      additionalInfo: [
        "Integrated Semgrep (SAST), OWASP ZAP (DAST), and Checkov (IaC) into a single GitLab CI/CD pipeline",
        "Built a Python-based decision engine issuing BLOCK / WARN / PASS verdicts by severity",
        "Deployed on AWS EC2 with Nginx + Gunicorn; AI model (CodeT5, BLEU 57.51) proposes automated fixes",
        "Tech stack: Flask, React, PostgreSQL, AWS EC2, Nginx, Gunicorn, GitLab CI/CD"
      ],
      moreInfo: "TriGuardOps is a final year project at KIU University, a unified DevSecOps security scanning platform that integrates SAST (Semgrep), DAST (OWASP ZAP), and IaC scanning (Checkov) into a single GitLab CI/CD pipeline. A Python-based decision engine classifies vulnerabilities by severity and issues BLOCK / WARN / PASS verdicts, giving developers a structured way to act on findings. The full stack (Flask, React, PostgreSQL) is deployed on AWS EC2 with Nginx and Gunicorn, and extended with a fine-tuned AI model (CodeT5, achieving a BLEU score of 57.51) that proposes automated fixes for detected vulnerabilities, making security remediation faster and more actionable.",
      githubLink: null
    },
    "AI-DRIVEN PHISHING DETECTION SYSTEM": {
      description: "Machine learning driven solution to identify phishing attempts in emails and web platforms. Research Ongoing, Group Project, KIU University.",
      category: "🔒 Cybersecurity · Research",
      additionalInfo: [
        "Uses supervised machine learning to detect phishing in emails and web-based platforms",
        "Focuses on recognizing harmful patterns to mitigate social engineering risks",
        "Strengthens cybersecurity in digital communication channels (Group Project | KIU University Sri Lanka)"
      ],
      moreInfo: "The AI-Driven Phishing Detection System is an ongoing research project at KIU University Sri Lanka, developed as a group effort. It designs and implements a machine learning-driven solution to identify phishing attempts within emails and web-based platforms. The project emphasises the use of supervised learning models to recognise harmful patterns and mitigate the risk of social engineering, thereby strengthening cybersecurity across digital communication channels. Research is currently ongoing, exploring model accuracy, real-world deployment strategies, and integration with existing security infrastructure.",
      githubLink: null
    },
    "ACTIVE DIRECTORY ATTACK SIMULATION": {
      description: "Built a 3-VM lab environment and executed 10 real-world Active Directory attack techniques from reconnaissance to domain compromise.",
      category: "🧪 Cybersecurity Lab",
      additionalInfo: [
        "3-VM lab: Windows Server 2019 DC, Windows 10, Kali Linux",
        "Techniques: LLMNR poisoning, BloodHound enumeration, credential dumping (ProcDump/pypykatz), Pass the Hash, Kerberoasting, AS-REP Roasting, DCSync, Golden Ticket, RBCD delegation abuse, AD CS ESC1",
        "Documented detection and disruption strategies for each attack stage"
      ],
      moreInfo: "This lab project involved building a fully functional 3-VM environment (Windows Server 2019 DC, Windows 10, and Kali Linux) and executing 10 real-world Active Directory attack techniques. The attacks covered the full kill chain: LLMNR poisoning, BloodHound enumeration, credential dumping using ProcDump and pypykatz, Pass the Hash, Kerberoasting, AS-REP Roasting, DCSync, Golden Ticket attacks, RBCD delegation abuse, and AD CS ESC1 exploitation. Each attack stage was documented with practical insight into how attackers move through enterprise networks and how each stage can be detected and disrupted, building deep hands-on knowledge of offensive and defensive Active Directory security.",
      githubLink: null
    },
    "NETWORK PENETRATION TESTING (METASPLOITABLE 2)": {
      description: "Used Nmap for reconnaissance and Metasploit to exploit vulnerabilities, documenting the full attack chain from scanning to privilege escalation.",
      category: "🧪 Cybersecurity Lab",
      additionalInfo: [
        "Reconnaissance using Nmap for service and OS enumeration",
        "Exploitation using Metasploit against Metasploitable 2",
        "Documented full attack chain: scanning → exploitation → privilege escalation"
      ],
      moreInfo: "This penetration testing lab used Nmap for reconnaissance and service enumeration against a Metasploitable 2 target, followed by Metasploit to identify and exploit vulnerabilities. The full attack chain was thoroughly documented, from initial scanning and enumeration, through exploitation of specific services, to privilege escalation achieving root access. This project provided hands-on experience with industry-standard penetration testing tools and methodologies, reinforcing both offensive security techniques and the documentation practices required in professional security engagements.",
      githubLink: null
    },
    "DIGITAL FORENSICS INVESTIGATION (AUTOPSY)": {
      description: "Performed file system analysis and recovered hidden artefacts to reconstruct incident timelines and identify indicators of compromise.",
      category: "🧪 Cybersecurity Lab",
      additionalInfo: [
        "Used Autopsy for file system analysis and artefact recovery",
        "Reconstructed incident timelines from digital evidence",
        "Identified indicators of compromise (IOCs) and produced formal lab reports"
      ],
      moreInfo: "This digital forensics lab project utilised Autopsy to perform in-depth file system analysis on forensic disk images. Hidden and deleted artefacts were recovered to reconstruct complete incident timelines and identify indicators of compromise (IOCs). The investigation findings were documented in formal lab reports following professional forensic investigation standards, demonstrating the ability to gather, preserve, and analyse digital evidence in a structured and legally defensible manner.",
      githubLink: null
    },
    "LINUX & NETWORK ADMINISTRATION LAB": {
      description: "Configured static networking, a BIND9 DNS server, hardened SSH access, and implemented firewall rules, documented in formal lab reports.",
      category: "🧪 Cybersecurity Lab",
      additionalInfo: [
        "Configured static networking using Netplan",
        "Set up and administered a BIND9 DNS server",
        "Hardened SSH access and captured/analysed traffic with tcpdump",
        "Implemented firewall rules using UFW/iptables"
      ],
      moreInfo: "This hands-on Linux and Network Administration lab covered a range of practical system administration and security hardening tasks: configuring static networking using Netplan, setting up and managing a BIND9 DNS server, hardening SSH access to prevent unauthorised connections, capturing and analysing network traffic with tcpdump, and implementing firewall rules using both UFW and iptables. Each configuration and finding was written up in a formal lab report, demonstrating the ability to administer and secure Linux-based infrastructure environments.",
      githubLink: null
    },
    "VIRTUAL CALCULATOR": {
      description: "Virtual calculator that uses finger movements to operate.",
      category: "💻 Software",
      additionalInfo: [
        "Generates 16 buttons for calculation",
        "Tech stack used: OpenCV, Python"
      ],
      moreInfo: "VIRTUAL CALCULATOR is an innovative calculator application that allows users to perform calculations using finger movements, eliminating the need for physical interaction with buttons. Developed using Python and OpenCV, this project utilises computer vision techniques to track hand gestures and interpret them as input for the calculator. The application dynamically generates 16 buttons for various mathematical operations, and users can control the calculator simply by moving their fingers in front of the camera. This project demonstrates the integration of computer vision and user interaction, showcasing both technical skills in Python and creative problem-solving in gesture recognition.",
      githubLink: "https://github.com/hasarangad/Virtual-Calculator"
    },
    "CLASS PRO": {
      description: "Website for Parent-Teacher collaboration.",
      category: "💻 Software",
      additionalInfo: [
        "Platform to communicate between teachers and parents (Group project)",
        "Tech stack used: React JS, Firebase"
      ],
      moreInfo: "The 'CLASS PRO' project is a web-based platform designed to foster collaboration between teachers and parents, streamlining communication and engagement. Built using React JS for the frontend and Firebase for backend services, this platform enables seamless interaction, allowing teachers to share updates, assignments, and progress reports, while parents can easily communicate with educators regarding their child's development. The user-friendly interface provides a centralised space for all important notifications and discussions, enhancing the overall educational experience and helping to bridge the gap between school and home in an efficient, accessible way. This project was developed as part of a group effort, demonstrating teamwork and proficiency in modern web development technologies.",
      githubLink: "https://github.com/hasarangad/ClassPro"
    },
    "CAREERBRIDGE": {
      description: "Platform to find a job, post a job.",
      category: "💻 Software",
      additionalInfo: [
        "Job Portal (Group project)",
        "Tech stack used: HTML, CSS, JAVASCRIPT, PHP"
      ],
      moreInfo: "CAREERBRIDGE is a dynamic job portal platform designed to connect job seekers with employers. Developed as a group project, the platform allows users to search for job opportunities and apply for positions, while employers can post job listings and manage applications. Built using a tech stack that includes HTML, CSS, JavaScript, and PHP, CAREERBRIDGE offers a user-friendly interface with intuitive navigation. Job seekers can create profiles, upload resumes, and apply to jobs, while employers can post openings and review applications. The project aims to streamline the job search process and provide a seamless, efficient way for companies to find talent.",
      githubLink: "https://github.com/hasarangad/Careerbridge"
    },
    "SNAKE GAME": {
      description: "It is a remake of the Nokia Snake game.",
      category: "💻 Software",
      additionalInfo: [
        "Mini Game",
        "Tech stack used: Python"
      ],
      moreInfo: "SNAKE GAME is a simple yet engaging remake of the classic Nokia Snake game, developed using Python. This mini-game brings the nostalgia of the original mobile game to life with modern coding techniques. Players control the snake, guiding it to eat food while avoiding collisions with the walls or its own body. As the snake grows longer, the game becomes more challenging, testing players' reflexes and strategic thinking. Built using Python, this project demonstrates basic game development principles, including handling user input, collision detection, and dynamic game state updates, making it a fun and educational experience.",
      githubLink: "https://github.com/hasarangad/Snake-Game-Python"
    },
    "MY PORTFOLIO": {
      description: "Developed using React.js and Tailwind CSS.",
      category: "💻 Software",
      additionalInfo: [
        "Created a responsive and dynamic personal portfolio website to showcase skills, projects, and experience as a software engineer.",
        "Implemented modern design principles using Tailwind CSS and interactive user experiences with React.js, including state management and component-driven architecture."
      ],
      moreInfo: "MY PORTFOLIO is a dynamic and responsive personal website developed using React.js and Tailwind CSS, designed to showcase a diverse range of skills in software engineering, networking, and cybersecurity. The portfolio highlights key projects, technical expertise, and accomplishments across these domains, offering a comprehensive overview of the user's capabilities. With a modern design approach powered by Tailwind CSS and interactive user experiences facilitated by React.js, the website features state management and component-driven architecture to ensure smooth navigation and engagement.",
      githubLink: "https://github.com/hasarangad/HasarangaDiasPortfolio"
    }
  };

  const handleProjectClick = (projectName) => {
    setSelectedProject(projectName);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div>
      <ParticleBackground />
      <Navbar />

      <div className="project-container">
        {Object.keys(projectDetails).map((projectName) => (
          <div key={projectName} className="project-box" onClick={() => handleProjectClick(projectName)}>
            {projectDetails[projectName].category && (
              <span className="project-category">{projectDetails[projectName].category}</span>
            )}
            <h3 className="project-title">{projectName}</h3>
            <p className="project-description">{projectDetails[projectName].description}</p>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {projectDetails[selectedProject].category && (
              <span className="project-category modal-category">{projectDetails[selectedProject].category}</span>
            )}
            <h3 className="project-title">{selectedProject}</h3>
            <p className="project-description">{projectDetails[selectedProject].description}</p>
            <ul className="project-info-list">
              {projectDetails[selectedProject].additionalInfo.map((info, index) => (
                <li key={index}>{info}</li>
              ))}
            </ul>
            <p>{projectDetails[selectedProject].moreInfo}</p>
            {projectDetails[selectedProject].githubLink && (
              <div className="github-link">
                <a href={projectDetails[selectedProject].githubLink} target="_blank" rel="noopener noreferrer">
                  View GitHub Repository
                </a>
              </div>
            )}
            <button className="close-modal-btn" onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
