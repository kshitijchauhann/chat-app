import * as React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useState } from 'react';

const FirstInterface = () => (
  <> 
    <Box sx={{m: 5}}>
      This Box uses MUI System props for quick customization.
      <Button>Click Here to generate code</Button>
      <TextField id="filled-basic" label="Paste your code here" variant="filled" />
    </Box>
  </>
);

const SecondInterface = () => {

  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState([]);

  const messageValue = (event) => {
    setInputValue(event.target.value);
  }

  const onButtonClick = (event) => {
    if (event.key === 'Enter' && inputValue.trim() !== '') {
      setMessage([inputValue, ...message]);
      setInputValue('');
    }
  }
  return (
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
        justifyContent: 'flex-end',
      }}
      >
      <Box sx={{flexGrow: 1, display: 'flex', flexDirection: 'column-reverse', overflowY: 'auto', height: '100%'}}>
        {message.map((msg, index) => (
        <Box key={index} sx={{ mt: 1, p: 1, border: '1px solid grey', borderRadius: 1 }}>
          {msg}
        </Box>
        ))}
      </Box>
      <Grid 
        container 
        direction="row"
        justifyContent="space-between"
        alignItems="center"
    >
      <TextField 
        fullWidth 
        id="filled-basic" 
        label="Enter here.." 
        variant="filled" 
        value={inputValue}
        onChange={messageValue}
        onKeyDown={onButtonClick}
      />      

      </Grid>
    </Box>
  </Container>
</>

)
}

const App = () => {

  return (
    <>
    <SecondInterface />
    </>
  )

}


export default App;
