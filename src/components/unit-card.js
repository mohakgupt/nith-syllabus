import * as React from 'react';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { IconButton, Box, Snackbar, Tooltip, List, Divider } from '@mui/material';
import { useState } from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Fade from '@mui/material/Fade';
import BookIcon from '@mui/icons-material/Book';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function UnitCard(props) {
  const { subjectCode, num, title, topics, inList } = props;
  const [c, setC] = useState("");
  const [state, setState] = React.useState({
    open: false,
    Transition: Fade,
  });
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setState({
      open: true,
      Transition: Fade,
    });
  };
  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };
  setTimeout(() => {
    // const brick = (num && num !== 20) ? topics.split(", ").map((w) => { return (w[0].toUpperCase() + w.slice(1)) }).join(" • ").split(". ").join(" • ").split(" • ") : topics.split("_");
    setC(title &&
      // <Accordion defaultExpanded={num === 20} className="push-container unitCard" sx={{
      //   width: '100%', margin: 0.25, mb: 1, position: 'relative', borderRadius: 1, boxShadow: '0 1px 3px rgba(0,0,0,0.2)', transition: 'all 0.2s', '&:hover #unit-tag': { backgroundColor: 'var(--mui-pallete-secondary-main)', borderRadius: '20%' }, '&:before': {
      //     display: 'none',
      //   }
      // }}>
      <Box className="push-container unitCard" sx={{ width: '100%', position: 'relative', transition: 'transform 0.2s', '&:hover #unit-tag': { borderRadius: 1 } }}>
        {/* <CardContent sx={{}}> */}
        {/* <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}> */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography component={"span"} id='unit-tag' sx={{ fontFamily: '"PT Serif", serif', flexShrink: 0, flexGrow: 0, textAlign: 'center', height: '1lh', width: '1lh', fontSize: 24, fontWeight: 'bold', backgroundColor: '#640f12', color: 'white', borderRadius: '100%', display: "inline-block", ml: 1, my: 'auto', transition: 'background-color 0.2s, border-radius 0.2s ease-out' }} color="text.secondary">
            {(num && num !== 20) ? `${num}` : <BookIcon sx={{ mt: '5px' }} />}
          </Typography>

          <Typography component={"span"} sx={{ flexGrow: 1, ml: 2, my: 'auto', fontWeight: 'bold', fontSize: 'large' }}  >
            {title}
          </Typography>

          {/* <AccordionActions> */}
          {props.addKey !== undefined ? <Tooltip title={`${inList ? 'Remove from To-Do' : 'Add to To-Do'}`}> <IconButton aria-label="add" onClick={inList ? () => { props.removeKey(subjectCode.toLowerCase(), num) } : () => { props.addKey(subjectCode.toLowerCase(), num) }} sx={{}}>
            {inList ? <RemoveIcon color='disabled' fontSize='small' /> : <AddIcon color='disabled' fontSize='small' />}
          </IconButton></Tooltip> : ""}

          <Tooltip title='Copy this Unit'>
            <IconButton aria-label='copy' onClick={() => { handleCopy(title + '\n' + topics.join('\n')) }} sx={{}}>
              <ContentCopyIcon color='disabled' fontSize='small' />
            </IconButton>
          </Tooltip>
        </Box>
        {/* </AccordionActions>
        </AccordionSummary>
        <AccordionDetails> */}
        {/* <Divider sx={{ mb: 2, mt: 2 }} /> */}
        {/* <div variant="body2" style={{ fontSize: 16, color: '#616161' }}> */}
        <List sx={{ p: 0 }}>
          {topics.map((t) => {
            // const labelId = `checkbox-list-label-${t}`;
            return (
              // <Chip label={t} variant="outlined" onClick={() => { handleCopy(t) }} sx={{
              //   margin: 1, fontFamily: '"PT Serif", serif', fontSize: 'medium', height: 'auto',
              //   '& .MuiChip-label': {
              //     display: 'block',
              //     whiteSpace: 'normal',
              //   },
              // }} />
              <ListItem
                key={t}
                // secondaryAction={
                //   // <IconButton edge="end" aria-label="checkbox">
                //   //   <CheckBox />
                //   // </IconButton>
                //   <Checkbox
                //     edge="start"
                //     checked={checked.includes(value)}
                //     tabIndex={-1}
                //     disableRipple
                //     inputProps={{ 'aria-labelledby': labelId }}
                //   />
                //   <ListItemIcon>
                //     <IconButton edge="end" aria-label="copy" onClick={() => { handleCopy(t) }}>
                //       <ContentCopyIcon color='disabled' fontSize='small' />
                //     </IconButton>
                //   </ListItemIcon>
                // }
                disablePadding
              >
                <ListItemButton role={undefined} onClick={() => { handleCopy(t) }} dense sx={{ borderRadius: 2 }}>
                  <ListItemText primary={'●'} sx={{ flexGrow: 0, mr: 2 }} />
                  <ListItemText primary={t} sx={{ fontFamily: '"PT Serif", serif' }} />
                </ListItemButton>
              </ListItem>
            )
          })}
        </List>
        {/* </div> */}
        {/* </AccordionDetails> */}
        {/* </CardContent> */}
        {props.divider && <Divider sx={{ m: 2 }} />}
      </Box >)
    // {/* </Accordion>) */ }
  }, props.t);

  return (<>{c}<Snackbar
    open={state.open}
    onClose={handleClose}
    slots={{ transition: state.Transition }}
    message="Copied"
    key={state.Transition.name}
    autoHideDuration={1200}
    sx={{ bottom: { xs: 90, sm: 20 } }}
  /></>);
}