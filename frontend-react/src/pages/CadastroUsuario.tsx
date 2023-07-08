/* eslint-disable no-useless-escape */
import * as React from 'react';
import { Typography, Box, Container, Step, StepLabel, Stepper } from '@mui/material';

import Juridica from '../models/Juridica';
import Usuario from '../models/Usuario';
import Fisica from '../models/Fisica';
import Endereco from '../models/Endereco';
import CadastroJuridica from '../components/CadastroJuridica';
import CadastroFisica from '../components/CadastroFisica';

export default function CadastroUsuario() {
  const steps = ['Juridica', 'Usuario'];
  const [activeStep, setActiveStep] = React.useState(1);
  const [juridica, setJuridica] = React.useState<Juridica | null>(null);

  const handleBackStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const onSubmitJuridica = async (data: any) => {
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

    const juridica = new Juridica(razaoSocial, nomeFantasia, cnpj, inscricao_estadual, enderecoObj, telefones);
    setJuridica(juridica);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const onSubmitUsuario = async (data: any) => {
    const { nome, sobrenome, cpf, email, senha, endereco, telefones } = data;
    const enderecoObj = new Endereco(
      endereco.cep,
      endereco.logradouro,
      endereco.numero,
      endereco.complemento,
      endereco.bairro,
      endereco.ibge,
      endereco.uf,
    );

    const fisica = new Fisica(nome, sobrenome, cpf, enderecoObj, telefones);
    if (juridica) {
      const usuario = new Usuario(email, senha, fisica, juridica);
    }
  };

  return (
    <Container component="main" maxWidth="md" sx={{ marginY: '3rem' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Novo usuario
        </Typography>
        <Box sx={{ width: '100%' }} my={'1.5rem'}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => {
              const stepProps: { completed?: boolean } = {};
              const labelProps: {
                optional?: React.ReactNode;
              } = {};
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </Box>
        {activeStep === 0 ? (
          <CadastroJuridica onSubmit={onSubmitJuridica} />
        ) : (
          <CadastroFisica onSubmit={onSubmitUsuario} onBack={handleBackStep} />
        )}
      </Box>
    </Container>
  );
}
