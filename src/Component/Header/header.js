import logo from './logo.png';
import  Box  from '@mui/material/Box';

const Header = () => {
    return <Box className="App-header" sx={{display: 'flex', flexDirection: 'row', pl: 2, backgroundColor: 'black'}}>
                <Box sx={{p: 2}}>
                    <img src={logo} className="App-logo" alt="logo" />
                </Box>
                <Box sx={{p: 2, color: 'white'}}>
                    <h1>Le wiki des étoiles</h1>
                </Box>
                
            </Box>
};

export default Header;