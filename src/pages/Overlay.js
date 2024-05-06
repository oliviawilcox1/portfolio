import { Container, Typography, Stack, Box, Grid } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
export default function Overlay() {

  const transition = { type: 'spring', duration: 0.8 }
  const config = {
    initial: { x: -100, opacity: 0, transition: { ...transition, delay: 0.5 } },
    animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
    exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } }
  }
  return (
    <Stack spacing={2} style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 2 }} mt={2}>


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
  

    </Stack>
  )
}

