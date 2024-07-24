import * as React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useState } from 'react';


const App = () => {
    return (
        <>
        <TextField id="outlined-basic" label="Username" variant="outlined" sx={{width: '100%', m:0.5 }}/>
        <TextField id="outlined-basic" label="Password" variant="outlined" sx={{width: '100%', m:0.5 }}/>
        <Button variant="contained" sx={{ m: 0.5}}>Login</Button>
        <Button variant="contained" sx={{ m: 0.5}}>SignUp</Button>
        </>
    )
}

export default App;