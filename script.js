// Crie um arquivo com o script necessário para resolução do exercício
// considerando o seguinte array:
// 1. Imprima no console a quantidade de pessoas Total.
// 2. Imprima no console a quantidade de pessoas pessoas do sexo
// Feminino.
// 3. Imprima no console a soma do salário de todas as pessoas.
// 4. Imprima no console a média do salário de todas as pessoas.
// 5. Imprima no console a soma do salário de todos as pessoas do sexo
// Masculino
// 6. Imprima no console a média do salário de todas as pessoas do sexo
// Masculino
// 7. Utilize a função Some, para descobrir se existe algum salário
// superior a R$ 7.000, imprima verdadeiro no console caso exista, caso
// contrário falso.
// 8. Utilize a função findIndex, para descobrir a posição da pessoa de
// nome 'Eva Trindade'.
// 9. Utilize a função filter, para filtrar todas pessoas que o nome possua o
// sobrenome "Silva".
// 10. Imprima os nomes utilizando o MAP

const data = [
  {
    nome: "Roger Medeiros",
    sexo: "M",
    salario: 3250,
  },
  {
    nome: "Carolina Silva",
    sexo: "F",
    salario: 1200,
  },
  {
    nome: "Cristina Avila",
    sexo: "F",
    salario: 8100,
  },
  {
    nome: "Gustavo Hoffman",
    sexo: "M",
    salario: 5200.35,
  },
  {
    nome: "Eva Trindade",
    sexo: "F",
    salario: 2501,
  },
  {
    nome: "Andre Mathias",
    sexo: "M",
    salario: 1750,
  },
  {
    nome: "Joice Castro da Silva",
    sexo: "F",
    salario: 3350.25,
  },
];

// 1 Imprima no console a quantidade de pessoas Total.

let quantidadePessoas = data.length;
console.log("Quantidade de pessoas ", quantidadePessoas);

// 2 Imprima no console a quantidade de pessoas pessoas do sexo Feminino.

let filtroFeminino = data.filter((pessoas) => pessoas.sexo == "F").length;
console.log("Quantidade de pessoas do sexo feminino ", filtroFeminino);

// 3 Imprima no console a soma do salário de todas as pessoas.

let somaSalarios = data.reduce((acc, curr) => acc + curr.salario, 0);
console.log("Soma do salario de todas as pessoas ", somaSalarios);

// 4 Imprima no console a média do salário de todas as pessoas.

console.log((somaSalarios / quantidadePessoas).toFixed(2));

// 5 Imprima no console a soma do salário de todos as pessoas do sexo Masculino
let SomaSalarioMasculino = data
  .filter((pessoas) => pessoas.sexo == "M")
  .reduce((acc, curr) => acc + curr.salario, 0);
console.log("Soma salario masculino", SomaSalarioMasculino);

// 6 Imprima no console a média do salário de todas as pessoas do sexo Masculino
let filtroMasculino = data.filter((pessoas) => pessoas.sexo == "M").length;
console.log(
  "Media salario masculino",
  (SomaSalarioMasculino / filtroMasculino).toFixed(2)
);

// 7 Utilize a função Some, para descobrir se existe algum salário
// superior a R$ 7.000, imprima verdadeiro no console caso exista, caso
// contrário falso.

let salarioMaior = data.some((salario) => salario.salario > 7000);
console.log("Salarios superior a 7000", salarioMaior);

// 8 Utilize a função findIndex, para descobrir a posição da pessoa de nome 'Eva Trindade'.

console.log(
  "Posiçao do nome Eva Trindade ",
  data.findIndex((pessoa) => pessoa.nome == "Eva Trindade")
);

// 9 Utilize a função filter, para filtrar todas pessoas que o nome possua o sobrenome "Silva".

console.log(
  "Pessoas com o nome SILVA",
  data.filter((pessoas) => pessoas.nome.includes("Silva"))
);

// 10 Imprima os nomes utilizando o MAP

console.log(
  "TODOS OS NOMES",
  data.map((pessoas) => pessoas.nome)
);
<<<<<<< Updated upstream
=======

console.log("testar PR");
>>>>>>> Stashed changes
