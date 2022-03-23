import StarwarsList from "./starwarsList/StarwarsList";
import Search from "./Search/search";
import React from "react";

const StarwarsListPage = ({people}) => {

    const [value, setValue] = React.useState("");
    
    const filterPeople = people.filter((element) => {
        return element.name.toLowerCase().includes(value.toLowerCase());
    });


    return (
        <div>
            <Search value={value} setValue={setValue}></Search>
            <StarwarsList peopleList={filterPeople}></StarwarsList>
        </div>
        
    );
};

export default StarwarsListPage;

