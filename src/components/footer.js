import { Typography, Divider } from "@mui/material";
import GitHubButton from 'react-github-btn';

export default function Footer(){
    return(
        <Typography sx={{height: "0.5em",color: 'gray', textAlign: 'center',width: "100%", fontSize:"10px", position:'absolute', bottom: 0}}>
            <Divider sx={{mb:1}}/>
            <span>All information displayed belongs to NIT Hamirpur</span><br/>
            {/* <span >Made with ❤️ by <a href="https://github.com/mohakgupt" style={{textDecoration: 'none', color: 'gray'}}>Mohak</a></span><br/> */}
            <GitHubButton href="https://github.com/mohakgupt/nith-syllabus" data-icon="octicon-star" data-show-count="true" aria-label="Star mohakgupt/nith-syllabus on GitHub">Star</GitHubButton>
            <div id="visits"></div>
        </Typography>
    )
}