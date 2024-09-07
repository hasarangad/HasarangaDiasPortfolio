import React from 'react'
import Navbar from '../components/Navbar'
import { useEffect } from 'react';

export default function About() {
    useEffect(()=>{
        document.title ="Hasaranga Dias | About"
      },[]);
  return (
    <div>
      <Navbar/>
    </div>
  )
}
