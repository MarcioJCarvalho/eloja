import Endereco from './Endereco';
import Telefone from './Telefone';

class Juridica {
  id?: number;
  razaoSocial: string;
  nomeFantasia: string;
  cnpj: string;
  inscricao_estadual?: string;
  endereco: Endereco;
  telefones: Telefone[];

  constructor(
    razaoSocial: string,
    nomeFantasia: string,
    cnpj: string,
    inscricao_estadual: string,
    endereco: Endereco,
    telefones: Telefone[],
    id?: number,
  ) {
    this.id = id;
    this.razaoSocial = razaoSocial;
    this.nomeFantasia = nomeFantasia;
    this.cnpj = cnpj;
    this.inscricao_estadual = inscricao_estadual;
    this.endereco = endereco;
    this.telefones = telefones;
  }
}

export default Juridica;
