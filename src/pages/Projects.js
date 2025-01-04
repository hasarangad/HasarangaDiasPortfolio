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
          <h3 className="project-title">VIRTUAL CALCULATOR</h3>
          <p className="project-description">virtual calculator that uses finger movements to operate.</p>
        </div>

        {/* Project 2 */}
        <div className="project-box">
          <h3 className="project-title">CAREERBRIDGE</h3>
          <p className="project-description">Platform to find a job, post a job.</p>
        </div>
      </div>

      <div className="project-container">
        {/* Project 1 */}
        <div className="project-box">
          <h3 className="project-title">MY PORTFOLIO</h3>
          <p className="project-description">Created a responsive and dynamic personal
 portfolio website to showcase skills, projects, and
 experience as a software engineer. </p>
        </div>

        {/* Project 2 */}
        <div className="project-box">
          <h3 className="project-title">SNAKE GAME</h3>
          <p className="project-description">It is a remake of nokia snake game.</p>
        </div>
      </div>

      <div className="project-container">
        {/* Project 1 */}
        <div className="project-box">
          <h3 className="project-title"> CLASS PRO</h3>
          <p className="project-description">Web Site for Parent Teacher collaboration.</p>
        </div>

        {/* Project 2 */}
        {/* <div className="project-box">
          <h3 className="project-title">Project 2</h3>
          <p className="project-description">Description of Project 2 goes here. Include details like technologies used, goals, and outcomes.</p>
        </div> */}
      </div>


    </div>
  );
}
