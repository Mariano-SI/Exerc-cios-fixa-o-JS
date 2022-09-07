/*
Crie uma função que receba um array de elementos e retorne um array somente com os numeros presentes no array passado por parametro
*/


function somenteNums(vetor){
    return vetor.filter((num)=> typeof num == "number");
}

let teste = ["Javascript", 1, "3", "Web", 20];
let teste2 = ["a", "c"];
console.log(somenteNums(teste));
console.log(somenteNums(teste2));