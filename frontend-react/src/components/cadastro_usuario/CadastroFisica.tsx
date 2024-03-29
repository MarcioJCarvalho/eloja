/* eslint-disable no-useless-escape */
import * as React from 'react';
import { useEffect } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useFieldArray, useForm } from 'react-hook-form';
import FormTextField from '../form/FormTextField';
import FormNumberField from '../form/FormNumberField';
import FormMaskField from '../form/FormMaskField';
import { buscarCep } from '../../services/cepService';
import { Typography } from '@mui/material';
type CadastroFisicaProps = {
  onSubmit: (data: any) => Promise<void>;
  onBack: () => void;
};

export default function CadastroFisica(props: CadastroFisicaProps) {
  const { onSubmit, onBack } = props;
  const { handleSubmit, control, setValue } = useForm();

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'telefones',
  });

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
    <Container maxWidth="xl" component="main">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container maxWidth="xl" spacing={2}>
            <Grid item xs={12}>
              <Typography component="h6" variant="h6">
                Dados do usuario:
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <FormTextField name="nome" label="Nome" control={control} />
            </Grid>
            <Grid item xs={12} md={4}>
              <FormTextField name="sobrenome" label="Sobrenome" control={control} />
            </Grid>
            <Grid item xs={12} md={4}>
              <FormMaskField name="cpf" label="CPF" control={control} mask="999.999.999-99" />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormTextField name="email" label="Email" control={control} />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormTextField type="password" name="senha" label="Senha" control={control} />
            </Grid>
            {fields.map((field, index) => (
              <>
                <Grid item xs={12} md={index > 0 ? 6 : 9} key={field.id}>
                  <FormMaskField
                    name={`telefones[${index}].numero`}
                    label={'Telefone'}
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
            <Grid item xs={3} justifyContent="flex-end">
              <Button onClick={addTelefone} variant="contained">
                Adicionar Telefone
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography component="h6" variant="h6">
                Endereco:
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <FormMaskField onBlur={handleCep} name="endereco.cep" label="CEP" control={control} mask="99999-999" />
            </Grid>
            <Grid item xs={12} md={4}>
              <FormTextField name="endereco.logradouro" label="Logradouro" control={control} />
            </Grid>
            <Grid item xs={12} md={4}>
              <FormNumberField name="endereco.numero" label="Numero" control={control} />
            </Grid>
            <Grid item xs={12} md={3}>
              <FormTextField
                name="endereco.complemento"
                label="Complemento"
                control={control}
                rules={{ required: false }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <FormTextField name="endereco.bairro" label="Bairro" control={control} />
            </Grid>
            <Grid item xs={12} md={3}>
              <FormTextField name="endereco.ibge" label="IBGE" control={control} />
            </Grid>
            <Grid item xs={12} md={2}>
              <FormTextField name="endereco.uf" label="UF" control={control} />
            </Grid>
          </Grid>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button variant="contained" color="inherit" onClick={onBack} sx={{ mr: 1 }}>
              Voltar
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button variant="contained" type="submit">
              Salvar
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
}
