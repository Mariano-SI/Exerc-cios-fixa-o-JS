/* 
Faça uma função que receba a base e altura de um triangulo e retorne a área desse triangulo. A precisao deverá ser de duas casas decimais, arredondadno se necessario

formula base x altura/2
*/

function areaDoTriangulo(base, altura){
    let area = (base*altura)/2;
    return area.toFixed(2)
}

console.log(areaDoTriangulo(10,15));
console.log(areaDoTriangulo(7,9));