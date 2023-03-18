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
 * Exercício 9
 * ------------
 * Crie uma função que retorne um objeto contendo os ingredientes bons e ruins
 * Ex:
 *  {
 *    good: [todos os ingredientes bons],
 *    rottens: [todos os ingredientes podres]
 *  }
 */

// const IngredientsForType = (array) => {
//     const Ingredients = {}; //key: value
//     for (i = 0; i < array.length; i++) {
//       let hasTrue = Object.keys(Ingredients).find((x) => x === "goods" && x === "rottens");

//       if (hasTrue) {
//         Ingredients[array[i].isRotten] === false ? Ingredients.goods.push(array[i].name) : Ingredients.rottens.push(array[i].name);
//       } else {
//         [array[i].isRotten] === false ? Object.assign(Ingredients, { "goods" : [array[i].name] }) : Object.assign(Ingredients, { "rottens" : [array[i].name] });
//       }
//     }
//     return Ingredients
//  }
//   console.log(IngredientsForType(ingredientes))

const ingredientsForType = (array) => {
    const ingredients = {"goods": [], "rottens": []};
    array.forEach(element => {
    element.isRotten === false ? ingredients.goods.push(element.name) : ingredients.rottens.push(element.name);
    });
    return ingredients
}

console.log(ingredientsForType(ingredientes))