import { Container } from '@mui/material'
import React from 'react'

const Experience = () => {
   return (
      <Container>

    <div class="c-timecard">
    <h2 className='greeting2'>Experience </h2>
      <div class="c-gant">
        <div class="c-gant__chart">
          <div class="c-gant__entry c-gant__entry--ct">
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
          
          <div class="c-gant__entry c-gant__entry--df">
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
          
          <div class="c-gant__entry c-gant__entry--fl">
            <div class="o-flexy">
              <div class="o-flexy__block">
              <span class="c-gant__company">Freelance </span>
                <span class="c-gant__role"> Full Stack Developer </span>
              </div>
              <div class="o-flexy__item">
                <div class="c-gant__tenure">2022 - Current</div>
              </div>
            </div>
          </div>
          
          <div class="c-gant__entry c-gant__entry--hs">
            <div class="o-flexy">
              <div class="o-flexy__block">
                <span class="c-gant__company">Nextiles </span>
                <span class="c-gant__role"> Software Engineer</span>
              </div>
              <div class="o-flexy__item">
                <div class="c-gant__tenure">2022- Current</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </Container>
   )
}

export default Experience