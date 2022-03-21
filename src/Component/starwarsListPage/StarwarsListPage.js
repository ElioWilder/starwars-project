import StarwarsList from "./starwarsList/StarwarsList";
import Search from "./Search/search";
import React from "react";

const StarwarsListPage = ({people}) => {

    const [value, setValue] = React.useState("");
    
    return (
        <div>
            <Search value="" setValue=""></Search>
            <StarwarsList peopleList={people}></StarwarsList>
        </div>
        
    );
};

export default StarwarsListPage;

