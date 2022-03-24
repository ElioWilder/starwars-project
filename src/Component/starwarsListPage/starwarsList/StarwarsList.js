import StarwarsCard from "./starwarsCard/StarwarsCard";
import Box from '@mui/material/Box';

const StarwarsList = ({peopleList}) => {
    

    const starwarsList = peopleList.map((element) => {
        return (
            
            <StarwarsCard person={element} key={element.name}></StarwarsCard>
            
        );
    })
    return (
        <Box sx ={{ display: 'flex', flexDirection: 'row',flexWrap: 'wrap', justifyContent: 'space-between', p: 2 }}>
            {starwarsList}
        </Box>
    )

        
    }

export default StarwarsList;