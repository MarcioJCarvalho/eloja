/* eslint-disable no-useless-escape */
import * as React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useForm } from 'react-hook-form';
import FormTextField from '../components/form/FormTextField';
import Login from '../models/Login';
import { Typography } from '@mui/material';
import { auth } from '../services/authService';

export default function LoginPage() {
  const { handleSubmit, control } = useForm();

  const onSubmit = async (data: any) => {
    const { email, senha } = data;

    const login = new Login(email, senha);
    auth(login);
    //navigate('/');
  };

  return (
    <Container
      component="main"
      maxWidth="md"
      sx={{
        marginTop: 8,
        height: '80vh',
        boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.2)',
        borderRadius: '12px',
      }}
    >
      <Box
        sx={{
          paddingTop: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5" style={{ marginBottom: '1.5rem' }}>
          Login
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormTextField name="email" label="Email" control={control} />
            </Grid>
            <Grid item xs={12}>
              <FormTextField name="senha" label="Senha" type="password" control={control} />
            </Grid>
          </Grid>
          <Box sx={{ display: 'flex', flexDirection: 'row-reverse', pt: 2 }}>
            <Button type="submit">Login</Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
}
