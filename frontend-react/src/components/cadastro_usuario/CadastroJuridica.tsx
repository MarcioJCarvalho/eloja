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
import Juridica from '../../models/Juridica';

type CadastroJuridicaProps = {
  onSubmit: (data: any) => Promise<void>;
  juridica: Juridica | null;
};

export default function CadastroJuridica(props: CadastroJuridicaProps) {
  const { onSubmit, juridica } = props;
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
    if (juridica) {
      setValue('endereco', juridica.endereco);
      setValue('razaoSocial', juridica.razaoSocial);
      setValue('nomeFantasia', juridica.nomeFantasia);
      setValue('cnpj', juridica.cnpj);
      setValue('inscricao_estadual', juridica.inscricao_estadual);
      setValue('telefones', juridica.telefones);
    }
  }, []);

  const handleCep = async (evt: any) => {
    const response = await buscarCep(evt.target.value);
    setValue('endereco', response.data);
  };

  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormTextField name="nomeFantasia" label="Nome Fantasia" control={control} />
            </Grid>
            <Grid item xs={12}>
              <FormTextField name="razaoSocial" label="Razão Social" control={control} />
            </Grid>
            <Grid item xs={12}>
              <FormMaskField name="cnpj" label="CNPJ" control={control} mask="99.999.999/9999-99" />
            </Grid>
            <Grid item xs={12}>
              <FormMaskField
                name="inscricao_estadual"
                label="Inscrição Estadual"
                control={control}
                mask="999999999"
                rules={{ required: false }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormMaskField onBlur={handleCep} name="endereco.cep" label="CEP" control={control} mask="99999-999" />
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
              <FormTextField name="endereco.ibge" label="IBGE" control={control} />
            </Grid>
            <Grid item xs={12}>
              <FormTextField name="endereco.uf" label="UF" control={control} />
            </Grid>
            {fields.map((field, index) => (
              <>
                <Grid item xs={index > 0 ? 9 : 12} key={field.id}>
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
            <Grid item container justifyContent="flex-end">
              <Button onClick={addTelefone} variant="contained">
                Adicionar Telefone
              </Button>
            </Grid>
            <Grid item container justifyContent="flex-end"></Grid>
          </Grid>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button color="inherit" disabled={true} sx={{ mr: 1 }}>
              Voltar
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button type="submit">Proximo</Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
}
