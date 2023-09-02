import {Dialog, DialogActions, DialogContent, DialogTitle, IconButton} from "@mui/material";
import Button from "@mui/material/Button";
import {CloseOutlined} from "@mui/icons-material";
import Usuario from "../../models/Usuario";
import {useForm} from "react-hook-form";
import Grid from "@mui/material/Grid";
import FormTextField from "../form/FormTextField";
import * as React from "react";
import {useEffect, useState} from "react";
import FormMaskField from "../form/FormMaskField";

export default function ColaboradorDialog(props: any) {

  const [title, setTitle] = useState("Novo Colaborador");
  const {control, setValue} = useForm(props.usuario);

  // DidMount
  useEffect(() => {
    handleTitle(props.usuario);
  }, []);

  const handleTitle = (usuario: Usuario) => {
    if (usuario && usuario.id) {
      setTitle("Editar Colaborador");
    }
  };

  const handleSubmit = () => {

  };

  return (
    <Dialog open={props.open}>
      <DialogTitle>
        <DialogTitle>{title}</DialogTitle>
      </DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={6} aria-label={"campo nome"}>
              <FormTextField control={control} name={"nome"} label={"Nome"}/>
            </Grid>
            <Grid item xs={6} aria-label={"campo sobrenome"}>
              <FormTextField control={control} name={"sobrenome"} label={"Sobrenome"}/>
            </Grid>
            <Grid item xs={12} aria-label={"campo cpf"}>
              <FormTextField control={control} name={"cpf"} label={"CPF"}/>
            </Grid>
            <Grid item xs={6} aria-label={"campo e-mail"}>
              <FormTextField control={control} name={"email"} label={"E-mail"}/>
            </Grid>
            <Grid item xs={6} aria-label={"campo senha"}>
              <FormTextField control={control} name={"senha"} label={"Senha"} type={"password"}/>
            </Grid>
            <Grid item xs={3}>
              <FormMaskField control={control} name={"cep"} label={"CEP"} mask={"99999-999"}/>
            </Grid>
            <Grid item xs={9}>
              <FormTextField control={control} name={"logradouro"} label={"Logradouro"}/>
            </Grid>
            <Grid item xs={3}>
              <FormTextField control={control} name={"numero"} label={"Número"}/>
            </Grid>
            <Grid item xs={9}>
              <FormTextField control={control} name={"complemento"} label={"Complemento"}/>
            </Grid>
            <Grid item xs={8}>
              <FormTextField control={control} name={"bairro"} label={"Bairro"}/>
            </Grid>
            <Grid item xs={2}>
              <FormTextField control={control} name={"ibge"} label={"IBGE"}/>
            </Grid>
            <Grid item xs={2}>
              <FormTextField control={control} name={"uf"} label={"UF"}/>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
      <DialogActions>
        <Button color={'secondary'} onClick={props.close}>Cancelar</Button>
        <Button>Salvar</Button>
      </DialogActions>
    </Dialog>
  );
}
