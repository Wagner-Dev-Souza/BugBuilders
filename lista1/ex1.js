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
 */

const dadosPessoais = {
    nome: 'Wagner',
    sobrenome: 'Souza',
    idade: 37,
    endereco: 'Rua Dracy Ribeiro 6',
    telefone: '(21)97391-6033',
    hobbies: ['programar', 'jogar', 'assistir séries', 'cuidar da filha', 'ficar com a esposa'],
};

// 1. Imprima o campo nome a partir desse objeto.
console.log(dadosPessoais.nome)
// 2. Imprima o campo telefone a partir desse objeto.
console.log(dadosPessoais.telefone)
// 3. Usando a técnica destructuring capture e imprima nome, idade e endereço desse objeto.
const {nome, sobrenome, idade, endereco, telefone, hobbies } = dadosPessoais;
console.log(nome, idade, endereco)
// 4. Usando a técnica de spread operator, crie um novo objeto a partir do objeto existente adicionando o campo sexo.
const novoObjeto = {
 ...dadosPessoais,
    sexo: 'masculino',
};
// 5. Usando uma estrutura de repetição, imprima todos os hobbies desse objeto.
console.log(novoObjeto)
for (i = 0; i < dadosPessoais.hobbies.length; i++) {
    console.log([i] + " : " + dadosPessoais.hobbies[i])
}