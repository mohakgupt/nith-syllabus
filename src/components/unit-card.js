import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {IconButton} from '@mui/material';
import { Divider } from '@mui/material';

export default function UnitCard(props) {
  const { s, num, title, topics, inList } = props;
  const brick = (num && num!=20)?topics.split(", ").map((w)=>{return(w[0].toUpperCase()+w.slice(1))}).join(" • ").split(". ").join(" • ").split(" • "):topics.split("_");
  return (title &&
    <Card sx={{ width: 400, margin: 0.25, mb: 1, backgroundColor: '#fafafa', position: 'relative'}}>
        {props.addKey!==undefined?<IconButton aria-label="add" onClick={inList?()=>{props.removeKey(s,num)}:()=>{props.addKey(s,num)}} sx={{position: 'absolute', right: '0.25em', top: '0.25em'}}>
          {inList?<RemoveIcon/>:<AddIcon />}
        </IconButton>:""}
        <CardContent sx={{p:2}}>
          {(num && num!=20)?<Typography sx={{ fontSize: 10, fontWeight: 'bold', padding: "3px 6px 1px 6px", backgroundColor: '#307ada', color: 'white', borderRadius: 4, display: "inline-block"}} color="text.secondary">
            {`UNIT-${num}`}
          </Typography>:""}
          <Typography component="div" sx={{fontSize:20, color: '#616161', fontWeight: 'bold', mt: 1}}  >
            {title.toUpperCase()}
          </Typography>
          <Divider sx={{mb:2}}/>
          <Typography variant="body2" sx={{fontSize: 16, color:'#616161' }}>
            {brick.map((t)=>{
              return(<Typography display="block">{"• "+t}</Typography>)
            })}
          </Typography>
        </CardContent>
    </Card>
  );
}