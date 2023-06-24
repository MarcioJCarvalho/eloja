/* eslint-disable no-useless-escape */
import * as React from 'react';
import { useEffect } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useFieldArray, useForm } from 'react-hook-form';
import FormTextField from '../components/FormTextField';
import FormNumberField from '../components/FormNumberField';
import FormMaskField from '../components/FormMaskField';
import { buscarCep } from '../services/cepService';
import Empresa from '../models/Empresa';
import Endereco from '../models/Endereco';
import { salvarEmpresa } from '../services/empresaService';

export default function SignUp() {
  const { handleSubmit, control, setValue } = useForm();

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'telefones',
  });

  const onSubmit = async (data: any) => {
    const { razaoSocial, nomeFantasia, cnpj, inscricao_estadual, endereco, telefones } = data;
    const enderecoObj = new Endereco(
      endereco.cep,
      endereco.logradouro,
      endereco.numero,
      endereco.complemento,
      endereco.bairro,
      endereco.ibge,
      endereco.uf,
    );

    const empresa = new Empresa(razaoSocial, nomeFantasia, cnpj, inscricao_estadual, enderecoObj, telefones);
    //TODO QUANDO TIVER UM BACK LOCAL FUNCIONAL TRATAR A RESPONSE
    const response = await salvarEmpresa(empresa);
  };

  const addTelefone = () => {
    append({ numero: '' });
  };

  useEffect(() => {
    if (fields.length === 0) addTelefone();
  }, []);

  const handleCep = async (evt: any) => {
    const response = await buscarCep(evt.target.value);
    setValue('endereco', response.data);
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
              <FormMaskField name="cnpj" label="cnpj" control={control} mask="99.999.999/9999-99" />
            </Grid>
            <Grid item xs={12}>
              <FormMaskField
                name="inscricaoEstadual"
                label="Inscrição Estadual"
                control={control}
                mask="999999999"
                rules={{ required: false }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormMaskField onBlur={handleCep} name="endereco.cep" label="cep" control={control} mask="99999-999" />
            </Grid>
            <Grid item xs={12}>
              <FormTextField name="endereco.logradouro" label="Logradouro" control={control} />
            </Grid>
            <Grid item xs={12}>
              <FormNumberField name="endereco.numero" label="Numero" control={control} />
            </Grid>
            <Grid item xs={12}>
              <FormTextField
                name="endereco.complemento"
                label="Complemento"
                control={control}
                rules={{ required: false }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormTextField name="endereco.bairro" label="Bairro" control={control} />
            </Grid>
            <Grid item xs={12}>
              <FormTextField name="endereco.ibge" label="ibge" control={control} />
            </Grid>
            <Grid item xs={12}>
              <FormTextField name="endereco.uf" label="uf" control={control} />
            </Grid>
            {fields.map((field, index) => (
              <>
                <Grid item xs={index > 0 ? 9 : 12} key={field.id}>
                  <FormMaskField
                    name={`telefones[${index}].numero`}
                    label={`telefone ${index + 1}`}
                    control={control}
                    mask="(99)99999-9999"
                  />
                </Grid>
                {index > 0 ? (
                  <Grid item xs={3} key={field.id}>
                    <Button onClick={() => remove(index)} variant="contained" color="error" sx={{ mt: 0.5, mb: 2 }}>
                      Remover Telefone
                    </Button>
                  </Grid>
                ) : (
                  <></>
                )}
              </>
            ))}
            <Grid item container justifyContent="flex-end">
              <Button onClick={addTelefone} variant="contained">
                Adicionar Telefone
              </Button>
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
