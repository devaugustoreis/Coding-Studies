function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => resolve(), tempo)
    })
}

/*
esperarPor(1000)
.then(() => console.log('Executando promise 1...'))
.then(esperarPor)
.then(() => console.log('Executando promise 2...'))
.then(esperarPor)
.then(() => console.log('Executando promise 3...'))
*/

// Console.logs will be instantly executed, even though the 4000ms of "esperarPor" functions are still being executed.
function executar() {
    esperarPor(4000)
    console.log('Executando 1')
    esperarPor(4000)
    console.log('Executando 2')
    esperarPor(4000)
    console.log('Executando 3')
}

executar()

// Obs.: In node, we can only use await inside async functions.
// When you use "await", it only executes the next line when the actual line finishes executing.
// "await" permits that you wait a promise to be resolved without using "then" method.
async function executarAsyncAwait() {
    await esperarPor(4000)
    console.log('Async/Await 1')
    await esperarPor(4000)
    console.log('Async/Await 2')
    await esperarPor(4000)
    console.log('Async/Await 3')
}

executarAsyncAwait()

// async functions always return promises. 
function atribuirValor(tempo = 3000) {
    return new Promise(function(resolve) {
        setTimeout(() => resolve(10), tempo)
    })
}

// "v" is still pendent in the next line.
const v = atribuirValor()
console.log(v)

// You need to use "then" in these cases. It will print the value as soon as the promise finishes executing.
atribuirValor().then(v => console.log(`Utilizando then: ${v}`))

// As an alternative, you could encapsulate the code in an async function to use "await" command.
async function executandoAtribuicaoValor() {
    const resposta = await atribuirValor()
    console.log(`Dentro da função async: ${resposta}`)
}

executandoAtribuicaoValor()