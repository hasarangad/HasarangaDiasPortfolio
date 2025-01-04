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
    "CLASS PRO": {
      description: "Website for Parent-Teacher collaboration.",
      additionalInfo: [
        "Platform to communicate between teachers and parents (Group project)",
        "Tech stack used: React JS, Firebase"
      ],
      moreInfo: "The 'CLASS PRO' project is a web-based platform designed to foster collaboration between teachers and parents, streamlining communication and engagement. Built using React JS for the frontend and Firebase for backend services, this platform enables seamless interaction, allowing teachers to share updates, assignments, and progress reports, while parents can easily communicate with educators regarding their child's development. The user-friendly interface provides a centralized space for all important notifications and discussions, enhancing the overall educational experience and helping to bridge the gap between school and home in an efficient, accessible way. This project was developed as part of a group effort, demonstrating teamwork and proficiency in modern web development technologies."
    },
    "CAREERBRIDGE": {
      description: "Job Portal.",
      additionalInfo: [
        "Platform to find a job, post a job (Group project)",
        "Tech stack used: HTML, CSS, JAVASCRIPT, PHP"
      ],
      moreInfo: "CareerBridge allows users to search for job opportunities and post jobs, aiming to connect employers and job seekers."
    },
    "SNAKE GAME": {
      description: "It is a remake of the Nokia Snake game.",
      additionalInfo: [
        "Mini Game",
        "Tech stack used: Python"
      ],
      moreInfo: "A fun and interactive remake of the classic Nokia Snake game, developed using Python."
    },
    "VIRTUAL CALCULATOR": {
      description: "Virtual calculator that uses finger movements to operate.",
      additionalInfo: [
        "Generates 16 buttons for calculation",
        "Tech stack used: OpenCV, Python"
      ],
      moreInfo: "The virtual calculator uses hand gesture recognition with OpenCV to simulate button clicks for performing mathematical calculations."
    },
    "MY PORTFOLIO": {
      description: "Developed using React.js and Tailwind CSS.",
      additionalInfo: [
        "Created a responsive and dynamic personal portfolio website to showcase skills, projects, and experience as a software engineer.",
        "Implemented modern design principles using Tailwind CSS and interactive user experiences with React.js, including state management and component-driven architecture."
      ],
      moreInfo: "The portfolio website highlights my software engineering skills, my projects, and my journey in the tech industry."
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
            <h3 className="project-title">{projectName}</h3>
            <p className="project-description">{projectDetails[projectName].description}</p>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3 className="project-title">{selectedProject}</h3>
            <p className="project-description">{projectDetails[selectedProject].description}</p>
            {projectDetails[selectedProject].additionalInfo.map((info, index) => (
              <p key={index}><strong>{info}</strong></p>
            ))}
            <p>{projectDetails[selectedProject].moreInfo}</p>
            <button className="close-modal-btn" onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
