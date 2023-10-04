import * as React from 'react';
import { Avatar, Box, Button, Container, Fab, Grid, Stack } from '@mui/material';
import FormTextField from '../components/form/FormTextField';
import { useFieldArray, useForm } from 'react-hook-form';
import FormMaskField from '../components/form/FormMaskField';
import { CadastroJuridicaProps } from '../components/cadastro_usuario/CadastroJuridica';
import { buscarCep } from '../services/cepService';
import FormNumberField from '../components/form/FormNumberField';
import EditIcon from '@mui/icons-material/Edit';
import { deepPurple } from '@mui/material/colors';
import { getUsuarioById } from "../services/UsuarioService"
import { useEffect } from 'react';

export default function PerfilEmpresa(props: CadastroJuridicaProps) {
    const { onSubmit, juridica } = props;
    const { handleSubmit, control, setValue } = useForm();
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'telefones',
    });


    useEffect(() => {
        getUsuarioById(7);
        debugger
    });

    const addTelefone = () => {
        append({ numero: '' });
    };

    const handleCep = async (evt: any) => {
        const response = await buscarCep(evt.target.value);
        setValue('endereco', response.data);
    };



    return (
        <Container component="main" maxWidth="md">
            <Box sx={{
                marginTop: 8,
            }}>
                <Stack alignItems={'center'} spacing={2}>
                    <Avatar sx={{
                        bgcolor: deepPurple[500],
                        width: 150,
                        height: 150,
                    }}>PH</Avatar>
                </Stack>
            </Box>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            ></Box>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <FormTextField name="nomeFantasia" label="Nome Fantasia" control={control} />
                    </Grid>
                    <Grid item xs={6}>
                        <FormTextField name="razaoSocial" label="Razão Social" control={control} />
                    </Grid>
                    <Grid item xs={6}>
                        <FormMaskField name="cnpj" label="CNPJ" control={control} mask="99.999.999/9999-99" />
                    </Grid>
                    <Grid item xs={6}>
                        <FormMaskField
                            name="inscricao_estadual"
                            label="Inscrição Estadual"
                            control={control}
                            mask="999999999"
                            rules={{ required: false }} />
                    </Grid>
                    <Grid item xs={6}>
                        <FormMaskField onBlur={handleCep} name="endereco.cep" label="CEP" control={control} mask="99999-999" />
                    </Grid>
                    <Grid item xs={6}>
                        <FormTextField name="endereco.logradouro" label="Logradouro" control={control} />
                    </Grid>
                    <Grid item xs={6}>
                        <FormNumberField name="endereco.numero" label="Numero" control={control} />
                    </Grid>
                    <Grid item xs={6}>
                        <FormTextField
                            name="endereco.complemento"
                            label="Complemento"
                            control={control}
                            rules={{ required: false }} />
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
                                    mask="(99)99999-9999" />
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
                <Box sx={{ '& > :not(style)': { m: 1 } }}>
                    <Fab color="primary" aria-label="edit">
                        <EditIcon />
                    </Fab>
                </Box>
            </form>

        </Container>
    );
}



