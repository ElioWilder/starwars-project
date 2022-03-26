import { Button, Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const DetailsPage = () => {

    const params = useParams();
    const { isLoading, error, data } = useQuery('personData', () =>

     fetch(`https://swapi.dev/api/people/${params.id}`).then(res => res.json())
   );

   if (isLoading) return 'Loading...';

   if (error) return 'An error has occurred: ' + error.message;
   const person = data; 
   console.log(person); 
    
   return (
       <Box sx={{display: 'flex', justifyContent: 'center', backgroundColor: '#b39ddb'}}>
            <Card sx={{ width: 500, height: 500, p: 2, m: 2, display: 'flex', flexDirection: 'column'}}>
                <CardHeader title={person.name} sx={{textAlign: 'center'}} />
                <CardContent sx={{textAlign: 'center'}}>
                    <h3>Etat civil</h3>
                        <div>Genre :{person.gender}</div>
                        <div>Année de naissance :{person.birth_year}</div>
                    <h3>Taille et poids</h3>    
                        <div>Taille :{person.height}</div>
                        <div>Poids :{person.mass}</div>
                    <h3>Aspect Physique</h3>
                        <div>Couleur de cheveux :{person.hair_color}</div>
                        <div>Couleur de peau :{person.skin_color}</div>
                        <div>Couleur des yeux :{person.eye_color}</div>
                </CardContent>
                <CardActions>
                    <Button size="medium" color="secondary" variant="contained"><Link to='/'>Retour</Link></Button>
                </CardActions>
            </Card> 
        </Box>       
    );
}

export default DetailsPage;