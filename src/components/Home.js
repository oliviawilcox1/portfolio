import React from 'react'
import { WavyLink } from 'react-wavy-transitions'


const Home = () => {
document.body.style = "#1A1A1D"
   return (
    <>
        <div className='homecontainer'>
            <div className='bio'>
                <div className='greet'>
                <span><h1 className='greeting'> Hi there!  </h1> </span>
                <span><h1 className='name'> I'm Olivia Wilcox. </h1></span>
                </div>
             

                <h4 className='description'> A Full Stack Developer </h4>
                <h4 className='location'> Located In New York City</h4>

                <div>
                {/* <WavyLink to="/about" color="#1A1A1D"><h4>OLIVIA WILCOX</h4></WavyLink>  */}
                <WavyLink to="/about" color="#950740"><button className='button'>Learn More About My Work</button></WavyLink>
                </div>
            </div>
            <div className='image'>
                <img src={require('../image.jpg')} alt ="Portfolio Photo"/>
                {/* <img src="./image.jpg" alt ="Portfolio Photo"/> */}
            </div>
        </div>
    </>
   )
}

export default Home