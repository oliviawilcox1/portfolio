import { Container, Typography, Stack, Box, Grid } from '@mui/material'
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Overlay  from './Overlay';
import ReactAtom from './ReactAtom';

const Home = () => {
    
   return (
    <Container>
        <Stack sx={{ height: '80vh' }} >
            <Grid container>
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
  
                </Grid> */}
                <Grid item xs={12}>
                    <Overlay/>
                    <ReactAtom />
                </Grid>
            </Grid>


         {/* working through <a href="https://www.upwork.com" rel="nofollow noreferrer noopener" target="_blank">UpWork </a> */}
        {/* <div className='aboutdescrip'>
          <p> I specialize in building applications using JavaScript, React, HTML/CSS, MongoDB, Node.js and Express. 
          I have a passion for software development, problem solving, design aesthetics, and engineering excellence. </p> 
          <p>I have a Bachelor's degree from UCLA in Sociology, and have spent the past year combining my technical skills with my knowledge of social systems in order to create human-centric technologies. </p>
          <p>My days are spent designing, learning, and of course coding! I also volunteer code to social projects I care about and participate in purpose-driven Hackathons. </p>

        </div> */}

        </Stack>
    </Container>
   )
}


export default Home