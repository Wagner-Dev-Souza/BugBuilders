/**
 * Exercício 15
 * ------------ 
 * Crie uma função que faça o mesmo que a função map do JS
 */

function meuMap(array, alteracao){
    let novoArray = [];
    array.forEach(element => {
        novoArray.push(element + alteracao)
    });
    return novoArray
}
console.log(meuMap([1,2,3,4], -2))