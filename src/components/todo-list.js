import UnitCard from "./unit-card";
import { Box } from "@mui/system";
import { IconButton, Tooltip, Typography } from "@mui/material";
import ShareButton from "./share-button";
import { Chip, Card } from "@mui/material";
import { Add, Checklist, Launch } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function TodoList(props) {
    const keys = props.keys;
    document.title = "Todo List - NIT Hamirpur Syllabus"
    const subjects = props.data.filter((val) => {
        return Object.keys(keys).includes(val.code.toLowerCase());
    })
    return (
        <Box sx={{ m: 2, maxWidth: '900px', mx: 'auto', px: 2 }}>

            {!subjects.length ?
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '75vh', justifyContent: 'center' }}>
                    <Checklist sx={{ height: '200px', width: '200px', color: 'gray' }} />
                    <Typography sx={{ textAlign: 'center', color: 'gray' }}>Click <Add sx={{ transform: 'translateY(5px)' }} /> button on a unit to add it to your todo list.</Typography>
                </Box>
                : subjects.map((subject) => {
                    return (<Card className='push-container' sx={{ p: 2, borderRadius: 2, my: 4 }}>
                        <Typography className="push-container" sx={{}} gutterBottom>
                            <Chip label={subject.code} variant="outlined" size="small" sx={{ borderColor: "var(--mui-pallete-primary-light)", color: 'var(--mui-pallete-primary-light)' }}></Chip>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography variant="h4" style={{ fontFamily: '"PT Serif", serif', fontWeight: 'bold' }}>{subject.title}</Typography>
                                <Link to={`/${subject.code.toLowerCase()}`}>
                                    <Tooltip title='View full syllabus'>
                                        <IconButton aria-label="View full syllabus">
                                            <Launch color="disabled" fontSize="small" />
                                        </IconButton>
                                    </Tooltip>
                                </Link>
                            </Box>
                            <Box sx={{ fontSize: 'small', display: 'flex', gap: 2, mb: 4 }}>
                                {`Credits: ${subject.credits.c}`}
                            </Box>
                        </Typography>
                        <Box
                            sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}
                        >
                            {subject.units.filter((unit) => keys[subject.code.toLowerCase()].includes(unit.id)).map((unit, i, { length }) => {
                                // const s = id;
                                // const inList = ((id in keys && keys[id].includes(unit)) ? true : false)
                                // const key = unit
                                // const num = key
                                // const title = (unit === 20) ? subject.units[0].title : subject.units.slice(unit - 1)[0].title
                                // const topics = (unit === 20) ? subject.units[0].topics : subject.units.slice(unit - 1)[0].topics
                                // console.log(s, inList, key, num, title, topics)
                                return (
                                    <UnitCard subjectCode={subject.code} inList={true} key={unit.id} num={unit.id} title={unit.title} topics={unit.topics} addKey={props.addKey} removeKey={props.removeKey} divider={i !== length - 1} />
                                )
                            })}</Box></Card>
                    )
                })

            }
            <ShareButton keys={keys}></ShareButton>
        </Box>
    )
}