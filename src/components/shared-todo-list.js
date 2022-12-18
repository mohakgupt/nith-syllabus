import UnitCard from "./unit-card";
import { Box } from "@mui/system";
import BackButton from "./back-button";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";

export default function SharedTodoList(props){
    const keys=JSON.parse(useParams().keys);
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
    return(
        <>
        <Box
            sx={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}
        >
            <Typography sx={{fontSize: 30, textAlign: 'center', width: '100%'}}>Todo List</Typography>
            {!Object.keys(keys).length? 
            <Typography sx={{textAlign: 'center', mt:'30vh', color: 'gray'}}>Add units here by clicking the "+" icon and share it with your friends!</Typography>
            :Object.keys(keys).map((id)=>{
                return(
                    keys[id].map((unit)=>{
                        const s=id;
                        const inList=((id in keys && keys[id].includes(unit))?true:false)
                        const key=unit
                        const num=key
                        const title=props.data[id-1].units[unit-1].title
                        const topics=props.data[id-1].units[unit-1].topics
                        // console.log(s, inList, key, num, title, topics)
                        return(
                            <UnitCard s={s} inList={inList} key={key} num={num} title={title} topics={topics} addKey={props.addKey} removeKey={props.removeKey} />
                        )
                })
            )})
            }
        </Box>
        <BackButton></BackButton>
        </>
    )
}