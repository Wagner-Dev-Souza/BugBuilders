const ingredientes = [
    {
        name: "Ervilha",
        status: "raw",
        isRotten: false,
    },
    {
        name: "Tomate",
        status: "raw",
        isRotten: false,
    },
    {
        name: "Repolho",
        status: "cooked",
        isRotten: true,
    },
    {
        name: "Cenoura",
        status: "raw",
        isRotten: false,
    },
    {
        name: "Carne de perereca",
        status: "cooked",
        isRotten: true,
    },
    {
        name: "Carne de Peru",
        status: "raw",
        isRotten: false,
    },
    {
        name: "Cutelho",
        status: "raw",
        isRotten: false,
    },
    {
        name: "Pentelho defumado",
        status: "raw",
        isRotten: true,
    },
    {
        name: "Tesão de vaca",
        status: "to drink",
        isRotten: false,
    },
    {
        name: "Arroz",
        status: "cooked",
        isRotten: false,
    },
    {
        name: "Ovos",
        status: "raw",
        isRotten: true,
    },
    {
        name: "Pé de galinha",
        status: "raw",
        isRotten: false,
    },
    {
        name: "Molho de tomate enlatado",
        status: "raw",
        isRotten: false,
    },
    {
        name: "Urina de Dragão",
        status: "to drink",
        isRotten: true,
    },
    {
        name: "Vômito de porco",
        status: "to drink",
        isRotten: false,
    },
    {
        name: "Chá de miápica",
        status: "to drink",
        isRotten: false,
    }
]

/**
 * Exercício 10
 * ------------
 * Crie uma função que retorne um objeto contendo os ingredientes que usaremos no ensopado(stew) e também os que serão usados como acompanhamento.
 * Condições:
 *  1. Ingredientes podres serão descartados
 *  2. Ingredientes cozidos(cooked) serão os acompanhamentos(garnish)
 *  3. Ingredientes crus(raw) serão cozidos no ensopado
 *  4. Ingredientes que são para beber
 * Ex:
 *  {
 *    garnish: [todos os ingredientes cozidos],
 *    stew: [todos os ingredientes utilizados no ensopado],
 *    toDrink: [todas as bebidas da mesa]
 *  }
 */
let forStew = (array) => {
    let ingredients = { garnish: [], stew: [], toDrink: [] };
    array.forEach(element => {
        element.status === "to drink" && element.isRotten === false ? ingredients.toDrink.push(element.name) : '';
        element.status === "raw" && element.isRotten === false ? ingredients.stew.push(element.name) : '';
        element.status === "cooked" && element.isRotten === false ? ingredients.garnish.push(element.name) : '';
    });
    return ingredients
}

console.log(forStew(ingredientes))