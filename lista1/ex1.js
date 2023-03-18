/**
 * Exercício 1
 * ------------
 * Crie um objeto JS com os seus dados pessoais (pode inventar) que contenham os campos
 * nome
 * sobrenome
 * idade
 * endereço
 * telefone
 * hobbies (coisas que gostam de fazer)
 * 
 * 1. Imprima o campo nome a partir desse objeto.
 * 2. Imprima o campo telefone a partir desse objeto.
 * 3. Usando a técnica destructuring capture e imprima nome, idade e endereço desse objeto.
 * 4. Usando a técnica de spread operator, crie um novo objeto a partir do objeto existente adicionando o campo sexo.
 * 5. Usando uma estrutura de repetição, imprima todos os hobbies desse objeto.
 */

const dadosPessoais = {
    nome: 'Wagner',
    sobrenome: 'Souza',
    idade: 37,
    endereco: 'Rua Dracy Ribeiro 6',
    telefone: '(21)97391-6033',
    hobbies: ['programar', 'jogar', 'assistir séries', 'cuidar da filha', 'ficar com a esposa'],
};

// console.log(dadosPessoais.nome)
// console.log(dadosPessoais.telefone)
//  const {nome, sobrenome, idade, endereco, telefone, hobbies } = dadosPessoais;
// console.log(hobbies)
// console.log(nome, idade, endereco)

// const novoObjeto = {
//  ...dadosPessoais,
//     sexo: 'masculino',
// };
// console.log(novoObjeto)
for (i = 0; i < dadosPessoais.hobbies.length; i++) {
    console.log([i] + " : " + dadosPessoais.hobbies[i])
}
// for (let hobby of hobbies){
    // console.log(hobby + " : " + dadosPessoais.hobbies[hobby])
// }