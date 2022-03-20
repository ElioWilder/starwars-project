const StarwarsCard = ({person}) => {
    
    return (
        <div>
            <div className="StarwarsCard">
                <div className="starwars-name">{person.name}</div>
            </div>
        </div>
    )
}

export default StarwarsCard;