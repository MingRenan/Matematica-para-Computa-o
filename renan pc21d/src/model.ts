// Definição da classe base Pessoa
export class Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }
}

// Definição da classe Estudante que herda de Pessoa
export class Estudante extends Pessoa {
    registroAcademico: string;
    anoIngresso: number;
    semestreIngresso: string;

    constructor(nome: string, idade: number, registroAcademico: string, anoIngresso: number, semestreIngresso: string) {
        super(nome, idade);
        this.registroAcademico = registroAcademico;
        this.anoIngresso = anoIngresso;
        this.semestreIngresso = semestreIngresso;
    }
}
