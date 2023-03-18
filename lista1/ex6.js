/**
 * Exercício 6
 * ------------
 * Crie uma função chamada calculaIdadeDoCao que receba a idade do seu cão e retorne um texto 
 * de acordo com a idade dele em anos humanos, considerando que 1 ano humano corresponde há 7 anos de um cão.
 * exemplo de retorno: "Seu cão tem X anos em anos de cachorro!"
 */

function calculaIdadeDoCao(idadeDoCao){
    return `Seu cão tem ${idadeDoCao * 7} anos em anos de cachorro!` 
}
console.log(calculaIdadeDoCao(9))

