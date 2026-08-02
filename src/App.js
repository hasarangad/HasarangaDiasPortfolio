import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ScrollFeatures from './components/ScrollFeatures';

function App() {
  return (
    <HashRouter>
      <ScrollFeatures />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Projects' element={<Projects />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
