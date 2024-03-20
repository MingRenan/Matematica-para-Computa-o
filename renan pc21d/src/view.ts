import { Pessoa, Estudante } from "./model";

// Exemplo de uso das classes
const pessoa1 = new Pessoa("Maria", 25);
console.log("Nome da Pessoa:", pessoa1.nome);
console.log("Idade da Pessoa:", pessoa1.idade);

const estudante1 = new Estudante("João", 20, "20220001", 2022, "Primeiro");
console.log("\nNome do Estudante:", estudante1.nome);
console.log("Idade do Estudante:", estudante1.idade);
console.log("Registro Acadêmico do Estudante:", estudante1.registroAcademico);
console.log("Ano de Ingresso do Estudante:", estudante1.anoIngresso);
console.log("Semestre de Ingresso do Estudante:", estudante1.semestreIngresso);
