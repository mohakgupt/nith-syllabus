import {Typography} from '@mui/material';

export default function Header(){
    return(
        <Typography variant='h4' sx={{textAlign: 'center', background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(71,77,199,1) 42%, rgba(0,212,255,1) 100%);", backgroundClip: "text", color: "transparent"  }} gutterBottom>
            NITH SYLLABUS
        </Typography>
    )
}