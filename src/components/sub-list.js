import DataCard from "./sub-card";
import { Box } from "@mui/system";
import SearchBox from './search';
import { Typography } from "@mui/material";
import Filter from "./filter";
import { Alert } from "@mui/material";

export default function SubList(props) {
  document.title = "NIT Hamirpur Syllabus"
  let searchResults;
  searchResults = props.data && props.data.filter((val) => {
    return (props.query === "" || val.title.toLowerCase().includes(props.query.toLowerCase()) || val.code.includes(props.query.toLowerCase()) || val.code.replace("-", "").includes(props.query.toLowerCase()))
  })
  if (props.branch !== 'al') {
    searchResults = searchResults.filter((sub) => { return (sub.branches.includes(props.branch)) })
  }
  if (props.semester !== 'al') {
    searchResults = searchResults.filter((sub) => { return (sub.semesters.includes(props.semester)) })
  }
  if (props.type !== 'al') {
    searchResults = searchResults.filter((sub) => {
      if (props.type === 'th')
        return sub.credits.p === 0;
      // if (props.type === 'lb')
      return sub.credits.p > 0;
    })
  }
  searchResults = searchResults.sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1)
  let t = 0;
  return (
    <Box >
      <SearchBox query={props.query} f={event => { props.setQuery(event.target.value) }}></SearchBox>
      <Filter branch={props.branch} setBranch={props.setBranch} semester={props.semester} setSemester={props.setSemester} type={props.type} setType={props.setType} />
      <Alert severity="info" sx={{ width: '78em', mx: 'auto', my: 2, maxWidth: '90%' }} className='push-container'>
        Due to change in the official syllabus, we got rid of the old data. New first year syllabus has been fully added.
      </Alert>
      <Box
        sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '75em', mx: "auto" }}
      >
        {searchResults.length ? searchResults.map((sub) => {
          t += 15
          return (<DataCard key={sub.code} code={sub.code} title={sub.title} credits={sub.credits} t={t}></DataCard>);
        }) : <Typography sx={{ textAlign: 'center', mt: '30vh', color: 'gray' }}>Either there is no subject or you'll have to wait for it to be added 😉</Typography>}
      </Box>
    </Box>
  )
}