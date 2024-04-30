import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { GitHub, LinkedIn } from '@mui/icons-material';
import AdbIcon from '@mui/icons-material/Adb';
import { WavyLink } from 'react-wavy-transitions';

const pages = [
    { link: 'experience', color: "#950740", label: "Experience" }, 
    { link: 'contact', color: "#6F2232", label: "Contact" }
];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <Container maxWidth="xl">
        <header>
    <div className='navbar'>
        <div className='links'>
        <WavyLink to="/about" color="#950740"> 
                EXPERIENCE
            </WavyLink>
            <WavyLink to="/contacts" color="#6F2232"> 
                CONTACT ME
            </WavyLink>
        </div>
        <div className='logo'>
            <WavyLink to="/" color="#1A1A1D"><h4>OLIVIA WILCOX</h4></WavyLink> 
        </div>
        <div className='links'>
        <a target="_blank" rel="noopener" class="contact__link font-medium" href="https://github.com/oliviawilcox1" aria-label="github">
            <img className="github" /> 
        </a>
        <a target="_blank" rel="noopener" class="contact__link font-medium" href="https://www.linkedin.com/in/oliviawilcox007/" aria-label="linkedin">
            <img className="linkedIn" />
          </a> 
        </div>
    </div>
    </header>
        <AppBar 
            position="static" 
            sx={{  backgroundColor: "#1A1A1D" }}>
            <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                    <WavyLink to={`/${page.link}`} color={page.color}>
                        <Button
                            key={page.link}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {page.label}
                        </Button>
                </WavyLink>
                ))}
            </Box>
            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
            <Typography
                variant="h6"
                noWrap
                href="/"
                sx={{
                    fontWeight: 500,
                    width: "50%",
                    fontSize: "1.5rem",
                    textAlign: "center",
                    mr: 2,
                display: { xs: 'none', md: 'flex' },
                //   fontWeight: 500,
                letterSpacing: '.3rem',
                //   color: 'inherit',
                //   textDecoration: 'none',
                }}
            >
                Olivia Wilcox
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                size="large"
                onClick={handleOpenNavMenu}
                color="inherit"
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: 'block', md: 'none' },
                }}
                >
                {pages.map((page) => (
                    <MenuItem 
                        key={page.link} 
                        onClick={handleCloseNavMenu}
                    >
                        <Typography textAlign="center">{page.label}</Typography>
                    </MenuItem>
                ))}
                </Menu>
            </Box>
            {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
            <Typography
                variant="h5"
                noWrap
                // component="a"
                href="/"
                sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                }}
            >
                Olivia Wilcox
            </Typography>


            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open GitHub">
                <IconButton 
                    // onClick={handleOpenUserMenu} 
                    sx={{ p: 0 }}>
                    <GitHub />
                </IconButton>
                </Tooltip>

                <Tooltip title="Open LinkedIn">
                <IconButton 
                    // onClick={handleOpenUserMenu} 
                    sx={{ p: 0 }}>
                    <LinkedIn/>
                </IconButton>
                </Tooltip>
            </Box>
            </Toolbar>
        </AppBar>
    </Container>
  );
}
export default Header;
