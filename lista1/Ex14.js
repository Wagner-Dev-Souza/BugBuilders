/**
 * Exercício 14
 * ------------
 * 
 * Dado um array de pessoas:
 */
let pessoas = [{
    nome: "Jurupinga",
    sobrenome: "Jackson",
    idade: 80
},
{
    nome: "Frederico",
    sobrenome: "Mercury",
    idade: 2
},
{
    nome: "Brasil",
    sobrenome: "Hilton",
    idade: 5
},
{
    nome: "Tiririca",
    sobrenome: "Sangalo",
    idade: 16
},
{
    nome: "Bob",
    sobrenome:"Ralley", 
    idade: 100
}]

// 1. Retorne um array com as seguintes condições:
//           a. "Pode dirigir" se a idade das pessoas for maior ou igual a 18 anos
//           b. "Não pode dirigir" se a idade das pessoas for menor que 18 anos.
//     Resultado esperado: ["Pode dirigir", "Não pode dirigir", ...]
let maioridade = pessoas.map(pessoa => pessoa.idade >= 18 ? "Pode dirigir" : "Não pode dirigir");
console.log(maioridade)

// 2. Retorne um array contendo uma breve apresentação da pessoa, conforme modelo: "Olá <nome_completo>!!! Você tem <anos_pessoa> anos."
//    Resultado Esperado: 
//      [
//        "Olá Jurupinga Jackson!!! você tem 80 anos.", 
//        "Olá Frederico Mercury!!! você tem 2 anos.",
//        ...
//      ]
let ola = pessoas.map(pessoa => `Olá ${pessoa.nome} ${pessoa.sobrenome}!!! Você tem ${pessoa.idade} anos.`)
console.log(ola)

// 3. Um ano se passou, portanto precisamos retornar um array com as idades das pessoas acrescida em 1.
//    Resultado esperado: [{
//              nome: "Jurupinga",
//              sobrenome: "Jackson",
//              idade: 81
//          },
//          {
//              nome: "Frederico",
//              sobrenome: "Mercury",
//              idade: 3
//          },
//          ...
//      ]   
let anoQueVem = pessoas.map(pessoa => ({...pessoa, idade : pessoa.idade + 1}))
console.log(anoQueVem)

// 4. Retorne um array que contenha os nomes das pessoas CAPITALIZED
//     Retorno esperado: ["JURUPINGA JACKSON", "FREDERICO MERCURY", ...]
let capitalizado = pessoas.map(pessoa => [pessoa.nome, pessoa.sobrenome].join(' ').toUpperCase())
console.log(capitalizado)

// 5. Retorne um array de pessoas que contenha o campo nomeCompleto
//    Retorno esperado: [{
//              nome: "Jurupinga",
//              sobrenome: "Jackson",
//              nomeCompleto: "Jurupinga Jackson",
//              idade: 81
//          },
//          {
//              nome: "Frederico",
//              sobrenome: "Mercury",
//              nomeCompleto: "Frederico Mercury",
//              idade: 3
//          },
//          ...
//      ]   
let nomeCompleto = anoQueVem.map(pessoa => ({...pessoa, nomeCompleto: [pessoa.nome, pessoa.sobrenome].join(' ')}))
console.log(nomeCompleto)

// 6. Retorne um array que contenha a quantidade de letras do nome e sobrenome de cada pessoa
//     Retorno esperado: [{
//               qtdeNome: 9,       // quantidade de letras do nome Jurupinga
//               qtdeSobrenome: 7,  // quantidade de letras do nome Jackson
//           },
//           {
//               qtdeNome: 9,       // quantidade de letras do nome Frederico
//               qtdeSobrenome: 7,  // quantidade de letras do nome Mercury
//           },
//           {
//               qtdeNome: 6,       // quantidade de letras do nome Brasil
//               qtdeSobrenome: 6,  // quantidade de letras do nome Hilton
//           }
//           ...
//       ]     
let qtdLetras = pessoas.map(pessoa => ({qtdeNome: pessoa.nome.length, qtdeSobrenome: pessoa.sobrenome.length}))
console.log(qtdLetras)