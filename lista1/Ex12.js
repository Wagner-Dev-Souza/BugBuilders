/**
 * Exercício 12
 * ------------ 
 * Crie uma função que receba uma palavra e retorne o inverso dela
 * Ex: amor -> roma, casa -> asac, ...
 */

function palindromo (texto){
    return texto.split('').reverse().join('')
}
console.log(palindromo('amor'))