import { Box, Typography } from '@mui/material';
import LinkedInIcon from '../assets/linkedin-svgrepo-com.svg'

const Contact = () => {
    return (
        <>
            <Box sx={{ width: 1, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center', alignItems: 'center' }}>
                <Typography>
                    Contact me
                </Typography>
                <Box sx={{ m: 1, height: { xs: 2, md: 20 }, width: { xs: '50%', md: 2 }, bgcolor: 'grey.500' }} />
                <Typography sx={{ color: 'grey.400' }}>
                    <a href="mailto:coltondtshudy@gmail.com">coltondtshudy@gmail.com</a>
                </Typography>
                <Box sx={{ m: 1, height: { xs: 2, md: 20 }, width: { xs: '30%', md: 2 }, bgcolor: 'grey.500' }} />
                <Box style={{ height: '50px', width: '50px' }}>
                    <a style={{ height: '100%', width: "100%" }} href="https://www.linkedin.com/in/colton-tshudy-2570421b7/">
                        <img className="hover-highlight" style={{ height: '100%' }} src={LinkedInIcon} alt="LinkedIn" />
                    </a>
                </Box>

            </Box>
        </>
    );
};

export default Contact;