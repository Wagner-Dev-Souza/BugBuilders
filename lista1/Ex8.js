/**
 * Exercício 8
 * ------------ 
 * Crie uma função chamada contadoraDeAs que receberá um texto ou uma palavra como parametro e
 * deverá retornar quantidade de letras A ou a, seguindo o seguinte padrão de retorno:
 * "Foram encontrado(s) X letras A no texto/palavra informada"
 */

function contadorDeAs (texto) {
    const letra = "a"
    let quantidade = 0
    for (let i = 0; i < texto.length; i++) {
        if (texto[i].toLowerCase() == letra) {
            quantidade++
        }
    }
    return `Foram encontrados ${quantidade} letras A no texto/palavra informada"`
}
console.log(contadorDeAs("Wagner"))

