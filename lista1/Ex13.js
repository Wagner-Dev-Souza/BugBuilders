/**
 * Exercício 13
 * ------------
 * 
 * Dado um array de números
 * [30, 3, 32, 57, 70, 23, 104]
 * 
 * 1. Retorne um array com o dobro dos números do primeiro array.
 *    Resultado Esperado: [60, 6, 64, 114, 140, 46, 208]
 * 
 * 2. Retorne os números pares do array multiplicados por 10
 *    Resultado Esperado: [ 300, 320, 700, 1040 ]
 */

function retornaArray (array) {
    let dobro = []
    let pares10 = []
    array.forEach(element => {
        dobro.push(element * 2)
        element % 2 == 0 ? pares10.push(element * 10) : ' ';   
    });
     return {dobro, pares10}
}

console.log(retornaArray([30, 3, 32, 57, 70, 23, 104]))