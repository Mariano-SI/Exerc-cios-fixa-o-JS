/*
Crie uma função que receba um array e retorne o primeiro e o ultimo elemento desse array em forma de um novo array
*/


function primeiroEUltimo(vetor){
    let primeiro = vetor[0]; // primeiro elemento
    let ultimo = vetor.at(-1); //ultimo
    let novo = [];
    novo.push(primeiro, ultimo)
    return novo;
}

console.log(primeiroEUltimo([3,5,6]))

console.log(primeiroEUltimo(["Mariano", 14, 21421, "Batata", true]))