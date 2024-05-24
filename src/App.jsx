import * as React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

const FirstInterface = () => (
  <> 
    <Box sx={{m: 5}}>
      This Box uses MUI System props for quick customization.
      <Button>Click Here to generate code</Button>
      <TextField id="filled-basic" label="Paste your code here" variant="filled" />
    </Box>
  </>
);

const SecondInterface = () => (
  <>
    <Container maxWidth="sm">
          <Box
      sx={{ 
        width: '45vh',
        height: '70vh',
        border: '2px solid grey',
        margin: '20px 10px 10px 27px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end'
      }}
    >
    <Grid 
      container 
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>
       <TextField id="filled-basic" label="Enter here.." variant="filled"/>      
      </Box>
      <Box sx={{
        width: '10vh',
        height: '4vh',
      }}>
      <Button size="large"><DoubleArrowIcon></DoubleArrowIcon></Button>
      </Box>
  </Grid>
</Box>
</Container>
  </>
);

function App() {
  return <SecondInterface />;
}

export default App;
