// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputMask from 'react-input-mask';

export default function SignUp() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Cadastro empresa
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField name="nomeFantasia" required fullWidth id="nomeFantasia" label="Nome Fantasia" autoFocus />
            </Grid>
            <Grid item xs={12}>
              <TextField required fullWidth id="razaoSocial" label="Razão Social" name="razaoSocial" />
            </Grid>
            <Grid item xs={12}>
              <InputMask mask="99.999.999/9999-99">
                <TextField required fullWidth name="cnpj" label="cnpj" type="cnpj" id="cnpj" />
              </InputMask>
            </Grid>
            <Grid item xs={12}>
              <InputMask mask="999999999">
                <TextField fullWidth id="inscricaoEstadual" label="Inscrição Estadual" name="inscricaoEstadual" />
              </InputMask>
            </Grid>
            <Grid item xs={12}>
              <TextField required fullWidth id="endereço" label="Endereço" name="endereço" />
            </Grid>
            <Grid item xs={12}>
              <InputMask mask="(99)99999-9999">
                <TextField required fullWidth id="telefones" label="Telefones" name="telefones" />
              </InputMask>
            </Grid>
            <Grid item container justifyContent="flex-end">
              <Button variant="contained"> Adicionar Telefone </Button>
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Cadastrar
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
