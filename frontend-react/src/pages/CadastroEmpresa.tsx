/* eslint-disable no-useless-escape */
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputMask from 'react-input-mask';
import { Controller, useForm } from 'react-hook-form';
import FormTextField from '../components/FormTextField';

export default function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
    //criar empresa e mandar
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormTextField name="nomeFantasia" label="nomeFantasia" control={control} />
            </Grid>
            <Grid item xs={12}>
              <FormTextField name="razaoSocial" label="Razão Social" control={control} />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="cnpj"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                  <InputMask mask="99.999.999/9999-99" value={value} onChange={onChange}>
                    <TextField
                      error={!!errors.cnpj?.message}
                      label="CNPJ"
                      variant="outlined"
                      type="text"
                      fullWidth
                      required
                    />
                  </InputMask>
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="inscricaoEstadual"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                  <InputMask mask="999999999" value={value} onChange={onChange}>
                    <TextField
                      error={!!errors.inscricaoEstadual?.message}
                      label="Inscrição Estadual"
                      variant="outlined"
                      type="text"
                      fullWidth
                      required
                    />
                  </InputMask>
                )}
              />
            </Grid>
            <Grid item xs={12} required {...register('endereço')}>
              <TextField fullWidth id="endereço" label="Endereço" name="endereço" />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="telefones"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                  <InputMask mask="(99)99999-9999" value={value} onChange={onChange}>
                    <TextField
                      error={!!errors.telefones?.message}
                      label="Telefones"
                      variant="outlined"
                      type="text"
                      fullWidth
                      required
                    />
                  </InputMask>
                )}
              />
            </Grid>
            <Grid item container justifyContent="flex-end">
              <Button variant="contained"> Adicionar Telefone </Button>
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Cadastrar
          </Button>
        </form>
      </Box>
    </Container>
  );
}
