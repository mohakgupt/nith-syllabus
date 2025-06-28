import { Typography } from '@mui/material';
import { Box, Tabs, Tab } from '@mui/material';
import { useState, useEffect } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ChecklistIcon from '@mui/icons-material/Checklist';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

function LinkTab(props) {
    return (
        <Tab
            component={Link}
            sx={{ color: "#fff" }}
            aria-current={props.selected && 'page'}
            {...props}
        />
    );
}
LinkTab.propTypes = {
    selected: PropTypes.bool,
};

export default function Header() {
    const [value, setValue] = useState(0);
    const location = useLocation();
    useEffect(() => {
        let pathVal = location.pathname === "/todolist" ? 1 : 0;
        setValue(pathVal)
    }, [location.pathname])
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ position: 'sticky', top: { xs: -82, sm: 0 }, zIndex: 1, pt: 4, display: 'flex', backgroundColor: 'var(--mui-pallete-primary-main)', alignItems: 'center', flexDirection: { xs: 'column', sm: 'row' } }}>
            <Box sx={{ marginLeft: { xs: 0, sm: '10%' }, display: 'flex', alignItems: 'center' }}>
                <img src='../nith-logo.png' height={'50px'} alt='NIT Hamirpur logo' style={{ display: 'inline-block', marginRight: '20px', float: 'left' }} />
                <Typography variant='h4' sx={{ fontFamily: '"Rubik Dirt", system-ui', color: '#ffffff' }}>
                    SYLLABUS
                </Typography>
            </Box>
            <Tabs value={value} onChange={handleChange} aria-label="navigation" sx={{ ml: 'auto', mr: { xs: 'auto', sm: '10%' } }} role="navigation">
                <LinkTab label="Home" icon={<HomeIcon />} to="/" />
                <LinkTab label="ToDo" icon={<ChecklistIcon />} to="/todolist" />
            </Tabs>
        </Box>
    )
}