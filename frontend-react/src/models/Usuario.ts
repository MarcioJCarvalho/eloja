import Fisica from './Fisica';
import Juridica from './Juridica';

class Usuario {
  id?: number;
  email?: string;
  senha?: string;
  fisica?: Fisica;
  juridica?: Juridica;

  constructor(email?: string, senha?: string, fisica?: Fisica, juridica?: Juridica, id?: number) {
    this.id = id;
    this.email = email;
    this.senha = senha;
    this.fisica = fisica;
    this.juridica = juridica;
  }
}

export default Usuario;
