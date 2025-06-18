import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/material';


export default function SearchBox(props) {

  return (
    <Box sx={{ width: '100%', mt: 4 }}>
      <Paper
        component="form"
        sx={{ m: '0 auto', p: '2px 4px', display: 'flex', alignItems: 'center', minWidth: 300, width: '50%', borderRadius: 10, pl: 2, pr: 2, zIndex: 4 }}
        onSubmit={(e) => { e.preventDefault() }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search subject or code..."
          inputProps={{ 'aria-label': 'search subject or code...' }}
          onChange={props.f}
          value={props.query}
        />
        <IconButton type="button" sx={{ p: '10px', color: 'var(--mui-pallete-primary-light)' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper></Box>
  )
}