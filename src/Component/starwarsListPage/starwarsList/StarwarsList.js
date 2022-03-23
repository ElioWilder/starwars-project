import StarwarsCard from "./starwarsCard/StarwarsCard";

const StarwarsList = ({peopleList}) => {
    

    const starwarsList = peopleList.map((element) => {
        return (
            <StarwarsCard person={element} key={element.name}></StarwarsCard>
        );
    })
    return (
        <div>
            {starwarsList}
        </div>
    )

        
    }

export default StarwarsList;