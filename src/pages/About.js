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

      <div class="about">
        <h1>About</h1>
      </div>

      <div class="contact">
        <h1>Contact</h1>
      </div>

      <div class="education">
        <h1>Education</h1>
      </div>
      
      <div class="techSkills">
        <h1>Technical Skills</h1>
      </div>
    </div>

    
  )
}
