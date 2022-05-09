// Calcule
function somar(a) {
    return function(b) {
        return function(c) {
            return a + b + c
        }
    }
}

console.log(somar(3)(4)(5))

function calcular(a) {
    return function(b) {
        return function(fn) {
            return fn(a, b)
        }
    }
}

const soma = function (v1, v2) {
    return v1 + v2
}

const subtracao = function (v1, v2) {
    return v1 - v2
}

const multiplicacao = function (v1, v2) {
    return v1 * v2
}

let resultado = calcular(3)(7)(soma)
console.log(resultado)
resultado = calcular(3)(7)(subtracao)
console.log(resultado)
resultado = calcular(3)(7)(multiplicacao)
console.log(resultado)