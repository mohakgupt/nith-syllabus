import { Typography } from "@mui/material";

export default function Footer(){
    return(
        <Typography sx={{height: "0.5em",color: 'gray', textAlign: 'center',width: "100%", fontSize:"10px", position:'absolute', bottom: 0}}>
            <span style={{paddingTop: "10px"}}>Made with ❤️ by <a href="https://github.com/mohakgupt" style={{textDecoration: 'none', color: 'gray'}}>mohakgupt</a></span>
            <div id="visits"></div>
        </Typography>
    )
}