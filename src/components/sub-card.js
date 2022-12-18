import * as React from 'react';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function DataCard(props) {
  const [s,l,t,p] =props.credits;
  return (props.title &&
    <Link to={`/sub/${props.id}`} style={{ textDecoration: 'none' }} >
      <Card sx={{ width: 175, height: 116, margin: 0.25, backgroundColor: '#fafafa' }}>
        <CardActionArea>
          <CardContent sx={{ p: 1 }}>
            <Typography sx={{fontSize: 8, fontWeight: 'bold', padding: "1px 4px", backgroundColor: '#307ada', color: 'white', borderRadius: 2, display: "inline-block" }} color="text.secondary" gutterBottom>
              {props.code.toUpperCase()}
            </Typography>
            <Typography component="div" sx={{fontSize: 16, color: '#424242', height: '3.9em', overflow: 'hidden'}}>
              {props.title.toUpperCase()}
            </Typography>
            <Typography variant="body2" sx={{ fontSize: 10, mt: 1}}>
              {`${s} credits (`}
              {p?`${p}P)`:`${l}L+${t}T)`}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}