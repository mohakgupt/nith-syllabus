import { Fab } from '@mui/material';
import { Link } from 'react-router-dom';
import ChecklistIcon from '@mui/icons-material/Checklist';

export default function ListButton(props) {
    // console.log(props.keys)
    return (

        <Link to="/todolist">
            <Fab
                color="var(--mui-pallete-primary-main)"
                aria-label="todo-list"
                sx={{ position: 'fixed', right: '2em', bottom: '2em', width: '10em', borderRadius: '1em', px: 2 }}
            >
                <ChecklistIcon />
                <div style={{ flexGrow: 1 }}>ToDo List</div>
            </Fab>
        </Link>
    )
}