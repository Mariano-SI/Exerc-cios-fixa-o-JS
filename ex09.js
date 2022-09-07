/*
Elabore uma função que recebe um número como parametro e retorne uma string com o simbolo "+" onde o mais se repete de acordo com a quantidade especificada por parametro
*/

function simboloMais(quantidade) {
  let frase = " ";
  for (let i = 0; i < quantidade; i++) {
    frase+="+";
  }
  return frase;
}

console.log(simboloMais(8));
