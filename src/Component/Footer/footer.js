import Box  from "@mui/material/Box";

const Footer = () => {
    return <footer className="App-footer">
        <Box sx={{display: 'flex', justifyContent: 'center', backgroundColor: 'black', color: 'white', p:2, m:2}}>
            <p>Site proposé par Laura Morvan et Cécile Niess</p>
        </Box>
    </footer>
};

export default Footer;