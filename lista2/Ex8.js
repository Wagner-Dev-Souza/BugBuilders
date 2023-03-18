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
 * Exercício 8
 * ------------
 * Crie uma função que retorne todos os ingredientes crus(raw) que não estejam podres(rotten)
 */

function crusNpodres (array) {
    let coisas = [];
    array.forEach(element => {
        element.status === "raw" && element.isRotten === false ? coisas.push(element.name) : '';
    });
    return coisas
}

console.log(crusNpodres(ingredientes))