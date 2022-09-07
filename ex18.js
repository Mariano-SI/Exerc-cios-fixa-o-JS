/* 
Numa aplicação de investimentos financeiros da qual voce faz parte da equipe de desenvolvimento, pretende-se adicionar a funcionalidade de calcular a media de um conjunto de numeros informados pelo usuario. 
Com o intuito de fazer esse calculo, crie uma função que receba um array com a quantidade indeterminada de numeros e retorne a media simples
*/

function calcularMedia(vetor){
    let acumulador = 0;
    vetor.forEach(element => {
        acumulador += element;
    });
    return acumulador/vetor.length;
}
console.log(calcularMedia([0,10]));
console.log(calcularMedia([1,2,3,4,5]))