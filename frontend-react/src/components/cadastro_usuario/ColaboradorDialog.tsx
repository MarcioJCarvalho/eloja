import {Dialog, DialogActions, DialogContent, DialogTitle, IconButton} from "@mui/material";
import Button from "@mui/material/Button";
import Usuario from "../../models/Usuario";
import {SubmitHandler, useForm} from "react-hook-form";
import Grid from "@mui/material/Grid";
import FormTextField from "../form/FormTextField";
import * as React from "react";
import {useEffect, useState} from "react";
import FormMaskField from "../form/FormMaskField";
import {buscarCep} from "../../services/cepService";
import {atualizarUsuario} from "../../services/UsuarioService";
import {toast} from "react-toastify";

export default function ColaboradorDialog({close, open, value}: any) {

  const [title, setTitle] = useState("Novo Colaborador");
  const {handleSubmit, control, setValue, reset} = useForm<Usuario>({defaultValues: value});

  // DidUpdate
  useEffect(() => {
    reset(value);
    handleTitle();
  }, [value]);

  const isUpdate = () => {
    return (value.id);
  };

  const handleTitle = () => {
    if (isUpdate()) {
      setTitle("Editar Colaborador");
    }
  };

  const handleCep = (e: any) => {
    const response = buscarCep(e.target.value)
      .then((response) => {
        setValue('fisica.endereco', response.data);
      })
      .catch((error) => {
        toast.error("Erro ao buscar endereço!");
        console.error(error);
      });
  };

  const onSubmit: SubmitHandler<Usuario> = (data) => {
    atualizarUsuario(data)
      .then((response) => {
        toast.success("Sucesso ao atualizar usuário!");
      })
      .catch((error) => {
        toast.error("Erro ao atualizar usuário!");
        console.error(error);
      });
  };

  const onError = () => {
    toast.error("Preencha todos os campos obrigatórios!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <Dialog disablePortal maxWidth={'md'} open={open}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent dividers>
          <Grid container spacing={2}>
            <Grid item xs={6} aria-label={"campo nome"}>
              <FormTextField control={control} name={"fisica.nome"} label={"Nome"}/>
            </Grid>
            <Grid item xs={6} aria-label={"campo sobrenome"}>
              <FormTextField control={control} name={"fisica.sobrenome"} label={"Sobrenome"}/>
            </Grid>
            <Grid item xs={12} aria-label={"campo cpf"}>
              <FormMaskField control={control} name={"fisica.cpf"} label={"CPF"} mask="999.999.999-99"/>
            </Grid>
            <Grid item xs={6} aria-label={"campo e-mail"}>
              <FormTextField control={control} name={"email"} label={"E-mail"}/>
            </Grid>
            <Grid item xs={6} aria-label={"campo senha"}>
              <FormTextField control={control} name={"senha"} label={"Senha"} type={"password"}/>
            </Grid>
            <Grid item xs={3}>
              <FormMaskField onBlur={handleCep} control={control} name={"fisica.endereco.cep"} label={"CEP"} mask={"99999-999"}/>
            </Grid>
            <Grid item xs={9}>
              <FormTextField control={control} name={"fisica.endereco.logradouro"} label={"Logradouro"}/>
            </Grid>
            <Grid item xs={3}>
              <FormTextField control={control} name={"fisica.endereco.numero"} label={"Número"}/>
            </Grid>
            <Grid item xs={9}>
              <FormTextField control={control} name={"fisica.endereco.complemento"} label={"Complemento"} rules={{required: false}}/>
            </Grid>
            <Grid item xs={8}>
              <FormTextField control={control} name={"fisica.endereco.bairro"} label={"Bairro"}/>
            </Grid>
            <Grid item xs={2}>
              <FormTextField control={control} name={"fisica.endereco.ibge"} rules={{required: false}} label={"IBGE"}/>
            </Grid>
            <Grid item xs={2}>
              <FormTextField control={control} name={"fisica.endereco.uf"} label={"UF"}/>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button type={"button"} color={'secondary'} onClick={close}>Cancelar</Button>
          <Button type={"submit"}>Salvar</Button>
        </DialogActions>
      </Dialog>
    </form>
  );
}
