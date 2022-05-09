// FUNCTION DECLARATION

// No params, No return
function sayHello() {
    console.log('Hello!')
}

sayHello()


// With params, No return
function sayHelloTo(name) {
    console.log(`Hello, ${name}!`)
}

sayHelloTo('Augusto')


// No params, with return
function returnHi() {
    return 'Hi'
}

console.log(returnHi())


// With params, with return
function returnHiTo(name) {
    return `Hi ${name}!`
}

console.log(returnHiTo('Augusto'))