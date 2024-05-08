import { Container, Typography, Stack, Box, Grid } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
export default function Overlay() {

  const transition = { type: 'spring', duration: 0.8 }

  const handleGitHubClick = () => {
    window.open('https://github.com/oliviawilcox1', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/oliviawilcox007/', '_blank');
  };
  return (
    <Stack spacing={3} style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 2 }} mt={3} ml={3}>


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
               <GitHubIcon fontSize="large" onClick={handleGitHubClick} sx={{cursor: "pointer"}}/>
               <LinkedInIcon fontSize="large" onClick={handleLinkedInClick} />
               {/* <EmailIcon fontSize="large"/> */}
            </Stack>

    </Stack>
  )
}

