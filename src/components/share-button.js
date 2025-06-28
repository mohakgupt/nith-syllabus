import ShareIcon from '@mui/icons-material/Share';
import { useState } from 'react';
import { Fab, Zoom } from '@mui/material';
import { Button, TextField } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function ShareButton(props) {
  const [name, setName] = useState("My Todo List");
  const [curator, setCurator] = useState("");
  const [description, setDescription] = useState("");
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const handleClose = () => {
    setOpen(false);
  }
  const share = async () => {
    setDisabled(true);
    const encodedParams = new URLSearchParams();
    // const url = `https://nithsyllabus.netlify.app/list/${name.replaceAll(" ", "*!")}/${JSON.stringify(props.keys).replaceAll("[", "b").replaceAll("]", "c").replaceAll('"', "q").replaceAll(",", "e").replaceAll("ceq", "i")}`
    const url = new URL("https://nithsyllabus.netlify.app/list");
    url.searchParams.append("keys", JSON.stringify(props.keys).replaceAll("[", "ab").replaceAll("]", "cd").replaceAll('"', "ef").replaceAll(",", "gh").replaceAll("ceq", "ij"))
    if (name) {
      url.searchParams.append("name", name);
    }
    if (curator) {
      url.searchParams.append("curator", curator);
    }
    if (description) {
      url.searchParams.append("description", description);
    }

    encodedParams.append("url", url);
    if (url.length < 69) {
      navigator.share({
        title: "Study with me! Check out my list: ",
        url: url
      })
      handleClose();
      setDisabled(false);
    } else {
      const options = {
        method: 'POST',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': '238238dcc3msh5b5a3ffc161fa09p10a53ajsn094e9d7989e7',
          'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
        },
        body: encodedParams
      };

      // document.getElementById("share").innerText="wait";
      fetch('https://url-shortener-service.p.rapidapi.com/shorten', options)
        .then(response => response.json())
        .then(response => {
          navigator.share({
            title: "Study with me! Check out my list: ",
            url: response.result_url
          })
          handleClose();
          setDisabled(false);
        })
        .catch(err => {
          navigator.share({
            title: "Study with me! Check out my list: ",
            url: url
          })
          handleClose();
          setDisabled(false);
        });
    }
  }
  return (Object.keys(props.keys).length ?
    <>
      {/* <Zoom in={true} timeout={100} unmountOnExit> */}
      <Fab
        color="primary"
        aria-label="todo-list"
        sx={{ position: 'fixed', right: '2em', bottom: '2em' }}
        onClick={() => { setOpen(true) }}
        className='push-container'
      >
        <ShareIcon />
      </Fab>
      {/* </Zoom> */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Share"}
        </DialogTitle>
        <DialogContent>
          <TextField fullWidth value={name} onChange={(e) => { setName(e.target.value) }} sx={{ my: 1 }} id="outlined-basic" label="Title" variant="outlined" required />
          <TextField fullWidth value={curator} onChange={(e) => { setCurator(e.target.value) }} sx={{ my: 1 }} id="outlined-basic" label="Curator Name" variant="outlined" />
          <TextField multiline fullWidth rows={4} value={description} onChange={(e) => { setDescription(e.target.value) }} sx={{ my: 1 }} id="outlined-basic" label="Description" variant="outlined" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            id="share"
            variant='contained'
            onClick={share}
            disabled={disabled}
            autoFocus>
            Share
          </Button>
        </DialogActions>
      </Dialog>
    </>
    : ""
  )
}