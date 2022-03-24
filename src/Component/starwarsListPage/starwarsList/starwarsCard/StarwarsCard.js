import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const StarwarsCard = ({person}) => {

    if(person.gender !== 'n/a'){
        return (
            <Card sx={{ width: 200, height: 200, p: 2, m: 2}}>
                <CardHeader title={person.name} sx={{textAlign: 'center'}} />
                <CardContent>
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
        <Card sx={{ width: 200, height: 200, p: 2, m: 2}}>
                <CardHeader title={person.name} sx={{textAlign: 'center'}} />
                <CardContent>
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