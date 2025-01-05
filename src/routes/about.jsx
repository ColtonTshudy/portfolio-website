import { useRef, useEffect, useState } from 'react';
import { Box, Paper, Typography, Divider } from '@mui/material';
import { RotatingText } from 'react-simple-rotating-text'
// import SimpleImageSlider from "react-simple-image-slider";
import ImageFader from '../components/image-fader';
const ImageImports = import.meta.glob("../assets/slide/*")

import ProfilePic from '../assets/portraits/20210925_150602.jpg'

const titles = [
    'Electrical Engineer',
    'Tinkerer',
    // 'Maker',
    'EV Enthusiast',
    // 'E-Moped Connoisseur',
]

function AboutPage() {
    const elementRef = useRef(null)
    const [slideImages, setSlideImages] = useState({})

    useEffect(() => {
        loadImages(ImageImports).then((images) => {
            setSlideImages(images);
        });
    }, [])

    return (
        <>
            <Box
                id="about-container"
                sx={{
                    p: 3,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: { xs: 'column', md: 'column' },
                    minHeight: '800px',
                }}
                ref={elementRef}
            >
                {/* <SimpleImageSlider
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
                        backgroundColor: 'white',
                        left: '50%',
                        top: '50%',
                        webkitTransform: 'translate(-50%, -50%)',
                        transform: 'translate(-50%, -50%)',
                    }}
                /> */}
                <ImageFader
                    className='slideshow'
                    images={slideImages}
                    duration={5000}
                />
                <Box
                    component="img"
                    sx={{
                        width: { xs: 200, md: 300 },
                        borderRadius: '50%',
                        zIndex: 0,
                    }}
                    alt="Profile Picture"
                    src={ProfilePic}
                />
                <Paper
                    elevation={5}
                    sx={{
                        bgcolor: 'rgba(255,255,255,0.4)',
                        color: 'white',
                        backdropFilter: 'blur(25px)',
                        zIndex: 0,
                        p: 2,
                        textAlign: 'left',
                        m: 5,
                        width: { xs: 1, md: 0.5 }
                    }}
                >
                    <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: '400', textAlign: { xs: 'center' } }}>
                        Colton Tshudy
                    </Typography>
                    <Box sx={{ overflow: 'hidden', color: 'white', fontSize: '1.5em', px: 1.5, py: 0.5, bgcolor: 'primary.light', borderRadius: 2, boxShadow: 'inset 2px 2px 15px black' }}>
                        <RotatingText className="rotating-text" texts={titles} duration={4} />
                    </Box>
                    <Typography variant="body1" sx={{ marginTop: 3 }}>
                        <span style={{ fontSize: "2em" }}>Hello!</span> I&rsquo;m a 22 year-old recent graduate from Virignia Tech with a BS in Electrical Engineering and a minor in Computer Science.
                    </Typography>
                    <Typography sx={{ my: 2 }}>
                        Though my personal interests span from PCB design and layout to machining and welding; I have experience with all parts of the development process, including high level system architecture, embedded system hardware and firmware, front and backend web development, and designing and implementing electric powertrains.
                    </Typography>
                    <Typography sx={{ textAlign: 'center' }}>
                        Check out my projects below!
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