import UnitCard from "./unit-card";
import { Box } from "@mui/system";
import { useParams } from "react-router-dom";
import { Typography, Chip, Card, Alert, List, ListItem, ListItemText, ListItemButton } from "@mui/material";
import NotFound from "./404";

export default function UnitList(props) {
    const code = useParams().code;
    const keys = props.keys;
    const subject = props.data.filter((val) => {
        return val.code.toLowerCase() === code.toLowerCase();
    })[0]
    if (subject === null || subject === undefined) {
        return (
            <NotFound />
        )
    }
    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
    };

    const { c, l, t, p } = subject.credits
    console.log(keys)
    document.title = `${subject.title} (${subject.code}) Syllabus - NIT Hamirpur`
    let dt = 0
    return (

        <Box sx={{ m: 2, width: '900px', maxWidth: '90%', mx: 'auto' }}>
            <Typography className="push-container" sx={{ mt: 4 }} gutterBottom>
                {/* <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}> */}
                <Chip label={subject.code} variant="outlined" size="small" sx={{ borderColor: "var(--mui-pallete-primary-light)", color: 'var(--mui-pallete-primary-light)' }}></Chip>
                <Typography variant="h4" style={{ fontFamily: '"PT Serif", serif', fontWeight: 'bold' }}>{subject.title}</Typography>
                {/* </Box> */}
                <Box sx={{ fontSize: 'small', display: 'flex', gap: 2 }}>
                    {/* <Chip label={`Credits: ${C}`} style={{ fontSize: '12px' }} variant="filled"></Chip>
                    <Chip label={`Lecture: ${L}`} style={{ fontSize: '12px' }} variant="outlined"></Chip>
                    <Chip label={`Tutorial: ${T}`} style={{ fontSize: '12px' }} variant="outlined"></Chip>
                    <Chip label={`Practical: ${P}`} style={{ fontSize: '12px' }} variant="outlined"></Chip> */}
                    {`Credits: ${c}`}
                    <Typography fontSize={'small'} color="gray">{`Lectures: ${l} hrs • Tutorials: ${t} hrs • Practicals: ${p} hrs`}</Typography>
                </Box>
                <Box sx={{ fontSize: 'small', display: 'flex', color: 'gray', gap: 2, mb: 4 }}>
                    {/* <Chip label={`Credits: ${C}`} style={{ fontSize: '12px' }} variant="filled"></Chip>
                    <Chip label={`Lecture: ${L}`} style={{ fontSize: '12px' }} variant="outlined"></Chip>
                    <Chip label={`Tutorial: ${T}`} style={{ fontSize: '12px' }} variant="outlined"></Chip>
                    <Chip label={`Practical: ${P}`} style={{ fontSize: '12px' }} variant="outlined"></Chip> */}
                    {`Branches: ${subject.branches.sort().map((br) => br.toUpperCase()).join(' • ')}`}
                    <Typography fontSize={'small'} color="gray">{`Semesters: ${subject.semesters.join(' • ')}`}</Typography>
                </Box>
            </Typography>
            <Card
                sx={{ my: 4, display: 'flex', flexWrap: 'wrap', p: 2, borderRadius: 2 }}
                className='push-container'
            >
                {/* {!id ?
                    <Typography sx={{ textAlign: 'center', mt: '30vh', color: 'gray' }}>Add subjects here by clicking the "+" icon and share it with your friends!</Typography>
                    : */}
                <Typography sx={{ m: 1, fontSize: 'larger', textAlign: 'center', width: '100%' }} className='push-container'>
                    📑UNITS
                </Typography>
                <Alert severity="info" sx={{ width: '100%', my: 2 }} className='push-container'>
                    Before an exam, always confirm the final syllabus with your professor.
                </Alert>
                {props.data && subject.units.map((unit, i, { length }) => {
                    // dt += 25
                    return (
                        <UnitCard t={dt} subjectCode={code} inList={code in props.keys && props.keys[code].includes(unit.id) ? true : false} key={unit.id} num={unit.id} title={unit.title} topics={unit.topics} addKey={props.addKey} removeKey={props.removeKey} divider={length - 1 !== i} />

                    )
                })}
            </Card>
            {subject.textbooks.length ? <Card
                sx={{ my: 4, display: 'flex', flexWrap: 'wrap', p: 2, borderRadius: 2 }}
                className='push-container'
            >
                {/* {!id ?
                    <Typography sx={{ textAlign: 'center', mt: '30vh', color: 'gray' }}>Add subjects here by clicking the "+" icon and share it with your friends!</Typography>
                    : */}
                <Typography sx={{ m: 1, fontSize: 'larger', textAlign: 'center', width: '100%' }}>
                    📔TEXTBOOKS
                </Typography>
                <List sx={{ p: 0, width: '100%' }}>
                    {subject.textbooks.map((book, i) => {
                        return (
                            <ListItem
                                key={i}
                                disablePadding
                            >
                                <ListItemButton role={undefined} onClick={() => { handleCopy(`${book.title} by ${book.authors}`) }} dense sx={{ borderRadius: 2 }}>
                                    <ListItemText primary={'●'} sx={{ flexGrow: 0, mr: 2 }} />
                                    <ListItemText primary={book.title} secondary={book.authors} sx={{ fontFamily: '"PT Serif", serif' }} />
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
                </List>
            </Card> : ""}
            {subject.refbooks.length ? <Card
                sx={{ my: 4, display: 'flex', flexWrap: 'wrap', p: 2, borderRadius: 2 }}
                className='push-container'
            >
                {/* {!id ?
                    <Typography sx={{ textAlign: 'center', mt: '30vh', color: 'gray' }}>Add subjects here by clicking the "+" icon and share it with your friends!</Typography>
                    : */}
                <Typography sx={{ m: 1, fontSize: 'larger', textAlign: 'center', width: '100%' }}>
                    📚 REFERENCE BOOKS
                </Typography>
                <List sx={{ p: 0, width: '100%' }}>
                    {subject.refbooks.map((book, i) => {
                        return (
                            <ListItem
                                key={i}
                                disablePadding
                            >
                                <ListItemButton role={undefined} onClick={() => { handleCopy(`${book.title} by ${book.authors}`) }} dense sx={{ borderRadius: 2 }}>
                                    <ListItemText primary={'●'} sx={{ flexGrow: 0, mr: 2 }} />
                                    <ListItemText primary={book.title} secondary={book.authors} sx={{ fontFamily: '"PT Serif", serif' }} />
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
                </List>
            </Card> : ""}
        </Box>
    )
}