import {Dialog, DialogActions, DialogContent, DialogTitle, IconButton} from "@mui/material";
import {useState} from "react";
import Button from "@mui/material/Button";
import {CloseOutlined} from "@mui/icons-material";
import Usuario from "../../models/Usuario";

export default function ColaboradorDialog(props: any) {

  const handleTitle = (usuario: Usuario) => {
    if (usuario && usuario.id) {
      return (<DialogTitle>Editar Colaborador</DialogTitle>);
    }
    return (<DialogTitle>Novo Colaborador</DialogTitle>);
  };

  return (
    <Dialog open={props.open}>
      {handleTitle(props.usuario)}
      <IconButton aria-label={"botão fechar"} onClick={props.close}><CloseOutlined/></IconButton>
      <DialogContent>

      </DialogContent>
      <DialogActions>
        <Button>Salvar</Button>
      </DialogActions>
    </Dialog>
  );
}
