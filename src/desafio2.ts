interface IPessoa {
  nome: string;
  idade: number;
  profissao: Profissao;
};

enum Profissao {
  PROGRAMADOR,
  MEDICO,
  ANALISTA,
  GESTOR
}

let pessoa1: IPessoa = {
  nome: 'John',
  idade: 30,
  profissao: Profissao.PROGRAMADOR
};

let pessoa2: IPessoa = {
  nome: 'Mary',
  idade: 25,
  profissao: Profissao.MEDICO
};