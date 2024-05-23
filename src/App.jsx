import * as React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const FirstInterface = () => (
  <> 
    <Container maxWidth="sm">
      <Box sx={{m: 5}}>
      This Box uses MUI System props for quick customization.
      <Button>Click Here to generate code</Button>
      <TextField id="filled-basic" label="Enter code here.." variant="filled"/>
      <Button>Start</Button>
    </Box>
    </Container>
  </>
);

const SecondInterface = () => (
  <>
    <Box>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </Box>
      <Grid item xs={4}>
        <Button>Submit</Button>
      </Grid>
  </>
);

function App() {
  return <SecondInterface/>;
}

export default App;
