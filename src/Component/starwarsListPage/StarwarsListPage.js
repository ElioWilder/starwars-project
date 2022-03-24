import StarwarsList from "./starwarsList/StarwarsList";
import Search from "./Search/search";
import React from "react";
import Box from '@mui/material/Box';
import './style.css';

const StarwarsListPage = ({people}) => {

    const [value, setValue] = React.useState("");
    
    const filterPeople = people.filter((element) => {
        return element.name.toLowerCase().includes(value.toLowerCase());
    });


    return (
        <Box className="bg">
            <Search value={value} setValue={setValue}></Search>
            <StarwarsList peopleList={filterPeople}></StarwarsList>
        </Box>
        
    );
};

export default StarwarsListPage;

