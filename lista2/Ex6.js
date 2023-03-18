const pessoas = [
    {
        nome: "Deyvison",
        sports: ["futebol", "siririca", "arremesso de coco"]
    }, 
 {
        nome: "Raphael",
        sports: ["volei", "siririca", "sentada violenta"]
    }, 
  {
        nome: "Wagner",
        sports: ["futebol", "curirica", "arremesso de coco"]
    }
 ]

 const soSiririca = (lista) => {
    const nomes = [];
    lista.forEach(pessoa => {
       pessoa.sports.forEach(sport => {
        sport === "siririca" ? nomes.push(pessoa.nome) : "";
       }) 
    })
    return nomes
 }
 console.log(soSiririca(pessoas))