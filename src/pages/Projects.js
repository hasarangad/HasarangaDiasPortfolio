import React from 'react'
import Navbar from '../components/Navbar'
import { useEffect } from 'react';

export default function Projects() {
    useEffect(()=>{
        document.title ="Hasaranga Dias | Projects"
      },[]);

  return (
    <div>
      <Navbar/>
    </div>
  )
}
