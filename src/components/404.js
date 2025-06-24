import { Typography, Box } from "@mui/material";

export default function NotFound() {
    document.title = "404 - NIT Hamirpur Syllabus"
    return (
        <Box
            sx={{
                height: "75vh",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: 'column',
            }}
        >
            <Box
                component="img"
                alt="404"
                src="../notfound.png"
                maxWidth={'90%'}
            >
            </Box>
            <Typography color="lightgray" maxWidth={'90%'} textAlign={'center'}>
                You followed the wrong link, dear.
            </Typography>
            <Typography color="lightgray" maxWidth={'90%'} textAlign={'center'}>
                Tip: Always carry a torch with you on the internet.
            </Typography>
        </Box>
    )
}