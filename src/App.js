import './index.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { WavyContainer } from 'react-wavy-transitions';
import Home from "./pages/Home"
import Header from "./layout/header/Header"
import Contact from "./pages/Contact"
import { Layout } from './layout/Layout';
import { Footer } from './layout/Footer';
import { Message } from './pages/Message';

function App() {
  return (
    <BrowserRouter>
      <WavyContainer />
      <Header/>
      <Routes>
        <Route 
          path='/' 
          element={<>  <Layout/> <Home/></>}
        />
        <Route path='experience' element={ <Contact />}/>
        <Route path='contact' element={ <Message />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  );
}
export default App;
