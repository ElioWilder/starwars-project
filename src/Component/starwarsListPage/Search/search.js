import  React  from "react";
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";


const Search = ({value, setValue}) => {
  
  const onChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  }
    return  (
            <Box sx={{p: 2}}>
              <TextField label="Recherche" sx={{width: 500, backgroundColor: "white"}} type="text" placeholder="Trouver un personnage" value={value} onChange={onChange}></TextField>
            </Box>
    );    
  };

export default Search;