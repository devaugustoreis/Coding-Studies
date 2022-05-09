function bomDia() {
    console.log("Bom dia!")
}

// This function can be acessed through the constant or by its name.
const nomeConstante = function nomeFuncao() {
    console.log('Acessei a função!')
}

// However the more common for Function Expressions is to use Anonymous Functions.
const boaTarde = function() {
    console.log('Boa Tarde!')
}

// 1) Passing a function as a parameter to another function.
function executarQualquerFuncao(fn) {
    if (typeof fn == 'function') {
        fn()
    } else console.log('O parâmetro passado não é uma função.')
}

executarQualquerFuncao(3)
executarQualquerFuncao(bomDia)
executarQualquerFuncao(boaTarde)

// 2) Returning a function from another function.

function potencia(base) {
    return function(exp) {
        return Math.pow(base, exp)
    }
}

const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))

const resultadoPot = potencia(3)(4)
console.log(resultadoPot)