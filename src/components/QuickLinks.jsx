import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';
import EventIcon from '@mui/icons-material/Event';
import MenuBookIcon from '@mui/icons-material/MenuBook';

// Task-oriented entry points, sitting directly under the hero. The home page is
// otherwise five full-height prose sections with nothing to click, so a visitor
// looking for "how do I join" or "how do I run a tournament" had nowhere to go.
const LINKS = [
    {
        title: 'Improve as a Debater',
        description: 'Workshop recordings and motion debriefs from our coaches.',
        to: '/videos',
        icon: SchoolIcon
    },
    {
        title: 'How We Select Teams',
        description: 'The National Pool, trials, and the development squad.',
        to: '/information',
        icon: GroupsIcon
    },
    {
        title: 'Organise a Tournament',
        description: 'Endorsement, invitations, motions, and tabulation.',
        to: '/tournament-essentials',
        icon: EventIcon
    },
    {
        title: 'Guide to WSDC',
        description: 'The format Sri Lankan school debating is built on.',
        to: '/guide-to-wsdc',
        icon: MenuBookIcon
    }
];

const QuickLinks = () => (
    <Box sx={{
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        py: { xs: 6, md: 9 },
        px: { xs: 3, md: 6 }
    }}>
        <Box sx={{ maxWidth: '1300px', mx: 'auto' }}>
            <Typography sx={{
                fontFamily: 'Montserrat',
                fontSize: '0.85rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: '#888',
                textAlign: 'center',
                mb: { xs: 4, md: 5 }
            }}>
                Where do you want to start?
            </Typography>

            <Box sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' },
                gap: { xs: 2.5, md: 3 }
            }}>
                {LINKS.map(({ title, description, to, icon: Icon }) => (
                    <Box
                        key={to}
                        component={RouterLink}
                        to={to}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            p: { xs: 2.5, md: 3 },
                            background: '#1a1a1a',
                            border: '1px solid #333',
                            borderRadius: '12px',
                            textDecoration: 'none',
                            transition: 'all 0.2s',
                            '&:hover': {
                                background: '#222',
                                borderColor: '#8B0000',
                                transform: 'translateY(-4px)',
                                boxShadow: '0 8px 24px rgba(0,0,0,0.4)'
                            },
                            '&:hover .quick-arrow': { color: '#ff4d4d' }
                        }}
                    >
                        <Icon sx={{ fontSize: '2rem', color: '#8B0000', mb: 1.5 }} />
                        <Typography sx={{
                            fontFamily: 'Montserrat',
                            fontSize: '1.05rem',
                            fontWeight: 700,
                            color: '#fff',
                            mb: 1,
                            lineHeight: 1.3
                        }}>
                            {title}
                        </Typography>
                        <Typography sx={{
                            fontFamily: 'Montserrat',
                            fontSize: '0.9rem',
                            color: '#aaa',
                            lineHeight: 1.6,
                            mb: 2
                        }}>
                            {description}
                        </Typography>
                        <Typography
                            className="quick-arrow"
                            sx={{
                                fontFamily: 'Montserrat',
                                fontSize: '0.8rem',
                                fontWeight: 700,
                                color: '#8B0000',
                                mt: 'auto',
                                transition: 'color 0.2s'
                            }}
                        >
                            LEARN MORE →
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    </Box>
);

export default QuickLinks;
