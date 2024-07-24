import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import PhoneInput from 'react-phone-number-input'
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const App = () => {
    return (
        <>
        <Box sx={{m:1}}>
        <div>

        <TextField id="outlined-basic" label="First Name" sx={{m:1}}/>
        <TextField id="outlined-basic" label="Last Name" sx={{m:1}}/>

        </div>
        <div>

        <TextField id="outlined-basic" label="Email" sx={{m:1}}/>
        <Date />
        </div>
        <div>
        <TextField id="outlined-basic" label="Country Code" type="number" sx={{m:1}}/>     
        <TextField id="outlined-basic" label="Number"sx={{m:1}}/>
        </div>
        <div>

        <TextField id="outlined-basic" label="Enter Password"sx={{m:1}}/>
        <TextField id="outlined-basic" label="Confirm Password"sx={{m:1}}/>
        </div>
        <Button variant="contained" sx={{ m: 1}}>SignUp</Button>
        <div>
            <GAuthButton/>
        </div>
        </Box>
        </>
    )
}

const Date = () => {
    const [value, setValue] = useState(null)
    return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker label="D.O.B" value={value} onChange={(newValue) => setValue(newValue)} sx={{m:1, width: '225px'}}/>
    </LocalizationProvider>
    );
}

const GAuthButton = () => {
    const handleSignIn = () => {

        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        auth.languageCode = "en";
        signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
        });
    }
    return (
        <Button variant="contained" onClick={handleSignIn} sx={{ m: 1 }}>
            Sign in with Google
        </Button>
    )
}

export default App;