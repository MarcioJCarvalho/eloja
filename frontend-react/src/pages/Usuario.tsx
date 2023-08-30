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
import {Component, ReactElement} from "react";
import {getAllUsuarios} from "../services/UsuarioService";
import {DataSource} from "../models/DataSource";
import Button from "@mui/material/Button";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import {UsuarioComponent} from "../components/usuario/Usuario.component";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";

export class Usuario extends Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      dataSource: new DataSource(),
      page: 1,
      rowsPerPage: 5
    };
  }

  componentDidMount() {
    this.getAllUsuarios();
  }

  componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
    if (prevState.page != this.getPage() || prevState.rowsPerPage != this.getRowsPerPage()) {
      this.getAllUsuarios();
    }
  }

  getAllUsuarios(): void {
    getAllUsuarios(this.getPage(), this.getRowsPerPage())
      .then((response) => {
        this.setDataSource(response?.data);
      });
  }

  handleNewUsuario(): ReactElement {
    return <UsuarioComponent></UsuarioComponent>;
  }

  setDataSource(data: DataSource): void {
    this.setState({dataSource: data});
  }

  getDataSource(): DataSource {
    return this.state.dataSource;
  }

  getRowsPerPage(): number {
    return this.state.rowsPerPage;
  }

  setPage(page: number): void {
    this.setState({page: page});
  }

  getPage(): number {
    return this.state.page;
  }

  handleChangePage = (e: React.MouseEvent<HTMLButtonElement> | null, page: number) => {
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
        <Button variant={"contained"}
                aria-label={"botão novo"}
                endIcon={<AddOutlinedIcon/>}>Novo</Button>
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
                  rowsPerPage={this.getRowsPerPage()}
                  rowsPerPageOptions={[5, 10]}
                  count={this.getDataSource().totalElements}
                  page={this.getDataSource().number}
                  onPageChange={this.handleChangePage}
                  ActionsComponent={TablePaginationActions}/>
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  }
}
