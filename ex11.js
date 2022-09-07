/*
Escreva uma função que receba um objeto como primeiro argumento e como segundo argumento, o nome de um propriedade contida no objeto. Em seguida, retorne uma cópia desse objeto sem a propriedade especificada no segundo parametro.
*/

function removePropriedade(objeto, prop){
    let novo = Object.assign({}, objeto);
    delete novo[prop];
    return novo;
}


const original={
    "prop1": "valor1",
    "prop2": "valor2",
    "prop3": "valor3"
}
let teste = removePropriedade(original,"prop1");

console.log(original)
console.log(teste)
