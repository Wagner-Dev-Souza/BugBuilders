/**
 * Exercício 10
 * ------------ 
 * Crie uma função chamada maiorElemento que receberá um array de inteiros e
 * deverá retornaro maior número presente nesse array:
 * Ex: [4, 9, 2, 1, 5, 19, 62, 32, 7, 47]
 * Resultado esperado: 62
 */

function maiorElemento(array){
    let maiorNumero = 0;
    array.forEach((elemento, i) => {
        i == 0 ? maiorNumero = array[0]:'';        
        maiorNumero < elemento ? maiorNumero = elemento : '';
    });
    return maiorNumero
};
console.log(maiorElemento([4, 9, 2, 1, 5, 19, 62, 32, 7, 47]))