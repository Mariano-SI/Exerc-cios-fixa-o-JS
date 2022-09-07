/* 
Crie uma função que receba dois numeros e retorne se o primeiro é maior ou igual ao segundo.Deverá diferenciar numero de string
*/

function maiorQueSegundo(primeiro, segundo){
    if(typeof primeiro != typeof segundo){
        return "Os tipos devem ser númericos.";
    }

    return primeiro >= segundo;
}

let teste1 = maiorQueSegundo(15, "11");
console.log(teste1);