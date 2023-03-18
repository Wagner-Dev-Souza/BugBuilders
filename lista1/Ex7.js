/**
 * Exercício 7
 * ------------ 
 * Crie uma função chamada converteTemperatura que recebe 2 parametros. O primeiro é uma string
 * que deverá ser C ou F, correspondente à escala da temperatura. O segundo parametro será a temperatura em si. 
 * Se receber C deverá converter a temperatura recebida para Celsius.
 * Se receber F deverá converter a temperatura recebida para Farenheit.
 * O retorno deverá seguir o padrão: "Temperatura X da escala XPTO corresponde a temperatura Y na escala XPTY"
 * Fórmula:
 * 1. Celsius para Farenheit: T * 9/5 + 32 onde T é a temperatura em celsius
 * 2. Farenheit para Celsius: (T - 32) * 5/9 onde T é a temperatura em farenheit
 */

function converteTemperatura(escala, valor) {
    if (escala == "C") {
        return `A temperatura em Celsius é ${(valor-32)*5/9}`;
    }else if (escala == "F") {
        return `A temperatura em Farenheit é ${valor*9/5+32}`;        
    }
}
console.log(converteTemperatura("C", 86))