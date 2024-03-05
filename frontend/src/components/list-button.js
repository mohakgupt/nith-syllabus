import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { Fab } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ListButton(props){
    // console.log(props.keys)
    return(

        <Link to="/todolist">
            <Fab
                color="primary"
                aria-label="todo-list"
                sx={{ position: 'fixed', right: '2em', bottom: '2em' }}
            >
                <FormatListBulletedIcon />
            </Fab>
        </Link>
    )
}