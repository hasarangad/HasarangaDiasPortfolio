import React from 'react'
import Navbar from '../components/Navbar'
import { useEffect } from 'react';
import './about.css'

export default function About() {
    useEffect(()=>{
        document.title ="Hasaranga Dias | About"
      },[]);
  return (
    <div>
      <Navbar/>
          
            <div className="about">
                <h1>About Me</h1>
                <p>
                    Hi, I'm Hasaranga Dias, a passionate Software Engineer and Cybersecurity Enthusiast.
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

            <div className="contact">
                <h1>Contact</h1>
                <p>
                    Email: <a href="mailto:hasaranga.dias@example.com">hasaranga.dias@example.com</a>
                </p>
                <p>
                    LinkedIn: <a href="https://www.linkedin.com/in/hasaranga-dias/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
                </p>
                <p>
                    GitHub: <a href="https://github.com/hasaranga" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
                </p>
            </div>

            <div className="education">
                <h1>Education</h1>
                <p>
                    <strong>Software Engineering (BSc)</strong><br />
                    Open University of Sri Lanka (OUSL) | Expected Graduation: 2025
                </p>
                <p>
                    <strong>Computer Networks and Cybersecurity (BSc)</strong><br />
                    KIU (KIU University) | Expected Graduation: 2025
                </p>
            </div>

            <div className="techSkills">
                <h1>Technical Skills</h1>
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

    
  )
}
