import React from 'react'

const Contact = () => {
   return (
      <>
      <div className='Aboutme' >
         <h1 className='abouth1name'>I’m Olivia. </h1>
         <h1 className='abouth1'> A Freelance Full Stack Developer</h1>
         <h1 className='abouth12'>building human-centric technologies.</h1>

         {/* working through <a href="https://www.upwork.com" rel="nofollow noreferrer noopener" target="_blank">UpWork </a> */}
        <div className='aboutdescrip'>
          <p> I specialize in building applications using JavaScript, React, HTML/CSS, MongoDB, Node.js and Express. 
          I have a passion for software development, problem solving, design aesthetics, and engineering excellence. </p> 
          <p>I have a Bachelor's degree from UCLA in Sociology, and have spent the past year combining my technical skills with my knowledge of social systems in order to create human-centric technologies. </p>
          <p>My days are spent designing, learning, and of course coding! I also volunteer code to social projects I care about and participate in purpose-driven Hackathons. </p>
          <p>On the weekends, you’ll find me rollerskating, playing the piano, and exploring New York's museums and restaurants! </p>
        </div>
    </div>

    <div class="c-timecard">
    <h2 className='greeting'> Experience </h2>
      <div class="c-gant">
        <div class="c-gant__chart">
          <div class="c-gant__entry c-gant__entry--ct">
            <div class="o-flexy">
              <div class="o-flexy__block">
                <span class="c-gant__company"> Rockrose </span>
                <span class="c-gant__role">Website Administrator </span>
              </div>
              <div class="o-flexy__item">
                <div class="c-gant__tenure">2021</div>
              </div>
            </div>
          </div>
          
          <div class="c-gant__entry c-gant__entry--df">
            <div class="o-flexy">
              <div class="o-flexy__block">
                <span class="c-gant__company">General Assembly </span>
                <span class="c-gant__role">SWE Bootcamp</span>
              </div>
              <div class="o-flexy__item">
                <div class="c-gant__tenure">2022</div>
              </div>
            </div>
          </div>
          
          <div class="c-gant__entry c-gant__entry--fl">
            <div class="o-flexy">
              <div class="o-flexy__block">
                <span class="c-gant__company">Girls In Tech </span>
                <span class="c-gant__role">Hackathon Winner</span>
              </div>
              <div class="o-flexy__item">
                <div class="c-gant__tenure">2022</div>
              </div>
            </div>
          </div>
          
          <div class="c-gant__entry c-gant__entry--hs">
            <div class="o-flexy">
              <div class="o-flexy__block">
                <span class="c-gant__company">Freelance </span>
                <span class="c-gant__role"> Full Stack Developer </span>
              </div>
              <div class="o-flexy__item">
                <div class="c-gant__tenure">2021 - Current</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h1 className='greeting2'> Projects </h1>
    </div>
  </>
   )
}

export default Contact