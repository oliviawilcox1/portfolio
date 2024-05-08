import * as React from 'react';
import { 
    Slide, AppBar, Box, Toolbar, Typography,
    Menu, Button, MenuItem, useScrollTrigger, Stack
} from '@mui/material';
import  MenuIcon  from '@mui/icons-material/Menu'

import { WavyLink } from 'react-wavy-transitions';

const pages = [
    { link: 'portfolio/about', color: "#950740", label: "About" }, 
    { link: 'portfolio/experience', color: "#950740", label: "Experience" }, 
    { link: 'portfolio/projects', color: "#950740", label: "Projects" }, 
    { link: 'portfolio/contact', color: "#6F2232", label: "Contact" }
];

const links = [
    { link: "https://github.com/oliviawilcox1",  label: "LinkedIn" }, 
    { link: "https://www.linkedin.com/in/oliviawilcox007/", label: "GitHub" }
];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

    function HideOnScroll(props) {
        const { children, window } = props;

        const trigger = useScrollTrigger({
            target: window ? window() : undefined,
        });
        
        return (
            <Slide appear={false} direction="down" in={!trigger}>
            {children}
            </Slide>
        );
    }

  return (
    <HideOnScroll>
        <AppBar>
          <Toolbar disableGutters>
            {/* Small Screen */}
            <Stack 
              sx={{
                display: { xs: 'flex', md: 'none' }, 
                flexDirection: "row", 
                justifyContent: "space-between",
                width: "100%"
              }}
            >
            <Typography
                variant="h4"
                noWrap
                ml={3}
                href="/portfolio/home"
                sx={{
                    flexGrow: 1,
                    letterSpacing: '.3rem',
                    cursor: "pointer",
                }}
            >
                Olivia Wilcox
            </Typography>

            <Box mr={2}>
                <MenuIcon onClick={(e) => handleOpenNavMenu(e)}/>
            </Box>
      
                <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
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

            </Stack>

            {/* Large Screen */}
            <Stack 
              sx={{
                display: { xs: 'none', md: 'flex' }, 
                flexDirection: "row", 
                justifyContent: "space-between",
                width: "100%"
              }}
            >
            <Typography
                variant="h3"
                href="/portfolio/about"
                sx={{
                    display: { xs: 'none', md: 'flex' },
                    letterSpacing: '.3rem',
                    cursor: "pointer",
                    justifyContent: 'center',
                    alignItems: 'center',
                    ml:4,
                    fontWeight: 300
                }}
                >
                    Olivia Wilcox 
                </Typography>

                <Box mr={3}>
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
            </Stack>
          </Toolbar>
        </AppBar>
    </HideOnScroll>
  );
}
export default Header;
