import {
  Box,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";
import * as React from "react";
import Usuario from "../models/Usuario";
import {Component} from "react";
import {getAllUsuarios} from "../services/UsuarioService";
import Fisica from "../models/Fisica";
import Endereco from "../models/Endereco";

export class Usuarios extends Component {

  private rows: Usuario[] = [
    new Usuario(
      'yagom.ym@gmail.com',
      null,
      new Fisica(
        'Yago',
        'Macinelli',
        '11100022233',
        null,
        null,
        null),
      null,
      1
    )
  ];

  componentDidMount() {
    getAllUsuarios()
      .then(response => {
        console.log(response);
      });
  }

  render() {
    return <Container component="main" maxWidth="md" sx={{ marginY: '3rem' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Usuários
        </Typography>
        <TableContainer component={Paper}>
          <Table aria-label={"tabela usuários"}>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Nome</TableCell>
                <TableCell>E-mail</TableCell>
                <TableCell>CPF</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.rows.map(row => (
                <TableRow key={row.id}>
                  <TableCell>{row.fisica.nome} {row.fisica.sobrenome}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.fisica.cpf}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  }
}
