/*
Desenvolva uma função que recebe um object como parametro e retorna um array de arrays onde cada elemento é formado pelo conjunto chave/valor do objeto.
*/

function objetoParaArray(objeto) {
  const vetor = [];
  for (const propriedade in objeto) {
    vetor.push([propriedade, objeto[propriedade]]);
  }
  return vetor;
}

let teste = {
  nome: "Maria",
  profissao: "Desenvolvedora",
};

console.log(objetoParaArray(teste));
