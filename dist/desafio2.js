"use strict";
;
var Profissao;
(function (Profissao) {
    Profissao[Profissao["PROGRAMADOR"] = 0] = "PROGRAMADOR";
    Profissao[Profissao["MEDICO"] = 1] = "MEDICO";
    Profissao[Profissao["ANALISTA"] = 2] = "ANALISTA";
    Profissao[Profissao["GESTOR"] = 3] = "GESTOR";
})(Profissao || (Profissao = {}));
let pessoa1 = {
    nome: 'John',
    idade: 30,
    profissao: Profissao.PROGRAMADOR
};
let pessoa2 = {
    nome: 'Mary',
    idade: 25,
    profissao: Profissao.MEDICO
};
