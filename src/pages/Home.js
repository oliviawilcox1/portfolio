import { Container, Typography, Stack, Box, Grid } from '@mui/material'
import * as THREE from 'three'
import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Trail, Float, Line, Sphere, Stars, useAspect } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Overlay  from './Overlay';
import ReactAtom from './ReactAtom';

const Home = () => {
    
    return (
      <Container maxWidth="xl" disableGutters>

        <Stack sx={{ height: '80vh' }} >
            <Overlay/>
            <Canvas camera={{ position: [0, 0, 10] }} >
                <color attach="background"  args={[2/255, 2/255, 2/255]} />
                <Float speed={4} rotationIntensity={1} floatIntensity={2}>
                <Atom />
                </Float>
                <Stars saturation={0} count={400} speed={0.5} />
                <EffectComposer>
                <Bloom mipmapBlur luminanceThreshold={1} radius={0.7} />
                </EffectComposer>
                
            </Canvas>
        </Stack>
  {/* </div> */}
            {/* <Grid container>
                {/* <Grid item xs={6}>
                    <Typography 
                        variant="h1"
                        sx={{  
                        color: "white",
                        textShadow: "4px 2px #6F2232",
                        letterSpacing: '.2rem',
                        }}
                    >
                        Hi There! I'm Olivia.
                    </Typography>

            <Typography 
                variant='h4' 
                sx={{ 
                    color: "white",
                    textShadow: "4px 2px #6F2232",
                    // textAlign: "center"
                }}
            >
                A Software Engineer Specializing in React and AWS
            </Typography>
            <Typography variant='h4' >
                Building Human Centric Technology in New York.
            </Typography>

            <Stack direction={"row"} spacing={2} 
            // sx={{justifyContent:"right"}}
            >
               <GitHubIcon sx={{fontSize: "2rem"}}/>
               <LinkedInIcon sx={{fontSize: "2rem"}}/>
               <EmailIcon sx={{fontSize: "2rem"}}/>
            </Stack>
  
                </Grid> 
                <Grid item xs={12}>
                    <Overlay/>
                    <ReactAtom />
                </Grid>
            </Grid> */}


         {/* working through <a href="https://www.upwork.com" rel="nofollow noreferrer noopener" target="_blank">UpWork </a> */}
        {/* <div className='aboutdescrip'>
          <p> I specialize in building applications using JavaScript, React, HTML/CSS, MongoDB, Node.js and Express. 
          I have a passion for software development, problem solving, design aesthetics, and engineering excellence. </p> 
          <p>I have a Bachelor's degree from UCLA in Sociology, and have spent the past year combining my technical skills with my knowledge of social systems in order to create human-centric technologies. </p>
          <p>My days are spent designing, learning, and of course coding! I also volunteer code to social projects I care about and participate in purpose-driven Hackathons. </p>

        </div> */}


    </Container>
   )
}


export default Home


function Atom(props) {
    const points = useMemo(() => new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(100), [])
    return (
      <group {...props} >
        <Line worldUnits points={points} color="turquoise" lineWidth={0.3} />
        <Line worldUnits points={points} color="turquoise" lineWidth={0.3} rotation={[0, 0, 1]} />
        <Line worldUnits points={points} color="turquoise" lineWidth={0.3} rotation={[0, 0, -1]} />
        <Electron position={[0, 0, 0.5]} speed={6} />
        <Electron position={[0, 0, 0.5]} rotation={[0, 0, Math.PI / 3]} speed={6.5} />
        <Electron position={[0, 0, 0.5]} rotation={[0, 0, -Math.PI / 3]} speed={7} />
        <Sphere args={[0.55, 64, 64]}>
          <meshBasicMaterial color={[6, 0.5, 2]} toneMapped={false} />
        </Sphere>
      </group>
    )
  }
  
  function Electron({ radius = 2.75, speed = 6, ...props }) {
    const ref = useRef()
      console.log(ref)
    useFrame((state) => {
      const t = state.clock.getElapsedTime() * speed
      ref.current.position.set(Math.sin(t) * radius, (Math.cos(t) * radius * Math.atan(t)) / Math.PI / 1.25, 0)
    })
    return (
      <group {...props}>
        <Trail local width={5} length={6} color={new THREE.Color(2, 1, 10)} attenuation={(t) => t * t}>
          <mesh ref={ref} >
            <sphereGeometry args={[0.25]} />
            <meshBasicMaterial color={[10, 1, 10]} toneMapped={false} />
          </mesh>
        </Trail>
      </group>
    )
  }
  