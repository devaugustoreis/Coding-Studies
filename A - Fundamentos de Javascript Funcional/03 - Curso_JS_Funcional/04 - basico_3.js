// Arrow Function
const boaNoite = () => console.log('Boa noite!')
boaNoite()

const saudacao = nome => `Olá, ${nome}!`
console.log(saudacao('Augusto'))

const somar = numbersArray => {
    let total = 0
    for (let n of numbersArray) {
        total += n
    }
    return total
}

console.log(somar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

// "..." is the syntaxe of Rest Parameter. 
// Rest gets all the parameteres informed and treat them as an array.
const multiplicar = (...numbers) => {
    let total = 1
    for (let n of numbers) {
        total *= n
    }
    return total
}

console.log(multiplicar(1, 2, 3, 4))

const potencia = base => exp => Math.pow(base, exp)

console.log(potencia(2)(5))

const numeros = [1, 2, 3]
// numeros.log() // Will give an error because there is no "log" function in Array class (and "numeros" is an array).

// In JS, we can create new functions/atributes inside classes with prototype.
// "This" can be used to reference the instance of the class.
Array.prototype.log = function() {
    console.log(this)
}

numeros.log()

Array.prototype.ultimo = function() {
    console.log(this[this.length - 1])
}

numeros.ultimo()

// Obs.: When we utilize arrow functions, we cannot utilize "this" to access the instance of the class.