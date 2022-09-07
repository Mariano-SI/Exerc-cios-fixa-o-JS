/*
Crie uma função que receba quatro numeros como parametros (numero, minimo, maximo, inclusivo) e retorno se o parametro numero esta entre o minimo e maximo.Quando o parametro inclusivo for true, devemos considerar que numero pode ser igual ao minimo e maximo, mas por por padrão esse parametro deve ser false
*/

function estaEntre(numero, minimo, maximo, inclusivo = false) {
  if (inclusivo === true) {
    return numero >= minimo && numero <= maximo;
  } else {
    return numero > minimo && numero < maximo;
  }
}

let teste1 = estaEntre(50, 50, 100, true);
console.log(teste1);
let teste2 = estaEntre(50, 50, 100);
console.log(teste2);
