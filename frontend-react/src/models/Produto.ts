import Categoria from './Categoria';
import { TamanhoProduto } from './enums/TamanhoProduto';

class Produto {
  id?: number;
  nome: string;
  marca: string;
  cor?: string;
  descricao: string;
  valorDeCompra: number;
  valorDeVenda?: number;
  tamanho?: TamanhoProduto;
  categoria: Categoria;

  constructor(
    nome: string,
    marca: string,
    descricao: string,
    valorDeCompra: number,
    tamanho: TamanhoProduto,
    categoria: Categoria,
    id?: number,
    cor?: string,
    valorDeVenda?: number,
  ) {
    this.id = id;
    this.nome = nome;
    this.marca = marca;
    this.cor = cor;
    this.descricao = descricao;
    this.valorDeCompra = valorDeCompra;
    this.valorDeVenda = valorDeVenda;
    this.tamanho = tamanho;
    this.categoria = categoria;
  }
}

export default Produto;
