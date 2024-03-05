import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';


export default function SearchBox(props) {

  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300, margin: '1em auto', borderRadius: 10, pl: 2, pr:2, position: "fixed", zIndex: 4, left: "50%", transform: "translateX(-50%)", top: 50 }}
      onSubmit={(e)=>{e.preventDefault()}}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search subject or code..."
        inputProps={{ 'aria-label': 'search subject or code...' }}
        onChange={props.f}
        value={props.query}
        autoFocus
      />
      <IconButton type="button" sx={{ p: '10px', color: '#2979ff' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}