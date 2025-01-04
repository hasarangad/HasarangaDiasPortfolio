import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import ParticleBackground from './particles.js';

export default function Projects() {
  useEffect(() => {
    document.title = "Hasaranga Dias | Projects";
  }, []);

  return (
    <div>
      <ParticleBackground />
      <Navbar />
      
      <div className="flex justify-center gap-8 p-8">
        {/* Project 1 */}
        <div className="w-1/2 p-6 text-white bg-gray-800 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Project 1</h3>
          <p>Description of Project 1 goes here. Include details like technologies used, goals, and outcomes.</p>
        </div>
        
        {/* Project 2 */}
        <div className="w-1/2 p-6 text-white bg-gray-800 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Project 2</h3>
          <p>Description of Project 2 goes here. Include details like technologies used, goals, and outcomes.</p>
        </div>
      </div>
    </div>
  );
}
