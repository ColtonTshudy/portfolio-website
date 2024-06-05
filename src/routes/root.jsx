import React, { useRef } from 'react';
import { AppBar, Tabs, Tab, Box, Toolbar, CssBaseline } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import About from './about.jsx';
import Projects from './projects.jsx';
import Contact from './contact.jsx';
import { Widgets } from '@mui/icons-material';

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
    <>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar variant='dense' >
          <Tab
            label="About" onClick={() => { handleScroll(aboutRef); navigate('/#about'); }}
            sx={{ ':hover': { bgcolor: 'secondary.main' } }}
          />
          <Tab
            label="Projects" onClick={() => { handleScroll(projectsRef); navigate('/#projects'); }}
            sx={{ ':hover': { bgcolor: 'secondary.main' } }}
          />
          <Tab
            label="Contact" onClick={() => { handleScroll(contactRef); navigate('/#contact'); }}
            sx={{ ':hover': { bgcolor: 'secondary.main' } }}
          />
        </Toolbar>
      </AppBar >
      <Box ref={aboutRef} id="about" sx={{ }}>
        <About />
      </Box>
      <Box ref={projectsRef} id="projects" sx={{ p: 3, bgcolor: "white" }}>
        <Projects />
      </Box>
      <Box ref={contactRef} id="contact" sx={{ p: 3, bgcolor: 'grey.200' }}>
        <Contact />
      </Box>
    </>
  );
};

export default Root;