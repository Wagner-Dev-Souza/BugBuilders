/**
 * Exercício 9
 * ------------ 
 * Crie uma função chamada contadoraDeLetra que receberá 2 parametros. Um texto ou uma palavra e uma letra
 * para ser buscada. Com isso deverá retornar quantidade da letra informada, seguindo o seguinte padrão de retorno:
 * "Foram encontrado(s) X letras Y no texto/palavra informada"
 * 
 */

function contadorDeLetras(texto, letraProcurada){
    let quantidade = [...texto.toLowerCase()].filter(letra => letra === letraProcurada).length;
    return `Foram encontrados "${quantidade}" letras "${letraProcurada}" no texto/palavra informada`
}

console.log(contadorDeLetras("O homem é o lobo do homem", "o"))