import React, { useRef } from 'react';
import { AppBar, Tabs, Tab, Box, Toolbar, CssBaseline, styled } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import About from './about.jsx';
import Projects from './projects.jsx';
import Contact from './contact.jsx';
import { Widgets } from '@mui/icons-material';

const Margins = styled(Box)({

});

const Root = () => {
  const navigate = useNavigate();
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <Box>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar variant='dense' sx={{ bgcolor: 'black' }}>
          <Tab
            label="About" onClick={() => { handleScroll(aboutRef); navigate('/#about'); }}
            sx={{ opacity: 1, ':hover': { bgcolor: 'secondary.main', color: 'primary.dark' } }}
          />
          <Tab
            label="Projects" onClick={() => { handleScroll(projectsRef); navigate('/#projects'); }}
            sx={{ opacity: 1, ':hover': { bgcolor: 'secondary.main', color: 'primary.main' } }}
          />
          <Tab
            label="Contact" onClick={() => { handleScroll(contactRef); navigate('/#contact'); }}
            sx={{ opacity: 1, ':hover': { bgcolor: 'secondary.main', color: 'primary.main' } }}
          />
        </Toolbar>
      </AppBar >
      <Box sx={{m:'auto', maxWidth: '1400px'}}>
        <Box ref={aboutRef} id="about" sx={{}}>
          <About />
        </Box>
        <Box ref={projectsRef} id="projects" sx={{ p: 3, bgcolor: "primary.main" }}>
          <Projects />
        </Box>
        <Box ref={contactRef} id="contact" sx={{ py: 3, bgcolor: 'black' }}>
          <Contact />
        </Box>
      </Box>
    </Box>
  );
};

export default Root;