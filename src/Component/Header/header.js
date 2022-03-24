import logo from './logo.png';
import  Box  from '@mui/material/Box';

const Header = () => {
    return <Box className="App-header" sx={{display: 'flex', flexDirection: 'row', pl: 2}}>
                <img src={logo} className="App-logo" alt="logo" />
                <p>Le wiki des étoiles</p>
            </Box>
};

export default Header;