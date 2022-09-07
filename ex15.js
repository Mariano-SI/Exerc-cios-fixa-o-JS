/*
Para determinar se um ano é bissexto, é necessário saber se ele é multiplo de 4. Não pode ser multiplo de 100, exceto se for também multiplo de 400.
Desenvolva uma função que recebe um numero correspondendte a um ano e diga se ele é bissexto ou não.
*/

function bissexto(num){
    const mult4 = num %4 ==0; //tem que ser true
    const mult100 = num%100 == 0; //tem que ser false
    const mult400 = num%400 ==0; //tem que ser true

    return (mult4 && !mult100) || mult400;
}

console.log(bissexto(2016));
console.log(bissexto(2015));
console.log(bissexto(1600));
