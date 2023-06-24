class Telefone {
  id?: number;
  numero: string;

  constructor(numero: string, id?: number) {
    this.id = id;
    this.numero = numero;
  }
}

export default Telefone;
