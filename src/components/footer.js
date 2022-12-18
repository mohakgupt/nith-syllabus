import { Typography } from "@mui/material";

export default function Footer(){
    return(
        <Typography sx={{height: "0.5em",color: 'gray', textAlign: 'center',width: "100%", fontSize:"10px", position:'absolute', bottom: 0}}>
            <span style={{paddingTop: "10px"}}>Made with ❤️ by <a href="https://github.com/mohakgupt" style={{textDecoration: 'none', color: '#000'}}>mohakgupt</a></span>
        </Typography>
    )
}