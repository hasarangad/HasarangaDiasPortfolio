import React from 'react'
import Navbar from '../components/Navbar'
import { useEffect } from 'react';

export default function Home() {
    useEffect(()=>{
        document.title ="Hasaranga Dias | Home"
      },[]);

  return (
    <div>
      <Navbar/>

      
    </div>
  )
}
