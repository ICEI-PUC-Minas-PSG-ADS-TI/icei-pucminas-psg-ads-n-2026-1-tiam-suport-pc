export class Usuario {
  constructor(id, nome, email, telefone, tipo) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
    this.tipo = tipo; // 'cliente' ou 'tecnico'
  }
}

export class Assistencia {
  constructor(id, tecnicoId, nome, latitude, longitude, avaliacao) {
    this.id = id;
    this.tecnicoId = tecnicoId;
    this.nome = nome;
    this.latitude = latitude;
    this.longitude = longitude;
    this.avaliacao = avaliacao;
  }
}