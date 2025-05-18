import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { IconButton, Box, Snackbar, Tooltip, Accordion, AccordionSummary, AccordionDetails, AccordionActions } from '@mui/material';
import { Divider } from '@mui/material';
import { useState } from 'react';
import Chip from '@mui/material/Chip';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Fade from '@mui/material/Fade';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BookIcon from '@mui/icons-material/Book';

export default function UnitCard(props) {
  const { s, num, title, topics, inList } = props;
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
    const brick = (num && num !== 20) ? topics.split(", ").map((w) => { return (w[0].toUpperCase() + w.slice(1)) }).join(" • ").split(". ").join(" • ").split(" • ") : topics.split("_");
    setC(title &&
      // <Accordion defaultExpanded={num === 20} className="push-container unitCard" sx={{
      //   width: '100%', margin: 0.25, mb: 1, position: 'relative', borderRadius: 1, boxShadow: '0 1px 3px rgba(0,0,0,0.2)', transition: 'all 0.2s', '&:hover #unit-tag': { backgroundColor: 'var(--mui-pallete-secondary-main)', borderRadius: '20%' }, '&:before': {
      //     display: 'none',
      //   }
      // }}>
      <Card className="push-container unitCard" sx={{ width: '100%', margin: 0.25, mb: 1, position: 'relative', borderRadius: 4, boxShadow: '0 1px 3px rgba(0,0,0,0.2)', transition: 'transform 0.2s', '&:hover #unit-tag': { backgroundColor: 'var(--mui-pallete-secondary-main)', borderRadius: '20%' } }}>
        <CardContent sx={{ p: 2 }}>
          {/* <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}> */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography component={"span"} id='unit-tag' sx={{ flexShrink: 0, flexGrow: 0, textAlign: 'center', height: '1lh', width: '1lh', fontFamily: "Roboto", fontSize: 24, backgroundColor: '#640f12', color: 'white', borderRadius: '100%', display: "inline-block", ml: 1, my: 'auto', transition: 'background-color 0.2s, border-radius 0.2s' }} color="text.secondary">
              {(num && num !== 20) ? `${num}` : <BookIcon sx={{ mt: '5px' }} />}
            </Typography>

            <Typography component={"span"} sx={{ flexGrow: 1, fontFamily: "Roboto", ml: 2, my: 'auto' }}  >
              {title.toUpperCase()}
            </Typography>

            {/* <AccordionActions> */}
            {props.addKey !== undefined ? <Tooltip title={`${inList ? 'Remove from To-Do' : 'Add to To-Do'}`}> <IconButton aria-label="add" onClick={inList ? () => { props.removeKey(s, num) } : () => { props.addKey(s, num) }} sx={{}}>
              {inList ? <RemoveIcon /> : <AddIcon />}
            </IconButton></Tooltip> : ""}

            <Tooltip title='Copy this Unit'>
              <IconButton aria-label='copy' onClick={() => { handleCopy(title + '\n' + topics) }} sx={{ mr: 1 }}>
                <ContentCopyIcon />
              </IconButton>
            </Tooltip>
          </Box>
          {/* </AccordionActions>
        </AccordionSummary>
        <AccordionDetails> */}
          {/* <Divider sx={{ mb: 2, mt: 2 }} /> */}
          <div variant="body2" style={{ fontSize: 16, color: '#616161' }}>
            {brick.map((t) => {
              return (<Chip label={t} variant="outlined" onClick={() => { handleCopy(t) }} sx={{
                margin: 1, fontFamily: '"PT Serif", serif', fontSize: 'medium', height: 'auto',
                '& .MuiChip-label': {
                  display: 'block',
                  whiteSpace: 'normal',
                },
              }} />)
            })}
          </div>
          {/* </AccordionDetails> */}
        </CardContent>
      </Card >)
    {/* </Accordion>) */ }
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