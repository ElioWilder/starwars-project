import StarwarsCard from "./starwarsCard/StarwarsCard";

const StarwarsList = ({peopleList}) => {
    const filterPeople = peopleList.filter((element) => {
        return element.name.toLowerCase().includes(peopleList.toLowerCase());
    });

    const starwarsList = filterPeople.map((element) => {
        return (
            <StarwarsCard person={peopleList}></StarwarsCard>
        );
    })
    return (
        <div>
            {starwarsList}
        </div>
    )

        
    }

export default StarwarsList;