import {
  Box,
  Container,
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
import {Component} from "react";
import {getAllUsuarios} from "../services/UsuarioService";
import {DataSource} from "../models/DataSource";

export class Usuarios extends Component<any, any> {

  state = {
    dataSource: new DataSource(),
    page: 5,
  }

  componentDidMount() {
    getAllUsuarios()
      .then((response) => {
        console.log(response?.data);
        this.setDataSource(response?.data);
      });
  }

  setDataSource(data: DataSource): void {
    this.setState({dataSource: data});
  }

  getDataSource(): DataSource {
    return this.state.dataSource;
  }

  setPage(page: number): void {
    this.setState({page: page});
  }

  getPage(): number {
    return this.state.page;
  }

  handleChangePage(e: unknown, page: number): void {
    this.setPage(page);
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
              {this.getDataSource().content.map(row => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.fisica.nome} {row.fisica.sobrenome}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.fisica.cpf}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  count={this.getDataSource().totalElements}
                  page={this.getDataSource().number}
                  rowsPerPage={this.getPage()}
                  rowsPerPageOptions={[5, 10]}
                  onPageChange={this.handleChangePage}/>
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  }
}
