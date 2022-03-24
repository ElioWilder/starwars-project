import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const StarwarsCard = ({person}) => {

    if(person.gender !== 'n/a'){
        return (
            <Card sx={{ width: 160, height: 160}}>
                <CardContent>
                    <div>{person.name}</div>
                    <div>{person.gender}</div>
                    <div>{person.birth_year}</div>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary" variant="contained">Plus D'info</Button>
                </CardActions>
            </Card>
        );
    } else {
        return (
        <Card sx={{ width: 160, height: 160}}>
                <CardContent>
                    <div className="starwars-name">{person.name}</div>
                    <div>Robot</div>
                    <div>{person.birth_year}</div>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary" variant="contained">Plus D'info</Button>
                </CardActions>
            </Card>
        );    
    }
}

export default StarwarsCard;