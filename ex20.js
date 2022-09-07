/* 
Crie uma fução que receba um arrayde números e retorne o menor numero desse array
*/

function menorNumero(vetor){
    let menor = vetor[0];
    vetor.forEach(element => {
        if (element < menor) {
            menor = element;
        }
    });
    return menor;
}

console.log(menorNumero([10,5,35,65]));
console.log(menorNumero([5,-15,50,3]));
