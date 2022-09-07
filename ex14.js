/*
Elabore uma função que receba um array de números e retorne um array que tenha todos os numeros que são pares e tenham indices pares
*/

function parIndicePar(vetor){
    let auxiliar = [];
    for(let i = 0; i< vetor.length; i+=2){
        if(vetor[i]%2 == 0){
            auxiliar.push(vetor[i]);
        }
    }
    return auxiliar;
}

console.log(parIndicePar([1,2,4,4,5,6,7,8]))