import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Fab, Zoom } from '@mui/material';
import { Link } from 'react-router-dom';

export default function BackButton(){
    return(
        <Link to="/">
            <Zoom in={true} timeout={150} unmountOnExit>
            <Fab
                color="primary"
                aria-label="todo-list"
                sx={{ position: 'fixed', right: '2em', bottom: '2em' }}
            >
                <ArrowBackIcon />
            </Fab>
            </Zoom>
        </Link>
    )
}