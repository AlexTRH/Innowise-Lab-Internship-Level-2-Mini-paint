// import React from 'react';
import { Container, TextField, Grid, Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <Container maxWidth="sm" className={'sign'}>
      <TextField
        id="input_name"
        variant="outlined"
        color="secondary"
        label="Name"
        className={'inputText'}
        fullWidth
        required
        sx={{ mb: 4 }}
      />
      <TextField
        id="input_email"
        variant="outlined"
        color="secondary"
        label="Email"
        className={'inputText'}
        type={'email'}
        fullWidth
        required
        sx={{ mb: 4 }}
      />
      <TextField
        id="input_confirm_password"
        variant="outlined"
        color="secondary"
        label="Password Confirmation"
        className={'inputText'}
        type={'password'}
        required
        fullWidth
        sx={{ mb: 4 }}
      />
      <Grid item xs={5}>
        <Grid container spacing={2}>
          <Grid item>
            <Button variant="contained" type="submit">
              Sign Up
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" type="submit">
              {<GoogleIcon />}
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <small>
          Already have an account? <Link to={'../signin'}>Sign In</Link>
        </small>
      </Grid>
    </Container>
  );
};

export default SignUp;
