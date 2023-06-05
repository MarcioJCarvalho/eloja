import Endereco from './Endereco';
import Telefone from './Telefone';

class Empresa {
  id?: number;
  razaoSocial: string;
  nomeFantasia: string;
  cnpj: string;
  inscricao_estadual?: string;
  endereco: Endereco;
  telefones: Telefone[];
}

export default Empresa;
