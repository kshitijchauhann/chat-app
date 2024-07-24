import * as React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyBNSmllBgKhUuj7KZxpUPb8s6KF3P44mr0",
  authDomain: "chat-app-647c4.firebaseapp.com",
  databaseURL: "https://chat-app-647c4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chat-app-647c4",
  storageBucket: "chat-app-647c4.appspot.com",
  messagingSenderId: "176798339916",
  appId: "1:176798339916:web:a460ffee409277981975e9",
  measurementId: "G-8MKZP07WYL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


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
        width: '60vh',
        height: '90vh',
        border: '2px solid grey',
        margin: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}
      >
      <Box sx={{flexGrow: 1, display: 'flex', flexDirection: 'column-reverse', overflowY: 'auto', height: '100%'}}>
        {message.map((msg, index) => (
        <Box key={index} sx={{ mt: 1, p: 1,  borderRadius: 1 }}>
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
    <SecondInterface/>
    </>
  )

}


export default App;
