/*
Escreva uma função que receba um array de números e retorne a soma de todos esses numeros
*/

function somaArray(vetor) {
  let acumulador = 0;
  vetor.forEach((element) => {
    acumulador += element;
  });
  return acumulador;
}
let arrayTeste = [10, 10, 10];
console.log(somaArray(arrayTeste));
