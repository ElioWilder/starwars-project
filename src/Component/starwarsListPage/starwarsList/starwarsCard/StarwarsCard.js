import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const StarwarsCard = ({person}) => {
    const id = Number.parseInt(person.url.substring('https://swapi.dev/api/people/'.length), 10);
    if(person.gender !== 'n/a'){
        return (
            <Card sx={{ width: 200, height: 200, p: 2, m: 2}}>
                <CardHeader title={person.name} sx={{textAlign: 'center'}} />
                <CardContent>
                    <div>{person.gender}</div>
                    <div>{person.birth_year}</div>
                </CardContent>
                <CardActions>
                    <Button size="small" color='secondary' variant="contained"><Link to={`/person/${id}`}>Plus D'info</Link></Button>
                </CardActions>
            </Card>
        );
    } else {
        return (
        <Card sx={{ width: 200, height: 200, p: 2, m: 2}}>
                <CardHeader title={person.name} sx={{textAlign: 'center'}} />
                <CardContent>
                    <div>Robot</div>
                    <div>{person.birth_year}</div>
                </CardContent>
                <CardActions>
                    <Button size="small" color='secondary' variant="contained"><Link to={`/person/${id}`}>Plus D'info</Link></Button>
                </CardActions>
            </Card>
        );    
    }
}

export default StarwarsCard;