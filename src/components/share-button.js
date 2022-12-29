import ShareIcon from '@mui/icons-material/Share';
import { useState } from 'react';
import { DialogContentText, Fab, Zoom } from '@mui/material';
import {Button, TextField} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function ShareButton(props){
    const [name, setName] = useState("Shared Todo List");
    const [open, setOpen] = useState(false);
    const handleClose=()=>{
        setOpen(false);
    }
    return(Object.keys(props.keys).length?
    <>
    <Zoom in={true} timeout={100} unmountOnExit>
            <Fab
                color="primary"
                aria-label="todo-list"
                sx={{ position: 'fixed', right: '2em', bottom: '2em' }}
                onClick={()=>{setOpen(true)}}
            >
                <ShareIcon />
            </Fab></Zoom>
            <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Name your list"}
            </DialogTitle>
            <DialogContent>
                <TextField value={name} onChange={(e)=>{setName(e.target.value)}} sx={{mt:1}} id="outlined-basic" label="Enter a name" variant="outlined" />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button 
                onClick={(event)=>{
                        if(navigator.canShare){
                            navigator.share({
                                title: "Study with me! Check out my list: ",
                                url: `https://nithsyllabus.netlify.app/list/${name}/${JSON.stringify(props.keys).replaceAll("[", "b").replaceAll("]", "c").replaceAll('"', "q").replaceAll(",", "e").replaceAll("ceq", "i")}`
                            })
                        }else{
                            <Dialog><DialogContent><DialogContentText>{"Your browser does not support sharing"}</DialogContentText></DialogContent></Dialog>
                        }
                        handleClose();
                    }}
                 autoFocus>
                Share
              </Button>
            </DialogActions>
          </Dialog>
          </>
            :""
    )
}