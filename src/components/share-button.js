import ShareIcon from '@mui/icons-material/Share';
import { Fab, Zoom } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ShareButton(props){
    return(Object.keys(props.keys).length?
    <Zoom in={true} timeout={100} unmountOnExit>
            <Fab
                color="primary"
                aria-label="todo-list"
                sx={{ position: 'fixed', right: '2em', bottom: '7em' }}
                onClick={(event)=>{
                    if(navigator.canShare){
                        navigator.share({
                            title: "syllabus.nith",
                            text: "Study with me! Check out my list: ",
                            url: `https://localhost:3000/todolist/${JSON.stringify(props.keys)}`
                        })
                    }else{
                        alert("Your browser does not support sharing")
                    }
                }}
            >
                <ShareIcon />
            </Fab></Zoom>:""
    )
}