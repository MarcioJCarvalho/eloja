import {
  Box,
  Container, IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer, TableFooter,
  TableHead, TablePagination,
  TableRow,
  Typography
} from "@mui/material";
import * as React from "react";
import {useEffect, useState} from "react";
import {deletarUsuario, getAllUsuarios} from "../services/UsuarioService";
import {DataSource} from "../models/DataSource";
import Button from "@mui/material/Button";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";
import {AddOutlined, DeleteOutlined, EditOutlined} from "@mui/icons-material";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import ColaboradorDialog from "../components/cadastro_usuario/ColaboradorDialog";
import Usuario from "../models/Usuario";

export default function ColaboradorPage() {

  const [dataSource, setDataSource] = useState(new DataSource());
  const [pageActions, setPageActions] = useState({page: 0, rowsPerPage: 5});
  const [openDialog, setOpenDialog] = useState(false);
  const [usuario, setUsuario] = useState(new Usuario());

  // DidMount
  useEffect(() => {
    getUsuarios();
  }, []);

  // DidUpdate
  useEffect(() => {
    getUsuarios();
  }, [pageActions]);

  const getUsuarios = () => {
    getAllUsuarios(pageActions.page, pageActions.rowsPerPage)
      .then((response) => {
        setDataSource(response?.data);
      });
  };

  const handleCreate = () => {
    setUsuario(new Usuario());
    setOpenDialog(true);
  };

  const handleUpdate = (usuario: Usuario) => {
    setUsuario(usuario);
    setOpenDialog(true);
  };

  const handleDelete = (id: number) => {
    deletarUsuario(id)
      .then(response => {
        toast.success("Sucesso ao deletar usuário!");
      })
      .catch(error => {
        toast.error("Erro ao deletar usuário!");
    });
  };

  const handleCloseDialog = () => {
    setOpenDialog(false)
  };

  const resetPageActions = () => {
    setPageActions({page: 0, rowsPerPage: 5});
  }

  const handleSubmitDialog = () => {
    resetPageActions();
    getUsuarios();
  };

  const handleRowsPerPageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPageActions({page: 0, rowsPerPage: parseInt(e.target.value, 10)});
  };

  const handlePageChange = (e: React.MouseEvent<HTMLButtonElement> | null, page: number) => {
    setPageActions({...pageActions, page: page});
  };

  return (
    <Container component="main" maxWidth="md" sx={{marginY: '3rem'}}>
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Typography component="h2" variant="h5">
          Colaboradores
        </Typography>
        <Button variant={"outlined"}
                aria-label={"botão novo"}
                endIcon={<AddOutlined/>}
                onClick={handleCreate}>Novo</Button>
        <TableContainer component={Paper}>
          <Table aria-label={"tabela usuários"}>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Nome</TableCell>
                <TableCell>E-mail</TableCell>
                <TableCell>CPF</TableCell>
                <TableCell>Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataSource.content.map(row => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.fisica.nome} {row.fisica.sobrenome}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.fisica.cpf}</TableCell>
                  <TableCell>
                    <IconButton aria-label={"botão editar"} onClick={() => handleUpdate(row)}><EditOutlined/></IconButton>
                    <IconButton aria-label={"botão deletar"} onClick={() => handleDelete(row.id)}><DeleteOutlined/></IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPage={pageActions.rowsPerPage}
                  rowsPerPageOptions={[5, 10]}
                  onRowsPerPageChange={handleRowsPerPageChange}
                  count={dataSource.totalElements}
                  page={dataSource.number}
                  onPageChange={handlePageChange}
                  ActionsComponent={TablePaginationActions}/>
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
        <ColaboradorDialog open={openDialog} close={handleCloseDialog} submit={handleSubmitDialog} value={usuario}/>
        <ToastContainer/>
      </Box>
    </Container>
  );
}
