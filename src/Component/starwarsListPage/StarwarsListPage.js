import StarwarsList from "./starwarsList/StarwarsList";
import React from "react";

const StarwarsListPage = ({people}) => {
    
    return (
        <StarwarsList peopleList={people}></StarwarsList>
        
    );
};

export default StarwarsListPage;

