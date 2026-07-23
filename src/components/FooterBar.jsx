import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

function FooterBar() {
    const currentYear = new Date().getFullYear();
    const [isHighlighted, setIsHighlighted] = useState(false);

    useEffect(() => {
        const handleHighlight = () => {
            // Start highlight shortly after scroll starts
            setTimeout(() => {
                setIsHighlighted(true);
                // Remove highlight after 3 seconds
                setTimeout(() => setIsHighlighted(false), 3000);
            }, 800);
        };
        window.addEventListener('highlight-socials', handleHighlight);
        return () => window.removeEventListener('highlight-socials', handleHighlight);
    }, []);

    const iconStyle = {
        fontSize: '24px',
        color: isHighlighted ? '#ff4d4d' : '#ffffff',
        opacity: isHighlighted ? 1 : 0.4,
        transform: isHighlighted ? 'scale(1.2)' : 'scale(1)',
        filter: isHighlighted ? 'drop-shadow(0 0 8px rgba(255, 77, 77, 0.6))' : 'none',
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        cursor: 'pointer',
        '&:hover': {
            opacity: 1,
            color: '#ff4d4d',
            transform: 'scale(1.1)',
        }
    };

    return (
        <Box
            component="footer"
            sx={{
                color: '#FFFFFF4D',
                fontWeight: 'bold',
                fontSize: 17,
                letterSpacing: '1.1px',
                backgroundColor: '#242424',
                position: 'relative',
                zIndex: 1,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: { xs: '30px 20px', md: '20px 40px' },
                    gap: { xs: 3, md: '20px' },
                    maxWidth: '1400px',
                    margin: '0 auto',
                    width: '100%'
                }}
            >
                {/* Left: Social Icons */}
                <Box id="social-footer" sx={{ display: 'flex', alignItems: 'center', gap: 3, flexDirection: { xs: 'column', sm: 'row' } }}>
                    <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                        <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" sx={{ display: 'flex' }}>
                            <Box component={FaFacebookF} sx={iconStyle} />
                        </Link>
                        <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" sx={{ display: 'flex' }}>
                            <Box component={FaInstagram} sx={iconStyle} />
                        </Link>
                        <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" sx={{ display: 'flex' }}>
                            <Box component={FaTwitter} sx={iconStyle} />
                        </Link>
                        <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" sx={{ display: 'flex' }}>
                            <Box component={FaLinkedinIn} sx={iconStyle} />
                        </Link>
                        <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" sx={{ display: 'flex' }}>
                            <Box component={FaYoutube} sx={iconStyle} />
                        </Link>
                    </Box>
                </Box>

                {/* Right: Contact Info */}
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: 2, sm: 4 }, alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <FaPhoneAlt size={18} color="#fff" />
                        <Typography sx={{ color: '#fff', fontSize: '1rem', fontWeight: 600 }}>+94 76 278 2768</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <FaEnvelope size={18} color="#fff" />
                        <Link href="mailto:debaterscouncil@gmail.com" sx={{ color: '#5ba4fc', fontSize: '1rem', fontWeight: 600, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>debaterscouncil@gmail.com</Link>
                    </Box>
                </Box>
            </Box>

            {/* Bottom Bar: Copyright */}
            <Box sx={{ padding: '0 20px 20px 20px' }}>
                <Typography sx={{ margin: 0, textAlign: 'center', fontSize: '0.9rem', color: '#FFFFFF4D' }}>
                    &copy; {currentYear}. THE DEBATERS' COUNCIL
                </Typography>
            </Box>
        </Box>
    );
}

export default FooterBar;