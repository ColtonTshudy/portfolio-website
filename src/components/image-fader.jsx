import React, { useState, useEffect } from 'react';
import './image-fader.css';

import pic1 from '../assets/slide/20190106_211408.jpg'
import pic2 from '../assets/slide/20211107_120549.jpg'
import pic3 from '../assets/slide/20230529_161115.jpg'
import pic4 from '../assets/slide/20230617_155141.jpg'
import pic5 from '../assets/slide/20240401_050513.jpg'
import pic6 from '../assets/slide/altium pdu rev1.png'
import pic7 from '../assets/slide/Capture.jpg'
import pic8 from '../assets/slide/Incandescent Watch.jpg'
import pic9 from '../assets/slide/Screenshot 2024-05-29 142515.png'

const images = [
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
    pic6,
    pic7,
    pic8,
    pic9,
];

const ImageFader = ({ duration = 3000, className = '', style = {} }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            
            setFade(false);

            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
                setFade(true);
            }, 1000); // Transition duration
        }, duration);

        return () => clearInterval(interval);
    }, [duration]);

    return (
        <div className={`image-fader ${className}`} style={style}>
            <img
                src={images[currentIndex]}
                alt={`Image ${currentIndex}`}
                className={`fade ${fade ? 'in' : 'out'}`}
            />
            {/* <img
        src={images[(currentIndex + 1) % images.length]}
        alt={`Image ${(currentIndex + 1) % images.length}`}
        className={`fade ${fade ? 'next in' : 'out'}`}
      /> */}
        </div>
    );
};

export default ImageFader;