import UnitCard from "./unit-card";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import ShareButton from "./share-button";
import { Chip } from "@mui/material";

export default function TodoList(props) {
    const keys = props.keys;
    document.title = "Todo List"
    return (
        <Box sx={{ m: 2, maxWidth: '900px', mx: 'auto', px: 2 }}>

            {!Object.keys(keys).length ?
                <Typography sx={{ textAlign: 'center', mt: '30vh', color: 'gray' }}>Add units here by clicking the "+" icon and share it with your friends!</Typography>
                : Object.keys(keys).map((id) => {
                    return (<>
                        <Typography className="push-container" sx={{ mt: 4 }} gutterBottom>
                            <Chip label={props.data[id - 1].code.toUpperCase()} style={{ backgroundColor: "var(--mui-pallete-primary-main)", color: '#fff' }}></Chip>
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
                            {keys[id].map((unit) => {
                                const s = id;
                                const inList = ((id in keys && keys[id].includes(unit)) ? true : false)
                                const key = unit
                                const num = key
                                const title = (unit === 20) ? props.data[id - 1].units[0].title : props.data[id - 1].units.slice(unit - 1)[0].title
                                const topics = (unit === 20) ? props.data[id - 1].units[0].topics : props.data[id - 1].units.slice(unit - 1)[0].topics
                                // console.log(s, inList, key, num, title, topics)
                                return (
                                    <UnitCard s={s} inList={inList} key={key} num={num} title={title} topics={topics} addKey={props.addKey} removeKey={props.removeKey} />
                                )
                            })}</Box></>
                    )
                })

            }
            <ShareButton keys={keys}></ShareButton>
        </Box>
    )
}