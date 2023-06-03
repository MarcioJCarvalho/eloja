/* eslint-disable no-useless-escape */
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useForm } from 'react-hook-form';
import FormTextField from '../components/FormTextField';
import FormMaskField from '../components/FormMaskField';

export default function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

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
              <FormMaskField name="cnpj" label="cnpj" control={control} mask="99.999.999/9999-99" />
            </Grid>
            <Grid item xs={12}>
              <FormMaskField name="inscricaoEstadual" label="Inscrição Estadual" control={control} mask="999999999" />
            </Grid>
            <Grid item xs={12} required {...register('endereço')}>
              <FormTextField name="endereço" label="Endereço" control={control} />
            </Grid>
            <Grid item xs={12}>
              <FormMaskField name="telefones" label="Telefones" control={control} mask="(99)99999-9999" />
            </Grid>
            <Grid item container justifyContent="flex-end">
              <Button variant="contained">Adicionar Telefone</Button>
            </Grid>
            <Grid item container justifyContent="flex-end"></Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Cadastrar
          </Button>
        </form>
      </Box>
    </Container>
  );
}
