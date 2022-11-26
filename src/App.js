import './index.css';
import React, {Fragment } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { WavyContainer } from 'react-wavy-transitions';

import Home from "./components/Home"
import Header from "./components/Navbar"
import Contact from "./components/Contact"
import { Main } from './components/Main';
import Project from './components/Project';
import { Footer } from './components/Footer';
import { Message } from './components/Message';




function App() {
  return (
    <BrowserRouter>
      <WavyContainer />
      <Header/>
      <Routes>
        <Route 
          path='/' 
          element={<>  <Main/> <Home/></>}
        />
        <Route path='about' element={ <Contact />}/>
        <Route path='projects' element={<Project />}/> 
        <Route path='contacts' element={ <Message />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  );
}
export default App;
