/* 
Voce esta trabalhando numa aplicação pessoal de controle de despesas. Na tela principal do app é possivel adicionar seus gastos, informando nome, categoria e preço. Uma funcionalidade que voce está desenvolvendo no momento é a de somar o total das despesas.

crie uma função que receba um array de objetos produtos e retorne o total das despesas
*/

function totalDespesas(vetor){
    let despesas = 0;
    vetor.forEach(element => {
        despesas+=element.preco;
    });

    return despesas;
}

let teste = [{nome:"Jornal online", categoria:"Informação", preco:89.99},{nome:"Cinema", categoria:"Lazer", preco:150}];

console.log(totalDespesas(teste))