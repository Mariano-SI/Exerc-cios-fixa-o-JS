/* 
Escreva uma função que receba um valor booleano ou númerico. Se o pârametro for booleano, o retorno da função deve ser seu inverso, ex(false retorna true). Se o parametro for do tipo numerico, o retorno será o numero com sinal trocado(positivo vira negativo). Se o parametro de entrada não for de nenhum dos tipos acima, retorne "booleano ou numero esperados, mas o parametro é do tipo X"
*/

function inverso(boolOrNum){
    if (typeof boolOrNum == "number") {
        return boolOrNum * -1;
    }
    else if(typeof boolOrNum == "boolean"){
        return !boolOrNum;
    }
    else{
        return(`Valor booleano ou numérico esperado, mas o parâmetro fornecido é do tipo ${typeof boolOrNum}.`)
    }

}

let teste1 = inverso(2);
let teste2 = inverso(false);
let teste3 = inverso("Mariano")

console.log(teste1);
console.log(teste2);
console.log(teste3);