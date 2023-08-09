class Endereco {
  id?: number;
  cep: string;
  logradouro: string;
  numero: string;
  complemento?: string;
  bairro: string;
  ibge: string;
  uf: string;

  constructor(
    cep: string,
    logradouro: string,
    numero: string,
    complemento: string,
    bairro: string,
    ibge: string,
    uf: string,
    id?: number,
  ) {
    this.id = id;
    this.cep = cep;
    this.logradouro = logradouro;
    this.numero = numero;
    this.complemento = complemento;
    this.bairro = bairro;
    this.ibge = ibge;
    this.uf = uf;
  }
}

export default Endereco;
