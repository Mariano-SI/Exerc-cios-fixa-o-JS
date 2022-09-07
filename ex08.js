/*Escreva uma função que receba dois parametros. O primeiro é o elemento que repetirá e o segundo quantas vezes o elemento irá repertir. Retorne um array com esse preenchhimento */

function repetir(elemento, repeticoes){
    let vetor = Array()
    for(let i = 0; i < repeticoes; i++){
        vetor.push(elemento)
    }
    return vetor;
}


console.log(repetir(7,3))