/* eslint-disable no-useless-escape */
import * as React from 'react';
import { Typography, Box, Container, Step, StepLabel, Stepper } from '@mui/material';

import Juridica from '../models/Juridica';
import Endereco from '../models/Endereco';
import CadastroJuridica from '../components/CadastroJuridica';
import CadastroFisica from '../components/CadastroFisica';

export default function CadastroUsuario() {
  const steps = ['Empresa', 'Usuario'];
  const [activeStep, setActiveStep] = React.useState(1);
  const [empresa, setEmpresa] = React.useState<Juridica | null>(null);

  const handleBackStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const onSubmitEmpresa = async (data: any) => {
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

    const empresa = new Juridica(razaoSocial, nomeFantasia, cnpj, inscricao_estadual, enderecoObj, telefones);
    setEmpresa(empresa);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const onSubmitUsuario = async (data: any) => {
    // TODO criar usuario e salvar
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
          <CadastroJuridica onSubmit={onSubmitEmpresa} />
        ) : (
          <CadastroFisica onSubmit={onSubmitUsuario} onBack={handleBackStep} />
        )}
      </Box>
    </Container>
  );
}
