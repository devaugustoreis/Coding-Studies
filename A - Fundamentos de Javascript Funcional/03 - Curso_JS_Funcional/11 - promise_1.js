let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa(3)
})

console.log(p)

// Function is only called when the promise is fullfiled.
p.then(function(valor) {
    console.log(valor)
})

// Promises can generate only a single value. (Example below doesn't work as intended)
let e = new Promise(function(cumprirPromessa) {
    cumprirPromessa(3, 4)
})

// valor2 will be undefined.
e.then(function(valor, valor2) {
    console.log(valor, valor2)
})

// You can pass multiple values in a single array or object. Example below.
let e2 = new Promise(function(cumprirPromessa) {
    cumprirPromessa({
        x: 3,
        y: 4
    })
})

// Simplifying with arrow functions.
e2.then(valor => console.log(valor))


let array = new Promise(function(cumprirPromessa) {
    cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

// You can call "then" multiple times in the same object.
array
    .then(valor => valor[0]) // In the next line, "primeiro" will be "Ana"
    .then(primeiro => primeiro[0]) // In the next line, "letra" will be "A"
    .then(letra => letra.toLowerCase()) // In the next line "letraMinuscula" will be "a"
    .then(letraMinuscula => console.log(letraMinuscula))


// 'then' receives a function as a parameter, so you can create reusable functions.
function segundoElemento(array) {
    return array[1]
}

function segundaLetra(string) {
    return string[1]
}

// You can also use arrow functions normally.
const letraMaiuscula = letra => letra.toUpperCase()

array
    .then(segundoElemento)
    .then(segundaLetra)
    .then(letraMaiuscula)
    // .then(v => console.log(v))
    .then(console.log) // The UpperCase letter is alredy received as a parameter because of the "then" above.