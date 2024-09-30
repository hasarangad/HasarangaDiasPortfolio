import React from 'react'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react';
import pp from '../images/pp.png'
import './home.css'
import '../output.css'

export default function Home() {
    useEffect(()=>{
        document.title ="Hasaranga Dias | Home"
      },[]);
    
      const initialContent = {
        title: 'Software Engineer',
        description: 'Crafting Innovative Solutions',
        details: 'As a passionate Software Engineer, I specialize in developing scalable and efficient software solutions. With experience in full-stack development, I am adept at both frontend and backend technologies. My projects include building web applications, optimizing performance, and implementing modern software practices.',
        
      };

      const newContent = {
          title: 'Cybersecurity Analyst',
          description: 'Protecting Digital Landscapes',
          details: 'As a dedicated Cybersecurity Enthusiast, I am committed to safeguarding digital environments from emerging threats. My focus includes ethical hacking, threat detection, and malware analysis. I am continuously expanding my knowledge through practical experience and specialized courses.',
      };

      const [content, setContent] = useState(initialContent);

      useEffect(() => {
          const intervalId = setInterval(() => {
              setContent(prevContent => (
                  prevContent === initialContent ? newContent : initialContent
              ));
          }, 10000); // Change content every minute

          // Cleanup interval on component unmount
          return () => clearInterval(intervalId);
      }, []);
  
    return (
      <>
        <div className="App">
          <Navbar/>


        </div>

        <div class="container">
            <div class="content">
                <div >
                  <p>I'm</p>
                  <h1 class="name">Keshan Hasaranga Dias Gunawardhana</h1>
                </div>
                <div className='transition-opacity'>
                  <h1>{content.title}</h1>
                  <p>{content.description}</p>
                  <p>{content.details}</p>
                </div>
                
                <button>Download CV</button>
            </div>
            <div class="profile-container">
                <div class="rotating-border"></div>
                <img class="profile-photo" src={pp} alt="Profile"/>
            </div>
        </div>
        
      </>
      
    )
}
