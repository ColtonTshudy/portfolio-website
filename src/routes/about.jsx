import React from 'react';
import { Box, Paper, Typography, styled, Divider } from '@mui/material';
import { RotatingText } from 'react-simple-rotating-text'
import SimpleImageSlider from "react-simple-image-slider";

import ProfilePic from '../assets/20210925_150602.jpg'

import pic1 from '../assets/slide/20190106_211408.jpg'
import pic2 from '../assets/slide/20211107_120549.jpg'
import pic3 from '../assets/slide/20230529_161115.jpg'
import pic4 from '../assets/slide/20230617_155141.jpg'
import pic5 from '../assets/slide/20240401_050513.jpg'
import pic6 from '../assets/slide/altium pdu rev1.png'
import pic7 from '../assets/slide/Capture.jpg'
import pic8 from '../assets/slide/Incandescent Watch.jpg'
import pic9 from '../assets/slide/Screenshot 2024-05-29 142515.png'

const slideImages = [
    { url: pic1 },
    { url: pic2 },
    { url: pic3 },
    { url: pic4 },
    { url: pic5 },
    { url: pic6 },
    { url: pic7 },
    { url: pic8 },
    { url: pic9 },
];

const CircleImage = styled('div')({
    width: 400,
    aspectRatio: 1,
    borderRadius: '50%',
    overflow: 'hidden',
    position: 'relative',
    marginRight: (theme) => theme.spacing(2),
    boxShadow: '10px 5px 20px black',
    // border: 'solid 20px black',
});

const Image = styled('img')({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
});

function AboutPage() {
    return (
        <>
            <div className='crt'></div>
            <SimpleImageSlider
                width='100%'
                height='400px'
                images={slideImages}
                showBullets={false}
                showNavs={false}
                autoPlay={true}
                slideDuration={2}
                style={{
                    position: 'absolute',
                    zIndex: '-10'
                }}
            />
            <Box sx={{
                p: 3, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: { xs: 'column', lg: 'row' },
            }}>
                <CircleImage>
                    <Image src={ProfilePic} alt="Profile picture" />
                </CircleImage>
                <Paper elevation={5} sx={{ zIndex: 0, p: 3, textAlign: 'left', m: 5, maxWidth: { xs: '90vw', lg: '40vw' } }}>
                    <Typography variant="h2" component="h1" gutterBottom>
                        Colton Tshudy
                    </Typography>
                    <Box sx={{ color: 'white', fontSize: '1.5em', px: 1.5, py: 0.5, bgcolor: 'primary.main', borderRadius: 2, boxShadow:'inset 2px 2px 15px black' }}>
                        <RotatingText className="rotating-text" texts={['Electrical Engineer', 'Tinkerer', 'Maker', 'EV Enthusiast', 'E-Moped Connoisseur']} />
                    </Box>
                    <Typography variant="body1" sx={{ marginTop: 3 }}>
                        Hello! I am 22 and recently graduated from Virignia Tech; my personal interests span from PCB design and layout to machining and welding. I have experience with all parts of the development process, including high level system architecture, embedded system hardware and firmware, front and backend communication interfaces, and sizing motors and batteries for electric powertrains.
                    </Typography>
                </Paper>
                <Divider />
            </Box>
        </>
    );
}

export default AboutPage;