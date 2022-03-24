import  React  from "react";
import Box from '@mui/material/Box';
import Input from "@mui/material/Input";


const Search = ({value, setValue}) => {
  
  const onChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  }
    return  (
            <Box sx={{p: 2}}>
              <Input label="Recherche" sx={{width: 500, backgroundColor: "white"}} variant="outlined" color="warning" type="text" placeholder="Trouver un personnage" value={value} onChange={onChange}></Input>
            </Box>
    );    
  };

export default Search;