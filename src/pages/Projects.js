import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import ParticleBackground from './particles.js';
import './projects.css'

export default function Projects() {
  useEffect(() => {
    document.title = "Hasaranga Dias | Projects";
  }, []);

  return (
    <div>
      <ParticleBackground />
      <Navbar />

      <div className="project-container">
        {/* Project 1 */}
        <div className="project-box">
          <h3 className="project-title">Project 1</h3>
          <p className="project-description">Description of Project 1 goes here. Include details like technologies used, goals, and outcomes.</p>
        </div>

        {/* Project 2 */}
        <div className="project-box">
          <h3 className="project-title">Project 2</h3>
          <p className="project-description">Description of Project 2 goes here. Include details like technologies used, goals, and outcomes.</p>
        </div>
      </div>

      <div className="project-container">
        {/* Project 1 */}
        <div className="project-box">
          <h3 className="project-title">Project 1</h3>
          <p className="project-description">Description of Project 1 goes here. Include details like technologies used, goals, and outcomes.</p>
        </div>

        {/* Project 2 */}
        <div className="project-box">
          <h3 className="project-title">Project 2</h3>
          <p className="project-description">Description of Project 2 goes here. Include details like technologies used, goals, and outcomes.</p>
        </div>
      </div>

      <div className="project-container">
        {/* Project 1 */}
        <div className="project-box">
          <h3 className="project-title">Project 1</h3>
          <p className="project-description">Description of Project 1 goes here. Include details like technologies used, goals, and outcomes.</p>
        </div>

        {/* Project 2 */}
        <div className="project-box">
          <h3 className="project-title">Project 2</h3>
          <p className="project-description">Description of Project 2 goes here. Include details like technologies used, goals, and outcomes.</p>
        </div>
      </div>


    </div>
  );
}
