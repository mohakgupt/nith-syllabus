import UnitCard from "./unit-card";
import { Box } from "@mui/system";
import { useParams } from "react-router-dom";
import { Typography, Chip } from "@mui/material";

export default function UnitList(props) {
    const id = parseInt(useParams().id);
    const keys = props.keys;
    console.log(keys)
    document.title = `${props.data[id - 1].title} Syllabus`
    let t = 100
    return (
        <Box sx={{ m: 2, maxWidth: '900px', mx: 'auto', px: 2 }}>
            <Typography className="push-container" sx={{ mt: 4 }} gutterBottom>
                <Chip label={props.data[id - 1].code.toUpperCase()} style={{ backgroundColor: "var(--mui-pallete-primary-main)", color: '#fff', mb: 2 }}></Chip>
                <Typography variant="h4" style={{ fontFamily: '"PT Serif", serif' }}>{props.data[id - 1].title.toUpperCase()}</Typography>
                <Box sx={{ display: 'flex', gap: 2, my: 4 }}>
                    <Chip label={`Credits: ${props.data[id - 1].credits[0]}`} style={{ fontSize: '12px' }} variant="filled"></Chip>
                    <Chip label={`L: ${props.data[id - 1].credits[1]}`} style={{ fontSize: '12px' }} variant="outlined"></Chip>
                    <Chip label={`T: ${props.data[id - 1].credits[2]}`} style={{ fontSize: '12px' }} variant="outlined"></Chip>
                    <Chip label={`P: ${props.data[id - 1].credits[3]}`} style={{ fontSize: '12px' }} variant="outlined"></Chip>
                </Box>
            </Typography>
            <Box
                sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}
            >
                {!id ?
                    <Typography sx={{ textAlign: 'center', mt: '30vh', color: 'gray' }}>Add units here by clicking the "+" icon and share it with your friends!</Typography>
                    :
                    props.data && props.data[id - 1].units.map((unit) => {
                        t += 25
                        return (
                            <UnitCard t={t} s={id} inList={id in props.keys && props.keys[id].includes(unit.id) ? true : false} key={unit.id} num={unit.id} title={unit.title} topics={unit.topics} addKey={props.addKey} removeKey={props.removeKey} />
                        )
                    })}
            </Box>
        </Box>
    )
}