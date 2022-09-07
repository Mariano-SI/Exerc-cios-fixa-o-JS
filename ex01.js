/*
Crie uma função que retorne a strinf "Olá" concatenada com um argumento text (a  ser passado por parametro) e com ponto de exclamação no final.
*/
//! Normal Function:

const cumprimentar = function(text){
    return `Olá ${text}!`;
}

let teste = cumprimentar("Mariano");
console.log(teste);

//! Arrow Function:

const cumprimentar2 = (text)=>`Olá ${text}!`;

let teste2 = cumprimentar2("Mari");
console.log(teste2);