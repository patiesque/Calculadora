function soma(num1, num2) {
    return num1 + num2
}

function subtracao(num1, num2) {
    return num1 - num2
}

function multiplicacao(num1, num2){
    return num1 * num2
}

function divisao(num1, num2) {
    if(num2 === 0){
        return "Erro, não pode dividir por 0"
    }

    return num1 / num2
}

module.exports = {
    soma,
    subtracao, 
    multiplicacao,
    divisao
}