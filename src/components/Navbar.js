import React from 'react'
import { Link } from 'react-router-dom'
import { WavyLink } from 'react-wavy-transitions'

const Header = () => {
   return (
    <header>
    <div className='navbar'>
        <div className='links'>
        <WavyLink to="/about" color="#950740"> 
                ABOUT
            </WavyLink>
            <WavyLink to="/contacts" color="#6F2232"> 
                CONTACT ME
            </WavyLink>
            {/* <WavyLink to="/projects" color="#6F2232"> 
                PROJECTS 
            </WavyLink> */}
        </div>
        <div className='logo'>
            <WavyLink to="/" color="#1A1A1D"><h4>OLIVIA WILCOX</h4></WavyLink> 
        </div>
        <div className='links'>
        <a target="_blank" rel="noopener" class="contact__link font-medium" href="https://github.com/oliviawilcox1" aria-label="github">
            <img className="github" src={require('../download-1.png')}/> 
        </a>
        <a target="_blank" rel="noopener" class="contact__link font-medium" href="https://www.linkedin.com/in/oliviawilcox007/" aria-label="linkedin">
            <img className="linkedIn" src={require('../download.png')}/>
          </a> 
        </div>
    </div>
    </header>
   )
}

export default Header