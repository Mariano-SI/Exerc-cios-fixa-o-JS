/* 
Desenvolva uma função que receba dois numeros inteiros não negativos e realiza a multiplcação deles sem usar o operador *
*/


function multiplica(num1, num2){
    let acumula = 0;
    for (let i = 0; i < num1; i++) {
        acumula += num2;
    }
    return acumula;
}

console.log(multiplica(5,5));