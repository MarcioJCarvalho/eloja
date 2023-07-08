import Endereco from './Endereco';
import Telefone from './Telefone';

class Fisica {
  id?: number;
  nome: string;
  sobrenome: string;
  cpf: string;
  endereco: Endereco;
  telefones: Telefone[];

  constructor(nome: string, sobrenome: string, cpf: string, endereco: Endereco, telefones: Telefone[], id?: number) {
    this.id = id;
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.cpf = cpf;
    this.endereco = endereco;
    this.telefones = telefones;
  }
}

export default Fisica;
