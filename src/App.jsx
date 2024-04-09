import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skill';
import Work from './components/Work';
import Contact from './components/Contact';




function App() {

  
  return (
    <div>
      <Navbar/>
      <Home /> 
      <About />
      <Skills />
      <Work/>
      <Contact />
    </div>
  

  );
}

export default App;
