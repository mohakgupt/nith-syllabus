import HomeIcon from '@mui/icons-material/Home';
import { Fab, Zoom } from '@mui/material';
import { Link } from 'react-router-dom';

export default function HomeButton(){
    return(
        <Link to="/">
            <Zoom in={true} timeout={150} unmountOnExit>
            <Fab
                color="primary"
                aria-label="todo-list"
                sx={{ position: 'fixed', right: '2em', bottom: '2em' }}
            >
                <HomeIcon />
            </Fab>
            </Zoom>
        </Link>
    )
}