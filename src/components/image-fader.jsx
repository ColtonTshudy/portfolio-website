import { useState, useEffect } from 'react';
import './image-fader.css';

const ImageFader = ({ images = [], duration = 3000, className = '', style = {} }) => {
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
    
            // Wait for transition duration before updating index and setting fade back to true
            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % images.length);
                setFade(true);
                // console.log(index)
            }, 1000); // Transition duration
        }, duration);
    
        return () => clearInterval(interval);
    }, [duration, images]);

    return (
        <div className={`image-fader ${className}`} style={style}>
            <img
                src={images[index]}
                alt={`Image ${index}`}
                className={`fade ${fade ? 'in' : 'out'}`}
            />
            <img
                src={images[index]}
                alt={`Image ${index}`}
                className={`fade ${fade ? 'in' : 'out'}`}
            />
        </div>
    );
};

export default ImageFader;