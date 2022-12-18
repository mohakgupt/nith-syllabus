import UnitCard from "./unit-card";
import { Box } from "@mui/system";
import BackButton from "./back-button";
import { useParams } from "react-router-dom";
import { Typography, TableContainer, Table, TableRow, TableCell } from "@mui/material";

export default function UnitList(props){
    const id=parseInt(useParams().id);
    return(
        <>
        <Typography variant="h6" textAlign={"center"} sx={{background: "linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(71,77,199,1) 42%, rgba(2,0,36,1) 100%);", backgroundClip: "text", color: "transparent"}} gutterBottom>
            <span style={{border: '1px solid #0d47a1', borderRadius: '1em', padding: '0.25em 1em'}}>{props.data[id-1].title.toUpperCase()}</span>
        </Typography>
        <TableContainer>
            <Table size="small" sx={{width: 200, margin: "1px auto"}}>
                <TableRow >
                    <TableCell sx={{border:'none'}}>Credits</TableCell>
                    <TableCell sx={{border:'none'}}>L</TableCell>
                    <TableCell sx={{border:'none'}}>T</TableCell>
                    <TableCell sx={{border:'none'}}>P</TableCell>
                </TableRow>
                <TableRow>
                    {props.data[id-1].credits.map((v)=>{return(<TableCell sx={{border:'none'}}>{v}</TableCell>)})}
                </TableRow>
            </Table>
        </TableContainer>
        <Box
            sx={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}
        >
            {!id? 
            <Typography sx={{textAlign: 'center', mt:'30vh', color: 'gray'}}>Add units here by clicking the "+" icon and share it with your friends!</Typography>
            :
            props.data && props.data[id-1].units.map((unit)=>{
                return(
                        <UnitCard s={id} inList={id in props.keys && props.keys[id].includes(unit.id)?true:false} key={unit.id} num={unit.id} title={unit.title} topics={unit.topics} addKey={props.addKey} removeKey={props.removeKey}/>
                        )
            })}
        </Box>
        <BackButton/>
        </>
    )
}