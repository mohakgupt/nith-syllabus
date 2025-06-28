import UnitCard from "./unit-card";
import { Box } from "@mui/system";
import HomeButton from "./back-button";
import { Link, useLocation } from "react-router-dom";
import { Typography, Card, Chip, Tooltip, IconButton } from "@mui/material";
import { InfoOutline, Launch } from "@mui/icons-material";

export default function SharedTodoList(props) {
    // const keys = JSON.parse(useParams().keys.replaceAll("i", "ceq").replaceAll("b", "[").replaceAll("c", "]").replaceAll("q", '"').replaceAll("e", ","));
    // const name = useParams().name.replaceAll("*!", " ");
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const name = queryParams.get('name');
    const description = queryParams.get('description');
    const curator = queryParams.get('curator');
    console.log(queryParams.get('keys').replaceAll("ij", "ceq").replaceAll("gh", ",").replaceAll("ef", '"').replaceAll("cd", ']').replaceAll("ab", "["))
    const keys = JSON.parse(queryParams.get('keys').replaceAll("ij", "ceq").replaceAll("gh", ",").replaceAll("ef", '"').replaceAll("cd", ']').replaceAll("ab", "["));
    console.log(keys)
    document.title = `${name} - NIT Hamirpur Syllabus`
    const subjects = props.data.filter((val) => {
        return Object.keys(keys).includes(val.code.toLowerCase());
    })
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
    return (
        <Box sx={{ m: 2, maxWidth: '900px', mx: 'auto', px: 2 }}>

            <Typography sx={{ fontSize: 30, display: 'inline-block' }}>{name}</Typography>
            <Tooltip title='External lists are view-only and cannot be edited. Click on TODO tab to edit and share your to-do list.' sx={{ mx: 2, fontSize: 'medium' }}><InfoOutline color="disabled" /></Tooltip>
            {curator ? <Typography sx={{ color: 'lightgray' }}>Curator: {curator}</Typography> : ""}
            {description ? <Typography sx={{ color: 'lightgray' }}>Description: {description}</Typography> : ""}
            {!subjects.length ?
                <Typography sx={{ textAlign: 'center', mt: '30vh', color: 'gray' }}>Empty list</Typography>
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
                                    <UnitCard subjectCode={subject.code} inList={true} key={unit.id} num={unit.id} title={unit.title} topics={unit.topics} divider={i !== length - 1} />
                                )
                            })}</Box></Card>
                    )
                })
            }

            <HomeButton></HomeButton>
        </Box>
    )
}