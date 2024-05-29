import React from 'react';
import { Box, Paper, Typography, styled, Divider } from '@mui/material';
import { RotatingText } from 'react-simple-rotating-text'

import ProfilePic from '../assets/20210925_150602.jpg'

const CircleImage = styled('div')({
    width: 400,
    aspectRatio: 1,
    borderRadius: '50%',
    overflow: 'hidden',
    position: 'relative',
    marginRight: (theme) => theme.spacing(2),
    boxShadow: '10px 5px 20px black',
});

const Image = styled('img')({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
});

function AboutPage() {
    return (
        <Box sx={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: { xs: 'column', lg: 'row' },
        }}>
            <CircleImage>
                <Image src={ProfilePic} alt="Profile picture" />
            </CircleImage>
            <Paper elevation={5} sx={{ p: 3, textAlign: 'left', m: 5, maxWidth: { xs: '90vw', lg: '40vw' } }}>
                <Typography variant="h2" component="h1" gutterBottom>
                    Colton Tshudy
                </Typography>
                <Box sx={{color:'white', fontSize:'1.5em', px: 1.5, py:0.5, bgcolor:'black', borderRadius:2}}>
                    <RotatingText className="rotating-text" texts={['Electrical Engineer', 'Tinkerer', 'Maker', 'EV Enthusiast']} />
                </Box>
                <Typography variant="body1" sx={{ marginTop: 3 }}>
                    Hello! I am 22 and recently graduated from Virignia Tech; my personal interests span from PCB design and layout to machining and welding. I have experience with all parts of the development process, including high level system architecture, embedded system hardware and firmware, front and backend communication interfaces, and sizing motors and batteries for electric powertrains.
                </Typography>
            </Paper>
            <Divider />
        </Box>
    );
}

export default AboutPage;