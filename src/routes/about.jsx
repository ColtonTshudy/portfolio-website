import React, { useRef, useEffect, useState } from 'react';
import { Box, Paper, Typography, styled, Divider } from '@mui/material';
import { RotatingText } from 'react-simple-rotating-text'
import SimpleImageSlider from "react-simple-image-slider";
const images = import.meta.glob("../assets/slide/*")

import ProfilePic from '../assets/portraits/20210925_150602.jpg'

const titles = [
    'Electrical Engineer',
    'Tinkerer',
    // 'Maker',
    'EV Enthusiast',
    // 'E-Moped Connoisseur',
]

const CircleImage = styled('div')({
    width: '300px',
    aspectRatio: 1,
    borderRadius: '50%',
    overflow: 'hidden',
    position: 'relative',
    marginRight: (theme) => theme.spacing(2),
    boxShadow: '10px 5px 15px black',
    // border: 'solid 20px black',
});

const Image = styled('img')({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
});

function AboutPage() {
    const elementRef = useRef(null)
    const [height, setHeight] = useState(0)
    const [slideImages, setSlideImages] = useState({})

    useEffect(() => {
        loadImages(images).then((imageUrls) => {
            setSlideImages(imageUrls);
        });

        // Reset the height of slideshow on resize based on height of relevent content
        const handleResize = () => {
            if (elementRef.current) {
                setHeight(elementRef.current.clientHeight)
            }
        }
        window.addEventListener('resize', handleResize);
        handleResize()

        // Destroy listener on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

    return (
        <>
            <div
                className='crt-overlay1'
                style={{
                    width: '100%',
                    height: `${height}px`,
                }}
            />
            <SimpleImageSlider
                calssName="img-slider"
                width='100%'
                height='100%'
                images={slideImages}
                showBullets={false}
                showNavs={false}
                autoPlay={true}
                slideDuration={2}
                style={{
                    position: 'absolute',
                    zIndex: '-10',
                    backgroundColor: 'white'
                }}
            />
            <Box
                sx={{
                    p: 3, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: { xs: 'column', md: 'row' },
                }}
                ref={elementRef}
            >
                <CircleImage>
                    <Image src={ProfilePic} alt="Profile picture" />
                </CircleImage>
                <Paper
                    elevation={5}
                    sx={{
                        bgcolor: 'rgba(255,255,255,0.4)',
                        color: 'white',
                        backdropFilter: 'blur(25px)',
                        zIndex: 0,
                        p: 3,
                        textAlign: 'left',
                        m: 5,
                        maxWidth: { xs: '90vw', md: '50vw' }
                    }}
                >
                    <Typography variant="h2" component="h1" gutterBottom>
                        Colton Tshudy
                    </Typography>
                    <Box sx={{ overflow: 'hidden', color: 'white', fontSize: '1.5em', px: 1.5, py: 0.5, bgcolor: 'primary.light', borderRadius: 2, boxShadow: 'inset 2px 2px 15px black' }}>
                        <RotatingText className="rotating-text" texts={titles} />
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

async function loadImages(images) {
    // Create an array to hold the imported images
    const importedImages = [];

    // Loop through each entry in the images object
    for (const path in images) {
        // Dynamically import the image
        const image = await images[path]();
        // Push the imported image's default export (the URL) into the array
        importedImages.push(image.default);
    }

    return importedImages;
}