import * as React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const FirstInterface = () => (
  <> 
    <Container maxWidth="sm">
      <Box sx={{m: 5}}>
      This Box uses MUI System props for quick customization.
      <Button>Click Here to generate code</Button>
      <TextField id="filled-basic" label="Filled" variant="filled" />
      Paste your code here</TextField>
    </Box>
    </Container>
  </>
);

const SecondInterface = () => (
  <>

  </>
);

function App() {
  return <FirstInterface />;
}

export default App;
