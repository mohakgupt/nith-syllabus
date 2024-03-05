import DataCard from "./sub-card";
import { Box } from "@mui/system";
import ListButton from "./list-button";
import SearchBox from './search';
import { Typography } from "@mui/material";
import Filter from "./filter";


export default function SubList(props) {
  let searchResults;
  searchResults = props.data && props.data.filter((val) => {
    return(props.query === "" || val.title.toLowerCase().includes(props.query.toLowerCase()) || val.code.includes(props.query.toLowerCase()) || val.code.replace("-","").includes(props.query.toLowerCase()))
  })
  if(props.branch!=='al'){
    searchResults = searchResults.filter((sub)=>{return(sub.code.slice(0, 2) === props.branch)})
  }
  if(props.year!=='al'){
    searchResults = searchResults.filter((sub)=>{return(sub.code[3] === props.year)})
  }
  searchResults = searchResults.sort((a,b)=> a.title.toLowerCase()>b.title.toLowerCase()?1:-1)
  let t=0

  return (
    <div>
    <SearchBox query={props.query} f={event=>{props.setQuery(event.target.value)}}></SearchBox>
    <Filter branch={props.branch} setBranch={props.setBranch} year={props.year} setYear={props.setYear} />
      <Box
        sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}
      >
        {searchResults.length?searchResults.map((sub) => {
            t+=15
            return (<DataCard key={sub.id} id={sub.id} code={sub.code} title={sub.title} credits={sub.credits} t={t}></DataCard>); 
        }):<Typography sx={{textAlign: 'center', mt:'30vh', color: 'gray'}}>Either there is no subject or you'll have to wait for it to be added 😉</Typography>}
      </Box>
      <ListButton keys={props.keys}></ListButton>
    </div>
  )
}