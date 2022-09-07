/*
Desenvolva uma função que receba dois parametros, um é a quantidade de horas trabalhadas por um funcionario num mes e o outro quanro ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$X" em que X é o quanto o funcionário ganhou no mês
*/

function caclcularSalario(horasTrabalhadas, valorHora){
    return `Salário igual a R$ ${horasTrabalhadas* valorHora}.`
}

let teste = caclcularSalario(150, 40.5);
console.log(teste);