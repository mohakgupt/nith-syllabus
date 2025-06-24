import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import { TextField, Typography } from '@mui/material';


const branches = [
  {
    name: "All",
    code: "al"
  },
  {
    name: "Civil",
    code: "ce"
  },
  {
    name: "Chemical",
    code: "ch"
  },
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
  {
    name: "Engineering Physics",
    code: "ph"
  },
  {
    name: "Material Science",
    code: "ms"
  },
  {
    name: "Mathematics and Computing",
    code: "ma"
  },
  {
    name: "Mechanical",
    code: "me"
  }
];

const semesters = [
  {
    name: "All",
    code: 'al'
  },
  {
    name: "1",
    code: 1
  },
  {
    name: "2",
    code: 2
  },
  // {
  //   name: "3",
  //   code: "3"
  // },
  // {
  //     name: "IV Semester",
  //     code: "4"
  // },
]

const type = [
  {
    name: 'All',
    code: 'al'
  },
  {
    name: 'Theory',
    code: 'th'
  },
  {
    name: 'Lab',
    code: 'lb'
  }
]


export default function Filter(props) {

  const branchChange = (event) => {
    props.setBranch(event.target.value);
  };
  const semesterChange = (event) => {
    props.setSemester(event.target.value);
  };
  const typeChange = (event) => {
    props.setType(event.target.value);
  }

  return (
    <div style={{ margin: "1em auto", textAlign: 'center' }}>
      {/* <Typography sx={{ fontSize: 12, display: 'inline-block', mt: 0.5, mr: 2, fontWeight: 'bold', color: 'gray' }}>Filters</Typography> */}
      <Typography sx={{ fontSize: 12, display: 'inline-block', mt: 0.5, mr: 1, color: 'gray' }}>Branch:</Typography>
      {/* <FormControl sx={{ m: 1, width: 300, mt: 3 }} size="small"> */}
      <TextField
        sx={{
          "& .MuiInputBase-root": {
            height: 25, fontSize: 12, mr: 2
          }
        }}
        select
        // size='large'
        value={props.branch}
        onChange={branchChange}
      >
        {branches.map((br) => (
          <MenuItem
            key={br.code}
            value={br.code}
            style={{ fontWeight: 'regular' }}
          >
            {br.name}
          </MenuItem>
        ))}
      </TextField>
      <Typography sx={{ fontSize: 12, display: 'inline-block', mt: 0.5, mr: 1, color: 'gray' }}>Semester:</Typography>
      <TextField
        style={{ padding: 0 }}
        sx={{
          "& .MuiInputBase-root": {
            height: 25, fontSize: 12, mr: 2
          }
        }}
        select
        // size='small'
        value={props.semester}
        onChange={semesterChange}
      >
        {semesters.map((yr) => (
          <MenuItem
            key={yr.code}
            value={yr.code}
            style={{ fontWeight: 'regular' }}
          >
            {yr.name}
          </MenuItem>
        ))}
      </TextField>
      <Typography sx={{ fontSize: 12, display: 'inline-block', mt: 0.5, mr: 1, color: 'gray' }}>Type:</Typography>
      <TextField
        style={{ padding: 0 }}
        sx={{
          "& .MuiInputBase-root": {
            height: 25, fontSize: 12
          }
        }}
        select
        // size='small'
        value={props.type}
        onChange={typeChange}
      >
        {type.map((ty) => (
          <MenuItem
            key={ty.code}
            value={ty.code}
            style={{ fontWeight: 'regular' }}
          >
            {ty.name}
          </MenuItem>
        ))}
      </TextField>
      {/* </FormControl> */}
    </div>
  );
}
