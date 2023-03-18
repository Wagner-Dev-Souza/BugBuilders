/**
 * Exercício 16
 * ------------ 
 * Crie uma função que faça o mesmo que a função filter do JS
 */

function meuFilter(array, busca){
    let novoArray =[];
    array.forEach(element => {
        element == busca ? novoArray.push(element) : '';
    });
    return novoArray
}

console.log(meuFilter([1, 2, 3 ,4], 2))