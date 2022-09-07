/* 
Desenvolva uma função que receba como parametro um numero de 0 a 10. Internamente, na função, gere um numero aleatorio de 1a 10. A função deverá retornar se o parametro de entrada foi igual ao numero sorteado internamente. Se o valor fornecido foi o sorteado, retorne "parabens! O número sorteado foi X.".Se não for igual, retore "Que pena! O numero sorteado foi X.
*/

function  numeroDaSorte(num){
    let sorteado = Math.floor(Math.random() * 10 + 1);
    if (num == sorteado) {
        return `Parábens!! O numero sorteado foi ${sorteado}`;
    }else{
        return `Que pena! O numero sorteado foi ${sorteado}`;
    }
}

console.log(numeroDaSorte(1))
console.log(numeroDaSorte(3))
console.log(numeroDaSorte(5))
console.log(numeroDaSorte(6))
console.log(numeroDaSorte(7))
console.log(numeroDaSorte(8))