const personagens = [
    {
       "type":"WARRIOR",
       "full_name":"Zezinho Espadeiro",
       "short_name":"Espada dourada",
       "advantage":"+15 de dano ao tomar uma dose de Dreher",
       "duration":"2 minutos",
       "powers":[
          {
             "rarity":"COMMON",
             "name":"Calça de saco de batata",
             "power": "10"
          },
          {
            "rarity":"COMMON",
            "name":"Camisa florida de seda",
            "power": "30"
         },
         {
            "rarity":"UNCOMMON",
            "name":"Cordão de prata com imagem de São Jorge",
            "power": "60"
         },
         {
            "rarity":"RARE",
            "name":"Chinelo Rider",
            "power": "80"
         }
       ],
       "characteristics":[
          {
             "active":true,
             "text":"Se ficar sóbreo reduz a stamina",
          },
          {
             "active":true,
             "text":"É vulnerável à azeitona de bar",
          },
       ]
    },
    {
        "type":"MYSTIQUE",
        "full_name":"João II da mesa redonda",
        "short_name":"Joãozinho mind blow",
        "advantage":"+10 de poder psíquico ao usar camisa da Shiva",
        "duration":"30 segundos",
        "powers":[
           {
              "rarity":"COMMON",
              "name":"Bata dos rolling stones",
              "power": "44"
           },
           {
             "rarity":"RARE",
             "name":"Colar de pedra ametista",
             "power": "87"
          },
          {
             "rarity":"LEGENDARY",
             "name":"Chinelo de tiras de pneu",
             "power": "110"
          },
          {
             "rarity":"RARE",
             "name":"Turbante roxo de cetim",
             "power": "73"
          }
        ],
        "characteristics":[
           {
              "active":true,
              "text":"Cada cm de barba, aumenta a defesa em 2pt",
           },
           {
              "active":true,
              "text":"Ao andar perde a habilidade de ler mentes",
           },
           {
            "active":false,
            "text":"Ao receber dano, chorar que nem um bebê causa pena e sofrimento ao inimigo",
            },
        ]
    },
    {
        "type":"ORC",
        "full_name":"Chu Rek",
        "short_name":"Arrrg",
        "advantage":"+3 de dano ao atacar com meleca",
        "duration":"2 segundos",
        "powers":[
           {
              "rarity":"COMMON",
              "name":"Anel de lata de ervilha",
              "power": "15"
           },
           {
             "rarity":"RARE",
             "name":"Calça de couro surrada",
             "power": "32"
          },
          {
             "rarity":"RARE",
             "name":"Sapato catuca Jesus",
             "power": "79"
          },
          {
             "rarity":"LEGENDARY",
             "name":"Suspensório de rabo de macaco",
             "power": "110"
          }
        ],
        "characteristics":[
           {
              "active":true,
              "text":"Comida enlatada aumenta resistência à dano. 4 de shield por lata",
           },
           {
              "active":false,
              "text":"Ao beber gemada, atira 3 melecas no lugar de uma",
           },
           {
            "active":true,
            "text":"Seu peido cria uma fumaça que atordoa o inimigo",
            },
        ]
    },
    {
        "type":"WARRIOR",
        "full_name":"Paul Laden Tro",
        "short_name":"Paulete",
        "advantage":"+20 de energia elétrica tomar redbull",
        "duration":"60 segundos",
        "powers":[
           {
              "rarity":"RARE",
              "name":"Pack de preservativos sabor tutti-frutti",
              "power": "90"
           },
           {
             "rarity":"LEGENDARY",
             "name":"Cintaralha de metal com espada embutida",
             "power": "100"
          },
          {
             "rarity":"RARE",
             "name":"Chicote de cisal",
             "power": "78"
          },
          {
             "rarity":"COMMON",
             "name":"Vestido do FIUK",
             "power": "5"
          }
        ],
        "characteristics":[
           {
              "active":true,
              "text":"Causa lentidão ao usar lançar preservativo nos inimigos",
           },
           {
              "active":false,
              "text":"Ao tomar redbul, sua espada fica energizada",
           },
           {
            "active":true,
            "text":"Imitar o pablo vittar causa confusão nos inimigos",
            },
        ]
    },
    {
        "type":"MYSTIQUE",
        "full_name":"Tasha Padona",
        "short_name":"Tasha",
        "advantage":"+20 de dano de fogo ao beber marimbondo",
        "duration":"15 segundos",
        "powers":[
           {
              "rarity":"RARE",
              "name":"Garrafa bujudinha de 51",
              "power": "54"
           },
           {
             "rarity":"LEGENDARY",
             "name":"Patinete guidon de piroca",
             "power": "98"
          },
          {
             "rarity":"RARE",
             "name":"Colar de anel de lata de Cintra",
             "power": "82"
          },
          {
            "rarity":"RARE",
            "name":"Isqueiro bic rosa",
            "power": "69"
         },
        ],
        "characteristics":[
           {
              "active":true,
              "text":"Ao arrotar, seu bafo de álcool somado ao seu isqueiro causam explosão",
           },
           {
              "active":false,
              "text":"Se dirigir sóbrea, recebe dano por colisão a cada 20 segundos",
           },
           {
            "active":true,
            "text":"Ao ouvir Reginaldo Rossi, aumenta regeneração em 10%",
            },
        ]
    },
];

/**
 * Exercício 3
 * ------------ 
 * Crie uma função que retorne apenas os personagens que possuam poderes cuja raridade LEGENDARY
 */

const soLegendaryPower = (lista) => {
   const nomes = [];
   lista.some(item => {
      item.powers.find(power => {
         power.rarity === "LEGENDARY" ?  nomes.push(item.full_name) : '';
      }) 
   });
   return nomes;
};
console.log(soLegendaryPower(personagens))


