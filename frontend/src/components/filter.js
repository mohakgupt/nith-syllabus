import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import { TextField, Typography } from '@mui/material';


const branches = [
    {
        name: "All Branches",
        code: "al"
    },
    {
        name: "Civil",
        code: "ce"
    },
    // {
    //     name: "Chemical",
    //     code: "ch"
    // },
    {
        name: "Computer Science",
        code: "cs"
    },
    {
        name: "Electrical",
        code: "ee"
    },
    {
        name: "Electronics and Communication",
        code: "ec"
    },
    // {
    //     name: "Engineering Physics",
    //     code: "ph"
    // },
    // {
    //     name: "Material Science",
    //     code: "ms"
    // },
    {
        name: "Mathematics and Computing",
        code: "ma"
    },
    // {
    //     name: "Mechanical",
    //     code: "me"
    // }
];

const years=[
    {
        name: "All Years",
        code: 'al'
    },
    {
        name: "I Year",
        code: "1"
    },
    {
        name: "II Year",
        code: "2"
    },
    {
        name: "III Year",
        code: "3"
    },
    // {
    //     name: "IV Year",
    //     code: "4"
    // },
]


export default function Filter(props) {

  const branchChange = (event) => {
    props.setBranch(event.target.value);
  };
  const yearChange = (event) => {
    props.setYear(event.target.value);
  };

  return (
    <div style={{margin: "1em auto", textAlign:'center', marginTop: 70}}>
        <Typography sx={{fontSize: 12, display: 'inline-block', mt: 0.5, mr: 1}}>Filter by:</Typography>
      {/* <FormControl sx={{ m: 1, width: 300, mt: 3 }} size="small"> */}
        <TextField 
        sx={{"& .MuiInputBase-root": {
            height: 25, fontSize: 12, width: 115, mr: 1
        }}}
        select
        size='small'
          value={props.branch}
          onChange={branchChange}
        >
          {branches.map((br) => (
            <MenuItem
              key={br.code}
              value={br.code}
              style={{fontWeight: 'regular'}}
            >
              {br.name}
            </MenuItem>
          ))}
        </TextField>
        <TextField 
        style={{padding: 0}}
        sx={{"& .MuiInputBase-root": {
            height: 25, fontSize: 12, width: 95 
        }}}
        select
        size='small'
          value={props.year}
          onChange={yearChange}
        >
          {years.map((yr) => (
            <MenuItem
              key={yr.code}
              value={yr.code}
              style={{fontWeight: 'regular'}}
            >
              {yr.name}
            </MenuItem>
          ))}
        </TextField>
      {/* </FormControl> */}
    </div>
  );
}
