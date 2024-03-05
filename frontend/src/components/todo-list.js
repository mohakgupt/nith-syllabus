import UnitCard from "./unit-card";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import ShareButton from "./share-button";

export default function TodoList(props){
    const keys=props.keys;
    // var userList=[];
    // if(keys.length){
    //     for(let s of keys){
    //         for(let u of s.units){
    //             if(u.id in keys){
    //                 userList.push(u);
    //             }
    //         }
    //     }
    // }
    document.title = "Todo List - nith syllabus"
    return(
        <>
        
            <Typography sx={{border: "solid black", borderWidth: "2px 0", fontSize: 30, textAlign: 'center', width: '100%'}}>Todo List</Typography>
            {!Object.keys(keys).length? 
            <Typography sx={{textAlign: 'center', mt:'30vh', color: 'gray'}}>Add units here by clicking the "+" icon and share it with your friends!</Typography>
            :Object.keys(keys).map((id)=>{
                return(<>
                    <Typography variant="h6" textAlign={"center"} sx={{mt: 4, background: "linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(71,77,199,1) 42%, rgba(2,0,36,1) 100%);", backgroundClip: "text", color: "transparent"}} gutterBottom>
                        <span style={{display: 'block', height: 0}}><span style={{display: 'inline-block', fontSize: 12, backgroundColor: "#eeeeee", color: 'rgba(71,77,199,1)', transform: 'translateY(-19px)', padding: '0 5px'}}>{props.data[id-1].code.toUpperCase()}</span></span>
                        <span style={{display: 'inline-block', border: '1px solid #0d47a1', borderRadius: '1em', padding: '3px 1em'}}>{props.data[id-1].title.toUpperCase()}</span>
                    </Typography>
                    <Box
            sx={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}
        >
                    {keys[id].map((unit)=>{
                        const s=id;
                        const inList=((id in keys && keys[id].includes(unit))?true:false)
                        const key=unit
                        const num=key
                        const title=(unit===20)?props.data[id-1].units[0].title:props.data[id-1].units.slice(unit-1)[0].title
                        const topics=(unit===20)?props.data[id-1].units[0].topics:props.data[id-1].units.slice(unit-1)[0].topics
                        // console.log(s, inList, key, num, title, topics)
                        return(
                            <UnitCard s={s} inList={inList} key={key} num={num} title={title} topics={topics} addKey={props.addKey} removeKey={props.removeKey} />
                        )
                })}</Box></>
            )})
        
            }
        <ShareButton keys={keys}></ShareButton>
        </>
    )
}